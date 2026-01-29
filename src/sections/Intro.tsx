import { motion, Variants } from "framer-motion";
import SectionContainer from "../layout/sectionContainer";

const Intro: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const stepLeftVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stepRightVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <SectionContainer id="how-it-works">
      <div className="w-full h-full bg-greyco-primary flex items-center justify-center">
        <div className="lg:w-[80%] w-[90%] flex flex-col items-center text-center gap-20 py-20">
          <motion.div
            className="w-full flex flex-col items-center justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h1
              className="text-white lg:text-5xl text-[32px] font-bold"
              variants={headerVariants}
            >
              The Grey-Co Lab Ecosystem
            </motion.h1>
            <motion.div variants={headerVariants}>
              <span className="text-base font-medium text-[#fffef1]">
                Grey Co-Lab is more than just a workspace; it’s a vibrant
                ecosystem built on three core pillars:
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full flex lg:flex-row flex-col items-center justify-between gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div
              className="lg:w-1/2 h-[40rem] w-full bg-greyco-secondary rounded-3xl flex items-center justify-center"
              variants={stepLeftVariants}
            >
              <img
                src="/img/cw-spaces.jpg"
                alt="Co working spaces"
                className="w-[90%] h-[90%] rounded-xl overflow-hidden object-cover"
              />
            </motion.div>
            <motion.div
              className="lg:w-1/2 w-full flex items-center justify-center lg:justify-end"
              variants={stepRightVariants}
            >
              <div className="lg:w-[80%] w-full flex flex-col gap-6 items-center lg:items-start justify-center">
                <motion.div
                  className="size-20 rounded-full bg-greyco-secondary flex items-center justify-center"
                  variants={iconVariants}
                >
                  <h1 className="text-4xl font-bold text-white">1</h1>
                </motion.div>
                <div className="flex flex-col lg:items-start items-center justify-center gap-4">
                  <span className="text-white text-[28px] lg:text-[44px] text-center lg:text-start font-bold">
                    Co-working Spaces
                  </span>
                  <span className="text-[#BDBDBD] font-mono-custom text-center lg:text-start text-base lg:text-[22px] font-normal">
                    Our flexible and fully-equipped workspaces are designed to
                    meet the needs of modern professionals. Whether you're a
                    freelancer, a remote worker, or part of a growing team, we
                    have a space that's right for you. Our offerings include
                    flexible desks, niche spaces for focused work, private
                    offices for teams, and versatile event spaces.
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full flex lg:flex-row-reverse flex-col items-center justify-between gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div
              className="lg:w-1/2 h-[40rem] w-full relative bg-greyco-secondary rounded-3xl flex items-center justify-center"
              variants={stepRightVariants}
            >
              <img
                className="absolute top-0 left-1/2 -translate-x-1/2"
                src="/img/coming-soon.png"
                width={300}
              />
              <img
                src="/img/learning-platform.jpg"
                alt="Learning platform"
                className="w-[90%] h-[90%] rounded-xl overflow-hidden object-cover"
              />
            </motion.div>
            <motion.div
              className="lg:w-1/2 w-full flex items-center lg:justify-start justify-center"
              variants={stepLeftVariants}
            >
              <div className="lg:w-[80%] w-full flex flex-col gap-6 lg:items-start items-center justify-center">
                <motion.div
                  className="size-20 rounded-full bg-greyco-secondary flex items-center justify-center"
                  variants={iconVariants}
                >
                  <h1 className="text-4xl font-bold text-white">2</h1>
                </motion.div>
                <div className="flex flex-col lg:items-start items-center justify-center gap-4">
                  <span className="text-white text-[28px] lg:text-[44px] text-center lg:text-start font-bold">
                    Learning Platform
                  </span>
                  <span className="text-[#BDBDBD] font-mono-custom text-center lg:text-start text-base lg:text-[22px] font-normal">
                    Stay ahead of the curve with our curated selection of
                    digital economy courses and certifications. Our platform is
                    designed to help you acquire new skills, grow your
                    knowledge, and increase your earning potential in the
                    fast-paced digital world.
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full flex lg:flex-row flex-col items-center justify-between gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div
              className="lg:w-1/2 h-[40rem] relative w-full bg-greyco-secondary rounded-3xl flex items-center justify-center"
              variants={stepLeftVariants}
            >
              <img
                className="absolute top-0 left-1/2 -translate-x-1/2"
                src="/img/coming-soon.png"
                width={300}
              />
              <img
                src="/img/dig-market.png"
                alt="Digital marketplace"
                className="w-[90%] h-[90%] rounded-xl overflow-hidden object-cover"
              />
            </motion.div>
            <motion.div
              className="lg:w-1/2 w-full flex items-center justify-center lg:justify-end"
              variants={stepRightVariants}
            >
              <div className="lg:w-[80%] w-full flex flex-col gap-6 items-center lg:items-start justify-center">
                <motion.div
                  className="size-20 rounded-full bg-greyco-secondary flex items-center justify-center"
                  variants={iconVariants}
                >
                  <h1 className="text-4xl font-bold text-white">3</h1>
                </motion.div>
                <div className="flex flex-col items-center lg:items-start justify-center gap-4">
                  <span className="text-white text-[28px] lg:text-[44px] text-center lg:text-start font-bold">
                    Digital Marketplace
                  </span>
                  <span className="text-[#BDBDBD] font-mono-custom text-center lg:text-start text-base lg:text-[22px] font-normal">
                    We connect talented African freelancers with a trusted
                    network of global opportunities. Our marketplace is a
                    gateway for you to showcase your skills, find meaningful
                    work, and build a successful freelance career.
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Intro;
