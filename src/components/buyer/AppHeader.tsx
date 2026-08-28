"use client";

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function AppHeader() {
  const pathname = usePathname();
  const router = useRouter();
  
  // Format pathname into a readable title
  const getPageTitle = () => {
    if (pathname === '/buyer') return 'Dashboard';
    
    // Extract the last segment of the path and format it
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 1) {
      const lastSegment = segments[segments.length - 1];
      // Convert dashes to spaces and capitalize
      return lastSegment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    return 'Procurement';
  };

  return (
    <header className="w-full bg-white px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-40">
      <div className="flex items-center gap-3">
        {pathname !== '/buyer' ? (
          <button 
            onClick={() => router.back()}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-700"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
        ) : (
          <div className="w-8 h-8 bg-[var(--color-buyer-blue)] rounded text-white flex items-center justify-center font-bold text-lg">
             V
          </div>
        )}
        <h1 className="text-lg font-extrabold text-gray-900 tracking-tight">{getPageTitle()}</h1>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="relative text-gray-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
      </div>
    </header>
  );
}
