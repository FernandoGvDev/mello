import { motion } from "framer-motion";
import { CheckCircle, Award, Hammer, Clock, Ruler } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "45 anos de experiência",
    desc: "Tradição e autoridade na fabricação de móveis sob medida no Rio Grande do Sul.",
  },
  {
    icon: Hammer,
    title: "Marcenaria própria",
    desc: "Produção interna que garante controle total de qualidade e acabamento superior.",
  },
  {
    icon: Ruler,
    title: "Projetos 100% personalizados",
    desc: "Cada móvel é desenhado sob medida para atender às necessidades do cliente.",
  },
  {
    icon: Clock,
    title: "Entrega dentro do prazo",
    desc: "Organização e compromisso em todas as etapas do projeto.",
  },
  {
    icon: CheckCircle,
    title: "Garantia e suporte",
    desc: "Assistência e acompanhamento mesmo após a entrega do projeto.",
  },
];

export default function Diferenciais() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-[#5A1F1A]"
        >
          Por que escolher a Móveis Mello
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F8F2EC] p-8 rounded-2xl shadow-sm border border-[#5A1F1A]/10 hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-4">
                  <Icon size={40} className="text-[#5A1F1A]" />
                </div>
                <h3 className="text-xl font-semibold text-[#5A1F1A] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#5A1F1A]/80 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
