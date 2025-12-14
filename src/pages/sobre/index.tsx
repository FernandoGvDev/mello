import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaCogs, FaWhatsapp } from "react-icons/fa";

const IMAGES = {
  hero: "/banner.jpeg", // imagem do fundo do hero (oficina / CNC)
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" } }),
};

export default function Sobre() {
  useEffect(() => {
    // pequena melhoria: rolagem ao topo ao entrar na página
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="w-full text-gray-900">
      <Hero />
      <SectionContainer>
        <SobreEmpresa />
        <Processo />
        <MaquinasEAcabamento />
        <Equipe />
      </SectionContainer>
      <CTA />
    </main>
  );
}

/* -------------------------
   Helpers / Small Layouts
   ------------------------- */

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-20 text-center">
      {children}
    </section>
  );
}


/* -------------------------
   HERO
   ------------------------- */

function Hero() {
  return (
    <header
      className="relative w-full h-[56vh] md:h-[64vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${IMAGES.hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/40 to-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Sobre a Móveis Mello</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Tecnologia, Projeto 3D e acabamentos industriais para móveis sob medida de alta precisão.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="https://wa.me/555591200892"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#00a86b] hover:bg-[#0f8f5f] transition px-6 py-3 rounded-full font-medium shadow-lg"
          >
            <FaWhatsapp />
            Fale com um especialista
          </a>
        </div>
      </motion.div>

      {/* subtle parallax glow */}
      <div className="absolute right-10 bottom-8 w-44 h-44 bg-[#00a86b]/10 rounded-full blur-3xl" />
    </header>
  );
}

/* -------------------------
   SOBRE (texto + stats)
   ------------------------- */

function SobreEmpresa() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto"
    >
      <motion.h2
        variants={fadeUp as any}
        custom={1}
        className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900"
      >
        Compromisso e confiança em cada etapa do seu projeto
      </motion.h2>

      <motion.p
        variants={fadeUp as any}
        custom={2}
        className="text-gray-800 leading-relaxed text-lg"
      >
        Há décadas, a{" "}
        <span className="font-semibold text-[#7A2E24]">
          Móveis Mello
        </span>{" "}
        entrega ambientes que unem beleza, durabilidade e um padrão de qualidade
        que gera segurança para quem contrata. Cada projeto é conduzido com cuidado,
        transparência e responsabilidade — do primeiro atendimento à instalação final —
        para que você tenha a tranquilidade de escolher uma empresa confiável e presente
        em cada detalhe.
      </motion.p>

      <motion.div
        variants={fadeUp as any}
        custom={3}
        className="mt-8 grid grid-cols-3 gap-4"
      >
        <Stat label="Experiência" value="45+" />
        <Stat label="Projetos Entregues" value="1.200+" />
        <Stat label="Garantia" value="1 ano" />
      </motion.div>
    </motion.div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#0f1113]/10 rounded-lg p-4 text-center border border-[#7A2E24] shadow-sm">
      <div className="text-2xl font-semibold text-gray-950">{value}</div>
      <div className="text-xs text-gray-800 mt-1">{label}</div>
    </div>
  );
}

/* -------------------------
   PROCESSO (timeline)
   ------------------------- */

function Processo() {
  const etapas = [
    { title: "Entendimento das Necessidades", desc: "Escutamos suas ideias e definimos juntos o que é prioridade." },
    { title: "Desenho Personalizado", desc: "Criamos a solução ideal para o espaço, estilo e uso desejado." },
    { title: "Produção Cuidadosa", desc: "Cada peça é feita com atenção total aos detalhes." },
    { title: "Verificação Completa", desc: "Revisamos tudo para garantir que o resultado esteja perfeito." },
    { title: "Entrega & Instalação", desc: "Montagem organizada, limpa e pontual, com acompanhamento total." },
  ];

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
      <motion.h3 variants={fadeUp as any} custom={0} className="text-xl font-semibold">
        Como cuidamos do seu projeto
      </motion.h3>

      <div className="grid md:grid-cols-5 gap-6">
        {etapas.map((e, i) => (
          <motion.div
            key={e.title}
            variants={fadeUp as any}
            custom={i + 1}
            className="bg-gray-950 p-5 rounded-xl border border-[#7A2E24] shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gray-100 text-[#7A2E24] p-2 rounded-md">
                <FaCogs />
              </div>
              <div className="text-sm text-gray-50 font-semibold">{e.title}</div>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* -------------------------
   MAQUINAS E ACABAMENTO
   ------------------------- */

function MaquinasEAcabamento() {
  return (
   <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="flex justify-center"
>
  <div className="max-w-2xl text-center">
    <motion.h3
      variants={fadeUp as any}
      custom={0}
      className="text-xl text-gray-950 font-semibold mb-3"
    >
      Qualidade que você vê e sente
    </motion.h3>

    <motion.p
      variants={fadeUp as any}
      custom={1}
      className="text-gray-800 leading-relaxed mb-4"
    >
      Cada móvel é produzido com cuidado, atenção e compromisso. Isso garante
      encaixes perfeitos, portas alinhadas, superfícies lisas e um acabamento
      que realmente se destaca — tanto na aparência quanto na durabilidade.
    </motion.p>

    <motion.ul
      variants={fadeUp as any}
      custom={2}
      className="list-none space-y-2 text-gray-800"
    >
      <li>• Materiais selecionados</li>
      <li>• Acabamento refinado e duradouro</li>
      <li>• Foco extremo na harmonia visual</li>
    </motion.ul>
  </div>
</motion.div>

  );
}

/* -------------------------
   EQUIPE
   ------------------------- */

function Equipe() {
  const membros = [
    {
      titulo: "Profissionais experientes",
      descricao: "Equipe dedicada ao cuidado em cada etapa do projeto",
    },
    {
      titulo: "Especialistas em design",
      descricao: "Transformamos sua ideia em um projeto funcional e harmonioso",
    },
    {
      titulo: "Equipe de montagem",
      descricao: "Instalação precisa, limpa e organizada no seu ambiente",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-10"
    >
      <motion.h3
        variants={fadeUp as any}
        custom={0}
        className="text-xl font-semibold text-gray-800"
      >
        Quem cuida do seu projeto
      </motion.h3>

      {/* Container */}
      <div className="relative">
        {/* Linha */}
        <div className="absolute left-3 md:left-0 top-0 md:top-1/2 md:-translate-y-1/2 h-full md:h-px w-px md:w-full bg-white/10" />

        <div className="flex flex-col md:flex-row gap-10 md:gap-0">
          {membros.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp as any}
              custom={i + 1}
              className="relative md:w-1/3 pl-10 md:pl-0 text-left md:text-center"
            >
              {/* Número */}
              <span className="text-xs text-gray-800 tracking-widest">
                0{i + 1}
              </span>

              <h4 className="mt-2 font-semibold text-gray-800">
                {item.titulo}
              </h4>

              <p className="mt-1 text-sm text-gray-600 max-w-xs md:mx-auto">
                {item.descricao}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* -------------------------
   CTA FINAL
   ------------------------- */

function CTA() {
  return (
    <footer className="w-full bg-linear-to-b from-[#070707] to-[#0b0b0b] py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl md:text-3xl font-semibold text-white">
          Pronto para um projeto técnico e sob medida?
        </motion.h3>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Solicite um orçamento técnico detalhado. Enviamos estudo de viabilidade e projeto 3D.</p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://wa.me/555591200892"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#7A2E24] px-6 py-3 rounded-full font-medium hover:bg-[#0f8f5f] transition shadow-lg"
          >
            <FaWhatsapp />
            Solicitar orçamento
          </a>
        </div>
      </div>
    </footer>
  );
}
