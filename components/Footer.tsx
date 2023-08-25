import React from 'react';

function Footer() {
  return (
    <div className='absolute bottom-0 border-none flex w-full h-fit  bg-gradient-to-t from-blue-400 to-white/40'>
      <footer className='w-full p-10 flex   '>
        <div className='w-full h-full justify-center items-center text-center text-black/60 font-serif'>
          <p className='text-[0.8rem]  lg:text-md flex justify-center '>
            COPYRIGHT © 2020 MINIDONUTSLA - ALL RIGHTS RESERVED.
          </p>
          <span className='text-[0.75rem]'>
            FOOD TRUCK CATERING, FOOD TRUCK RENTAL, WEDDINGS, MITZVAHS,
            CORPORATE CATERING, BIRTHDAY PARTIES, KOSHER, GLUTEN FREE, BOOZY
            DONUTS, FILM AND TV SET CATERING
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
