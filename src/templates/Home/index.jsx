"use client";

import React from "react";
import Header from "../../components/Header";
import {
  withViewportData,
  AdditionalProps,
  renderServicesNavGrid,
} from "../auxiliary";
import { components } from "@italwebcom/tailwind-components";
import Link from "next/link";
import appConfig from "../../../app.config";

const { FadeIn } = components.Animations;
const { BgImageSection } = components.sections;

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
 *   sections: {
 *     top: TopSectionData,
 *     title: TitleSectionData
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
          content: "text-white text-lg lg:text-2xl font-titleBold uppercase text-center lg:text-left",
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
          root: "py-16 lg:ml-12 lg:py-32 lg:max-w-5xl flex flex-col items-center",
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
          <Link href={href} target="_blank" className="block text-center">
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
 * @param {HomeTemplateProps & AdditionalProps} param0
 */
function HomeTemplate({ sections, mobile }) {
  const { top: topSectionData, title: titleSectionData } = sections;
  return (
    <main>
      <div className="h-14 bg-green-dark"></div>
      <div className="sticky top-0 z-top bg-white shadow-md">
        <Header mobile={mobile} />
      </div>
      {renderTopSection(topSectionData)}
      {renderTitleSection(titleSectionData)}
      <section key="services">
        {renderServicesNavGrid(appConfig.data.servicesGrid)}
      </section>
      <div className="h-64 bg-green-dark"></div>
    </main>
  );
}

export default withViewportData(HomeTemplate);
