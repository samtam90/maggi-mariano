"use client";

import React, { memo, useRef } from "react";
import Header from "../../components/Header";
import {
  withViewportData,
  AdditionalProps,
  renderServicesNavGrid,
  renderTopNavBar,
  renderPageFooter,
  renderMaps,
} from "../auxiliary";
import { components, hooks } from "@italwebcom/tailwind-components";
import appConfig from "../../../app.config";
import ImageParagraphSections, {
  Image,
  Paragraph,
} from "../../components/ImageParagraphSections";
import tailwindConfig from "../../../tailwind.config";
import HighlightedContentSection from "../../components/HighlightedContentSection";
import FeedbackCard from "../../components/FeedbackCard";
import LinkButton from "../../components/LinkButton";

const { useScrollVisibility } = hooks;
const { Carousel } = components;
const { FadeIn } = components.Animations;
const { BgImageSection } = components.sections;

/**
 * @param {{fill: string}} param0
 * @returns
 */
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
 *  title: string,
 *  subtitle?: string,
 *  content?: string,
 *  stars: {total: number, filled: number}
 * }} FeedbackSectionDataItem
 *
 * @typedef {{
 *  title: string,
 *  items: FeedbackSectionDataItem[],
 *  autoScrollTimeoutMs?: number
 * }} FeedbackSectionData
 *
 * @typedef {{
 *   sections: {
 *     top: TopSectionData,
 *     title: TitleSectionData,
 *     description: DescriptionSectionData,
 *     highlightedContent: HighlightedContentData,
 *     feedback: FeedbackSectionData
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
        bottomContent={<LinkButton href={href} label={label} />}
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
        item: { paragraph: "text-white px-8" },
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
 * @param {FeedbackSectionData} param0
 */
function renderFeedbackSection({ title, items, autoScrollTimeoutMs }) {
  return (
    <section className="bg-green-dark flex items-center justify-center lg:py-8 bg-homeFeedbackImage bg-fixed bg-cover relative">
      <div className="absolute inset-0 bg-green-primary opacity-25 z-0"></div>
      <div className="p-8 px-0 lg:px-12 rounded-lg shadow-md lg:max-w-6xl lg:mx-auto relative z-10 bg-green-dark">
        <header className="mb-6 lg:mb-8">
          <h2 className="font-titleBold text-3xl lg:text-4xl text-center text-white uppercase">
            {title}
          </h2>
        </header>
        <Carousel
          defaultSelected={1}
          arrows
          arrowClassName="text-white opacity-1 bg-transparent"
          arrowContainerClassName="relative w-20 lg:w-12 h-auto self-stretch"
          dots
          dotSelectionVariant="color"
          dotColor="white"
          autoScrollTimeoutMs={autoScrollTimeoutMs || 5000}
        >
          {items.map(({ title, stars, subtitle, content }, index) => (
            <Carousel.Item key={index} index={index} id={index}>
              <FeedbackCard
                title={title}
                titleHeadingElement="h3"
                subtitle={subtitle}
                content={content}
                stars={stars}
                classNames={{ root: "max-w-3xl mx-auto" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

/**
 * @returns
 * @param {DescriptionSectionData} data
 * @param {number} imgDim
 */
function processDescriptionSectionData(data, imgDim) {
  return {
    ...data,
    items: data.items.map((item) => ({
      ...item,
      image: { ...item.image, dimensions: { width: imgDim, height: imgDim } },
    })),
  };
}

/**
 * @returns
 * @param {HomeTemplateProps & AdditionalProps} param0
 */
function HomeTemplate({ sections, mobile }) {
  const {
    top: topSectionData,
    title: titleSectionData,
    description: descriptionSectionData,
    highlightedContent: highlightedContentData,
    feedback: feedbackContentData,
  } = sections;

  const highlightedElWrapperRef = useRef();

  const processedDescriptionSectionData = processDescriptionSectionData(
    descriptionSectionData
  );

  const highlightedUnderlineActive = useScrollVisibility(
    highlightedElWrapperRef,
    true
  );

  return (
    <main>
      {renderTopNavBar({
        items: appConfig.data.topNavBar.items,
        maxWidth: "8xl",
        className: "hidden md:block"
      })}
      <div className="sticky top-0 z-top bg-white shadow-md">
        <Header mobile={mobile} />
      </div>
      {renderTopSection(topSectionData)}
      {renderTitleSection(titleSectionData)}
      <section key="services">
        {renderServicesNavGrid(appConfig.data.servicesGrid)}
      </section>
      {renderDescriptionSection(processedDescriptionSectionData, mobile)}
      <DescriptionDivider
        fill={tailwindConfig.theme.extend.colors.green.dark}
      />
      <div
        ref={(r) => (highlightedElWrapperRef.current = r)}
        className="max-w-8xl mx-auto pb-8"
      >
        {renderHighlightedContentData(
          highlightedContentData,
          mobile,
          highlightedUnderlineActive
        )}
      </div>
      {renderFeedbackSection(feedbackContentData)}
      {renderMaps({
        data: appConfig.data.maps,
        dimensions: { width: "100%", height: "300" },
        className: "px-4 lg:max-w-8xl lg:px-0 mx-auto",
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

export default memo(HomeTemplate);
