"use client";

"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Layout } from "@/layouts/Layout";
import Link from "next/link";
import { supabase } from '@/utils/supabaseClient';
import { extractAuthError } from '@/utils/authErrors';

const loginImg = "/others/login.jpg";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('이름을 입력해주세요.');
      return false;
    }

    const phoneRegex = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('올바른 전화번호 형식이 아닙니다. (예: 010-1234-5678)');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('유효한 이메일 주소를 입력해주세요.');
      return false;
    }

    if (formData.password.length < 6) {
      setError('비밀번호는 최소 6자 이상이어야 합니다.');
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
      // 1. 사용자 등록
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.name,
            phone: formData.phone,
          },
          emailRedirectTo: `${window.location.origin}/signin`,
        },
      });

      if (signUpError) throw signUpError;

      // 2. 추가 사용자 정보 저장 (필요한 경우)
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: authData.user.id,
          full_name: formData.name,
          phone: formData.phone,
          email: formData.email,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });

      if (profileError) throw profileError;

      // 3. 이메일 확인 페이지로 리다이렉트
      router.push('/signup/confirm-email?email=' + encodeURIComponent(formData.email));
    } catch (error) {
      console.error('회원가입 중 오류 발생:', error);
      setError(extractAuthError(error));
    } finally {
      setLoading(false);
    }
  };
  return (
    <Layout breadcrumbTitle={"회원가입"} breadcrumbSubtitle={"회원가입"}>
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row td_gap_y_40">
            <div className="col-lg-6">
              <form onSubmit={handleSubmit} className="td_form_card td_style_1 td_radius_10 td_gray_bg_5">
                <div className="td_form_card_in">
                  <h2 className="td_fs_36 td_mb_20">회원가입</h2>
                  <hr />
                  <div className="td_height_30 td_height_lg_30" />
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    placeholder="이름 *"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    placeholder="전화번호 (예: 010-1234-5678) *"
                    pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
                    required
                  />
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
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    placeholder="비밀번호 (최소 6자 이상) *"
                    minLength="6"
                    required
                  />
                  <div className="td_form_card_bottom td_mb_25">
                    <button
                      type="submit"
                      className="td_btn td_style_1 td_radius_10 td_medium"
                      disabled={loading}
                    >
                      <span className="td_btn_in td_white_color td_accent_bg">
                        <span>{loading ? '처리 중...' : '회원 가입'}</span>
                      </span>
                    </button>
                    <p className="td_fs_20 mb-0 td_medium td_heading_color">
                      다른방법으로 가입하기
                    </p>
                    <div className="td_form_social td_fs_20">
                      <a href="#" className="td_center">
                        <i className="fa-brands fa-apple"></i>
                      </a>
                      <a href="#" className="td_center">
                        <i className="fa-brands fa-google"></i>
                      </a>
                      <a href="#" className="td_center">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </div>
                  </div>
                  <p className="td_form_card_text td_fs_20 td_medium td_heading_color mb-0">
                    이미 계정이 있으신가요? <Link href="/signin">로그인</Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="td_sign_thumb">
                <img
                  src={loginImg}
                  alt="Login"
                  className="w-100 td_radius_10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="td_height_120 td_height_lg_80" />
      </section>
    </Layout>
  );
}
