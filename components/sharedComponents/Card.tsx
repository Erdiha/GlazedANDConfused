import React, { useState } from "react";
import { TERipple } from "tw-elements-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CardProps {
  item: {
    src: string; // Update this type as needed
    title: string;
    description: string;
  };
  whatComp: any; // Replace 'any' with the actual type of 'whatComp'
  index: number; // Replace 'number' with the actual type of 'index'
}

const Card: React.FC<CardProps> = ({ item, whatComp, index }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 468;
  const [showFullDescription, setShowFullDescription] = useState(!isMobile);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncatedDescription = item?.description?.substring(0, 100) + "...";
  const buttonText = showFullDescription ? "Read Less" : "Read More...";

  const imageContainer = () => {
    return (
      <div
        style={{
          width: whatComp === "services" ? "100%" : "",
          height: whatComp === "services" ? "100%" : "",
        }}
        className="relative flex overflow-hidden md:justify-center md:items-center rounded-none w-fit h-fit"
      >
        <Image
          objectPosition="center"
          loading="eager"
          width={700}
          height={700}
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          className={`hover:rounded-xl transition-opacity opacity-0 duration-[2s]  ${
            isMobile
              ? "rounded-t-lg"
              : index % 2 === 0
              ? "rounded-l-lg"
              : "rounded-r-lg"
          }`}
          src={item.src}
          alt={"image" + index}
        />
      </div>
    );
  };
  const textContainer = () => {
    return (
      <div
        className={` flex flex-col md:h-full md:w-full absolute md:static bg-white/80 bottom-0 md:justify-evenly transition-all duration-500 ${
          whatComp !== "services" ? "absolute" : "static"
        }
       items-center p-4  invert md:invert-0 md:p-5 md:gap-10 gap-3 ${
         showFullDescription ? "h-fit" : "h-fit"
       }`}
      >
        <p
          className="text-black dark:text-white flex
        md:w-full md:h-full items-center md:pl-7 text-xl md:text-4xl break-words hyphens-auto font-bold"
        >
          {item.title}
        </p>
        <p className="lg:text-xl text-md font-normal text-black dark:text-white w-full h-full tracking-wide flex-col lg:leading-relaxed flex indent-7 break-words hyphens-auto relative gap-2">
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
      initial={{ x: -100 + "%" }}
      whileInView={{
        x: 0,
        transition: {
          duration: 1,
          delay: index * 0.3,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true }}
      whileHover={{
        translateX: `${
          !isMobile ? (index % 2 === 0 ? "30px" : "-30px") : "0px"
        }`,
        boxShadow: `${
          !isMobile
            ? index % 2 === 0
              ? "-10px 0 0 rgba(255, 82, 162, 0.5)"
              : "10px 0 0 rgba(255, 82, 162, 0.5)"
            : ""
        }`,
        transition: {
          duration: !isMobile ? 0.5 : 0,
          delay: 0,
          ease: "easeInOut",
        },
      }}
      className={`flex-col lg:flex-row flex md:bg-white/90 rounded-t-lg md:rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-black/90 dark:bg-neutral-700 md:items-center md:justify-center  md:min-h-fit max-h-[80vh] md:max-h-fit ${
        whatComp === "services" ? "min-h-[60vh]" : "min-h-[70vh]"
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
