import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Loading from './Loading';
import { useMediaQuery } from 'react-responsive';

const SplashScreen: React.FC = () => {
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: 468 });

  useEffect(() => {
    // Redirect to the home page when the component mounts
    router.push('/home');
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div className="flex flex-col items-center justify-evenly h-screen bg-blue-300 text-white w-screen p-10 overflow-hidden">
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', damping: 10, stiffness: 70, mass: 2 }}
      >
        <Image
          src="/homerdonut.png"
          alt="Splash Screen Image"
          width={isMobile ? 200 : 300}
          height={isMobile ? 200 : 300}
        />
      </motion.div>
      <Loading isMobile={isMobile} isLoading={true} />
    </div>
  );
};

export default SplashScreen;
