/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect, useState } from 'react';
import CarouselComp from '@/components/Carousel';
import { Typography } from '@material-tailwind/react';
import SharedContainer from '@/components/SharedContainer';
import { flavors, ourDonuts } from '@/components/data/texts';

function donuts() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className='flex flex-col w-full min-h-screen  relative md:justify-center md:items-center  bg-black/10 truck '>
      <div className='flex justify-between items-center w-full   flex-col py-20 gap-10'>
        <div className='w-full h-full  backdrop-blur-sm   flex  justify-center items-center text-2xl flex-wrap flex-col'>
          <SharedContainer images={ourDonuts} />
        </div>
        <div className='w-full h-full  backdrop-blur-sm flex justify-center items-center flex-col'>
          <CarouselComp images={flavors} />
        </div>
      </div>
    </div>
  );
}

export default donuts;
