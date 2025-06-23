"use client";

import { useRouter } from "next/navigation";
import { CurriculumItem } from "@/data/curriculum";

function CurriculumDetail() {
  const router = useRouter();

  return (
    <section className="pt-16 px-4 max-w-screen-xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        CHƯƠNG TRÌNH GIÁO DỤC
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {CurriculumItem.map((item, index) => (
          <div
            key={item.id}
            onClick={() => router.push(`/curriculum/${item.id}`)}
            className={`cursor-pointer rounded-lg p-6 shadow-md h-[150px] transition-all duration-200 hover:scale-105 hover:shadow-lg ${
              index === 0 ? "bg-black text-white" : "bg-green-200 text-black"
            }`}
          >
            <div className="text-lg font-semibold mb-2">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CurriculumDetail;
