"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function GoogleAdsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (!target) return;

      // Procura o <a> mais próximo
      const link = target.closest("a");

      if (!link) return;

      const href = link.getAttribute("href") || "";

      // Detecta qualquer link para WhatsApp
      const isWhatsApp =
        href.includes("wa.me") ||
        href.includes("api.whatsapp.com") ||
        href.includes("whatsapp://");

      if (!isWhatsApp) return;

      window.gtag?.("event", "conversion", {
        send_to: "AW-18052353513/VJwDCOPa_MUcEOmbhKBD",
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
