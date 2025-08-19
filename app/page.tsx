'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [logoSize, setLogoSize] = useState('256px');

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setLogoSize('500px');
      } else if (width >= 768) {
        setLogoSize('350px');
      } else {
        setLogoSize('256px');  // Minimum size is now 256px
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <img 
          src="/tikva.svg" 
          alt="Tikva Logo" 
          style={{ 
            width: logoSize, 
            height: logoSize,
            transition: 'all 0.5s ease',
            opacity: 0.85
          }}
          className="mx-auto mb-16 hover:opacity-100"
        />
        
        <p 
          className="text-sm sm:text-base text-gray-500 tracking-[0.3em]"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300
          }}
        >
          Coming Soon
        </p>
        <p 
          className="text-sm sm:text-base text-gray-500 tracking-[0.3em]"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300
          }}
        >
          <a href="mailto:info@tikva.ai" className="text-inherit no-underline" style={{ color: 'inherit', textDecoration: 'none' }}>info@tikva.ai</a>
        </p>
        <div className="flex items-center justify-center mt-12 space-x-3">
          <div className="w-8 h-px bg-gray-300"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-8 h-px bg-gray-300"></div>
        </div>
      </div>
    </main>
  );
}