import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2a0d0b] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Logo e Descrição */}
        <div className="flex flex-col gap-4">
          <img
            src="/logo.png" // substitua pela logo real
            alt="Moveis Mello"
            className="w-36"
          />
          <p className="text-white/80 leading-relaxed">
            Há 45 anos produzindo móveis sob medida com tradição, qualidade e
            excelência para transformar ambientes em espaços únicos.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Navegação</h3>
          <ul className="flex flex-col gap-2 text-white/80">
            <li><a href="#servicos" className="hover:text-white">Serviços</a></li>
            <li><a href="#projetos" className="hover:text-white">Projetos</a></li>
            <li><a href="#sobre" className="hover:text-white">Sobre</a></li>
            <li><a href="#contato" className="hover:text-white">Contato</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contato</h3>
          <ul className="flex flex-col gap-3 text-white/80">
            <li>📞 WhatsApp: <span className="text-white">55 55 9120-0892</span></li>
            <li>📍 Atendemos toda a região</li>
            <li className="flex items-center gap-4 mt-4">
              <a
                href="https://www.instagram.com/moveismello1/"
                target="_blank"
                className="text-white hover:text-[#cfa7a4] transition"
              >
                <FaInstagram size={26} />
              </a>
              <a
                href="https://wa.me/555591200892"
                target="_blank"
                className="text-white hover:text-[#cfa7a4] transition"
              >
                <FaWhatsapp size={26} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Linha final */}
      <div className="text-center text-white/60 text-sm mt-10 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Moveis Mello — Todos os direitos reservados.
      </div>
    </footer>
  );
}
