import React, { useState } from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import the useRouter hook

import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from '@heroicons/react/24/outline';
import DonutIcon from './DonutIcon';
interface Iprops {
  getNavHeight: (height: number) => void; // Callback function to get nav height
}

const StickyNavbar: React.FC = () => {
  const navRef = React.useRef<HTMLDivElement | null>(null);

  const [openNav, setOpenNav] = React.useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const items = [
    { id: 1, name: 'home', label: 'HOME', path: '/home' },
    { id: 2, name: 'donuts', label: 'OUR DONUTS', path: '/donuts' },
    {
      id: 3,
      name: 'services',
      label: 'OUR SERVICES',
      path: '/services',
    },
    { id: 4, name: 'contact', label: 'CONTACT', path: '/contact' },
  ];
  const router = useRouter(); // Initialize the router

  React.useEffect(() => {
    const pathname = router.pathname;
    const matchedItem = items.find((item) => pathname.includes(item.path));
    if (matchedItem) {
      setActiveItem(matchedItem.name);
    }
  }, [router.pathname]);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 780 && setOpenNav(false),
    );
    const height: any = navRef?.current?.clientHeight;
  }, []);
  React.useEffect(() => {
    setOpenNav(false);
  }, [router.asPath]);
  const navList = (
    <Typography
      as='ul'
      className='flex  flex-col lg:flex-row  text-xl  lg:w-[60%]  w-full   h-[20rem] lg:h-[4rem] z-[9999] mt-3   ml-0 rounded-md md:ml-auto justify-center  p-8 md:p-0 gap-5 max-w-[80%]'>
      {items.map((item, index) => (
        <Typography
          key={item.id}
          as='li'
          variant='large'
          color='white'
          className={`h-[20%] md:h-full w-full border-none font-semibold   flex justify-center items-center 
          ${
            item.name === activeItem
              ? 'activeNavItem text-white'
              : 'passiveNavItem text-black'
          }`}>
          <Link
            href={item.path}
            className={`flex items-center justify-start md:justify-center pl-4 md:pl-0 h-full text-xl text-center w-full `}>
            {item.label}
          </Link>
        </Typography>
      ))}
    </Typography>
  );

  return (
    <div
      ref={navRef}
      className='fixed top-0 w-full md:h-fit overflow-hidden z-[9999]  justify-center items-center px-8 py-2'>
      <div className='absolute  inset-0 z-[-1] bg-gradient-to-b from-blue-400 to-white/10' />
      <Navbar className=' border-none  '>
        <div className='flex items-center z-[9999] justify-center  h-full w-full '>
          <div
            onClick={() => router.push('/')}
            className='flex z-[9999] justify-center items-center capitalize  rounded-full px-2 aspect-square cursor-pointer  bg-gray-300/90  shadow-2xl border-t-[8px]  border-t-pink-400'>
            <DonutIcon />
          </div>

          <div className='flex  gap-4 w-full h-full justify-evenly items-center '>
            <div className='mr-4 hidden lg:flex w-full justify-center  items-center'>
              {navList}
            </div>

            <IconButton
              variant='text'
              className='absolute right-10 h-full  text-inherit hover:bg-transparent  focus:bg-transparent active:bg-transparent flex lg:hidden justify-center items-center '
              ripple={false}
              onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav style={{}} open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
      {/* <div className='mx-auto max-w-screen-md py-12'>
        <Card className='mb-12 overflow-hidden'>
          <img
            alt='nature'
            className='h-[32rem] w-full object-cover object-center'
            src='https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80'
          />
        </Card>
        <Typography variant='h2' color='blue-gray' className='mb-2'>
          What is Material Tailwind
        </Typography>
        <Typography color='gray' className='font-normal'>
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?. I think we need to start from scratch can my
          website be in english?, yet make it sexy i&apos;ll pay you in a week
          we don&apos;t need to pay upfront i hope you understand can you make
          it stand out more?. Make the font bigger can you help me out? you will
          get a lot of free exposure doing this that&apos;s going to be a chunk
          of change other agencies charge much lesser. Are you busy this
          weekend? I have a new project with a tight deadline that&apos;s going
          to be a chunk of change. There are more projects lined up charge extra
          the next time.
        </Typography>
      </div> */}
    </div>
  );
};

export default StickyNavbar;
