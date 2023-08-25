import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
//import '@splidejs/splide/css';

// or other themes
import '@splidejs/splide/css/skyblue';
// import '@splidejs/splide/css/sea-green';

// or only core styles
// import '@splidejs/splide/css/default';
import { useAnimation } from 'framer-motion';
interface Image {
  src: string;
  name: string;
  desc: string;
}

interface ImageCarouselProps {
  images: Image[];
}

const CarouselComp: React.FC<ImageCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex]: any = React.useState(null); // Start with middle item

  return (
    <div className=' flex h-full w-[75%] max-w-[100rem] bg-[#FF6B6B] p-10 justify-center items-center flex-col gap-16 mb-20'>
      <Splide
        options={{
          rewind: true,
          gap: '1rem',
          perPage: 2,
          width: '80%',

          type: 'loop', // slide, loop, fade
          speed: 2000, // transition in milliseconds
          start: 1, // Display middle item by default
          perMove: 1,
          autoplay: true,
          interval: 3000,
          arrows: true,
          pagination: true,
          pauseOnHover: true,
          focus: 'center',
          role: 'div',
          label: 'donuts',
          useAnimation: {},
          paginationDirection: 'ltr',
          drag: 'free',
        }}
        className=''
        aria-label='My Favorite Images'>
        {images.map((image: Image, index: number) => (
          <SplideSlide key={index}>
            <div
              style={{ borderRadius: '50px' }}
              className='carousel flex flex-col border-4 border-white/50 pb-10'>
              <img src={image.src} alt={image.name} />
              <p className=' bg-white/50 text-black w-full text-xl p-5 h-10 font-[] text-center flex justify-center items-center'>
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

export default CarouselComp;
