import React from 'react'
import MaxWidthWrapper from './layout/MaxWidthWrapper'
import { FaStar } from "react-icons/fa6";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cardData } from '@/data/joinData';



const Join = () => {
  return (
    <section className='py-5 md:py-10'>
        <MaxWidthWrapper>

        <div>
            <h2 className='text-center text-lg md:text-3xl font-semibold text-gray-700'>Join +40,000 Happy Customers Already Build There Software From Us</h2>

            <div className="bg-[#ffffff] p-4 shadow-md border mt-6">
             
                <div className='p-4'>
                <Carousel>
                  <CarouselContent>
                    {cardData.map((card)=>(
                       <CarouselItem className="basis-full  sm:basis-1/2 md:basis-1/3 lg:basis-1/4" key={card.id}>
                          <div className='p-3 bg-gray-100'>
                            <div className='flex gap-2 items-center mb-3'>
                            <FaStar  className="text-yellow-400" size={20}/>
                            <FaStar  className="text-yellow-400" size={20}/> 
                            <FaStar  className="text-yellow-400" size={20}/>
                             <FaStar  className="text-yellow-400" size={20}/>
                              <FaStar  className="text-yellow-400" size={20}/>
                       
                            </div>
                            <h4 className='text-lg font-semibold text-gray-700'>{card.title}</h4>
                            <p className="font-semibold text-sm text-gray-600">{card.des}</p>
                          </div>

                       </CarouselItem>
                    ))}

                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

                </div>

                <p className='text-sm font-semibold text-gray-500 text-center'>Rated <span className='text-sm font-bold  text-gray-600'>4.9/5 </span>based on 2580 review. showing some review</p>
            </div>
        </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default Join