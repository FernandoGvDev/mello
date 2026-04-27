"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      setIsFirstRender(false); // depois da primeira troca, nunca mais é "primeira"
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background slideshow */}
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
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content Box */}
      <div className="relative z-10 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="ml-6 bg-[#1f2937]/40 md:bg-[#1f2937]/80 backdrop-blur-md p-6 md:p-10 rounded-2xl text-white shadow-xl mx-4 md:ml-20 max-w-[90%] md:max-w-xl
"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-2xl md:text-4xl font-bold leading-tight mb-4"
          >
            Móveis Planejados que Transformam Seu Espaço
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-sm md:text-lg text-[#f5e6d3] mb-6"
          >
            Projetos sob medida que unem beleza, funcionalidade e durabilidade.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="space-y-2 text-sm md:text-base mb-6"
          >
            <li>✔ Parcelamento em até 12x</li>
            <li>✔ Garantia de até 5 anos</li>
            <li>✔ +40 anos de experiência</li>
            <li>✔ Qualidade e segurança</li>
          </motion.ul>

          <motion.a
            href="https://wa.me/555591200892"
            target="_blank"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.3 }}
            className="inline-block bg-[#8b0000] hover:bg-red-800 transition px-6 py-3 rounded-full font-semibold"
          >
            Solicitar Orçamento
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
