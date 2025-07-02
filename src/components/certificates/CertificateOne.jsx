import React from "react";

const certificateThumb = "/home_3/certificate_thumb.jpg";
const achievementIcon1 = "/home_3/achievement_icon_1.svg";
const achievementIcon2 = "/home_3/achievement_icon_2.svg";
const achievementIcon3 = "/home_3/achievement_icon_3.svg";
const achievementIcon4 = "/home_3/achievement_icon_4.svg";

const achievementData = [
  {
    icon: achievementIcon1,
    title: "빠른 온라인 진단",
    description: "20문항 객관식 + 서술형, 시험 감각 그대로 10분 완성",
  },
  {
    icon: achievementIcon2,
    title: "정밀 오답 분석",
    description: "단원-개념별 취약 포인트를 그래프로 시각화",
  },
  {
    icon: achievementIcon3,
    title: "맞춤 커리큘럼 추천",
    description: "목표 등급·학교 일정에 맞춰 전용 반 자동 매칭",
  },
  {
    icon: achievementIcon4,
    title: "전문가 1:1 상담",
    description: "10년차 이상의 전담 강사진이 학습 플랜을 개별 설계",
  },
];

export const CertificateOne = () => {
  return (
    <section className="td_heading_bg td_shape_section_9">
      <div className="td_shape_position_3 position-absolute" />
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_white_color">
            수학의 문 - 레벨 진단
          </p>
          <h2 className="td_section_title td_fs_48 mb-0 td_white_color">
          10분 진단으로<br/>당신의 수학 레벨을 확인하세요
          </h2>
          <p className="td_iconbox_subtitle mb-0 td_fs_14 td_white_color td_opacity_7">
          20년 데이터로 설계된 AI 분석이 약점을 정확히 짚어주고,
          목표 등급까지의 최단 코스를 제시합니다.
          </p>
        </div>
        <div className="td_height_50 td_height_lg_50" />

        <div className="row align-items-center td_gap_y_40">
          <div
            className="col-xl-6 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_pr_35">
              <img
                src={certificateThumb}
                alt="Certificate"
                className="td_radius_5 w-100"
              />
            </div>
          </div>

          <div
            className="col-xl-6 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="row td_gap_y_30 td_row_gap_30">
              {achievementData.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="td_iconbox td_style_4 td_radius_10">
                    <div className="td_iconbox_icon td_mb_16">
                      <img src={item.icon} alt="Achievement Icon" />
                    </div>
                    <h3 className="td_iconbox_title td_fs_24 td_mb_12 td_semibold td_white_color">
                      {item.title}
                    </h3>
                    <p className="td_iconbox_subtitle mb-0 td_fs_14 td_white_color td_opacity_7">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
