"use client";

import { JSX, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import DisplayScroll from "./DisplayScroll";

const tabs = [
  { label: "Về chúng tôi", id: "ve-chung-toi" },
  { label: "Lắng nghe", id: "lang-nghe" },
  { label: "Định Hướng", id: "dinh-huong" },
  { label: "Đồng hành", id: "dong-hanh" },
  { label: "Niềm tin", id: "niem-tin" },
  { label: "Yêu trẻ", id: "yeu-tre" },
];

const contents: Record<string, { content: JSX.Element; image: string }> = {
  "ve-chung-toi": {
    content: (
      <>
        <p className="mb-4">
          <strong>
            Trung tâm Hỗ trợ Phát triển Giáo dục Hòa nhập Ban Mai Xanh
          </strong>{" "}
          luôn nỗ lực phấn đấu là trung tâm hàng đầu trong việc giáo dục trẻ
          chậm nói, trẻ tự kỷ, trẻ tăng động, giảm chú ý, trẻ rối loạn cảm xúc,
          trẻ ngọng, khó khăn trong học tập, trẻ chậm phát triển trí tuệ bằng
          chất lượng giáo dục, tâm huyết, tình yêu thương trẻ cùng với sự kết
          hợp các tiến bộ trên thế giới về can thiệp và giáo dục, hỗ trợ cho trẻ
          có nhu cầu đặc biệt.
        </p>
        <p className="italic mb-4">
          “Nơi chạm vào yêu thương
          <br />
          Nơi chạm vào trí tuệ
          <br />
          Nơi chạm vào sự kiên nhẫn
          <br />
          Để tìm thấy ánh sáng cho trẻ có nhu cầu giáo dục đặc biệt”
        </p>
        <ul className="space-y-1">
          <li>
            <strong>Địa chỉ:</strong>{" "}
            <span className="italic text-gray-700">
              Số 262 Lê Đức Thọ, P.6, Q.Gò Vấp, TP.HCM
            </span>
          </li>
          <li>
            <strong>Hotline:</strong>{" "}
            <span className="italic text-gray-700">0123 456 789</span>
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <span className="italic text-gray-700">localhost:3000</span>
          </li>
          <li>
            <strong>Mail:</strong>{" "}
            <span className="italic text-gray-700">example2444@gmail.com</span>
          </li>
        </ul>
      </>
    ),
    image: "/uploads/abouts/img1.png",
  },
  "lang-nghe": {
    content: <p>Nội dung phần Lắng nghe.</p>,
    image: "/logo/logo.png",
  },
  "dinh-huong": {
    content: <p>Nội dung phần Định Hướng.</p>,
    image: "/logo/logo.png",
  },
  "dong-hanh": {
    content: <p>Nội dung phần Đồng hành.</p>,
    image: "/logo/logo.png",
  },
  "niem-tin": {
    content: <p>Nội dung phần Niềm tin.</p>,
    image: "/logo/logo.png",
  },
  "yeu-tre": {
    content: <p>Nội dung phần Yêu trẻ.</p>,
    image: "/logo/logo.png",
  },
};

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("ve-chung-toi");
  const router = useRouter();

  const handleViewMore = () => {
    router.push("/about");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 pb-4" id="ve-chung-toi">
      <h2 className="text-3xl font-bold mb-10 mt-4 text-center flex justify-center md:text-left">
        VỀ CHÚNG TÔI
      </h2>

      <DisplayScroll delay={0.3}>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={clsx(
                  "block w-full text-left px-4 py-3 rounded font-bold transition cursor-pointer",
                  activeTab === tab.id
                    ? "bg-sky-500 text-white"
                    : "hover:bg-sky-100 text-black"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="md:col-span-3 space-y-6">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              <motion.div
                key={activeTab + "-content"}
                className="md:col-span-2 space-y-4 text-start"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {contents[activeTab].content}
              </motion.div>

              <motion.div
                key={activeTab + "-image"}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={contents[activeTab].image}
                  alt={tabs.find((t) => t.id === activeTab)?.label || ""}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md w-full h-96 object-cover"
                />
              </motion.div>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <button
                onClick={handleViewMore}
                className="px-6 py-2 rounded flex justify-center bg-green-600 text-white hover:bg-green-700 transition cursor-pointer"
              >
                XEM THÊM
              </button>
            </motion.div>
          </div>
        </div>
      </DisplayScroll>
    </section>
  );
}
