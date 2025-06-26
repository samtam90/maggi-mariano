import React, { memo } from "react";
import tailwindConfig from "../../../tailwind.config";
import Link from "next/link";
import AuxTemplate from "../auxiliary/AuxTemplate";
import { components } from "@italwebcom/tailwind-components";
import Image, { ImageProps } from "../../components/Image";

const { BorderedColoredText } = components;

/**
 * @typedef {{image: ImageProps, href: string, label: string}} Document
 * @param {{
 *    mobile: boolean,
 *    documents: Document[],
 *    title: {left: string, right: string}
 * }} param0
 * @returns
 */
function DocumentsTemplate({ mobile, documents, title }) {
  return (
    <AuxTemplate
      mobile={mobile}
      className="max-w-6xl mx-auto px-4 lg:px-0 py-6 lg:py-12"
    >
      <BorderedColoredText
        left={title.left}
        right={title.right}
        fillColor={tailwindConfig.theme.extend.colors.red.primary}
        classNames={{
          text: "text-red-primary text-center",
          rightContainer: "text-white text-sm lg:text-lg block lg:inline-block",
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
              <Image
                src={image.src}
                dimensions={image.dimensions}
                alt={label}
                sources={image?.sources}
              />
            </Link>
          </li>
        ))}
      </ul>
    </AuxTemplate>
  );
}

export default memo(DocumentsTemplate);
