import React from "react";

const rateIcon1 = "/home_2/university_korea.png";
const rateIcon2 = "/home_2/university_seoul.png";
const rateIcon3 = "/home_2/university_yensei.png";
const rateIcon4 = "/home_2/university_KAIST.png";

export const RateTwo = () => {
  const rating = 5;
  return (
    <section className="td_heading_bg td_rate_section td_type_1">
      <div className="td_rate_heading td_fs_20 td_semibold td_white_color">
        2025년 수학의문 | 명문대 입학현황
        <div className="td_rating_wrap">
          <div className="td_rating" data-rating={rating}>
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className={`fa-${i < rating ? "solid" : "regular"} fa-star`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="td_rate_feature_list_wrap" style={{ overflowY: "auto" }}>
        <div className="td_moving_box_wrap">
          <div className="td_moving_box_in">
            <div className="td_moving_box">
              <ul className="td_rate_feature_list td_mp_0">
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon1} alt="Online Courses Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      고려대 의학과 9명
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Solid Questions Solving & Fresh Topics
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon2} alt="Expert Instructor Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                    서울대 의학과 12명
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Learn and More expertise
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon3} alt="Life time access Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                    연세대 치의학과 5명
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Behind the word mountains
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon4} alt="Get Certificate Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                    카이스트 전자공학과 3명
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Behind the word mountains
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="td_moving_box">
              <ul className="td_rate_feature_list td_mp_0">
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon1} alt="Online Courses Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                    고려대 경영학과 5명
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Solid Questions Solving & Fresh Topics
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon2} alt="Expert Instructor Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                    서울대 검퓨터공학과 4명
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Learn and More expertise
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon3} alt="Life time access Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                    연세대 의학과 5명
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Behind the word mountains
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon4} alt="Get Certificate Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                    카이스트 산업공학과 3명
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Behind the word mountains
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
