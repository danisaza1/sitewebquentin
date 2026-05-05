import type { NextPage } from "next";
import Header from "../app/components/Header";
import Hero from "../app/components/Hero";
import About from "../app/components/About";
import FAQs from "../app/components/FAQ";
import Footer from "../app/components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main >
        <Hero />
        <About />
        <Services />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
