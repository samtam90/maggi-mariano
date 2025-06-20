"use client";

import React, { ReactNode } from "react";
import { components } from "@italwebcom/tailwind-components";
import Link from "next/link";
import tailwindConfig from "../../../tailwind.config";
import Icons from "../../components/Icons";
import NavBar from "../../components/NavBar";
import PageFooter from "../../components/PageFooter";
import EmbeddedMap from "../../components/EmbeddedMap";
import { twClsx } from "../../misc/functions";
import LinkButton from "../../components/LinkButton";
import LocationsGrid, {
  LocationsGridItem,
  ClassNames as LocationsGridClassNames,
} from "../../components/LocationsGrid";
import { HeaderComponent } from "../../misc/functions";

const { BorderedColoredText, FlipCard } = components;
const { NavButtonsGrid, BgImageSection } = components.sections;

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

export function renderTopNavBar({ items, maxWidth, className }) {
  return (
    <NavBar
      variant="horizontal"
      maxWidth={maxWidth}
      classNames={{ root: twClsx("py-4", className) }}
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
      classNames={{
        root: "py-8",
        section: {
          additionalContent: "mt-6",
          root: "mb-6 last:mb-0 lg:mb-0 flex flex-col items-center lg:block basis-1/4",
        },
      }}
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

/**
 * @param {{
 *  title: string,
 *  subtitle: string,
 *  preTitle: string,
 *  button: {
 *   label: string,
 *   href: string
 *  },
 *  imageSrc: string
 * }} sectionData
 * @returns
 */
export function renderTitleSection(sectionData) {
  const { preTitle, title, subtitle, button, imageSrc } = sectionData;
  const { label, href } = button;
  return (
    <section key="title">
      <BgImageSection
        preTitle={preTitle}
        title={title}
        content={subtitle}
        imageUrl={imageSrc}
        classNames={{
          root: "py-16 lg:ml-12 lg:py-32 lg:max-w-5xl lg:mx-auto flex flex-col items-center",
          preTitle:
            "text-3xl lg:text-7xl text-white font-titleBold uppercase border border-white leading-normal mb-2 lg:mb-3 px-2",
          title:
            "text-2xl lg:text-5xl text-yellow-primary font-title uppercase border border-yellow-primary leading-normal mb-8 px-2",
          content:
            "text-sm lg:text-xl text-white font-title uppercase text-center self-stretch",
          background: "bg-fixed",
          backdrop: "opacity-65",
        }}
        bottomContent={
          <LinkButton
            href={href}
            label={label}
            classNames={{ root: "shadow-md" }}
          />
        }
      />
    </section>
  );
}

/**
 * @typedef {{title: string, subtitle: string, src: string}} MapData
 * @param {{
 *    data: MapData[],
 *    dimensions: {width: number, height: number},
 *    classNames?: {root: string, map: string}
 * }} param0
 * @returns
 */
export function renderMaps({ data, dimensions, classNames }) {
  return (
    <div
      className={twClsx(
        "grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 lg:py-8 lg:gap-8",
        classNames?.root
      )}
    >
      {data.map(({ title, subtitle, src }, index) => (
        <EmbeddedMap
          title={title}
          subtitle={subtitle}
          src={src}
          key={`${title}-${index}`}
          dimensions={dimensions}
          classNames={{ map: classNames?.map }}
        />
      ))}
    </div>
  );
}

/**
 * @typedef {{
 *    id: number | string,
 *    title: string,
 *    subtitle: string,
 *    href: string,
 *    iconSrc: string
 * }} ServiceData
 * @param {{
 *    data: ServiceData[],
 *    decorationImageUrl?: string,
 *    backgroundImageUrl?: string
 * }} param0
 * @returns
 */
export function renderServicesNavGrid({
  data,
  decorationImageUrl,
  backgroundImageUrl,
  className,
}) {
  return (
    <div
      className="bg-cover relative"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-green-primary opacity-50 z-0"></div>
      <div
        className={twClsx(
          "max-w-8xl mx-auto px-4 lg:px-0 relative z-10 py-8 lg:py-16",
          className
        )}
      >
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

/**
 * @typedef {{
 *    title: string | ReactNode,
 *    items: LocationsGridItem[],
 *    titleHeadingElement?: HeaderComponent,
 *    classNames?: LocationsGridClassNames
 * }} LocationsGridData
 *
 * @returns
 * @param {LocationsGridData} param0
 */
export function renderLocationsGrid({
  title,
  items,
  titleHeadingElement,
  classNames,
}) {
  return (
    <LocationsGrid
      title={title}
      titleHeadingElement={titleHeadingElement}
      items={items}
      classNames={classNames}
    />
  );
}
