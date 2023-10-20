import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SplashScreen from '../components/sharedComponents/SplashScreen';
import '../styles/globals.css';
import Nav from '../components/sharedComponents/Nav';
import Footer from '../components/sharedComponents/Footer';
import Layout from '../components/SEO/Layout'; // Import the Layout component
import { seoInfo } from '@/components/data/texts';

interface AppProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  // useEffect(() => {
  //   // Hide splash screen after 2 seconds
  //   const timer = setTimeout(() => {
  //     setShowSplashScreen(false);
  //   }, 2000);
  //   // Clear the timer if the component unmounts
  //   return () => clearTimeout(timer);
  // }, []);

  const router = useRouter();
  const { pathname } = router;

  // Retrieve SEO information for the current page
  const currentSeoInfo: any = seoInfo[pathname] || {};
  console.log('currentSeoInfo', currentSeoInfo);
  return (
    
     
        <div className="relative">
          <Nav />
          <Layout
            title={currentSeoInfo.title || 'Glazed and Confused'}
            description={currentSeoInfo.description || 'Default Description'}
            keywords={currentSeoInfo.keywords}
          >
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </div>
      
    
  );
};

export default App;
