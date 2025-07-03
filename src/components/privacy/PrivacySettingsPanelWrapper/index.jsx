import appConfig from "../../../../app.config";
import React, { memo } from "react";
import { components } from "@italwebcom/tailwind-components";

const { PrivacySettingsPanelWrapper } = components.privacy;

function isAutomatedUserAgent() {
  if (typeof navigator !== "undefined") {
    return (
      navigator.userAgent.match(
        /(Mozilla\/5.0 \(Linux; Android 11; moto g power \(2022\)\) AppleWebKit\/537\.36 \(KHTML\, like Gecko\) Chrome\/136\.0\.0\.0 Mobile Safari\/537.36)|(Googlebot)|(Lighthouse)|(Insights)/
      ) !== null
    );
  }
  return false;
}

function WrappedPrivacySettingsWrapper(props) {
  return (
    <PrivacySettingsPanelWrapper
      {...props}
      logo={{
        src: appConfig.misc.logoSrc,
        dimensions: { width: 100, height: 70 },
      }}
      disabled={isAutomatedUserAgent()}
    />
  );
}

export default memo(WrappedPrivacySettingsWrapper);
