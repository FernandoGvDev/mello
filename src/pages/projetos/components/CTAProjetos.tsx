import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function CTAProjetos() {
  return (
    <section className="w-full bg-[#2a0d0b] text-white py-20 text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-6"
      >
        Gostou dos projetos?
      </motion.h2>

      <p className="text-white/80 max-w-2xl mx-auto mb-8">
        Solicite um orçamento totalmente gratuito e descubra como transformar
        seu ambiente com móveis sob medida.
      </p>

      <motion.a
        href="https://wa.me/555591200892"
        target="_blank"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="inline-flex items-center gap-3 bg-white text-[#2a0d0b] font-medium px-8 py-3 rounded-full shadow-lg"
      >
        <FaWhatsapp size={22} />
        Solicitar Orçamento
      </motion.a>
    </section>
  );
}
