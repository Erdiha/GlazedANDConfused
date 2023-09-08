import React from 'react';
import Link from 'next/link';
import { Button } from '@material-tailwind/react';
import { AiOutlineForm } from 'react-icons/ai';
interface NeumorphicButtonProps {
  text: string;
  to: string;
  icon?: any;
  size: { w: string; h: string; size: any };
}

const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({
  text,
  to,
  icon,
  size,
}) => {
  return (
    <Link href={to}>
      <Button
        variant='filled'
        size={size.size}
        style={{ width: size.w, height: size.h }}
        className='flex bg-[#ff52a2] p-6 rounded-lg text-lg 2xl:text-2xl 3xl:text-3xl  tracking-widest hover:scale-105 justify-center items-center hover:shadow-xl hover:border-4 border-black transition-all ease-in-out duration-700 buttonText '>
        {text}
      </Button>
    </Link>
  );
};

export default NeumorphicButton;
