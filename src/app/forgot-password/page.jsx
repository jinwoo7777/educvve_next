"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Layout } from "@/layouts/Layout";
import Link from "next/link";
import { supabase } from '@/utils/supabaseClient';
import { extractAuthError } from '@/utils/authErrors';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`,
      });

      if (error) throw error;
      
      setMessage('비밀번호 재설정 링크가 이메일로 전송되었습니다. 이메일을 확인해주세요.');
    } catch (error) {
      console.error('비밀번호 재설정 오류:', error);
      setError(extractAuthError(error) || '비밀번호 재설정 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout breadcrumbTitle="비밀번호 찾기" breadcrumbSubtitle="비밀번호 찾기">
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5 p-5">
                <h2 className="td_fs_36 td_mb_20 text-center">비밀번호 찾기</h2>
                <hr />
                <div className="td_height_30 td_height_lg_30" />
                
                {message ? (
                  <div className="text-center">
                    <div className="mb-4">
                      <i className="fas fa-envelope-circle-check text-success" style={{ fontSize: '4rem' }}></i>
                    </div>
                    <h3 className="td_fs_24 td_mb_20">이메일을 확인해주세요</h3>
                    <p className="td_fs_18 td_mb_30">{message}</p>
                    <p className="text-muted">이메일이 오지 않았다면 스팸 메일함도 확인해주세요.</p>
                    <div className="mt-4">
                      <Link href="/signin" className="td_btn td_style_1 td_radius_10 td_medium">
                        <span className="td_btn_in td_white_color td_accent_bg">
                          <span>로그인 하기</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <p className="td_fs_18 td_mb_30 text-center">
                      가입하신 이메일 주소를 입력하시면<br />
                      비밀번호 재설정 링크를 보내드립니다.
                    </p>
                    
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        <i className="fas fa-exclamation-circle me-2"></i>
                        {error}
                      </div>
                    )}
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label td_fs_18 td_medium td_heading_color mb-2">
                        이메일 주소
                      </label>
                      <input
                        type="email"
                        id="email"
                        className={`form-control td_form_field td_medium td_white_bg ${error ? 'is-invalid' : ''}`}
                        placeholder="example@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value.trim())}
                        disabled={loading}
                      />
                    </div>
                    
                    <div className="d-grid gap-2">
                      <button
                        type="submit"
                        className="td_btn td_style_1 td_radius_10 td_medium"
                        disabled={loading}
                      >
                        <span className="td_btn_in td_white_color td_accent_bg">
                          {loading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              <span>처리 중...</span>
                            </>
                          ) : (
                            <span>비밀번호 재설정 링크 보내기</span>
                          )}
                        </span>
                      </button>
                    </div>
                  </form>
                )}
                
                <div className="text-center mt-4">
                  <Link href="/signin" className="td_accent_color td_medium">
                    <i className="fas fa-arrow-left me-2"></i> 로그인 페이지로 돌아가기
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