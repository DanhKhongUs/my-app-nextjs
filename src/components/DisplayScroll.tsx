"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import useScrollDirection from "@/hooks/useScrollDirection";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
}

export default function DisplayScroll({ children, delay = 0 }: RevealProps) {
  const scrollDirection = useScrollDirection();
  const [hasShown, setHasShown] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      onViewportEnter={() => {
        if (scrollDirection === "down") setHasShown(true);
      }}
      onViewportLeave={() => {
        if (scrollDirection === "up") setHasShown(false);
      }}
      animate={hasShown ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
        },
      }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
