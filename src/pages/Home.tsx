import { lazy } from "react";
import Login from "./Login";
const Accordion = lazy(() => import("../components/Accordion"));
const Benefits = lazy(() => import("../components/Benefits"));
const FeatureCarousel = lazy(() => import("../components/FeatureCarousel"));
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
const PopularCategories = lazy(() => import("../components/PopularCategories"));
const StepsSection = lazy(() => import("../components/StepsSection"));
const TestimonialSection = lazy(
  () => import("../components/TestimonialsSection")
);
const WhySell = lazy(() => import("../components/WhySell"));

function Home() {
  return (
    <div className="flex mx-0 overflow-y-hidden min-h-screen max-w-screen overflow-x-hidden flex-col items-center justify-center">
      <Navbar />
      <Hero />

      <WhySell />
      <Benefits />
      <Accordion />
      <FeatureCarousel />
      <StepsSection />
      <PopularCategories />
      <TestimonialSection />

      {/* <Login /> */}
      {/* <OTPPage /> */}
      <Footer />
    </div>
  );
}

export default Home;
