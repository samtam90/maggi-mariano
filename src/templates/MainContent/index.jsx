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
  ClassNames as ContactSectionClassNames,
} from "../../components/ContactSection";
import testIDs from "../../misc/testIDs";
import ContentArticle, {
  SectionProps as ContentArticleSectionData,
  SectionClassNames,
} from "../../components/ContentArticle";
import tailwindConfig from "../../../tailwind.config";
import { ContactFormData } from "../../components/ContactForm";
import PrivacySettingsPanelWrapper from "../../components/privacy/PrivacySettingsPanelWrapper";
import { getLocalStorage } from "../../misc/functions";

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
 *    onContactFormSubmit: (data: ContactFormData) => void,
 *    classNames?: {
 *      contactsSection?: ContactSectionClassNames
 *    }
 * }} param0
 * @returns
 */
function MainContentTemplate({
  mobile,
  sections,
  onContactFormSubmit,
  classNames,
}) {
  const {
    contacts: contactsSectionData,
    locations: locationsSectionData,
    mainContent: mainContentSectionData,
  } = sections;

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
        <div className="lg:sticky top-0 z-top bg-white shadow-md">
          <Header
            mobile={mobile}
            classNames={{ contentWrapper: "max-w-6xl" }}
          />
        </div>
        <ContentArticle
          title={{
            ...mainContentSectionData.title,
            fillColor: tailwindConfig.theme.extend.colors.red.primary,
          }}
          titleHeadingElements={{ article: "h1", section: "h2" }}
          classNames={{
            root: "py-4 lg:py-12 px-4 lg:px-0 max-w-6xl mx-auto",
            section: {
              paragraph: "mb-4",
            },
          }}
        >
          {mainContentSectionData.sections?.map(
            (
              {
                title,
                paragraphs,
                mediaElements,
                mediaPosition,
                classNames,
                content,
              },
              index
            ) => (
              <ContentArticle.Section
                key={title ? `${title}-${index}` : index}
                title={title}
                paragraphs={paragraphs}
                mediaElements={mediaElements}
                mediaPosition={mediaPosition || "right"}
                classNames={classNames}
                content={content}
              />
            )
          )}
        </ContentArticle>
        {contactsSectionData && (
          <ContactSection
            {...contactsSectionData}
            ids={testIDs.contactForm}
            variant={mobile ? "vertical" : "horizontal"}
            classNames={{
              contentWrapper: "max-w-6xl",
              ...classNames?.contactsSection,
            }}
            onFormSubmit={onContactFormSubmit}
          />
        )}
        {renderTitleSection(appConfig.data.mainTitle)}
        {locationsSectionData &&
          renderLocationsGrid({
            ...locationsSectionData,
            classNames: { root: "py-8 lg:py-16 px-4 lg:px-0", item: "text-sm" },
          })}
        <section key="services">
          {renderServicesNavGrid({
            ...appConfig.data.servicesGrid,
            className: "max-w-6xl",
            disableFlipCard: mobile,
          })}
        </section>
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

export default memo(MainContentTemplate);
