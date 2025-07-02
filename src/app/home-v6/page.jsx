import { AboutSix } from "@/components/about/AboutSix";
import { BlogSix } from "@/components/blogs/BlogSix";
import { CategoryFour } from "@/components/category/CategoryFour";
import { ContactOne } from "@/components/contacts/ContactOne";
import { CoursesSix } from "@/components/courses/CoursesSix";
import { FaqThree } from "@/components/faqs/FaqThree";
import { HeroSix } from "@/components/hero/HeroSix";
import { NewsletterTwo } from "@/components/newsletter/NewsletterTwo";
import { TeamFive } from "@/components/teams/TeamFive";
import { WhyChooseTwo } from "@/components/why_choose/WhyChooseTwo";
import { Layout } from "@/layouts/Layout";

export default function HomeSix() {
  return (
    <Layout header={6} footer={6} bodyClass="td_theme_6">
      {/* hero */}
      <HeroSix />

      {/* categories */}
      <CategoryFour />

      {/* about */}
      <AboutSix />

      {/* courses */}
      <CoursesSix />

      {/* instructor */}
      <TeamFive />

      {/* faqs */}
      <FaqThree />

      {/* why choose */}
      <WhyChooseTwo />

      {/* contact */}
      <ContactOne />

      {/* blog */}
      <BlogSix />

      {/* newsletter */}
      <NewsletterTwo />
    </Layout>
  );
}
