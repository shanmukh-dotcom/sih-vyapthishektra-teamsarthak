"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', path: '/farmer', icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> },
    { name: 'Crop Profile', path: '/farmer/profile', icon: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /> },
    { name: 'AI Grading', path: '/farmer/ai-grading', icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /> },
    { name: 'Fair Price Guard', path: '/farmer/fair-price', icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /> },
    { name: 'Market Prices', path: '/farmer/market-prices', icon: <path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16" /> },
    { name: 'Market Radar', path: '/farmer/market', icon: <circle cx="12" cy="12" r="10" /> },
    { name: 'Buyer Matches', path: '/farmer/matches', icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /> },
    { name: 'Compare Offers', path: '/farmer/matches/compare', icon: <path d="M3 3v18h18" /> },
    { name: 'Collective Pooling', path: '/farmer/collective', icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /> },
    { name: 'My Transaction', path: '/farmer/transaction', icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /> },
    { name: 'Money Breakdown', path: '/farmer/transaction/breakdown', icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /> },
    { name: 'Logistics & Pickup', path: '/farmer/logistics', icon: <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Zm0 0V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" /> },
  ];

  return (
    <>
      {/* Overlay for clicking outside to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-[95] hidden md:block backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* The Sidebar itself */}
      <aside 
        className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-200 overflow-y-auto hidden md:flex flex-col shadow-2xl z-[100] transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 w-72' : '-translate-x-full w-72'
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
        
        <div className="flex-1 py-6 px-4 flex flex-col gap-1.5">
           <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-3">All Interfaces</div>
           {navItems.map((item) => {
             const isActive = pathname === item.path;
             return (
               <Link 
                 key={item.name} 
                 href={item.path}
                 onClick={() => setIsOpen(false)}
                 className={`flex items-center px-5 py-4 rounded-xl transition-colors ${
                   isActive 
                     ? 'bg-[#F3F9F6] text-[var(--color-brand-green-dark)] font-black shadow-sm border border-[var(--color-brand-green)]/10' 
                     : 'text-gray-700 hover:bg-gray-50 font-extrabold'
                 }`}
               >
                 <span className="text-[16px] tracking-tight">{item.name}</span>
               </Link>
             );
           })}
        </div>
        
        <div className="p-5 border-t border-gray-100 bg-gray-50">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm overflow-hidden flex items-center justify-center text-2xl">
                 👨🏽‍🌾
              </div>
              <div className="flex flex-col">
                 <span className="text-[15px] font-extrabold text-gray-900 tracking-tight">Balaya Farm</span>
                 <span className="text-xs font-bold text-gray-500">Potato • Grade A</span>
              </div>
           </div>
        </div>
      </aside>
    </>
  );
}
