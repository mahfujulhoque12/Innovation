import React from "react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";


const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#0C399C] to-[#051477]">
      <MaxWidthWrapper>
        <div className="py-24 relative">
          {/* Star 1 */}
          <div className="absolute top-10 left-0 z-0">
            <svg
              width="50"
              height="50"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points="100,10 120,75 190,75 135,115 155,180 100,140 45,180 65,115 10,75 80,75"
                fill="white"
                stroke="orange"
                strokeWidth="5"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 100 100"
                  to="360 100 100"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </polygon>
            </svg>
          </div>

          {/* Star 2 */}
          <div className="absolute top-[70%] left-[60%] z-0">
            <svg
              width="50"
              height="50"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points="100,10 120,75 190,75 135,115 155,180 100,140 45,180 65,115 10,75 80,75"
                fill="white"
                stroke="orange"
                strokeWidth="5"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 100 100"
                  to="360 100 100"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </polygon>
            </svg>
          </div>


          {/* Main Content */}
          <div className="relative z-20">
            <h1 className="py-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold text-white">
              Best Software Company in Bangladesh
            </h1>
            <p className="w-full mx-auto md:w-[70%] text-base text-center font-semibold text-white md:text-lg">
              You can build your dream software with us. We can build any kind
              of software you want. So let`&apos;s start your dream.
            </p>
               
          <div className="flex justify-center items-center mt-8 pb-12 group">
  <Link
    href="#"
    className="bg-white flex items-center justify-center gap-2 px-6 py-3 rounded-md text-black shadow-md font-bold text-sm md:text-lg hover:bg-black hover:text-white transition-all duration-500"
  >
    Start Your Dream
    <FaLongArrowAltRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </Link>
</div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
