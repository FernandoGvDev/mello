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
      <div className="absolute inset-0 bg-black/50" />

      {/* Conteúdo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Projetos de Móveis Sob Medida
        </h1>

        <p className="text-lg md:text-2xl text-white/85 mt-6">
          Cozinhas, quartos, closets e ambientes planejados realizados pela
          Móveis Mello no Rio Grande do Sul
        </p>

        <div className="w-40 h-[2px] bg-white mx-auto mt-10" />
      </motion.div>
    </section>
  );
}
