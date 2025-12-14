import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { dadosEmpresa } from "../assets/dados";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2a0d0b] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Logo e Descrição */}
        <div className="flex flex-col gap-4">
          <img
            src="/Logo.jpeg"
            alt="Moveis Mello"
            className="w-19 rounded-2xl shadow-lg"
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
            <li><Link to="/" className="hover:text-white">Inicio</Link></li>
            <li><Link to="/projetos" className="hover:text-white">Projetos</Link></li>
            <li><Link to="/sobre" className="hover:text-white">Sobre</Link></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contato</h3>
          <ul className="flex flex-col gap-3 text-white/80">
            {/* Telefone */}
            <li>
              📱 Telefone:{" "}
              <span className="text-white">
                {dadosEmpresa.telefone}
              </span>
            </li>

            {/* Endereços */}
            <li>
              📍 Endereços:
              <div className="flex flex-col mt-2 text-white/70">
                {dadosEmpresa.enderecos.map((item, index) => (
                  <span key={index}>
                    <strong>{item.label}:</strong> {item.endereco}
                  </span>
                ))}
              </div>
            </li>

            {/* Redes Sociais */}
            <li className="flex items-center gap-4 mt-4">
              <a
                href="https://www.instagram.com/moveismello1/"
                target="_blank"
                className="text-white hover:text-[#cfa7a4] transition"
              >
                <FaInstagram size={26} />
              </a>

              <a
                href={dadosEmpresa.whatsapp.link}
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