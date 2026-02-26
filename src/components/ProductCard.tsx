"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/data/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-saola-cream mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="space-y-1">
        <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-saola-caramel">{product.type}</p>
        <h3 className="font-serif text-lg text-saola-dark-olive">{product.name}</h3>
        <p className="font-sans text-sm text-saola-dark-olive/60">${product.price}</p>
      </div>
    </motion.div>
  );
}