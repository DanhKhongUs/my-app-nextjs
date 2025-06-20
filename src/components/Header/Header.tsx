"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";
import { siteConfig } from "@/config/siteCofig";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleNextPage = () => {
    router.push("/admin/login");
  };

  return (
    <>
      <div className="bg-sky-200">
        <div className="flex flex-col sm:flex-row max-w-screen-xl mx-auto justify-between items-center py-2">
          <div className="flex gap-3">
            {siteConfig.socialLinks.map((item) => (
              <Link key={item.id} href={item.href} target="_blank">
                <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={20}
                    height={20}
                    className="invert"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="flex gap-2 mt-3 sm:mt-0 items-center">
            <div className=" border-r border-gray-600 pr-2">
              <span className="ml-2 hidden md:inline">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
                <span className="ml-2">test123@gmail.com</span>
              </span>
            </div>
            <div className="flex gap-4 items-center">
              Hotline:{" "}
              <div className="bg-sky-500 w-full rounded-2xl items-center justify-center px-2 py-[2px]">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-white mr-2 px-2"
                />
                <span className="text-white pr-4">0914.268.535</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container max-w-screen-xl mx-auto h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo.png"
              alt="logo "
              width={70}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          {/* Menu */}
          <div className="flex gap-4">
            <Navbar />

            <button
              onClick={handleNextPage}
              className="cursor-pointer ml-2 bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 hover:shadow-lg transition duration-300"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
