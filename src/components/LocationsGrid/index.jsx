import React, { memo, ReactNode } from "react";
import { renderHeader, HeaderComponent, twClsx } from "../../misc/functions";
import Link from "next/link";

/**
 * @typedef {{label: string, href: string}} LocationsGridItem
 * @typedef {{
 *    title?: string,
 *    item?: string,
 *    root?: string,
 *    collection?: string,
 *    contentContainer?: string,
 * }} ClassNames
 *
 * @param {{
 *    items: LocationsGridItem[],
 *    classNames?: ClassNames,
 *    title?: ReactNode | string,
 *    titleHeadingElement?: HeaderComponent
 * }} param0
 */
function LocationsGrid({ items, classNames, title, titleHeadingElement }) {
  return (
    <section
      className={twClsx(
        "bg-green-dark font-titleBold text-white uppercase",
        classNames?.root
      )}
    >
      <div
        className={twClsx("max-w-6xl mx-auto", classNames?.contentContainer)}
      >
        <header className="mb-8">
          {renderHeader(titleHeadingElement, title, {
            className: twClsx(
              "text-lg lg:text-xl text-center underline leading-loose",
              classNames?.title
            ),
          })}
        </header>
        <nav>
          <ul
            className={twClsx(
              "grid grid-cols-3 lg:grid-cols-8 gap-4",
              classNames?.collection
            )}
          >
            {items.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  className={twClsx(
                    "text-xs lg:text-sm text-center block lg:hover:underline",
                    classNames?.item
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default memo(LocationsGrid);
