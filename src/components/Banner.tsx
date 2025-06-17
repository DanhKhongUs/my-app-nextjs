"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Button } from "./ui/button";

const slides = [
  {
    image: "/uploads/slides/sgvesang.jpg",
  },
  {
    image: "/uploads/slides/sgvedem.jpg",
  },
];

const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

export default function Banner() {
  const [current, setCurrent] = useState(1);
  const [noTransition, setNoTransition] = useState(false);

  const nextSlide = () => setCurrent((prev) => prev + 1);
  const prevSlide = () => setCurrent((prev) => prev - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    const slider = document.getElementById("slider-wrapper");

    const handleTransitionEnd = () => {
      if (current === 0) {
        setNoTransition(true);
        setCurrent(slides.length);
      } else if (current === slides.length + 1) {
        setNoTransition(true);
        setCurrent(1);
      }
    };

    slider?.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      slider?.removeEventListener("transitionend", handleTransitionEnd);
  }, [current]);

  useEffect(() => {
    if (noTransition) {
      const timeout = setTimeout(() => setNoTransition(false), 50);
      return () => clearTimeout(timeout);
    }
  }, [noTransition]);

  return (
    <div className="group relative w-full bg-[#fdfbf5]">
      <div className="overflow-hidden relative aspect-[16/9] sm:aspect-[21/9]">
        <div
          id="slider-wrapper"
          className={`flex h-full ${
            noTransition ? "" : "transition-transform duration-500 ease-in-out"
          }`}
          style={{
            transform: `translateX(-${
              current * (100 / extendedSlides.length)
            }%)`,
            width: `${extendedSlides.length * 100}%`,
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-none h-full relative"
              style={{ width: `${100 / extendedSlides.length}%` }}
            >
              {slide.image && (
                <Image
                  src={slide.image}
                  alt={`Slide ${index}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 1}
                />
              )}
            </div>
          ))}
        </div>

        <Button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#263d2f]/90 text-white shadow-md transition-opacity duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </Button>

        <Button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#263d2f] text-white shadow-md transition-opacity duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
        >
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </Button>
      </div>
    </div>
  );
}
