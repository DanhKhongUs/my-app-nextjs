import BlogsDetail from "@/components/BlogsDetail";
import NewsSidebar from "@/components/NewsSidebar";

const BlogsPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-10 mt-10 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-center mb-8 text-gray-900">
            TẤT CẢ CÁC BÀI VIẾT
          </h1>
          <BlogsDetail />
        </div>
        <div className="space-y-6 mt-24">
          <NewsSidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
