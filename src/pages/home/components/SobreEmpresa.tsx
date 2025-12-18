import img from "../../../assets/img/proj32.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
            alt="Marcenaria Móveis Mello especializada em móveis sob medida no RS"
            loading="lazy"
            className="rounded-3xl shadow-xl object-cover w-full h-[420px] border border-[#5A1F1A]/10"
          />
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
              45 anos criando móveis sob medida
            </h2>
            <div className="w-16 h-1 mt-2 bg-[#7A2E24] rounded-full"></div>
          </div>

          <p className="text-lg text-[#5A1F1A]/80 leading-relaxed">
            Há mais de <strong>45 anos</strong>, a Móveis Mello atua na criação de
            móveis sob medida, desenvolvendo projetos personalizados que unem
            estética, funcionalidade e durabilidade.
          </p>

          <p className="text-lg text-[#5A1F1A]/80 leading-relaxed">
            Atuamos desde o projeto em 3D até a fabricação e instalação,
            utilizando MDF e madeira maciça para atender residências e empresas
            em todo o Rio Grande do Sul.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 w-fit bg-[#7A2E24] text-white px-7 py-3 rounded-xl font-medium shadow-lg"
          >
            <Link to="/projetos">Ver projetos realizados</Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
