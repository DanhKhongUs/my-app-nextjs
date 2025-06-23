"use client";
import { useEffect, useState } from "react";
import { IBlog } from "@/types/blogs";
import { getLatestBlogs } from "@/lib/idb";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function BlogsDetail() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 9;
  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);

  useEffect(() => {
    getLatestBlogs().then(setBlogs);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              className="h-full"
            >
              <Link
                href={`/blogs/${blog.id}`}
                className="flex flex-col h-full bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                {blog.image && (
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-4">
                  <h2 className="text-lg font-semibold mb-1 line-clamp-2">
                    {blog.title}
                  </h2>

                  <div className="text-gray-500 text-sm mb-1">
                    {new Date(blog.createAt).toLocaleDateString("vi-VN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </div>

                  <div className="text-gray-500 mb-2">
                    Tác giả: {blog.author}
                  </div>

                  <p className="text-gray-700 line-clamp-4 mt-auto">
                    {blog.content}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border text-sm disabled:opacity-50"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded border text-sm ${
                  page === currentPage
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border text-sm disabled:opacity-50"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
