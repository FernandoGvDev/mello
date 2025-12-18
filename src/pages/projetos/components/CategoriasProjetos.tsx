import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

export default function CategoriasProjetos() {
  const [index, setIndex] = useState(0);

  const calcularItensVisiveis = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const visiveis = calcularItensVisiveis();
  const sliceItens = [...itens, ...itens].slice(index, index + visiveis);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-center mb-12 text-[#2a0d0b]"
      >
        Tipos de móveis sob medida que produzimos
      </motion.h2>

      <div className="relative flex items-center">
        <button
          onClick={() => setIndex((prev) => (prev - 1 + itens.length) % itens.length)}
          className="absolute left-0 z-10 bg-[#2a0d0b] text-white p-3 rounded-full hidden sm:flex"
        >
          <FaChevronLeft />
        </button>

        <div className="w-full overflow-hidden">
          <div className="flex gap-6 justify-center">
            <AnimatePresence>
              {sliceItens.map((item) => (
                <motion.div
                  key={item.nome}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="min-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={`${item.nome} realizado pela Móveis Mello no RS`}
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

        <button
          onClick={() => setIndex((prev) => (prev + 1) % itens.length)}
          className="absolute right-0 z-10 bg-[#2a0d0b] text-white p-3 rounded-full hidden sm:flex"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
