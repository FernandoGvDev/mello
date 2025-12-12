import { motion } from "framer-motion";

export default function ProjetoDestaque() {
  return (
    <section className="w-full bg-[#f7f3ef] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Projeto em Destaque
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Um ambiente planejado do zero, combinando sofisticação,
            funcionalidade e durabilidade. Cada detalhe foi fabricado sob
            medida para aproveitar melhor o espaço e garantir um acabamento
            premium.
          </p>

          <ul className="text-gray-700 space-y-2">
            <li>• Marcenaria 100% sob medida</li>
            <li>• Materiais premium e acabamentos impecáveis</li>
            <li>• Projeto exclusivo para o cliente</li>
            <li>• Instalação rápida e limpa</li>
          </ul>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src="/projetos/destaque.jpg"
          className="w-full h-[420px] object-cover rounded-xl shadow-xl"
          alt="Projeto em destaque"
        />
      </div>
    </section>
  );
}
