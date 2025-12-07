import { motion } from "framer-motion";
import { 
  LuLayoutDashboard, 
  LuBedDouble, 
  LuDoorOpen, 
  LuMonitor, 
  LuBriefcase 
} from "react-icons/lu";

export default function Servicos() {
  const servicos = [
    {
      icon: <LuLayoutDashboard size={34} />,
      titulo: "Cozinhas Planejadas",
      desc: "Projetos sofisticados, funcionais e feitos sob medida para transformar o coração da sua casa."
    },
    {
      icon: <LuBedDouble size={34} />,
      titulo: "Dormitórios e Closets",
      desc: "Ambientes personalizados para conforto, organização e elegância atemporal."
    },
    {
      icon: <LuMonitor size={34} />,
      titulo: "Painéis e Home Theater",
      desc: "Soluções modernas e integradas para salas e áreas de entretenimento."
    },
    {
      icon: <LuBriefcase size={34} />,
      titulo: "Escritórios Sob Medida",
      desc: "Funcionalidade e sofisticação para home office ou ambientes corporativos."
    },
    {
      icon: <LuDoorOpen size={34} />,
      titulo: "Ambientes Comerciais",
      desc: "Projetos completos para lojas, consultórios e espaços profissionais."
    }
  ];

  return (
    <section id="servicos" className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-[#7A2E24] mb-14 text-center"
        >
          Nossos Serviços
        </motion.h2>

        {/* LISTA DE SERVIÇOS */}
        <div className="grid md:grid-cols-2 gap-12">
          {servicos.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="flex gap-5 items-start group"
            >
              {/* ÍCONE */}
              <div className="text-[#7A2E24] group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* TEXTOS */}
              <div>
                <h3 className="text-xl font-semibold text-[#2A1A14] mb-1">
                  {item.titulo}
                </h3>
                <p className="text-[#2A1A14]/80 leading-relaxed text-[17px]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
