"use client";

import { useEffect, useState } from "react";
import { IBlog } from "@/types/blogs";
import { getLatestBlogs } from "@/lib/idb";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LatestBlogsDetail() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  const router = useRouter();

  useEffect(() => {
    getLatestBlogs(3).then(setBlogs);
  }, []);

  if (blogs.length === 0) return null;

  const handleNextPage = () => {
    router.push("/blogs");
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Tin tức mới nhất
          </h2>
          <p className="text-gray-500 uppercase">Chuyên mục tin tức</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link
              href={`/blogs/${blog.id}`}
              key={blog.id}
              className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col transition hover:shadow-2xl"
            >
              {blog.image && (
                <div className="relative w-full h-48">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="flex flex-col flex-1 p-5">
                <p className=" text-gray-400 mb-1">Tác giả: {blog.author}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600  line-clamp-4 mb-4">
                  {blog.content}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={handleNextPage}
          className="bg-green-600 text-white px-6 py-3 font-semibold rounded hover:bg-green-700 cursor-pointer"
        >
          Xem thêm
        </button>
      </div>
    </section>
  );
}
