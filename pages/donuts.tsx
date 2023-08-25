/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect, useState } from 'react';
import CarouselComp from '@/components/Carousel';
import { Typography } from '@material-tailwind/react';
import SharedContainer from '@/components/SharedContainer';

function OurDonuts() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const flavors: any = [
    {
      src: '/donutImages/FrenchToast.jpg',
      name: 'French Toast',
      desc: 'Maple Glaze, Crushed Graham, Cinnamon Dust',
    },
    {
      src: '/donutImages/Jelly.jpg',
      name: 'Jelly Donut',
      desc: 'Seasonal Fruit Jelly, Powdered Sugar',
    },
    {
      src: '/donutImages/OldFashioned.jpg',
      name: 'Old Fashioned',
      desc: 'Powdered Sugar',
    },
    {
      src: '/donutImages/SimplyGlazed.jpg',
      name: 'Simply Glazed',
      desc: 'Vanilla Glaze',
    },
    {
      src: '/donutImages/Smores.jpg',
      name: 'S\u2019Mores',
      desc: 'Marshmallow Sauce, Graham Cracker & Chocolate Glaze',
    },
    {
      src: '/donutImages/FruityPebbles.jpg',
      name: 'Fruity Pebbles',
      desc: 'Vanilla Glaze, Fruity Pebbles',
    },
    {
      src: '/donutImages/Funfetti.jpg',
      name: 'FunFetti',
      desc: 'Vanilla Glaze, Rainbow Sprinkles',
    },
    {
      src: '/donutImages/Classic.jpg',
      name: 'Classic​',
      desc: 'Powdered Sugar & Cinnamon Dust​ ',
    },
    {
      src: '/donutImages/CookiesNCream.jpg',
      name: 'Cookies & Cream',
      desc: 'Oreo Crumbs, Chocolate Glaze & Powdered Sugar',
    },
  ];

  const ourDonuts = [
    {
      src: '/donutImages/1.jpg',
      alt: 'donut Events',
      title:
        'Glazed & Confused specializes in fresh, made-to-order mini donuts.',
      description:
        'That means the little pillows of joy are made right before your eyes and come out warm. They are then drizzled with the glazes and toppings of your choice. A tray of these bite-size treats is the perfect any time indulgent snack and is the ultimate dessert to impress your friends and family!',
    },

    {
      src: '/donutImages/2.jpg',
      alt: 'donut  image',

      title: '  Private Catering for All Occasions',
      description:
        'Our loyal fans know our donuts to be light and airy. This is because we use no artificial base ingredients and our donut batter is trans-fat free. The unique flavor comes from a blend of spices including nutmeg and turmeric. We fry all our donuts in vegetable oil at a very hot 375 degrees. This produces a light crisp exterior with a soft fluffy inside that wont leave your hands greasy. Our ingredients and donut batter are Certified Kosher* to meet OU-D standards. Gluten Free donuts and a Nut Free environment are also available for private events.',
    },
    {
      src: '/donutImages/3.jpg',
      alt: 'donut  image',

      title: '  Private Catering for All Occasions',
      description:
        'Looking for a unique treat to cool down your guests? Try our Ice Cream Donut Sundaes! We serve our freshly made donuts on top off a scoop of high quality vanilla ice cream. Guests are then able to customize their sundaes with our glazes and toppings. A real crowd pleaser! ' +
        'We offer over ten mouth-watering combinations of glazes and toppings for a tray of donuts (because one is never enough!). Check out our regular menu flavors below, and dont forget to ask about our seasonal specials and boozy options for the 21+ crowd. Donut forget the drinks! Coffee, Cold Brew, Hot Cocoa and Cider available upon request!',
    },
    {
      src: 'na',
      alt: '',

      title: '',
      description:
        '*While we only use Kosher ingredients. We DO NOT hold a Kosher Certificate. If you want the truck to be inspected and go through a Kashering, you must rent the truck the day before your event as well as the day of the event',
    },
  ];

  return (
    <div className='flex flex-col w-full min-h-screen  relative md:justify-center md:items-center  bg-black/10 truck '>
      <div className='flex justify-between items-center w-full   flex-col py-20 gap-10'>
        <div className='w-full h-full  backdrop-blur-sm   flex  justify-center items-center text-2xl flex-wrap flex-col'>
          <SharedContainer images={ourDonuts} />
        </div>
        <div className='w-full h-full  backdrop-blur-sm   flex  justify-center items-center text-2xl flex-wrap flex-col'>
          <CarouselComp images={flavors} />
        </div>
      </div>
    </div>
  );
}

export default OurDonuts;
