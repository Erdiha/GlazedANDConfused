import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Card } from 'ui-neumorphism';
import { Spinner } from '@nextui-org/react';
import { delay, motion, useAnimation } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

interface CompanyCardProps {
  id: number;
  name?: string;
  img: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ name, img, id }) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  const isMobile = useMediaQuery({ query: '(max-resolution: 468px)' });
  const initialAnimation = {
    x: Math.random() * -500 + '%', // Random initial x position (-50 to 50)
    y: Math.random() * 500 + '%', // Random initial y position (-50 to 50)
    opacity: 0,
  };

  return (
    <motion.div
      className='w-full h-full aspect-square flex justify-center items-center border-2  border-pink-300 relative placeholder shadow-shadow-2xl '
      initial={initialAnimation} // Use the random initial animation
      animate={{ x: 0, y: 0, opacity: 1 }} // Animate to final position and opacity
      whileHover={{
        scale: 1.3,
        rotate: [720, -90, -360],
        zIndex: 99999,
        borderRadius: isMobile ? '0px' : '100%',
        boxShadow: '0px 0px 20px 10px pink', // Adding a cool lighting effect with a red shadow
        transition: { duration: 1, delay: 0 }, // Transition duration for hover
      }}
      whileFocus={{ borderColor: 'red' }}
      transition={{
        type: 'spring',
        damping: 100,
        stiffness: 800,
        delay: 0.05 * id, // Adjust delay based on the id prop
      }}>
      <Image
        key={id}
        loading='eager'
        src={img}
        fill
        blurDataURL={img}
        onLoadingComplete={(image) => image.classList.remove('opacity-0')}
        className=' opacity-0  md:hover:rounded-full duration-1000 transition-all ease hover:border-primary-pink border-2 md:p-4'
        style={{
          objectFit: 'contain',
          display: 'flex',
          position: 'absolute',
          backgroundColor: 'white',
          boxShadow: '0px 0px 10px black',
        }}
        alt={name || ''}
      />
    </motion.div>
  );
};

export default CompanyCard;
