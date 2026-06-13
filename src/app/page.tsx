import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Industries from "@/components/Industries";
import WhyAeronica from "@/components/WhyAeronica";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Solutions />
      <Industries />
      <WhyAeronica />
      <Products />
      <Process />
      <Stats />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
