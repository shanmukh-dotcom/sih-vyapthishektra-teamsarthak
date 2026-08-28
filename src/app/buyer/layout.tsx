"use client";

import React, { useState } from 'react';
import AppHeader from '@/components/buyer/AppHeader';
import BottomNavigation from '@/components/buyer/BottomNavigation';
import Sidebar from '@/components/buyer/Sidebar';
import TopNav from '@/components/buyer/TopNav';
import { BuyerDataProvider } from '@/context/BuyerDataContext';

export default function BuyerLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BuyerDataProvider>
      <div className="relative min-h-screen w-full bg-[#FDFDFB] font-sans text-gray-900 flex flex-col">
        {/* Desktop Top Navigation (Contains Hamburger) */}
        <TopNav onMenuClick={() => setIsSidebarOpen(true)} />
        
        {/* Collapsible Sidebar */}
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        
        <div className="flex-1 flex flex-col min-h-screen relative max-w-full overflow-x-hidden">
          {/* Mobile Header (Hidden on Desktop) */}
          <div className="md:hidden">
            <AppHeader />
          </div>
          
          {/* Main Content Area */}
          <main className="w-full max-w-5xl mx-auto pb-[80px] md:pb-8 flex-1">
            {children}
          </main>
          
          {/* Mobile Bottom Navigation */}
          <div className="md:hidden">
            <BottomNavigation />
          </div>
        </div>
      </div>
    </BuyerDataProvider>
  );
}


