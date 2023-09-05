import React, { useState, useEffect } from 'react';
import CompanyCard from '../components/CompanyCard'; // Import CompanyCard from the correct location
import { list } from '../components/data/texts';

interface Company {
  id: number;
  name: string;
  index: number;
}

const BouncingBalls: React.FC = () => {
  return (
    <div className='relative min-h-screen overflow-auto bg-[#ff52a2] flex flex-col justify-center items-center px-5 md:px-10 pb-40 py-20'>
      <div className='w-full full flex 0 py-4 md:py-2 md:p-10 items-center '>
        <p className='client-header-text text-xl md:text-6xl border-b-[5px] py-2 border-[#F5F5F5]  text-[#F5F5F5]'>
          CLIENTS
        </p>
      </div>
      <div className='relative md:px-10 p-2 shadow-2xl bg-white/30 backdrop-blur-xl md:py-10 py-10 grid grid-cols-4 md:grid-cols-7  gap-[2%] min-h-full  w-full justify-center content-center items-center '>
        {list?.map((img, index) => (
          <CompanyCard
            key={index}
            id={index}
            img={img} // Pass the image URL as a prop
            name={`Company ${index}`} // You can provide a name for each image
          />
        ))}
      </div>
    </div>
  );
};

export default BouncingBalls;
