"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/utils/supabaseClient';
import { Layout } from '@/layouts/Layout';
import Link from 'next/link';

export default function UpdatePassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Check if we have an access token in the URL
    const accessToken = searchParams.get('access_token');
    const refreshToken = searchParams.get('refresh_token');

    if (accessToken && refreshToken) {
      // Set the session from the URL tokens
      supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      }).then(({ data: { session } }) => {
        setSession(session);
      });
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setMessage({ type: 'error', content: '비밀번호가 일치하지 않습니다.' });
      return;
    }

    if (password.length < 6) {
      setMessage({ type: 'error', content: '비밀번호는 최소 6자 이상이어야 합니다.' });
      return;
    }

    setLoading(true);
    setMessage({ type: '', content: '' });

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) throw error;
      
      setMessage({ 
        type: 'success', 
        content: '비밀번호가 성공적으로 변경되었습니다. 로그인 페이지로 이동합니다.' 
      });
      
      // Redirect to login page after 3 seconds
      setTimeout(() => {
        router.push('/signin');
      }, 3000);
      
    } catch (error) {
      console.error('비밀번호 업데이트 오류:', error);
      setMessage({ 
        type: 'error', 
        content: error.message || '비밀번호 변경 중 오류가 발생했습니다.' 
      });
    } finally {
      setLoading(false);
    }
  };

  if (!session) {
    return (
      <Layout breadcrumbTitle="세션 만료" breadcrumbSubtitle="세션이 만료되었습니다">
        <section>
          <div className="td_height_120 td_height_lg_80" />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5 p-5 text-center">
                  <div className="mb-4">
                    <i className="fas fa-exclamation-triangle text-warning" style={{ fontSize: '4rem' }}></i>
                  </div>
                  <h3 className="td_fs_24 td_mb_20">유효하지 않은 링크입니다</h3>
                  <p className="td_fs_18 td_mb_30">
                    비밀번호 재설정 링크가 만료되었거나 유효하지 않습니다. 
                    비밀번호 재설정을 다시 시도해주세요.
                  </p>
                  <Link href="/forgot-password" className="td_btn td_style_1 td_radius_10 td_medium">
                    <span className="td_btn_in td_white_color td_accent_bg">
                      <span>비밀번호 재설정</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="td_height_120 td_height_lg_80" />
        </section>
      </Layout>
    );
  }

  return (
    <Layout breadcrumbTitle="비밀번호 재설정" breadcrumbSubtitle="새로운 비밀번호를 설정하세요">
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5 p-5">
                <h2 className="td_fs_36 td_mb_20 text-center">새 비밀번호 설정</h2>
                <hr className="td_mb_30" />
                
                {message.content && (
                  <div className={`alert ${message.type === 'error' ? 'alert-danger' : 'alert-success'}`} role="alert">
                    {message.content}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label td_fs_18 td_medium">
                      새 비밀번호
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="td_form_field td_medium td_white_bg w-100"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="최소 6자 이상의 비밀번호를 입력하세요"
                      minLength={6}
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="form-label td_fs_18 td_medium">
                      비밀번호 확인
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="td_form_field td_medium td_white_bg w-100"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="비밀번호를 다시 입력하세요"
                      minLength={6}
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="td_btn td_style_1 td_radius_10 td_medium w-100"
                    disabled={loading || message.type === 'success'}
                  >
                    <span className="td_btn_in td_white_color td_accent_bg">
                      <span>
                        {loading ? '처리 중...' : message.type === 'success' ? '완료' : '비밀번호 변경'}
                      </span>
                    </span>
                  </button>
                </form>
                
                <div className="text-center mt-4">
                  <Link href="/signin" className="td_accent_color td_medium">
                    로그인 페이지로 돌아가기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="td_height_120 td_height_lg_80" />
      </section>
    </Layout>
  );
}
