"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNavigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/buyer', icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> },
    { name: 'Matches', path: '/buyer/matches', icon: <circle cx="12" cy="12" r="10" /> },
    { name: 'Create', path: '/buyer/requirements/create', icon: <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></> },
    { name: 'Orders', path: '/buyer/orders', icon: <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /> },
    { name: 'Profile', path: '/buyer/settings', icon: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 px-4 py-2 flex justify-between items-center pb-safe z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
      {navItems.map((item) => {
        const isActive = item.path === '/buyer' ? pathname === '/buyer' : pathname.startsWith(item.path);
        
        if (item.name === 'Create') {
          return (
            <Link key={item.name} href={item.path} className="flex flex-col items-center justify-center -mt-6 relative z-10">
               <div className="w-12 h-12 bg-[var(--color-brand-green-dark)] rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white transform transition-transform active:scale-95">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                   {item.icon}
                 </svg>
               </div>
               <span className="text-[10px] font-bold text-[var(--color-brand-green-dark)] mt-1">{item.name}</span>
            </Link>
          );
        }

        return (
          <Link key={item.name} href={item.path} className="flex flex-col items-center justify-center w-16 h-12 relative">
            <div className={`flex flex-col items-center transition-all ${isActive ? '-translate-y-1' : 'translate-y-0'}`}>
              <svg 
                width="22" 
                height="22" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={isActive ? "2.5" : "2"} 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={`mb-1 ${isActive ? 'text-[var(--color-brand-green-dark)]' : 'text-gray-400'}`}
              >
                {item.icon}
              </svg>
              <span className={`text-[10px] tracking-tight ${isActive ? 'font-bold text-[var(--color-brand-green-dark)]' : 'font-medium text-gray-500'}`}>
                {item.name}
              </span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
