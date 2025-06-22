"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AppBoard from "@/components/AppModal/AppBoard";
import { getContent } from "@/lib/idb";
import { IBlog } from "@/types/blogs";
import { useAuth } from "@/context/AuthContext";

export default function AdminPage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    const loadBlogs = async () => {
      const data = await getContent<IBlog[]>("blogs");
      const sorted = data?.sort((a, b) => b.id - a.id) ?? [];
      setBlogs(sorted);
      setLoading(false);
    };

    loadBlogs();
  }, []);

  if (!isAuthenticated) return null;

  if (loading) {
    return (
      <div className="text-center mt-6">Đang tải dữ liệu từ IndexedDB...</div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        {user?.name} - Cập nhật nội dung
      </h1>
      <AppBoard blogs={blogs} />
    </div>
  );
}
