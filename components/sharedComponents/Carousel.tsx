import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/skyblue";
import { ImageProps, ImageCarouselProps } from "../types";
import Image from "next/image";

const Carousel: React.FC<ImageCarouselProps> = ({ images, whatComp }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 468;
  return (
    <div className="flex h-full w-full  max-w-[100rem]  p-5 md:p-0 justify-center items-center flex-col  mb-20 backdrop-blur-xl bg-transparent ">
      <Splide
        options={{
          rewind: true,
          gap: isMobile ? "5px" : "1rem",
          perPage: isMobile ? 1 : 2,
          width: "100%",
          height: isMobile ? "60vh" : "45vh",
          type: "loop",
          speed: 1000,
          start: 0,
          snap: true,
          perMove: 1,
          autoplay: true,
          interval: 3000,
          arrows: true,
          pagination: false,
          pauseOnHover: true,
          focus: "center",
          role: "ul",
          label: "donuts",
          paginationDirection: "ltr",
          drag: "free",
          isNavigation: isMobile ? false : true,
          cover: false,
          requestAnimationFrame: true,
          easing: "cubic-bezier(.27,.27,.53,.87)",
          dragSensitivity: 0.9,
          paginationPath: "M 8 0 L 0 8 L 8 16 L 16 8 Z",
        }}
        aria-label="donut images"
      >
        {images.map((image: ImageProps, index: number) => (
          <SplideSlide key={index}>
            <div className=" flex flex-col bg-transparent backdrop-blur-lg shadow-xl w-full  h-full">
              {/* Set a fixed width and height for the image */}

              <div className="relative flex w-full h-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.name}
                  fill={true}
                  loading="eager"
                  style={{
                    objectFit: "cover", // cover, contain, none
                  }}
                  priority
                />
              </div>

              <div className="w-full h-fit flex flex-col ">
                {whatComp !== "services" && (
                  <p
                    style={{ fontFamily: "Henny Penny, cursive" }}
                    className="bg-white text-black w-full text-md p-5 h-12 text-center flex justify-center items-center tracking-widest font-bold md:text-2xl"
                  >
                    {image.name}
                  </p>
                )}
                <p
                  style={{
                    letterSpacing: whatComp === "services" ? "3px" : "",
                    fontFamily:
                      whatComp === "services" ? "Henny Penny, cursive" : "",
                    fontSize:
                      whatComp === "services"
                        ? isMobile
                          ? "1.7rem"
                          : "2.2rem"
                        : whatComp === "donuts" && isMobile
                        ? "0.85rem"
                        : "1.3rem",
                  }}
                  className={`text-white bg-black w-full text-sm p-5 h-24 text-center flex justify-center items-center`}
                >
                  {image.desc}
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;
