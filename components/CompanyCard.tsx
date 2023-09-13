import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

interface CompanyCardProps {
  id: number;
  name?: string;
  img: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ name, img, id }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 468px)' });

  const initialAnimation = {
    x: Math.random() * -500 + '%', // Random initial x position (-50 to 50)
    y: Math.random() * 500 + '%', // Random initial y position (-50 to 50)
    opacity: 0,
  };
  console.log('ismobile isss', isMobile);
  return (
    <motion.div
      className="w-[90%] h-full aspect-square flex justify-center items-center border-2 md:border-4 border-pink-300 relative placeholder shadow-2xl "
      initial={initialAnimation} // Use the random initial animation
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
        transition: { delay: 0.05 * id, duration: 1 },
      }}
      transition={{
        type: 'spring',
        damping: 10,
        stiffness: 100,
        mass: 1,
      }}
      whileHover={{
        scale: 1.3,
        rotate: [720, -90, -360],
        zIndex: 99999,
        borderRadius: isMobile ? '0px' : '100%',
        boxShadow: '0px 0px 20px 10px pink',
        transition: {
          duration: 1,
          delay: 0,
        }, // Transition duration for hover
      }}
      whileFocus={{ borderColor: 'pink' }}
    >
      <Image
        key={id}
        loading="eager"
        src={img}
        fill
        blurDataURL={img}
        onLoadingComplete={(image) => image.classList.remove('opacity-0')}
        className="opacity-0  md:hover:rounded-full duration-1000 transition-all ease hover:border-primary-pink border-2 md:p-4"
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
