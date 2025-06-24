import BlogsDetail from "@/components/BlogsDetail";
import NewsSidebar from "@/components/NewsSidebar";
import SectionHero from "@/components/SectionHero";

const BlogsPage = () => {
  return (
    <div>
      <div>
        <SectionHero title="TẤT CẢ CÁC BÀI VIẾT" />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-10  pb-4">
          <div>
            <BlogsDetail />
          </div>
          <div className="space-y-6 mt-8">
            <NewsSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
