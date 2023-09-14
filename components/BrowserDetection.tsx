import React, { useState, useEffect } from 'react';

function BrowserDetection() {
  const [browser, setBrowser] = useState('Unknown');

  useEffect(() => {
    function detectBrowser() {
      const userAgent = window.navigator.userAgent;

      if (userAgent.includes('Firefox')) {
        setBrowser('Firefox');
      } else if (userAgent.includes('Chrome')) {
        setBrowser('Chrome');
      } else if (userAgent.includes('Safari')) {
        setBrowser('Safari');
      } else if (userAgent.includes('Edge')) {
        setBrowser('Edge');
      } else if (userAgent.includes('IE')) {
        setBrowser('Internet Explorer');
      } else {
        setBrowser('Unknown');
      }
    }

    detectBrowser();
  }, []);

  return browser;
}

export default BrowserDetection;
