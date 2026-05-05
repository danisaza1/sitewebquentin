"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Video } from "lucide-react";

const methods = [

  {
    title: "Weck Method", // Asterisco añadido
    description:
      "C'est une méthode d'entraînement centrée sur la mobilité et la performance naturelle du corps.",
    details:
      "La Weck Method est une approche d’entraînement centrée sur la mobilité et la performance naturelle du corps. Basée sur la Spinal Engine Theory*, elle développe coordination, stabilité et efficacité à travers des mouvements spiraux et rythmés. En travaillant avec des outils comme le rope flow ou le RMT club, on apprend à générer de la puissance depuis le centre du corps.",
    footnote:
      "Selon la Spinal Engine Theory, le mouvement humain prend sa source dans la colonne vertébrale. Chaque rotation, chaque pas, chaque geste découle de la mobilité du tronc. En libérant cette dynamique, on améliore coordination, puissance et efficacité du mouvement. Le corps retrouve son rythme naturel et son alignement.",
    video: "/rope.mp4",
  },
  {
    title: "Rope Flow",
    description:
      "Entraînement dynamique avec cordes pour coordination et endurance. C'est une méditation en mouvement.",
    details:
      "Le rope flow est un outil d’entraînement complet qui améliore la mobilité, la posture et la coordination. Grâce au mouvement continu de la corde, on renforce les connexions neuromusculaires et on affine la conscience du corps. Idéal pour s’échauffer, se recentrer et préparer le corps à l’effort.",
    video: "/weck.mp4",
  },
];

const About: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<number | null>(null);

  return (
    <section id="about" className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto items-center">
        {/* Sobre mí */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold mb-4">À propos de moi</h3>
          <p className="text-justify">
            Je m’appelle Quentin. Maître-nageur depuis plus de six ans, j’ai
            toujours été fasciné par la façon dont le corps apprend et s’adapte.
            Ma pratique m’a conduit vers la mobilité, le rope flow et la Weck
            Method, des approches qui m’ont permis de développer mes qualités
            athlétiques et ma conscience corporelle. En 2024, j’ai obtenu un CQP
            Instructeur Fitness pour approfondir ma capacité à guider chacun
            dans sa pratique, en sécurité et en confiance. Dans mes séances on y
            apprend à écouter son corps, à en comprendre les signaux, à trouver
            l’équilibre entre ancrage et mouvement.
          </p>
        </motion.div>

        {/* Métodos */}
        <div className="flex gap-6 mt-12">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white text-justify rounded-xl shadow-lg hover:shadow-2xl cursor-pointer transform hover:scale-105 transition-transform"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => setSelectedMethod(index)}
            >
              <h4 className="text-xl font-semibold mb-2">{method.title}</h4>
              <p>{method.description}</p>
              <br />
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[400px] object-cover rounded-4xl  border border-gray-200"
              >
                <source src={method.video} type="video/mp4" />
              </video>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal emergente con fondo difuminado */}
      <AnimatePresence>
        {selectedMethod !== null && (
          <motion.div
            className="fixed inset-0 flex  text-justify items-center justify-center bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMethod(null)}
          >
            <motion.div
              className="bg-white p-8 rounded-xl max-w-lg mx-4 relative shadow-xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="text-2xl font-bold mb-4">
                {methods[selectedMethod].title}
              </h4>
              <p className="mb-4">{methods[selectedMethod].details}</p>

              {/* Footnote opcional */}
              {methods[selectedMethod].footnote && (
                <p className="text-sm text-gray-500 italic mt-2">
                  {methods[selectedMethod].footnote}
                </p>
              )}

              <button
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                onClick={() => setSelectedMethod(null)}
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
