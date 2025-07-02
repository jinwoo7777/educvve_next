"use client";

import React from "react";
import Link from "next/link";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";
import { HeaderSearch } from "./HeaderSearch";

const callIcon = "/icons/call.svg";
const envelopeIcon = "/icons/envlop.svg";
const loveIcon = "/icons/love.svg";
const cartIcon = "/icons/cart.svg";
const logoV2 = "/logo_v2.svg";

export const HeaderTwo = () => {
  useMobilemenu();
  useStickyHeader();

  return (
    <header className="td_site_header td_style_1 td_type_2 td_sticky_header td_medium td_heading_color">
      <div className="td_top_header td_heading_bg td_white_color">
        <div className="container">
          <div className="td_top_header_in">
            <div className="td_top_header_left">
              <ul className="td_header_contact_list td_mp_0 td_normal">
                <li>
                  <img src={callIcon} alt="" />
                  <span>
                    Call: <a href="tel:99066789768">990 66789 768</a>
                  </span>
                </li>
                <li>
                  <img src={envelopeIcon} alt="" />
                  <span>
                    Email:
                    <a href="mailto:support@educat.com">support@educat.com</a>
                  </span>
                </li>
              </ul>
            </div>
            <div className="td_top_header_right">
              <div className="td_hero_icon_btns position-relative">
                <div className="position-relative">
                  <HeaderSearch />
                </div>
                <button className="td_circle_btn td_center" type="button">
                  <img src={loveIcon} alt="" />
                  <span className="td_circle_btn_label">0</span>
                </button>
                <button className="td_circle_btn td_center" type="button">
                  <img src={cartIcon} alt="" />
                  <span className="td_circle_btn_label">0</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_main_header">
        <div className="container">
          <div className="td_main_header_in">
            <div className="td_main_header_left">
              <Link href="/" className="td_site_branding">
                <img src={logoV2} alt="Logo" />
              </Link>
            </div>
            <div className="td_main_header_center">
              <nav className="td_nav">
                <div className="td_nav_list_wrap">
                  <div className="td_nav_list_wrap_in">
                    <ul className="td_nav_list">
                      <li className="menu-item-has-children">
                        <Link href="/">Home</Link>
                        <ul>
                          <li>
                            <Link href="/">University</Link>
                          </li>
                          <li>
                            <Link href="/home-v2">Online Educations</Link>
                          </li>
                          <li>
                            <Link href="/home-v3">Education</Link>
                          </li>
                          <li>
                            <Link href="/home-v4">Kindergarten</Link>
                          </li>
                          <li>
                            <Link href="/home-v5">Modern Language</Link>
                          </li>
                          <li>
                            <Link href="/home-v6">Al-Quran Learning</Link>
                          </li>
                          <li>
                            <Link href="/home-v7">Motivation Speaker</Link>
                          </li>
                          <li>
                            <Link href="/home-v8">Kitchen Coach</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="/products">Courses</Link>
                        <ul>
                          <li>
                            <Link href="/courses-grid-view">
                              Courses Grid View
                            </Link>
                          </li>
                          <li>
                            <Link href="/courses-list-view">
                              Courses List View
                            </Link>
                          </li>
                          <li>
                            <Link href="/courses-grid-with-sidebar">
                              Courses Grid With Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link href="/course-details">Course Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li className="menu-item-has-children td_mega_menu">
                        <Link href="#">Pages</Link>
                        <ul className="td_mega_wrapper">
                          <li className="menu-item-has-children">
                            <h4>Inner Pages</h4>
                            <ul>
                              <li>
                                <Link href="/event">Upcoming Event</Link>
                              </li>
                              <li>
                                <Link href="/event/ev-123">Event Details</Link>
                              </li>
                              <li>
                                <Link href="/team-members">Team Members</Link>
                              </li>
                              <li>
                                <Link href="/team-members/t-123">
                                  Team Details
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <h4>Inner Pages</h4>
                            <ul>
                              <li>
                                <Link href="/students-registrations">
                                  Students Registrations
                                </Link>
                              </li>
                              <li>
                                <Link href="/instructor-registrations">
                                  Instructor Registrations
                                </Link>
                              </li>
                              <li>
                                <Link href="/signup">Signup</Link>
                              </li>
                              <li>
                                <Link href="/signin">Signin</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <h4>Shop Pages</h4>
                            <ul>
                              <li>
                                <Link href="/faqs">Faqs</Link>
                              </li>
                              <li>
                                <Link href="/cart">Cart</Link>
                              </li>
                              <li>
                                <Link href="/checkout">Checkout</Link>
                              </li>
                              <li>
                                <Link href="/error">Error</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">Blogs</Link>
                        <ul>
                          <li>
                            <Link href="/blog">Blogs</Link>
                          </li>
                          <li>
                            <Link href="/blog/with-sidebar">
                              Blog With Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link href="/blog/b-123">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="td_main_header_right">
              <div className="td_header_btns">
                <Link
                  href="/signin"
                  className="td_btn td_style_1 td_type_1 td_radius_30 td_medium td_with_shadow"
                >
                  <span className="td_btn_in td_accent_color td_white_bg">
                    <span>Sign in</span>
                    <svg
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1575 4.34302L3.84375 15.6567"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/signup"
                  className="td_btn td_style_1 td_radius_30 td_medium td_with_shadow"
                >
                  <span className="td_btn_in td_white_color td_accent_bg">
                    <span>Sign up</span>
                    <svg
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1575 4.34302L3.84375 15.6567"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
