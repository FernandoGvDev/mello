"use client";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1f2937] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Empresa */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#f5e6d3]">
            Móveis Planejados Mello
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Há mais de 45 anos transformando ambientes com móveis sob medida,
            qualidade e confiança em cada detalhe.
          </p>

          <div className="flex gap-3 mt-4">
            <a
              href="https://www.instagram.com/moveismello1/"
              target="_blank"
              className="p-2 bg-[#8b0000] rounded-full hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/moveis.mello"
              target="_blank"
              className="p-2 bg-[#8b0000] rounded-full hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/555591200892"
              target="_blank"
              className="p-2 bg-[#8b0000] rounded-full hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#f5e6d3]">Contato</h3>

          <div className="space-y-3 text-sm text-gray-300">
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> (55) 99120-0892
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Rio Grande do Sul
            </p>
          </div>

          <a
            href="https://wa.me/555591200892"
            target="_blank"
            className="inline-block mt-6 bg-[#8b0000] px-5 py-2 rounded-full text-sm hover:scale-105 transition"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Mapa */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#f5e6d3]">
            Localização
          </h3>

          <div className="w-full h-[200px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Rio+Grande+do+Sul&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Móveis Planejados Mello. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
