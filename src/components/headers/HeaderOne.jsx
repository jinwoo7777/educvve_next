"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderLanguage } from "./HeaderLanguage";
import { HeaderSidebar } from "./HeaderSidebar";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";

const Logo = "/logo.svg";

export const HeaderOne = () => {
  useMobilemenu();
  useStickyHeader();

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((v) => !v);

  return (
    <>
      <header className="td_site_header td_style_1 td_type_3 td_sticky_header td_medium td_heading_color">
        <div className="td_main_header">
          <div className="container-fluid">
            <div className="td_main_header_in">
              {/* left */}
              <div className="td_main_header_left">
                <Link className="td_site_branding" href="/">
                  <img src={Logo} alt="Logo" />
                </Link>
                <div className="td_header_social_btns">
                  <a href="#" className="td_center">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" className="td_center">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="#" className="td_center">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="td_center">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                </div>
              </div>

              <div className="td_main_header_center">
                <nav className="td_nav">
                  <div className="td_nav_list_wrap">
                    <div className="td_nav_list_wrap_in">
                      {/* first three */}
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
                      </ul>

                      <Link className="td_site_branding" href="/">
                        <img src={Logo} alt="Logo" />
                      </Link>

                      {/* last three */}
                      <ul className="td_nav_list">
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
                                  <Link href="/event/ev-123">
                                    Event Details
                                  </Link>
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

              {/* right */}
              <div className="td_main_header_right">
                {/* lang dropdown */}
                <div className="position-relative td_language_wrap">
                  <HeaderLanguage />
                </div>

                <div className="position-relative">
                  <HeaderSearch />
                </div>

                <button className="td_hamburger_btn" onClick={toggleSidebar} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <HeaderSidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </>
  );
};
