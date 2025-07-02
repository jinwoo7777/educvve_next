import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // 로그인/회원가입 페이지 접근 시 이미 로그인된 사용자는 대시보드로 리다이렉트
  if (req.nextUrl.pathname.startsWith('/signin') || req.nextUrl.pathname.startsWith('/signup')) {
    if (session) {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = '/dashboard';
      return NextResponse.redirect(redirectUrl);
    }
  }

  // 보호된 라우트 접근 시 로그인되지 않은 사용자는 로그인 페이지로 리다이렉트
  const protectedRoutes = ['/dashboard', '/profile', '/course-management', '/student-management'];
  if (protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
    if (!session) {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = '/signin';
      redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname);
      return NextResponse.redirect(redirectUrl);
    }
  }

  // 관리자 전용 페이지 접근 제어
  const adminRoutes = ['/admin'];
  if (adminRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
    if (!session) {
      // 로그인되지 않은 경우 로그인 페이지로 리다이렉트
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = '/signin';
      redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname);
      return NextResponse.redirect(redirectUrl);
    } else {
      // 로그인은 되어 있지만 관리자 권한 확인
      const { data: userData } = await supabase.auth.getUser();
      
      // 사용자 역할 확인
      const isAdmin = userData?.user?.user_metadata?.role === 'admin';
      
      if (!isAdmin) {
        // 관리자가 아닌 경우 접근 거부 페이지 또는 대시보드로 리다이렉트
        const redirectUrl = req.nextUrl.clone();
        redirectUrl.pathname = '/dashboard';
        return NextResponse.redirect(redirectUrl);
      }
    }
  }

  return res;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api/auth).*)',
  ],
};
