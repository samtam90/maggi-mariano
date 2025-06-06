import React, { memo } from "react";
import { components } from "@italwebcom/tailwind-components";
import appConfig from "../../../app.config";
import { renderHref } from "../misc";
import { twClsx } from "../../misc/functions";

const { CompositeAppBar } = components;

/**
 * @param {{
 *    logoDimensions: {width: number, height: number},
 *    mobile?: boolean
 * }} param0
 * @returns
 */
function Header({ logoDimensions = appConfig.misc.logoDimensions, mobile }) {
  return (
    <CompositeAppBar
      logo={{
        href: appConfig.data.baseUrl,
        src: appConfig.data.header.logo.src,
        alt: appConfig.data.header.logo.alt,
        dimensions: logoDimensions,
      }}
      variant={mobile ? "mobile" : "desktop"}
      sections={appConfig.data.header.navBarSections}
      renderHref={renderHref}
      testIDs={{
        search: {
          input: "",
        },
      }}
      classNames={{
        contentWrapper: "max-w-8xl mx-auto pt-4 lg:pb-4",
        root: "shadow-md",
        innerContentWrapper: "pb-4 lg:pb-0 px-4 lg:px-0",
        sections: {
          element: ({ isNestedContentOpen, nested }) => ({
            root: twClsx(
              "font-content text-gray-700 hover:text-white hover:bg-green-primary text-sm lg:text-md px-4",
              !nested ? "uppercase" : "bg-gray-50 text-xs lg:text-sm",
              isNestedContentOpen && "text-white bg-green-primary"
            ),
          }),
        },
      }}
    />
  );
}

export default memo(Header);
