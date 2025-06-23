import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import CustomerFeedback from "@/components/CustomerFeedback";
import GalleryLightbox from "@/components/GalleryLightbox";
import InterventionModels from "@/components/InterventionModels";
import { ReasonsItem } from "@/data/reasons";
import Image from "next/image";
import DisplayScroll from "@/components/DisplayScroll";
import LatestBlogsDetail from "@/components/LatestBlogsDetail";
import Contact from "@/components/Contact/Contact";
import CurriculumDetail from "@/components/CurriculumDetail";

export default function Home() {
  return (
    <div>
      <Banner />

      <DisplayScroll>
        <section className="bg-white py-16 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            VÌ SAO NÊN CHỌN CHÚNG TÔI
          </h2>

          <DisplayScroll delay={0.3}>
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
          </DisplayScroll>
        </section>
      </DisplayScroll>

      <DisplayScroll>
        <AboutSection />
      </DisplayScroll>

      <DisplayScroll>
        <div className="relative w-full  aspect-[16/9] mt-12">
          <Image
            src="/uploads/ban-bia.jpg"
            alt="ban-bida"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </div>
      </DisplayScroll>
      <DisplayScroll>
        <CurriculumDetail />
      </DisplayScroll>

      <DisplayScroll>
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
      </DisplayScroll>

      <DisplayScroll>
        <div className="relative w-full h-[824px]">
          <Image
            src="/uploads/bida.jpg"
            alt="bida"
            fill
            className="object-cover"
            priority
          />
        </div>
      </DisplayScroll>

      <DisplayScroll>
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
      </DisplayScroll>

      <DisplayScroll>
        <InterventionModels />
      </DisplayScroll>

      <DisplayScroll>
        <CustomerFeedback />
      </DisplayScroll>

      <DisplayScroll>
        <LatestBlogsDetail />
      </DisplayScroll>

      <DisplayScroll>
        <Contact />
      </DisplayScroll>
    </div>
  );
}
