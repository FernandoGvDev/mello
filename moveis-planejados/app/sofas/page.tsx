"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCouch,
  FaStar,
  FaShieldAlt,
  FaCreditCard,
  FaWhatsapp,
  FaRulerCombined,
  FaPalette,
  FaTools,
} from "react-icons/fa";
import Header from "@/components/Header";

const beneficios = [
  { icon: FaCouch, text: "Conforto personalizado" },
  { icon: FaStar, text: "Design exclusivo" },
  { icon: FaCreditCard, text: "Parcelamento em até 12x" },
  { icon: FaShieldAlt, text: "Garantia de até 5 anos" },
  { icon: FaStar, text: "+40 anos de experiência" },
];

const sofas = [
  {
    title: "Sofá para sala moderna",
    desc: "Ideal para ambientes contemporâneos, com linhas retas e acabamento sofisticado.",
    img: "/imgs/sofas/sofa-moderno.jpg",
  },
  {
    title: "Sofá para ambientes corporativos",
    desc: "Conforto e elegância para recepções, escritórios e espaços profissionais.",
    img: "/imgs/sofas/sofa-corporativo.jpg",
  },
  {
    title: "Sofá para ambientes sofisticados",
    desc: "Design refinado com foco em estética e conforto premium.",
    img: "/imgs/sofas/sofa-AmbienteSofisticado.jpg",
  },
];

export default function SofasPage() {
  return (
    <main className="w-full">
      <Header/>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/imgs/sofas/sofa.png"
            alt="Sofá sob medida"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Sofás Sob Medida que se Adaptam ao Seu Espaço
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-200 mb-8 max-w-xl"
          >
            Produzimos sofás exclusivos com conforto, durabilidade e design pensado para o seu ambiente.
          </motion.p>

          <motion.a
            href="https://wa.me/555591200892"
            target="_blank"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-3 bg-[#8b0000] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            <FaWhatsapp />
            Solicitar orçamento
          </motion.a>
        </div>
      </section>

      <section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* IMAGEM */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
    >
      <Image
        src="/imgs/sofas/sofa-sem.png"
        alt="Sofá sob medida Móveis Mello"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover hover:scale-105 transition duration-700"
      />

      {/* overlay leve */}
      <div className="absolute inset-0 bg-black/10" />
    </motion.div>

    {/* TEXTO */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-6 leading-tight">
        Sofás sob medida feitos para{" "}
        <span className="text-[#8b0000]">valorizar seu ambiente</span>
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Na <span className="font-semibold text-[#1f2937]">Móveis Mello</span>, cada sofá é pensado
        para se encaixar perfeitamente no seu espaço, respeitando medidas,
        estilo e funcionalidade.
      </p>

      <p className="text-gray-600 leading-relaxed mb-8">
        Trabalhamos com <span className="font-semibold">materiais selecionados</span>,
        estrutura reforçada e acabamento de alto padrão, garantindo não apenas
        beleza, mas também <span className="font-semibold">durabilidade e conforto no dia a dia</span>.
      </p>

      {/* LISTA DE DESTAQUES */}
      <ul className="space-y-3 mb-8">
        <li className="flex items-center gap-3 text-sm text-gray-700">
          <span className="text-[#8b0000]">✔</span>
          Produção totalmente personalizada
        </li>
        <li className="flex items-center gap-3 text-sm text-gray-700">
          <span className="text-[#8b0000]">✔</span>
          Ajuste perfeito ao seu espaço
        </li>
        <li className="flex items-center gap-3 text-sm text-gray-700">
          <span className="text-[#8b0000]">✔</span>
          Conforto pensado para uso real
        </li>
      </ul>

      {/* CTA */}
      <a
        href="https://wa.me/555591200892"
        target="_blank"
        className="inline-block bg-[#8b0000] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-[0_10px_30px_rgba(139,0,0,0.4)] transition-all duration-300"
      >
        Solicitar orçamento
      </a>
    </motion.div>

  </div>
</section>

      {/* BENEFÍCIOS */}
      <section className="py-20 bg-[#f5e6d3]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {beneficios.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow hover:-translate-y-2 hover:shadow-xl transition"
              >
                <Icon className="text-[#8b0000] text-3xl mx-auto mb-3" />
                <p className="text-sm font-medium text-[#1f2937]">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SOBRE OS SOFÁS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-6"
          >
            Produção própria, feita sob medida
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 leading-relaxed"
          >
            Na Móveis Mello, cada sofá é produzido de forma personalizada, respeitando medidas, estilo e necessidades do cliente.
            Trabalhamos com materiais selecionados, estrutura reforçada e acabamento de alto padrão para garantir durabilidade e conforto.
          </motion.p>
        </div>
      </section>

      {/* TIPOS DE SOFÁ */}
      <section className="py-20 bg-[#f5e6d3]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {sofas.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <div className="relative h-56">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-lg text-[#1f2937] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAL TÉCNICO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: FaRulerCombined, text: "Medidas exatas para seu espaço" },
            { icon: FaPalette, text: "Personalização de cores e tecidos" },
            { icon: FaTools, text: "Estrutura reforçada e durável" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                <Icon className="text-[#8b0000] text-4xl mx-auto mb-4" />
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-[#8b0000] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
            Transforme seu ambiente com um sofá sob medida
          </h2>

          <p className="text-gray-200 mb-8">
            Fale conosco e receba um orçamento personalizado para o seu espaço.
          </p>

          <a
            href="https://wa.me/555591200892"
            target="_blank"
            className="inline-flex items-center gap-3 bg-white text-[#8b0000] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            <FaWhatsapp />
            Falar no WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}