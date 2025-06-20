"use client";

import { useState } from "react";
import { IBlog } from "@/types/blogs";
import { getContent, saveContent } from "@/lib/idb";
import { toast } from "react-toastify";
import Image from "next/image";
import { Input } from "../ui/input";

interface IProps {
  showModalCreate: boolean;
  setShowModalCreate: (value: boolean) => void;
  onReload: () => void;
}

export default function CreateModal({
  showModalCreate,
  setShowModalCreate,
  onReload,
}: IProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (!title || !author || !content) {
      toast.error("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const blogs = (await getContent<IBlog[]>("blogs")) || [];

    const maxId = Math.max(0, ...blogs.map((b) => b.id ?? 0));
    const newBlog: IBlog = {
      id: maxId + 1,
      title,
      author,
      content,
      image,
    };

    const updated = [...blogs, newBlog];
    await saveContent("blogs", updated);
    toast.success("Thêm bài viết thành công!");
    handleCloseModal();
    onReload();
  };

  const handleCloseModal = () => {
    setTitle("");
    setAuthor("");
    setContent("");
    setImage("");
    setShowModalCreate(false);
  };

  if (!showModalCreate) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 bg-opacity-30 flex items-center justify-center">
      <div className="bg-white w-full max-w-xl p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Thêm bài viết mới</h2>

        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Tiêu đề"
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Tác giả"
            className="w-full border p-2 rounded"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <textarea
            placeholder="Nội dung"
            rows={4}
            className="w-full border p-2 rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div>
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full"
            />
            {image && (
              <div className="relative w-full h-48 mt-2 rounded overflow-hidden">
                <Image
                  src={image}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={handleCloseModal}
          >
            Đóng
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}
