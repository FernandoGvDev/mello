"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

export default function CTAFinal() {
  return (
    <section className="w-full py-28 bg-[#f5e6d3] relative overflow-hidden">

      {/* BACKGROUND DECORATIVO */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-[#8b0000] via-transparent to-[#8b0000] blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* BADGE DE URGÊNCIA */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block bg-[#8b0000]/10 text-[#8b0000] px-5 py-2 rounded-full font-semibold text-sm mb-6"
        >
          Atendimento rápido via WhatsApp
        </motion.p>

        {/* HEADLINE (FOCO EM DECISÃO) */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-[#1f2937] leading-tight"
        >
          Seu ambiente planejado começa com uma conversa
        </motion.h2>

        {/* SUBHEADLINE (REMOVENDO “marketing vazio”) */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg max-w-2xl mx-auto mt-6"
        >
          Envie uma mensagem agora e receba um orçamento personalizado para o seu espaço,
          sem compromisso e com atendimento direto de um especialista.
        </motion.p>

        {/* CTA PRINCIPAL FORTE */}
        <motion.a
          href="https://wa.me/555591200892"
          target="_blank"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 inline-flex items-center gap-3 bg-[#8b0000] text-white px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          <FaWhatsapp className="text-xl animate-pulse" />
          Quero meu orçamento agora
          <FaArrowRight />
        </motion.a>

        {/* MICRO COPY DE SEGURANÇA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm mt-6"
        >
          ✔ Resposta rápida • ✔ Sem compromisso • ✔ Atendimento personalizado
        </motion.p>

      </div>
    </section>
  );
}