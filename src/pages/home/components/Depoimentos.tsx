import { motion } from "framer-motion";

const depoimentos = [
  {
    nome: "Mariana Silva",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=faces&fit=crop&w=200&h=200",
    texto: "A Moveis Mello transformou minha cozinha! Acabamento impecável e entrega no prazo."
  },
  {
    nome: "Carlos Almeida",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=faces&fit=crop&w=200&h=200",
    texto: "Ficou tudo conforme combinado — meu closet sob medida ficou perfeito."
  },
  {
    nome: "Ana Paula Souza",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=faces&fit=crop&w=200&h=200",
    texto: "Profissionalismo e qualidade em cada detalhe. Meu home theater ficou incrível!"
  },
  {
    nome: "Lucas Fernandes",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=faces&fit=crop&w=200&h=200",
    texto: "Os móveis sob medida ficaram lindos, todos os detalhes foram perfeitos."
  },
  {
    nome: "Fernanda Costa",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=faces&fit=crop&w=200&h=200",
    texto: "Atendimento impecável, entrega rápida e móveis de altíssima qualidade."
  },
  {
    nome: "Rafael Gomes",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=faces&fit=crop&w=200&h=200",
    texto: "O design e acabamento ficaram incríveis. Recomendo 100%!"
  }
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="w-full py-20 bg-[#F8F2EC]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-[#5A1F1A] mb-12"
        >
          O que dizem nossos clientes
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {depoimentos.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center"
            >
              <img
                src={d.img}
                alt={d.nome}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="font-semibold text-xl text-[#5A1F1A] mb-2">{d.nome}</h3>
              <p className="text-[#5A1F1A]/80 leading-relaxed">{d.texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
