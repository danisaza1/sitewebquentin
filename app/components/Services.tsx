"use client";
import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, Users, WavesLadder } from "lucide-react"; 

const services = [
  {
    title: "Cours individuels",
    icon: <Dumbbell className="w-8 h-8 text-orange-500" />,
    items: ["Préparation physique", "Weck Method", "Rope Flow", "Sur mesure"],
    color: "border-t-orange-500"
  },
  {
    title: "Cours collectifs",
    icon: <Users className="w-8 h-8 text-blue-500" />,
    items: ["Sessions dynamiques", "Motivation de groupe", "Renforcement", "Endurance"],
    color: "border-t-blue-500"
  },
  {
    title: "Clubs & Natation",
    icon: <WavesLadder   className="w-8 h-8 text-cyan-500" />,
    items: ["Préparation spécifique", "Technique de nage", "Performance club", "Analyse vidéo"],
    color: "border-t-cyan-500"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Mes Services</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`bg-gray-50 p-8 rounded-2xl shadow-sm border-t-4 ${service.color} transition-all`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Sección de Video de demostración */}
        <div className="mt-20 flex flex-col md:flex-row items-center gap-12 bg-gray-900 rounded-3xl overflow-hidden text-white">
          <div className="md:w-1/2">
            <video autoPlay loop muted playsInline className="w-full h-[400px] object-cover">
              <source src="/video-entrenamiento.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="md:w-1/2 p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6">L'efficacité par le mouvement</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Chaque séance est une opportunité de redécouvrir votre potentiel. Que ce soit dans l'eau ou en salle, mon objectif est votre progression sécurisée.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;