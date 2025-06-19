import { twClsx } from "../../misc/functions";
import React, { memo } from "react";
import SpecialText from "../SpecialText";
import { Image, Paragraph } from "../../misc";

/**
 * @typedef {{
 *  image: Image,
 *  paragraphs?: Paragraph[],
 *  imagePosition?: "start" | "end"
 * }} DataItem
 *
 * @typedef {{
 *  item?: {
 *   paragraph?: string,
 *   image?: string
 *  },
 *  root?: string,
 *  header?: {
 *   root?: string,
 *   image?: string
 *  }
 * }} ClassNames
 */

/**
 * @param {Image | Image[]}
 * @returns {Image[]}
 */
function procImgs(imgs) {
  if (!(imgs instanceof Array)) {
    return [imgs];
  }
  return imgs;
}

/**
 * @param {Image & {className: string}} param0
 * @returns
 */
function renderImage({ src, alt, dimensions, className }) {
  return (
    <img
      src={src}
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
      className={className}
    />
  );
}

/**
 * @returns
 * @param {Paragraph} content
 * @param {string} className
 */
export function renderParagraph(content, className) {
  return (
    <p
      className={twClsx(
        "font-title text-sm lg:text-md mb-4 leading-normal",
        className
      )}
    >
      {content}
    </p>
  );
}

/**
 * @returns
 * @param {Paragraph[]} paragraphs
 * @param {string} className
 * @param {string} capitalizedClassName
 */
export function renderParagraphs(paragraphs, className, capitalizedClassName) {
  const first = paragraphs[0];
  const others = paragraphs.slice(1);

  return [
    typeof first === "string" ? (
      <SpecialText.Capitalized
        component="p"
        classNames={{
          root: twClsx(className, "mb-4 text-sm lg:text-md"),
          first: capitalizedClassName,
        }}
      >
        {first}
      </SpecialText.Capitalized>
    ) : (
      renderParagraph(first, className)
    ),
  ].concat(others.map((par) => renderParagraph(par, className)));
}

/**
 * @param {{
 *  headerImages?: Image[],
 *  items?: DataItem[],
 *  classNames?: ClassNames,
 *  variant?: "horizontal" | "vertical"
 * }} param0
 */
function ImageParagraphSections({
  headerImages,
  items,
  classNames,
  variant = "horizontal",
}) {
  const isVertVariant = variant === "vertical";
  return (
    <article className={classNames?.root}>
      <header
        className={twClsx(
          "flex flex-col items-center",
          classNames?.header?.root
        )}
      >
        {procImgs(headerImages).map(({ src, alt, dimensions }) =>
          renderImage({
            src,
            alt,
            dimensions,
            className: twClsx(
              "block max-w-full object-contain mb-6",
              classNames?.header?.image
            ),
          })
        )}
      </header>
      {items.map(({ image, imagePosition, paragraphs }, index) => {
        const isImgStartPos = imagePosition === "start";
        const imageNode = renderImage({
          ...image,
          className: twClsx(
            "object-contain",
            isImgStartPos ? "order-1" : "order-2",
            !isVertVariant && "basis-1/2 shrink-0",
            isVertVariant && (isImgStartPos ? "mb-4" : "mt-4"),
            classNames?.item?.image
          ),
        });
        const parsNodes = renderParagraphs(
          paragraphs,
          classNames?.item?.paragraph
        );
        return (
          <section
            key={index}
            className={twClsx(
              "flex",
              isVertVariant ? "flex-col" : "flex-row items-center"
            )}
          >
            {imageNode}
            <div
              className={twClsx(isImgStartPos ? "order-2" : "order-1", "px-4")}
            >
              {parsNodes}
            </div>
          </section>
        );
      })}
    </article>
  );
}

export default memo(ImageParagraphSections);
