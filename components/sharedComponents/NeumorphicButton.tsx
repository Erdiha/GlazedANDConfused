import React from 'react';
import Link from 'next/link';
import { Button } from '@material-tailwind/react';
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
  return <Link href={to}></Link>;
};

export default NeumorphicButton;
