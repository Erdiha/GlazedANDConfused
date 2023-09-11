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
        className={`flex flex-col w-[90%] max-w-[100rem] h-full items-center justify-evenly md:bg-[#FAF3F0] 
        ${whatComp === 'aboutus' && 'md:p-16 gap-16 md:my-10'}
        ${whatComp === 'donuts' && 'md:p-16 gap-10'}
        ${whatComp === 'services' && 'md:p-20 gap-16'}
       `}
      >
        {images.map((image, index) => (
          <Card key={index} item={image} whatComp={whatComp} index={index} />
        ))}

        {whatComp === 'donuts' && (
          <div className="w-full p-2 h-full flex text-[12px] md:text-[22px] italic tracking-wide text-black font-bold justify-center  items-center bg-[#FAF3F0]/80">
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
