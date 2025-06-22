"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { IBlog } from "@/types/blogs";
import Image from "next/image";
import { ModalItem } from "@/data/modal";
import ModalSidebar from "@/components/ModalSidebar";

export default function ViewDetailModal() {
  const params = useParams();
  const [modal, setModal] = useState<IBlog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.id) {
      setLoading(false);
      return;
    }

    const id = Number(params.id);
    if (isNaN(id)) {
      setLoading(false);
      return;
    }

    const found = ModalItem.find((b) => b.id === id) || null;
    setModal(found);
    setLoading(false);
  }, [params]);

  if (loading) {
    return <div className="text-center mt-8">Đang tải...</div>;
  }

  if (!modal) {
    return (
      <div className="text-center mt-8 text-red-500">
        Không tìm thấy bài viết với ID: {params?.id}
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto mt-8 p-4 bg-white shadow rounded-lg grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-10">
      <div>
        <div className="mb-4">
          <Link href="/modal" className="text-blue-600 hover:underline">
            ← Quay lại danh sách
          </Link>
        </div>

        <div className="border-b pb-4 mb-4">
          <h1 className="text-2xl font-bold">{modal.title}</h1>
          <div className="text-gray-500 mb-1">{modal.createAt}</div>
          <p className="text-gray-500">Tác giả: {modal.author}</p>
        </div>

        <div className="text-gray-800 py-4 whitespace-pre-line">
          {modal.content}
        </div>

        {modal.image && (
          <div className="relative w-full h-[400px] mt-4 rounded overflow-hidden">
            <Image
              src={modal.image}
              alt="Ảnh bài viết"
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div className="space-y-6">
        <ModalSidebar />
      </div>
    </div>
  );
}
