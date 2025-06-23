import React, { memo } from "react";

/**
 * @returns
 * @param {{src: string, alt: string, dimensions?: {width: number, height: number}}} param0
 */
function SplashScreen({ src, alt, dimensions }) {
  return (
    <div className="max-w-md mx-auto px-16 lg:px-0 h-screen flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="inline-block max-w-full object-contain"
        width={dimensions?.width}
        height={dimensions?.height}
      />
    </div>
  );
}

export default memo(SplashScreen);
