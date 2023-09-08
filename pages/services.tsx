import React from 'react';
import CarouselComp from '@/components/sharedComponents/Carousel';
import { ImageProps } from '../components/types';
import SharedContainer from '@/components/sharedComponents/SharedContainer';
import { imagesOurServices } from '@/components/data/texts';

function Services() {
  const images: ImageProps[] = [];
  const getImages = () => {
    for (let i = 1; i <= 16; i++) {
      const name = `/servicesImages/i${i}.jpg`;
      const image: ImageProps = {
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
    <div className='flex flex-col w-full min-h-screen h-full  relative md:justify-center md:items-center  bg-black/10 truck md:pt-32 py-24'>
      <div className='w-full h-full  backdrop-blur-sm  flex  md:p-10 justify-evenly items-center md:text-2xl flex-wrap flex-col md:gap-20 gap-10'>
        <SharedContainer images={imagesOurServices} whatComp={'services'} />
        <CarouselComp images={images} />
      </div>
    </div>
  );
}

export default Services;
