import React, { useEffect, useRef, useState, Component } from 'react';
import { useRouter } from 'next/router';
import SplashScreen from '../components/splashScreen';
import '../styles/globals.css';
import StickyNavbar from '../components/Nav';
import Footer from '../components/Footer';
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
