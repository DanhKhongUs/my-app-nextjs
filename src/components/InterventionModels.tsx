"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

function InterventionModels() {
  const router = useRouter();

  const handleChangePage = () => {
    router.push("/about");
  };

  return (
    <section className="pb-16 px-4 max-w-screen-xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-start mb-6">
            MÔ HÌNH CAN THIỆP
          </h2>
          <p className="mb-6 text-gray-700 text-base leading-relaxed">
            Để đảm bảo chất lượng can thiệp cũng như phù hợp với mục tiêu hướng
            tới hòa nhập tích cực cho trẻ. Trung tâm Tư vấn và Can thiệp Ban Mai
            Xanh thiết kế mô hình với nhiều hình thức can thiệp phong phú, phù
            hợp với mức độ phát triển của trẻ.
          </p>
          <button
            onClick={handleChangePage}
            className="bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold py-2 px-6 rounded cursor-pointer"
          >
            XEM THÊM
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="relative rounded-xl overflow-hidden group shadow-lg aspect-[4/3] cursor-pointer">
            <Image
              src="/uploads/danh-gia3.jpg"
              alt="Can thiệp cá nhân"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105 "
            />
            <div className="absolute inset-0 bg-green-700/60 group-hover:bg-green-700/80 transition duration-300 text-white p-5 flex flex-col justify-end">
              <h3 className="text-lg font-bold mb-1">CÁ NHÂN</h3>
              <p className="text-sm mb-2 line-clamp-3">
                Can thiệp cá nhân được coi như một “mô hình y tế” để “huấn
                luyện” trẻ về trạng thái bình thường...
              </p>
              <span className="font-semibold underline text-sm ">XEM THÊM</span>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden group shadow-lg aspect-[4/3] cursor-pointer">
            <Image
              src="/uploads/danh-gia3.jpg"
              alt="Can thiệp nhóm"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-green-700/60 group-hover:bg-green-700/80 transition duration-300 text-white p-5 flex flex-col justify-end">
              <h3 className="text-lg font-bold mb-1">NHÓM</h3>
              <p className="text-sm mb-2 line-clamp-3">
                Can thiệp nhóm sẽ phát huy được tính tích cực, trách nhiệm và
                năng lực hợp tác làm việc...
              </p>
              <span className="font-semibold underline text-sm ">XEM THÊM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InterventionModels;
