import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "../contexts/LenContext";
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenisRef = useLenis();

  useLayoutEffect(() => {
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenisRef]);

  return null;
};

export default ScrollToTop;
