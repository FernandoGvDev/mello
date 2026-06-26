import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Footer from "@/components/Footer";
import GoogleAdsEvents from "./GoogleAdsEvents";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* 🔥 SEO GLOBAL */
export const metadata: Metadata = {
  title: {
    default: "Móveis Planejados Mello | Sob Medida com Qualidade e Garantia",
    template: "%s | Móveis Planejados Mello",
  },

  description:
    "Móveis planejados sob medida com mais de 40 anos de experiência. Projetos personalizados para cozinhas, quartos, salas e escritórios. Qualidade, garantia e acabamento impecável.",

  keywords: [
    "móveis planejados",
    "móveis sob medida",
    "móveis personalizados",
    "cozinha planejada",
    "quarto planejado",
    "móveis Rio Grande do Sul",
    "Móveis Mello",
  ],

  authors: [{ name: "Móveis Planejados Mello" }],

  metadataBase: new URL("https://moveismello.com.br"),

  openGraph: {
    title: "Móveis Planejados Mello",
    description:
      "Projetos sob medida com qualidade, durabilidade e mais de 40 anos de experiência.",
    url: "https://moveismello.com.br",
    siteName: "Móveis Planejados Mello",
    images: [
      {
        url: "/imgs/salabase.png",
        width: 1200,
        height: 630,
        alt: "Móveis Planejados Mello",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Móveis Planejados Mello",
    description:
      "Móveis sob medida com qualidade e mais de 40 anos de experiência.",
    images: ["/imgs/salabase.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* ✅ Google Ads base script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17637289533"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17637289533');
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col bg-white">
        <GoogleAdsEvents />
        {children}
        <Footer />
      </body>

      {/* ✅ GA4 (CORRETO USAR COMPONENTE AQUI) */}
      <GoogleAnalytics gaId="G-DSCBP92BBR" />
    </html>
  );
}
