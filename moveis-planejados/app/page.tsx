import Hero from "./componentesHome/Hero";
import ProjetosDestaque from "./componentesHome/ProjetosDestaque";
import Diferenciais from "./componentesHome/Diferenciais";
import Depoimentos from "./componentesHome/Depoimentos";
import CTAFinal from "./componentesHome/CTAFinal";
import Sobre from "./componentesHome/Sobre";
import Sofaspopup from "@/components/Sofaspopup";

export default function Home() {
  return (
    <div>
      <Sofaspopup />
      <Hero />
      <Diferenciais />
      <ProjetosDestaque />
      <Depoimentos />
      <CTAFinal />
      <Sobre />
    </div>
  );
}
