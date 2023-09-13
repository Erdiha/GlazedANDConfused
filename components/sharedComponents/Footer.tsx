import React from 'react';

function Footer() {
  return (
    <div className="relative bottom-0 border-none justify-center items-center flex w-full bg-gradient-to-t from-blue-400/90 to-white/10  z-[9999]">
      <footer className="w-full  flex p-5  ">
        <div className="w-full h-full justify-around items-center text-center text-black/60 font-serif">
          <p className="text-[0.63rem]  lg:text-[1rem] flex justify-center tracking-wide">
            COPYRIGHT © 2020 MINIDONUTSLA - ALL RIGHTS RESERVED.
          </p>
          <p className="text-[0.55rem] lg:text-[0.7rem] tracking-wide leading-2">
            FOOD TRUCK CATERING, FOOD TRUCK RENTAL, WEDDINGS, MITZVAHS,
            CORPORATE CATERING, BIRTHDAY PARTIES, KOSHER, GLUTEN FREE, BOOZY
            DONUTS, FILM AND TV SET CATERING
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
