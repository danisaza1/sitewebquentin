import React from 'react';
import { Target as TargetIcon, RefreshCw, Hand } from 'lucide-react';

interface TargetItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const TARGET_DATA: TargetItem[] = [
  {
    id: 'performance',
    title: 'Nageurs cherchant performance',
    description: 'Optimisez votre technique, gagnez en puissance et améliorez vos chronos grâce à un suivi sur-mesure.',
    icon: TargetIcon,
  },
  {
    id: 'recovery',
    title: 'Sportifs en reprise',
    description: 'Revenez à votre meilleur niveau en douceur après une pause ou une blessure, sans risquer la récidive.',
    icon: RefreshCw,
  },
  {
    id: 'pain_mobility',
    title: 'Douleurs ou manque de mobilité',
    description: 'Retrouvez le plaisir de bouger sans gêne grâce à des exercices aquatiques adaptés et soulageants.',
    icon: Hand,
  },
];

export default function Target() {
  return (
    <section className="py-24 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-wide text-orange-600 uppercase">
            Accompagnement ciblé
          </p>
          <h2 className="text-4xl font-extrabold text-black mt-3 tracking-tight">
            Pour qui ?
          </h2>
          <p className="text-black mt-5 text-xl leading-relaxed opacity-80">
            Un programme adapté à chaque objectif, que ce soit pour la performance ou le bien-être au quotidien.
          </p>
        </div>

        {/* Cards */}
        <ul className="grid md:grid-cols-3 gap-8 text-black">
          {TARGET_DATA.map(({ id, title, description, icon: Icon }) => (
            <li 
              key={id} 
              className="group h-full bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-8 border border-orange-200 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                <Icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-black">
                {title}
              </h3>

              <p className="text-sm leading-relaxed opacity-90 max-w-xs mx-auto">
                {description}
              </p> {/* Corregido: etiqueta </p> cerrada correctamente */}
            </li>
          ))}
        </ul>

       
      </div>
    </section>
  );
}