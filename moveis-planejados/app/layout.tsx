import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


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
  /* 🟢 TÍTULO PRINCIPAL (IMPORTANTE PARA GOOGLE) */
  title: {
    default: "Móveis Planejados Mello | Sob Medida com Qualidade e Garantia",
    template: "%s | Móveis Planejados Mello",
    // 👉 Permite páginas internas tipo: "Projetos | Móveis Planejados Mello"
  },

  /* 🟢 DESCRIÇÃO (APARECE NO GOOGLE) */
  description:
    "Móveis planejados sob medida com mais de 40 anos de experiência. Projetos personalizados para cozinhas, quartos, salas e escritórios. Qualidade, garantia e acabamento impecável.",

  /* 🟢 PALAVRAS-CHAVE (ajuda SEO, mas secundário hoje) */
  keywords: [
    "móveis planejados",
    "móveis sob medida",
    "móveis personalizados",
    "cozinha planejada",
    "quarto planejado",
    "móveis Rio Grande do Sul",
    "Móveis Mello",
  ],

  /* 🟢 AUTOR */
  authors: [{ name: "Móveis Planejados Mello" }],

  /* 🟢 BASE URL (IMPORTANTE PARA OG E LINKS) */
  metadataBase: new URL("https://moveismello.com.br"),

  /* 🔥 OPEN GRAPH (FACEBOOK, WHATSAPP) */
  openGraph: {
    title: "Móveis Planejados Mello",
    description:
      "Projetos sob medida com qualidade, durabilidade e mais de 40 anos de experiência.",
    url: "https://moveismello.com.br",
    siteName: "Móveis Planejados Mello",
    images: [
      {
        url: "/imgs/salabase.png",
        // ⚠️ CRIE ESSA IMAGEM (1200x630 ideal)
        width: 1200,
        height: 630,
        alt: "Móveis Planejados Mello",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  /* 🔥 TWITTER (compartilhamento) */
  twitter: {
    card: "summary_large_image",
    title: "Móveis Planejados Mello",
    description:
      "Móveis sob medida com qualidade e mais de 40 anos de experiência.",
    images: ["/imgs/salabase.png"], // ⚠️ mesma imagem do OG
  },

  /* 🟢 ROBOTS (indexação Google) */
  robots: {
    index: true,
    follow: true,
  },

  /* 🟢 FAVICON */
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
      <body className="min-h-full flex flex-col bg-white">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DSCBP92BBR"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());
            gtag('config', 'G-DSCBP92BBR');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}