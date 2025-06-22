"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/siteCofig";
import Link from "next/link";

interface NavbarToggleProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavbarToggle({ isOpen, setIsOpen }: NavbarToggleProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-red-500 transition"
          >
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col divide-y overflow-y-auto">
          {siteConfig.navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "px-4 py-3 text-base text-gray-700 hover:bg-sky-100 transition duration-200",
                pathname === item.href &&
                  "bg-sky-100 font-semibold text-sky-600"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

export default NavbarToggle;
