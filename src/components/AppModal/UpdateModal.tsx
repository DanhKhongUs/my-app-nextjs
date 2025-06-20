"use client";

import { useEffect, useState } from "react";
import { IBlog } from "@/types/blogs";
import { getContent, saveContent } from "@/lib/idb";
import { toast } from "react-toastify";
import { mutate } from "swr";
import Image from "next/image";
import { Input } from "../ui/input";

interface IProps {
  showModalUpdate: boolean;
  setShowModalUpdate: (value: boolean) => void;
  blog: IBlog | null;
  setBlog: (value: IBlog | null) => void;
  onReload: () => void;
}

export default function UpdateModal({
  showModalUpdate,
  setShowModalUpdate,
  blog,
  setBlog,
  onReload,
}: IProps) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    if (blog) {
      setId(blog.id);
      setTitle(blog.title);
      setAuthor(blog.author);
      setContent(blog.content || "");
      setImage(blog.image || "");
    }
  }, [blog]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!title || !author || !content) {
      toast.error("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const existingBlogs = await getContent<IBlog[]>("blogs");
    if (!existingBlogs) return toast.error("Không tìm thấy danh sách blog!");

    const updatedBlogs = existingBlogs.map((b) =>
      b.id === id ? { ...b, title, author, content, image } : b
    );

    await saveContent("blogs", updatedBlogs);

    toast.success("Cập nhật bài viết thành công!");
    handleCloseModal();
    onReload();
    mutate("blogs");
  };

  const handleCloseModal = () => {
    setTitle("");
    setAuthor("");
    setContent("");
    setImage("");
    setBlog(null);
    setShowModalUpdate(false);
  };

  if (!showModalUpdate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl"
          onClick={handleCloseModal}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">Cập nhật bài viết</h2>

        <form className="space-y-4">
          <Input
            type="text"
            className="w-full border px-3 py-2 rounded"
            placeholder="Tiêu đề"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="text"
            className="w-full border px-3 py-2 rounded"
            placeholder="Tác giả"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <textarea
            rows={4}
            className="w-full border px-3 py-2 rounded"
            placeholder="Nội dung"
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
        </form>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={handleCloseModal}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Đóng
          </button>
          <button
            onClick={handleSubmit}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
}
