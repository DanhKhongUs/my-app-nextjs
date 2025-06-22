"use client";

import Link from "next/link";
import Image from "next/image";
import { ModalItem } from "@/data/modal";

export default function ModalsDetail() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ModalItem.map((modal) => (
              <Link
                href={`/modal/${modal.id}`}
                key={modal.id}
                className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col transition hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                {modal.image && (
                  <div className="relative w-full h-48">
                    <Image
                      src={modal.image}
                      alt={modal.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-4">
                  <h2 className="text-lg font-semibold mb-1 line-clamp-2">
                    {modal.title}
                  </h2>

                  <div className="text-gray-500 text-sm mb-1">
                    {modal.createAt}
                  </div>

                  <div className="text-gray-500 text-sm mb-2">
                    Tác giả: {modal.author}
                  </div>

                  <p className="text-gray-700 text-sm line-clamp-4">
                    {modal.content}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
