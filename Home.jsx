import Hero from "../components/Hero";
import About from "../components/About";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesSection />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <CTA />
    </>
  );
}

export default Home;