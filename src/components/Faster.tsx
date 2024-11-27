"use client"

import React, { useEffect, useState, useRef } from 'react'
import MaxWidthWrapper from './layout/MaxWidthWrapper'
import faster from '/public/faster/faster.png';
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";

const Faster = () => {
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
      <div className=" flex md:grid flex-col-reverse grid-cols-1 gap-4 md:grid-cols-2 mt-5">
      <div className={isVisible ? 'animate-move-up' : ''}>
          <Image src={faster} width={600} height={400} alt="img" />
        </div>
        {/* Left column for the text */}
        <div className="flex justify-center items-center">
             {/* Right column for the image */}
      
        
          <div>
            <h2 className="text-lg md:text-3xl font-semibold text-gray-800">
            Your Website 20x Faster
            </h2>
            <p className="text-base font-normal text-gray-500 mt-3 w-full md:w-[90%]">
            People Don`&apos;t Visit Slow Websites. Recall the last slow website you visited. How would you describe that experience? A slow website is not only annoying but damaging to your search engine results and reputation. We`&apos;re committed to delivering blazing fast load times for websites of all sizes!
            </p>
            <button className="font-bold text-lg text-blue-700 mt-3 flex items-center gap-2 justify-center group">
  Learn More
  <FaLongArrowAltRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</button>

          </div>
        </div>
  
       
      </div>
    </MaxWidthWrapper>
  </section>
  
  );
}

export default Faster;
