import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Importa automaticamente todas as imagens da pasta
const imagens = Object.values(
  import.meta.glob("../../../assets/projetos/*.{png,jpg,jpeg,svg,webp}", {
    eager: true,
    import: "default",
  })
);

export default function ProjetosRecentes() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  return (
    <section className="w-full py-20 bg-[#F7F4EF]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-[#5A1F1A] mb-6">
          Projetos de Móveis Sob Medida
        </h2>

        <p className="text-[#5A1F1A]/80 mb-10 max-w-3xl">
          Confira alguns projetos recentes de móveis sob medida desenvolvidos
          pela Móveis Mello no Rio Grande do Sul, com soluções personalizadas
          para diferentes ambientes.
        </p>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">
            {imagens.map((src, i) => (
              <div
                key={i}
                className="
                  flex-[0_0_100%]
                  sm:flex-[0_0_70%]
                  md:flex-[0_0_33.333%]
                  lg:flex-[0_0_30%]
                  h-[260px] sm:h-[300px] md:h-[340px]
                  rounded-2xl overflow-hidden
                  shadow-lg bg-white
                "
              >
                <img
                  src={src as string}
                  alt={`Projeto de móveis sob medida realizado pela Móveis Mello - imagem ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
