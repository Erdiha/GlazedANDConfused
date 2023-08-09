import * as React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { GiFoodTruck, GiDonut } from 'react-icons/gi';
import { styled } from '@mui/system';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('home');
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    // typeof window !== undefined && window.scrollTo(0, document.body.scrollHeight);
    if (navRef?.current) {
      const getWidth = navRef.current.clientWidth;
      console.log('getWidth', getWidth);
      getWidth < 768 ? setIsMobile(true) : setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    setValue(router.pathname.substring(1, router.pathname.length));
  }, [router.pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    router.push(`/${newValue}`);
    setValue(newValue);
  };

  const NavItems = styled(BottomNavigationAction)({
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: '0.8px',
    '&.Mui-selected': {
      color: '#FF52A2',
      backgroundColor: 'white',
      animation: `${isMobile ? 'pulsateMobile' : 'pulsate'} 1s 1 ease-in-out`,
      borderRadius: '5px',
      boxShadow: '0px 0px 1px white',
      padding: '3px',
      transform: isMobile ? 'translateY(-10px)' : 'translateY(10px)',
      transition: 'all .5s ease-in-out',
    },
  });

  return (
    <BottomNavigation
      ref={navRef}
      style={{
        zIndex: 999,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '0px 3%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Background color with transparency
        backdropFilter: 'blur(10px)', // Frosted glass effect
        backfaceVisibility: 'visible',
      }}
      value={value}
      showLabels
      onChange={handleChange}>
      <NavItems label='Home' value='home' icon={<AiOutlineHome size={35} />} />
      <NavItems label='Donuts' value='donuts' icon={<GiDonut size={35} />} />
      <NavItems
        label='About Us'
        value='foodTruckRental'
        icon={<GiFoodTruck size={35} />}
      />
      <NavItems
        label='Contact'
        value='contact'
        icon={<AiOutlineMail size={35} />}
      />
    </BottomNavigation>
  );
}
