"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Sofaspopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 12000); // mais tempo antes de interromper o usuário

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-5 right-5 left-5 md:left-auto md:w-[360px] bg-white shadow-2xl rounded-2xl p-6 z-50 border border-[#8b0000]/10"
        >
          {/* CLOSE */}
          <button
            onClick={() => setVisible(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
          >
            ×
          </button>

          {/* BADGE */}
          <p className="text-xs font-semibold text-[#8b0000] uppercase tracking-wider mb-3">
            Atendimento rápido
          </p>

          {/* TITLE */}
          <p className="text-[#1f2937] text-base font-bold mb-2">
            Quer um projeto sob medida para sua casa?
          </p>

          {/* TEXT */}
          <p className="text-gray-600 text-sm mb-5 leading-relaxed">
            Fale com a Móveis Mello e receba um orçamento personalizado para móveis planejados,
            sem compromisso e com atendimento direto no WhatsApp.
          </p>

          {/* CTA PRINCIPAL */}
          <a
            href="https://wa.me/555591200892"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-[#8b0000] text-white py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg"
          >
            <FaWhatsapp className="text-lg animate-pulse" />
            Falar agora no WhatsApp
          </a>

          {/* SECUNDÁRIO (DISCRETO) */}
          <Link
            href="/projetos"
            className="block text-center text-sm text-gray-500 mt-3 hover:text-[#8b0000] transition"
          >
            Ver projetos realizados
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}