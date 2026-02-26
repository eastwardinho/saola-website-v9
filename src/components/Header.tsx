"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { basePath } from "@/lib/utils";

const navLinks = [
  { href: "/collections/", label: "Collections" },
  { href: "/about/", label: "About" },
  { href: "/cafe-concept/", label: "Caf\u00e9 Concept" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-saola-warm/95 backdrop-blur-sm">
      <nav className="editorial-container flex items-center justify-between h-20">
        <Link href="/" className="relative z-50">
          <Image
            src={basePath("/images/logos/saola-wordmark-black.png")}
            alt="Saola"
            width={120}
            height={32}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(function(link) {
            return (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm tracking-wider text-saola-dark-olive/80 hover:text-saola-coral transition-colors duration-300"
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden relative z-50 p-2"
          onClick={function() { setMenuOpen(!menuOpen); }}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-px bg-saola-dark-olive w-full"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px bg-saola-dark-olive w-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-px bg-saola-dark-olive w-full"
            />
          </div>
        </button>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-saola-warm z-40 flex items-center justify-center"
            >
              <nav className="flex flex-col items-center gap-8">
                {navLinks.map(function(link, i) {
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={function() { setMenuOpen(false); }}
                        className="font-serif text-3xl text-saola-dark-olive hover:text-saola-coral transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
