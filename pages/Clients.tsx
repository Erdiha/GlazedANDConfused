import React, { useState, useEffect } from 'react';
import CompanyCard from '../components/CompanyCard'; // Import CompanyCard from the correct location
import { list } from '../components/data/texts';

const ClientLists: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-auto bg-primary-offWhite flex flex-col justify-center items-center truck ">
      <div className=" max-w-[100rem] flex flex-col w-full min-h-full pt-28 lg:px-10 md:px-4 px-2 pb-32">
        <div className="md:px-10 p-2 shadow-2xl bg-primary-offWhite backdrop-blur-xl md:py-20 py-10 grid grid-cols-4 gap-[1%] md:grid-cols-5 lg:grid-cols-6 min-h-fit md:gap-[2%]  w-full h-full justify-center content-center items-center transition-all duration-500 ease relative">
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
    </div>
  );
};

export default ClientLists;
