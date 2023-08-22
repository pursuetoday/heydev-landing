import { useEffect, useState } from "react";
import { WindowDimensions } from "@/types";

function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  return {
    width: 0,
    height: 0
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowDimensions;
}