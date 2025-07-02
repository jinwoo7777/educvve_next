"use client";

// 동적 렌더링 설정 추가
export const dynamic = 'force-dynamic';
export const runtime = 'edge';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Layout } from "@/layouts/Layout";
import Link from "next/link";
import { supabase } from '@/utils/supabaseClient';
import { extractAuthError } from '@/utils/authErrors';

export default function ConfirmEmail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('이메일을 확인 중입니다...');
  const [error, setError] = useState('');
  const [verified, setVerified] = useState(false);
  const [email, setEmail] = useState('');
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        setLoading(true);
        setError('');
        
        // URL 파라미터 확인 (디버깅용)
        console.log('이메일 확인 URL 파라미터:', {
          token_hash: searchParams.get('token_hash'),
          type: searchParams.get('type'),
          next: searchParams.get('next')
        });
        
        // 먼저 현재 세션을 확인하여 이미 로그인되어 있는지 확인
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error('세션 확인 오류:', sessionError);
          throw sessionError;
        }
        
        if (sessionData?.session) {
          console.log('이미 로그인된 세션 발견:', sessionData.session);
          // 이미 로그인된 상태라면 대시보드로 리다이렉트
          router.push('/dashboard');
          return;
        }

        const token_hash = searchParams.get('token_hash');
        const type = searchParams.get('type');
        const next = searchParams.get('next') || '/dashboard';

        if (!token_hash) {
          setError('인증 토큰이 없습니다. 유효한 이메일 인증 링크를 사용해주세요.');
          setLoading(false);
          return;
        }

        if (type !== 'signup' && type !== 'email') {
          setError('유효하지 않은 인증 유형입니다.');
          setLoading(false);
          return;
        }

        // 이메일 인증 처리
        console.log('이메일 인증 시도:', { token_hash, type });
        const { data, error } = await supabase.auth.verifyOtp({
          token_hash: token_hash,
          type: type === 'signup' ? 'signup' : 'email',
        });

        if (error) {
          console.error('이메일 인증 오류:', error);
          setError(extractAuthError(error));
          setLoading(false);
          return;
        }

        console.log('이메일 인증 성공:', data);

        // 사용자 프로필 정보 가져오기
        if (data?.user?.id) {
          try {
            const { data: profileData, error: profileError } = await supabase
              .from('profiles')
              .select('*')
              .eq('id', data.user.id)
              .single();

            if (profileError) {
              console.error('프로필 정보 조회 오류:', profileError);
              // 프로필 조회 실패해도 인증 자체는 성공으로 처리
            } else {
              console.log('사용자 프로필 정보:', profileData);
            }
          } catch (profileErr) {
            console.error('프로필 조회 중 예외 발생:', profileErr);
            // 프로필 조회 실패해도 인증 자체는 성공으로 처리
          }
        }

        // 인증 성공
        setVerified(true);
        setEmail(data.user?.email || '');
        setMessage('이메일 인증이 완료되었습니다!');
        
        // 3초 후에 로그인 페이지로 리다이렉트
        const timer = setTimeout(() => {
          router.push(`/signin?email_confirmation_sent=true&email=${encodeURIComponent(data.user?.email || '')}`);
        }, 3000);
        
        return () => clearTimeout(timer);
      } catch (err) {
        console.error('이메일 인증 처리 중 오류 발생:', err);
        setError('이메일 인증 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
        
        // 최대 3번까지 자동 재시도
        if (retryCount < 3) {
          console.log(`인증 재시도 (${retryCount + 1}/3)...`);
          setRetryCount(prevCount => prevCount + 1);
          setTimeout(() => verifyEmail(), 1500);
          return;
        }
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [searchParams, router, retryCount]);

  return (
    <Layout breadcrumbTitle="이메일 인증" breadcrumbSubtitle="이메일 인증">
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5 p-5 text-center">
                {loading ? (
                  <div className="d-flex flex-column align-items-center">
                    <div className="spinner-border text-primary mb-3" style={{ width: '3rem', height: '3rem' }} role="status">
                      <span className="visually-hidden">로딩 중...</span>
                    </div>
                    <h3 className="td_fs_24 td_mb_20">이메일 인증을 확인하는 중입니다</h3>
                    <p className="text-muted">잠시만 기다려주세요...</p>
                  </div>
                ) : verified ? (
                  <div>
                    <div className="mb-4">
                      <i className="fas fa-check-circle text-success" style={{ fontSize: '4rem' }}></i>
                    </div>
                    <h3 className="td_fs_28 td_mb_20">이메일 인증이 완료되었습니다!</h3>
                    <p className="td_fs_20 td_mb_30">{email} 계정이 성공적으로 인증되었습니다.</p>
                    <p className="text-muted mb-4">잠시 후 로그인 페이지로 이동합니다...</p>
                    <div className="d-flex gap-3 justify-content-center">
                      <Link href="/signin" className="td_btn td_style_1 td_radius_10 td_medium">
                        <span className="td_btn_in td_white_color td_accent_bg">
                          <span>로그인 바로가기</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-4">
                      <i className="fas fa-exclamation-triangle text-warning" style={{ fontSize: '4rem' }}></i>
                    </div>
                    <h3 className="td_fs_28 td_mb_20">이메일 인증에 실패했습니다</h3>
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}
                    <p className="td_fs_20 td_mb_30">아래 버튼을 클릭하여 다시 시도해주세요.</p>
                    <div className="d-flex gap-3 justify-content-center">
                      <Link href="/signin" className="td_btn td_style_1 td_radius_10 td_medium">
                        <span className="td_btn_in td_white_color td_accent_bg">
                          <span>로그인</span>
                        </span>
                      </Link>
                      <Link href="/signup" className="td_btn td_style_2 td_radius_10 td_medium">
                        <span className="td_btn_in">
                          <span>회원가입</span>
                        </span>
                      </Link>
                    </div>
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
