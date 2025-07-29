import { twClsx } from "../../misc/functions";
import Link from "next/link";
import React, { memo } from "react";

function LinkButton({ href, label, className, classNames, target }) {
  return (
    <Link
      href={href}
      target={target}
      className={twClsx(
        "block text-center active:opacity-75 lg:hover:opacity-75 transition-opacity",
        className || classNames?.root
      )}
    >
      <div
        className={twClsx(
          "inline-block bg-green-primary rounded-lg shadow-sm text-white font-titleBold text-sm px-4 py-3",
          classNames?.button
        )}
      >
        {label}
      </div>
    </Link>
  );
}

export default memo(LinkButton);
