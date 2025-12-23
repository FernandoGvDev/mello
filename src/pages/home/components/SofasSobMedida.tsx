import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import sofa from "../../../assets/img/sofa.png";

export default function SofasSobMedida() {
  return (
    <section className="w-full bg-[#f5efe8] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="uppercase tracking-widest text-sm text-[#7A2E24] font-medium">
            Sofás sob medida
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold mt-3 text-[#2a0d0b]">
            Conforto projetado para o seu espaço
          </h2>

          <p className="mt-5 text-gray-700 leading-relaxed">
            Desenvolvemos sofás sob medida com foco em ergonomia, durabilidade e
            integração total com o ambiente. Cada projeto é pensado
            tecnicamente para oferecer conforto real e acabamento impecável.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Estrutura em madeira tratada e reforçada",
              "Espumas de alta densidade para maior conforto",
              "Medidas personalizadas para cada ambiente",
              "Tecidos premium e ampla cartela de cores",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 text-gray-800"
              >
                <FaCheck className="text-[#7A2E24] mt-1" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="https://wa.me/555591200892"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mt-8 bg-[#7A2E24] text-white px-8 py-3 rounded-full shadow-md"
          >
            Entre em contato pelo WhatsApp
          </motion.a>
        </motion.div>

        {/* IMAGEM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <img
            src={sofa}
            alt="Sofá sob medida Móveis Mello"
            className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
          />

          {/* Badge flutuante */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-5 py-3 rounded-xl shadow-lg"
          >
            <span className="text-sm font-medium text-[#7A2E24]">
              Projeto 100% personalizado
            </span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
