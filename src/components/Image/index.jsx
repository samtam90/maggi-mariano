import { twClsx } from "../../misc/functions";
import React, { memo } from "react";

function getActualSources(sources) {
  if (!(sources instanceof Array)) {
    return [];
  }
  return sources;
}

/**
 * @typedef {{
 *    type: string,
 *    src?: string,
 *    srcset?: string
 * }} ImageSource
 * @typedef {{width: number, height: number}} Dimensions
 * @typedef {{
 *    sources?: ImageSource[],
 *    dimensions?: Dimensions,
 *    classNames?: {picture?: string, image?: string},
 *    src?: string,
 *    alt: string,
 *    className?: string
 * }} ImageProps
 */

/**
 * @param {ImageProps} param0
 * @returns
 */
function Image({
  sources,
  dimensions,
  classNames,
  src,
  alt,
  className,
  width,
  height,
}) {
  return (
    <picture className={twClsx(className, classNames?.picture)}>
      {getActualSources(sources).map(({ type, src, srcset }) => (
        <source
          type={type}
          key={type}
          src={src}
          srcSet={src ? undefined : srcset}
          width={width || dimensions?.width}
          height={height || dimensions?.height}
        />
      ))}
      <img
        src={src}
        className={twClsx("object-contain max-w-full", classNames?.image)}
        width={width || dimensions?.width}
        height={height || dimensions?.height}
        alt={alt}
      />
    </picture>
  );
}

export default memo(Image);
