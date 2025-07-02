import { CouresesNine } from "@/components/courses/CouresesNine";
import { CourseDetailContent } from "@/components/courses/CourseDetailContent";
import { Layout } from "@/layouts/Layout";

export default function CourseDetails() {
  return (
    <Layout
      breadcrumbTitle={"Course Details"}
      breadcrumbSubtitle={"Course Details"}
    >
      {/* details */}
      <CourseDetailContent />

      {/* popular */}
      <CouresesNine />
    </Layout>
  );
}
