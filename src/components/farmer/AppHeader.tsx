"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

export default function AppHeader() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="w-full bg-white px-4 py-3 sticky top-0 z-40 flex items-center justify-between">
      
      {/* Left: Action (Back/Hamburger) & Logo */}
      <div className="flex items-center gap-4">
        {pathname !== '/farmer' ? (
          <button 
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors border border-gray-200 shadow-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
        ) : (
          <button className="text-gray-800 flex flex-col gap-1.5 w-6">
            <span className="w-full h-0.5 bg-current rounded-full"></span>
            <span className="w-full h-0.5 bg-current rounded-full"></span>
            <span className="w-4 h-0.5 bg-current rounded-full"></span>
          </button>
        )}
        
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" fill="var(--color-brand-green-light)" fillOpacity="0.2"/>
              <path d="M32 12L34 16L38 14L36 18L40 20L36 22L38 26L34 24L32 28L30 24L26 26L28 22L24 20L28 18L26 14L30 16L32 12Z" fill="var(--color-warm-yellow)"/>
              <path d="M22 28C22 28 32 18 42 28" fill="var(--color-warm-yellow)"/>
              <path d="M42 28H22V32C22 37.5228 26.4772 42 32 42C37.5228 42 42 37.5228 42 32V28Z" fill="var(--color-warm-yellow)"/>
              <path d="M20 32C20 32 26 44 32 46C32 46 20 44 20 32Z" fill="var(--color-brand-green)"/>
              <path d="M44 32C44 32 38 44 32 46C32 46 44 44 44 32Z" fill="var(--color-brand-green-dark)"/>
              <path d="M32 46C32 46 36 56 42 60C42 60 28 58 32 46Z" fill="var(--color-brand-green-dark)"/>
              <path d="M32 46C32 46 28 56 22 60C22 60 36 58 32 46Z" fill="var(--color-brand-green)"/>
            </svg>
            <div className="flex flex-col items-start justify-center pt-0.5">
              <span className="text-xl font-extrabold text-[var(--color-brand-green-dark)] leading-none tracking-tight">VYAPTI</span>
              <span className="text-[9px] font-bold text-[var(--color-brand-green-dark)] tracking-[0.35em] mt-0.5 leading-none pl-0.5">KSHETRA</span>
            </div>
          </div>
          <span className="text-[10px] font-medium text-gray-500 mt-1">
            One field. One network. A fairer market.
          </span>
        </div>
      </div>

      {/* Right: Language, Bell, Profile */}
      <div className="flex items-center gap-3">
        {/* Language Pill */}
        <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm text-xs font-bold text-gray-700">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          English
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        {/* Bell */}
        <button className="relative text-gray-700">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-white">3</span>
        </button>
        
        {/* Profile */}
        <div className="w-10 h-10 rounded-full overflow-hidden relative border border-gray-200 bg-green-50 shadow-sm ml-1">
          <Image 
            src="/images/farmer_portrait.jpg" 
            alt="Profile" 
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white z-10"></div>
        </div>
      </div>
    </header>
  );
}
