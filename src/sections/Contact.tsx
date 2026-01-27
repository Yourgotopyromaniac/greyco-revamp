import { motion, Variants } from "framer-motion";
import SectionContainer from "../layout/sectionContainer";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
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
      <div className="w-full h-full bg-[#fffef1] flex items-center justify-center">
        <div className="lg:w-[80%] w-[90%] flex flex-col items-center text-center gap-20 py-20">
          <motion.div
            className="w-full flex flex-col items-center justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h1
              className="text-[#1b1b1b] lg:text-5xl text-[32px] font-bold"
              variants={headerVariants}
            >
              Expert Support 24/7
            </motion.h1>
            <motion.div variants={headerVariants}>
              <span className="text-base font-medium font-mono-custom text-[#3f3f3f]">
                Contact us, our expert support team is available 24/7 to assist
                you.
              </span>
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
              className="lg:w-1/2 h-[40rem] w-full bg-greyco-secondary rounded-3xl flex items-center justify-center"
              variants={stepRightVariants}
            >
              <img
                src="/img/contact.jpg"
                alt="Contact image"
                className="w-[90%] h-[90%] rounded-xl overflow-hidden object-cover"
              />
            </motion.div>
            <motion.div
              className="lg:w-1/2 w-full flex items-center justify-center lg:justify-end"
              variants={stepLeftVariants}
            >
              <div className="lg:w-[80%] w-full flex flex-col gap-6 items-center lg:items-start justify-center">
                <motion.div
                  className="size-20 rounded-full bg-greyco-secondary flex items-center justify-center"
                  variants={iconVariants}
                >
                  <img src="/img/phone.svg" alt="phone icon" width={50} />
                </motion.div>
                <div className="flex flex-col lg:items-start items-center justify-center gap-4">
                  <span className="text-[#1b1b1b] text-center lg:text-start text-lg font-normal">
                    Hotline/WhatsApp: +234 707 044 2824
                  </span>
                  <Link to="https://instagram.com/greycolab" target="_blank">
                    <span className="text-[#1b1b1b] text-center lg:text-start hover:underline text-lg font-normal">
                      Instagram: @greycolab
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
