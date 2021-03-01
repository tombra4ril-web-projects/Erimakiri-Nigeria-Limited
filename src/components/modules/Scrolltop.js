import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const {pathname, scrollTop} = useLocation();

  useEffect(() => {
    if(scrollTop){
      window.scrollTo(0, 0);
    }
  }, [pathname, scrollTop]);

  return null;
}