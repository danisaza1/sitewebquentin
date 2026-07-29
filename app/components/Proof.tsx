import Image from "next/image";

const testimonials = [
  {
    name: "Lucas",
    text: "J’ai gagné en mobilité et en puissance en seulement 3 semaines.",
    img: "/client1.jpg",
  },
  {
    name: "Marie",
    text: "Approche unique, très différente du fitness classique.",
    img: "/client2.jpg",
  },
];

export default function Proof() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10">Ils m'ont fait confiance</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-lg"
          >
            <Image
              src={t.img}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-orange-500"
              width={64}
              height={64}
              alt={t.name}
            />
            <p className="italic text-zinc-300">"{t.text}"</p>{" "}
            {/* Texto zinc-300 */}
            <p className="mt-4 font-bold text-orange-500">{t.name}</p>{" "}
            {/* Nombre en naranja */}
          </div>
        ))}
      </div>
    </section>
  );
}
