import { BlogAllSidebar } from "@/components/blogs/BlogAllSidebar";
import { BlogContainer } from "@/components/blogs/BlogContainer";
import { BlogPagination } from "@/components/blogs/BlogPagination";
import { Layout } from "@/layouts/Layout";

export default function BlogWithSidebar() {
  return (
    <Layout
      breadcrumbTitle={"Blog With Sidebar"}
      breadcrumbSubtitle={"Blog With Sidebar"}
    >
      <BlogContainer>
        <BlogAllSidebar />

        <div className="td_height_60 td_height_lg_40" />
        <BlogPagination />
      </BlogContainer>
    </Layout>
  );
}
