"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AppBoard from "@/components/AppModal/AppBoard";
import { getContent } from "@/lib/idb";
import { IBlog } from "@/types/blogs";

export default function AdminPage() {
  const router = useRouter();

  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuth = localStorage.getItem("admin-auth");
    if (!isAuth) {
      router.push("/admin/login");
    }
  }, [router]);

  useEffect(() => {
    const loadBlogs = async () => {
      const data = await getContent<IBlog[]>("blogs");
      const sorted = data?.sort((a, b) => b.id - a.id) ?? [];
      setBlogs(sorted);
      setLoading(false);
    };

    loadBlogs();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-6">Đang tải dữ liệu từ IndexedDB...</div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin - Cập nhật nội dung</h1>
      <AppBoard blogs={blogs} />
    </div>
  );
}
