import React from 'react';
import Navbar from '@/components/Navbar';
import AboutUs from '@/components/AboutUs';
import WhatWeDo from '@/components/WhatWeDo';
import Footer from '@/components/Footer';
import CarouselComp from '@/components/Carousel';

function FoodTruckRental() {
  return (
    <div className='truck flex justify-center min-h-screen flex-col w-full relative overflow-hidden items-center md:py-10 p-5 '>
      <div className='aboutus-wrapper flex flex-col md:flex-col   items-center w-full h-full  mx-auto p-10 rounded-lg shadow-lg mt-14 backdrop-blur-[2px]'>
        <AboutUs />
        <div className='w-[65%] h-[28rem] flex flex-col  items-center bg-red-400/50 p-5'>
          <div className='w-full h-5/6 flex'>BBBB</div>

          <CarouselComp images={[]} />
        </div>
      </div>
    </div>
  );
}

export default FoodTruckRental;
