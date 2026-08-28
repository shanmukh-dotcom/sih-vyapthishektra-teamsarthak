"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DesktopSidebar({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/farmer', icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></> },
    { name: 'Market Radar', path: '/farmer/market-radar', icon: <><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><path d="M9 21V9"/></> },
    { name: 'AI Upload', path: '/farmer/ai-grading', icon: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></> },
    { name: 'Collective Orders', path: '/farmer/collective', icon: <><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></> },
    { name: 'Farm Profile', path: '/farmer/profile', icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></> },
  ];

  return (
    <aside className={`w-64 bg-white border-r border-gray-100 flex-col h-screen sticky top-0 ${className}`}>
      
      {/* Sidebar Logo Area */}
      <div className="h-[72px] flex items-center px-6 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 block px-2">Main Menu</span>
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.name} 
              href={item.path}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl font-bold transition-all ${
                isActive 
                  ? 'bg-[var(--color-brand-green-light)]/40 text-[var(--color-brand-green-dark)]' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={isActive ? "2.5" : "2"} strokeLinecap="round" strokeLinejoin="round">
                {item.icon}
              </svg>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Upload CTA on Desktop */}
      <div className="p-4 border-t border-gray-100">
        <Link href="/farmer/ai-grading" className="w-full bg-[var(--color-brand-green-dark)] hover:bg-green-800 text-white font-bold rounded-xl py-3 flex items-center justify-center gap-2 transition-colors shadow-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
          Grade Produce
        </Link>
      </div>
    </aside>
  );
}
