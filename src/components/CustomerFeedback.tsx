"use client";

import {
  faChevronLeft,
  faChevronRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Chị Mai - PH bé Ngọc Hiền",
    role: "Nhân viên văn phòng",
    content:
      "Con tôi nhờ được các thầy cô trong Trung tâm Ban Mai giúp đỡ mà giờ cháu đã khá hơn rất nhiều. Thầy cô ở Trung tâm thật sự là những con người kiên nhẫn, yêu trẻ và nhiệt huyết với nghề. Rất biết ơn vì điều đó, tôi rất an tâm khi con tôi theo học tại Trung tâm.",
    image: "/uploads/danh-gia1.jpg",
  },
  {
    id: 2,
    name: "Anh Hải - PH em Gia Minh",
    role: "Kiến trúc sư",
    content:
      "Tôi cảm thấy rất biết ơn Trung tâm Ban Mai Xanh đã giúp con tôi rất nhiều, giờ đây cháu đã phát triển hơn, và gắn hơn với gia đình.",
    image: "/uploads/danh-gia2.jpg",
  },
  {
    id: 3,
    name: "Cô Thu - PH bé Minh Nhật",
    role: "Giáo viên",
    content:
      "Con tôi đã tiến bộ vượt bậc nhờ môi trường thân thiện và chuyên nghiệp ở Trung tâm.",
    image: "/uploads/danh-gia3.jpg",
  },
  {
    id: 4,
    name: "Anh Quang - PH bé Hữu Tài",
    role: "Kỹ sư xây dựng",
    content:
      "Trung tâm rất tận tâm, cháu tiến bộ rõ rệt, cảm ơn Ban Mai Xanh rất nhiều.",
    image: "/uploads/danh-gia3.jpg",
  },
];

export default function CustomerFeedback() {
  const [current, setCurrent] = useState(1);
  const [noTransition, setNoTransition] = useState(false);
  const [cardPerView, setCardPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardPerView(1);
      } else {
        setCardPerView(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const extendedSlides = [
    ...testimonials.slice(-cardPerView),
    ...testimonials,
    ...testimonials.slice(0, cardPerView),
  ];

  const prev = () => setCurrent((prev) => prev - 1);
  const next = () => setCurrent((prev) => prev + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    const wrapper = document.getElementById("testimonial-wrapper");
    const handleTransitionEnd = () => {
      if (current === 0) {
        setNoTransition(true);
        setCurrent(testimonials.length);
      } else if (current === testimonials.length + cardPerView) {
        setNoTransition(true);
        setCurrent(cardPerView);
      }
    };
    wrapper?.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      wrapper?.removeEventListener("transitionend", handleTransitionEnd);
  }, [current, cardPerView]);

  useEffect(() => {
    if (noTransition) {
      const timeout = setTimeout(() => setNoTransition(false), 50);
      return () => clearTimeout(timeout);
    }
  }, [noTransition]);

  return (
    <section
      className="relative py-20 px-4 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/uploads/B52.jpg')" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-lg font-semibold mb-2">Phản hồi từ Phụ huynh</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          NIỀM VUI CỦA BƠ NĂM HAI
        </h2>
        <p className="italic text-lg text-white/90 mb-10">
          Trung tâm Hỗ trợ Phát triển Giáo dục Hòa nhập BƠ NĂM HAI
        </p>

        <div className="overflow-hidden relative max-w-6xl mx-auto">
          <div
            id="testimonial-wrapper"
            className={`flex ${
              noTransition
                ? ""
                : "transition-transform duration-500 ease-in-out"
            }`}
            style={{
              transform: `translateX(-${
                (current * 100) / extendedSlides.length
              }%)`,
              width: `${(extendedSlides.length * 100) / cardPerView}%`,
            }}
          >
            {extendedSlides.map((item, i) => (
              <div
                key={i}
                className="flex-none px-4"
                style={{ width: `${100 / extendedSlides.length}%` }}
              >
                <div className="bg-white text-gray-900 rounded-xl p-6 shadow-lg h-full flex flex-col justify-between">
                  <div className="flex mt-4 border-b border-gray-400">
                    <p className="text-4xl text-orange-300 mb-2">
                      <FontAwesomeIcon icon={faQuoteLeft} size="xl" />
                    </p>
                    <p className="text-start leading-relaxed mb-6 ml-4">
                      {item.content}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-20 h-20 relative rounded-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black p-2 px-4 rounded-full shadow z-10"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black p-2 px-4 rounded-full shadow z-10"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
}
