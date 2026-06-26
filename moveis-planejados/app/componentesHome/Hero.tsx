"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const images = [
  "/imgs/cozinhabase.jpg",
  "/imgs/banheirobase.png",
  "/imgs/quartobase.png",
  "/imgs/escritoriobase.png",
  "/imgs/salabase.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-[#f5e6d3] min-h-screen flex flex-col">

      {/* Título */}
      <div className="pt-10 pb-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: -35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-[#8b0000] text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider"
        >
          Móveis Mello
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="text-gray-700 mt-4 text-base md:text-lg"
        >
          Móveis Planejados sob medida para transformar seu ambiente.
        </motion.p>

      </div>

      {/* Conteúdo */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 pb-10">

        <div className="grid lg:grid-cols-2 gap-14 items-center h-full">

          {/* ESQUERDA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-[#8b0000] font-semibold">

              <FaCheckCircle />

              Projeto totalmente personalizado

            </span>

            <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">

              Transformamos
              <span className="text-[#8b0000]">
                {" "}sonhos{" "}
              </span>
              em móveis planejados que valorizam sua casa.

            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">

              Desenvolvemos projetos exclusivos para cozinhas,
              dormitórios, salas, banheiros e escritórios,
              unindo design moderno, funcionalidade e acabamento impecável.

            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3 font-medium">
                <FaCheckCircle className="text-[#8b0000]" />
                Aproveitamento inteligente do espaço
              </div>

              <div className="flex items-center gap-3 font-medium">
                <FaCheckCircle className="text-[#8b0000]" />
                Materiais de alta qualidade
              </div>

              <div className="flex items-center gap-3 font-medium">
                <FaCheckCircle className="text-[#8b0000]" />
                Fabricação e instalação própria
              </div>

              <div className="flex items-center gap-3 font-medium">
                <FaCheckCircle className="text-[#8b0000]" />
                Orçamento rápido e sem compromisso
              </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="https://wa.me/555591200892"
                target="_blank"
                className="bg-[#8b0000] hover:bg-red-900 transition-all duration-300 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-xl hover:scale-105"
              >
                <FaWhatsapp size={22} />
                Solicitar Orçamento
              </a>

              <a
                href="/projetos"
                className="border-2 border-[#8b0000] text-[#8b0000] hover:bg-[#8b0000] hover:text-white transition-all duration-300 px-8 py-4 rounded-full font-bold"
              >
                Ver Projetos
              </a>

            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-center">

              <div>
                <h3 className="text-3xl font-black text-[#8b0000]">
                  +40
                </h3>
                <p className="text-gray-700">
                  Anos de experiência
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-[#8b0000]">
                  5 anos
                </h3>
                <p className="text-gray-700">
                  Garantia
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-[#8b0000]">
                  100%
                </h3>
                <p className="text-gray-700">
                  Sob medida
                </p>
              </div>

            </div>

          </motion.div>

          {/* DIREITA */}
                    <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[350px] md:h-[500px] lg:h-[600px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl bg-white">

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0.5, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.5 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[index]}
                    alt="Projeto Móveis Mello"
                    fill
                    priority
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gradiente inferior */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Texto sobre a imagem */}
              <div className="absolute bottom-8 left-8 text-white z-20">
                <h3 className="text-2xl font-bold">
                  Projetos exclusivos
                </h3>

                <p className="mt-2 text-white/90">
                  Cada ambiente é pensado para aproveitar
                  cada centímetro do seu espaço.
                </p>
              </div>

              {/* Botão anterior */}
              <button
                onClick={prevImage}
                className="absolute left-5 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 hover:bg-white transition shadow-lg flex items-center justify-center"
              >
                <FaChevronLeft className="text-[#8b0000]" />
              </button>

              {/* Botão próximo */}
              <button
                onClick={nextImage}
                className="absolute right-5 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 hover:bg-white transition shadow-lg flex items-center justify-center"
              >
                <FaChevronRight className="text-[#8b0000]" />
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`transition-all duration-300 rounded-full ${
                      index === i
                        ? "w-10 h-3 bg-white"
                        : "w-3 h-3 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}