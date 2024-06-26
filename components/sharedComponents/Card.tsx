import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface CardProps {
  item: {
    src: string;
    title: string;
    description: string;
  };
  whatComp: string | null;
  index: number;
}

const Card: React.FC<CardProps> = ({ item, whatComp, index }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 468px)' });
  const [showFullDescription, setShowFullDescription] = useState(!isMobile);
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncatedDescription = item?.description?.substring(0, 100) + '...';
  const buttonText = showFullDescription ? 'Read Less' : 'Read More...';

  const imageContainer = () => {
    return (
      <div className="relative flex overflow-hidden md:justify-center md:items-center rounded-none w-fit h-fit">
        <Image
          objectPosition="center"
          loading="eager"
          width={whatComp === 'services' ? 700 : 400}
          height={500}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoadingComplete={(image) => image.classList.remove('opacity-0')}
          className={`hover:rounded-xl transition-opacity opacity-0 duration-[2s]  ${
            isMobile
              ? 'rounded-t-lg'
              : index % 2 === 0
              ? 'rounded-l-lg'
              : 'rounded-r-lg'
          }`}
          src={item.src}
          alt={'image' + index}
        />
      </div>
    );
  };
  const textContainer = () => {
    return (
      <div
        className={` flex flex-col md:h-full md:w-full absolute md:static bg-white/80 bottom-0 md:justify-evenly transition-all duration-500 
       items-center   invert md:invert-0 md:px-20 p-10 md:gap-10 gap-3`}
      >
        <p
          className="text-black dark:text-white flex
        md:w-full md:h-full items-center md:pl-7 text-xl  lg:text-3xl break-words hyphens-auto font-bold"
        >
          {item.title}
        </p>
        <p
          className="text-lg text-black dark:text-white w-full h-full tracking-wide flex-col lg:leading-[20px] flex indent-7 break-words hyphens-auto relative gap-2 lg:text-xl xl:text-2xl lg:font-normal font-normal"
          style={{ lineHeight: '1.5' }}
        >
          {showFullDescription ? item.description : truncatedDescription}
          {item?.description?.length > 100 && isMobile && (
            <button
              className="text-neutral-900 italic text-lg self-end border-b-2 border-b-black w-fit px-[2px] revert-0"
              onClick={toggleDescription}
            >
              {buttonText}
            </button>
          )}
        </p>
      </div>
    );
  };
  return (
    <motion.div
      initial={{ x: -100 + '%' }}
      whileInView={{
        x: 0,
        transition: {
          duration: 1,
          delay: index * 0.3,
          ease: 'easeInOut',
        },
      }}
      viewport={{ once: true }}
      whileHover={{
        translateX: `${
          !isMobile ? (index % 2 === 0 ? '30px' : '-30px') : '0px'
        }`,
        boxShadow: `${
          !isMobile
            ? index % 2 === 0
              ? '-10px 0 0 rgba(255, 82, 162, 0.5)'
              : '10px 0 0 rgba(255, 82, 162, 0.5)'
            : ''
        }`,
        transition: {
          duration: !isMobile ? 0.5 : 0,
          delay: 0,
          ease: 'easeInOut',
        },
      }}
      className={`flex-col lg:flex-row flex md:bg-white/90 rounded-t-lg md:rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-black/90 dark:bg-neutral-700 md:items-center md:justify-center  md:min-h-fit max-h-[80vh] md:max-h-fit ${
        whatComp === 'services' ? 'min-h-[60vh]' : 'min-h-[70vh]'
      }`}
    >
      {isMobile ? (
        <div className="flex flex-col md:flex-row h-full w-full items-center">
          {imageContainer()}
          {textContainer()}
        </div>
      ) : index % 2 === 0 ? (
        <div className="flex flex-col md:flex-row h-full w-full justify-center items-center">
          {imageContainer()}
          {textContainer()}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row h-full w-full justify-center items-center">
          {textContainer()}
          {imageContainer()}
        </div>
      )}
    </motion.div>
  );
};

export default Card;
