"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IBlog } from "@/types/blogs";
import { ModalItem } from "@/data/modals";

export default function ModalSidebar() {
  const [modals, setModals] = useState<IBlog[]>([]);

  useEffect(() => {
    const latest = ModalItem.slice(0, 4);
    setModals(latest);
  }, []);

  return (
    <aside className="w-full">
      <section className="bg-white rounded-2xl shadow-md">
        <h3 className="text-center text-white bg-green-600 font-semibold py-2 rounded-t-lg text-base md:text-lg tracking-wide">
          MÔ HÌNH MỚI
        </h3>
        <ul className="mt-4 space-y-4 px-4 pb-4">
          {modals.map((modal) => (
            <li key={modal.id}>
              <Link
                href={`/modals/${modal.id}`}
                className="flex items-start gap-4 group hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-md p-2"
              >
                {modal.image && (
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden shadow">
                    <Image
                      src={modal.image}
                      alt={modal.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h4 className=" font-semibold text-gray-800 line-clamp-2 leading-snug  transition-colors">
                    {modal.title}
                  </h4>
                  <span className="text-xs text-gray-500 mt-1 block">
                    {modal.createAt}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6 bg-white rounded-2xl shadow-md">
        <h3 className="text-center text-white bg-green-600 font-semibold py-2 rounded-t-lg text-base md:text-lg tracking-wide">
          MÔ HÌNH NỔI BẬT
        </h3>
        <ul className="mt-4 space-y-4 px-4 pb-4">
          {modals.map((modal) => (
            <li key={modal.id}>
              <Link
                href={`/modals/${modal.id}`}
                className="flex items-start gap-4 group hover:shadow-md hover:-translate-y-3 transition-all duration-300 rounded p-2"
              >
                {modal.image && (
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden shadow">
                    <Image
                      src={modal.image}
                      alt={modal.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h4 className=" font-semibold text-gray-800 line-clamp-2 leading-snug transition-colors">
                    {modal.title}
                  </h4>
                  <span className="text-xs text-gray-500 mt-1 block">
                    {modal.createAt}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
