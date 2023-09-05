import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import LandingPage from '../components/LandingPage';
import Button from '@mui/material/Button';
import router, { useRouter } from 'next/router';
import Link from 'next/link';
import Footer from '@/components/Footer';
import NeumorphicButton from '@/components/NeumorphicButton';
import { AiOutlineForm } from 'react-icons/ai';
import Nav from '@/components/Nav';
const Home: React.FC = ({ navHeight }: any) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const controls = useAnimation();
  const controlImage = useAnimation();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const size = { w: '', h: '', size: '' };
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
      getWidth < 486 ? setIsMobile(true) : setIsMobile(false);
    }
  }, []);

  const freshMiniDonuts = ['Fresh', 'made-to-order', 'mini donuts'];

  const arrayInArrayLetter = freshMiniDonuts.map((word, wordIndex) => (
    <div className='md:m-2 m-1 md:inline-block whitespace-pre' key={wordIndex}>
      {word.split('').map((letter, index) => (
        <motion.span
          key={index}
          className='homeText flex lg:text-3xl xl:text-4xl 3xl:text-5xl text-xl text-[#ecf0f3] '
          style={{
            backfaceVisibility: 'hidden',
            fontSmooth: 'antialiased',
            fontWeight: 'bold',
            width: 'full',
            display: 'inline-block', // Adjust this breakpoint as needed
          }}
          initial={{ y: -1000 }}
          animate={controls}
          transition={{
            type: 'spring',
            damping: 50,
            stiffness: 600,
            delay: 0.05 * (wordIndex * index),
          }}>
          {letter === ' ' ? ` ` : letter}
        </motion.span>
      ))}
      {/* <span style={{ whiteSpace: 'pre' }}>{'  '}</span>{' '} */}
    </div>
  ));

  return (
    <div
      ref={containerRef}
      className='flex flex-col justify-center  items-center w-screen h-[110vh] md:h-screen min-h-screen relative '>
      <div className='flex flex-col md:items-center justify-evenly h-[60%] gap-[5rem]  md:gap-[10rem]  p-2 shadow-sm'>
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
          className='flex flex-col backdrop-blur-md h-full w-full bg-[#ecf0f3]/20  rounded-md justify-evenly z-[999] items-center px-8'>
          <div className='bg-transparent  flex  flex-col md:flex-row '>
            {arrayInArrayLetter}
          </div>

          <NeumorphicButton
            text='Book Our Truck'
            to='/Contact'
            icon={AiOutlineForm}
            size={{
              w: isMobile ? '300px' : '450px',
              h: isMobile ? '75px' : '100px',
              size: isMobile ? 'sm' : 'lg',
            }}
          />
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

export default Home;
