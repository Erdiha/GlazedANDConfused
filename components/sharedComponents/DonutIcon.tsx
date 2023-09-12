import React from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
const DonutIcon = () => {
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: 468 });
  return (
    <div
      onClick={() => router.push('/home')}
      className={`flex capitalize rounded-full px-2 aspect-square cursor-pointer bg-gray-300/90 shadow-md border-b-[4px] lg:border-b-[8px] border-b-pink-300 p-1 md:p-2 absolute left-0 transition ease-in-out duration-1000`}
    >
      <div
        className={`flex justify-center items-center rounded-full lg:p-4 lg:px-6 p-1 px-2 border-b-blue-400 lg:border-b-[8px] border-b-[4px] `}
      >
        <AnimatePresence mode="wait">
          <Image
            key={router.pathname}
            content="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={isMobile ? 40 : 60}
            height={isMobile ? 40 : 60}
            src="/homerdonut.png"
            alt="image"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DonutIcon;
