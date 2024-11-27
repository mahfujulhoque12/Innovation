"use client"

import React, { useEffect, useState, useRef } from 'react'
import MaxWidthWrapper from './layout/MaxWidthWrapper'
import Image from 'next/image'
import migrate from '/public/migrate/migrate.png'
import Link from 'next/link'
import { FaLongArrowAltRight } from "react-icons/fa";


const WebMigrate: React.FC = () => {
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
    <section
      ref={sectionRef}
      className='py-5 md:py-10 bg-gradient-to-r from-[#0C399C] to-[#051477]'
    >
      <MaxWidthWrapper>
        <div>
          <div className="flex justify-center items-center">
            <div className={isVisible ? 'animate-move-up' : ''}>
              <Image src={migrate} alt="Migration Image" width={700} height={400} />
            </div>
          
          </div>
          <h2  className='text-center text-lg md:text-3xl font-semibold text-white'>Migrate Your Website Free </h2>
          
          <p className="w-full mx-auto md:w-[70%] text-base text-center font-medium text-white md:text-lg mt-3">Switching to a new web host can be stressful especially if you`&apos;ve been with them for many years. We take the pain out of moving by providing complimentary website migrations by our Level III team. Our quality assurance team ensures successful transfers in just a couple hours!</p>

        
          <div className="flex justify-center items-center mt-8 pb-12 group">
  <Link
    href="#"
    className="bg-white flex items-center justify-center gap-2 px-6 py-3 rounded-md text-black shadow-md font-bold text-sm md:text-lg hover:bg-black hover:text-white transition-all duration-500"
  >
    Migrate to SI
    <FaLongArrowAltRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </Link>
</div>

        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default WebMigrate
