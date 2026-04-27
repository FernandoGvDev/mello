"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.from(".header-item", {
      y: -30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f5e6d3]/80 backdrop-blur-md shadow-lg py-2"
          : "bg-[#f5e6d3] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 header-item">
          <Image
            src="/logo.svg"
            alt="Móveis Planejados Mello"
            width={45}
            height={45}
          />
          <span className="text-lg md:text-xl font-semibold text-[#8b0000]">
            Móveis Planejados Mello
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 header-item">
          {[
            { name: "Início", href: "/" },
            { name: "Sobre", href: "/sobre" },
            { name: "Projetos", href: "/projetos" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative group text-gray-800"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#8b0000] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3 header-item">
          {/* WhatsApp */}
          <a
            href="https://wa.me/555591200892"
            target="_blank"
            className="flex items-center gap-2 bg-[#8b0000] text-white px-4 py-2 rounded-full hover:scale-105 transition"
          >
            <FaWhatsapp className="animate-pulse" />
            Orçamento
          </a>

          {/* Social */}
          <a
            href="https://www.facebook.com/moveis.mello"
            target="_blank"
            className="p-2 rounded-full border border-[#8b0000] text-[#8b0000] hover:bg-[#8b0000] hover:text-white transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/moveismello1/"
            target="_blank"
            className="p-2 rounded-full border border-[#8b0000] text-[#8b0000] hover:bg-[#8b0000] hover:text-white transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-[#8b0000]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f5e6d3] px-6 py-6 flex flex-col gap-6 shadow-lg animate-fadeIn">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Início
          </Link>
          <Link href="/sobre" onClick={() => setIsOpen(false)}>
            Sobre
          </Link>
          <Link href="/projetos" onClick={() => setIsOpen(false)}>
            Projetos
          </Link>

          <a
            href="https://wa.me/555591200892"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-[#8b0000] text-white px-4 py-3 rounded-full"
          >
            <FaWhatsapp />
            Orçamento
          </a>

          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com/moveis.mello" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/moveismello1/" target="_blank">
              <FaInstagram />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
