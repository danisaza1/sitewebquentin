"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white" >
      <div className="max-w-4xl mx-auto">
        {/* Encabezado de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Vous avez encore des questions ?</h2>
          <p className="text-gray-600">
            Je suis là pour vous répondre et vous guider.
            <br/>
           Je suis impatient de vous aider à atteindre vos objectifs de fitness et de bien-être !
          </p>
        </div>

        <motion.div 
          className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form 
            action="https://formspree.io/f/mjkgrkqk" 
            method="POST"
            className="grid grid-cols-1 gap-6"
          >
            {/* Nombre */}
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-semibold text-gray-700">Nom</label>
              <input
                type="text"
                id="name"
                name="sender-name"
                placeholder="Votre nom"
                className="p-4 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold text-gray-700">Courriel</label>
              <input
                type="email"
                id="email"
                name="sender-email"
                placeholder="votre@email.com"
                className="p-4 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                required
              />
            </div>

            {/* Mensaje */}
            <div className="flex flex-col">
              <label htmlFor="mensaje" className="mb-2 font-semibold text-gray-700">Message</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                placeholder="Comment puis-je vous aider ?"
                className="p-4 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                required
              ></textarea>
            </div>

            {/* Botón de envío */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-500 shadow-lg shadow-orange-200 transition-colors"
            >
              Envoyer le message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

