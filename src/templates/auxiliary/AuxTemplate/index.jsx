import React, { memo } from "react";
import Header from "../../../components/Header";
import {
  renderMaps,
  renderPageFooter,
  renderServicesNavGrid,
  renderTitleSection,
  renderTopNavBar,
} from "..";
import appConfig from "../../../../app.config";
import PrivacySettingsPanelWrapper from "../../../components/privacy/PrivacySettingsPanelWrapper";
import { getLocalStorage } from "../../../misc/functions";

function AuxTemplate({
  mobile,
  children,
  className,
  disableAdditionalContent,
  disablePrivacyManagement,
}) {
  let content = (
    <>
      {renderTopNavBar({
        items: appConfig.data.topNavBar.items,
        maxWidth: "6xl",
        mobile,
      })}
      <div className="lg:sticky top-0 z-top bg-white shadow-md">
        <Header mobile={mobile} classNames={{ contentWrapper: "max-w-6xl" }} />
      </div>
      <section key="main-content" className={className}>
        {children}
      </section>
      {!disableAdditionalContent && (
        <>
          {renderTitleSection(appConfig.data.mainTitle)}
          <section key="services">
            {renderServicesNavGrid({
              ...appConfig.data.servicesGrid,
              className: "max-w-6xl",
              flipCardButtonLabel: mobile ? "Caricamento" : "Scopri di più",
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
        </>
      )}
      {renderPageFooter({
        logo: appConfig.data.footer.logo,
        sections: appConfig.data.footer.sections,
        contentMaxWidth: "6xl",
        variant: mobile ? "vertical" : "horizontal",
        disablePrivacyManagement,
      })}
    </>
  );

  if (!disableAdditionalContent) {
    content = (
      <PrivacySettingsPanelWrapper
        mobile={mobile}
        settings={appConfig.data.privacy.settings}
        sections={appConfig.data.privacy.sections}
        title={appConfig.data.privacy.title}
        subtitle={appConfig.data.privacy.subtitle}
        storage={getLocalStorage()}
      >
        {content}
      </PrivacySettingsPanelWrapper>
    );
  }
  return <main>{content}</main>;
}

export default memo(AuxTemplate);
