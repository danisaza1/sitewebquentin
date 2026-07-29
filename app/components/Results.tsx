export default function Results() {
  return (
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-10">Résultats concrets</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {[
          "Mobilité améliorée",
          "Réduction des douleurs",
          "Meilleure coordination",
        ].map((r, i) => (
          <div key={i} className="text-xl font-semibold">
            {r}
          </div>
        ))}
      </div>
    </section>
  );
}
