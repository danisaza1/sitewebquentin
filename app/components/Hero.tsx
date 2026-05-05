"use client";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex flex-col justify-center items-center text-center text-white overflow-hidden">
      {/* Video de fondo optimizado */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/tu-video-hero.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay gradiente para legibilidad */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-gray-900 z-10"></div>

      <div className="relative z-20 px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Transformez votre <span className="text-orange-500">corps</span> et <span className="text-blue-400">esprit</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Une approche ludique et fluide, axée sur la mobilité et la performance naturelle.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#services" className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
            Commencer l'entraînement
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-3xl animate-bounce text-white/70 hover:text-white"
      >
        <FaArrowDown />
      </motion.a>
    </section>
  );
};

export default Hero;