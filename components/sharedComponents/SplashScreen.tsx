import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Loading from './Loading';
import { useMediaQuery } from 'react-responsive';

const SplashScreen: React.FC = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState<boolean | undefined>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 468;
    }
    return undefined;
  });
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (divRef.current) {
      setIsMobile(divRef.current.clientWidth < 768);
    }

    const timeout = setTimeout(() => {
      router.push('/Home');
    }, 100); // Adjust the timeout duration as needed

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div
      ref={divRef}
      className='flex flex-col items-center justify-evenly h-screen bg-blue-300 text-white w-screen p-10 overflow-hidden'>
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
      <Loading isMobile={isMobile} isLoading={true} />
    </div>
  );
};

export default SplashScreen;
