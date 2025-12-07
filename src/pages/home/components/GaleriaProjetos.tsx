import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Importa todas as imagens automaticamente com Vite
const imagens = Object.values(
  import.meta.glob("../../../assets/projetos/*.{png,jpg,jpeg,svg,webp}", {
    eager: true,
    import: "default",
  })
);

export default function ProjetosRecentes() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <section className="w-full py-16 bg-[#F8F2EC]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-[#5A1F1A]">
          Projetos Recentes
        </h2>

        <div className="overflow-hidden rounded-2xl shadow-xl" ref={emblaRef}>
          <div className="flex gap-4">
            {imagens.map((src, i) => (
              <div className="flex-[0_0_calc(33.333%-12px)] h-[300px]" key={i}>
                <img
                  src={src as string}
                  alt={`Projeto ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
