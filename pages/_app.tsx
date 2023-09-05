import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SplashScreen from '../components/SplashScreen';
import '../styles/globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ThemeProvider } from '@material-tailwind/react';
import SEO from '../components/SEO/SEO'; // Import the SEO component
import Layout from '../components/SEO/Layout'; // Import the Layout component

interface AppProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    // Hide splash screen after 2 seconds
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);
    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const router = useRouter();
  const { pathname } = router;
  const words =
    'Dessert Catering,Food Truck Catering,Food Truck Rental,Mini Donuts,Donuts,Donut Truck,Dessert Food Truck, Cheap Food Truck,Ice Cream Truck,Kosher Dessert,Corporate Catering,Wedding Caterer';
  // Define SEO information for each page
  const seoInfo: any = {
    '/': {
      title: 'Home - Your Website Title',
      description: 'Welcome to our website. Learn more about us.',
      keywords: words,
    },
    '/about': {
      title: 'About Us - Your Website Title',
      description: 'Learn more about our company and what we do.',
      keywords: words,
    },
    '/clients': {
      title: 'Our Clients - Your Website Title',
      description: 'Explore our list of satisfied clients.',
      keywords: words,
    },
    '/contact': {
      title: 'Contact Us - Your Website Title',
      description: 'Get in touch with us. We are here to help.',
      keywords: words,
    },
    '/donuts': {
      title: 'Donuts - Your Website Title',
      description: 'Discover our delicious donuts menu.',
      keywords: words,
    },
    '/services': {
      title: 'Services - Your Website Title',
      description: 'Explore our range of services.',
      keywords: words,
    },
  };

  // Retrieve SEO information for the current page
  const currentSeoInfo: any = seoInfo[pathname] || {};

  return (
    <>
      {showSplashScreen ? (
        <SplashScreen />
      ) : (
        <div className='relative'>
          <Nav />
          <Layout
            title={currentSeoInfo.title || 'Glazed and Confused'}
            description={currentSeoInfo.description || 'Default Description'}
            keywords={currentSeoInfo.keywords}>
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </div>
      )}
    </>
  );
};

export default MyApp;
