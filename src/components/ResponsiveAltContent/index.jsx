import { twClsx } from "../../misc/functions";
import React, { ReactNode, memo } from "react";

/**
 * @returns
 * @param {{
 *      mobile: ReactNode,
 *      desktop: ReactNode,
 *      classNames?: {mobile?: string, desktop?: string}
 * }} param0
 */
function ResponsiveAltContent({ mobile, desktop, classNames }) {
  return (
    <>
      <div
        role="presentation"
        className={twClsx("hidden sm:block", classNames?.desktop)}
      >
        {desktop}
      </div>
      <div
        role="presentation"
        className={twClsx("sm:hidden", classNames?.mobile)}
      >
        {mobile}
      </div>
    </>
  );
}

export default memo(ResponsiveAltContent);
