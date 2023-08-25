import { useEffect, useState } from 'react';

function useResponsive() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window?.innerWidth <= 768, // Adjust the threshold as needed
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(typeof window !== 'undefined' && window?.innerWidth <= 768); // Adjust the threshold as needed
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}

export default useResponsive;
