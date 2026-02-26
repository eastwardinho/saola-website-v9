"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="pt-32 pb-20 md:pb-32">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Info */}
            <FadeIn>
              <p className="section-label mb-4">Get in Touch</p>
              <h1 className="font-serif text-5xl md:text-6xl text-saola-dark-olive mb-8 leading-tight">
                Let\u2019s start a conversation
              </h1>
              <p className="font-sans text-lg text-saola-dark-olive/60 leading-relaxed mb-12">
                Whether you have a question about our products, want to discuss a
                project, or simply want to say hello, we would love to hear from you.
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-saola-caramel mb-2">Email</h3>
                  <p className="font-sans text-saola-dark-olive">hello@saola.vn</p>
                </div>
                <div>
                  <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-saola-caramel mb-2">Location</h3>
                  <p className="font-sans text-saola-dark-olive">Ho Chi Minh City, Vietnam</p>
                </div>
                <div>
                  <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-saola-caramel mb-2">Social</h3>
                  <p className="font-sans text-saola-dark-olive">@saola.design</p>
                </div>
              </div>
            </FadeIn>

            {/* Right: Form */}
            <FadeIn delay={0.2}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center h-full"
                >
                  <div className="text-center">
                    <Image
                      src="/images/logos/saola-symbol-orange.png"
                      alt="Saola"
                      width={40}
                      height={40}
                      className="h-8 w-auto mx-auto mb-6"
                    />
                    <h2 className="font-serif text-3xl text-saola-dark-olive mb-4">Thank you</h2>
                    <p className="font-sans text-saola-dark-olive/60">
                      We will be in touch soon.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-sans text-xs tracking-[0.15em] uppercase text-saola-dark-olive/60 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-saola-dark-olive/20 font-sans text-saola-dark-olive focus:outline-none focus:border-saola-coral transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs tracking-[0.15em] uppercase text-saola-dark-olive/60 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-saola-dark-olive/20 font-sans text-saola-dark-olive focus:outline-none focus:border-saola-coral transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs tracking-[0.15em] uppercase text-saola-dark-olive/60 mb-2">Subject</label>
                    <select
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-saola-dark-olive/20 font-sans text-saola-dark-olive focus:outline-none focus:border-saola-coral transition-colors"
                    >
                      <option>General Inquiry</option>
                      <option>Product Question</option>
                      <option>Wholesale / Trade</option>
                      <option>Press / Media</option>
                      <option>Cafe Membership</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans text-xs tracking-[0.15em] uppercase text-saola-dark-olive/60 mb-2">Message</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-saola-dark-olive/20 font-sans text-saola-dark-olive focus:outline-none focus:border-saola-coral transition-colors resize-none"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>
                  <button type="submit" className="btn-primary mt-4">
                    Send Message
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}