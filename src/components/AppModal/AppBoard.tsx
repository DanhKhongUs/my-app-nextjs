"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { getContent, saveContent } from "@/lib/idb";
import { IBlog } from "@/types/blogs";
import CreateModal from "./CreateModal";
import UpdateModal from "./UpdateModal";

interface AppBoardProps {
  blogs: IBlog[];
}

export default function AppBoard({ blogs: initialBlogs }: AppBoardProps) {
  const [blogs, setBlogs] = useState<IBlog[]>(initialBlogs);
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);

  const loadBlogs = async () => {
    const data = await getContent<IBlog[]>("blogs");
    setBlogs(data || []);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const handleDeleteBlog = async (id: number) => {
    if (!confirm(`Bạn có chắc muốn xoá bài viết (id = ${id})?`)) return;

    const newBlogs = blogs.filter((b) => b.id !== id);
    await saveContent("blogs", newBlogs);
    toast.success("Đã xoá bài viết!");
    setBlogs(newBlogs);
  };

  return (
    <div className="px-12 py-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4 ">
        <h3 className="text-2xl font-bold text-gray-800">
          📚 Danh sách bài viết
        </h3>
        <button
          onClick={() => setShowModalCreate(true)}
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded shadow transition cursor-pointer"
        >
          Thêm bài viết
        </button>
      </div>

      <div className="w-full overflow-x-auto rounded-lg shadow border border-gray-200 bg-white">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-3 border-b">#</th>
              <th className="px-4 py-3 border-b">Tiêu đề</th>
              <th className="px-4 py-3 border-b">Tác giả</th>
              <th className="px-4 py-3 border-b">Thao tác</th>
              <th className="px-4 py-3 border-b">Ngày tạo</th>
            </tr>
          </thead>
          <tbody>
            {blogs.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-500">
                  Không có bài viết nào.
                </td>
              </tr>
            ) : (
              blogs.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{item.title}</td>
                  <td className="px-4 py-2">{item.author}</td>
                  <td className="px-4 py-2 text-center space-y-1 sm:space-x-2 sm:space-y-0">
                    <div className="flex flex-col sm:flex-row sm:justify-center gap-1">
                      <Link
                        href={`/blogs/${item.id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded shadow transition"
                      >
                        Xem
                      </Link>
                      <button
                        onClick={() => {
                          setBlog(item);
                          setShowModalUpdate(true);
                        }}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded shadow transition"
                      >
                        Sửa
                      </button>
                      <button
                        onClick={() => handleDeleteBlog(item.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded shadow transition"
                      >
                        Xoá
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    {new Date(item.createAt).toLocaleDateString("vi-VN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
        onReload={loadBlogs}
      />

      <UpdateModal
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
        blog={blog}
        setBlog={setBlog}
        onReload={loadBlogs}
      />
    </div>
  );
}
