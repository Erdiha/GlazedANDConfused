/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import useResponsive from './Responsive';
import { IImages } from './types';

function SharedContainer({ images }: IImages) {
  const mbl = useResponsive();
  const noImage = images[images.length - 1].title === '';

  const warning = noImage && images[images.length - 1].description;
  return (
    <div className='flex flex-col w-full h-full justify-around   items-center  '>
      <div className='flex h-full w-[75%] max-w-[100rem] bg-[#FAF3F0] p-10 justify-center items-center flex-col gap-16  mt-20'>
        {images.map((image, index) => (
          <motion.div
            initial={{ x: -100 + '%' }}
            whileInView={{
              x: 0,
              transition: {
                duration: 1,
                delay: index * 0.3,
                ease: 'easeInOut',
              },
            }}
            viewport={{ once: true }}
            whileHover={{
              translateX: '20px',
              backgroundColor: '#FF6B6B',
              transition: { duration: 0.5, delay: 0, ease: 'easeInOut' }, // Applying a different transition for whileHover animation
            }}
            key={index}
            className='flex justify-center flex-col md:flex-row  items-center rounded-[10px] shadow-xl'>
            {image.src !== 'na' && index % 2 === 1 && (
              <Image
                priority={true}
                width={400}
                height={400}
                src={image.src}
                alt={image.alt}
                style={{
                  borderTopLeftRadius: '10px',
                  borderBottomLeftRadius: '10px',
                  display: 'flex',
                }}
              />
            )}
            {image.src !== 'na' && (
              <div className=' justify-center flex flex-col p-2 h-full w-full '>
                <p
                  style={{ fontSize: mbl ? '1rem' : '2rem' }}
                  className=' flex  text-black font-bold p-2 capitalize'>
                  {image.title}
                </p>
                <p
                  style={{ fontSize: mbl ? '0.8rem' : '1.2rem' }}
                  className={`text-black/90 p-2 font-serif`}>
                  {image.description}
                </p>
              </div>
            )}
            {index % 2 === 0 && (
              <Image
                priority={true}
                width={400}
                height={400}
                src={image.src}
                alt={image.alt}
                style={{
                  borderTopRightRadius: '10px',
                  borderBottomRightRadius: '10px',
                  display: 'flex',
                }}
              />
            )}
          </motion.div>
        ))}
        <p className='w-full h-full  text-gray-600 text-sm italic tracking-wide font-light'>
          {warning}
        </p>
      </div>
    </div>
  );
}

export default SharedContainer;
