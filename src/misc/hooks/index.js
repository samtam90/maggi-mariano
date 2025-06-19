import { useEffect, useState } from "react";

/**
 * @returns
 */
export function useMounted() {
  "use client";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted;
}
