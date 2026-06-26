"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

type Project = {
  src: string;
  title: string;
};

const projects: Project[] = [
  { src: "/imgs/cozinhabase.jpg", title: "Cozinha Planejada" },
  { src: "/imgs/quartobase.png", title: "Quarto Sob Medida" },
  { src: "/imgs/salabase.png", title: "Sala Moderna" },
  { src: "/imgs/banheirobase.png", title: "Banheiro Planejado" },
  { src: "/imgs/escritoriobase.png", title: "Escritório Funcional" },
];

export default function ProjetosDestaque() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-24 bg-[#f5e6d3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER CONVERSIVO */}
        <div className="text-center mb-14">

          <p className="text-sm font-semibold text-[#8b0000] uppercase tracking-widest">
            Projetos reais entregues
          </p>

          <h2 className="text-3xl md:text-5xl font-black text-[#1f2937] mt-4">
            Ambientes que mostram o resultado do nosso trabalho
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg">
            Cada projeto abaixo representa um cliente que hoje tem um ambiente mais funcional, bonito e bem aproveitado.
          </p>
        </div>

        {/* LAYOUT PRINCIPAL */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* COLUNA ESQUERDA - PROVA SOCIAL */}
          <div>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={projects[active].src}
                alt={projects[active].title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">
                  {projects[active].title}
                </h3>

                <p className="text-white/80 text-sm mt-1">
                  Projeto personalizado entregue para cliente real
                </p>
              </div>
            </motion.div>

            {/* THUMBS */}
            <div className="flex gap-3 mt-6 flex-wrap">

              {projects.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition ${
                    active === i
                      ? "border-[#8b0000] scale-105"
                      : "border-transparent opacity-70"
                  }`}
                >
                  <Image
                    src={p.src}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}

            </div>
          </div>

          {/* COLUNA DIREITA - CONVERSÃO */}
          <div>

            <span className="inline-flex items-center gap-2 bg-red-100 text-[#8b0000] px-4 py-2 rounded-full font-semibold">
              +40 anos de experiência em móveis planejados
            </span>

            <h3 className="mt-6 text-4xl md:text-5xl font-black text-[#1f2937] leading-tight">
              Seu próximo ambiente pode ser
              <span className="text-[#8b0000]"> exatamente assim</span>
            </h3>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Criamos projetos sob medida para aproveitar cada espaço da sua casa,
              combinando funcionalidade, estética e durabilidade.
            </p>

            {/* BENEFÍCIOS */}
            <div className="mt-8 space-y-4 text-gray-800">

              <p>✔ Projeto personalizado para seu espaço</p>
              <p>✔ Materiais de alta qualidade</p>
              <p>✔ Fabricação e instalação própria</p>
              <p>✔ Atendimento direto no WhatsApp</p>

            </div>

            {/* CTA FORTE */}
            <a
              href="https://wa.me/555591200892"
              target="_blank"
              className="mt-10 inline-flex items-center gap-3 bg-[#8b0000] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition shadow-xl"
            >
              <FaWhatsapp size={20} />
              Quero um projeto igual esse
              <FaArrowRight />
            </a>

            {/* MICRO PROVA SOCIAL */}
            <p className="mt-5 text-sm text-gray-500">
              Atendimento rápido • Orçamento sem compromisso
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}