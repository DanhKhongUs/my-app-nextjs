"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Giới thiệu" },
  { href: "/products", label: "Sản phẩm" },
  { href: "/work", label: "Hoạt động" },
  { href: "/contact", label: "Liên hệ" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <div className="bg-sky-200">
        <div className="flex flex-col sm:flex-row max-w-screen-xl mx-auto justify-between items-center py-2">
          <div className="flex gap-3">
            <Link href="https://facebook.com" target="_blank">
              <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center ">
                <Image
                  src="/uploads/facebook.png"
                  alt="facebook"
                  width={20}
                  height={20}
                  className="invert"
                />
              </div>
            </Link>

            <Link href="https://tiktok.com" target="_blank">
              <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center ">
                <Image
                  src="/uploads/tik-tok.png"
                  alt="tiktok"
                  width={20}
                  height={20}
                  className="invert"
                />
              </div>
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center">
                <Image
                  src="/uploads/youtube.png"
                  alt="youtube"
                  width={20}
                  height={20}
                  className="invert"
                />
              </div>
            </Link>

            <Link href="https://instagram.com" target="_blank">
              <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center ">
                <Image
                  src="/uploads/instagram.png"
                  alt="instagram"
                  width={20}
                  height={20}
                  className="invert"
                />
              </div>
            </Link>
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
          <nav className="hidden lg:flex items-center gap-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-gray-800 text-lg font-medium hover:text-sky-600 transition-colors duration-200",
                  pathname === item.href && "text-sky-600 font-semibold"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
