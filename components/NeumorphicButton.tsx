// NeumorphicButton.js

import React from 'react';
import Link from 'next/link';

const NeumorphicButton = ({ text, to }: any) => {
  return (
    <Link
      href={to}
      className='flex w-full h-full justify-center items-center md:py-10'>
      <button className='neuButton'>{text}</button>
    </Link>
  );
};

export default NeumorphicButton;
