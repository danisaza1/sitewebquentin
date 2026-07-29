import type { NextPage } from "next";
import Header from "../app/components/Header";
import Hero from "../app/components/Hero";
import About from "../app/components/About";
import FAQs from "../app/components/FAQ";
import Footer from "../app/components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Proof from "./components/Proof";
import Pourqui from "./components/Target";
import Results from "./components/Results";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Proof />
        <Pourqui />
        <Services />
        {/* <Results /> */}
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
