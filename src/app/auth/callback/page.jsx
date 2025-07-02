"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/utils/supabaseClient';
import { Layout } from "@/layouts/Layout";

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [message, setMessage] = useState('인증 처리 중입니다...');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // 디버깅을 위해 URL 파라미터 확인
        console.log('URL 파라미터:', Object.fromEntries(searchParams.entries()));
        
        // 해시 파라미터가 있는지 확인
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        console.log('해시 파라미터:', Object.fromEntries(hashParams.entries()));

        // 1. 먼저 현재 세션 확인
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error('세션 확인 중 오류:', sessionError);
          throw sessionError;
        }

        // 2. 세션이 있으면 사용자 정보 업데이트
        if (sessionData?.session) {
          console.log('세션 확인됨:', sessionData.session);
          
          // 사용자 정보 가져오기
          const { data: userData, error: userError } = await supabase.auth.getUser();
          
          if (userError) {
            console.error('사용자 정보 가져오기 오류:', userError);
            throw userError;
          }
          
          if (userData?.user) {
            console.log('사용자 정보:', userData.user);
            
            console.log('프로필 테이블에 사용자 정보 업데이트 시도...');
            try {
              // 프로필 테이블에 사용자 정보 업데이트
              const { data: profileData, error: profileError } = await supabase
                .from('profiles')
                .upsert({
                  id: userData.user.id,
                  email: userData.user.email,
                  full_name: userData.user.user_metadata?.full_name || '',
                  avatar_url: userData.user.user_metadata?.avatar_url || '',
                  updated_at: new Date().toISOString(),
                }, { onConflict: 'id' });

              if (profileError) {
                console.error('프로필 업데이트 중 오류 발생:', profileError);
                // 프로필 테이블이 없는 경우 오류 로그만 출력하고 계속 진행
                console.log('프로필 테이블 오류가 발생했지만 인증은 성공적으로 진행합니다.');
              } else {
                console.log('프로필 업데이트 성공:', profileData);
              }
            } catch (profileErr) {
              console.error('프로필 업데이트 예외 발생:', profileErr);
              // 프로필 테이블이 없는 경우 오류 로그만 출력하고 계속 진행
              console.log('프로필 테이블 오류가 발생했지만 인증은 성공적으로 진행합니다.');
            }
          }

          setMessage('인증이 완료되었습니다. 리다이렉트 중...');
          setIsLoading(false);
          
          // 대시보드로 리다이렉트
          setTimeout(() => {
            router.push('/dashboard');
          }, 1500);
        } else {
          // 3. 세션이 없는 경우 - URL에서 직접 인증 처리 시도
          console.log('세션이 없음, URL 파라미터로 인증 시도');
          
          // 소셜 로그인 콜백 처리
          const { error: signInError } = await supabase.auth.signInWithOAuth({
            provider: searchParams.get('provider') || 'google',
            options: {
              redirectTo: `${window.location.origin}/auth/callback`,
            },
          });

          if (signInError) {
            console.error('소셜 로그인 처리 오류:', signInError);
            throw signInError;
          }

          setMessage('인증 처리 중입니다. 잠시만 기다려주세요...');
          setIsLoading(true);
        }
      } catch (err) {
        console.error('인증 콜백 처리 중 오류 발생:', err);
        setError('인증 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
        setIsLoading(false);
        
        // 오류 발생 시 로그인 페이지로 리다이렉트
        setTimeout(() => {
          router.push('/signin');
        }, 3000);
      }
    };

    handleAuthCallback();
  }, [router, searchParams]);

  return (
    <Layout breadcrumbTitle="인증 처리" breadcrumbSubtitle="소셜 로그인 인증">
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5 p-5 text-center">
                <h2 className="td_fs_36 td_mb_20">인증 처리</h2>
                <hr className="mb-4" />
                
                {error ? (
                  <div className="alert alert-danger">{error}</div>
                ) : (
                  <div className="alert alert-info">{message}</div>
                )}
                
                {isLoading && (
                  <div className="spinner-border text-primary mt-3" role="status">
                    <span className="visually-hidden">로딩 중...</span>
                  </div>
                )}
                
                {error && (
                  <div className="mt-4">
                    <button 
                      onClick={() => router.push('/signin')} 
                      className="td_btn td_style_1 td_radius_10 td_medium"
                    >
                      <span className="td_btn_in td_white_color td_accent_bg">
                        <span>로그인 페이지로 이동</span>
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="td_height_120 td_height_lg_80" />
      </section>
    </Layout>
  );
}
