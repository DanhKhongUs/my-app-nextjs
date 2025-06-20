"use client";

import { useState } from "react";

interface ContactProps {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<ContactProps>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      console.log("Gửi form:", form);

      await new Promise((res) => setTimeout(res, 1000));

      alert("Đã gửi thành công!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Gửi thất bại:", err);
      alert("Gửi thất bại. Vui lòng thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-12 mb-10">
      <div className="absolute inset-0 bg-[#ff6b6b] rounded-3xl w-[80%] h-[100%] mx-auto translate-y-6 z-0 transition-all" />

      <div className="relative z-10 bg-gradient-to-r from-[#0f3d3e] to-[#0c4749] text-white rounded-3xl p-6 sm:p-10 md:p-14 max-w-screen-xl w-full mx-auto shadow-2xl">
        <div className="text-center mb-10">
          <h3 className="text-3xl sm:text-4xl font-bold mb-3">Liên hệ</h3>
          <div className="mx-auto w-16 border-t-4 border-teal-400 rounded-full" />
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Tên của bạn"
            value={form.name}
            onChange={handleChange}
            className="p-4 rounded text-gray-900 bg-white outline-none w-full shadow-sm"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email của bạn"
            value={form.email}
            onChange={handleChange}
            className="p-4 rounded text-gray-900 bg-white outline-none w-full shadow-sm"
            required
          />
          <textarea
            name="message"
            placeholder="Nội dung"
            value={form.message}
            onChange={handleChange}
            rows={6}
            className="p-4 rounded text-gray-900 bg-white outline-none w-full shadow-sm"
            required
          />
          <div className="text-right">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#ff4d4d] text-white font-semibold py-3 px-6 rounded-md transition duration-300 ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#ff3333]"
              }`}
            >
              {isSubmitting ? "Đang gửi..." : "Gửi liên hệ"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
