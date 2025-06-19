import { useEffect, useState } from "react";

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentY = window.scrollY;
      setScrollDirection(currentY > lastScrollY ? "down" : "up");
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  return scrollDirection;
}
