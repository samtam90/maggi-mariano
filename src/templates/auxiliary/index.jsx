"use client";

import React, { ReactNode, useCallback } from "react";
import { components } from "@italwebcom/tailwind-components";
import Link from "next/link";
import Icons from "../../components/Icons";
import NavBar, { InnerNavBarItem } from "../../components/NavBar";
import PageFooter from "../../components/PageFooter";
import { twClsx } from "../../misc/functions";
import LinkButton from "../../components/LinkButton";
import LocationsGrid, {
  LocationsGridItem,
  ClassNames as LocationsGridClassNames,
} from "../../components/LocationsGrid";
import { HeaderComponent } from "../../misc/functions";
import { links } from "../../../app.config";
import EmbeddedMapsWrapper from "./EmbeddedMapsWrapper";
import Image from "../../components/Image";

const { BorderedColoredText, FlipCard } = components;
const { NavButtonsGrid, BgImageSection } = components.sections;
const { PrivacySettingsPanelWrapper } = components.privacy;

function getIcon(iconName) {
  switch (iconName) {
    case "beaker":
      return <Icons.Beaker />;
    case "trash":
      return <Icons.Trash />;
    case "truck":
      return <Icons.Truck />;
    case "document-text":
      return <Icons.DocumentText />;
    case "envelope":
      return <Icons.Envelope />;
    case "at":
      return <Icons.At />;
    case "mobile-phone":
      return <Icons.MobilePhone />;
    case "pencil":
      return <Icons.PencilSquare />;
    case "map":
    case "map-pin":
      return <Icons.MapPin className="text-xl" />;
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

export function renderTopNavBar({ items, maxWidth, className, mobile }) {
  const actualItems = mobile ? items.slice(0, 2) : items;
  return (
    <NavBar
      variant="horizontal"
      maxWidth={maxWidth}
      classNames={{
        root: twClsx("p-4 lg:px-0", className),
      }}
      labelMaxLength={mobile ? 20 : undefined}
      titleHeadingElement="h4"
    >
      {actualItems.map(({ title, link, icon }) => (
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

function PageFooterPrivacyButton() {
  const { setOpen } = PrivacySettingsPanelWrapper.useOpenManagement();
  return (
    <InnerNavBarItem
      icon={<Icons.PencilSquare />}
      title="Settaggi privacy"
      label="Modifica impostazioni"
      classNames={{ label: "text-sm", root: "cursor-pointer -mt-6 lg:-mt-2" }}
      onClick={() => setOpen(true)}
    />
  );
}

export function renderPageFooter({
  sections,
  logo,
  contentMaxWidth,
  variant,
  titleHeadingElement,
  disablePrivacyManagement,
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
          root: "mb-6 last:mb-0 lg:mb-0 flex flex-col items-start lg:items-center lg:block basis-1/4",
          navBar: {
            item: {
              label: "text-sm",
            },
          },
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
      <PageFooter.Section
        title="Privacy"
        navItems={[
          {
            title: "Privacy Policy",
            icon: getIcon("document-text"),
            link: {
              label: "La nostra privacy Policy",
              href: links.privacy["privacy-policy"],
            },
          },
          {
            title: "Cookie Policy",
            icon: getIcon("document-text"),
            link: {
              label: "La nostra cookie Policy",
              href: links.privacy["cookie-policy"],
            },
          },
        ]}
        additionalContent={
          !disablePrivacyManagement && <PageFooterPrivacyButton />
        }
      />
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
export function renderTitleSection(sectionData, headingElements) {
  const { preTitle, title, subtitle, button, imageSrc } = sectionData;
  const { label, href } = button;
  return (
    <section key="title">
      <BgImageSection
        preTitle={preTitle}
        title={title}
        content={subtitle}
        headingElements={headingElements || { preTitle: "h2", title: "h3" }}
        //imageUrl={imageSrc}
        classNames={{
          root: "py-16 lg:ml-12 lg:py-32 lg:max-w-5xl lg:mx-auto flex flex-col items-center",
          preTitle:
            "text-3xl lg:text-7xl text-white font-titleBold uppercase border border-white leading-normal mb-2 lg:mb-3 px-2",
          title:
            "text-2xl lg:text-5xl text-yellow-primary font-title uppercase border border-yellow-primary leading-normal mb-8 px-2",
          content:
            "text-sm lg:text-xl text-white font-title uppercase text-center self-stretch",
          background: "bg-fixed bg-title",
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

export function renderMaps({ data, dimensions, classNames }) {
  return (
    <EmbeddedMapsWrapper
      data={data}
      dimensions={dimensions}
      classNames={classNames}
    />
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
 *    backgroundImageUrl?: string,
 *    className?: string,
 *    disableFlipCard?: boolean
 * }} param0
 * @returns
 */
export function renderServicesNavGrid({
  data,
  decorationImageUrl,
  backgroundImageUrl,
  className,
  disableFlipCard,
  titleHeadingElement = "h3",
  flipCardButtonLabel = "Scopri di più",
}) {
  const renderItemInnerContent = useCallback(
    (content, { title, subtitle }) =>
      disableFlipCard ? (
        content
      ) : (
        <FlipCard
          front={content}
          back={
            <div className="h-full w-full bg-green-primary flex flex-col items-center justify-center text-white font-titleBold">
              <h3 className="mb-4 text-center">
                <span className="text-md lg:text-lg uppercase">{title}</span>
                <br />
                <span className="font-title uppercase text-xs lg:text-sm">
                  {subtitle}
                </span>
              </h3>
              <div
                role="button"
                className="border border-white rounded-lg py-2 px-4 rounded-lg text-sm text-center lg:hover:opacity-75 transition-opacity"
              >
                {flipCardButtonLabel}
              </div>
            </div>
          }
        />
      ),
    [disableFlipCard]
  );

  return (
    <div
      className="bg-cover relative"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-green-primary opacity-50 z-0"></div>
      <div
        className={twClsx(
          "max-w-6xl mx-auto px-4 lg:px-0 relative z-10 py-8 lg:py-16",
          className
        )}
      >
        <BorderedColoredText
          left="I nostri"
          right="servizi"
          classNames={{
            root: "mb-8 flex lg:inline-flex justify-center border-yellow-default",
            text: "text-xl lg:text-3xl",
            rightContainer: "bg-yellow-default",
            leftContainer: "bg-transparent",
          }}
          heading
          headingElement={titleHeadingElement}
        />
        <NavButtonsGrid
          renderHref={(href, content) => (
            <Link href={href} className="block">
              {content}
            </Link>
          )}
          decorationImageUrl={decorationImageUrl}
          classNames={{
            item: {
              container: "text-center px-2 py-2 lg:py-4 lg:px-6",
              innerContainer: "p-2 py-4 lg:p-6",
              subtitle: "text-xs lg:text-sm leading-tight",
              title: "text-sm lg:text-md",
            },
            root: "grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6",
          }}
          disableHighlight
          renderItemInnerContent={renderItemInnerContent}
          headingComponent="h3"
        >
          {data.map(({ id, title, subtitle, iconSources, href }) => (
            <NavButtonsGrid.Item
              key={id}
              id={id}
              title={title}
              subtitle={subtitle}
              icon={
                <Image
                  sources={iconSources}
                  alt={`${title} ${subtitle}`}
                  classNames={{ picture: "h-12 w-12 block", image: "w-full" }}
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
