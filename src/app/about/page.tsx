import Image from "next/image";

const slides = [
  "slide1.png",
  "slide2.png",
  "slide3.png",
  "slide4.png",
  "slide5.png",
  "slide6.png",
  "slide7.png",
  "slide8.png",
  "slide9.png",
  "slide10.png",
  "slide11.png",
  "slide12.png",
  "slide13.png",
  "slide14.png",
  "slide15.png",
  "slide16.png",
];

export default function AboutPage() {
  return (
    <div className="px-4 py-10">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="max-w-screen-xl mx-auto mb-10 relative aspect-[16/9] rounded-lg overflow-hidden"
        >
          <Image
            src={`/uploads/slidesAbout/${slide}`}
            alt={`slide ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
