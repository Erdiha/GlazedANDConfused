import React from 'react';
import Link from 'next/link';
import { Button } from '@material-tailwind/react';
import { AiOutlineForm } from 'react-icons/ai';
interface NeumorphicButtonProps {
  text: string;
  to: string;
  icon: any;
}

const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({
  text,
  to,
  icon,
}) => {
  return (
    <Link href={to}>
      <Button
        variant='filled'
        size='lg'
        style={{
          fontFamily: 'Henny Penny, cursive',
        }}
        className='flex bg-[#ff52a2] p-6 rounded-lg text-3xl w-[500px] h-[100px] tracking-widest hover:scale-105 justify-center items-center hover:shadow-xl hover:border-4 border-black transition-all ease-in-out duration-700'>
        {text}
      </Button>
    </Link>
  );
};

export default NeumorphicButton;
