import React from 'react';
import Image from 'next/image';
import { motion, warning } from 'framer-motion';
import { SharedContainerProps } from '../types';
import Card from './Card';
import { kosherWarning } from '@/components/data/texts';

const SharedContainer: React.FC<SharedContainerProps> = ({
  images,
  whatComp,
}) => {
  return (
    <div className="flex flex-col w-full h-full justify-evenly items-center">
      <div
        className={`flex flex-col w-[90%] max-w-[110rem] h-full items-center justify-evenly md:bg-[#FAF3F0] md:p-16 gap-16
       `}
      >
        {images.map((image, index) => (
          <Card key={index} item={image} whatComp={whatComp} index={index} />
        ))}

        {whatComp === 'donuts' && (
          <div className="w-full p-4 h-full flex text-md md:text-[19px] italic tracking-wide text-black font-bold justify-center  items-center bg-[#FAF3F0]/80">
            <p className="border-b-[2px] pb-2 border-b-red-400 flex w-full">
              {kosherWarning}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SharedContainer;
