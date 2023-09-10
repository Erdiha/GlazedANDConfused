import React, { useState, useEffect, useMemo } from "react";
import { Navbar, Collapse } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router"; // Import the useRouter hook
import { Sling as Hamburger } from "hamburger-react";
import DonutIcon from "./DonutIcon";
interface NavItem {
  id: number;
  name: string;
  label: string;
  path: string;
}
type NavbarElement = HTMLElement | null;
const Nav: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  const [openNav, setOpenNav] = React.useState(false);
  const isMobile = windowWidth < 468;
  const [activeItem, setActiveItem] = useState("home");
  const navbar: NavbarElement = document.getElementById("navbar");
  const items: NavItem[] = useMemo(
    () => [
      { id: 0, name: "home", label: "HOME", path: "/Home" },
      { id: 1, name: "donuts", label: "OUR DONUTS", path: "/Donuts" },
      { id: 2, name: "services", label: "OUR SERVICES", path: "/Services" },
      { id: 3, name: "clients", label: "OUR CLIENTS", path: "/Clients" },
      { id: 4, name: "about", label: "ABOUT US", path: "/About" },
      { id: 5, name: "contact", label: "CONTACT", path: "/Contact" },
    ],
    []
  );
  document.addEventListener("DOMContentLoaded", () => {
    const navItem = document.getElementById("navItem");

    if (navItem) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          navItem.classList.add("text-white");
          navItem.classList.remove("text-black");
        } else {
          navItem.classList.add("text-black");
          navItem.classList.remove("text-white");
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

  useEffect(() => {
    // Function to update window dimensions
    const updateWindowDimensions = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window?.innerWidth);
        setWindowHeight(window?.innerHeight);
      }
    };

    // Add event listener on component mount
    window.addEventListener("resize", updateWindowDimensions);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  if (navbar) {
    window.addEventListener("scroll", () => {
      // Check if the navbar element exists
      if (window.scrollY > 0) {
        navbar.classList.add("navbarGradientScroll");
        navbar.classList.remove("navbarGradient");
      } else {
        navbar.classList.remove("navbarGradientScroll");
        navbar.classList.add("navbarGradient");
      }
    });
  }

  useEffect(() => {
    setOpenNav(false);
  }, [router.asPath]);

  const navList = (
    <ul className="flex  flex-col lg:flex-row z-[9999] p-5  justify-center items-center w-full my-4 lg:p-2 lg:my-0 gap-4 h-[20rem] lg:h-full  ">
      {items.map((item, index) => (
        <li
          id="navItem"
          key={item.id}
          className={` h-full w-[60%] relative lg:w-full border-none z-[9999] 
          font-semibold text-md md:text-sm 2xl:text-lg 3xl:text-xl flex justify-center items-center 
          ${
            item.name === activeItem
              ? "activeNavItem "
              : isMobile
              ? "mobilePassiveNavItem"
              : "passiveNavItem "
          }`}
        >
          <Link
            href={item.path}
            id="navItem"
            className={`flex items-center  text-start lg:h-[3rem]  w-full  ${
              item.name === activeItem
                ? "justify-center text-gray-200"
                : "text-gray-800"
            } ${windowWidth < 480 ? "" : "justify-center"}`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="fixed top-0 min-w-screen w-full  overflow-hidden z-[9999]  justify-center items-center  ">
      <div
        id="navbar"
        className={`absolute inset-0 z-[-1]   ${
          openNav ? "bg-blue-400" : "navbarGradient"
        } `}
      />
      <Navbar
        color="transparent"
        className="sticky top-0 z-10 h-max max-w-[110rem] rounded-none py-2 md:py-4 px-4 lg:px-8 lg:py-6 justify-center items-center mx-auto"
      >
        <div className="flex items-center h-[5rem] w-full relative justify-end  3xl:justify-center bg-transparent">
          <DonutIcon />

          <div className="flex lg:flex w-fit  max-w-[120rem]  lg:w-[80%] ">
            <div className="hidden lg:flex w-full h-full justify-center  items-center ">
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
