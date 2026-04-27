"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// 📦 Tipagem (melhora manutenção)
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
  const [selected, setSelected] = useState<Project | null>(null);

  // 🧠 UX: botão voltar fecha modal (mobile)
  useEffect(() => {
    if (!selected) return;

    window.history.pushState({ modal: true }, "");

    const handlePopState = () => setSelected(null);

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selected]);

  // 🔐 FECHAR CENTRALIZADO (reutilizável)
  const closeModal = () => {
    setSelected(null);
    window.history.back();
  };

  return (
    <section className="w-full py-16 bg-[#f5e6d3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🧱 HEADER */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4">
            Ambientes que Transformamos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Projetos que unem estética, funcionalidade e durabilidade.
          </p>
        </header>

        {/* 📱 MOBILE (carousel leve) */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelected(project)}
              className="min-w-[85%] h-[300px] relative rounded-xl overflow-hidden snap-center cursor-pointer"
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />

              {/* overlay para contraste */}
              <div className="absolute inset-0 bg-black/40 " />

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* 💻 DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-4 gap-4 auto-rows-[250px]">
          {/* destaque */}
          <div
            onClick={() => setSelected(projects[0])}
            className="relative col-span-2 row-span-2 rounded-xl overflow-hidden cursor-pointer"
          >
            <Image src={projects[0].src} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* restantes */}
          {projects.slice(1).map((project, i) => (
            <div
              key={i}
              onClick={() => setSelected(project)}
              className="relative rounded-xl overflow-hidden cursor-pointer"
            >
              <Image src={project.src} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </div>

        {/* 🎯 CTA */}
        <div className="text-center mt-12">
          <a
            href="/projetos"
            className="inline-block bg-[#8b0000] text-white px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Ver mais projetos reais
          </a>
        </div>
      </div>

      {/* 🖼️ MODAL FULLSCREEN */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* botão fechar */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-3xl z-50"
            >
              ✕
            </button>

            {/* container central */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* limite elegante */}
              <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
                <Image
                  src={selected.src}
                  alt={selected.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}