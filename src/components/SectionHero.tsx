"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionHero({ title }: { title: string }) {
  return (
    <div className="relative w-full h-64">
      <Image
        src="/uploads/nen-header.jpg"
        alt={`Header ${title}`}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-white text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
}
