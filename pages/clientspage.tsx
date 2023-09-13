import React from 'react';
import CompanyCard from '../components/CompanyCard'; // Import CompanyCard from the correct location
import { list } from '../components/data/texts';

function Clients() {
  return (
    <div className="relative min-h-screen md:min-h-[94vh] overflow-auto bg-primary-offWhite flex flex-col justify-center items-center truck pt-32 px-3 pb-6 ">
      <div className="md:max-w-[110rem]  shadow-2xl bg-primary-offWhite backdrop-blur-xl grid grid-cols-3  md:grid-cols-4 lg:grid-cols-6 w-[95%]   justify-center content-center items-center transition-all duration-500 ease relative md:p-10 p-5 gap-1 md:gap-8 ">
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
}

export default Clients;
