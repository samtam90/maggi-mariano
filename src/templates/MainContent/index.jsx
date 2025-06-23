"use client";

import React, { memo } from "react";
import { LocationsGridData, renderLocationsGrid } from "../auxiliary";
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
import AuxTemplate from "../auxiliary/AuxTemplate";

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
    <AuxTemplate mobile={mobile}>
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
            { title, paragraphs, mediaElements, mediaPosition, classNames },
            index
          ) => (
            <ContentArticle.Section
              key={title ? `${title}-${index}` : index}
              title={title}
              paragraphs={paragraphs}
              mediaElements={mediaElements}
              mediaPosition={mediaPosition || "right"}
              classNames={classNames}
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
          }}
          onFormSubmit={onContactFormSubmit}
        />
      )}
      {locationsSectionData &&
        renderLocationsGrid({
          ...locationsSectionData,
          classNames: { root: "py-8 lg:py-24 px-4 lg:px-0" },
        })}
    </AuxTemplate>
  );
}

export default memo(MainContentTemplate);
