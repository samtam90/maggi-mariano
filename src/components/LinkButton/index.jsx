import { twClsx } from "../../misc/functions";
import Link from "next/link";
import React from "react";

export default function LinkButton({ href, label, className }) {
  return (
    <Link
      href={href}
      target="_blank"
      className={twClsx(
        "block text-center lg:hover:opacity-75 lg:transition-opacity",
        className
      )}
    >
      <div className="inline-block bg-green-primary rounded-lg shadow-sm text-white font-titleBold text-sm px-4 py-3">
        {label}
      </div>
    </Link>
  );
}
