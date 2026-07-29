"use client";
import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, Users, Waves, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Coaching Individuel",
    icon: <Dumbbell className="w-7 h-7 text-white" />,
    description: "Un accompagnement sur mesure pour transformer votre potentiel athlétique.",
    items: [
      "Préparation physique spécifique",
      "Correction posturale (Weck Method)",
      "Flow & Mobilité articulaire",
      "Planification d'entraînement privé"
    ],
    color: "from-orange-500 to-orange-600",
    delay: 0.1
  },
  {
    title: "Cours Collectifs",
    icon: <Users className="w-7 h-7 text-white" />,
    description: "L'énergie du groupe alliée à l'expertise technique pour progresser ensemble.",
    items: [
      "Sessions dynamiques de Rope Flow",
      "Renforcement fonctionnel",
      "Cardio & HIIT haute intensité",
      "Motivation et esprit de communauté"
    ],
    color: "from-blue-500 to-blue-600",
    delay: 0.2
  },
  {
    title: "Clubs & Natation",
    icon: <Waves className="w-7 h-7 text-white" />,
    description: "Optimisation de la performance aquatique via la Spinal Engine Theory.",
    items: [
      "PPG spécifique nageurs (à sec)",
      "Analyse technique vidéo",
      "Ateliers Weck Method pour clubs",
      "Stages de perfectionnement"
    ],
    color: "from-cyan-500 to-cyan-600",
    delay: 0.3
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-brand-dark relative overflow-hidden">
      {/* Luces de fondo decorativas para profundidad */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-500 font-bold tracking-widest uppercase text-sm"
          >
            Expertise & Performance
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mt-3 text-white"
          >
            Mes Services de Coaching
          </motion.h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="glass-card p-10 rounded-4xl flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center mb-8 shadow-lg shadow-black/20`}>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-4 mb-10 grow">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className="group flex items-center justify-center w-full py-4 bg-zinc-800 hover:bg-orange-600 rounded-xl text-white font-bold transition-all duration-300"
              >
                En savoir plus
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Banner de CTA Inferior */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 p-1 bg-linear-to-r from-orange-600 to-orange-400 rounded-[2.5rem]"
        >
          <div className="bg-zinc-950 rounded-[2.4rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-white mb-2">Prêt à redéfinir vos limites ?</h3>
              <p className="text-zinc-400">Réservez votre première séance d'évaluation gratuite dès maintenant.</p>
            </div>
            <a 
              href="#contact"
              className="px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 shadow-xl"
            >
              DÉMARRER MAINTENANT
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;