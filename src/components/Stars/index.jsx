import { twClsx } from "../../misc/functions";
import React, { memo, ReactElement, ComponentType } from "react";

const Star = memo(
  /**
   * @typedef {{filled?: boolean}} StarProps
   * @param {StarProps} param0
   * @returns
   */
  ({ filled }) => {
    return (
      <li
        className={twClsx(
          "text-gray-200",
          filled &&
            "before:content-['★'] before:absolute before:text-yellow-alt"
        )}
      >
        ★
      </li>
    );
  }
);

const Stars = memo(
  /**
   * @param {{
   *    children: ReactElement<StarProps, ComponentType<StarProps>>[],
   *    className?: string,
   *    label?: string
   * }} param0
   * @returns
   */
  ({ children, className, label }) => (
    <ul
      className={twClsx("flex list-type-none", className)}
      title={label}
      aria-label={label}
    >
      {children}
    </ul>
  )
);

Stars.Star = Star;
export default Stars;
