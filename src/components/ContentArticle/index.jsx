import React, {
  createContext,
  memo,
  useContext,
  ReactNode,
  ComponentType,
} from "react";
import { twClsx, HeaderComponent, renderHeader } from "../../misc/functions";
import { components } from "@italwebcom/tailwind-components";
import tailwindConfig from "../../../tailwind.config";

const { BorderedColoredText } = components;
const C = createContext({});

/**
 * @returns
 * @param {Dimensions} dimensions
 */
function getImgSizesAttr(dimensions) {
  const maxSize = Math.max(dimensions.height, dimensions.width);
  return `(max-width: ${maxSize}px) 100vw, ${maxSize}px`;
}

/**
 * @typedef {"video" | "image" | "iframe"} MediaType
 * @typedef {"top" | "bottom" | "left" | "right"} MediaPosition
 * @typedef {{width: number, height: number}} Dimensions
 * @typedef {string | ReactNode} ParagraphContent
 *
 * @typedef {{
 *    type: MediaType,
 *    src: string,
 *    label: string,
 *    srcset?: string,
 *    dimensions: Dimensions
 * }} MediaElement
 *
 * @typedef {{
 *    paragraphs?: ParagraphContent[],
 *    mediaElements?: MediaElement[],
 *    mediaPosition?: MediaPosition,
 *    content?: ReactNode
 * }} SectionContent
 *
 * @typedef {{
 *    type: SectionType,
 *    title?: string
 * } & SectionContent} SectionProps
 */

/**
 * @returns
 * @param {ReactNode[]} paragraphNodes
 * @param {ReactNode[]} mediaNodes
 * @param {MediaPosition} mediaPosition
 */
function assembleSectionContent(paragraphNodes, mediaNodes, mediaPosition) {
  const outMediaNodes = (
    <div className="grid grid-cols-2 gap-4">{mediaNodes}</div>
  );
  if (mediaPosition === "bottom" || mediaPosition === "top") {
    const isTopPos = mediaPosition === "top";
    return (
      <>
        <div className="mb-6">{isTopPos ? outMediaNodes : paragraphNodes}</div>
        {isTopPos ? paragraphNodes : outMediaNodes}
      </>
    );
  } else {
    const isLeftPos = mediaPosition === "left";
    return (
      <div className="flex items-center">
        <div
          className={twClsx(
            "basis-1/2 shrink-0",
            isLeftPos ? "order-1" : "order-2"
          )}
        >
          {outMediaNodes}
        </div>
        <div className={twClsx(isLeftPos ? "order-2" : "order-1")}>
          {paragraphNodes}
        </div>
      </div>
    );
  }
}

/**
 * @type {{
 *    content: ParagraphContent,
 *    className?: string,
 *    testID?: string
 * }}
 */
function renderParagraph({ content, className, testID }) {
  return (
    <p
      className={twClsx("font-title text-sm lg:text-md", className)}
      data-testid={testID}
    >
      {content}
    </p>
  );
}

/**
 * @returns
 * @param {MediaElement & {
 *   className?: string
 * }} param0
 */
function renderMediaElement({
  type,
  src,
  srcset,
  label,
  className,
  dimensions,
}) {
  switch (type) {
    case "iframe":
      return (
        <iframe
          src={src}
          aria-label={label}
          className={twClsx("max-w-full", className)}
          key={label}
          width={dimensions.width}
          height={dimensions.height}
        />
      );
    default:
      return (
        <img
          src={!srcset ? src : undefined}
          srcSet={srcset}
          sizes={getImgSizesAttr(dimensions)}
          alt={label}
          className={className}
          key={label}
          width={dimensions.width}
          height={dimensions.height}
        />
      );
  }
}

const ContentArticleSection = memo(
  /**
   * @returns
   * @param {SectionProps} param0
   */
  ({ title, paragraphs, mediaElements, mediaPosition, content }) => {

    const { classNames, titleHeadingElements } = useContext(C);
    const sectionClassNames = classNames?.section;

    if (!content) {
      const paragraphNodes = paragraphs.map((par) =>
        renderParagraph({
          content: par,
          className: twClsx(
            "text-gray-600 font-title text-sm mb-2",
            sectionClassNames?.paragraph
          ),
        })
      );
      const mediaElementsNodes = mediaElements.map(
        ({ type, src, srcset, label, dimensions }) =>
          renderMediaElement({
            type,
            src,
            srcset,
            label,
            dimensions,
          })
      );
      content = assembleSectionContent(
        paragraphNodes,
        mediaElementsNodes,
        mediaPosition
      );
    }
    
    return (
      <section className={sectionClassNames?.root}>
        <header className="mb-3">
          {renderHeader(titleHeadingElements?.section || "h2", title, {
            className: twClsx(
              "font-titleBold uppercase text-gray-700 text-md lg:text-lg",
              classNames?.title
            ),
          })}
        </header>
        {content}
      </section>
    );
  }
);

const ContentArticle = memo(
  /**
   * @returns
   * @param {{
   *   title: {left: string, right: string, fillColor?: string},
   *   titleHeadingElements?: {article?: HeaderComponent, section?: HeaderComponent},
   *   children: ReactElement<SectionProps, ComponentType<SectionProps>>,
   *   classNames?: {
   *     title?: string,
   *     section?: {
   *       root?: string,
   *       title?: string,
   *       paragraph?: string
   *     }
   *   }
   * }} param0
   */
  ({ title, titleHeadingElements, children, classNames }) => {
    const { left, right } = title;
    return (
      <C.Provider value={{ titleHeadingElements, classNames }}>
        <article>
          <header className="mb-6">
            <BorderedColoredText
              left={left}
              right={right}
              fillColor={tailwindConfig.theme.extend.colors.red.primary}
              classNames={{
                text: "text-red-primary",
                rightContainer: "text-white",
              }}
            />
          </header>
          {children}
        </article>
      </C.Provider>
    );
  }
);

ContentArticle.Section = ContentArticleSection;
export default ContentArticle;
