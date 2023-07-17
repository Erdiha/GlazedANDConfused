import { useEffect } from 'react';
import { useRouter } from 'next/router';
import SplashScreen from './glazed&confused';
import '../styles/globals.css';

interface AppProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const showSplashScreen = router.asPath === '/glazed&confused';

  useEffect(() => {
    if (!showSplashScreen) {
      router.prefetch('/glazed&confused');
    }
  }, [router, showSplashScreen]);

  if (showSplashScreen) {
    return <SplashScreen />;
  }

  return <Component {...pageProps} />;
};

export default MyApp;
