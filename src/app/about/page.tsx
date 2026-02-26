"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";

const values = [
  {
    title: "Heritage Craft",
    description: "Every Saola piece is born from a deep respect for artisan traditions that span centuries. We work with local craftspeople who bring generations of skill to each creation.",
  },
  {
    title: "Considered Design",
    description: "We believe beautiful objects should enhance daily life. Our design process balances form and function, creating pieces that are as practical as they are striking.",
  },
  {
    title: "Sustainable Practice",
    description: "From material sourcing to production methods, sustainability guides our decisions. We choose materials that are kind to the environment without compromising quality.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pb-32">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="section-label mb-4">Our Story</p>
              <h1 className="font-serif text-5xl md:text-6xl text-saola-dark-olive mb-8 leading-tight">
                The rare beauty of thoughtful design
              </h1>
              <p className="font-sans text-lg text-saola-dark-olive/60 leading-relaxed">
                Named after the rare Saola antelope found only in the forests of central
                Vietnam, our brand embodies the spirit of something precious, unique, and
                worth protecting.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/brand/page-21.png"
                  alt="Saola Brand Story"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Brand Quote */}
      <section className="py-24 md:py-32 bg-saola-cream">
        <div className="editorial-container text-center max-w-4xl mx-auto">
          <FadeIn>
            <Image
              src="/images/logos/saola-symbol-orange.png"
              alt="Saola"
              width={32}
              height={32}
              className="h-6 w-auto mx-auto mb-8"
            />
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-saola-dark-olive leading-relaxed italic">
              &ldquo;We create objects that carry the warmth of the hands that made them
              and the stories of the culture that inspired them.&rdquo;
            </blockquote>
            <p className="font-sans text-sm tracking-wider uppercase text-saola-caramel mt-8">
              Saola Design Philosophy
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Heritage */}
      <section className="py-20 md:py-32">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src="/images/brand/page-22.png" alt="Heritage craft" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden mt-8">
                  <Image src="/images/brand/page-23.png" alt="Design process" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="section-label mb-4">Heritage</p>
              <h2 className="font-serif text-3xl md:text-4xl text-saola-dark-olive mb-6 leading-tight">
                Rooted in Vietnam, reaching the world
              </h2>
              <div className="space-y-4 font-sans text-base text-saola-dark-olive/60 leading-relaxed">
                <p>
                  Vietnam has a rich history of craftsmanship spanning thousands of years.
                  From lacquerwork to ceramics, textile weaving to woodcarving, the artisan
                  traditions of this region are as diverse as they are sophisticated.
                </p>
                <p>
                  Saola was founded to bridge these ancient traditions with contemporary design,
                  creating products that feel both timeless and thoroughly modern. We partner with
                  skilled artisans across the country, providing sustainable livelihoods while preserving
                  craft techniques that might otherwise be lost.
                </p>
                <p>
                  Each collection draws on different aspects of this heritage, whether the
                  geometric patterns of traditional architecture, the organic forms found in nature,
                  or the playful spirit of street culture.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-saola-navy text-white">
        <div className="editorial-container">
          <FadeIn className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-saola-golden mb-4">Our Values</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white">What guides us</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map(function(value, i) {
              return (
                <FadeIn key={i} delay={i * 0.15}>
                  <div className="text-center md:text-left">
                    <div className="w-8 h-px bg-saola-golden mb-6 mx-auto md:mx-0" />
                    <h3 className="font-serif text-2xl text-white mb-4">{value.title}</h3>
                    <p className="font-sans text-sm text-white/60 leading-relaxed">{value.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team / CTA */}
      <section className="py-20 md:py-32">
        <div className="editorial-container text-center">
          <FadeIn>
            <p className="section-label mb-4">The Team</p>
            <h2 className="font-serif text-4xl md:text-5xl text-saola-dark-olive mb-6">
              Small team, big ambition
            </h2>
            <p className="font-sans text-lg text-saola-dark-olive/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              We are a small, passionate team of designers, makers, and storytellers based
              in Ho Chi Minh City. We believe that great design should be accessible, sustainable,
              and joyful.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/collections/" className="btn-primary">See Our Work</Link>
              <Link href="/contact/" className="btn-secondary">Get in Touch</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}