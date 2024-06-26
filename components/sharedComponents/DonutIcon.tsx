import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
const DonutIcon = () => {
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: 468 });
  return (
    <div
      onClick={() => router.push('/home')}
      className={`flex capitalize rounded-full px-2 aspect-square cursor-pointer bg-gray-300/90 shadow-md border-b-[3px] lg:border-b-[6px] border-b-pink-300 p-1 md:p-2 absolute left-0 transition ease-in-out duration-1000 `}
    >
      <div
        className={`flex justify-center items-center rounded-full lg:p-2 lg:px-4 p-1 px-2 border-b-blue-400 lg:border-b-[6px] border-b-[3px] `}
      >
        <AnimatePresence mode="wait">
          <Image
            key={router.pathname}
            content="cover"
            width={isMobile ? 40 : 45}
            height={isMobile ? 40 : 45}
            src="/homerdonut.png"
            alt="image"
            loading='eager'
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DonutIcon;
