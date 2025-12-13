import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { motion } from "framer-motion";

// Importação automática das imagens
const imagens = import.meta.glob("/src/assets/img/*.{jpg,png,jpeg,webp}", {
  eager: true,
});

// Lista de URLs
const listaImagens: string[] = Object.values(imagens).map(
  (mod: any) => mod.default
);

// Embaralha imagens (cada linha diferente)
function shuffleArray(arr: string[]) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function LinhaCarrossel({
  reverse = false,
  onImageClick,
}: {
  reverse?: boolean;
  onImageClick: (img: string) => void;
}) {
  const imagensAleatorias = useMemo(
    () => shuffleArray(listaImagens),
    []
  );

  return (
    <div className="py-4 select-none">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={16}
        loop={true}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: reverse,
        }}
        grabCursor={true}
        className="overflow-visible"

        // ✅ CORREÇÃO DO AUTOPLAY NO MOBILE
        onTouchStart={(swiper) => {
          swiper.autoplay.stop();
        }}
        onTouchEnd={(swiper) => {
          swiper.autoplay.start();
        }}
      >

        {[...imagensAleatorias, ...imagensAleatorias].map((img, i) => (
          <SwiperSlide
            key={i}
            className="!w-[300px] !h-[200px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
          >

            <img
              src={img}
              className="w-full h-full object-cover"
              onClick={() => onImageClick(img)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default function ProjetosCarrossel() {
  const [imagemSelecionada, setImagemSelecionada] =
    useState<string | null>(null);

  // Fecha lightbox no botão voltar (mobile)
  useEffect(() => {
    const handleBack = () => setImagemSelecionada(null);

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

      {/* 3 linhas – direções alternadas */}
      <LinhaCarrossel reverse={false} onImageClick={setImagemSelecionada} />
      <LinhaCarrossel reverse={true} onImageClick={setImagemSelecionada} />
      <LinhaCarrossel reverse={false} onImageClick={setImagemSelecionada} />

      {/* LIGHTBOX */}
      {imagemSelecionada && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setImagemSelecionada(null)}
        >
          <motion.img
            src={imagemSelecionada}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
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
