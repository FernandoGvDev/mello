"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";

export default function Sobre() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* IMAGEM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-[380px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/imgs/sobre.jpeg"
              alt="Móveis Planejados Mello"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          {/* TEXTO CONVERSIVO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            {/* BADGE AUTORIDADE */}
            <p className="inline-block bg-[#8b0000]/10 text-[#8b0000] px-5 py-2 rounded-full font-semibold text-sm mb-6">
              +45 anos de experiência em móveis planejados
            </p>

            {/* HEADLINE ORIENTADA A CONFIANÇA */}
            <h2 className="text-3xl md:text-5xl font-black text-[#1f2937] leading-tight">
              Você está a um passo de ter um ambiente planejado de verdade
            </h2>

            {/* TEXTO REDUZIDO (SEM “HISTÓRIA LONGA”) */}
            <p className="text-gray-600 text-lg leading-relaxed mt-6">
              Atuamos há mais de quatro décadas criando móveis planejados sob medida,
              unindo design, funcionalidade e acabamento de alto padrão para transformar ambientes residenciais e comerciais.
            </p>

            {/* BENEFÍCIOS DIRETOS */}
            <div className="mt-8 space-y-4 text-[#1f2937]">

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#8b0000] mt-1" />
                <p>Projetos 100% personalizados para o seu espaço</p>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#8b0000] mt-1" />
                <p>Fabricação própria com controle de qualidade</p>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#8b0000] mt-1" />
                <p>Atendimento direto com especialistas</p>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#8b0000] mt-1" />
                <p>Entrega e instalação completa</p>
              </div>

            </div>

            {/* CTA PRINCIPAL */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <a
                href="https://wa.me/555591200892"
                target="_blank"
                className="inline-flex items-center justify-center gap-3 bg-[#8b0000] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition"
              >
                <FaWhatsapp />
                Falar com especialista
              </a>

              <Link
                href="/sobre"
                className="inline-flex items-center justify-center border-2 border-[#8b0000] text-[#8b0000] px-8 py-4 rounded-full font-semibold hover:bg-[#8b0000] hover:text-white transition"
              >
                Conhecer a empresa
              </Link>

            </div>

            {/* MICRO SEGURANÇA */}
            <p className="text-sm text-gray-500 mt-6">
              Atendimento rápido • Sem compromisso • Orçamento gratuito
            </p>

          </motion.div>

        </div>
      </div>
    </section>
  );
}