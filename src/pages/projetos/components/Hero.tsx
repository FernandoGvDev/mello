import { motion } from "framer-motion";

export default function HeroProjetos() {
  return (
    <section
      className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Conteúdo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-wide"
        >
          Projetos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-2xl text-white/80 mt-4"
        >
          Confira nosso trabalho
        </motion.p>

        {/* Linha decorativa */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 320, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.0 }}
          className="h-[2px] bg-white mx-auto mt-6"
        />
      </motion.div>
    </section>
  );
}
