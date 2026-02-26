import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Saola | Vietnamese Lighting & Home Design",
  description: "Saola is a Vietnamese lifestyle brand creating distinctive lighting, furniture, and home accessories that blend heritage craft with contemporary design.",
  openGraph: {
    title: "Saola | Vietnamese Lighting & Home Design",
    description: "Distinctive lighting and home accessories from Vietnam",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
