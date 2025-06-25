import React from "react";
import Header from "../../../components/Header";
import {
  renderMaps,
  renderPageFooter,
  renderServicesNavGrid,
  renderTitleSection,
  renderTopNavBar,
} from "..";
import appConfig from "../../../../app.config";

export default function AuxTemplate({ mobile, children, className }) {
  return (
    <main>
      {renderTopNavBar({
        items: appConfig.data.topNavBar.items,
        maxWidth: "6xl",
        className: "hidden md:block",
      })}
      <div className="lg:sticky top-0 z-top bg-white shadow-md">
        <Header mobile={mobile} classNames={{ contentWrapper: "max-w-6xl" }} />
      </div>
      <section key="main-content" className={className}>
        {children}
      </section>
      {renderTitleSection(appConfig.data.mainTitle)}
      <section key="services">
        {renderServicesNavGrid({
          ...appConfig.data.servicesGrid,
          className: "max-w-6xl",
          disableFlipCard: mobile,
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
