import React, {
  ReactNode,
  ReactElement,
  ComponentType,
  memo,
  createContext,
  useContext,
} from "react";
import { twClsx } from "../../misc/functions";
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

export function InnerNavBarItem({
  href,
  icon,
  title,
  label,
  classNames,
  onClick,
}) {
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
        <p className={twClsx("font-titleBold", classNames?.title)}>{title}</p>
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
    return <Link href={href}>{innerContent}</Link>;
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
 *    maxWidth?: "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"
 * }} NavBarProps
 */

const NavBarItem = memo(
  /**
   * @returns
   * @param {NavBarItemProps} param0
   */
  ({ title, icon, link }) => {
    const { classNames, variant } = useContext(C);
    const { href, label } = link;

    const itemClassNames = classNames?.item;
    const isHorizontalVariant = variant === "horizontal";

    return (
      <li
        className={twClsx(isHorizontalVariant ? "flex-grow shrink-0" : "mb-4")}
      >
        <InnerNavBarItem
          classNames={itemClassNames}
          title={title}
          label={label}
          href={href}
          icon={icon}
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
  ({ children, variant, disableNavElement, classNames, maxWidth = "xl" }) => {
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
      <C.Provider value={{ classNames, variant }}>
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
