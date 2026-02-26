"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { collections } from "@/data/collections";
import { basePath } from "@/lib/utils";

export default function CollectionsPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pb-32">
        <div className="editorial-container">
          <FadeIn>
            <p className="section-label mb-4">All Collections</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-saola-dark-olive mb-6">
              Our Collections
            </h1>
            <p className="font-sans text-lg text-saola-dark-olive/60 max-w-2xl leading-relaxed">
              Four distinct collections, each a world unto itself. From playful exuberance to refined
              sophistication, find the lighting that speaks to your sensibility.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="editorial-container space-y-24">
          {collections.map(function(collection, i) {
            const isReversed = i % 2 === 1;
            return (
              <FadeIn key={collection.id}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center" + (isReversed ? " md:direction-rtl" : "")}>
                  <Link href={"/collections/" + collection.slug + "/"} className={"group block relative aspect-[4/5] overflow-hidden" + (isReversed ? " md:order-2" : "")}>
                    <Image
                      src={basePath(collection.heroImage)}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </Link>
                  <div className={isReversed ? "md:order-1" : ""}>
                    <div
                      className="w-12 h-1 mb-6"
                      style={{ backgroundColor: collection.colorPair.primary }}
                    />
                    <p className="section-label mb-3">{collection.products.length} Pieces</p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-saola-dark-olive mb-4">
                      {collection.name}
                    </h2>
                    <p className="font-serif text-lg text-saola-caramel italic mb-4">
                      {collection.tagline}
                    </p>
                    <p className="font-sans text-base text-saola-dark-olive/60 leading-relaxed mb-8">
                      {collection.description}
                    </p>
                    <Link
                      href={"/collections/" + collection.slug + "/"}
                      className="btn-primary"
                      style={{ backgroundColor: collection.colorPair.primary }}
                    >
                      Explore Collection
                    </Link>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </>
  );
}