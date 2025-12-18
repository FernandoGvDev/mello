import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import imgemHero from "../../../assets/img/proj12.webp";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full bg-[#F5EDE4] text-[#2A1A14] pt-24 pb-20 md:pt-32"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXTOS */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold leading-tight text-[#7A2E24]"
          >
            Móveis sob medida no Rio Grande do Sul
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-5 text-lg md:text-xl max-w-lg"
          >
            Há mais de 45 anos, a Móveis Mello desenvolve móveis sob medida com
            projeto personalizado em 3D, fabricação própria e instalação completa
            para residências e empresas.
          </motion.p>

          {/* BOTÃO WHATSAPP */}
          <motion.a
            href="https://wa.me/555591200892"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-3 bg-[#7A2E24] text-white px-7 py-3 rounded-full shadow-lg text-lg font-medium"
          >
            <FaWhatsapp size={22} />
            Solicitar orçamento pelo WhatsApp
          </motion.a>
        </motion.div>

        {/* IMAGEM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex justify-center"
        >
          <img
            src={imgemHero}
            alt="Projeto de móveis sob medida desenvolvido pela Móveis Mello no RS"
            loading="lazy"
            className="rounded-2xl shadow-xl w-full max-w-md md:max-w-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}
