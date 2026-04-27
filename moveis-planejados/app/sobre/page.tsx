"use client";

import { motion } from "framer-motion";
import {
  FaComments,
  FaDraftingCompass,
  FaTools,
  FaCheckCircle,
  FaTruck,
  FaUserTie,
  FaCouch,
  FaStar,
} from "react-icons/fa";

export default function Sobre() {
  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="relative py-32 px-6 flex items-center justify-center text-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src="/sobre-bg.jpg"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Compromisso e confiança em cada etapa do seu projeto
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-200 mb-8"
          >
            Mais de 40 anos entregando qualidade, segurança e tranquilidade em
            cada detalhe.
          </motion.p>

          <motion.a
            href="https://wa.me/555591200892"
            target="_blank"
            className="bg-[#8b0000] px-8 py-4 rounded-full text-white font-semibold hover:scale-110 transition"
          >
            Falar no WhatsApp
          </motion.a>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          {/* TÍTULO */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#1f2937] mb-6"
          >
            Compromisso e confiança em cada etapa do seu projeto
          </motion.h2>

          {/* TEXTO PRINCIPAL */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-700 text-lg leading-relaxed mb-8"
          >
            Há mais de 40 anos, a Móveis Mello transforma ambientes com um
            padrão de qualidade que vai além da estética. Cada projeto é
            desenvolvido com foco total em durabilidade, funcionalidade e
            acabamento impecável — garantindo não apenas beleza, mas segurança e
            tranquilidade para quem escolhe investir em móveis sob medida.
          </motion.p>

          {/* TEXTO COMPLEMENTAR */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Do primeiro atendimento até a instalação final, conduzimos cada
            etapa com transparência, organização e responsabilidade. Nosso
            compromisso é estar presente em todos os detalhes para entregar um
            resultado que realmente supere expectativas.
          </motion.p>

          {/* DESTAQUES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              "Mais de 40 anos de experiência",
              "Projetos personalizados",
              "Acabamento de alto padrão",
              "Atendimento transparente",
            ].map((item, i) => (
              <span
                key={i}
                className="bg-[#f5e6d3] text-[#1f2937] px-4 py-2 rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { num: "40+", label: "Anos de experiência", icon: FaStar },
            { num: "1.200+", label: "Projetos entregues", icon: FaCouch },
            { num: "até 5 anos", label: "Garantia", icon: FaCheckCircle },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-[#f5e6d3] p-8 rounded-2xl shadow"
              >
                <Icon className="text-[#8b0000] text-3xl mx-auto mb-3" />
                <h2 className="text-4xl font-bold text-[#8b0000]">
                  {item.num}
                </h2>
                <p className="text-gray-700">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Como cuidamos do seu projeto
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Um processo estruturado para garantir resultado de alto nível.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {[
            {
              icon: FaComments,
              title: "Entendimento",
              desc: "Alinhamos suas ideias e necessidades com clareza.",
            },
            {
              icon: FaDraftingCompass,
              title: "Desenho",
              desc: "Criamos um projeto funcional e personalizado.",
            },
            {
              icon: FaTools,
              title: "Produção",
              desc: "Execução com precisão e materiais de qualidade.",
            },
            {
              icon: FaCheckCircle,
              title: "Verificação",
              desc: "Revisão completa para garantir perfeição.",
            },
            {
              icon: FaTruck,
              title: "Instalação",
              desc: "Montagem limpa, rápida e organizada.",
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-[#f5e6d3] p-6 rounded-2xl hover:-translate-y-2 transition"
              >
                <Icon className="text-[#8b0000] text-2xl mb-3" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* QUALIDADE */}
      <section className="py-20 bg-[#f5e6d3] text-center px-6">
        <h2 className="text-3xl font-bold mb-6">
          Qualidade que você vê e sente
        </h2>

        <p className="max-w-2xl mx-auto text-gray-700 mb-8">
          Cada detalhe é pensado para entregar durabilidade, estética e conforto
          real no seu dia a dia.
        </p>

        <ul className="space-y-2 text-gray-800">
          <li>• Materiais selecionados</li>
          <li>• Acabamento refinado</li>
          <li>• Harmonia visual</li>
        </ul>
      </section>

      {/* EQUIPE */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0">
          <img
            src="/imgs/projetos/proj5.webp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Quem cuida do seu projeto
          </h2>

          <p className="text-gray-300 mb-12">
            Profissionais qualificados, comprometidos com excelência em cada
            etapa.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FaUserTie,
                title: "Profissionais experientes",
                desc: "Segurança e precisão no desenvolvimento do projeto.",
              },
              {
                icon: FaDraftingCompass,
                title: "Design especializado",
                desc: "Projetos funcionais e visualmente equilibrados.",
              },
              {
                icon: FaTools,
                title: "Montagem precisa",
                desc: "Instalação impecável e organizada.",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-xl"
                >
                  <Icon className="text-white text-2xl mb-3" />
                  <h3 className="text-white font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#8b0000] text-center text-white">
        <h2 className="text-3xl font-bold mb-6">
          Solicite seu orçamento agora
        </h2>

        <p className="mb-8 text-gray-200">
          Atendimento rápido, sem compromisso e com análise personalizada.
        </p>

        <a
          href="https://wa.me/555591200892"
          target="_blank"
          className="bg-white text-[#8b0000] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Falar com especialista
        </a>
      </section>
    </main>
  );
}
