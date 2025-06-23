"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Navbar/Navbar";
import NavbarToggle from "../Navbar/NavbarToggle";
import { siteConfig } from "@/config/siteCofig";
import { User } from "@/types/user";
import * as Popover from "@radix-ui/react-popover";

export default function Header() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) setCurrentUser(JSON.parse(user));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 856);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    router.refresh();
  };

  const handleNextPage = () => {
    router.push("/admin/login");
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-sky-200">
        <div className="flex flex-col sm:flex-row max-w-screen-xl mx-auto justify-between items-center py-2 px-4 gap-2 sm:gap-0">
          <div className="flex gap-3">
            {siteConfig.socialLinks.map((item) => (
              <Link key={item.id} href={item.href} target="_blank">
                <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center hover:scale-105 transition">
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

          <div className="flex gap-3 items-center">
            <div className="border-r border-gray-400 pr-3 hidden md:flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-600 mr-2"
              />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-semibold">Hotline:</span>
              <div className="bg-sky-500 text-white rounded-full px-3 py-[2px] flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-white" />
                <span>0914.268.535</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white shadow sticky top-0 z-50 px-4">
        <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between">
          {!isDesktop && (
            <button
              className="text-[#4a4a4a]"
              onClick={() => setIsNavbarOpen(true)}
            >
              <FontAwesomeIcon icon={faBars} size="xl" />
            </button>
          )}

          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo.png"
              alt="Logo"
              width={70}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          <div className="flex items-center gap-4">
            {isDesktop ? (
              <Navbar />
            ) : (
              <NavbarToggle isOpen={isNavbarOpen} setIsOpen={setIsNavbarOpen} />
            )}

            {/* User Avatar */}
            <div className="flex items-center gap-4">
              {currentUser ? (
                <Popover.Root open={open} onOpenChange={setOpen}>
                  <Popover.Trigger asChild>
                    <div
                      onMouseEnter={() => isDesktop && setOpen(true)}
                      onClick={() => !isDesktop && setOpen(!open)}
                      className="w-12 h-12 relative rounded-full overflow-hidden border border-gray-300 shadow-sm hover:shadow-md transition cursor-pointer"
                    >
                      <Image
                        // src={currentUser.avatar || "/uploads/avatar.jpg"}
                        src="/uploads/danh-gia2.jpg"
                        alt="avatar"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                  </Popover.Trigger>

                  <Popover.Portal>
                    <Popover.Content
                      side="bottom"
                      align="end"
                      className="bg-white p-4 shadow-lg border border-gray-200 rounded-md w-64 z-50"
                      onMouseEnter={() => isDesktop && setOpen(true)}
                      onMouseLeave={() => isDesktop && setOpen(false)}
                    >
                      <p className="font-semibold mb-2 text-gray-800">
                        Xin chào,{" "}
                        <span className="text-sky-600">{currentUser.name}</span>
                      </p>

                      <Link
                        href="/admin"
                        className="block w-full text-left text-gray-700 hover:bg-sky-100 hover:text-sky-800 rounded px-3 py-2 transition"
                      >
                        Trang quản trị
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="mt-2 block w-full text-left text-red-600 hover:bg-red-100 hover:text-red-700 rounded px-3 py-2 transition outline-none cursor-pointer"
                      >
                        Đăng xuất
                      </button>

                      <Popover.Arrow className="fill-white drop-shadow" />
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              ) : (
                <button
                  onClick={handleNextPage}
                  className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 hover:shadow-md transition cursor-pointer"
                >
                  LOGIN
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
