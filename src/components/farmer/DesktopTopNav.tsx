import Link from 'next/link';

export default function DesktopTopNav({ onMenuClick }: { onMenuClick: () => void }) {
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
           <span className="text-xl font-extrabold text-[var(--color-brand-green-dark)] tracking-tight">VYAPTI</span>
        </div>
      </div>

      {/* Main Navigation Links */}
      <div className="flex items-center gap-8">
        <Link href="/farmer" className="text-sm font-bold text-gray-600 hover:text-[var(--color-brand-green-dark)] transition-colors">
          Dashboard
        </Link>
        <Link href="/farmer/market" className="text-sm font-bold text-gray-600 hover:text-[var(--color-brand-green-dark)] transition-colors">
          Market Radar
        </Link>
        <Link href="/farmer/transaction" className="text-sm font-bold text-gray-600 hover:text-[var(--color-brand-green-dark)] transition-colors">
          Transactions
        </Link>
        <Link href="/farmer/profile" className="text-sm font-bold text-gray-600 hover:text-[var(--color-brand-green-dark)] transition-colors">
          Profile
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="w-9 h-9 rounded-full bg-gray-200 border border-gray-300 shadow-sm overflow-hidden flex items-center justify-center text-lg">
           👨🏽‍🌾
        </div>
      </div>
    </div>
  );
}
