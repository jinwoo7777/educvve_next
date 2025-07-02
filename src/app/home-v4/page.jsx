import { AboutFour } from "@/components/about/AboutFour";
import { BlogFour } from "@/components/blogs/BlogFour";
import { CoursesFour } from "@/components/courses/CoursesFour";
import { CtaOne } from "@/components/cta/CtaOne";
import { FaqOne } from "@/components/faqs/FaqOne";
import { FunfactTwo } from "@/components/fun_facts/FunfactTwo";
import { HeroFour } from "@/components/hero/HeroFour";
import { NewsletterOne } from "@/components/newsletter/NewsletterOne";
import { TeamThree } from "@/components/teams/TeamThree";
import { TestimonialFour } from "@/components/testimonials/TestimonialFour";
import { Layout } from "@/layouts/Layout";

export default function HomeFour() {
  return (
    <Layout header={4} footer={4} bodyClass="td_theme_3">
      {/* hero */}
      <HeroFour />

      {/* about */}
      <AboutFour />

      {/* popular */}
      <CoursesFour />

      {/* fun fact */}
      <FunfactTwo />

      {/* faqs */}
      <FaqOne />

      {/* testimonial */}
      <TestimonialFour />

      {/* team */}
      <TeamThree />

      {/* cta */}
      <CtaOne />

      {/* blog */}
      <BlogFour />

      {/* newsletter */}
      <NewsletterOne />
    </Layout>
  );
}
