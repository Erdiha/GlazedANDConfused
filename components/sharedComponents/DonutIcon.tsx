import React from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
export const DonutIconDataUrl = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' stroke='black' stroke-width='3' fill='pink' /%3E%3C/svg%3E`;

const DonutIcon = () => {
  const router = useRouter();
  const mbl = typeof window !== 'undefined' && window.innerWidth < 468;

  return (
    <div
      onClick={() => router.push('/')}
      className={`flex capitalize rounded-full px-2 aspect-square cursor-pointer bg-gray-300/90 shadow-md border-b-[4px] lg:border-b-[8px] border-b-pink-300 p-1 md:p-2 absolute left-0 transition ease-in-out duration-1000`}
    >
      <div
        className={`flex justify-center items-center rounded-full lg:p-2 lg:px-4 p-1 px-2 border-b-blue-400 lg:border-b-[8px] border-b-[4px] `}
      >
        <AnimatePresence mode="wait">
          <Image
            key={router.pathname}
            content="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={mbl ? 40 : 75}
            height={mbl ? 40 : 75}
            src="/homerdonut.png"
            alt="image"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DonutIcon;
