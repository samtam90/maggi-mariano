"use client";

import React, { useRef } from "react";
import Header from "../../components/Header";
import {
  withViewportData,
  AdditionalProps,
  renderServicesNavGrid,
  renderTopNavBar,
  renderPageFooter,
  renderMaps,
} from "../auxiliary";
import { components } from "@italwebcom/tailwind-components";
import Link from "next/link";
import appConfig from "../../../app.config";
import ImageParagraphSections, {
  Image,
  Paragraph,
} from "../../components/ImageParagraphSections";
import tailwindConfig from "../../../tailwind.config";
import HighlightedContentSection from "../../components/HighlightedContentSection";
import { hooks } from "@italwebcom/tailwind-components";

const { useScrollVisibility } = hooks;
const { FadeIn } = components.Animations;
const { BgImageSection } = components.sections;

function DescriptionDivider({ fill }) {
  return (
    <svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 60">
      <path d="M0,0 V60 L600,0 Z" fill={fill} />
    </svg>
  );
}

/**
 * @typedef {{
 *  title: string,
 *  subtitle: string,
 *  imageSrc: string
 * }} TopSectionData
 *
 * @typedef {{
 *  title: string,
 *  subtitle: string,
 *  preTitle: string,
 *  button: {
 *   label: string,
 *   href: string
 *  },
 *  imageSrc: string
 * }} TitleSectionData
 *
 * @typedef {{
 *  image: Image,
 *  paragraphs?: Paragraph[]
 * }} DescriptionSectionDataItem
 *
 * @typedef {{
 *  headerImages: Image | Image[],
 *  items: DescriptionSectionDataItem[]
 * }} DescriptionSectionData
 *
 * @typedef {{
 *  title: {left: string, right: string},
 *  image: Image,
 *  paragraphs: Paragraph[],
 *  link: {href: string, label: string}
 * }} HighlightedContentData
 *
 * @typedef {{
 *   sections: {
 *     top: TopSectionData,
 *     title: TitleSectionData,
 *     description: DescriptionSectionData,
 *     highlightedContent: HighlightedContentData
 *   },
 * }} HomeTemplateProps
 */

/**
 * @param {TopSectionData} sectionData
 * @returns
 */
function renderTopSection(sectionData) {
  const { title, subtitle, imageSrc } = sectionData;
  return (
    <section key="top">
      <BgImageSection
        title={title}
        content={subtitle}
        imageUrl={imageSrc}
        classNames={{
          root: "py-16 lg:py-48 lg:max-w-8xl mx-auto px-6 lg:px-0",
          title:
            "text-4xl lg:text-8xl text-red-opaqueTitle font-titleBold uppercase text-left red-title-stroke text-center lg:text-left",
          content:
            "text-white text-lg lg:text-2xl font-titleBold uppercase text-center lg:text-left",
        }}
        renderInnerContent={(content) => (
          <FadeIn
            direction="left"
            speed="medium"
            offset="-100%"
            startDelayMs={250}
          >
            {content}
          </FadeIn>
        )}
      />
    </section>
  );
}

/**
 * @param {TitleSectionData} sectionData
 * @returns
 */
function renderTitleSection(sectionData) {
  const { preTitle, title, subtitle, button, imageSrc } = sectionData;
  const { label, href } = button;
  return (
    <section key="title">
      <BgImageSection
        preTitle={preTitle}
        title={title}
        content={subtitle}
        imageUrl={imageSrc}
        classNames={{
          root: "py-16 lg:ml-12 lg:py-32 lg:max-w-5xl lg:mx-auto flex flex-col items-center",
          preTitle:
            "text-3xl lg:text-7xl text-white font-titleBold uppercase border border-white leading-normal mb-2 lg:mb-3 px-2",
          title:
            "text-2xl lg:text-5xl text-yellow-primary font-title uppercase border border-yellow-primary leading-normal mb-8 px-2",
          content:
            "text-sm lg:text-xl text-white font-title uppercase text-center self-stretch",
          background: "bg-fixed",
          backdrop: "opacity-65",
        }}
        bottomContent={
          <Link
            href={href}
            target="_blank"
            className="block text-center lg:hover:opacity-75 lg:transition-opacity"
          >
            <div className="inline-block bg-green-primary rounded-lg shadow-sm text-white font-titleBold text-sm px-4 py-3">
              {label}
            </div>
          </Link>
        }
      />
    </section>
  );
}

/**
 * @returns
 * @param {DescriptionSectionData} param0
 * @param {boolean} mobile
 */
function renderDescriptionSection({ headerImages, items }, mobile) {
  return (
    <ImageParagraphSections
      headerImages={headerImages}
      items={items}
      variant={mobile ? "vertical" : "horizontal"}
      classNames={{
        root: "bg-green-dark py-4",
        item: { paragraph: "text-white" },
      }}
    />
  );
}

/**
 * @returns
 * @param {HighlightedContentData} param0
 * @param {boolean} mobile
 * @param {boolean} underlineActive
 */
function renderHighlightedContentData(
  { title, image, paragraphs, link },
  mobile,
  underlineActive
) {
  return (
    <HighlightedContentSection
      title={title}
      image={image}
      paragraphs={paragraphs}
      link={link}
      variant={mobile ? "vertical" : "horizontal"}
      titleUnderlineActive={underlineActive}
    />
  );
}

/**
 * @returns
 * @param {HomeTemplateProps & AdditionalProps} param0
 */
function HomeTemplate({ sections, mobile, viewportWidth }) {
  const {
    top: topSectionData,
    title: titleSectionData,
    description: descriptionSectionData,
    highlightedContent: highlightedContentData,
  } = sections;

  const highlightedElWrapperRef = useRef();
  const mapDim = mobile ? viewportWidth : viewportWidth * 0.5;

  const highlightedUnderlineActive = useScrollVisibility(
    highlightedElWrapperRef,
    true
  );

  return (
    <main>
      {renderTopNavBar({
        items: appConfig.data.topNavBar.items,
        maxWidth: "7xl",
      })}
      <div className="sticky top-0 z-top bg-white shadow-md">
        <Header mobile={mobile} />
      </div>
      {renderTopSection(topSectionData)}
      {renderTitleSection(titleSectionData)}
      <section key="services">
        {renderServicesNavGrid(appConfig.data.servicesGrid)}
      </section>
      {renderDescriptionSection(descriptionSectionData)}
      <DescriptionDivider
        fill={tailwindConfig.theme.extend.colors.green.dark}
      />
      <div
        ref={(r) => (highlightedElWrapperRef.current = r)}
        className="max-w-8xl mx-auto"
      >
        {renderHighlightedContentData(
          highlightedContentData,
          mobile,
          highlightedUnderlineActive
        )}
      </div>
      <div className="h-[64px] bg-green-dark" />
      {renderMaps({
        data: appConfig.data.maps,
        dimensions: { width: mapDim, height: mobile ? 200 : 350 },
        className: "px-8",
      })}
      {renderPageFooter({
        logo: appConfig.data.footer.logo,
        sections: appConfig.data.footer.sections,
        contentMaxWidth: "8xl",
        variant: mobile ? "vertical" : "horizontal",
      })}
    </main>
  );
}

export default withViewportData(HomeTemplate);
