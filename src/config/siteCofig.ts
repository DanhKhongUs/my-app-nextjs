interface NavLinks {
  id: number;
  href: string;
  title: string;
}
interface SocialLinks extends NavLinks {
  image: string;
}

export interface SiteConfig {
  navLinks: NavLinks[];
  socialLinks: SocialLinks[];
}

export const siteConfig: SiteConfig = {
  navLinks: [
    { id: 0, href: "/", title: "Trang chủ" },
    { id: 1, href: "/about", title: "Giới thiệu" },
    { id: 2, href: "/products", title: "Sản phẩm" },
    { id: 3, href: "/work", title: "Hoạt động" },
    { id: 4, href: "/contact", title: "Liên hệ" },
  ],

  socialLinks: [
    {
      id: 0,
      href: "https://facebook.com",
      image: "/uploads/facebook.png",
      title: "facebook",
    },
    {
      id: 1,
      href: "https://tiktok.com",
      image: "/uploads/tik-tok.png",
      title: "tiktok",
    },
    {
      id: 2,
      href: "https://youtube.com",
      image: "/uploads/youtube.png",
      title: "youtube",
    },
    {
      id: 3,
      href: "https://instagram.com",
      image: "/uploads/instagram.png",
      title: "instagram",
    },
  ],
};
