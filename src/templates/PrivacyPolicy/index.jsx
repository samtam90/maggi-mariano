import React, { memo } from "react";
import appConfig, { links } from "../../../app.config";
import PrivacyPolicy from "../../components/privacy/PrivacyPolicy";
import AuxTemplate from "../auxiliary/AuxTemplate";

function PrivacyPolicyTemplate({ mobile }) {
  return (
    <AuxTemplate mobile={mobile}>
      <PrivacyPolicy
        name={appConfig.misc.extendedTitle}
        email={appConfig.misc.email}
        classNames={{ root: "max-w-6xl mx-auto" }}
        cookiePolicyHref={links.privacy["cookie-policy"]}
      />
    </AuxTemplate>
  );
}

export default memo(PrivacyPolicyTemplate);
