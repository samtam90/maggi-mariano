import { twJoin, twMerge, ClassNameValue } from "tailwind-merge";
import React, { ReactNode, ComponentType, memo, Suspense } from "react";
import appConfig from "../../../app.config";
import dynamic from "next/dynamic";
import Splash from "../../components/Splash";

/**
 * @typedef {"h1" | "h2" | "h3" | "h4" | "h5" | "h6"} HeaderComponent
 * @typedef {"md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"} MaxWidthBreakpoint
 */

/**
 * @template {T}
 * @param {Array<T>} arr
 * @param {(element: T) => boolean} predicate
 */
export function allMatch(arr, predicate) {
  return arr.map((el) => predicate(el)).reduce((a, b) => a && b);
}

export function getLocalStorage() {
  /* window is undefined during ssr */
  if (typeof window !== "undefined") {
    return window.localStorage;
  }
  return null;
}

/**
 * @param  {...ClassNameValue} classNames
 * @returns
 */
export function twClsx(...classNames) {
  return twMerge(twJoin(classNames));
}

/**
 * @param {MaxWidthBreakpoint} maxWidth
 * @returns
 */
export function getMaxWidthClassName(maxWidth) {
  if (maxWidth) {
    switch (maxWidth) {
      case "md":
        return "max-w-md";
      case "lg":
        return "max-w-lg";
      case "xl":
        return "max-w-xl";
      case "2xl":
        return "max-w-2xl";
      case "3xl":
        return "max-w-3xl";
      case "4xl":
        return "max-w-4xl";
      case "5xl":
        return "max-w-5xl";
      case "6xl":
        return "max-w-6xl";
      case "7xl":
        return "max-w-7xl";
      default:
        return "max-w-8xl";
    }
  }
  return null;
}

/**
 *
 * @param {HeaderComponent} component
 * @param {ReactNode | string} content
 * @param {{className?: string, "data-testid"?: string}?} props
 */
export function renderHeader(component, content, props) {
  props = props || {};
  switch (component) {
    case "h1":
      return <h1 {...props}>{content}</h1>;
    case "h2":
      return <h2 {...props}>{content}</h2>;
    case "h3":
      return <h3 {...props}>{content}</h3>;
    case "h4":
      return <h4 {...props}>{content}</h4>;
    case "h5":
      return <h5 {...props}>{content}</h5>;
    default:
      return <h6 {...props}>{content}</h6>;
  }
}

/**
 * @template {T}
 * @param {{Mobile: ComponentType<T>, Desktop: ComponentType<T>}} InComponents
 * @returns
 */
export function withConditionalRendering(InComponents) {
  const splash = (
    <Splash alt={appConfig.misc.title} src={appConfig.misc.logoSrc} />
  );
  const Components = {
    Mobile: dynamic(() => InComponents.Mobile, { loading: () => splash }),
    Desktop: dynamic(() => InComponents.Desktop, { loading: () => splash }),
  };
  return memo(async (props) => {
    const { searchParams } = props;
    return (
      <div>
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              <img
                alt={appConfig.misc.title}
                src={appConfig.misc.logoSrc}
                className="object-contain inline-block"
              />
            </div>
          }
        >
          {searchParams?.viewport === "mobile" ? (
            <Components.Mobile {...props} />
          ) : (
            <Components.Desktop {...props} />
          )}
        </Suspense>
      </div>
    );
  });
}

/**
 * @typedef {{title: string, path: string}} DataItem
 * @param {DataItem[]} data
 * @param {Record<string, string>} links
 */
export function makeNavGridItems(data, links) {
  return data.map(({ title, path }) => ({ label: title, href: links[path] }));
}
