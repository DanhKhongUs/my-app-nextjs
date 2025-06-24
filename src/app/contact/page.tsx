import SectionHero from "@/components/SectionHero";
function ContactPage() {
  return (
    <div>
      <div>
        <SectionHero title="LIÊN HỆ" />
      </div>
      <div className="max-w-screen-xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-[300px] md:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.543850228222!2d105.840999!3d21.010017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7a3dfb1d2f%3A0xa1d2b2a745132d77!2sHOA%20BAN%20FOOD!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              className="w-full h-full rounded-md border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e2a5a] mb-4 border-l-4 border-orange-500 pl-2 uppercase">
                Thông tin liên hệ
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  <span className="font-semibold text-[#1e2a5a]">Địa chỉ:</span>{" "}
                  <span className="text-gray-600">
                    111 Phùng Văn Cung, Phường 2, Quận Phú Nhuận, TP. Hồ Chí
                    Minh
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-[#1e2a5a]">
                    Điện thoại:
                  </span>{" "}
                  <span className="text-gray-600">
                    093 890 11 86 (cô Hoàng)
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-[#1e2a5a]">E-mail:</span>{" "}
                  <span className="text-gray-600">
                    BanMaiXanhcts.020417@gmail.com
                  </span>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1e2a5a] mb-4 border-l-4 border-orange-500 pl-2 uppercase">
                Liên hệ chúng tôi
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Họ tên của bạn"
                    className="border rounded p-3 w-full focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email của bạn"
                    className="border rounded p-3 w-full focus:outline-none"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Điện thoại của bạn"
                  className="border rounded p-3 w-full focus:outline-none"
                />
                <textarea
                  placeholder="Ghi chú"
                  rows={4}
                  className="border rounded p-3 w-full focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-green-500 text-white font-semibold px-6 py-2 rounded hover:bg-green-600 transition"
                >
                  GỬI
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
