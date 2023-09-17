import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { Button } from '@material-tailwind/react';
import Loading from '../sharedComponents/Loading';

export const EmailSent = ({ emailResponse, setIsLoading, setIsEmailSent }: any) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
      className="flex flex-col relative h-full w-full p-10"
      id="emailSentDiv"
    >
      <div className=" min-h-[35%] md:h-[30%] md:min-h-[15vh,15vw]  rounded-xl  pt-5 px-4 flex flex-col bg-white/30  items-center md:gap-10 gap-5 bg-gradient-to-b from-primary-pink to-transparent text-primary-offWhite">
        <p className="md:text-4xl text-2xl px-5 uppercase font-bold tracking-wider addFunnyFont backbrop-blur-lg p-5 rounded-md animated-pulse">
          {emailResponse[0]}
        </p>
        <p
          style={{ textShadow: '0px 0px 10px white' }}
          className="text-xl md:text-2xl text-black/80 w-full   font-bold tracking-wide text-center"
        >
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
        className="flex bg-[#ff52a2] p-3 rounded-md text-lg 2xl:text-2xl  w-[30%] tracking-widest justify-center items-center shadow-2xl text-primary-offWhite border-black buttonText absolute bottom-5   right-5 font-bold text-shadow"
      >
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
      className="w-full h-full flex flex-col justify-evenly items-center"
    >
      <p className="text-5xl tracking-wide addFunnyFont animate-bounce text-shadow">SENDING...</p>
      <Loading isLoading={isLoading} />
    </motion.div>
  );
};
