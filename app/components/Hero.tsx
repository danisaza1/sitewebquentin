"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background con Overlay Gradiente */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg2.png"
          alt="Coaching background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#09090b] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase border rounded-full border-orange-500/30 bg-orange-500/10 text-orange-400"
        >
          Performance, Mobilité & Bien-être
        </motion.span>
        
        <motion.h1
          className="text-5xl md:text-8xl font-black tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          MAÎTRISEZ VOTRE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
            MOUVEMENT
          </span>
        </motion.h1>

        <motion.p 
          className="mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Développez une puissance athlétique et une fluidité naturelle grâce à la Weck Method et au Rope Flow.
        </motion.p>

        <motion.div 
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.3)]"
          >
            Réserver un appel gratuit
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-zinc-800/50 hover:bg-zinc-800 text-white rounded-xl font-bold backdrop-blur-md border border-zinc-700 transition-all"
          >
            Découvrir la méthode
          </a>
        </motion.div>
      </div>
    </section>
  );
}