import { motion } from "framer-motion";
import Pricing from "../components/pricing";

const PricingSection = () => {
  return (
    <div
      id="pricing"
      className="w-full flex relative items-center justify-center bg-[#fffef1] text-[#1b1b1b]"
    >
      <video
        src="/img/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full top-0 left-0 z-0 object-cover"
      />
      <div className="flex relative z-20 flex-col gap-16 items-center justify-between w-[90%] lg:w-[80%] py-20">
        <div className="flex flex-col items-center w-full gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#1b1b1b] text-center lg:text-5xl text-[32px] font-bold"
          >
            Pricing Plans
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-center font-medium font-mono-custom text-greyco-primary-100"
          >
            We offer a range of flexible and affordable pricing plans to suit
            your needs. All our plans include high-speed internet, a comfortable
            and air-conditioned environment, and access to our supportive
            on-site staff.
          </motion.p>
        </div>
        <div className="flex items-center justify-center w-full">
          <Pricing />
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
