import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CategoriasProjetos() {
  const itens = [
    {
      nome: "Cozinha Planejada",
      img: "/cozinha.jpg",
    },
    {
      nome: "Dormitório Sob Medida",
      img: "/quarto.jpg",
    },
    {
      nome: "Closet Premium",
      img: "/closet.jpg",
    },
    {
      nome: "Home Theater",
      img: "/home-theater.jpg",
    },
    {
      nome: "Escritório Planejado",
      img: "/escritorio-planejado.jpg",
    },
    {
      nome: "Banheiro Planejado",
      img: "/banheiro.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % itens.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + itens.length) % itens.length);
  };

  const calcularItensVisiveis = () => {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop
  };

  const visiveis = calcularItensVisiveis();

  const sliceItens = [...itens, ...itens].slice(index, index + visiveis);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 relative">
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-center mb-10"
      >
        Móveis sob medida que produzimos
      </motion.h2>

      {/* Carrossel */}
      <div className="relative flex items-center">
        {/* Botão Esquerda */}
        <button
          onClick={prev}
          className="absolute left-0 z-10 bg-[#2a0d0b] text-white p-3 rounded-full shadow-lg hover:opacity-80 transition hidden sm:flex"
        >
          <FaChevronLeft size={18} />
        </button>

        <div className="w-full overflow-hidden">
          <div className="flex gap-6 justify-center">
            <AnimatePresence>
              {sliceItens.map((item) => (
                <motion.div
                  key={item.nome}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="min-w-[280px] md:min-w-[320px] lg:min-w-[360px] bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={item.nome}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 text-center font-medium text-[#2a0d0b]">
                    {item.nome}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Botão Direita */}
        <button
          onClick={next}
          className="absolute right-0 z-10 bg-[#2a0d0b] text-white p-3 rounded-full shadow-lg hover:opacity-80 transition hidden sm:flex"
        >
          <FaChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
