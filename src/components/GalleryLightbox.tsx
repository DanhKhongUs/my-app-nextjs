"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import Image from "next/image";

interface GalleryLightboxProps {
  images: string[];
  columns?: 2 | 3 | 4;
}

export default function GalleryLightbox({
  images,
  columns = 3,
}: GalleryLightboxProps) {
  const [index, setIndex] = useState<number | null>(null);

  const columnMap: Record<2 | 3 | 4, string> = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${columnMap[columns]}`}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md cursor-pointer group"
            onClick={() => setIndex(i)}
          >
            <Image
              src={img}
              alt={`Image ${i + 1}`}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-300 group-hover:scale-105 group-hover:opacity-90"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={index !== null}
        close={() => setIndex(null)}
        slides={images.map((src) => ({ src }))}
        index={index ?? 0}
      />
    </>
  );
}
