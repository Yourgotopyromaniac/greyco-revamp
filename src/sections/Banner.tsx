import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <Marquee
      speed={60}
      gradient={false}
      autoFill={true}
      gradientColor="transparent"
      className="bg-white lg:py-16 py-8 border-y-4 border-black"
    >
      <span className="text-4xl font-bold text-greyco-primary mr-3">WORK</span>
      <span className="text-4xl font-bold text-[#1b1b1b] mx-3">•</span>
      <span className="text-4xl font-bold text-[#f4b444] mr-3">LEARN</span>
      <span className="text-4xl font-bold text-[#1b1b1b] mx-3">•</span>
      <span className="text-4xl font-bold text-greyco-secondary mr-3">EARN</span>
      <span className="text-4xl font-bold text-[#1b1b1b] mx-3">•</span>
    </Marquee>
  );
};

export default Banner;
