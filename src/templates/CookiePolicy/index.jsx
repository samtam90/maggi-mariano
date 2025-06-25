import React, { memo } from "react";
import appConfig, { links } from "../../../app.config";
import CookiePolicy from "../../components/privacy/CookiePolicy";
import AuxTemplate from "../auxiliary/AuxTemplate";

function CookiePolicyTemplate({ mobile }) {
  return (
    <AuxTemplate mobile={mobile}>
      <CookiePolicy
        name={appConfig.misc.extendedTitle}
        email={appConfig.misc.email}
        classNames={{ root: "max-w-6xl mx-auto" }}
        privacyPolicyHref={links.privacy["privacy-policy"]}
      />
    </AuxTemplate>
  );
}

export default memo(CookiePolicyTemplate);
