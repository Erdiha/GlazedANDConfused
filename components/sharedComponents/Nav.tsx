import React, { useState, useEffect, useMemo } from 'react';
import { Navbar, Collapse } from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import the useRouter hook
import { Sling as Hamburger } from 'hamburger-react';
import DonutIcon from './DonutIcon';
import { useMediaQuery } from 'react-responsive';
interface NavItem {
  id: number;
  name: string;
  label: string;
  path: string;
}
type NavbarElement = HTMLElement | null;

const Nav: React.FC = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const isMobile = useMediaQuery({ maxWidth: 468 });
  const [activeItem, setActiveItem] = useState('home');
  const navbar: NavbarElement = document.getElementById('navbar');

  const items: NavItem[] = useMemo(
    () => [
      { id: 0, name: 'home', label: 'HOME', path: '/home' },
      { id: 1, name: 'donuts', label: 'OUR DONUTS', path: '/donuts' },
      { id: 2, name: 'services', label: 'OUR SERVICES', path: '/services' },
      {
        id: 3,
        name: 'clientspage',
        label: 'OUR CLIENTS',
        path: '/clientspage',
      },
      { id: 4, name: 'about', label: 'ABOUT US', path: '/about' },
      { id: 5, name: 'contact', label: 'CONTACT', path: '/contact' },
    ],
    []
  );
  document.addEventListener('DOMContentLoaded', () => {
    const navItem = document.getElementById('navItem');

    if (navItem) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
          navItem.classList.add('text-white');
          navItem.classList.remove('text-black');
        } else {
          navItem.classList.add('text-black');
          navItem.classList.remove('text-white');
        }
      });
    }
  });

  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const pathname = router.pathname;
    const matchedItem = items?.find((item) => pathname.includes(item.path));

    if (matchedItem) {
      setActiveItem(matchedItem.name);
    }
  }, [router.pathname, items]);

  if (navbar) {
    window.addEventListener('scroll', () => {
      // Check if the navbar element exists
      if (window.scrollY > 0) {
        navbar.classList.add('navbarGradientScroll');
        navbar.classList.remove('navbarGradient');
      } else {
        navbar.classList.remove('navbarGradientScroll');
        navbar.classList.add('navbarGradient');
      }
    });
  }

  useEffect(() => {
    setOpenNav(false);
  }, [router.asPath]);

  const navList = (
    <ul className="flex  flex-col lg:flex-row z-[9999] md:p-4 py-8  justify-center items-center w-full my-2 gap-6  lg:h-full lg:w-[85%]  ">
      {items.map((item, index) => (
        <li
          id="navItem"
          key={item.id}
          className={` h-full w-[50%] relative lg:w-full border-none z-[9999] 
          font-semibold text-lg md:xl 3xl:xl  flex justify-center items-center 
          ${
            item.name === activeItem
              ? 'activeNavItem '
              : isMobile
              ? 'mobilePassiveNavItem'
              : 'passiveNavItem '
          }`}
        >
          <Link
            href={item.path}
            id="navItem"
            className={`flex items-center  text-start lg:h-[3rem]  w-full  ${
              item.name === activeItem
                ? 'justify-center text-gray-200'
                : 'text-gray-800'
            } ${isMobile ? '' : 'justify-center'}`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="fixed top-0 min-w-screen w-full  overflow-hidden z-[9999]  justify-center items-center  !bg-transparent">
      <div
        className={`absolute inset-0 z-[-1] !bg-transparent  ${
          openNav ? 'bg-blue-400' : '!bg-transparent'
        } `}
      />
      <Navbar
        id="navbar"
        className="sticky top-0 z-10 h-max max-w-[110rem] w-full  p-0 rounded-t-none rounded-none md:rounded-md md:rounded-t-none justify-center items-center border-none  mx-auto navbarGradient px-4"
      >
        <div className="flex items-center min-h-[5rem] justify-end lg:justify-center w-full relative bg-transparent p-4  ">
          <DonutIcon />

          <div className="flex lg:flex w-fit  max-w-[110rem]  lg:w-full ">
            <div className="hidden lg:flex w-full h-full justify-center lg:justify-end 3xl:justify-center  items-center ">
              {navList}
            </div>

            <div className="flex w-fit h-fit lg:hidden">
              <Hamburger
                color="rgba(66, 66, 66, 1)" // RGBA color value with alpha 1
                toggled={openNav}
                toggle={setOpenNav}
              />
            </div>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
