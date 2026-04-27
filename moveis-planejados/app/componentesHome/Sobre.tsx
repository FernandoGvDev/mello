"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section className="w-full py-20 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* IMAGEM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/imgs/sobre.jpeg"
              alt="Móveis Planejados Mello"
              fill
              className="object-cover"
            />

            {/* overlay leve */}
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4 leading-tight">
              45 anos criando móveis sob medida
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              Há mais de 45 anos, a Móveis Mello transforma ambientes com projetos personalizados que unem estética, funcionalidade e durabilidade.
              Atuamos desde o projeto em 3D até a fabricação e instalação, utilizando MDF e madeira maciça para atender residências e empresas em todo o Rio Grande do Sul.
              Nossa experiência garante qualidade, segurança e confiança em cada detalhe.
            </p>

            {/* LISTA DE DESTAQUES */}
            <ul className="space-y-2 mb-8 text-sm md:text-base text-[#1f2937]">
              <li>✔ Projetos 100% personalizados</li>
              <li>✔ Fabricação própria</li>
              <li>✔ Atendimento em todo RS</li>
              <li>✔ Qualidade e acabamento premium</li>
            </ul>

            {/* CTA */}
            <Link
              href="/sobre"
              className="inline-block bg-[#8b0000] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Conhecer mais sobre a empresa
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
