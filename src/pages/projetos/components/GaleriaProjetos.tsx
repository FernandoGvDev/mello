import { useEffect, useMemo, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// Importação automática das imagens da pasta
const imagens = import.meta.glob("/src/assets/img/*.{jpg,png,jpeg,webp}", {
  eager: true,
});

// Converte os módulos em lista de URLs
const listaImagens: string[] = Object.values(imagens).map(
  (mod: any) => mod.default
);

// Função para embaralhar array
function shuffleArray(arr: string[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function LinhaCarrossel({ reverse = false, onImageClick }: any) {
  const controls = useAnimation();
  const [paused, setPaused] = useState(false);
  const velocidade = 55;

  // Cada carrossel recebe uma ordem diferente
  const imagensAleatorias = useMemo(() => shuffleArray(listaImagens), []);

  const startAnimation = () => {
    controls.start({
      x: reverse ? "0%" : "-100%",
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: velocidade,
      },
    });
  };

  useEffect(() => {
    if (!paused) startAnimation();
    if (paused) controls.stop();
  }, [paused]);

  return (
    <div
      className="overflow-hidden py-4 select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <motion.div
        animate={controls}
        className="flex gap-4"
        style={{
          x: reverse ? "-100%" : "0%",
        }}
      >
        {[...imagensAleatorias, ...imagensAleatorias].map((img, i) => (
          <div
            key={i}
            className="min-w-[300px] h-[200px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => onImageClick(img)}
          >
            <img src={img} className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function ProjetosCarrossel() {
  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);

  // Fecha imagem ao apertar back no celular
  useEffect(() => {
    const handleBack = () => {
      setImagemSelecionada(null);
    };

    if (imagemSelecionada) {
      history.pushState(null, "", location.href);
      window.addEventListener("popstate", handleBack);
    }

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, [imagemSelecionada]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Nossos Projetos
      </h2>

      <LinhaCarrossel reverse={false} onImageClick={setImagemSelecionada} />
      <LinhaCarrossel reverse={true} onImageClick={setImagemSelecionada} />
      <LinhaCarrossel reverse={false} onImageClick={setImagemSelecionada} />

      {/* LIGHTBOX FULLSCREEN */}
      {imagemSelecionada && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setImagemSelecionada(null)}
        >
          <motion.img
            src={imagemSelecionada}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={() => setImagemSelecionada(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
