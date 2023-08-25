import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import SplashScreen from './glazed&confused';
import '../styles/globals.css';
import StickyNavbar from '../components/Navbar';
import LandingPage from '../components/LandingPage';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ThemeProvider } from '@material-tailwind/react';

interface AppProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [showSplashScreen, setShowSplashScreen] = useState(true); // State to control splash screen
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Hide splash screen after 2 seconds
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {showSplashScreen ? (
        <SplashScreen />
      ) : (
        <div className='relative'>
          <StickyNavbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
};

export default MyApp;
