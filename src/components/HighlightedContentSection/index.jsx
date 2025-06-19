import React, { memo } from "react";
import SpecialText from "../SpecialText";
import { Image, Paragraph } from "../../misc";
import { twClsx } from "../../misc/functions";
import tailwindConfig from "../../../tailwind.config";
import Link from "next/link";
import { renderParagraphs } from "../ImageParagraphSections";
import LinkButton from "../LinkButton";

/**
 * @typedef {{
 *   root?: string,
 *   image?: string,
 *   link?: string,
 *   paragraph?: string,
 *   title?: {
 *     root?: string,
 *     left?: string,
 *     right?: string
 *   },
 *   capitalizedParagraphLetter?: string
 * }} ClassNames
 *
 * @typedef {{
 *   image: Image,
 *   paragraphs: Paragraph[],
 *   link: {
 *      label: string,
 *      href: string
 *   },
 *   title: {left: string, right: string},
 *   classNames?: ClassNames,
 *   variant?: "vertical" | "horizontal",
 *   titleUnderlineColor?: string,
 *   titleUnderlineActive?: boolean
 * }} HighlightedContentSectionProps
 *
 */

/**
 * @returns
 * @param {HighlightedContentSectionProps} param0
 */
function HighlightedContentSection({
  image,
  paragraphs,
  link,
  title,
  classNames,
  variant = "horizontal",
  titleUnderlineActive = false,
  titleUnderlineColor = tailwindConfig.theme.extend.colors.red.primary,
}) {
  const isHorizVariant = variant === "horizontal";
  return (
    <section className={classNames?.root}>
      <header
        className={twClsx(
          "font-titleBold text-4xl lg:text-5xl text-center uppercase mb-8",
          classNames?.title?.root
        )}
      >
        <span className={twClsx("text-red-primary", classNames?.title?.left)}>
          {title.left}
        </span>
        <SpecialText.Underlined
          active={titleUnderlineActive}
          double
          className={twClsx("text-green-dark", classNames?.title?.right)}
          component="span"
          fill={titleUnderlineColor}
        >
          {title.right}
        </SpecialText.Underlined>
      </header>
      <div className={twClsx(isHorizVariant && "grid grid-cols-2 gap-4")}>
        <div>
          {renderParagraphs(
            paragraphs,
            twClsx("text-green-dark", classNames?.paragraph),
            twClsx("border-green-dark", classNames?.capitalizedParagraphLetter)
          )}
        </div>
        <div className="flex flex-col items-center">
          <img
            src={image.src}
            alt={image.alt}
            width={image.dimensions.width}
            height={image.dimensions.height}
            className={twClsx(
              "mb-4 max-w-full object-contain",
              classNames?.image
            )}
          />
          <LinkButton
            href={link.href}
            label={link.label}
            className={classNames?.link}
          />
        </div>
      </div>
    </section>
  );
}

export default memo(HighlightedContentSection);
