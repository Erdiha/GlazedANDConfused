import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Card } from 'ui-neumorphism';
import { Spinner } from '@nextui-org/react';
import { motion, useAnimation } from 'framer-motion';

interface CompanyCardProps {
  id: number;
  name?: string;
  img: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ name, img, id }) => {
  const initialAnimation = {
    x: Math.random() * 100 + '%', // Random initial x position (-50 to 50)
    y: Math.random() * 100 + '%', // Random initial y position (-50 to 50)
    opacity: 0,
  };

  return (
    <motion.div
      className='w-full h-full aspect-square rounded-2xl flex justify-center items-center border-4 border-pink-300 relative placeholder shadow-shadow-2xl hover:scale-125 transform ease duration-500 hover:border-blue-200'
      initial={initialAnimation} // Use the random initial animation
      animate={{ x: 0, y: 0, opacity: 1 }} // Animate to final position and opacity
      transition={{
        type: 'spring',
        damping: 50,
        stiffness: 600,
        delay: 0.05 * id,
      }}>
      <Image
        key={id}
        loading='eager'
        src={img}
        fill
        blurDataURL={img}
        onLoadingComplete={(image) => image.classList.remove('opacity-0')}
        className='hover:rounded-xl transition-opacity opacity-0 duration-[2s]'
        style={{
          objectFit: 'contain',
          display: 'flex',
          position: 'absolute',
          borderRadius: '5%',
          backgroundColor: 'white',
          padding: '5px',
          boxShadow: '0px 0px 10px black',
        }}
        alt={name || ''}
      />
    </motion.div>
  );
};

export default CompanyCard;
