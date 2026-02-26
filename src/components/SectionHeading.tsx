"use client";

import { FadeIn } from "./FadeIn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ label, title, subtitle, align = "center" }: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <FadeIn className={alignClass}>
      {label && <p className="section-label mb-4">{label}</p>}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-saola-dark-olive mb-4">{title}</h2>
      {subtitle && <p className="font-sans text-base md:text-lg text-saola-dark-olive/60 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </FadeIn>
  );
}