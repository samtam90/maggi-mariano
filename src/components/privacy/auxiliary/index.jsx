import { twClsx } from "../../../misc/functions";
import React from "react";

export function SectionTitle({ children, className }) {
  return (
    <h2 className={twClsx("font-title text-md lg:text-lg mb-1", className)}>
      {children}
    </h2>
  );
}

export function Section({ title, children, className }) {
  return (
    <section className="pt-6">
      <SectionTitle className={className}>{title}</SectionTitle>
      {children}
    </section>
  );
}

export function Mail({ children }) {
  return (
    <a href={`mailto:${children}`} className="lg:hover:underline text-blue-600">
      {children}
    </a>
  );
}

export function GDPRArticle({ children }) {
  return <span className="text-sm not-italic">{children}</span>;
}
