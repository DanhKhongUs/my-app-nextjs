"use client";

import { usePathname } from "next/navigation";
import ContactCircleBtn from "./ContactCircleBtn";

const ContactCircleBtnWrap = () => {
  const pathname = usePathname();

  return <ContactCircleBtn key={pathname} />;
};

export default ContactCircleBtnWrap;
