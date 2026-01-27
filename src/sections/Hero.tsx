import SectionContainer from "../layout/sectionContainer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isOn, setIsOn] = useState(false);
  const [hasFlickered, setHasFlickered] = useState(false);

  useEffect(() => {
    if (hasFlickered) return;

    const flickerSequence = [
      { delay: 800, state: false, duration: 0 },
      { delay: 300, state: true, duration: 100 },
      { delay: 150, state: false, duration: 200 },
      { delay: 250, state: true, duration: 120 },
      { delay: 180, state: false, duration: 180 },
      { delay: 220, state: true, duration: 100 },
      { delay: 130, state: false, duration: 150 },
      { delay: 200, state: true, duration: 0 },
    ];

    let currentTime = 0;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    flickerSequence.forEach((flicker) => {
      currentTime += flicker.delay;

      const timeout = setTimeout(() => {
        setIsOn(flicker.state);
      }, currentTime);

      timeouts.push(timeout);
    });

    const finalTimeout = setTimeout(() => {
      setHasFlickered(true);
    }, currentTime + 500);

    timeouts.push(finalTimeout);

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [hasFlickered]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2 + 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <SectionContainer id="home">
      <div className="w-full flex flex-col min-h-screen pb-20 items-end justify-center relative bg-[#fffef1]">
        <video
          src="/img/bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full top-0 left-0 z-0 object-cover"
        />
        <div className="lg:w-[90%] z-10 w-full h-full flex lg:flex-row flex-col lg:gap-0 gap-12 justify-between relative items-center lg:mt-32 mt-32">
          <div className="lg:w-[50%] relative lg:z-auto z-[20] w-[90%] flex flex-col lg:items-start items-center lg:-mt-28 mt-0 gap-10">
            <motion.h1
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              //@ts-ignore
              variants={textVariants}
              className="font-bold text-greyco-primary lg:text-start text-center lg:text-[84px] text-[52px] leading-none lg:pt-0 pt-12"
            >
              You're now in
              <br /> The Lab
            </motion.h1>
            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              //@ts-ignore
              variants={textVariants}
              className="text-base font-mono-custom lg:text-start text-center text-greyco-primary-100 font-medium lg:text-[20px] text-[16px] leading-snug"
            >
              Africa's Hybrid Hub for Coworking, Digital Learning & Creative
              Collaboration
            </motion.h2>
            <motion.h2
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              //@ts-ignore
              variants={textVariants}
              className="text-2xl font-bold shadow-text"
            >
              <span className="text-greyco-primary">WORK</span>{" "}
              <span className="text-[#ffff06]">LEARN</span>{" "}
              <span className="text-white">EARN</span>
            </motion.h2>
          </div>
          <div className="relative lg:absolute lg:w-[70%] w-full lg:h-[110vh] h-full flex items-center justify-center right-0 top-0 -translate-y-0 lg:top-1/2 lg:-translate-y-1/2">
            <img
              src={isOn ? "/img/bulb.png" : "/img/bulb-off.png"}
              alt="Bulb"
              className="w-full object-contain transition-opacity duration-75"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
