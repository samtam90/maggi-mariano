"use client";

import React, { memo, useRef } from "react";
import Header from "../../components/Header";
import {
  renderServicesNavGrid,
  renderTopNavBar,
  renderPageFooter,
  renderMaps,
  renderTitleSection,
} from "../auxiliary";
import { components, hooks } from "@italwebcom/tailwind-components";
import appConfig from "../../../app.config";
import ImageParagraphSections, {
  Image,
  Paragraph,
} from "../../components/ImageParagraphSections";
import tailwindConfig from "../../../tailwind.config";
import HighlightedContentSection from "../../components/HighlightedContentSection";
import LinkButton from "../../components/LinkButton";
import PrivacySettingsPanelWrapper from "../../components/privacy/PrivacySettingsPanelWrapper";
import { getLocalStorage } from "../../misc/functions";

const { useScrollVisibility } = hooks;
const { Carousel, FeedbackCard } = components;
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
 *  imageSrc: string,
 *  link: {href: string, label: string}
 * }} TopSectionData
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
 *     description: DescriptionSectionData,
 *     highlightedContent: HighlightedContentData,
 *     feedback: FeedbackSectionData
 *   },
 *   mobile?: boolean
 * }} HomeTemplateProps
 */

/**
 * @param {TopSectionData} sectionData
 * @returns
 */
function renderTopSection(sectionData) {
  const { title, subtitle, imageSrc, link } = sectionData;
  return (
    <section key="top">
      <BgImageSection
        title={title}
        content={subtitle}
        headingElements={{ title: "h2" }}
        //imageUrl={imageSrc}
        classNames={{
          root: "py-12 lg:py-24 lg:max-w-6xl mx-auto px-6 lg:px-0",
          title:
            "text-4xl lg:text-8xl text-red-opaqueTitle font-titleBold uppercase text-left red-title-stroke text-center lg:text-left",
          content:
            "text-white text-lg lg:text-2xl font-titleBold uppercase text-center lg:text-left",
          backdrop: "opacity-45",
          background: "bg-camera",
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
        bottomContent={
          link && (
            <LinkButton
              href={link.href}
              label={link.label}
              classNames={{
                root: "lg:inline-block shadow-md",
                button: "lg:text-lg lg:px-8",
              }}
            />
          )
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
      items={items.map((item) => ({
        ...item,
        imagePosition: mobile ? "start" : item.imagePosition,
      }))}
      variant={mobile ? "vertical" : "horizontal"}
      classNames={{
        root: "bg-green-dark pb-4 pt-8",
        item: { paragraph: "text-white lg:px-8", image: "px-4 lg:px-0" },
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
          <h3 className="font-titleBold text-3xl lg:text-4xl text-center text-white uppercase">
            {title}
          </h3>
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
          labels={{
            arrows: {
              prev: "Elemento precedente",
              next: "Elemento successivo",
            },
            dot: (index) => `Elemento ${index}`,
          }}
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
 * @param {HomeTemplateProps} param0
 */
function HomeTemplate({ sections, mobile }) {
  const {
    top: topSectionData,
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
      <PrivacySettingsPanelWrapper
        mobile={mobile}
        settings={appConfig.data.privacy.settings}
        sections={appConfig.data.privacy.sections}
        title={appConfig.data.privacy.title}
        subtitle={appConfig.data.privacy.subtitle}
        storage={getLocalStorage()}
      >
        {renderTopNavBar({
          items: appConfig.data.topNavBar.items,
          maxWidth: "6xl",
          mobile,
        })}
        <Header
          mobile={mobile}
          classNames={{ root: "lg:sticky top-0 z-top bg-white shadow-md" }}
        />
        {renderTopSection(topSectionData)}
        {renderTitleSection(appConfig.data.mainTitle, {
          preTitle: "h1",
          title: "h2",
        })}
        <section key="services">
          {renderServicesNavGrid({
            ...appConfig.data.servicesGrid,
            flipCardButtonLabel: mobile ? "Caricamento" : "Scopri di più",
          })}
        </section>
        {renderDescriptionSection(processedDescriptionSectionData, mobile)}
        <DescriptionDivider
          fill={tailwindConfig.theme.extend.colors.green.dark}
        />
        <div
          ref={(r) => (highlightedElWrapperRef.current = r)}
          className="max-w-6xl mx-auto pb-8 px-4 lg:px-0"
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
          dimensions: { width: "100%", height: 300 },
          classNames: {
            root: "px-4 lg:max-w-6xl lg:px-0 mx-auto mt-4 lg:mt-0",
            map: "pb-8 lg:pb-0",
          },
        })}
        {renderPageFooter({
          logo: appConfig.data.footer.logo,
          sections: appConfig.data.footer.sections,
          contentMaxWidth: "6xl",
          variant: mobile ? "vertical" : "horizontal",
        })}
      </PrivacySettingsPanelWrapper>
    </main>
  );
}

export default memo(HomeTemplate);
