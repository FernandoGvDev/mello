"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaTools,
  FaCouch,
  FaHandshake,
  FaCreditCard,
  FaAward,
} from "react-icons/fa";

const diferenciais = [
  {
    icon: FaCouch,
    title: "Projeto exclusivo para você",
    desc: "Seu ambiente é planejado para aproveitar cada centímetro da sua casa com inteligência e estética.",
  },
  {
    icon: FaTools,
    title: "Instalação profissional",
    desc: "Equipe especializada acompanha todo o processo até a entrega final do seu projeto.",
  },
  {
    icon: FaAward,
    title: "Mais de 40 anos de experiência",
    desc: "Décadas entregando projetos que unem qualidade, funcionalidade e confiança.",
  },
  {
    icon: FaShieldAlt,
    title: "Garantia de qualidade",
    desc: "Móveis planejados com durabilidade e garantia de fabricação para sua segurança.",
  },
  {
    icon: FaCreditCard,
    title: "Pagamento facilitado",
    desc: "Condições acessíveis e parcelamento para viabilizar seu projeto sem complicação.",
  },
  {
    icon: FaHandshake,
    title: "Atendimento personalizado",
    desc: "Você fala diretamente com especialistas durante todo o processo do projeto.",
  },
];

export default function Diferenciais() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">

          <p className="text-sm font-semibold text-[#8b0000] uppercase tracking-widest">
            Por que escolher a Móveis Mello
          </p>

          <h2 className="text-3xl md:text-5xl font-black text-[#1f2937] mt-4 leading-tight">
            Mais qualidade, mais conforto e um ambiente pensado para você
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
            Criamos móveis planejados sob medida que transformam espaços comuns em ambientes funcionais, elegantes e bem aproveitados.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {diferenciais.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group bg-[#f5e6d3] rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* ICON */}
                <div className="h-16 w-16 rounded-full bg-[#8b0000]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  <Icon className="text-[#8b0000] text-2xl" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-bold text-[#1f2937] mb-2">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}

        </div>

        {/* PROVA SOCIAL / AUTORIDADE */}
        <div className="mt-20 text-center">

          <div className="inline-block bg-[#f5e6d3] px-8 py-5 rounded-2xl shadow-sm">

            <p className="text-[#1f2937] text-lg font-semibold">
              ★★★★★ Confiança construída ao longo de décadas
            </p>

            <p className="text-gray-600 mt-2">
              Mais de 40 anos transformando casas em ambientes planejados de alto padrão
            </p>

          </div>

        </div>

        {/* CTA FINAL */}
        <div className="mt-20 bg-[#8b0000] rounded-3xl p-10 text-center text-white shadow-xl">

          <h3 className="text-3xl md:text-4xl font-black">
            Vamos transformar seu ambiente?
          </h3>

          <p className="mt-5 text-red-100 max-w-2xl mx-auto text-lg">
            Solicite um orçamento sem compromisso e descubra como criar móveis planejados exclusivos para sua casa.
          </p>

          <a
            href="https://wa.me/555591200892"
            target="_blank"
            className="mt-8 inline-flex bg-white text-[#8b0000] px-8 py-4 rounded-full font-bold hover:scale-105 transition shadow-lg"
          >
            Solicitar orçamento pelo WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}