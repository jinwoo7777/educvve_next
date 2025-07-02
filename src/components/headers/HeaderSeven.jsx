"use client";

import React from "react";
import Link from "next/link";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";
import { HeaderSearch } from "./HeaderSearch";

const Logo = "/logo_v5.svg";

export const HeaderSeven = () => {
  useMobilemenu();
  useStickyHeader();

  return (
    <header className="td_site_header td_style_1 td_type_4 td_sticky_header td_medium td_heading_color">
      <div className="td_main_header">
        <div className="container-fluid">
          <div className="td_main_header_in">
            <div className="td_main_header_left">
              <Link href="/" className="td_site_branding">
                <img src={Logo} alt="Logo" />
              </Link>
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
              <div className="position-relative">
                <HeaderSearch />
              </div>

              <div className="td_hero_toolbox_wrap">
                <Link
                  href="/signup"
                  className="td_btn td_style_1 td_radius_30 td_medium"
                >
                  <span className="td_btn_in td_white_color td_heading_bg">
                    <span>Try For Free</span>
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
