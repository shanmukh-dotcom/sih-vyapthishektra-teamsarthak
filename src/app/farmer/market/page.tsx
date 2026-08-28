"use client";

import React from 'react';
import Link from 'next/link';

export default function MarketRadar() {
  return (
    <div className="w-full px-4 pt-4 pb-8 flex flex-col gap-6 md:px-8">
      
      {/* Page Title & Context Selector */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#E8F3EE] flex items-center justify-center text-[var(--color-brand-green-dark)]">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22 22H2V10l7-5 7 5v2h6v10z"/><path d="M14 22V8l-7-5-7 5v14h14z" fill="var(--color-brand-green)"/></svg>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-extrabold text-[var(--color-brand-green-dark)]">Market Radar</h1>
            <p className="text-sm font-medium text-gray-600">Nearby buyers & prices</p>
          </div>
        </div>
        
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
          <button className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-xl px-4 py-2.5 hover:bg-gray-50 flex-shrink-0">
             <span className="text-xl">🍅</span>
             <div className="flex flex-col items-start leading-tight">
               <span className="text-xs font-bold text-gray-900">Potato</span>
               <span className="text-[10px] font-medium text-gray-500">Grade A</span>
             </div>
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 ml-2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          
          <button className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-xl px-4 py-2.5 hover:bg-gray-50 flex-shrink-0">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
             <div className="flex flex-col items-start leading-tight">
               <span className="text-xs font-bold text-gray-900">Anakapalli, AP</span>
               <span className="text-[10px] font-medium text-gray-500">25 km radius</span>
             </div>
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 ml-2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>

          <button className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-xl px-4 py-2.5 hover:bg-gray-50 flex-shrink-0 text-[var(--color-brand-green-dark)] font-bold">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
             Filters
          </button>
        </div>
      </div>

      {/* Banner */}
      <div className="bg-[#F3F9F6] border border-[#E3F2EB] rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
         <div className="flex gap-3 items-center">
            <div className="w-10 h-10 rounded-full bg-[var(--color-brand-green-dark)] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>
            <div className="flex flex-col">
               <span className="text-sm font-extrabold text-[var(--color-brand-green-dark)]">Good demand in your area</span>
               <span className="text-xs font-medium text-gray-700 mt-0.5">Prices are higher at nearby locations</span>
            </div>
         </div>
         <Link href="/farmer/market-prices" className="bg-white border border-gray-200 text-[var(--color-brand-green-dark)] font-bold rounded-xl px-4 py-2 text-xs flex items-center justify-center gap-1.5 shadow-sm w-full sm:w-auto hover:bg-gray-50 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            View Price Trend
         </Link>
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Left Column: Buyers List */}
        <div className="w-full md:w-[60%] flex flex-col">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col">
             <div className="p-4 border-b border-gray-100 flex items-center gap-3">
               <h3 className="text-base font-extrabold text-gray-900">Nearby Buyers</h3>
               <span className="bg-[#E3F2EB] text-[var(--color-brand-green-dark)] text-[10px] font-bold px-2 py-0.5 rounded-full">6 Active</span>
             </div>
             
             <div className="flex flex-col divide-y divide-gray-100">
               {[
                 { name: 'Green Fields Foods Pvt. Ltd.', initials: 'GF', color: 'bg-[#E3F2EB] text-[var(--color-brand-green-dark)]', req: '2,000 kg', dist: '12 km', price: '20.8', demand: 'High Demand', demandColor: 'bg-[#E3F2EB] text-[var(--color-brand-green-dark)]', verified: true },
                 { name: 'Sunrise Exports', initials: 'SE', color: 'bg-orange-50 text-orange-600', req: '1,500 kg', dist: '18 km', price: '19.6', demand: 'Medium Demand', demandColor: 'bg-orange-50 text-orange-600', verified: true },
                 { name: 'FreshMart Retail Chain', initials: 'F', color: 'bg-green-50 text-green-700', req: '3,000 kg', dist: '22 km', price: '19.2', demand: 'Medium Demand', demandColor: 'bg-orange-50 text-orange-600', verified: true },
                 { name: 'Andhra Agri Pvt. Ltd.', initials: 'AA', color: 'bg-blue-50 text-blue-600', req: '1,000 kg', dist: '25 km', price: '18.7', demand: 'Steady Demand', demandColor: 'bg-blue-50 text-blue-600', verified: true },
                 { name: 'TruTaste Foods', initials: 'T', color: 'bg-red-50 text-red-600', req: '2,500 kg', dist: '28 km', price: '18.5', demand: 'Steady Demand', demandColor: 'bg-blue-50 text-blue-600', verified: true },
                 { name: 'Krishna Traders', initials: 'K', color: 'bg-yellow-50 text-yellow-700', req: '1,200 kg', dist: '30 km', price: '18.0', demand: 'Low Demand', demandColor: 'bg-red-50 text-red-600', verified: true },
               ].map((buyer, i) => (
                 <div key={i} className={`p-4 flex justify-between items-start hover:bg-gray-50 cursor-pointer transition-colors ${i === 0 ? 'bg-[#F3F9F6]/50' : ''}`}>
                    <div className="flex gap-3">
                       <div className={`w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-xl flex-shrink-0 ${buyer.color}`}>
                         {buyer.initials}
                       </div>
                       <div className="flex flex-col">
                          <div className="flex items-center gap-1">
                             <span className="font-extrabold text-gray-900 text-sm">{buyer.name}</span>
                             {buyer.verified && (
                               <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-brand-green-dark)" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                             )}
                          </div>
                          <span className="text-[11px] font-medium text-gray-600 mt-1">Needs {buyer.req} • Grade A</span>
                          <span className="text-[11px] font-medium text-gray-500 mt-1 flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            {buyer.dist} away
                          </span>
                       </div>
                    </div>
                    <div className="flex flex-col items-end">
                       <div className="flex items-baseline gap-1 mb-2">
                         <span className="text-lg font-extrabold text-gray-900">₹{buyer.price}</span>
                         <span className="text-[10px] font-bold text-gray-500">/kg</span>
                       </div>
                       <span className={`text-[9px] font-bold px-2 py-1 rounded flex items-center gap-1 ${buyer.demandColor}`}>
                         {buyer.demand === 'High Demand' && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>}
                         {buyer.demand === 'Medium Demand' && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>}
                         {buyer.demand === 'Steady Demand' && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><line x1="13" y1="18" x2="19" y2="12"></line><line x1="13" y1="6" x2="19" y2="12"></line></svg>}
                         {buyer.demand === 'Low Demand' && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>}
                         {buyer.demand}
                       </span>
                    </div>
                 </div>
               ))}
             </div>
             
             <div className="p-4 border-t border-gray-100 flex justify-center">
                <button className="text-sm font-bold text-[var(--color-brand-green-dark)] hover:underline flex items-center gap-1">
                  View All Buyers (6)
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
             </div>
          </div>
        </div>

        {/* Right Column: Map & Highlights */}
        <div className="w-full md:w-[40%] flex flex-col gap-4">
          
          {/* Map Area */}
          <div className="bg-gray-100 rounded-2xl h-64 md:h-80 w-full relative overflow-hidden shadow-sm border border-gray-200">
             {/* Fake Map Background */}
             <div className="absolute inset-0 bg-[#E5E3DF] opacity-80 flex flex-col items-center justify-center pointer-events-none">
                <div className="w-[150%] h-[150%] rounded-full border-2 border-dashed border-[var(--color-brand-green)]/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="w-[80%] h-[80%] rounded-full border-2 border-dashed border-[var(--color-brand-green)]/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-md"></div>
                <span className="absolute top-1/2 left-1/2 translate-x-3 -translate-y-4 text-[10px] font-bold text-gray-800">Anakapalli</span>
                
                {/* Map Pins */}
                <div className="absolute top-[20%] right-[30%] bg-[var(--color-brand-green-dark)] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md">₹20.8</div>
                <div className="absolute top-[40%] right-[15%] bg-[var(--color-brand-green-dark)] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md">₹19.6</div>
                <div className="absolute bottom-[40%] left-[30%] bg-[var(--color-brand-green)] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md">₹19.2</div>
                <div className="absolute top-[35%] left-[20%] bg-orange-400 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md">₹18.7</div>
                <div className="absolute bottom-[20%] right-[40%] bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md">₹18.0</div>
             </div>
          </div>

          {/* Market Highlights */}
          <div className="bg-[#F3F9F6] border border-[#E3F2EB] rounded-2xl p-4 shadow-sm flex flex-col gap-3">
             <div className="flex items-center gap-2 mb-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green-dark)]"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                <h3 className="font-extrabold text-[var(--color-brand-green-dark)] text-sm">Market Highlights</h3>
             </div>
             
             <div className="bg-white rounded-xl p-3 flex flex-col gap-4 shadow-sm border border-gray-100">
               
               <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#E3F2EB] text-[var(--color-brand-green-dark)] flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[11px] font-bold text-gray-500">Highest Price</span>
                     <span className="text-sm font-extrabold text-gray-900 mt-0.5">₹20.8 <span className="text-[10px] text-gray-500 font-bold">/kg</span></span>
                     <span className="text-[10px] font-medium text-gray-500 mt-0.5">12 km away</span>
                  </div>
               </div>
               
               <div className="w-full h-px bg-gray-100"></div>
               
               <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[11px] font-bold text-gray-500">Total Demand Nearby</span>
                     <span className="text-sm font-extrabold text-gray-900 mt-0.5">11,200 kg</span>
                     <span className="text-[10px] font-medium text-gray-500 mt-0.5">From 6 buyers</span>
                  </div>
               </div>

               <div className="w-full h-px bg-gray-100"></div>
               
               <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[11px] font-bold text-gray-500">Price Trend</span>
                     <span className="text-xs font-extrabold text-purple-700 mt-0.5">May increase in 2-3 days</span>
                     <span className="text-[10px] font-medium text-gray-500 mt-0.5">85% confidence</span>
                  </div>
               </div>

             </div>
          </div>
        </div>
      </div>

      {/* Bottom Tip Banner */}
      <div className="bg-[#FFF8F0] border border-[#FFE7CC] rounded-2xl p-4 flex justify-between items-center relative overflow-hidden shadow-sm mt-2">
         <div className="flex gap-3 items-center z-10 w-2/3">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </div>
            <div className="flex flex-col">
               <span className="text-sm font-extrabold text-orange-800">Tip for You</span>
               <span className="text-[11px] font-bold text-gray-800 mt-0.5 leading-tight">Prices are better in the north direction. You can get up to <span className="font-extrabold text-gray-900">₹2.8/kg more</span>.</span>
            </div>
         </div>
         {/* Fake Illustration right side */}
         <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-orange-200/50 flex items-end justify-end p-2 opacity-60">
            <svg width="60" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-800"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
         </div>
      </div>

    </div>
  );
}
