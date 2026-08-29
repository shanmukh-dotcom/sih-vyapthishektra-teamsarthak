import Link from 'next/link';

export default function TopNav({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div className="hidden md:flex items-center justify-between w-full bg-white border-b border-gray-200 px-6 py-3 sticky top-0 z-[40] shadow-sm">
      <div className="flex items-center gap-6">
        <button 
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-[var(--color-brand-green-dark)] rounded text-white flex items-center justify-center font-bold text-lg">
              V
           </div>
           <span className="text-xl font-extrabold text-[var(--color-brand-green-dark)] tracking-tight">VYAPTI KSHETRA</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-1.5 ml-4 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-500">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
           </svg>
           <span className="text-sm font-bold text-gray-700">Hyderabad, Telangana</span>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <Link href="/buyer" className="text-sm font-bold text-gray-600 hover:text-[var(--color-brand-green-dark)] transition-colors">
          Dashboard
        </Link>
        <Link href="/buyer/matches" className="text-sm font-bold text-gray-600 hover:text-[var(--color-brand-green-dark)] transition-colors">
          Matches
        </Link>
        <Link href="/buyer/orders" className="text-sm font-bold text-gray-600 hover:text-[var(--color-brand-green-dark)] transition-colors">
          Orders
        </Link>
        <Link href="/buyer/analytics" className="text-sm font-bold text-gray-600 hover:text-[var(--color-brand-green-dark)] transition-colors">
          Analytics
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </button>
        
        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
           <div className="w-9 h-9 rounded-full bg-[var(--color-brand-green)]/20 text-[var(--color-brand-green-dark)] font-extrabold flex items-center justify-center text-sm border border-[var(--color-brand-green)]/30">
              MB
           </div>
           <div className="hidden lg:flex flex-col">
              <span className="text-[13px] font-extrabold text-gray-900 leading-tight">Meera Business Pvt. Ltd.</span>
              <span className="text-[11px] font-bold text-gray-500">Buyer Account</span>
           </div>
        </div>
      </div>
    </div>
  );
}




