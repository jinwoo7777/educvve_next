import { AboutThree } from "@/components/about/AboutThree";
import { AppOne } from "@/components/apps/AppOne";
import { BlogThree } from "@/components/blogs/BlogThree";
import { CategoryTwo } from "@/components/category/CategoryTwo";
import { CertificateOne } from "@/components/certificates/CertificateOne";
import { CoursesThree } from "@/components/courses/CoursesThree";
import { FeatureTwo } from "@/components/features/FeatureTwo";
import { FunfactOne } from "@/components/fun_facts/FunfactOne";
import { HeroThree } from "@/components/hero/HeroThree";
import { PricingOne } from "@/components/pricing/PricingOne";
import { RateTwo } from "@/components/rates/RateTwo";
import { BecomeAnInstructor } from "@/components/teams/BecomeAnInstructor";
import { TeamTwo } from "@/components/teams/TeamTwo";
import { TestimonialThree } from "@/components/testimonials/TestimonialThree";
import { Layout } from "@/layouts/Layout";

export default function HomeThree() {
  return (
    <Layout header={3} footer={3} bodyClass="td_theme_2">
      {/* hero */}
      <HeroThree />

      {/* rate */}
      <RateTwo />

      {/* about */}
      <AboutThree />

      {/* category */}
      <CategoryTwo />

      {/* courses */}
      <CoursesThree />

      {/* certificate */}
      <CertificateOne />

      {/* testimonial */}
      <TestimonialThree />

      {/* feature */}
      <FeatureTwo />

      {/* fun facts */}
      <FunfactOne />

      {/* pricing */}
      <PricingOne />

      {/* expert team */}
      <TeamTwo />

      {/* instructor */}
      <BecomeAnInstructor />

      {/* app */}
      <AppOne />

      {/* blog */}
      <BlogThree />
    </Layout>
  );
}
