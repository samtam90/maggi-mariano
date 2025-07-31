import React, {
  ReactNode,
  ReactElement,
  ComponentType,
  memo,
  createContext,
  useContext,
} from "react";
import { renderHeader, twClsx } from "../../misc/functions";
import Link from "next/link";

const C = createContext({});

function getMaxWidthClassName(maxWidth) {
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

function processLabel(label, maxLen) {
  if (label?.length > maxLen) {
    return label.substring(0, maxLen) + "...";
  }
  return label;
}

export function InnerNavBarItem({
  href,
  icon,
  title,
  label,
  classNames,
  onClick,
  linkTarget,
  titleHeadingElement,
  prefetch,
}) {
  let titleNode;
  const titleClassName = twClsx("font-titleBold", classNames?.title);
  if (titleHeadingElement) {
    titleNode = renderHeader(titleHeadingElement, title, {
      className: titleClassName,
    });
  } else {
    titleNode = <p className={titleClassName}>{title}</p>;
  }
  const innerContent = (
    <div
      className={twClsx("flex group items-center", classNames?.root)}
      role={onClick ? "button" : "presentation"}
      onClick={onClick}
    >
      <div
        className={twClsx(
          "transition-colors group-hover:text-white text-yellow-primary text-lg",
          classNames?.icon
        )}
      >
        {icon}
      </div>
      <div className="ml-2 text-xs lg:text-sm text-white">
        {titleNode}
        <p
          className={twClsx(
            "font-title group-hover:underline",
            classNames?.label
          )}
        >
          {label}
        </p>
      </div>
    </div>
  );
  if (href) {
    return (
      <Link href={href} target={linkTarget} prefetch={prefetch}>
        {innerContent}
      </Link>
    );
  }
  return innerContent;
}

/**
 * @typedef {{
 *    root?: string,
 *    list?: string,
 *    item?: {
 *      title?: string,
 *      label?: string,
 *      icon?: string,
 *    }
 * }} NavBarClassNames
 *
 * @typedef {{
 *    title: string,
 *    icon?: ReactNode,
 *    link: {
 *      label: string,
 *      href: string
 *    }
 * }} NavBarItemProps
 *
 * @typedef {{
 *    children: ReactElement<NavBarItemProps, ComponentType<NavBarItemProps>>,
 *    variant?: "vertical" | "horizontal",
 *    disableNavElement?: boolean,
 *    classNames?: NavBarClassNames,
 *    maxWidth?: "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl",
 *    labelMaxLength?: number
 * }} NavBarProps
 */

const NavBarItem = memo(
  /**
   * @returns
   * @param {NavBarItemProps} param0
   */
  ({ title, icon, link, prefetch }) => {
    const { classNames, variant, labelMaxLength, titleHeadingElement } =
      useContext(C);
    const { href, label, target } = link;

    const itemClassNames = classNames?.item;
    const isHorizontalVariant = variant === "horizontal";

    return (
      <li
        className={twClsx(isHorizontalVariant ? "flex-grow shrink-0" : "mb-4")}
      >
        <InnerNavBarItem
          classNames={itemClassNames}
          title={title}
          label={processLabel(label, labelMaxLength)}
          href={href}
          icon={icon}
          linkTarget={target}
          prefetch={prefetch}
          titleHeadingElement={titleHeadingElement}
        />
      </li>
    );
  }
);

const NavBar = memo(
  /**
   * @returns
   * @param {NavBarProps} param0
   */
  ({
    children,
    variant,
    disableNavElement,
    classNames,
    maxWidth = "xl",
    labelMaxLength,
    titleHeadingElement,
  }) => {
    const isHorizontalVariant = variant === "horizontal";
    const maxWidthClassName = getMaxWidthClassName(maxWidth);
    const wrapperClassName = twClsx("bg-green-dark", classNames?.root);
    const out = (
      <ul
        className={twClsx(
          classNames?.list,
          isHorizontalVariant && "flex",
          maxWidthClassName,
          Boolean(maxWidthClassName) && "mx-auto"
        )}
      >
        {children}
      </ul>
    );

    return (
      <C.Provider
        value={{ classNames, variant, labelMaxLength, titleHeadingElement }}
      >
        {disableNavElement ? (
          <div className={wrapperClassName}>{out}</div>
        ) : (
          <nav className={wrapperClassName}>{out}</nav>
        )}
      </C.Provider>
    );
  }
);

NavBar.Item = NavBarItem;

export default NavBar;
