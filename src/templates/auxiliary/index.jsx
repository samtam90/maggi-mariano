import React, { memo, ComponentType } from "react";
import useViewportDimensions from "./hooks/useViewportDimensions";
import appConfig from "../../../app.config";
import { components } from "@italwebcom/tailwind-components";
import Link from "next/link";
import tailwindConfig from "../../../tailwind.config";
import Icons from "../../components/Icons";
import NavBar from "../../components/NavBar";
import PageFooter from "../../components/PageFooter";
import EmbeddedMap from "../../components/EmbeddedMap";
import { twClsx } from "../../misc/functions";

const { BorderedColoredText, FlipCard } = components;
const { NavButtonsGrid } = components.sections;

function getIcon(iconName) {
  switch (iconName) {
    default:
      return <Icons.Phone />;
  }
}

function processFooterNavItems(navItems) {
  return navItems.map((navItem) => ({
    ...navItem,
    icon: getIcon(navItem.icon),
  }));
}

/**
 * @typedef {{viewportWidth: number, viewportHeight: number, mobile: boolean}} AdditionalProps
 */

/**
 * @template T
 * @param {ComponentType<T>} Component
 * @returns {ComponentType<T & AdditionalProps>}
 */
export function withViewportData(Component) {
  return memo((props) => {
    const {
      isMobile: mobile,
      width: viewportWidth,
      height: viewportHeight,
    } = useViewportDimensions(appConfig.misc.mobileViewportThresholdPx);
    return (
      <Component
        {...props}
        mobile={mobile}
        viewportWidth={viewportWidth}
        viewportHeight={viewportHeight}
      />
    );
  });
}

export function renderTopNavBar({ items, maxWidth }) {
  return (
    <NavBar
      variant="horizontal"
      maxWidth={maxWidth}
      classNames={{ root: "py-4" }}
    >
      {items.map(({ title, link, icon }) => (
        <NavBar.Item
          key={title}
          title={title}
          icon={getIcon(icon)}
          link={link}
        />
      ))}
    </NavBar>
  );
}

export function renderPageFooter({
  sections,
  logo,
  contentMaxWidth,
  variant,
  titleHeadingElement,
}) {
  return (
    <PageFooter
      variant={variant}
      contentMaxWidth={contentMaxWidth}
      titleHeadingElement={titleHeadingElement || "h4"}
      logo={logo}
      classNames={{ root: "py-8", section: { additionalContent: "mt-6" } }}
    >
      {sections.map(({ title, navItems, additionalContent }, index) => (
        <PageFooter.Section
          title={title}
          navItems={processFooterNavItems(navItems)}
          additionalContent={additionalContent}
          key={`${title}-${index}`}
        />
      ))}
    </PageFooter>
  );
}

export function renderMaps({ data, dimensions, className }) {
  return (
    <div
      className={twClsx(
        "grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 lg:py-8 lg:gap-8",
        className
      )}
    >
      {data.map(({ title, subtitle, src }) => (
        <EmbeddedMap
          title={title}
          subtitle={subtitle}
          src={src}
          key={src}
          dimensions={dimensions}
        />
      ))}
    </div>
  );
}

export function renderServicesNavGrid({
  data,
  decorationImageUrl,
  backgroundImageUrl,
}) {
  return (
    <div
      className="bg-cover relative"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-green-primary opacity-50 z-0"></div>
      <div className="max-w-8xl mx-auto px-4 lg:px-0 relative z-10 py-8 lg:py-16">
        <BorderedColoredText
          left="I nostri"
          right="servizi"
          fillColor={tailwindConfig.theme.extend.colors.yellow.default}
          classNames={{
            root: "mb-8 flex justify-center lg:block",
            text: "text-xl lg:text-3xl",
          }}
        />
        <NavButtonsGrid
          renderHref={(href, content) => (
            <Link href={href} target="_blank" className="block">
              {content}
            </Link>
          )}
          decorationImageUrl={decorationImageUrl}
          classNames={{
            item: {
              container: "text-center px-2 py-2 lg:py-4 lg:px-6",
              innerContainer: "p-2 py-4 lg:p-6",
              subtitle: "text-xs lg:text-sm",
            },
            root: "grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6",
          }}
          disableHighlight
          renderItemInnerContent={(content) => (
            <FlipCard
              front={content}
              back={<div className="h-full w-full bg-green-primary" />}
            />
          )}
        >
          {data.map(({ id, title, subtitle, iconSrc, href }) => (
            <NavButtonsGrid.Item
              key={id}
              id={id}
              title={title}
              subtitle={subtitle}
              icon={
                <img
                  src={iconSrc}
                  alt={`${title} ${subtitle}`}
                  className="h-12 w-12 object-contain"
                />
              }
              href={href}
            />
          ))}
        </NavButtonsGrid>
      </div>
    </div>
  );
}
