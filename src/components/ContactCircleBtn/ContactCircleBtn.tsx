"use client";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const ContactCircleBtn = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    const timeout = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-6 left-6 z-[9999] flex flex-row gap-2"
    >
      <a
        href="https://m.me/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow hover:scale-115 transition-transform"
      >
        <FontAwesomeIcon
          icon={faFacebookMessenger}
          className="text-white text-2xl"
        />
      </a>

      <a
        href="https://zalo.me/yournumber"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#0180ff] rounded-full flex items-center justify-center shadow hover:scale-115 transition-transform font-bold text-white text-base"
      >
        Zalo
      </a>

      <a
        href="tel:0123456789"
        className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow hover:scale-115 transition-transform"
      >
        <FontAwesomeIcon icon={faPhone} className="text-white text-xl" />
      </a>
      <a
        href="sms:0123456789"
        className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow hover:scale-115 transition-transform font-bold text-white"
      >
        SMS
      </a>
    </motion.div>
  );
};

export default ContactCircleBtn;
