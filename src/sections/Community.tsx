import { motion, Variants } from "framer-motion";
import SectionContainer from "../layout/sectionContainer";
const Community = () => {
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

  return (
    <SectionContainer>
      <div className="w-full h-full bg-greyco-secondary flex flex-col items-center justify-center gap-16 p-4 py-16">
        {" "}
        <motion.div
          className="w-full flex lg:flex-row-reverse flex-col items-center justify-between gap-4 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="lg:w-1/2 h-[40rem] w-full bg-greyco-secondary rounded-3xl flex items-center justify-center"
            variants={stepRightVariants}
          >
            <img
              src="/img/community.webp"
              alt="Community image"
              className="w-[90%] h-[90%] rounded-xl overflow-hidden object-cover"
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2 w-full flex items-center justify-center lg:justify-end"
            variants={stepLeftVariants}
          >
            <div className="lg:w-[80%] w-[90%] flex flex-col gap-6 items-start justify-center">
              <motion.h1
                className="text-white lg:text-5xl text-[32px] font-bold"
                variants={headerVariants}
              >
                Our Community
              </motion.h1>
              <h1 className="text-white text-start text-base lg:text-[22px] font-normal">
                Our Community At Grey Co-Lab, we believe in the power of
                community. We foster a collaborative and inspiring environment
                where you can connect with like-minded individuals, share ideas,
                and grow together. Join us for our regular community events,
                including:
              </h1>

              <ul className="text-white flex flex-col items-start list-disc text-start list-inside text-base lg:text-[22px] font-normal">
                <li>
                  Social Hour: Unwind and network with fellow members in a
                  relaxed and friendly atmosphere.
                </li>
                <li>
                  Community Hangouts: Participate in engaging discussions,
                  workshops, and collaborative projects.
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full flex lg:flex-row flex-col items-center justify-between gap-4 lg:gap-8"
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
              src="/img/creator.jpg"
              alt="Creator Lab"
              className="w-[90%] h-[90%] rounded-xl overflow-hidden object-cover"
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2 w-full flex items-center justify-center lg:justify-start"
            variants={stepRightVariants}
          >
            <div className="lg:w-[80%] w-[90%] flex flex-col gap-6 items-start justify-center">
              <motion.h1
                className="text-white lg:text-5xl text-[32px] font-bold"
                variants={headerVariants}
              >
                Creator's Lab
              </motion.h1>
              <h1 className="text-white text-start lg:text-[22px] text-base font-normal">
                Our Creator's Lab is a dedicated space for content creators,
                providing the tools and environment you need to bring your ideas
                to life. More details on equipment and booking will be available
                soon.
              </h1>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Community;
