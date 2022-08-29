import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 50) {
          setScrollPos(true);
        } else {
          setScrollPos(false);
        }
      });
    }
  }, []);

  return scrollPos ;
};