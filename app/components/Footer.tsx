import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-12 text-center border-t border-white/10">
      {" "}
      <p className="mb-4">
        © {new Date().getFullYear()} Mon Coaching Sportif — Tous droits
        réservés.
      </p>
      <a
        href="#hero"
        className="inline-flex items-center px-6 py-3 bg-white text-orange-500 font-semibold rounded-full hover:bg-gray-200 transition"
      >
        <FaArrowUp className="mr-2" /> Revenir en haut
      </a>
    </footer>
  );
}
