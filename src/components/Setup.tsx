"use client"

import React, { useEffect, useState, useRef } from 'react'
import MaxWidthWrapper from './layout/MaxWidthWrapper'
import setup from '/public/setup/setup.png';
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";


const Setup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when section comes into view
        }
      },
      { threshold: 0.5 } // Adjust threshold if needed (0.5 means 50% of the element should be visible)
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Cleanup observer on unmount
      }
    };
  }, []);

  return (
    <section className="" ref={sectionRef}>
    <MaxWidthWrapper>
      <div className=" grid e grid-cols-1 gap-4 md:grid-cols-2 mt-5">
        {/* Left column for the text */}
        <div className="flex justify-center items-center">
          <div>
            <h2 className="text-lg md:text-3xl font-semibold text-gray-800">
              Quick And Easy To Setup
            </h2>
            <p className="text-base font-normal text-gray-500 mt-3 w-full md:w-[90%]">
              No gurus needed here! Easily setup your website on our high-speed private cloud without any previous or technical knowledge required. Manage all of your content, emails, and domains right inside of our platform. Build dynamic online stores secured by free and automatic SSL that rank higher in search engines!
            </p>
            <button className="font-bold text-lg text-blue-700 mt-3 flex items-center gap-2 justify-center group">
  Learn More
  <FaLongArrowAltRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</button>

          </div>
        </div>
  
        {/* Right column for the image */}
        <div className={isVisible ? 'animate-move-up' : ''}>
          <Image src={setup} width={600} height={400} alt="img" />
        </div>
      </div>
    </MaxWidthWrapper>
  </section>
  
  );
}

export default Setup;
