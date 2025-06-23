import React, { memo } from "react";
import {
  renderMaps,
  renderPageFooter,
  renderServicesNavGrid,
  renderTitleSection,
  renderTopNavBar,
} from "../auxiliary";
import appConfig from "../../../app.config";
import Header from "../../components/Header";
import tailwindConfig from "../../../tailwind.config";
import { components } from "@italwebcom/tailwind-components";
import Link from "next/link";

const { BorderedColoredText } = components;

/**
 * @typedef {{src: string, dimensions?: {width: number, height: number}}} Image
 * @typedef {{image: Image, href: string, label: string}} Document
 * @param {{
 *    mobile: boolean,
 *    documents: Document[],
 *    title: {left: string, right: string}
 * }} param0
 * @returns
 */
function DocumentsTemplate({ mobile, documents, title }) {
  //TODO: render
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
      <section
        key="documents"
        className="max-w-6xl mx-auto px-4 lg:px-0 py-6 lg:py-12"
      >
        <BorderedColoredText
          left={title.left}
          right={title.right}
          fillColor={tailwindConfig.theme.extend.colors.red.primary}
          classNames={{
            text: "text-red-primary text-center",
            rightContainer:
              "text-white text-sm lg:text-2xl block lg:inline-block",
            leftContainer: "block lg:inline-block",
            root: "text-md lg:text-2xl block lg:inline-block mb-12",
          }}
        />
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {documents.map(({ image, href, label }) => (
            <li key={label}>
              <h3 className="font-titleBold text-sm lg:text-md text-gray-700 mb-4 text-center">
                {label}
              </h3>
              <Link href={href} target="_blank">
                <img
                  src={image.src}
                  width={image.dimensions?.width}
                  height={image.dimensions?.height}
                  alt={label}
                  className="object-contain max-w-full"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
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

export default memo(DocumentsTemplate);
