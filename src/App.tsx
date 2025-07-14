import Accordion from "./components/Accordion";
import Benefits from "./components/Benefits";
import FeatureCarousel from "./components/FeatureCarousel";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PopularCategories from "./components/PopularCategories";
import StepsSection from "./components/StepsSection";
import TestimonialSection from "./components/TestimonialsSection";
import WhySell from "./components/WhySell";

function App() {
  return (
    <div className="flex mx-0  min-h-screen max-w-screen overflow-x-hidden flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <WhySell />
      <Benefits />
      <Accordion />
      <FeatureCarousel />
      <StepsSection />
      <PopularCategories />
      <TestimonialSection />
    </div>
  );
}

export default App;
