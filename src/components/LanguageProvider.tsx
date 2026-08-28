"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function LanguageProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const lang = localStorage.getItem('vyapti_lang');
    
    if (lang && lang !== 'en') {
      // Set the Google Translate cookie
      document.cookie = `googtrans=/en/${lang}; path=/`;
      if (window.location.hostname !== 'localhost') {
        document.cookie = `googtrans=/en/${lang}; domain=.${window.location.hostname}; path=/`;
      }
      
      // Only inject script if it doesn't exist
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.type = 'text/javascript';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.head.appendChild(script);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).googleTranslateElementInit = function() {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          new (window as any).google.translate.TranslateElement({
            pageLanguage: 'en',
            autoDisplay: false
          }, 'google_translate_element');
        };
      }
    } else {
        // Clear cookies if english is selected
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        if (window.location.hostname !== 'localhost') {
           document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${window.location.hostname}; path=/;`;
        }
    }
  }, [pathname]); // Re-run when they navigate from the language selection screen

  return <div id="google_translate_element" className="hidden"></div>;
}
