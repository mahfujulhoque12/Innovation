import React from 'react'
import MaxWidthWrapper from './layout/MaxWidthWrapper'
import afford from '/public/affordable/afford.png';
import afford2 from '/public/affordable/control.png';
import afford3 from '/public/affordable/reliability.png';
import afford4 from '/public/affordable/security.png';
import Image from 'next/image';





type CardData = {
    id:number;
    title:string;
    img:string;
    des:string;
}
const cardData : CardData[] =[
    {
        id:1,
        img:afford.src,
        title:"Affordable Power",
        des:"Blazing fast premium cloud web hosting that's easily scalable and affordable.",
    },
    {
        id:2,
        img:afford2.src,
        title:"Complete Control",
        des:"Easily build and manage your website to fit your specific needs in a guru free control panel.",
    }, {
        id:3,
        img:afford3.src,
        title:"Unmatched Security",
        des:"Protect your reputation, business, and brand with our unique Security Shield included free.",
    }, 
    {
        id:4,
        img:afford4.src,
        title:"Supreme Reliability",
        des:"Sleep sound knowing your website is online around the clock with real SuperHeroes monitoring 24x7x365.",
    },
]
const Affordable = () => {
  return (
    <section className='py-5 md:py-10'>
        <MaxWidthWrapper>

        <div className="grid grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cardData.map((data)=>(
                <div  key={data.id} className="p-4">
                        <Image src={data.img} width={400} height={250} alt={data.title} className="h-[150px] object-contain"/>
                        <h3 className="text-lg mt-2 md:text-xl font-semibold text-gray-800 text-center">{data.title}</h3>
                        <p className="text-sm font-normal text-gray-500 mt-3">{data.des}</p>
                </div>
            ))}
        </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default Affordable