import CTASection from "../components/home/Ctasection";
import Destinations from "../components/home/Destinations";
import FloatingCTA from "../components/home/Floatingcta";
import Footer from "../components/common/Footer";
import Hero from "../components/home/Hero";
import JsonLd from "../components/home/Jsonld";
import Navbar from "../components/common/Navbar";
import Services from "../components/home/Services";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import WhyUs from "../components/home/Whyus";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Destinations />
        <WhyUs />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
