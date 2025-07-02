import React from "react";
import { VideoPlayer } from "../videos/VideoPlayer";

const videoBg = "/home_3/video_bg.jpg";
const featureIcon1 = "/home_3/feature_icon_1.svg";
const featureIcon2 = "/home_3/feature_icon_2.svg";
const featureIcon3 = "/home_3/feature_icon_3.svg";
const featureIcon4 = "/home_3/feature_icon_4.svg";

export const FeatureTwo = () => {
  return (
    <section className="td_features_2_wrap">
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="td_features td_style_2">
          <div
            className="td_features_thumb td_radius_10 td_center td_bg_filed"
            style={{ backgroundImage: `url(${videoBg})` }}
          >
            <VideoPlayer
              trigger={
                <a
                  href="#vid002"
                  className="td_player_btn_wrap td_video_open td_medium td_heading_color wow zoomIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <span className="td_player_btn td_center">
                    <span></span>
                  </span>
                </a>
              }
            />
          </div>

          <div className="td_features_content_wrap">
            <div
              className="td_features_content td_white_bg td_radius_10 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="td_section_heading td_style_1">
                <h2 className="td_section_title td_fs_48 mb-0">
                  수학의 문 시설
                </h2>
                <p className="td_section_subtitle td_fs_18 mb-0">
                20년 노하우가 녹아든 공간 설계로, 머무는 순간마다 학습 효과를 극대화합니다.
                </p>
              </div>
              <div className="td_height_40 td_height_lg_40" />
              <ul className="td_feature_list td_mp_0">
                <li>
                  <div className="td_feature_icon">
                    <img src={featureIcon1} alt="Brand Integration Icon" />
                  </div>
                  <div className="td_feature_info">
                    <h3 className="td_fs_20 td_semibold td_mb_4">
                    스마트 강의실	                    </h3>
                    <p className="td_fs_14 td_heading_color td_opacity_7 mb-0">
                    전자칠판·빔프로젝터 완비, 복잡한 개념도 영상·그래프로 즉시 시각화
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_feature_icon">
                    <img src={featureIcon2} alt="Accreditation Support Icon" />
                  </div>
                  <div className="td_feature_info">
                    <h3 className="td_fs_20 td_semibold td_mb_4">
                    집중 자습부스                    </h3>
                    <p className="td_fs_14 td_heading_color td_opacity_7 mb-0">
                    40석 독립 칸막이 좌석, 조명·온도 최적화로 몰입도 200% 유지
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_feature_icon">
                    <img src={featureIcon3} alt="Brand Integration Icon" />
                  </div>
                  <div className="td_feature_info">
                    <h3 className="td_fs_20 td_semibold td_mb_4">
                    1:1 첨삭룸	                    </h3>
                    <p className="td_fs_14 td_heading_color td_opacity_7 mb-0">
                    풀이 과정을 교사와 마주 보며 교정, 개인 맞춤 피드백 전용 공간
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_feature_icon">
                    <img src={featureIcon4} alt="Expert Instructor Icon" />
                  </div>
                  <div className="td_feature_info">
                    <h3 className="td_fs_20 td_semibold td_mb_4">
                    소규모 토론 교실	                    </h3>
                    <p className="td_fs_14 td_heading_color td_opacity_7 mb-0">
                    6-8명 구성, 발표와 질문이 자연스러운 U자형 책상 배치
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
