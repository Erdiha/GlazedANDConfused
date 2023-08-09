import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import AboutUs from '@/components/AboutUs';

function FoodTruckRental() {
  return (
    <div className='truck flex justify-center h-screen w-screen  relative overflow-y-visible '>
      <section className='w-full flex fixed bottom-0 md:top-0 z-[9999]'>
        <Navbar />
      </section>
      <section className='w-full  flex flex-col md:flex-row justify-evenly  min-h-full  '>
        <div className=' flex flex-col  bg-white/50 backdrop-blur-md w-full'>
          <AboutUs />
        </div>
        <div className='flex flex-col w-full h-full  '></div>
      </section>
    </div>
  );
}

export default FoodTruckRental;
