import { twClsx } from "../../misc/functions";
import Link from "next/link";
import React, { memo } from "react";

/**
 * @param {{
 *  href: string,
 *  icon: ReactNode,
 *  label: string,
 *  className?: string
 * }} param0
 */
function IconHref({ href, className, icon, label }) {
  return (
    <Link
      className={twClsx(
        "inline-flex items-center justify-center bg-gray-100 hover:bg-green-primary text-green-dark hover:text-white transition-all hover:animate-grow h-8 w-8 rounded-full text-md",
        className
      )}
      aria-label={label}
      href={href}
    >
      {icon}
    </Link>
  );
}

export default memo(IconHref);
