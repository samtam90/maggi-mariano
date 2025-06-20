import { twClsx } from "../../misc/functions";
import React, { ReactNode, useMemo } from "react";
import Decorations from "../Decorations";

function checkChildType(children) {
  if (typeof children !== "string") {
    throw TypeError("CapitalizedText: Invalid child element.");
  }
}

function wrap(content, { component, className, key }) {
  switch (component) {
    case "span":
      return (
        <span className={className} key={key}>
          {content}
        </span>
      );
    default:
      return (
        <p className={className} key={key}>
          {content}
        </p>
      );
  }
}

/**
 * @typedef {{
 *      component?: "p" | "span",
 *      children: ReactNode
 * }} CommonSpecialTextProps
 *
 * @typedef {CommonSpecialTextProps & {
 *      classNames?: {capitalized?: string, root?: string}
 * }} CapitalizedTextProps
 *
 * @typedef {CommonSpecialTextProps & {
 *      className?: string,
 *      stroke?: string
 * }} CircledTextProps
 *
 * @typedef {CommonSpecialTextProps & {
 *      className?: string,
 *      fill?: string
 * }} UnderlinedTextProps
 */

/**
 * @returns
 * @param {CapitalizedTextProps} param0
 */
function CapitalizedText({ children, classNames, component }) {
  checkChildType(children);
  const rootClassName = twClsx(
    "font-title text-md text-white leading-normal",
    classNames?.root
  );
  const { first, rest } = useMemo(() => ({
    first: children.substring(0, 1),
    rest: children.substring(1),
  }));
  const innerContent = (
    <>
      <span
        className={twClsx(
          "inline-flex font-titleBold float-left border-[2px] border-white items-center justify-center text-3xl lg:text-5xl p-1 px-2 mr-2",
          classNames?.first
        )}
        key="first"
      >
        {first}
      </span>
      {rest}
    </>
  );
  return wrap(innerContent, {
    component,
    className: rootClassName,
    key: "capitalized",
  });
}

/**
 * @returns
 * @param {CircledTextProps} param0
 */
function CircledText({ children, className, component, stroke, active }) {
  checkChildType(children);
  const rootClassName = twClsx("inline-block relative z-0", className);
  const innerContent = (
    <>
      <Decorations.Circle
        active={active}
        stroke={stroke}
        strokeWidth={6}
        className="absolute -left-[2.5%] -top-[7.5%] w-[105%] h-[115%] inline z-10"
      />
      {children}
    </>
  );
  return wrap(innerContent, { component, className: rootClassName });
}

/**
 * @returns
 * @param {UnderlinedTextProps} param0
 */
function UnderlinedText({
  children,
  className,
  component,
  active,
  fill,
  double,
}) {
  checkChildType(children);
  const rootClassName = twClsx("inline-block relative", className);
  const decorationClassName = "absolute -bottom-2 w-full";
  const innerContent = (
    <>
      {children}
      {double ? (
        <Decorations.DoubleUnderline
          active={active}
          fill={fill}
          className={decorationClassName}
        />
      ) : (
        <Decorations.Underline
          active={active}
          fill={fill}
          className={decorationClassName}
        />
      )}
    </>
  );
  return wrap(innerContent, { component, className: rootClassName });
}

const SpecialText = {
  Capitalized: CapitalizedText,
  Circled: CircledText,
  Underlined: UnderlinedText,
};
export default SpecialText;
