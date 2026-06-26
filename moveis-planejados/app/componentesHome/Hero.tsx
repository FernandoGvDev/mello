"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaCreditCard,
  FaAward,
  FaCheckCircle,
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
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setIsFirstRender(false);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* BACKGROUND SLIDESHOW */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={
            isFirstRender
              ? { opacity: 1, scale: 1.05 }
              : { opacity: 0, scale: 1.05 }
          }
          animate={{ opacity: 1, scale: 1.15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 8, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${images[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* LEFT DARK GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      {/* CONTENT LEFT ALIGNED */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start text-left px-8 md:px-20 max-w-2xl">
        {/* BRAND */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#8b0000] text-4xl md:text-6xl font-black"
        >
          MÓVEIS MELLO
        </motion.h1>

        {/* SUBTITLE */}
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/90 mt-2 text-lg md:text-2xl font-semibold"
        >
          MÓVEIS PLANEJADOS SOB MEDIDA
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white/80 mt-6 text-sm md:text-lg"
        >
          Móveis planejados que transformam seu espaço. <br />
          Projetos exclusivos que unem beleza, funcionalidade e durabilidade
          para o seu lar ou empresa.
        </motion.p>

        {/* DIFFERENTIALS WITH ICONS */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90 text-sm md:text-base"
        >
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-[#8b0000]" /> Garantia de até 5 anos
          </div>
          <div className="flex items-center gap-2">
            <FaCreditCard className="text-[#8b0000]" /> Parcelamento em até 12x
          </div>
          <div className="flex items-center gap-2">
            <FaAward className="text-[#8b0000]" /> +40 anos de experiência
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-[#8b0000]" /> Qualidade e segurança
          </div>
        </motion.div>

        {/* CTA */}
        <motion.a
          href="https://wa.me/555591200892"
          target="_blank"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 bg-[#8b0000] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-xl"
        >
          Solicitar orçamento
        </motion.a>

        {/* CTA SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-white/70 mt-3 text-sm md:text-base"
        >
          Atendimento rápido e sem compromisso
        </motion.p>
      </div>
      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 text-base md:text-lg flex flex-col items-center gap-3"
      >
        <span className="font-medium">Arraste para baixo</span>
        <div className="w-8 h-14 border-2 border-white/70 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-2 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
