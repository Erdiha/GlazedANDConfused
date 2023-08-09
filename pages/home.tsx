import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import LandingPage from './LandingPage';
import Button from '@mui/material/Button';
import router, { useRouter } from 'next/router';
import Navbar from '@/components/Navbar/Navbar';

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const controls = useAnimation();
  const controlImage = useAnimation();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  useEffect(
    () => {
      controls.start({ y: 0 }); // Start the motion animation when the component mounts
      controlImage.start({ y: 0, rotateY: [0, 360] });
    }, // Start the motion animation when the component mounts
    [controls, controlImage],
  );

  useEffect(() => {
    // typeof window !== undefined && window.scrollTo(0, document.body.scrollHeight);
    if (containerRef?.current) {
      const getWidth = containerRef.current.clientWidth;
      console.log('getWidth', getWidth);
      getWidth < 768 ? setIsMobile(true) : setIsMobile(false);
    }
  }, []);

  const freshMiniDonuts = ['Fresh', 'made-to-order', 'mini donuts'];

  const handleRoute = () => {
    router.push('/contact');
  };
  const arrayInArrayLetter = freshMiniDonuts.map((word, wordIndex) => (
    <div key={wordIndex}>
      {word.split('').map((letter, index) => (
        <motion.span
          key={index}
          className='homeText'
          style={{
            display: 'inline-block',
            backfaceVisibility: 'hidden',
            margin: '1px',
            fontSize: '2.1rem',
            color: 'white',
            fontSmooth: 'antialiased',
            fontWeight: 'bold',
          }}
          initial={{ y: -1000 }}
          animate={controls}
          transition={{
            type: 'spring',
            damping: 8,
            stiffness: 100,
            delay: 0.05 * (wordIndex * index),
          }}>
          {letter}
        </motion.span>
      ))}
    </div>
  ));
  return (
    <div
      ref={containerRef}
      className='flex justify-center  items-start w-screen h-screen relative '>
      <div className='w-full flex fixed bottom-0 md:top-0 z-[9999]'>
        <Navbar />
      </div>
      <div className='flex flex-col md:items-center justify-between mb-[10%] h-[70%] mt-[10%] w-[80%] md:h-[70%] p-2 shadow-sm'>
        <motion.div
          initial={{ y: -1000, rotate: 0 }}
          animate={controlImage}
          transition={{
            type: 'spring',
            damping: 7,
            stiffness: 70,
            delay: 1,
            duration: 4,
          }}
          className='flex justify-center items-center md:w-full '>
          <Image
            alt='homerdonut image'
            layout='fixed'
            width={isMobile ? 150 : 350}
            height={isMobile ? 150 : 350}
            src='/homerdonut.png'
          />
        </motion.div>
        <motion.div
          animate={controls}
          initial={{ y: 500 }}
          transition={{ type: 'spring', damping: 5, stiffness: 70 }}
          className='flex flex-col backdrop-blur-sm shadow-xl bg-gray-400/10 p-4 rounded-md md:w-[50%] justify-center items-center z-[9999]'>
          <div>{arrayInArrayLetter}</div>

          <Button
            onClick={handleRoute}
            size='large'
            style={{
              backgroundColor: '#FF52A2',
              color: 'white',
              borderRadius: '10px',
              width: '300px',
              height: '100px',
              marginTop: '20px',
              fontWeight: 'bold', // Use 'fontWeight' instead of 'font' for bold
              fontSize: '25px', // Adjust the font size as needed
              position: 'relative',
              zIndex: 999,
              padding: '3px',
              backdropFilter: 'blur(20px)', // Frosted glass effect
            }}
            variant='text'>
            BOOK OUR TRUCK
          </Button>
        </motion.div>
        <section
          id='features'
          className='flex z-[-1] justify-center items-center absolute inset-0 '>
          <LandingPage />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
