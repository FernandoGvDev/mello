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
      titulo: "Cozinhas Sob Medida",
      desc: "Cozinhas sob medida com projeto personalizado, aproveitando cada espaço com funcionalidade e sofisticação."
    },
    {
      icon: <LuBedDouble size={34} />,
      titulo: "Dormitórios e Closets Sob Medida",
      desc: "Móveis sob medida para dormitórios e closets, unindo conforto, organização e design exclusivo."
    },
    {
      icon: <LuMonitor size={34} />,
      titulo: "Painéis e Home Theater",
      desc: "Painéis e home theaters sob medida, integrando tecnologia, estética e praticidade para sua sala."
    },
    {
      icon: <LuBriefcase size={34} />,
      titulo: "Escritórios Sob Medida",
      desc: "Projetos de móveis sob medida para escritórios, home offices e ambientes corporativos."
    },
    {
      icon: <LuDoorOpen size={34} />,
      titulo: "Ambientes Comerciais",
      desc: "Móveis sob medida para lojas, consultórios e espaços comerciais, desenvolvidos conforme a necessidade do negócio."
    }
  ];

  return (
    <section id="servicos" className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-[#7A2E24] mb-14 text-center"
        >
          Serviços de Móveis Sob Medida
        </motion.h2>

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
              <div className="text-[#7A2E24] group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

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
