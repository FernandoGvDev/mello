import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const depoimentos = [
  { nome: "Mariana Silva", texto: "A Moveis Mello transformou minha cozinha! Acabamento impecável e entrega no prazo." },
  { nome: "Carlos Almeida", texto: "Ficou tudo conforme combinado — meu closet sob medida ficou perfeito." },
  { nome: "Ana Paula Souza", texto: "Profissionalismo e qualidade em cada detalhe. Meu home theater ficou incrível!" },
  { nome: "Lucas Fernandes", texto: "Os móveis sob medida ficaram lindos, todos os detalhes foram perfeitos." },
  { nome: "Fernanda Costa", texto: "Atendimento impecável, entrega rápida e móveis de altíssima qualidade." },
  { nome: "Rafael Gomes", texto: "O design e acabamento ficaram incríveis. Recomendo 100%!" },
  { nome: "Juliana Moreira", texto: "Meu painel da sala ficou maravilhoso! A Moveis Mello realmente entende de design e acabamento." },
{ nome: "Bruno Henrique", texto: "Entrega rápida e tudo exatamente como planejado. Superou minhas expectativas." },
{ nome: "Paula Ferreira", texto: "Fiz minha lavanderia sob medida e ficou extremamente funcional. Atendimento excelente!" },
{ nome: "Ricardo Menezes", texto: "Profissionais muito caprichosos. Cada detalhe dos armários ficou perfeito." },
{ nome: "Larissa Monteiro", texto: "Amei a organização do meu quarto! Os móveis realmente transformaram o ambiente." },
{ nome: "Thiago Santos", texto: "Excelente experiência. Desde o projeto até a instalação, tudo com muita qualidade." },
{ nome: "Camila Duarte", texto: "Minha penteadeira ficou simplesmente linda! Muito melhor do que eu imaginava." },
{ nome: "Eduardo Farias", texto: "Gostei muito do atendimento e da transparência. Recomendo para qualquer projeto sob medida." },
{ nome: "Sofia Carvalho", texto: "Meu escritório ficou moderno e super confortável. Trabalho impecável!" },
{ nome: "Gustavo Ramos", texto: "Equipe muito profissional. O armário da cozinha ficou perfeito e super espaçoso." },
{ nome: "Isabela Rocha", texto: "A Moveis Mello trouxe exatamente a solução que eu precisava para otimizar meu espaço." },
{ nome: "Henrique Oliveira", texto: "Fiquei impressionado com o acabamento do meu roupeiro. Realmente alto padrão." },
{ nome: "Patrícia Almeida", texto: "Me surpreendi positivamente. Desde o orçamento até a montagem, tudo foi excelente." },
{ nome: "Leonardo Martins", texto: "Trabalho muito cuidadoso. Minha mesa planejada ficou robusta e elegante." },
{ nome: "Viviane Cardoso", texto: "Amamos o armário do banheiro. Material de ótima qualidade e acabamento fino." },
{ nome: "Matheus Araújo", texto: "Gostei muito do projeto e da execução. Super detalhistas e pontuais." },
{ nome: "Daniela Ribeiro", texto: "Meu quarto planejado ficou exatamente como eu sonhava. Valeu cada centavo!" },
{ nome: "Alberto Cunha", texto: "Equipe organizada e muito educada. Fizeram tudo com excelente qualidade." },
{ nome: "Caroline Batista", texto: "A cozinha ficou linda e extremamente prática. Amei o resultado." },
{ nome: "Fábio Nogueira", texto: "Atendimento incrível e obra muito bem-feita. Recomendo sem dúvidas." },
{ nome: "Renata Moura", texto: "Meus armários ficaram sofisticados e funcionais. Trabalho impecável." },
{ nome: "André Freitas", texto: "Design moderno, materiais ótimos e instalação muito rápida. Excelente serviço." },
{ nome: "Beatriz Fonseca", texto: "Fiquei encantada com o cuidado nos detalhes. Minha estante ficou perfeita." },
{ nome: "Marcelo Antunes", texto: "Profissionais sérios e qualificados. Os móveis elevaram o nível da minha casa." },
{ nome: "Jéssica Pacheco", texto: "Tudo muito caprichado. Meu closet ficou organizado e lindo, exatamente como eu queria." }
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="w-full py-20 bg-[#F8F2EC] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-[#5A1F1A] mb-12">
          O que dizem nossos clientes
        </h2>

        {/* CARROSSEL 1 – indo para a direita */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.2}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={5000}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 }
          }}
        >
          {depoimentos.map((d, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded-2xl shadow-md text-left">
                <h3 className="font-semibold text-lg text-[#5A1F1A] mb-1">{d.nome}</h3>
                <p className="text-[#5A1F1A]/80 text-sm leading-relaxed">{d.texto}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Espaçamento entre os 2 carrosséis */}
        <div className="mt-12" />

        {/* CARROSSEL 2 – indo para a esquerda (reverso) */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.2}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 0,
            reverseDirection: true,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={5000}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 }
          }}
        >
          {depoimentos.map((d, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded-2xl shadow-md text-left">
                <h3 className="font-semibold text-lg text-[#5A1F1A] mb-1">{d.nome}</h3>
                <p className="text-[#5A1F1A]/80 text-sm leading-relaxed">{d.texto}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
