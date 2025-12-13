import { useEffect, useMemo, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Shuffle
function shuffleArray(arr: string[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface LinhaCarrosselProps {
  reverse?: boolean;
  onImageClick: (img: string) => void;
  images: string[];
}

export function LinhaCarrossel({
  reverse = false,
  onImageClick,
  images,
}: LinhaCarrosselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    direction: reverse ? "rtl" : "ltr",
  });

  const imagensAleatorias = useMemo(
    () => shuffleArray(images),
    [images]
  );

  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const speed = reverse ? -0.7 : 0.7;

    const animate = () => {
      engine.location.add(speed);
      engine.target.set(engine.location.get());
      engine.scrollLooper.loop(speed);
      engine.translate.to(engine.location.get());

      rafId.current = requestAnimationFrame(animate);
    };

    animate();

    const stop = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };

    emblaApi.on("pointerDown", stop);
    emblaApi.on("pointerUp", animate);

    return () => {
      stop();
      emblaApi.off("pointerDown", stop);
      emblaApi.off("pointerUp", animate);
    };
  }, [emblaApi, reverse]);

  return (
    <div className="overflow-hidden py-4 select-none">
      <div ref={emblaRef}>
        <div className="flex gap-4">
          {[...imagensAleatorias, ...imagensAleatorias].map((img, i) => (
            <div
              key={i}
              className="min-w-[300px] h-[200px] rounded-xl overflow-hidden shadow-lg cursor-pointer flex-shrink-0"
              onClick={() => onImageClick(img)}
            >
              <img
                src={img}
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
