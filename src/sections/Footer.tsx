import { Link } from "react-router-dom";
import SectionContainer from "../layout/sectionContainer";

const Footer = () => {
  return (
    <SectionContainer>
      <div className="flex items-center bg-[#fffef1] text-[#1b1b1b] justify-center w-full py-16">
        <div className="w-full flex flex-col lg:items-center items-start gap-12 lg:px-24 px-6">
          <div className="flex lg:flex-row flex-col lg:items-center gap-6 items-start justify-between w-full">
            <a href="/">
              <img src="/img/logo.png" width={300} />
            </a>
            <div className="flex flex-col items-start gap-1">
              <h1 className="font-semibold text-base">EMAIL ADDRESS</h1>
              <a href="mailto:greycolab@gmail.com">
                <span className="text-sm font-medium">greycolab@gmail.com</span>
              </a>
            </div>
            <div className="flex flex-col items-start gap-1">
              <h1 className="font-semibold text-base">EMAIL ADDRESS</h1>
              <a href="mailto:greycolab@gmail.com">
                <span className="text-sm font-medium">greycolab@gmail.com</span>
              </a>
            </div>
            <div className="flex flex-col items-start gap-1">
              <h1 className="font-semibold text-base">OFFICE ADDRESS</h1>

              <span className="text-sm font-medium w-[300px]">
                27 Asim Ikang street, off Marian Road, Calabar, Cross River
                state, Nigeria.
              </span>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Link
                to="https://www.tiktok.com/@greycolab"
                className="flex items-center gap-2"
                target="_blank"
              >
                <span className="text-sm font-medium">Greycolab</span>
                <img width={20} src="/img/tiktok.png" alt="Tiktok Logo" />
              </Link>
              <Link
                to="https://instagram.com"
                className="flex items-center gap-2"
                target="_blank"
              >
                <span className="text-sm font-medium">Greycolab</span>
                <img width={20} src="/img/instagram.png" alt="Instagram logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Footer;
