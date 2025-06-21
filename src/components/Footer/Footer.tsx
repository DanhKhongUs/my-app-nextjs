import { siteConfig } from "@/config/siteCofig";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="bg-black text-white px-12 pt-12 pb-6">
        <div className="max-w-7xl mx-auto flex justify-between flex-col md:flex-row gap-8">
          <div>
            <Image
              src="/logo/footer.jpg"
              alt="footer"
              width={200}
              height={0}
              className="mb-4"
            />
            <p className="text-sm leading-6">
              “Nơi chạm vào yêu thương
              <br />
              Nơi chạm vào trí tuệ
              <br />
              Nơi chạm vào sự kiên nhẫn
              <br />
              Để tìm thấy ánh sáng cho trẻ có nhu cầu
              <br />
              giáo dục đặc biệt”
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">THÔNG TIN LIÊN HỆ</h3>
            <div className="italic flex flex-col">
              <span className="mt-4">
                Địa chỉ: Số 111 Phùng Văn Cung, Phường 2, Quận Phú Nhuận, TP. Hồ
                Chí Minh
              </span>
              <span className="mt-4">Hotline: 093 890 11 86 (cô Hoàng)</span>
              <span className="mt-4">Mail: BanMaiXanhcts.020417@gmail.com</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">LIÊN KẾT NHANH</h3>
            <div className="space-y-4 flex flex-col mt-4">
              {siteConfig.navLinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="hover:translate-x-4 transition-all duration-300 cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size="sm"
                    className="mr-2"
                  />{" "}
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white text-sm border-t border-white/10 bg-[#282828] p-2">
        © 2025 trungtambonamhai.com – Thiết kế bởi thanhdanhpy.vn
      </div>
    </footer>
  );
}
