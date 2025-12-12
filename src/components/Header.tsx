import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Início", path: "/" },
    { label: "Sobre", path: "/sobre" },
    { label: "Projetos", path: "/projetos" },
  ];

  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" },
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-[#e6d6c7] text-[#7A2E24] shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <img src="/Logo.jpeg" alt="Móveis Mello" className="w-28 h-auto" />
          <span className="font-semibold text-xl tracking-wide">
            Móveis Mello
          </span>
        </motion.div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {links.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Link
                to={item.path}
                className="hover:opacity-70 transition"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* BOTÃO WHATSAPP */}
        <motion.a
          href="https://wa.me/555591200892"
          target="_blank"
          className="hidden md:flex items-center gap-2 bg-[#7A2E24] text-white px-5 py-2 rounded-full shadow"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <FaWhatsapp size={20} />
          WhatsApp
        </motion.a>

        {/* MOBILE ICON */}
        <button
          className="md:hidden text-[#7A2E24]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-[#F5EDE4] px-6 pb-6 overflow-hidden"
          >
            <nav className="flex flex-col gap-4 text-lg font-medium">
              {links.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href="https://wa.me/555591200892"
                target="_blank"
                className="flex items-center gap-2 bg-[#7A2E24] text-white px-5 py-2 rounded-full shadow mt-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp size={20} />
                WhatsApp
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
