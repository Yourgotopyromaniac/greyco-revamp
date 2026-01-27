import { useEffect, useRef, useState } from "react";
import Button from "../components/buttons/button";

const NavigationLayout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [navBarHeight, setNavbarHeight] = useState(0);
  const [mobileMenuHeight, setMobileMenuHeight] = useState(0);
  const toggleRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        isMobileOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileOpen]);

  useEffect(() => {
    if (navBarRef && navBarRef.current) {
      setNavbarHeight(navBarRef.current.offsetHeight);
    }
  }, [navBarRef]);

  useEffect(() => {
    if (mobileMenuRef && mobileMenuRef.current) {
      setMobileMenuHeight(mobileMenuRef.current.offsetHeight);
    }
  }, [mobileMenuRef]);

  return (
    <div
      ref={navBarRef}
      className={`w-full flex flex-col fixed top-0 left-0 z-[200] transition-all duration-300 text-white ${isMobileOpen ? "bg-greyco-secondary backdrop-blur-0" : "bg-transparent backdrop-blur-[10px]"}`}
    >
      <div className="flex h-[8vh] relative z-[100] w-full items-center justify-center my-4">
        <div className="w-full flex items-center justify-between relative">
          <a href="/">
            <img
              src="/img/logo.png"
              width={300}
              className="absolute lg:left-16 left-[-3rem] top-1/2 -translate-y-1/2"
            />
          </a>
          <div className="lg:flex hidden gap-6 justify-center items-center">
            <div className="flex flex-col items-center justify-start gap-2">
              <a
                href="/#mission"
                className="no-underline font-mono-custom text-greyco-primary-100 hover:text-greyco-primary-100 font-medium text-sm transition-all duration-300"
              >
                About us
              </a>
            </div>

            <div className="flex flex-col items-center justify-start gap-2">
              <a
                href="/#pricing"
                className="no-underline font-mono-custom text-greyco-primary-100 hover:text-greyco-primary-100 font-medium text-sm transition-all duration-300"
              >
                Pricing
              </a>
            </div>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=2347070442824"
            className="lg:flex hidden"
            aria-label="Join Grey-Co"
          >
            <Button
              ctaText="Join"
              className="bg-greyco-primary-100 py-2 hover:bg-greyco-primary-100/80 px-4 rounded-full text-[15px] font-medium text-white absolute right-16 top-1/2 -translate-y-1/2 transition-all duration-300"
            />
          </a>

          <div
            ref={toggleRef}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden flex flex-col items-center gap-1 justify-center relative mr-4"
          >
            <div className="w-[40px] h-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div
              className={`w-5 h-[2px] bg-greyco-primary origin-right transition-all duration-300 relative z-50 ${
                isMobileOpen ? "-rotate-[45deg] -mt-[2px]" : "rotate-0"
              }`}
            ></div>
            <div
              className={`w-5 h-[2px] bg-greyco-primary relative transition-all duration-300 z-50 ${
                isMobileOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-5 h-[2px] bg-greyco-primary origin-right transition-all duration-300 relative z-50 ${
                isMobileOpen ? "rotate-[45deg] mt-[2px]" : "rotate-0"
              }`}
            ></div>
          </div>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        style={{
          top: navBarHeight,
        }}
        className={`bg-greyco-secondary z-[100] px-4 py-10 -mt-1 lg:hidden flex flex-col items-center justify-center gap-4 h-auto transition-all duration-300 w-full absolute left-1/2 -translate-x-1/2 ${
          isMobileOpen ? "translate-y-0" : "-translate-y-[200%]"
        }`}
      >
        <div className="flex flex-col w-full items-center gap-8">
          <a
            href="/#mission"
            className="no-underline font-mono-custom text-white hover:text-greyco-primary-100 font-medium text-sm transition-all duration-300"
          >
            About us
          </a>
          <a
            href="/#pricing"
            className="no-underline font-mono-custom text-white hover:text-greyco-primary-100 font-medium text-sm transition-all duration-300"
          >
            Pricing
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=2347070442824"
            aria-label="Join Grey-Co"
          >
            <Button
              ctaText="Join"
              className="bg-greyco-primary-100 py-2 hover:bg-greyco-primary-100/80 px-4 rounded-full text-[15px] font-medium text-white transition-all duration-300"
            />
          </a>
        </div>
      </div>
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          style={{
            top: mobileMenuHeight,
          }}
          className="absolute left-0 w-screen h-screen bg-transparent backdrop-blur-[10px] z-[90]"
        ></div>
      )}
    </div>
  );
};

export default NavigationLayout;
