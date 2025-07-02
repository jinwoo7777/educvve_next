"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from '@/utils/authState';
import { Layout } from '@/layouts/Layout';

export default function Dashboard() {
  const { user, loading, signOut } = useAuthState();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <Layout breadcrumbTitle="대시보드" breadcrumbSubtitle="로딩 중...">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">로딩 중...</span>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout breadcrumbTitle="대시보드" breadcrumbSubtitle={`${user.email}님, 환영합니다!`}>
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">대시보드</h1>
                  <p className="card-text">
                    로그인에 성공하셨습니다! 여기는 로그인한 사용자만 접근할 수 있는 대시보드 페이지입니다.
                  </p>
                  <div className="mt-4">
                    <button 
                      onClick={signOut}
                      className="btn btn-danger"
                    >
                      로그아웃
                    </button>
                  </div>
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
