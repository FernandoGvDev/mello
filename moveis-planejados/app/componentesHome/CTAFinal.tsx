"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function CTAFinal() {
  return (
    <section className="w-full py-24 bg-[#f5e6d3] relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-[#8b0000] via-transparent to-[#8b0000] blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight"
        >
          Peça seu orçamento e transforme seu ambiente hoje
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto mb-10"
        >
          Fale agora conosco e receba um orçamento personalizado. Atendimento
          imediato via WhatsApp e projetos 100% sob medida.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/555591200892"
          target="_blank"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 bg-[#8b0000] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-110 hover:ring-4 hover:ring-red-300 transition-all duration-300"
        >
          <FaWhatsapp className="text-xl animate-pulse" />
          Solicitar orçamento agora
        </motion.a>

        {/* Urgency */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 text-sm mt-6"
        >
          Atendimento imediato • Sem compromisso • Resposta em poucos minutos
        </motion.p>
      </div>
    </section>
  );
}
