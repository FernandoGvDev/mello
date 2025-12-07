import { motion } from "framer-motion";

export default function SobreEmpresa() {
  return (
    <section className="w-full py-20 bg-[#F8F2EC]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGEM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/banner.jpeg" // coloque uma imagem real da empresa ou projeto
            className="rounded-2xl shadow-lg object-cover w-full h-[380px]"
            alt="Moveis Mello - Marcenaria"
          />
        </motion.div>

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl font-bold text-[#5A1F1A]">
            Sobre a Moveis Mello
          </h2>

          <p className="text-lg text-[#5A1F1A]/80 leading-relaxed">
            Há <span className="font-semibold text-[#5A1F1A]">45 anos</span>,
            a Moveis Mello transforma espaços em ambientes únicos,
            produzindo móveis sob medida com excelência, tradição e
            atenção aos mínimos detalhes.
          </p>

          <p className="text-lg text-[#5A1F1A]/80 leading-relaxed">
            Nosso compromisso é entregar qualidade superior, durabilidade e
            projetos que refletem o estilo de vida de cada cliente. Unimos
            tecnologia, design e marcenaria especializada para criar móveis
            exclusivos que valorizam seu lar.
          </p>

          <p className="text-lg text-[#5A1F1A]/80 leading-relaxed">
            Cada peça é produzida com materiais selecionados, garantindo
            acabamento impecável, precisão nas medidas e uma experiência de
            alto padrão do início ao fim do projeto.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 w-fit bg-[#5A1F1A] text-white px-6 py-3 rounded-xl font-medium shadow-md"
          >
            Conhecer nossos projetos
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
