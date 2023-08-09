import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import SplashScreen from './glazed&confused';
import '../styles/globals.css';
import Navbar from '../components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './LandingPage';

interface AppProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const showSplashScreen = router.asPath === '/glazed&confused';
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (navRef.current) {
      setIsMobile(navRef.current.clientWidth < 768);
      navRef.current.classList.add('absolute');
    }
  }, []);

  useEffect(() => {
    if (!showSplashScreen) {
      router.prefetch('/glazed&confused');
    }
  }, [router, showSplashScreen]);

  if (showSplashScreen) {
    return <SplashScreen />;
  }

  return (
    <div className='relative flex flex-grow h-screen bg-transparent'>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
