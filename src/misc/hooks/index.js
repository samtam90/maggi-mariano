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

export function useActualUserAgent(props) {
  let ua;
  if (props.uaString) {
    ua = useUserAgent(props.uaString);
  } else {
    ua = useUserAgent(window.navigator.userAgent);
  }
  return ua;
}
