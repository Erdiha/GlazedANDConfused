import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/skyblue';
import { Image, ImageCarouselProps } from '../components/types';

const Carousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <div className='flex h-full w-[75%] max-w-[100rem]  p-10 justify-center items-center flex-col gap-16 mb-20 '>
      <Splide
        options={{
          rewind: true,
          gap: '1rem',
          perPage: 2,
          width: '100%',
          type: 'loop',
          speed: 1000,
          start: 0,
          perMove: 1,
          autoplay: true,
          interval: 3000,
          arrows: true,
          pagination: false,
          pauseOnHover: true,
          focus: 'center',
          role: 'ul',
          label: 'donuts',
          paginationDirection: 'ltr',
          drag: 'free',
          isNavigation: true,
          cover: true,
          requestAnimationFrame: true,
          easing: 'cubic-bezier(.27,.27,.53,.87)',
          dragSensitivity: 0.5,
          paginationPath: 'M 8 0 L 0 8 L 8 16 L 16 8 Z',
        }}
        aria-label='My Favorite Images'>
        {images.map((image: Image, index: number) => (
          <SplideSlide key={index}>
            <div className=' flex flex-col  pb-10 bg-white shadow-xl'>
              {/* Set a fixed width and height for the image */}
              <img
                src={image.src}
                alt={image.name}
                style={{
                  width: '100%',
                  height: '350px',
                  objectFit: 'cover',
                }}
              />
              <p
                style={{ fontFamily: 'Henny Penny, cursive' }}
                className='bg-white text-black w-full text-2xl p-5 h-10 text-center flex justify-center items-center tracking-widest font-bold '>
                {image.name}
              </p>
              <p className='text-white bg-black w-full text-xl p-5 h-20 text-center flex justify-center items-center'>
                {image.desc}
              </p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;
