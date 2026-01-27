import { useEffect } from "react";
import NavigationLayout from "../layout/navigationLayout";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import PricingSection from "../sections/Pricing";
import Mission from "../sections/Mission";

const Home = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-x-hidden">
      <NavigationLayout showBanner={false} />
      <div className="flex w-full flex-col items-center gap-0 justify-start">
        <Hero />
        <Mission />
        <Intro />
        <PricingSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
