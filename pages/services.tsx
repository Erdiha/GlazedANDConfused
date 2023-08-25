import React from 'react';
import CarouselComp from '@/components/Carousel';
import { Image } from '../components/types';
import SharedContainer from '@/components/SharedContainer';
import { imagesOurServices } from '@/components/data/texts';

function services() {
  const images: Image[] = [];
  const getImages = () => {
    for (let i = 1; i <= 16; i++) {
      const name = `/servicesImages/i${i}.jpg`;
      // Assuming you also have 'desc' and 'name' properties for each image
      const image: Image = {
        src: name,
        name: `Image ${i}`,
        desc: `Description for Image ${i}`,
      };
      images.push(image);
    }
  };

  // Call the function to populate the 'images' array
  getImages();

  return (
    <div className='flex flex-col w-full min-h-screen  relative md:justify-center md:items-center  bg-black/10 truck '>
      <div className='flex justify-between items-center w-full   flex-col py-20 gap-10'>
        <div className='w-full h-full  backdrop-blur-sm   flex  justify-center items-center text-2xl flex-wrap flex-col'>
          <SharedContainer images={imagesOurServices} />
        </div>
        <div className='w-full h-full flex justify-center items-center flex-col'>
          <CarouselComp images={images} />
        </div>
      </div>
    </div>
  );
}

export default services;
