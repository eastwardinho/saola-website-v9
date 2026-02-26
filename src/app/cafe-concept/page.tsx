"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";

const tiers = [
  {
    name: "Explorer",
    price: "Free",
    features: ["10% off first purchase", "Early collection access", "Birthday coffee"],
  },
  {
    name: "Creator",
    price: "$15/month",
    features: ["15% off all products", "Free monthly coffee", "Design workshops", "Member events"],
  },
  {
    name: "Connoisseur",
    price: "$35/month",
    features: ["20% off all products", "Unlimited coffee", "Private consultations", "Exclusive pieces", "VIP events"],
  },
];

export default function CafeConceptPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pb-32">
        <div className="editorial-container">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="section-label mb-4">A New Kind of Space</p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-saola-dark-olive mb-8 leading-tight">
                The Saola<br />Caf\u00e9
              </h1>
              <p className="font-sans text-lg md:text-xl text-saola-dark-olive/60 leading-relaxed max-w-xl">
                Where specialty coffee meets curated design. A space to experience
                Saola products in context, connect with our community, and find
                inspiration in every corner.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Concept Image */}
      <section className="pb-20">
        <div className="editorial-container">
          <FadeIn>
            <div className="relative aspect-[21/9] overflow-hidden bg-saola-cream">
              <Image
                src="/images/brand/page-24.png"
                alt="Saola Cafe Concept"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Concept Details */}
      <section className="py-20 md:py-32 bg-saola-cream">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeIn>
              <div className="w-8 h-px bg-saola-coral mb-6" />
              <h3 className="font-serif text-2xl text-saola-dark-olive mb-4">Experience</h3>
              <p className="font-sans text-sm text-saola-dark-olive/60 leading-relaxed">
                See and touch every product in our collection. Each lamp is displayed in a
                curated room setting, so you can imagine how it fits into your own space.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="w-8 h-px bg-saola-coral mb-6" />
              <h3 className="font-serif text-2xl text-saola-dark-olive mb-4">Coffee Culture</h3>
              <p className="font-sans text-sm text-saola-dark-olive/60 leading-relaxed">
                Specialty Vietnamese coffee prepared by skilled baristas. From traditional
                c\u00e0 ph\u00ea s\u1eefa \u0111\u00e1 to contemporary pour-overs, every cup is crafted with the same care we put into our products.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="w-8 h-px bg-saola-coral mb-6" />
              <h3 className="font-serif text-2xl text-saola-dark-olive mb-4">Community</h3>
              <p className="font-sans text-sm text-saola-dark-olive/60 leading-relaxed">
                Regular events, design workshops, and exhibitions make the Saola space
                a living gallery. Join our membership program for exclusive access and benefits.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="py-20 md:py-32">
        <div className="editorial-container">
          <FadeIn className="text-center mb-16">
            <p className="section-label mb-4">Membership</p>
            <h2 className="font-serif text-4xl md:text-5xl text-saola-dark-olive mb-4">
              Join Our Community
            </h2>
            <p className="font-sans text-lg text-saola-dark-olive/60 max-w-xl mx-auto">
              Three tiers designed to match how you engage with design and coffee.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map(function(tier, i) {
              const isMiddle = i === 1;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className={"p-8 md:p-10 h-full " + (isMiddle ? "bg-saola-navy text-white" : "bg-saola-cream")}>
                    <p className={"font-sans text-xs tracking-[0.2em] uppercase mb-4 " + (isMiddle ? "text-saola-golden" : "text-saola-caramel")}>{tier.name}</p>
                    <p className={"font-serif text-3xl mb-6 " + (isMiddle ? "text-white" : "text-saola-dark-olive")}>{tier.price}</p>
                    <ul className="space-y-3">
                      {tier.features.map(function(feature, j) {
                        return (
                          <li key={j} className={"flex items-center gap-3 font-sans text-sm " + (isMiddle ? "text-white/70" : "text-saola-dark-olive/60")}>
                            <span className={"text-xs " + (isMiddle ? "text-saola-golden" : "text-saola-coral")}>\u2713</span>
                            {feature}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-saola-cream">
        <div className="editorial-container text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-saola-dark-olive mb-6">
              Coming 2025
            </h2>
            <p className="font-sans text-lg text-saola-dark-olive/60 max-w-xl mx-auto mb-10">
              Be the first to know when we open our doors. Sign up for updates and
              early membership access.
            </p>
            <Link href="/contact/" className="btn-primary">
              Stay Updated
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}