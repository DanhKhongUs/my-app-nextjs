"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IBlog } from "@/types/blogs";
import { getLatestBlogs } from "@/lib/idb";

export default function NewsSidebar() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getLatestBlogs(4);
      setBlogs(data);
    };
    load();
  }, []);

  return (
    <aside className="bg-white rounded-2xl shadow-lg w-full max-w-sm">
      <section>
        <h3 className="text-center text-white bg-green-600 font-semibold py-2 rounded text-lg tracking-wide">
          TIN TỨC MỚI
        </h3>
        <ul className="mt-4 space-y-4 p-2">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link
                href={`/blogs/${blog.id}`}
                className="flex items-start gap-4 group hover:shadow-md hover:-translate-y-3 transition-all duration-300 rounded p-2"
              >
                {blog.image && (
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden shadow">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug  transition-colors">
                    {blog.title}
                  </h4>
                  <span className="text-xs text-gray-500 mt-1 block">
                    {new Date(blog.createAt).toLocaleDateString("vi-VN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h3 className="text-center text-white bg-green-600 font-semibold py-2 rounded text-lg tracking-wide">
          TIN TỨC NỔI BẬT
        </h3>
        <ul className="mt-4 space-y-4 p-2">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link
                href={`/blogs/${blog.id}`}
                className="flex items-start gap-4 group hover:shadow-md hover:-translate-y-3 transition-all duration-300 rounded p-2"
              >
                {blog.image && (
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden shadow">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug transition-colors">
                    {blog.title}
                  </h4>
                  <span className="text-xs text-gray-500 mt-1 block">
                    {new Date(blog.createAt).toLocaleDateString("vi-VN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
