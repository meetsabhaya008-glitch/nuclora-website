import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#131929",
};

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
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Nuclora",
  },
  icons: {
    apple: [
      { url: "/newonlylogo.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/newonlylogo.png" type="image/png" sizes="64x64" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" sizes="180x180" href="/newonlylogo.png" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
