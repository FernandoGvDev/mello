import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import SofasSobMedida from "./components/SofasSobMedida";
import GaleriaProjetos from "./components/GaleriaProjetos";
import SobreEmpresa from "./components/SobreEmpresa";
import Diferencias from "./components/Diferencias";
import Depoimentos from "./components/Depoimentos";
import CTAFinal from "./components/CTAFinal";

export default function Home(){
    return(
        <>
        <Hero />
        <Servicos />
        <SofasSobMedida />
        <GaleriaProjetos />
        <SobreEmpresa />
        <Diferencias />
        <Depoimentos />
        <CTAFinal />
        </>
    )
}