import Banner from "@/components/Banner";
import Image from "next/image";

const reasons = [
  {
    image: "/uploads/reasons/yeu-thuong.png",
    text: "Tạo môi trường yêu thương trẻ",
  },
  {
    image: "/uploads/reasons/tu-duy.png",
    text: "Phát triển tư duy, kỹ năng xã hội",
  },
  { image: "/uploads/reasons/niem-tin.png", text: "Đồng hành và tạo niềm tin" },
  {
    image: "/uploads/reasons/hoc-tap.png",
    text: "Tạo điều kiện học tập đa dạng",
  },
  {
    image: "/uploads/reasons/hoa-nhap.png",
    text: "Xây dựng cộng đồng hòa nhập",
  },
  {
    image: "/uploads/reasons/suc-khoe.png",
    text: "Chăm sóc sức khỏe và dinh dưỡng",
  },
];

export default function Home() {
  return (
    <div>
      <Banner />

      <div>
        <section className="bg-white py-16 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            VÌ SAO NÊN CHỌN CHÚNG TÔI
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 max-w-6xl mx-auto">
            {reasons.map((item, index) => (
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
      </div>
    </div>
  );
}
