"use client";

import React, { memo } from "react";
import {
  renderMaps,
  renderPageFooter,
  renderServicesNavGrid,
  renderTitleSection,
  renderTopNavBar,
  LocationsGridData,
  renderLocationsGrid,
} from "../auxiliary";
import appConfig from "../../../app.config";
import Header from "../../components/Header";
import ContactSection, {
  PhoneNumber,
  Image,
} from "../../components/ContactSection";
import testIDs from "../../misc/testIDs";
import ContentArticle, {
  SectionProps as ContentArticleSectionData,
  SectionClassNames,
} from "../../components/ContentArticle";
import tailwindConfig from "../../../tailwind.config";
import { ContactFormData } from "../../components/ContactForm";

/**
 * @typedef {{
 *    preTitle: string,
 *    title: string,
 *    phoneNumbers: PhoneNumber[],
 *    content: string,
 *    images: Image[],
 *    formTitle: string
 * }} ContactSectionData
 *
 * @typedef {ContentArticleSectionData & {classNames?: SectionClassNames}} PageContentArticleSectionData
 *
 * @typedef {{
 *    title: {left: string, right: string, fillColor?: string},
 *    sections: PageContentArticleSectionData[]
 * }} MainContentSectionData
 *
 * @typedef {{
 *    contacts?: ContactSectionData,
 *    locations?: LocationsGridData,
 *    mainContent: MainContentSectionData
 * }} SectionsData
 */

/**
 * @param {{
 *    mobile: boolean,
 *    sections: SectionsData,
 *    onContactFormSubmit: (data: ContactFormData) => void
 * }} param0
 * @returns
 */
function MainContentTemplate({ mobile, sections, onContactFormSubmit }) {
  const {
    contacts: contactsSectionData,
    locations: locationsSectionData,
    mainContent: mainContentSectionData,
  } = sections;

  return (
    <main>
      {renderTopNavBar({
        items: appConfig.data.topNavBar.items,
        maxWidth: "6xl",
        className: "hidden md:block",
      })}
      <div className="sticky top-0 z-top bg-white shadow-md">
        <Header mobile={mobile} classNames={{ contentWrapper: "max-w-6xl" }} />
      </div>
      
      {renderTitleSection(appConfig.data.mainTitle)}
      <section key="services">
        {renderServicesNavGrid({
          ...appConfig.data.servicesGrid,
          className: "max-w-6xl",
        })}
      </section>
      {renderMaps({
        data: appConfig.data.maps,
        dimensions: { width: "100%", height: "300" },
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
    </main>
  );
}

export default memo(MainContentTemplate);
