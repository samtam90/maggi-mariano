import React, { memo, ReactNode, useMemo, useRef } from "react";
import AuxTemplate from "../auxiliary/AuxTemplate";
import { renderLocationsGrid, LocationsGridData } from "../auxiliary";
import { ContactSectionData } from "../MainContent";
import { ContactFormData } from "../../components/ContactForm";
import testIDs from "../../misc/testIDs";
import ContactSection from "../../components/ContactSection";
import { Image } from "../../misc";
import { twClsx } from "../../misc/functions";
import tailwindConfig from "../../../tailwind.config";
import { hooks, components } from "@italwebcom/tailwind-components";

const {SpecialText} = components;
const { useScrollVisibility } = hooks;

/**
 * @typedef {string | ReactNode} Paragraph
 * @typedef {{
 *    title: string,
 *    subtitle: string,
 *    image: Image,
 *    paragraphs: Paragraph[],
 *    classNames?: {
 *      title?: string,
 *      subtitle?: string,
 *      image?: string,
 *      paragraph?: string,
 *      root?: string
 *    }
 * }} TopSectionData
 *
 * @typedef {{
 *    title: string,
 *    preTitle: string,
 *    paragraphs: Paragraph[],
 *    classNames?: {
 *      root?: string,
 *      shape?: string,
 *      preTitle?: string,
 *      title?: string,
 *      paragraph?: string
 *    }
 * }} MiddleSectionData
 *
 * @typedef {{
 *    title: string,
 *    content: Paragraph
 * }} BottomSectionDataItem
 *
 * @typedef {{
 *    title: {left: string, right: string},
 *    image: Image,
 *    items: BottomSectionDataItem[],
 *    additionalContent?: ReactNode,
 *    classNames?: {
 *      title?: {left?: string, right?: string},
 *      image?: string,
 *      item?: {title?: string, content?: string}
 *    }
 * }} BottomSectionData
 *
 * @typedef {{
 *    locations: LocationsGridData,
 *    contacts: ContactSectionData,
 *    top: TopSectionData,
 *    middle: MiddleSectionData,
 *    bottom: BottomSectionData
 * }} SectionsData
 */

/**
 * @param {{
 *    content: Paragraph,
 *    className?: string,
 *    key?: string | number
 * }} param0
 */
function renderParagraph({ content, className, key }) {
  return (
    <p
      className={twClsx(
        "font-title text-sm lg:text-md mb-4 lg:mb-6 leading-normal text-gray-700",
        className
      )}
      key={key}
    >
      {content}
    </p>
  );
}

function MiddleSectionShape({ fill, className }) {
  return (
    <svg
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M194,99c186.7,0.7,305-78.3,306-97.2c1,18.9,119.3,97.9,306,97.2c114.3-0.3,194,0.3,194,0.3s0-91.7,0-100c0,0,0,0,0-0 L0,0v99.3C0,99.3,79.7,98.7,194,99z"
        fill={fill}
      />
    </svg>
  );
}

/**
 * @param {TopSectionData & {activeUnderline?: boolean}} param0
 * @returns
 */
function renderTopSection({
  title,
  subtitle,
  paragraphs,
  image,
  classNames,
  activeUnderline,
}) {
  return (
    <section
      key="top"
      className={twClsx(
        "max-w-6xl mx-auto px-4 lg:px-0 py-6 lg:py-12 lg:pb-8",
        classNames?.root
      )}
    >
      <header className="font-titleBold text-2xl lg:text-4xl text-center uppercase mb-8 lg:mb-12">
        <SpecialText.Underlined
          component="h1"
          double
          fill={tailwindConfig.theme.extend.colors.red.primary}
          active={activeUnderline}
          className={twClsx("text-green-primary", classNames?.title)}
        >
          {title}
        </SpecialText.Underlined>
        <p
          className={twClsx(
            "text-red-primary mt-2 text-xl lg:text-3xl",
            classNames?.subtitle
          )}
        >
          {subtitle}
        </p>
      </header>
      <div className="lg:flex items-center">
        <div className="basis-1/2 shrink-0 mr-6">
          {paragraphs.map((par, index) =>
            renderParagraph({ content: par, key: index })
          )}
        </div>
        <div className="basis-1/2 shrink-0">
          <img
            src={image.src}
            alt={image.alt}
            width={image.dimensions?.width}
            height={image.dimensions?.height}
            className="max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

/**
 * @param {MiddleSectionData} param0
 * @returns
 */
function renderMiddleSection({ title, preTitle, paragraphs, classNames }) {
  return (
    <section key="middle" className="bg-yellow-light">
      <MiddleSectionShape
        fill="white"
        className="bg-yellow-light h-12 w-full"
      />
      <div
        className={twClsx(
          "max-w-6xl mx-auto px-4 lg:px-0 py-8 lg:py-16",
          classNames?.root
        )}
      >
        <header className="mb-4 lg:mb-6">
          <h3
            className={twClsx(
              "font-title text-sm lg:text-md mb-4 lg:mb-6 leading-normal text-gray-700 mb-8 lg:mb-12",
              classNames?.preTitle
            )}
          >
            {preTitle}
          </h3>
          <h2 className="text-xl lg:text-3xl font-titleBold uppercase text-gray-700 text-center">
            {title}
          </h2>
        </header>
        <ul className="list-disc ml-6 lg:ml-4">
          {paragraphs.map((par, index) => (
            <li className="mb-2" key={index}>
              {renderParagraph({
                content: par,
                key: index,
                className: classNames?.paragraph,
              })}
            </li>
          ))}
        </ul>
      </div>
      <MiddleSectionShape
        fill="white"
        className="bg-yellow-light rotate-[180deg] h-12 w-full"
      />
    </section>
  );
}

/**
 * @returns
 * @param {{
 *    title: string,
 *    content: string | ReactNode,
 *    classNames?: {
 *      root?: string,
 *      title?: string,
 *      content?: string
 *    }
 * }} param0
 */
function renderBottomSectionItem({ title, content, classNames, key }) {
  return (
    <div key={key} className={classNames?.root}>
      <h3
        className={twClsx(
          "font-titleBold text-lg lg:text-xl text-gray-700 mb-3",
          classNames?.title
        )}
      >
        {title}
      </h3>
      <p
        className={twClsx(
          "font-title text-sm lg:text-md text-gray-500 leading-normal",
          classNames?.content
        )}
      >
        {content}
      </p>
    </div>
  );
}

/**
 * @param {BottomSectionData & {circledActive?: boolean}} param0
 * @returns
 */
function renderBottomSection({
  title,
  image,
  items,
  additionalContent,
  classNames,
  circledActive,
}) {
  const { preItems, postItems } = useMemo(() => {
    const itemThresh = Math.floor(items.length / 2);
    return {
      preItems: items.slice(0, itemThresh),
      postItems: items.slice(itemThresh),
    };
  }, [items]);
  return (
    <section
      key="bottom"
      className="max-w-6xl mx-auto px-4 lg:px-0 py-8 lg:py-16"
    >
      <header className="mb-4">
        <h2 className="text-2xl lg:text-3xl font-title text-gray-700 text-center">
          <span className="text-xl lg:text-3xl">{title.left}</span>
          <SpecialText.Circled
            component="span"
            active={circledActive}
            stroke={tailwindConfig.theme.extend.colors.green.primary}
            className="font-titleBold p-2 lg:p-3 ml-2 lg:ml-4 mt-3 lg:mt-0"
          >
            {title.right}
          </SpecialText.Circled>
        </h2>
      </header>
      <div
        className={twClsx(
          "lg:flex items-center",
          Boolean(additionalContent) && "mb-8"
        )}
      >
        <div className="basis-2/7 shrink-0">
          {preItems.map(({ title, content }, index) =>
            renderBottomSectionItem({
              title,
              content,
              key: index,
              classNames: {
                root: "mt-8",
                title: twClsx(
                  "text-center lg:text-right",
                  classNames?.item?.title
                ),
                content: twClsx(
                  "text-center lg:text-right",
                  classNames?.item?.content
                ),
              },
            })
          )}
        </div>
        <div className="basis-3/7 shrink-0">
          <img
            src={image.src}
            alt={image.alt}
            width={image.dimensions?.width}
            height={image.dimensions?.height}
            className="max-w-full object-contain lg:px-4 lg:pl-8 my-8 lg:my-0"
          />
        </div>
        <div className="basis-2/7 shrink-0">
          {postItems.map(({ title, content }, index) =>
            renderBottomSectionItem({
              title,
              content,
              key: index,
              classNames: {
                root: "mt-8",
                title: twClsx(
                  "text-center lg:text-left",
                  classNames?.item?.title
                ),
                content: twClsx(
                  "text-center lg:text-left",
                  classNames?.item?.content
                ),
              },
            })
          )}
        </div>
      </div>
      {additionalContent}
    </section>
  );
}

/**
 *
 * @param {{
 *    mobile: boolean,
 *    sections: SectionsData,
 *    onContactFormSubmit: (data: ContactFormData) => void
 * }} param0
 * @returns
 */
function AltMainContent({
  mobile,
  sections,
  onContactFormSubmit,
  locationNames,
}) {
  const {
    locations: locationsData,
    contacts: contactsData,
    top: topSectionData,
    middle: middleSectionData,
    bottom: bottomSectionData,
  } = sections;

  const bottomElRef = useRef();
  const circledActive = useScrollVisibility(bottomElRef, true);

  return (
    <AuxTemplate mobile={mobile} locationNames={locationNames}>
      {renderTopSection({ ...topSectionData, activeUnderline: true })}
      {renderMiddleSection({ ...middleSectionData })}
      <div ref={(r) => (bottomElRef.current = r)}>
        {renderBottomSection({ ...bottomSectionData, circledActive })}
      </div>
      <ContactSection
        {...contactsData}
        ids={testIDs.contactForm}
        variant={mobile ? "vertical" : "horizontal"}
        classNames={{
          contentWrapper: "max-w-6xl",
          imageContainer: "block lg:mt-12",
        }}
        onFormSubmit={onContactFormSubmit}
      />
      {renderLocationsGrid({
        ...locationsData,
        classNames: {
          root: "py-8 lg:py-16 px-4 lg:px-0",
          item: "text-sm",
        },
      })}
    </AuxTemplate>
  );
}

export default memo(AltMainContent);
