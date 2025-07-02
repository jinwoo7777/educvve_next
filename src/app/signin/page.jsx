"use client";

// 동적 렌더링 설정 추가
export const dynamic = 'force-dynamic';
export const runtime = 'edge';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Layout } from "@/layouts/Layout";
import Link from "next/link";
import { supabase } from '@/utils/supabaseClient';
import { extractAuthError } from '@/utils/authErrors';

const loginImg = "/others/login.jpg";

export default function Signin() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // 자동 로그인 처리
  useEffect(() => {
    const checkRememberMe = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const redirectTo = searchParams.get('redirectedFrom') || '/dashboard';
        router.push(redirectTo);
      }
    };

    checkRememberMe();
  }, [router, searchParams]);

  const validateForm = () => {
    if (!formData.email) {
      setError('이메일을 입력해주세요.');
      return false;
    }

    if (!formData.password) {
      setError('비밀번호를 입력해주세요.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // 폼 유효성 검사
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email.trim(),
        password: formData.password,
      });

      if (error) throw error;

      // 자동 로그인 설정
      if (formData.rememberMe) {
        // 세션 영속성 설정 (localStorage 사용)
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          localStorage.setItem('supabase.auth.token', session.access_token);
        }
      } else {
        // 세션 영속성 제거 (sessionStorage 사용)
        localStorage.removeItem('supabase.auth.token');
      }

      // 로그인 성공 시 리다이렉트
      const redirectTo = searchParams.get('redirectedFrom') || '/dashboard';
      router.push(redirectTo);
    } catch (error) {
      console.error('로그인 오류:', error);
      setError(extractAuthError(error));
    } finally {
      setLoading(false);
    }
  };
  // 이메일 확인 메시지 표시
  const emailConfirmationSent = searchParams.get('email_confirmation_sent');
  const email = searchParams.get('email');

  return (
    <Layout breadcrumbTitle={"로그인"} breadcrumbSubtitle={"로그인"}>
      <section>
        <div class="td_height_120 td_height_lg_80" />
        <div class="container">
          <div class="row td_gap_y_40">
            <div class="col-lg-6">
              <form onSubmit={handleSubmit} className="td_form_card td_style_1 td_radius_10 td_gray_bg_5">
                <div class="td_form_card_in">
                  <h2 class="td_fs_36 td_mb_20">로그인</h2>
                  <hr />
                  {emailConfirmationSent && (
                    <div className="alert alert-success" role="alert">
                      {email} 주소로 인증 링크를 전송했습니다. 이메일을 확인해주세요.
                    </div>
                  )}
                  <div className="td_height_30 td_height_lg_30" />
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    placeholder="이메일 *"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="td_form_field td_mb_10 td_medium td_white_bg"
                    placeholder="비밀번호 *"
                    required
                  />
                  <div className="td_form_card_text_2 td_mb_50">
                    <div>
                      <Link
                        href="/forgot-password"
                        className="td_semibold td_accent_color"
                      >
                        비밀번호 찾기
                      </Link>
                    </div>
                    <div className="td_accent_color">
                      <div className="td_custom_checkbox">
                        <input 
                          type="checkbox" 
                          id="remember" 
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                        />
                        <label htmlFor="remember">자동 로그인</label>
                      </div>
                    </div>
                  </div>
                  <div className="td_form_card_bottom td_mb_25">
                    <button
                      type="submit"
                      className="td_btn td_style_1 td_radius_10 td_medium"
                      disabled={loading}
                    >
                      <span className="td_btn_in td_white_color td_accent_bg">
                        <span>{loading ? '로그인 중...' : '로그인'}</span>
                      </span>
                    </button>
                    <p className="td_fs_20 mb-0 td_medium td_heading_color">
                      다른방법으로 로그인하기
                    </p>
                    <div className="td_form_social td_fs_20">
                      <button 
                        type="button" 
                        className="td_center border-0 bg-transparent"
                        onClick={() => {
                          // Apple 로그인 구현
                          supabase.auth.signInWithOAuth({
                            provider: 'apple',
                            options: {
                              redirectTo: `${window.location.origin}/auth/callback`,
                            },
                          });
                        }}
                      >
                        <i className="fa-brands fa-apple"></i>
                      </button>
                      <button 
                        type="button" 
                        className="td_center border-0 bg-transparent"
                        onClick={() => {
                          // Google 로그인 구현
                          supabase.auth.signInWithOAuth({
                            provider: 'google',
                            options: {
                              redirectTo: `${window.location.origin}/auth/callback`,
                            },
                          });
                        }}
                      >
                        <i className="fa-brands fa-google"></i>
                      </button>
                      <button 
                        type="button" 
                        className="td_center border-0 bg-transparent"
                        onClick={() => {
                          // Facebook 로그인 구현
                          supabase.auth.signInWithOAuth({
                            provider: 'facebook',
                            options: {
                              redirectTo: `${window.location.origin}/auth/callback`,
                            },
                          });
                        }}
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                  <p className="td_form_card_text td_fs_20 td_medium td_heading_color mb-0">
                    계정이 없으신가요?{" "}
                    <Link href="/signup" className="td_accent_color">회원가입</Link>
                  </p>
                </div>
              </form>
            </div>
            <div class="col-lg-6">
              <div class="td_sign_thumb">
                <img src={loginImg} alt="Login" class="w-100 td_radius_10" />
              </div>
            </div>
          </div>
        </div>
        <div class="td_height_120 td_height_lg_80" />
      </section>
    </Layout>
  );
}
