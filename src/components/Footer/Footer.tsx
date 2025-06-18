import { siteConfig } from "@/config/siteCofig";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="bg-black text-white px-6 pt-12 pb-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
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

          {/* Thông tin liên hệ */}
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

          {/* Liên kết nhanh */}
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

          {/* Đăng ký nhận tin */}
          <div>
            <h3 className="text-lg font-bold mb-2">ĐĂNG KÝ NHẬN TIN</h3>
            <form className="flex items-center bg-white rounded-full overflow-hidden shadow-md">
              <input
                type="email"
                placeholder="Đăng ký nhận tin"
                className="flex-1 px-4 py-2 text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-full"
              >
                ĐĂNG KÝ
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm border-t border-white/10 pt-4">
          © 2025 trungtambanmaixanh.com – Thiết kế bởi sikido.vn
        </div>
      </div>
    </footer>
  );
}
