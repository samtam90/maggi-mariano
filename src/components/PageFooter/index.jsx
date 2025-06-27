import React, {
  memo,
  ReactElement,
  ComponentType,
  ReactNode,
  createContext,
  useContext,
} from "react";
import NavBar, { NavBarItemProps, NavBarClassNames } from "../NavBar";
import {
  MaxWidthBreakpoint,
  getMaxWidthClassName,
  renderHeader,
  twClsx,
} from "../../misc/functions";

const C = createContext({});

/**
 * @typedef {{
 *   navItems: NavBarItemProps[],
 *   additionalContent?: ReactNode,
 *   title: string
 * }} PageFooterSectionProps
 *
 * @typedef {{
 *   children: ReactElement<PageFooterSectionProps, ComponentType<PageFooterSectionProps>>[],
 *   logo: {
 *      alt: string,
 *      src: string,
 *      dimensions: {width: number, height: number}
 *   },
 *   contentMaxWidth?: MaxWidthBreakpoint,
 *   variant?: "horizontal" | "vertical",
 *   classNames?: {
 *      root?: string,
 *      logo?: string,
 *      section?: {
 *        title?: string,
 *        navBar?: NavBarClassNames,
 *        additionalContent?: string
 *      }
 *   }
 * }} PageFooterProps
 */

const PageFooterSection = memo(
  /**
   * @returns
   * @param {PageFooterSectionProps}
   */
  ({ navItems, additionalContent, title }) => {
    const { classNames, variant, titleHeadingElement } = useContext(C);
    return (
      <section
        className={twClsx(
          variant === "horizontal" ? "shrink-0 basis-1/3" : "mb-4",
          classNames?.section?.root
        )}
      >
        {renderHeader(titleHeadingElement || "h5", title, {
          className: twClsx(
            "mb-3 font-titleBold text-xs lg:text-sm self-stretch text-center lg:text-left text-white uppercase",
            classNames?.section?.title
          ),
        })}
        <div className="h-[1px] bg-white mb-4 w-full lg:w-1/2"></div>
        <NavBar
          variant="vertical"
          disableNavElement
          classNames={classNames?.section?.navBar}
        >
          {navItems.map(({ title, icon, link }, index) => (
            <NavBar.Item
              title={title}
              icon={icon}
              link={link}
              key={`${title}-${index}`}
            />
          ))}
        </NavBar>
        {additionalContent && (
          <div
            className={twClsx("mt-4", classNames?.section?.additionalContent)}
          >
            {additionalContent}
          </div>
        )}
      </section>
    );
  }
);

const PageFooter = memo(
  /**
   * @returns
   * @param {PageFooterProps} param0
   */
  ({
    logo,
    children,
    classNames,
    contentMaxWidth,
    variant,
    titleHeadingElement,
  }) => (
    <C.Provider value={{ classNames, titleHeadingElement, variant }}>
      <footer className={twClsx("bg-green-dark", classNames?.root)}>
        <div
          className={twClsx(
            "mx-auto flex flex-col items-center lg:block",
            getMaxWidthClassName(contentMaxWidth)
          )}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            width={logo.dimensions.width}
            height={logo.dimensions.height}
            className={twClsx(
              "inline-block max-w-full object-contain mb-8",
              classNames?.logo
            )}
          />
          <nav className={twClsx(variant === "horizontal" && "flex flex-wrap")}>
            {children}
          </nav>
        </div>
      </footer>
    </C.Provider>
  )
);

PageFooter.Section = PageFooterSection;
export default PageFooter;
