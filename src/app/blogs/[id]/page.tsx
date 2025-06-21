"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { IBlog } from "@/types/blogs";
import { getContent } from "@/lib/idb";
import Image from "next/image";
import NewsSidebar from "@/components/NewsSidebar";

export default function ViewDetailBlog() {
  const params = useParams();
  const id = Number(params.id);

  const [blog, setBlog] = useState<IBlog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogFromIDB = async () => {
      const blogs = await getContent<IBlog[]>("blogs");
      const found = blogs?.find((b) => b.id === id) || null;
      setBlog(found);
      setLoading(false);
    };

    if (!isNaN(id)) {
      loadBlogFromIDB();
    }
  }, [id]);

  if (loading) {
    return <div className="text-center mt-8">Đang tải...</div>;
  }

  if (!blog) {
    return (
      <div className="text-center mt-8 text-red-500">
        Không tìm thấy bài viết với ID: {id}
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto mt-8 p-4 bg-white shadow rounded-lg grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-10">
      <div>
        <div className="mb-4">
          <Link href="/blogs" className="text-blue-600 hover:underline">
            ← Quay lại danh sách
          </Link>
        </div>

        <div className="border-b pb-4 mb-4">
          <h1 className="text-2xl font-bold">{blog.title}</h1>

          <div className="text-gray-500 mb-1">
            {new Date(blog.createAt).toLocaleDateString("vi-VN", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </div>
          <p className="text-gray-500">Tác giả: {blog.author}</p>
        </div>

        <div className="text-gray-800 py-4">{blog.content}</div>

        {blog.image && (
          <div className="relative w-full h-150 mt-2 rounded overflow-hidden">
            <Image
              src={blog.image}
              alt="Preview"
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
      <div className="space-y-6">
        <NewsSidebar />
      </div>
    </div>
  );
}
