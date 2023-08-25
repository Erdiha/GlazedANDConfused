/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import useResponsive from './Responsive';
import SharedContainer from './SharedContainer';

function AboutUs() {
  const images = [
    {
      src: '/Weddings.jpg',
      alt: 'Street Events',
      title: 'On-site live donut making',
      description:
        ' Our trucks are equipped to display our show-stopping mini donut machines in action. Your guests choose a flavor from a menu that you select--then they will be amazed as they watch their donuts being made from start to finish!',
    },

    {
      src: '/TruckPhoto2.jpg',
      alt: 'BarMitzvah  image',

      title: '  Private Catering for All Occasions',
      description:
        'Make any event memorable with our delectable mini donuts, delighting guests of all ages. Whether you are celebrating a birthday, having a backyard BBQ, or planning that big occasion, wed love to be part of your event! ',
    },
  ];

  return <SharedContainer images={images} />;
}

export default AboutUs;
