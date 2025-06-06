import React, { memo, ComponentType } from "react";
import useViewportDimensions from "./hooks/useViewportDimensions";
import appConfig from "../../../app.config";
import { components } from "@italwebcom/tailwind-components";
import Link from "next/link";
import tailwindConfig from "../../../tailwind.config";

const { BorderedColoredText } = components;
const { NavButtonsGrid } = components.sections;

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
      <div className="max-w-7xl mx-auto px-4 lg:px-0 relative z-10 py-8 lg:py-16">
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
              subtitle: "text-xs lg:text-sm"
            },
            root: "grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6",
          }}
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
