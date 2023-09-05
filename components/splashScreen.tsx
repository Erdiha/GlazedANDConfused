import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const SplashScreen: React.FC = () => {
  const router = useRouter();
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start({ x: '-100%' });
      setTimeout(() => {
        router.push('/Home');
      }, 100); // Delay the navigation after the door animation finishes
    }, 100); // Adjust the timeout duration as needed

    return () => clearTimeout(timeout);
  }, [controls, router]);

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-blue-300 text-white w-screen p-10 overflow-hidden '>
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', damping: 10, stiffness: 70 }}>
        <Image
          src='/homerdonut.png'
          alt='Splash Screen Image'
          width={450}
          height={450}
        />
      </motion.div>
      <section className='flex flex-row items-center justify-center'>
        <div className='mt-4 text-4xl font-semibold text-slate-600 justify-evenly space-x-3'>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1.5 }}
            transition={{
              duration: 1,
              delay: 0.2,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
            style={{ display: 'inline-block', marginRight: '8px' }}>
            <div
              className={`${
                isAnimating ? 'bg-pink-400' : 'bg-gray-500'
              } h-4 w-4 rounded-full`}></div>
          </motion.span>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1.5 }}
            transition={{
              duration: 1,
              delay: 0.4,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
            style={{ display: 'inline-block', marginRight: '8px' }}>
            <div
              className={`${
                isAnimating ? 'bg-pink-400' : 'bg-gray-500'
              } h-4 w-4 rounded-full`}></div>
          </motion.span>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1.5 }}
            transition={{
              duration: 1,
              delay: 0.6,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
            style={{ display: 'inline-block', marginRight: '8px' }}>
            <div
              className={`${
                isAnimating ? 'bg-pink-400' : 'bg-gray-500'
              } h-4 w-4 rounded-full`}></div>
          </motion.span>
        </div>
      </section>
    </div>
  );
};

export default SplashScreen;
