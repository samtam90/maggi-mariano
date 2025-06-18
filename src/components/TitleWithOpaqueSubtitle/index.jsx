import React, { memo } from "react";
import { HeaderComponent, renderHeader, twClsx } from "../../misc/functions";

/**
 * @typedef {{left: string, right: string}} Title
 * @typedef {{
 *   title?: Title,
 *   subtitle?: string,
 *   root?: string
 * }} ClassNames
 * @param {{
 *   title: Title,
 *   subtitle: string,
 *   classNames?: ClassNames,
 *   titleHeadingElement?: HeaderComponent
 * }} param0
 */
function TitleWithOpaqueSubtitle({
  title,
  subtitle,
  titleHeadingElement,
  classNames,
}) {
  return (
    <header
      className={twClsx("relative text-2xl lg:text-4xl", classNames?.root)}
    >
      {renderHeader(
        titleHeadingElement || "h1",
        <>
          <span className={classNames?.title?.left}>{title.left}</span>
          <span
            className={twClsx(
              "font-titleBold underline uppercase ml-3",
              classNames?.title?.right
            )}
          >
            {title.right}
          </span>
          <span className="absolute top-4 left-0 z-0 font-titleBold text-gray-600 opacity-15">
            {subtitle}
          </span>
        </>,
        {
          className: "font-title text-green-dark z-10",
        }
      )}
    </header>
  );
}

export default memo(TitleWithOpaqueSubtitle);
