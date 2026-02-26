"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { ProductCard } from "@/components/ProductCard";
import { collections } from "@/data/collections";
import { Collection } from "@/data/types";
import { basePath } from "@/lib/utils";

export function CollectionDetail({ collection }: { collection: Collection }) {
  const currentSlug = collection.slug;
  const otherCollections = collections.filter(function(c) {
    return c.slug !== currentSlug;
  }).slice(0, 3);

  return (
    <>
      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image src={basePath(collection.heroImage)} alt={collection.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="editorial-container relative z-10 pb-16 pt-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}>
            <Link href="/collections/" className="font-sans text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors mb-4 inline-block">
              &larr; All Collections
            </Link>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-4">{collection.name}</h1>
            <p className="font-serif text-xl text-white/80 italic mb-2">{collection.tagline}</p>
            <p className="font-sans text-base text-white/60 max-w-2xl">{collection.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="editorial-container">
          <div className="flex items-center justify-between mb-12">
            <p className="font-sans text-sm text-saola-dark-olive/60">{collection.products.length} products</p>
            <div className="w-16 h-1" style={{ backgroundColor: collection.colorPair.primary }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {collection.products.map(function(product, i) {
              return <ProductCard key={product.id} product={product} index={i} />;
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-saola-cream">
        <div className="editorial-container">
          <FadeIn className="text-center mb-16">
            <p className="section-label mb-4">Continue Exploring</p>
            <h2 className="font-serif text-3xl md:text-4xl text-saola-dark-olive">Other Collections</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherCollections.map(function(c, i) {
              return (
                <FadeIn key={c.id} delay={i * 0.1}>
                  <Link href={"/collections/" + c.slug + "/"} className="group block relative aspect-[4/3] overflow-hidden">
                    <Image src={basePath(c.heroImage)} alt={c.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-xl text-white">{c.name}</h3>
                      <p className="font-sans text-xs text-white/60 mt-1">{c.products.length} pieces</p>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}