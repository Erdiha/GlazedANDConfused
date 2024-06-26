import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Loading from './Loading';

const SplashScreen: React.FC = () => {
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: 468 });
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isMounted.current) {
        setShowSplashScreen(false);
      }
    }, 2000); // Delay for 2 seconds before setting showSplashScreen to false

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  useEffect(() => {
    if (!showSplashScreen) {
      router.push('/home');
    }
  }, [showSplashScreen]);

  return (
    <>
      {showSplashScreen ? (
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
              loading='eager'
              priority={true}
            />
          </motion.div>
          <Loading isMobile={isMobile} isLoading={true} />
        </div>
      ) : null}
    </>
  );
};

export default SplashScreen;
