import Link from "next/link";
import Image from "next/image";
import { basePath } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-saola-dark-olive text-white/80">
      <div className="editorial-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <Image
              src={basePath("/images/logos/saola-wordmark-white.png")}
              alt="Saola"
              width={140}
              height={36}
              className="h-8 w-auto mb-6"
            />
            <p className="text-sm leading-relaxed max-w-sm text-white/60">
              Lighting and home design from Vietnam. Where heritage craft meets
              contemporary imagination. Each piece tells a story of culture,
              creativity, and care.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-saola-golden mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              <li><Link href="/collections/" className="text-sm hover:text-saola-golden transition-colors">Collections</Link></li>
              <li><Link href="/about/" className="text-sm hover:text-saola-golden transition-colors">About Saola</Link></li>
              <li><Link href="/cafe-concept/" className="text-sm hover:text-saola-golden transition-colors">Caf\u00e9 Concept</Link></li>
              <li><Link href="/contact/" className="text-sm hover:text-saola-golden transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-saola-golden mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              <li><span className="text-sm">Ho Chi Minh City, Vietnam</span></li>
              <li><span className="text-sm">hello@saola.vn</span></li>
              <li><span className="text-sm">Instagram</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            \u00a9 2024 Saola. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Image
              src={basePath("/images/logos/saola-symbol-white.png")}
              alt="Saola symbol"
              width={20}
              height={20}
              className="h-4 w-auto opacity-40"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}