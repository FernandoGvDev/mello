"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaWhatsapp } from "react-icons/fa";

const depoimentos = [
  {
    nome: "Carlos Andrade",
    texto:
      "Ficamos impressionados com a qualidade do acabamento. Superou nossas expectativas em todos os detalhes.",
  },
  {
    nome: "Mariana Souza",
    texto:
      "Simplesmente perfeito. O atendimento e o resultado final foram impecáveis.",
  },
  {
    nome: "Ricardo Lima",
    texto:
      "Entrega rápida e móveis de altíssimo padrão. Recomendo sem dúvida nenhuma.",
  },
];

export default function Depoimentos() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER DE CONVERSÃO */}
        <div className="text-center mb-6">

          <p className="text-[#8b0000] font-semibold uppercase tracking-widest text-sm">
            Prova social real
          </p>

        </div>

        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-5xl font-black text-[#1f2937]">
            Quem já fez móveis planejados com a Mello aprova o resultado
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg">
            Cada projeto entregue representa uma casa mais organizada, funcional e valorizada.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {depoimentos.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f5e6d3] rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative"
            >

              {/* QUOTE ICON */}
              <FaQuoteLeft className="text-[#8b0000]/20 text-4xl absolute top-6 right-6" />

              {/* STARS */}
              <div className="flex gap-1 text-[#8b0000] mb-5">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              {/* TEXTO */}
              <p className="text-gray-800 text-sm leading-relaxed mb-6">
                {item.texto}
              </p>

              {/* NOME */}
              <div className="font-bold text-[#1f2937]">
                {item.nome}
              </div>

              <p className="text-xs text-gray-500 mt-1">
                Cliente verificado
              </p>

            </motion.div>
          ))}

        </div>

        {/* BLOCO DE AUTORIDADE */}
        <div className="mt-20 text-center">

          <div className="inline-block bg-[#f5e6d3] px-10 py-6 rounded-2xl shadow-sm">

            <p className="text-lg font-semibold text-[#1f2937]">
              ★★★★★ +100 clientes satisfeitos
            </p>

            <p className="text-gray-600 mt-2">
              Alto padrão de entrega, acabamento e atendimento personalizado
            </p>

          </div>

        </div>

        {/* CTA FORTE */}
        <div className="mt-16 text-center">

          <a
            href="https://wa.me/555591200892"
            target="_blank"
            className="inline-flex items-center gap-3 bg-[#8b0000] text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition shadow-xl"
          >
            <FaWhatsapp size={20} />
            Quero meu projeto também
          </a>

          <p className="text-sm text-gray-500 mt-4">
            Atendimento rápido • Orçamento sem compromisso
          </p>

        </div>

      </div>
    </section>
  );
}