import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../components/SEO/Layout'; // Import the Layout component
import Footer from '../components/sharedComponents/Footer';
import Nav from '../components/sharedComponents/Nav';
import SplashScreen from '../components/sharedComponents/SplashScreen';
import '../styles/globals.css';

// Decide which metadata import to use based on the project's current structure.
// Assuming we continue with the pageMetadata as it allows more structured data management.
import { pageMetadata } from '@/components/SEO/Metadata';

interface AppProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

// Default SEO information, previously from backup-branch
const defaultSeoInfo = {
  title: 'Glazed and Confused - Gourmet Mini Donuts',
  description: 'Discover Glazed and Confused, your ultimate destination for gourmet mini donuts. Enjoy our wide variety of flavors, perfect for any occasion, from casual gatherings to special events.',
  keywords: 'gourmet mini donuts, donut catering, fresh donuts, donut truck, specialty donuts, homemade donuts',
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
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

  // Using pageMetadata with a fallback to defaultSeoInfo
  const seoData = pageMetadata[pathname] || defaultSeoInfo;

  return (
    <>
      {showSplashScreen ? (
        <SplashScreen />
      ) : (
        <div className="relative">
          <Nav />
          <Layout
            title={seoData.title}
            description={seoData.description}
            keywords={seoData.keywords}
          >
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
