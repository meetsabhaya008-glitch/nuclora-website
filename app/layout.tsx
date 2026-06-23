import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Nuclora — Advanced Cellular Nutrition Backed by Science",
    template: "%s | Nuclora",
  },
  description:
    "Nuclora develops premium, science-driven nutritional supplements engineered for cellular health, longevity, performance, and total-body wellness. Pharmaceutical-grade quality. Uncompromising standards.",
  keywords: [
    "nutritional supplements",
    "cellular health",
    "longevity supplements",
    "science-driven nutrition",
    "premium supplements",
    "NMN",
    "NAD+",
    "biohacking",
    "performance nutrition",
  ],
  authors: [{ name: "Nuclora" }],
  creator: "Nuclora",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nuclora.com",
    siteName: "Nuclora",
    title: "Nuclora — Advanced Cellular Nutrition Backed by Science",
    description:
      "Premium science-driven nutritional supplements for cellular health, longevity, and performance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuclora — Advanced Cellular Nutrition",
    description:
      "Premium science-driven nutritional supplements for cellular health, longevity, and performance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
