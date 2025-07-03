import React, { memo } from "react";
import { components } from "@italwebcom/tailwind-components";
import tailwindConfig from "../../../tailwind.config";
import AuxTemplate from "../auxiliary/AuxTemplate";
import {
  DisabledMessage,
  useDisabledMgmt,
} from "../auxiliary/EmbeddedMapsWrapper";

const { BorderedColoredText } = components;
const { PrivacySettingsPanelWrapper } = components.privacy;

function getLoadingAttribute({ loading, mobile }) {
  if (typeof loading === "function") {
    return loading(mobile);
  }
  return loading;
}

function Video({ src, dimensions, label, loading }) {
  const disabled = useDisabledMgmt();
  const { setOpen } = PrivacySettingsPanelWrapper.useOpenManagement();
  if (disabled) {
    return (
      <div
        style={dimensions}
        role="presentation"
        className="max-w-full border rounded-lg border-gray-400 flex items-center justify-center"
      >
        <DisabledMessage
          setOpen={setOpen}
          message="Il video non è visibile perchè i cookie di terze parti, inclusi quelli di Youtube, sono disattivati."
        />
      </div>
    );
  }
  return (
    <iframe
      src={src}
      title={label}
      width={dimensions?.width}
      height={dimensions?.height}
      className="object-contain max-w-full"
      loading={loading}
    />
  );
}

/**
 * @returns
 * @typedef {{
 *    src: string,
 *    label: string,
 *    dimensions?: {width: number, height: number}
 * }} Video
 * @param {{
 *    mobile: boolean,
 *    videos: Video[],
 *    title: {left: string, right: string}
 * }} param0
 */
function VideoGalleryTemplate({ mobile, videos, title }) {
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
        heading
        headingElement="h1"
      />
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        {videos.map(({ src, label, dimensions, loading }) => (
          <li key={label}>
            <Video
              src={src}
              label={label}
              dimensions={dimensions}
              loading={getLoadingAttribute({ loading, mobile })}
            />
          </li>
        ))}
      </ul>
    </AuxTemplate>
  );
}

export default memo(VideoGalleryTemplate);
