"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { collections } from "@/data/collections";
import { basePath } from "@/lib/utils";

export default function Home() {
  const featuredCollection = collections[3]; // Pretty & Posh
  const featuredProducts = featuredCollection.products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={basePath("/images/products/220217-lotus.3.jpg")}
            alt="Saola Lotus Lamp"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-saola-warm/90 via-saola-warm/60 to-transparent" />
        </div>
        <div className="editorial-container relative z-10 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="max-w-2xl"
          >
            <p className="section-label mb-6">Lighting & Home Design</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-saola-dark-olive mb-6 leading-[0.95]">
              Light that<br />tells a story
            </h1>
            <p className="font-sans text-lg md:text-xl text-saola-dark-olive/70 max-w-lg mb-10 leading-relaxed">
              From the heart of Vietnam, Saola creates lighting and home objects
              that blend heritage craft with contemporary imagination.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/collections/" className="btn-primary">
                Explore Collections
              </Link>
              <Link href="/about/" className="btn-secondary">
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-px h-16 bg-saola-dark-olive/30 mx-auto mb-2" />
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-saola-dark-olive/40">Scroll</p>
        </motion.div>
      </section>

      {/* Brand Statement */}
      <section className="py-32 md:py-40">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <Image
                src={basePath("/images/logos/saola-symbol-orange.png")}
                alt="Saola symbol"
                width={40}
                height={40}
                className="h-8 w-auto mx-auto mb-10"
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-saola-dark-olive leading-relaxed">
                Every Saola piece begins as a conversation between
                <span className="text-saola-coral"> tradition and tomorrow</span>.
                Crafted in Vietnam with materials that honour both
                heritage and the modern home.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 md:py-32 bg-saola-cream">
        <div className="editorial-container">
          <SectionHeading
            label="Featured Collection"
            title="Pretty & Posh"
            subtitle="Delicate beauty with a modern soul. Organic forms and gentle curves for those who appreciate understated luxury."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {featuredProducts.map(function(product, i) {
              return <ProductCard key={product.id} product={product} index={i} />;
            })}
          </div>
          <FadeIn className="text-center mt-14">
            <Link href="/collections/pretty-and-posh/" className="btn-secondary">
              View Full Collection
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 md:py-32">
        <div className="editorial-container">
          <SectionHeading
            label="Our World"
            title="Four Collections"
            subtitle="Each collection speaks to a different sensibility, united by quality and craft."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {collections.map(function(collection, i) {
              return (
                <FadeIn key={collection.id} delay={i * 0.1}>
                  <Link href={"/collections/" + collection.slug + "/"} className="group block relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={collection.heroImage}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/60 mb-2">{collection.products.length} Pieces</p>
                      <h3 className="font-serif text-2xl md:text-3xl text-white">{collection.name}</h3>
                      <p className="font-sans text-sm text-white/70 mt-2">{collection.tagline}</p>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-32 bg-saola-navy text-white">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={basePath("/images/brand/page-20.png")}
                  alt="Saola Brand"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-saola-golden mb-6">About Saola</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
                Born in Vietnam,<br />designed for the world
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Saola draws inspiration from the rich cultural heritage of Vietnam,
                translating centuries of artisan tradition into contemporary lighting
                and home objects. Our name comes from the rare Saola antelope, a symbol
                of rarity and beauty found only in the forests of central Vietnam.
              </p>
              <p className="text-white/70 leading-relaxed mb-10">
                Every piece is designed with intention, crafted with care, and made to
                bring warmth to modern living spaces around the globe.
              </p>
              <Link href="/about/" className="inline-flex items-center gap-3 font-sans text-sm tracking-wider uppercase text-saola-golden hover:text-white transition-colors">
                Read Our Story
                <span className="text-lg">&rarr;</span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Cafe CTA */}
      <section className="py-20 md:py-32">
        <div className="editorial-container text-center">
          <FadeIn>
            <p className="section-label mb-4">Coming Soon</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-saola-dark-olive mb-6">
              The Saola Caf\u00e9
            </h2>
            <p className="font-sans text-lg text-saola-dark-olive/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              A space where coffee culture meets design. Experience Saola products in a
              curated environment, enjoy specialty Vietnamese coffee, and become part of
              our creative community.
            </p>
            <Link href="/cafe-concept/" className="btn-primary">
              Discover the Concept
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}