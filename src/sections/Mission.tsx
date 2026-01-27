import { motion } from "framer-motion";
import SectionContainer from "../layout/sectionContainer";

const missionVisionData = [
  {
    title: "Our Mission",
    description:
      "To be an all-inclusive creative community hub in Calabar, Nigeria, providing a hybrid ecosystem for coworking, digital learning, and creative collaboration.",
    icon: "🎯",
  },
  {
    title: "Our Vision",
    description:
      "To empower professionals, creatives, and freelancers by providing the resources, community, and opportunities needed to thrive in the digital economy.",
    icon: "🚀",
  },
];

const Mission = () => {
  return (
    <SectionContainer id="mission">
      <div className="flex w-full items-center justify-center bg-greyco-secondary py-32">
        <div className="w-[90%] flex flex-col items-center justify-center gap-0">
          <div className="lg:w-[80%] w-full flex lg:flex-row flex-col items-stretch justify-between gap-6">
            {missionVisionData.map((item, index) => (
              <motion.div
                key={`item-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-[#1b1b1b] lg:w-[48%] w-full text-white px-8 py-10 rounded-[16px] flex flex-col items-start justify-start gap-6 border border-[#FFFFFF1A]"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  className="text-5xl"
                >
                  {item.icon}
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="text-2xl lg:text-3xl font-bold"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="text-base lg:text-lg leading-relaxed font-mono-custom text-[#BDBDBD]"
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Mission;
