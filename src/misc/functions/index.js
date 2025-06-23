import { twJoin, twMerge, ClassNameValue } from "tailwind-merge";
import React, { ReactNode, ComponentType, memo, Suspense } from "react";
import { renderSplashScreen } from "../../components/Splash";

/**
 * @typedef {"h1" | "h2" | "h3" | "h4" | "h5" | "h6"} HeaderComponent
 * @typedef {"md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"} MaxWidthBreakpoint
 */

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
 * @param {{Mobile: ComponentType<T>, Desktop: ComponentType<T>}} Components
 * @returns
 */
export function withConditionalRendering(Components) {
  return memo(async (props) => {
    const { searchParams } = props;
    return (
      <div>
        <Suspense fallback={renderSplashScreen()}>
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
