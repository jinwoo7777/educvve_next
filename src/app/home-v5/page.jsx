import { AboutFive } from "@/components/about/AboutFive";
import { BlogFive } from "@/components/blogs/BlogFive";
import { CategoryThree } from "@/components/category/CategoryThree";
import { CoursesFive } from "@/components/courses/CoursesFive";
import { CtaTwo } from "@/components/cta/CtaTwo";
import { FaqTwo } from "@/components/faqs/FaqTwo";
import { HeroFive } from "@/components/hero/HeroFive";
import { PricingTwo } from "@/components/pricing/PricingTwo";
import { TeamFour } from "@/components/teams/TeamFour";
import { TestimonialFive } from "@/components/testimonials/TestimonialFive";
import { VideoTwo } from "@/components/videos/VideoTwo";
import { Layout } from "@/layouts/Layout";

export default function HomeFive() {
  return (
    <Layout header={5} footer={5} bodyClass="td_theme_2">
      {/* hero */}
      <HeroFive />

      {/* categories */}
      <CategoryThree />

      {/* about */}
      <AboutFive />

      {/* courses */}
      <CoursesFive />

      {/* faqs */}
      <FaqTwo />

      {/* testimonials */}
      <TestimonialFive />

      {/* pricing */}
      <PricingTwo />

      {/* video */}
      <VideoTwo />

      {/* advisors */}
      <TeamFour />

      {/* cta */}
      <CtaTwo />

      {/* blog */}
      <BlogFive />
    </Layout>
  );
}
