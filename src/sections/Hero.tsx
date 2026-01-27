import SectionContainer from "../layout/sectionContainer";

const Hero = () => {
  return (
    <SectionContainer id="home">
      <div className="w-full flex flex-col min-h-screen pb-20 items-end justify-center relative bg-[#fffef1]">
        <video
          src="/img/bg-video.mp4"
          autoPlay={true}
          loop={true}
          className="absolute w-full h-full top-0 left-0 z-0 object-cover"
        />
        <div className="lg:w-[90%] z-10 w-full h-full flex lg:flex-row flex-col lg:gap-0 gap-12 justify-between relative items-center lg:mt-16 mt-32">
          <div className="lg:w-[60%] relative lg:z-auto z-[20] w-[90%] flex flex-col lg:items-start items-center lg:-mt-28 mt-0 gap-10">
            <h1 className="font-bold text-greyco-primary lg:text-start text-center lg:text-[84px] text-[52px] leading-none lg:pt-0 pt-12">
              You're now in
              <br /> The Lab
            </h1>
            <h2 className="text-base font-mono-custom lg:text-start text-center text-greyco-primary-100 font-medium lg:text-[20px] text-[16px] leading-snug">
              Africa’s Hybrid Hub for Coworking, Digital Learning & Creative
              Collaboration
            </h2>
            <h2 className="text-2xl font-bold shadow-text">
              <span className="text-greyco-primary">WORK</span>{" "}
              <span className="text-[#ffff06]">LEARN</span>{" "}
              <span className="text-white">EARN</span>
            </h2>
          </div>
          <div className="lg:w-[90%] w-[90%] lg:h-[110vh] h-[50vh] relative flex items-center justify-center">
            <img
              src="/img/bulb.png"
              alt="Bulb"
              className="animate-flicker-on w-full object-contain animate-pulse"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
