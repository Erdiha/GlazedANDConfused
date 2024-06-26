import BrowserDetection from '@/components/BrowserDetection';
import { Button } from '@material-tailwind/react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import LandingPage from '../components/sharedComponents/LandingPage';

const Home: React.FC = () => {
  const controls = useAnimation();
  const controlImage = useAnimation();
  const isMobile = useMediaQuery({ maxWidth: 468 });
  const router = useRouter(); // Initialize the router
  const browserType: any = BrowserDetection();

  useEffect(() => {
    controls.start({ y: 0 });
    controlImage.start({ y: 0, rotateY: [0, 360] });
  }, [controls, controlImage]);

  const freshMiniDonuts = ['Fresh', 'made-to-order', 'mini donuts'];

  const arrayInArrayLetter = freshMiniDonuts.map((word, wordIndex) => (
    <div
      className="md:m-5 m-[2px] md:inline-block whitespace-pre"
      key={wordIndex}
    >
      {word.split('').map((letter, index) => (
        <motion.span
          key={index}
          className={`homeText flex lg:text-[3rem]  text-3xl ${browserType === 'Safari' ? 'text-gray-900' : 'text-[#ecf0f3]'
            }  p-[1px]`}
          style={{
            backfaceVisibility: 'hidden',
            fontSmooth: 'antialiased',
            fontWeight: 'bold',
            width: 'full',
            display: 'inline-block',
          }}
          initial={{ y: -1000 }}
          animate={controls}
          transition={{
            type: 'spring',
            damping: 50,
            stiffness: 600,
            delay: 0.05 * (wordIndex * index),
          }}
        >
          {letter === ' ' ? ' ' : letter}
        </motion.span>
      ))}
    </div>
  ));

  return (
    <div className="flex min-h-screen justify-center items-center overflow-hidden ">
      <div
        className={`flex flex-col md:items-center justify-evenly gap-[5rem] mt-20 md:gap-[12rem] p-10 md:p-20
      ${browserType === 'Safari' ? 'bg-primary-blue/70 shadow-2xl ' : ''}
       `}
      >
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
          className="flex justify-center items-center md:w-full relative"
        >
          <Image
            alt="homerdonut image"
            layout="fixed"
            width={isMobile ? 150 : 300}
            height={isMobile ? 150 : 300}
            src="/homerdonut.png"
          />
        </motion.div>
        <motion.div
          style={{ width: '100%', height: isMobile ? '60%' : '100%' }}
          animate={controls}
          initial={{ y: 500 }}
          transition={{ type: 'spring', damping: 5, stiffness: 70 }}
          className="flex flex-col backdrop-blur-md gap-8 bg-[#ecf0f3]/20 rounded-md justify-evenly z-[999] items-center p-5"
        >
          <div className="bg-transparent flex flex-col md:flex-row">
            {arrayInArrayLetter}
          </div>
          <Button
            onClick={() => router.push('/contact')}
            variant="filled"
            size="lg"
            style={{
              width: isMobile ? '250px' : '400px',
              height: isMobile ? '70px' : '80px',
            }}
            className="flex bg-[#ff52a2] p-6 rounded-lg text-xl md:text-2xl xl:text-3xl  tracking-widest hover:scale-105 justify-center items-center hover:shadow-xl hover:border-4 border-black transition-all ease-in-out duration-700 buttonText "
          >
            Book Our Truck
          </Button>
        </motion.div>
        <section
          id="features"
          className="flex z-[-1] justify-center items-center absolute inset-0"
        >
          <LandingPage />
        </section>
      </div>
    </div>
  );
};

export default Home;
