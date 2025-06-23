"use client";

import Link from "next/link";
import Image from "next/image";
import { ModalItem } from "@/data/modals";
import { motion } from "framer-motion";

export default function ModalsDetail() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ModalItem.map((modal) => (
              <motion.div
                key={modal.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: modal.id * 0.02 }}
                className="h-full"
              >
                <Link
                  href={`/modals/${modal.id}`}
                  className="flex flex-col h-full bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-xl hover:-translate-y-1 duration-300"
                >
                  {modal.image && (
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={modal.image}
                        alt={modal.title}
                        fill
                        className="object-cover rounded-t-lg"
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

                    <div className="text-gray-500 mb-2">
                      Tác giả: {modal.author}
                    </div>

                    <p className="text-gray-700 line-clamp-4">
                      {modal.content}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
