"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const depoimentos = [
  {
    nome: "Carlos Andrade",
    texto:
      "Ficamos impressionados com a qualidade do acabamento. Superou nossas expectativas em todos os detalhes.",
  },
  {
    nome: "Mariana Souza",
    texto: "Simplesmente perfeito. Valeu cada centavo.",
  },
  {
    nome: "Ricardo Lima",
    texto:
      "Entrega rápida e móveis de altíssimo padrão. Recomendo sem dúvida nenhuma.",
  },
];

export default function Depoimentos() {
  return (
    <section className="w-full py-20 bg-[#f5e6d3]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Autoridade */}
        <div className="text-center mb-6">
          <p className="text-[#8b0000] font-semibold">
            ⭐ Mais de 100 clientes satisfeitos
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            A satisfação de quem já transformou seu espaço com a Mello.
          </p>
        </div>

        {/* Grid Premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {depoimentos.map((item, i) => {
            const isMiddle = i === 1;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  isMiddle ? "md:scale-110 z-10" : "opacity-90"
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1 text-[#8b0000] mb-4 relative z-10">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6 relative z-10">
                  {item.texto}
                </p>

                {/* Name */}
                <div className="text-[#1f2937] font-semibold text-sm relative z-10">
                  {item.nome}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/555591200892"
            target="_blank"
            className="inline-block bg-[#8b0000] text-white px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Solicitar orçamento agora
          </a>
        </div>
      </div>
    </section>
  );
}
