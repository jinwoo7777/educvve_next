import { AboutTwo } from "@/components/about/AboutTwo";
import { BlogTwo } from "@/components/blogs/BlogTwo";
import { BrandOne } from "@/components/brands/BrandOne";
import { CategoryOne } from "@/components/category/CategoryOne";
import { CoursesTwo } from "@/components/courses/CoursesTwo";
import { EventTwo } from "@/components/events/EventTwo";
import { HeroTwo } from "@/components/hero/HeroTwo";
import { RateOne } from "@/components/rates/RateOne";
import { TeamOne } from "@/components/teams/TeamOne";
import { TestimonialTwo } from "@/components/testimonials/TestimonialTwo";
import { WhyChooseOne } from "@/components/why_choose/WhyChooseOne";
import { Layout } from "@/layouts/Layout";

export default function HomeTwo() {
  return (
    <Layout header={2} footer={2} bodyClass="td_theme_2">
      {/* hero */}
      <HeroTwo />

      {/* category */}
      <CategoryOne />

      {/* rate */}
      <RateOne />

      {/* about */}
      <AboutTwo />

      {/* courses */}
      <CoursesTwo />

      <div className="td_height_120 td_height_lg_80" />

      {/* brands */}
      <BrandOne />

      {/* testimonial */}
      <TestimonialTwo />

      {/* event */}
      <EventTwo />

      {/* team */}
      <TeamOne />

      {/* why choose */}
      <WhyChooseOne />

      {/* blog */}
      <BlogTwo />
    </Layout>
  );
}
