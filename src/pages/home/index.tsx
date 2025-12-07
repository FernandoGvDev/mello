import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import GaleriaProjetos from "./components/GaleriaProjetos";
import SobreEmpresa from "./components/SobreEmpresa";
import Diferencias from "./components/Diferencias";
import Depoimentos from "./components/Depoimentos";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";

export default function Home(){
    return(
        <>
        <Header />
        <Hero />
        <Servicos />
        <GaleriaProjetos />
        <SobreEmpresa />
        <Diferencias />
        <Depoimentos />
        <CTAFinal />
        <Footer />
        </>
    )
}