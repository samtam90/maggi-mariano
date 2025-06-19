import React, { memo } from "react";
import Stars from "../Stars";
import { twClsx } from "../../misc/functions";
import { renderHeader, HeaderComponent } from "../../misc/functions";

/**
 * @typedef {{
 *    root?: string,
 *    title?: string,
 *    subtitle?: string,
 *    content?: string
 * }} FeedbackCardClassNames
 *
 * @typedef {{
 *    title: string,
 *    subtitle?: string,
 *    stars: {total: number, filled: number},
 *    icon?: ReactNode,
 *    content: string,
 *    classNames?: FeedbackCardClassNames,
 *    titleHeadingElement?: HeaderComponent
 * }} FeedbackCardProps
 */

/**
 * @returns
 * @param {FeedbackCardProps} param0
 */
function FeedbackCard({
  title,
  subtitle,
  stars,
  icon,
  content,
  classNames,
  titleHeadingElement,
}) {
  return (
    <article
      className={twClsx("rounded-xl bg-white p-4 shadow-md", classNames?.root)}
    >
      <header className="flex justify-between">
        <div>
          {renderHeader(titleHeadingElement, title, {
            className: twClsx(
              "font-titleBold text-gray-700 text-sm lg:text-md leading-tight",
              classNames?.title
            ),
          })}
          <Stars className="leading-tight">
            {Array.from({ length: stars.total }).map((v, i) => (
              <Stars.Star key={i} filled={i <= stars.filled} />
            ))}
          </Stars>
          <p
            className={twClsx(
              "font-title text-xs text-gray-400 mt-1",
              classNames?.subtitle
            )}
          >
            {subtitle}
          </p>
        </div>
        {icon}
      </header>
      <div className="h-[1px] -mx-4 bg-gray-100 my-3"></div>
      <p
        className={twClsx(
          "font-title text-sm text-gray-700",
          classNames?.content
        )}
      >
        {content}
      </p>
    </article>
  );
}

export default memo(FeedbackCard);
