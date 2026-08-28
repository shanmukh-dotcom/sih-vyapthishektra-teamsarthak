"use client";

import React, { useState } from 'react';
import AppHeader from '@/components/farmer/AppHeader';
import BottomNavigation from '@/components/farmer/BottomNavigation';
import Sidebar from '@/components/farmer/Sidebar';
import DesktopTopNav from '@/components/farmer/DesktopTopNav';

export default function FarmerLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-[#FDFDFB] font-sans text-gray-900 flex flex-col">
      {/* Desktop Top Navigation (Contains Hamburger) */}
      <DesktopTopNav onMenuClick={() => setIsSidebarOpen(true)} />
      
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
  );
}
