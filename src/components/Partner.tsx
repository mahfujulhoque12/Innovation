import React from 'react'
import MaxWidthWrapper from './layout/MaxWidthWrapper'
import Image from 'next/image'
import parter1 from '/public/partner/partner1.png';
import parter2 from '/public/partner/partner2.png';
import parter3 from '/public/partner/partner3.png';
import parter4 from '/public/partner/partner4.png';
import parter5 from '/public/partner/partner5.png';

type ImageType = {
    id:number;
    img:string;
}

const image :ImageType[] =[
    {
        id:1,
        img:parter1.src
    },
    {
        id:2,
        img:parter2.src
    },{
        id:3,
        img:parter3.src
    },{
        id:4,
        img:parter4.src
    },{
        id:5,
        img:parter5.src
    },

]


const Partner = () => {
  return (
    <section className="py-5 md:py-10">
        <MaxWidthWrapper>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
  {image.map((data) => (
    <div
      key={data.id}
      className="flex justify-center items-center sm:justify-center sm:items-center"
    >
      <div className="relative group">
        <Image
          src={data.img}
          width={300}
          height={200}
          alt="img"
          className="transition-opacity duration-300 opacity-50 group-hover:opacity-100"
        />
      </div>
    </div>
  ))}
</div>


        </MaxWidthWrapper>
    </section>
  )
}

export default Partner