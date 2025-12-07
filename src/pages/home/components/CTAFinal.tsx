import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function CTAFinal() {
  return (
    <section className="w-full py-20 bg-[#5A1F1A]">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Transforme seu ambiente com móveis sob medida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-lg mb-10 text-white/90 max-w-2xl mx-auto"
        >
          Há 45 anos criando móveis exclusivos com alta durabilidade, design
          personalizado e acabamento impecável. Solicite seu orçamento gratuito.
        </motion.p>

        <motion.a
          href="https://wa.me/555591200892"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#5A1F1A] px-8 py-4 rounded-xl font-semibold text-lg shadow-lg inline-flex items-center gap-3"
        >
          <FaWhatsapp size={28} /> Falar no WhatsApp
        </motion.a>
      </div>
    </section>
  );
}
