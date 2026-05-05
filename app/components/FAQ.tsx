"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Combien de temps dure une séance ?",
    answer: "Chaque séance dure environ 1 heure. Cela comprend un échauffement spécifique, le corps de séance adapté à vos objectifs et un retour au calme. Pour les clubs de natation, la durée peut être ajustée selon vos créneaux."
  },
  {
    question: "Faut-il avoir un niveau préalable en sport ou natation ?",
    answer: "Absolument pas. Mon approche est ludique et progressive. Que ce soit pour la Weck Method, le Rope Flow ou la natation, j'adapte l'intensité et la technique à votre condition physique actuelle."
  },
  {
    question: "Quels équipements sont nécessaires ?",
    answer: "Pour les séances terrestres, tout le matériel technique (Ropes, RMT Clubs, etc.) est fourni. Vous n'avez besoin que d'une tenue de sport confortable, d'un tapis de sol et d'une bouteille d'eau. Pour la natation, prévoyez votre équipement de bain classique."
  },
  {
    question: "Où se déroulent les séances ?",
    answer: "Les séances individuelles peuvent se faire à domicile, en extérieur ou en salle partenaire. Pour les cours collectifs et les clubs, je me déplace directement dans vos structures ou piscines."
  },
  {
    question: "Comment se déroule le premier contact ?",
    answer: "Nous commençons par un échange téléphonique gratuit pour discuter de vos antécédents, de vos objectifs et de vos éventuelles blessures. Cela me permet de créer un programme 100% personnalisé dès la première séance."
  },
  {
    question: "Intervenez-vous auprès des clubs de natation ?",
    answer: "Oui, je propose des interventions spécifiques pour les clubs : perfectionnement technique, préparation physique à sec (PPG) avec la Weck Method pour améliorer la puissance du tronc, ou accompagnement lors de stages intensifs."
  },
  {
    question: "Quels sont les avantages de la Weck Method et du Rope Flow ?",
    answer: "Ces méthodes améliorent la coordination, l'équilibre et la fluidité du mouvement. Elles sont particulièrement efficaces pour les nageurs car elles travaillent la rotation du buste et la puissance de la colonne vertébrale (Spinal Engine)."
  }
];

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Questions Fréquentes</h2>
          <p className="text-gray-600">Tout ce que vous devez savoir pour commencer votre transformation.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-gray-800 text-lg pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-orange-500"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default FAQs;