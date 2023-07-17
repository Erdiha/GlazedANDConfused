import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import IcecreamOutlinedIcon from '@mui/icons-material/IcecreamOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { GiFoodTruck, GiDonut } from 'react-icons/gi';
import { styled } from '@mui/system';
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const NavItems = styled(BottomNavigationAction)({
    color: 'gray',

    '&.Mui-selected': {
      color: '#EF6262',
      animation: 'pulsate 1.5s 1 ease-in-out',
    },
    '@keyframes pulsate': {
      '0%': {
        transform: 'translateY(10px) rotate(0deg) scale(4)', // Adjusted transform property to translateY
      },
      '50%': {
        transform: 'translateY(-10px) rotate(0deg) scale(1)', // Adjusted transform property to translateY
      },
      '100%': {
        transform: 'translateY(0px) rotate(0deg) scale(1)', // Adjusted transform property to translateY
      },
    },
  });

  return (
    <BottomNavigation
      style={{
        width: 'xl',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
      }}
      value={value}
      onChange={handleChange}
      // Show labels for the actions
    >
      <NavItems label='Home' value='home' icon={<AiOutlineHome size={35} />} />
      <NavItems label='Donuts' value='donut' icon={<GiDonut size={35} />} />
      <NavItems label='Rent' value='truck' icon={<GiFoodTruck size={35} />} />
      <NavItems
        label='Contact'
        value='contact'
        icon={<AiOutlineMail size={35} />}
      />
    </BottomNavigation>
  );
}
