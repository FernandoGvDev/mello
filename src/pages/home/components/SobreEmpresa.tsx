import { motion } from "framer-motion";
import img from "../../../assets/img/proj32.jpeg";

export default function SobreEmpresa() {
  return (
    <section className="w-full py-24 bg-[#F8F2EC] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* IMAGEM */}
        <motion.div
          initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={img}
            className="rounded-3xl shadow-xl object-cover w-full h-[420px] border border-[#5A1F1A]/10"
            alt="Moveis Mello - Marcenaria"
          />

          {/* Ornamentação suave */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#5A1F1A]/10 rounded-full blur-2xl"></div>
        </motion.div>

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-7"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A1F1A]">
              Sobre a Móveis Mello
            </h2>
            <div className="w-16 h-1 mt-2 bg-[#7A2E24] rounded-full"></div>
          </div>

          <p className="text-lg text-[#5A1F1A]/80 leading-relaxed">
            Há <span className="font-semibold text-[#5A1F1A]">45 anos</span>,
            somos referência na criação de móveis planejados que unem
            estética, funcionalidade e durabilidade. Cada projeto é
            desenvolvido sob medida para refletir a personalidade e as
            necessidades de cada cliente.
          </p>

          <p className="text-lg text-[#5A1F1A]/80 leading-relaxed">
            Trabalhamos com materiais premium, tecnologia de precisão e
            acabamento artesanal que garantem um resultado impecável em
            qualquer ambiente: cozinhas, quartos, salas, escritórios ou
            espaços corporativos.
          </p>

          <p className="text-lg text-[#5A1F1A]/80 leading-relaxed">
            Nosso compromisso é entregar uma experiência completa — do
            planejamento ao pós-entrega — com atendimento próximo,
            pontualidade e excelência em cada etapa.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 w-fit bg-[#7A2E24] text-white px-7 py-3 rounded-xl font-medium shadow-lg"
          >
            Ver projetos realizados
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
