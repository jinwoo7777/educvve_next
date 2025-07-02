import { AboutEight } from "@/components/about/AboutEight";
import { BlogEight } from "@/components/blogs/BlogEight";
import { CategoryFive } from "@/components/category/CategoryFive";
import { CoursesEight } from "@/components/courses/CoursesEight";
import { CtaThree } from "@/components/cta/CtaThree";
import { HeroEight } from "@/components/hero/HeroEight";
import { Instagram } from "@/components/insta/Instagram";
import { TeamSeven } from "@/components/teams/TeamSeven";
import { TestimonialSeven } from "@/components/testimonials/TestimonialSeven";
import { Layout } from "@/layouts/Layout";

export default function HomeEight() {
  return (
    <Layout header={8} footer={8} bodyClass="td_theme_5">
      {/* hero */}
      <HeroEight />

      {/* categories */}
      <CategoryFive />

      {/* about */}
      <AboutEight />

      {/* courses */}
      <CoursesEight />

      {/* testimonials */}
      <TestimonialSeven />

      {/* team */}
      <TeamSeven />

      {/* cta */}
      <CtaThree />

      {/* blog */}
      <BlogEight />

      {/* instagram */}
      <Instagram />
    </Layout>
  );
}
