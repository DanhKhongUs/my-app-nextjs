import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/siteCofig";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-x-8">
      {siteConfig.navLinks.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={cn(
            "text-gray-800 text-lg font-medium hover:text-sky-600 transition-colors duration-200",
            pathname === item.href && "text-sky-600 font-semibold"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
