import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { Button } from '@material-tailwind/react';
import Loading from '../sharedComponents/Loading';

export const EmailSent = ({
  emailResponse,
  setIsLoading,
  setIsEmailSent,
}: any) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
      className='flex flex-col relative'
      id='emailSentDiv'>
      <div className='w-full h-[40%] py-20 px-10 flex flex-col items-center gap-10 bg-gradient-to-b from-primary-pink to-transparent text-primary-offWhite'>
        <p className='text-4xl uppercase font-bold tracking-wider addFunnyFont bg-black/50 backbrop-blur-lg p-5 rounded-md animated-pulse'>
          {emailResponse[0]}
        </p>
        <p className='text-2xl text-black/80 font-bold tracking-wide text-center '>
          {emailResponse[1]}
        </p>
      </div>
      <motion.button
        onClick={() =>
          setIsEmailSent((prevIsEmailSent: any) => ({
            ...prevIsEmailSent,
            openContainer: false, // Set mailSent to true
          }))
        }
        transition={{
          type: 'spring',
          damping: 70,
          stiffness: 800,
          duration: 1,
          repeatType: 'mirror',
        }}
        whileHover={{ scale: 1.05, border: '3px solid black' }}
        className='flex bg-[#ff52a2] p-6 rounded-md text-lg 2xl:text-2xl 3xl:text-3xl w-[30%] tracking-widest justify-center items-center shadow-xl text-primary-offWhite border-black buttonText absolute bottom-5 right-5 font-bold text-shadow'>
        CLOSE
      </motion.button>
    </motion.div>
  );
};

export const EmailSending = ({ isLoading }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
      className='w-full h-full flex flex-col justify-evenly items-center'>
      <p className='text-5xl tracking-wide addFunnyFont animate-bounce text-shadow'>
        SENDING...
      </p>
      <Loading isLoading={isLoading} />
    </motion.div>
  );
};
