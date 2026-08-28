"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', path: '/buyer' },
    { name: 'Requirements', path: '/buyer/requirements' },
    { name: 'AI Supply Matches', path: '/buyer/matches' },
    { name: 'Bidding', path: '/buyer/bidding' },
    { name: 'Orders', path: '/buyer/orders' },
    { name: 'Logistics', path: '/buyer/logistics' },
    { name: 'Payments', path: '/buyer/payments' },
    { name: 'Documents', path: '/buyer/documents' },
    { name: 'Analytics', path: '/buyer/analytics' },
    { name: 'Settings', path: '/buyer/settings' },
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-[95] hidden md:block backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

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
             <span className="text-xl font-extrabold text-[var(--color-brand-green-dark)] tracking-tight">VYAPTI KSHETRA Kshetra Kshetra KSHETRA Shektra SHEKTRA</span>
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
           <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-3">Procurement</div>
           {navItems.map((item) => {
             const isActive = pathname === item.path || pathname.startsWith(item.path + '/');
             // Special case for dashboard
             const isStrictlyActive = item.path === '/buyer' ? pathname === '/buyer' : isActive;
             
             return (
               <Link 
                 key={item.name} 
                 href={item.path}
                 onClick={() => setIsOpen(false)}
                 className={`flex items-center px-5 py-4 rounded-xl transition-colors ${
                   isStrictlyActive 
                     ? 'bg-[var(--color-brand-green)]/20 text-[var(--color-brand-green-dark)] font-black shadow-sm border border-[var(--color-brand-green-dark)]/10' 
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
                 🏢
              </div>
              <div className="flex flex-col">
                 <span className="text-[15px] font-extrabold text-gray-900 tracking-tight">Meera Pvt. Ltd.</span>
                 <span className="text-xs font-bold text-gray-500">Corporate Buyer</span>
              </div>
           </div>
        </div>
      </aside>
    </>
  );
}



