import Hero from "./components/Hero";
import CategoriasProjetos from "./components/CategoriasProjetos";
import GaleriaProjetos from "./components/GaleriaProjetos";
import ProjetoDestaque from "./components/ProjetoDestaque";
import CTAProjetos from "./components/CTAProjetos";

export default function Projetos() {
    return (
        <>
            <Hero />
            <CategoriasProjetos />
            <GaleriaProjetos />
            <ProjetoDestaque />
            <CTAProjetos />
        </>
    )
}