"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNavigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/farmer', icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></> },
    { name: 'Market', path: '/farmer/market', icon: <><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><path d="M9 21V9"/></> },
    { name: 'Upload', path: '/farmer/ai-grading', isUpload: true },
    { name: 'Orders', path: '/farmer/collective', icon: <><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></> },
    { name: 'Profile', path: '/farmer/profile', icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></> },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 shadow-[0_-4px_12px_rgba(0,0,0,0.03)] z-50 px-2 pb-safe">
      <div className="flex items-center justify-between h-[72px] max-w-lg mx-auto px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          
          if (item.isUpload) {
            return (
              <Link 
                key={item.name} 
                href={item.path}
                className="flex flex-col items-center justify-center -mt-6"
              >
                <div className="w-14 h-14 bg-[var(--color-brand-green-dark)] rounded-full flex items-center justify-center shadow-lg text-white border-4 border-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-[var(--color-text-secondary)] mt-1">{item.name}</span>
              </Link>
            );
          }

          return (
            <Link 
              key={item.name} 
              href={item.path}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                isActive ? 'text-[var(--color-brand-green-dark)]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={isActive ? "2.5" : "2"} strokeLinecap="round" strokeLinejoin="round">
                {item.icon}
              </svg>
              <span className={`text-[11px] ${isActive ? 'font-bold' : 'font-medium'}`}>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
