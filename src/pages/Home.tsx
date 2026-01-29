import { useEffect } from "react";
import { motion } from "framer-motion";
import NavigationLayout from "../layout/navigationLayout";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import PricingSection from "../sections/Pricing";
import Mission from "../sections/Mission";
import Contact from "../sections/Contact";
import Community from "../sections/Community";
import Banner from "../sections/Banner";

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
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed inset-0 bg-black z-[250] pointer-events-none origin-top"
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="fixed inset-0 bg-greyco-secondary z-[240] pointer-events-none origin-top"
      />
      <NavigationLayout />
      <div className="flex w-full flex-col items-center gap-0 justify-start">
        <Hero />
        <Banner />
        <Mission />
        <Intro />
        <Community />
        <PricingSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
