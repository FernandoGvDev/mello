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
    icon: FaAward,
    title: "+40 anos de experiência",
    desc: "Tradição e confiança construídas ao longo de décadas entregando qualidade.",
  },
  {
    icon: FaShieldAlt,
    title: "Garantia de até 5 anos",
    desc: "Mais segurança e tranquilidade para o seu investimento.",
  },
  {
    icon: FaCreditCard,
    title: "Parcelamento facilitado",
    desc: "Condições acessíveis para você realizar seu projeto sem pesar no bolso.",
  },
  {
    icon: FaCouch,
    title: "Projeto sob medida",
    desc: "Cada detalhe pensado exclusivamente para o seu espaço e necessidade.",
  },
  {
    icon: FaTools,
    title: "Acabamento premium",
    desc: "Materiais de alta qualidade e atenção aos mínimos detalhes.",
  },
  {
    icon: FaHandshake,
    title: "Atendimento personalizado",
    desc: "Acompanhamento próximo do início ao fim do seu projeto.",
  },
];

export default function Diferenciais() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4">
            Por que escolher a Mello?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mais de 40 anos transformando ambientes com qualidade, precisão e
            compromisso.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-[#f5e6d3] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4 text-[#8b0000] text-3xl transition-transform duration-300 group-hover:scale-110">
                  <Icon />
                </div>

                <h3 className="text-lg font-semibold text-[#1f2937] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Extra autoridade */}
        <div className="mt-16 text-center">
          <p className="text-[#1f2937] text-lg font-medium">
            Desde 1980 transformando lares com qualidade e confiança
          </p>
        </div>
      </div>
    </section>
  );
}
