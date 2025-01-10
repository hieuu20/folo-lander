import { useEffect, useState } from 'react';

function isSafariOrIphone() {
    const userAgent = navigator.userAgent;
    // const vendor = navigator.vendor;
    // console.log({userAgent, vendor});
    const isSafari = navigator.vendor.includes('Apple') && userAgent.includes('Safari') && !userAgent.includes('CriOS') && !userAgent.includes('FxiOS');
    const isIphone = /iPhone/.test(navigator.platform) || /iPhone/.test(userAgent);
  
    return isSafari || isIphone;
}

export default function useDevice() {
  const [isIphone, setIphone] = useState(false);

  useEffect(() => {
    setIphone(isSafariOrIphone());
  }, []);

  return isIphone;
}

// "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
// "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Safari/605.1.15"