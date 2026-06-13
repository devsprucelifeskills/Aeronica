import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Industries from "@/components/Industries";
import WhyAeronica from "@/components/WhyAeronica";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-midnight">
      <Header />
      <Hero />
      <About />
      <Solutions />
      <Industries />
      <WhyAeronica />
      <Clients />
      <Products />
      <Process />
      <Contact />
    </main>
  );
}
