import React from 'react';

function Footer() {
  return (
    <div className="relative bottom-0 border-none flex w-full h-fit  bg-gradient-to-t from-blue-400 to-white/40">
      <footer className="w-full md:p-10 flex p-4  ">
        <div className="w-full h-full justify-center items-center text-center text-black/60 font-serif">
          <p className="text-[0.6rem]  lg:text-[0.8rem] flex justify-center tracking-wide">
            COPYRIGHT © 2020 MINIDONUTSLA - ALL RIGHTS RESERVED.
          </p>
          <span className="text-[0.56rem] lg:text-[0.75rem] tracking-wide">
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
