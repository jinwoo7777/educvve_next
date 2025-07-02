import { AboutSeven } from "@/components/about/AboutSeven";
import { BlogSeven } from "@/components/blogs/BlogSeven";
import { BrandTwo } from "@/components/brands/BrandTwo";
import { CoursesSeven } from "@/components/courses/CoursesSeven";
import { FaqFour } from "@/components/faqs/FaqFour";
import { FeatureThree } from "@/components/features/FeatureThree";
import { HeroSeven } from "@/components/hero/HeroSeven";
import { TeamSix } from "@/components/teams/TeamSix";
import { TestimonialSix } from "@/components/testimonials/TestimonialSix";
import { WhyChooseThree } from "@/components/why_choose/WhyChooseThree";
import { Layout } from "@/layouts/Layout";

export default function HomeSeven() {
  return (
    <Layout header={7} footer={7} bodyClass="td_theme_4">
      {/* hero */}
      <HeroSeven />

      {/* about */}
      <AboutSeven />

      {/* feature */}
      <FeatureThree />

      {/* courses */}
      <CoursesSeven />

      {/* why choose */}
      <WhyChooseThree />

      {/* instructor */}
      <TeamSix />

      {/* accordion / faqs */}
      <FaqFour />

      {/* brands */}
      <div className="td_height_120 td_height_lg_80" />
      <BrandTwo />
      <div className="td_height_120 td_height_lg_80" />

      {/* testimonial */}
      <TestimonialSix />

      {/* blog */}
      <BlogSeven />
    </Layout>
  );
}
