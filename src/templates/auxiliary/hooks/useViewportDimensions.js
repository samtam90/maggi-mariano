import { useState, useEffect, useMemo } from "react";

function getInitialState() {
  if (typeof window !== "undefined") {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  return {};
}

function useViewportDimensions(mobileThreshold) {
  "use client";
  
  const [dims, setDims] = useState(getInitialState());

  useEffect(() => {
    function onSetDims() {
      const { innerWidth, innerHeight } = window;
      setDims({ width: innerWidth, height: innerHeight });
    }
    window.addEventListener("resize", onSetDims);
    return () => {
      window.removeEventListener("resize", onSetDims);
    };
  }, [setDims]);

  const isMobile = useMemo(() => {
    const { width } = dims;
    if (width) {
      return width <= mobileThreshold;
    }
    return false;
  }, [dims]);

  return { ...dims, isMobile };
}

export default useViewportDimensions;
