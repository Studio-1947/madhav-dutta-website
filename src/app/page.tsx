import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AgendaIntro from "@/components/AgendaIntro";
import Strands from "@/components/Strands";
import Manifesto from "@/components/Manifesto";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <AgendaIntro />
        <Strands />
        <Manifesto />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
