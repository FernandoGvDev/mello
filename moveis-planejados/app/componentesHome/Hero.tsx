"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

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
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/15" />

      {/* Conteúdo */}
      <div className="relative z-10 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-5 md:ml-20 max-w-xl rounded-3xl border border-white/10 bg-black/45 backdrop-blur-xl shadow-2xl p-7 md:p-10 text-white"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#8b0000]/90 px-4 py-2 text-sm font-semibold text-white mb-6 mt-25"
          >
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            Há mais de 40 anos realizando sonhos
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight"
          >
            Seu <span className="text-[#d4af37]">Móvel Planejado</span>
            <br />
            do Jeito que Você Sempre Sonhou.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-5 text-base md:text-lg text-gray-200 leading-relaxed"
          >
            Transforme sua cozinha, quarto, sala, banheiro ou escritório com
            móveis planejados feitos sob medida, acabamento impecável e máxima
            qualidade para valorizar seu ambiente.
          </motion.p>

          {/* Benefícios */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="grid grid-cols-1 gap-3 mt-7"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-400 w-5 h-5" />
              <span>Projeto totalmente personalizado</span>
            </div>

            <div className="flex items-center gap-3">
              <BadgeCheck className="text-green-400 w-5 h-5" />
              <span>Mais de 40 anos de tradição e qualidade</span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-400 w-5 h-5" />
              <span>Garantia de até 5 anos</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock3 className="text-green-400 w-5 h-5" />
              <span>Parcelamento facilitado</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-8"
          >
            <a
              href="https://wa.me/555591200892"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center w-full md:w-auto rounded-full bg-[#8b0000] hover:bg-red-800 px-9 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-red-900/40"
            >
              Receber Meu Orçamento
            </a>

            <div className="mt-4 flex flex-col md:flex-row gap-2 md:gap-6 text-sm text-gray-300">
              <span>✓ Atendimento rápido pelo WhatsApp</span>
              <span>✓ Orçamento sem compromisso</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}