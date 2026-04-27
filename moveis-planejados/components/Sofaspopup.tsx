"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Sofaspopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
  const timer = setTimeout(() => {
    setVisible(true);
  }, 6000);

  return () => clearTimeout(timer);
}, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 right-4 left-4 md:left-auto md:w-[350px] bg-[#f5e6d3] shadow-xl rounded-2xl p-5 z-50"
        >
          {/* Close button */}
          <button
            onClick={() => setVisible(false)}
            className="absolute top-2 right-3 text-gray-600 hover:text-black text-lg"
          >
            ×
          </button>

          {/* Content */}
          <p className="text-[#1f2937] text-sm md:text-base mb-4">
            <strong>Ei!</strong> Você sabia que a Móveis Mello também produz sofás sob medida?
            Clique e saiba mais.
          </p>

          {/* CTA */}
          <Link
            href="/sofas"
            className="block text-center bg-[#8b0000] text-white py-2 rounded-full font-medium hover:scale-105 transition"
          >
            Ver sofás sob medida
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
