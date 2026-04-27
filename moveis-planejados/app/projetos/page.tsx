"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

type Projeto = {
  src: string;
  title: string;
  tag: string;
};

const projetos = [
  {
    src: "/imgs/projetos/proj1.webp",
    title: "Home Office Moderno e Funcional",
    tag: "Escritório",
  },
  {
    src: "/imgs/projetos/proj2.webp",
    title: "Quarto Contemporâneo com Detalhes Elegantes",
    tag: "Quarto",
  },
  {
    src: "/imgs/projetos/proj3.webp",
    title: "Sala de Estar Sofisticada com Painel de Madeira",
    tag: "Sala",
  },
  {
    src: "/imgs/projetos/proj4.webp",
    title: "Banheiro Minimalista com Mármore e Iluminação",
    tag: "Banheiro",
  },
  {
    src: "/imgs/projetos/proj5.webp",
    title: "Cozinha Integrada com Sala de Estar Moderna",
    tag: "Cozinha",
  },
  {
    src: "/imgs/projetos/proj6.webp",
    title: "Banheiro Luxuoso com Detalhes em Dourado",
    tag: "Banheiro",
  },
  {
    src: "/imgs/projetos/proj13.webp",
    title: "Ambiente Integrado com Espelho e Madeira",
    tag: "Sala",
  },
  {
    src: "/imgs/projetos/proj14.webp",
    title: "Cozinha Minimalista com Design Clean",
    tag: "Cozinha",
  },
  {
    src: "/imgs/projetos/proj15.webp",
    title: "Espaço Integrado de Cozinha e Sala",
    tag: "Cozinha",
  },
  {
    src: "/imgs/projetos/proj19.webp",
    title: "Área Compacta de Estudo/Makeup Planejada",
    tag: "Escritório",
  },
  {
    src: "/imgs/projetos/proj21.webp",
    title: "Quarto Elegante com Painel Geométrico",
    tag: "Quarto",
  },
  {
    src: "/imgs/projetos/proj23.webp",
    title: "Cozinha Moderna com Ilha e Bancada Preta",
    tag: "Cozinha",
  },
  {
    src: "/imgs/projetos/proj32.webp",
    title: "Sala de Estar Minimalista com Painel de Madeira",
    tag: "Sala",
  },
  {
    src: "/imgs/projetos/proj34.webp",
    title: "Sala de Jantar e Estar Integrada com Arte Botânica",
    tag: "Sala de Jantar",
  },
  {
    src: "/imgs/projetos/proj36.webp",
    title: "Sala de Jantar Minimalista com Toques Dourados",
    tag: "Sala de Jantar",
  },
  {
    src: "/imgs/projetos/sofa.png",
    title: "Sala de Estar com Sofá Sob Medida",
    tag: "Sala",
  },
];

export default function ProjetosPage() {
  const [selected, setSelected] = useState<Projeto | null>(null);

  // 🔥 Botão voltar fecha modal (mobile)
  useEffect(() => {
    if (!selected) return;

    window.history.pushState({ modal: true }, "");

    const handlePopState = () => {
      setSelected(null);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selected]);

  // 🔒 Função central de fechar
  const closeModal = () => {
    setSelected(null);
    if (window.history.state?.modal) {
      window.history.back();
    }
  };

  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/imgs/cozinhabase.jpg"
          alt="Projetos"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Projetos que transformam espaços
          </h1>
          <p className="text-gray-200">
            Mais de 1.200 ambientes planejados com qualidade.
          </p>
        </motion.div>
      </section>

      {/* GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto columns-2 md:columns-3 gap-4 space-y-4">
        {projetos.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setSelected(item)}
            className="relative overflow-hidden rounded-xl group cursor-pointer active:scale-95 transition"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={500}
              height={500}
              className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
            />

            {/* overlay (não bloqueia clique) */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition duration-500 pointer-events-none" />

            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition duration-500">
                <span className="text-xs bg-white text-black px-2 py-1 rounded mb-2 inline-block">
                  {item.tag}
                </span>
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* MODAL FULLSCREEN */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* BOTÃO FECHAR */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-3xl z-50"
            >
              ✕
            </button>

            {/* CONTAINER */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex items-center justify-center px-4"
            >
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

      {/* CTA */}
      <section className="py-24 bg-[#8b0000] text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Gostou de algum desses projetos?
        </h2>
        <p className="mb-8 text-gray-200">
          Podemos criar um projeto exclusivo para você.
        </p>

        <a
          href="https://wa.me/555591200892"
          target="_blank"
          className="inline-flex items-center gap-3 bg-white text-[#8b0000] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          <FaWhatsapp /> Solicitar orçamento
        </a>
      </section>
    </main>
  );
}