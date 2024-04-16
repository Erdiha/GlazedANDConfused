import { seoInfo } from '@/components/data/texts'; // Adjust the path as needed
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../components/SEO/Layout';
import Footer from '../components/sharedComponents/Footer';
import Nav from '../components/sharedComponents/Nav';
import SplashScreen from '../components/sharedComponents/SplashScreen';
import '../styles/globals.css';

interface AppProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

const defaultSeoInfo = {
  title: 'Glazed and Confused',  // Default title
  description: 'Default Description',  // Default description
  keywords: 'default, keywords, here',  // Default keywords
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const router = useRouter();
  const { pathname } = router;
  const currentSeoInfo = seoInfo[pathname] ?? defaultSeoInfo;

  return (
    <>
      {showSplashScreen ? (
        <SplashScreen />
      ) : (
        <div className="relative">
          <Nav />
          <Layout
            title={currentSeoInfo.title}
            description={currentSeoInfo.description}
            keywords={currentSeoInfo.keywords}
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
