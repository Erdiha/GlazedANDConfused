import React from 'react';
import CompanyCard from '../components/CompanyCard'; // Import CompanyCard from the correct location
import { list } from '../components/data/texts';

function Clients() {
  return (
    <div className="relative min-h-screen md:min-h-[94vh] overflow-auto bg-primary-offWhite flex flex-col justify-center items-center truck pt-32 px-3 pb-6 ">
      <div className="md:max-w-[110rem] shadow-2xl bg-primary-offWhite backdrop-blur-xl flex justify-center items-center w-[95%] md:w-[90%] transition-all duration-500 ease relative">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full h-full p-5 md:p-10 gap-3 md:gap5 relative">
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
}

export default Clients;
