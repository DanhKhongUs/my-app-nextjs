import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import GalleryLightbox from "@/components/GalleryLightbox";
import InterventionModels from "@/components/InterventionModels";
import { ReasonsItem } from "@/data/reasons";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Banner />

      <section className="bg-white py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          VÌ SAO NÊN CHỌN CHÚNG TÔI
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 max-w-6xl mx-auto">
          {ReasonsItem.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 relative mb-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:-translate-y-2 cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.text}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="font-bold text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div>
        <AboutSection />
      </div>

      <div className="relative w-full h-[824px] mt-12">
        <Image
          src="/uploads/ban-bia.jpg"
          alt="ban-bida"
          fill
          className="object-cover"
          priority
        />
      </div>
      <section className="pt-16 px-4 max-w-screen-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          CHƯƠNG TRÌNH GIÁO DỤC
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg p-6 shadow-md bg-black h-[150px] text-white">
            <div className="text-lg font-semibold mb-2">01</div>
            <h3 className="text-xl font-bold">GIÁO DỤC BIDA TỪ SỚM</h3>
          </div>
          <div className="rounded-lg p-6 shadow-md bg-green-200 text-black h-[150px]">
            <div className="text-lg font-semibold mb-2">02</div>
            <h3 className="text-xl font-bold">TẬP LUYỆN NHỮNG CÚ NHẢY BI</h3>
          </div>
          <div className="rounded-lg p-6 shadow-md bg-green-200 text-black h-[150px]">
            <div className="text-lg font-semibold mb-2">03</div>
            <h3 className="text-xl font-bold">ĐIỀU TIẾT TÂM LÝ TRÊN BÀN</h3>
          </div>
        </div>
      </section>

      {/* Tổ chức đánh giá */}
      <section className="py-16 px-4 max-w-screen-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          TỔ CHỨC ĐÁNH GIÁ
        </h2>

        <GalleryLightbox
          images={[
            "/uploads/danh-gia1.jpg",
            "/uploads/danh-gia2.jpg",
            "/uploads/danh-gia3.jpg",
          ]}
        />
      </section>

      <div className="relative w-full h-[824px]">
        <Image
          src="/uploads/bida.jpg"
          alt="bida"
          fill
          className="object-cover"
          priority
        />
      </div>

      <section className="py-16 px-4 max-w-screen-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          HOẠT ĐỘNG NGOẠI KHÓA
        </h2>

        <GalleryLightbox
          images={[
            "/uploads/danh-gia1.jpg",
            "/uploads/danh-gia2.jpg",
            "/uploads/danh-gia3.jpg",
            "/uploads/danh-gia3.jpg",
            "/uploads/danh-gia3.jpg",
            "/uploads/danh-gia3.jpg",
            "/uploads/danh-gia3.jpg",
            "/uploads/danh-gia3.jpg",
          ]}
          columns={4}
        />
      </section>

      <div>
        <InterventionModels />
      </div>
    </div>
  );
}
