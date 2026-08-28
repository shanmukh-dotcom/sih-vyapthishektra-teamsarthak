import React from 'react';
import AppHeader from '@/components/farmer/AppHeader';
import BottomNavigation from '@/components/farmer/BottomNavigation';
import Sidebar from '@/components/farmer/Sidebar';

export default function FarmerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[#FDFDFB] font-sans text-gray-900 flex">
      {/* Desktop Sidebar */}
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-h-screen relative max-w-full overflow-x-hidden">
        {/* Header - Make it sticky on mobile, hidden on desktop if you prefer, but I'll keep it for now */}
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
