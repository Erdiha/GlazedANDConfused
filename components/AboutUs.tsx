/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
function AboutUs() {
  const images = [
    {
      src: '/NYC.jpg',
      alt: 'New York City',
      title: 'Glazed & Confused is best known for on-site live donut making.',
      description:
        ' Our trucks are equipped to display our show-stopping mini donut machines in action. Your guests choose a flavor from a menu that you select--then they will be amazed as they watch their donuts being made from start to finish!',
    },
    {
      src: '/StreetEvents.jpg',
      alt: 'Street Events',
      title: 'Bringing Mini Donuts to Street Events',
      description:
        'Whether you are celebrating a birthday, having a backyard BBQ, or planning that big occasion, wed love to be part of your event!',
    },
    {
      src: '/BirthdayParties.jpg',
      alt: 'Birthday Parties',
      title: 'Spreading Joy at Any Events',
      description:
        'Make any event memorable with our delectable mini donuts, delighting guests of all ages. Our truck can be booked from just $500! Click below to get started.',
    },
    // Add more image objects as needed
  ];

  return (
    <div className='about-us flex flex-col justify-evenly items-center w-full h-full'>
      <div className='w-full h-full p-10 flex flex-col justify-center items-center'>
        {images.map((image, index) => (
          <section
            key={index}
            className='flex shadow-xl p-4   items-center justify-center bg-white'>
            <img width={300} className='' src={image.src} alt={image.alt} />

            <div className=' z-10 justify-center flex flex-col items-center p-8'>
              <h2 className='text-xl  mb-2 text-black font-bold p-4 text-left'>
                {image.title}
              </h2>
              <p className='text-black/90 p-4'>{image.description}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
