"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/farmer', icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path> },
    { name: 'Crop Profile', path: '/farmer/profile', icon: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path> },
    { name: 'AI Grading', path: '/farmer/ai-grading', icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path> },
    { name: 'Fair Price Guard', path: '/farmer/fair-price', icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path> },
    { name: 'Market Prices', path: '/farmer/market-prices', icon: <path d="M3 3v18h18"></path> },
    { name: 'Market Radar', path: '/farmer/market', icon: <circle cx="12" cy="12" r="10"></circle> },
    { name: 'Buyer Matches', path: '/farmer/matches', icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path> },
    { name: 'Compare Offers', path: '/farmer/matches/compare', icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path> },
    { name: 'Collective Pooling', path: '/farmer/collective', icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path> },
    { name: 'My Transaction', path: '/farmer/transaction', icon: <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect> },
    { name: 'Money Breakdown', path: '/farmer/transaction/breakdown', icon: <line x1="12" y1="1" x2="12" y2="23"></line> },
    { name: 'Logistics & Pickup', path: '/farmer/logistics', icon: <rect x="1" y="3" width="15" height="13"></rect> },
  ];

  return (
    <>
      {/* Floating Toggle Button (visible when sidebar is closed on desktop) */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-[90] hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md border border-gray-200 text-[var(--color-brand-green-dark)] hover:bg-gray-50 transition-transform hover:scale-105"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      )}

      {/* Overlay for clicking outside to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-[95] hidden md:block backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* The Sidebar itself */}
      <aside 
        className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-200 overflow-y-auto hidden md:flex flex-col shadow-2xl z-[100] transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'
        }`}
      >
        <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-[var(--color-brand-green-dark)] rounded text-white flex items-center justify-center font-bold text-lg">
                V
             </div>
             <span className="text-xl font-extrabold text-[var(--color-brand-green-dark)] tracking-tight">VYAPTI</span>
           </div>
           
           <button 
             onClick={() => setIsOpen(false)}
             className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-200 text-gray-500 transition-colors"
           >
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
               <line x1="18" y1="6" x2="6" y2="18"></line>
               <line x1="6" y1="6" x2="18" y2="18"></line>
             </svg>
           </button>
        </div>
        
        <div className="flex-1 py-4 px-3 flex flex-col gap-1">
           <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-3">Farmer Interface</div>
           {navItems.map((item) => {
             const isActive = pathname === item.path;
             return (
               <Link 
                 key={item.name} 
                 href={item.path}
                 onClick={() => setIsOpen(false)} // Auto-close on navigate
                 className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                   isActive 
                     ? 'bg-[#F3F9F6] text-[var(--color-brand-green-dark)] font-extrabold' 
                     : 'text-gray-600 hover:bg-gray-50 font-medium'
                 }`}
               >
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={isActive ? "2.5" : "2"} strokeLinecap="round" strokeLinejoin="round" className={isActive ? "text-[var(--color-brand-green-dark)]" : "text-gray-400"}>
                   {item.icon}
                 </svg>
                 {item.name}
               </Link>
             );
           })}
        </div>
        
        <div className="p-4 border-t border-gray-100 bg-gray-50">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm overflow-hidden flex items-center justify-center text-xl">
                 👨🏽‍🌾
              </div>
              <div className="flex flex-col">
                 <span className="text-sm font-extrabold text-gray-900">Balaya Farm</span>
                 <span className="text-[10px] font-medium text-gray-500">Potato • Grade A</span>
              </div>
           </div>
        </div>
      </aside>
    </>
  );
}
