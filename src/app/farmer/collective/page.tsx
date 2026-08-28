"use client";

import React from 'react';
import Link from 'next/link';

export default function CollectivePooling() {
  return (
    <div className="w-full px-4 pt-4 pb-8 flex flex-col gap-6 md:px-8">
      
      {/* Page Title & Context Selector */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
            Vyapti Collective (Pooling)
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green-dark)]">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </h1>
          <p className="text-sm font-medium text-gray-600 mt-1">Pool your produce with other farmers to get better prices</p>
        </div>
        
        <button className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-full px-3 py-1.5 hover:bg-gray-50 transition-colors">
           <span className="text-lg">🍅</span>
           <span className="text-sm font-bold text-gray-800"><span className="text-[var(--color-brand-green-dark)]">Potato</span> • Grade A</span>
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
             <polyline points="6 9 12 15 18 9"></polyline>
           </svg>
        </button>
      </div>

      {/* Benefits Bar */}
      <div className="bg-[#F8FAF9] border border-gray-100 rounded-2xl p-4 flex gap-4 overflow-x-auto hide-scrollbar shadow-sm">
         {[
           { title: 'Better Prices', desc: 'Get up to ₹2.5/kg extra', icon: <><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></> },
           { title: 'Bigger Volumes', desc: 'Meet buyer requirements', icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></> },
           { title: 'Reduced Risk', desc: 'Stronger together, safer deals', icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></> },
           { title: 'Lower Costs', desc: 'Save on transport & logistics', icon: <><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><line x1="12" y1="18" x2="12" y2="22"></line><line x1="12" y1="2" x2="12" y2="6"></line></> },
         ].map((item, i) => (
           <div key={i} className="flex gap-3 items-center min-w-[200px] flex-shrink-0 border-r border-gray-200 last:border-0 pr-4">
              <div className="w-10 h-10 rounded-full bg-[#E3F2EB] text-[var(--color-brand-green-dark)] flex items-center justify-center flex-shrink-0">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
              </div>
              <div className="flex flex-col">
                 <span className="text-xs font-extrabold text-gray-900">{item.title}</span>
                 <span className="text-[10px] font-medium text-gray-600 mt-0.5 leading-tight">{item.desc}</span>
              </div>
           </div>
         ))}
      </div>

      {/* Main Pool Status Card */}
      <section className="bg-white border border-gray-200 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
         
         <div className="flex gap-4 items-center md:w-1/4 md:border-r border-gray-200 pr-6">
            <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 shadow-sm">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div className="flex flex-col">
               <span className="text-lg font-extrabold text-gray-900">Current Pool</span>
               <span className="text-xs font-bold text-gray-600 mt-0.5">Potato • Grade A</span>
               <div className="mt-2 bg-[#E3F2EB] text-[var(--color-brand-green-dark)] text-[9px] font-bold px-2 py-1 rounded w-max">
                  Pool ID: VYAPTI-TOM-A-3507
               </div>
            </div>
         </div>

         <div className="flex flex-col justify-center flex-1 md:border-r border-gray-200 md:pr-6">
            <div className="flex justify-between items-end mb-1">
               <span className="text-[11px] font-bold text-gray-500">Total Pooled Quantity</span>
               <span className="text-[11px] font-bold text-gray-900">Target: 10,000 kg</span>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
               <span className="text-4xl font-extrabold text-purple-800">8,750</span>
               <span className="text-sm font-bold text-purple-600">kg</span>
            </div>
            <div className="flex flex-col gap-1.5 w-full">
               <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden flex">
                  <div className="h-full bg-purple-700 rounded-full" style={{ width: '87%' }}></div>
               </div>
               <div className="flex justify-between items-center text-[10px] font-bold">
                  <span className="text-gray-600">1,250 kg needed to complete</span>
                  <span className="text-gray-900">87%</span>
               </div>
            </div>
         </div>

         <div className="flex flex-col justify-center md:w-1/4 md:pl-2">
            <span className="text-[11px] font-bold text-gray-500 mb-1">Expected Price Benefit</span>
            <div className="flex items-baseline gap-1">
               <span className="text-3xl font-extrabold text-[var(--color-brand-green-dark)]">+₹2.3</span>
               <span className="text-xs font-bold text-[var(--color-brand-green)]">/kg</span>
            </div>
            <span className="text-[10px] font-medium text-gray-500 mb-3">(over individual sale)</span>
            <div className="bg-purple-50 border border-purple-100 text-purple-700 text-[10px] font-bold px-2 py-1.5 rounded flex items-center gap-1.5 w-max">
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
               High Demand Pool
            </div>
         </div>
      </section>

      {/* Split Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Left: Farmers in this Pool */}
        <section className="w-full md:w-1/2 bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col overflow-hidden">
           <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
             <h3 className="text-base font-extrabold text-gray-900">Farmers in this Pool (18)</h3>
             <span className="bg-[#E3F2EB] text-[var(--color-brand-green-dark)] text-[10px] font-bold px-2.5 py-1 rounded-full">You • 1,000 kg</span>
           </div>
           
           <div className="flex flex-col divide-y divide-gray-100">
             {[
               { name: 'Ramesh B.', initials: 'R', loc: 'Anakapalli, AP', qty: '1,000 kg', isYou: true, color: 'bg-[#E3F2EB] text-[var(--color-brand-green-dark)]' },
               { name: 'Suresh K.', initials: 'S', loc: 'Anakapalli, AP', qty: '850 kg', isYou: false, color: 'bg-blue-50 text-blue-600' },
               { name: 'Mahesh P.', initials: 'M', loc: 'Anakapalli, AP', qty: '750 kg', isYou: false, color: 'bg-orange-50 text-orange-600' },
               { name: 'Lakshmi Devi', initials: 'L', loc: 'Anakapalli, AP', qty: '650 kg', isYou: false, color: 'bg-purple-50 text-purple-600' },
               { name: 'Venkatesh G.', initials: 'V', loc: 'Anakapalli, AP', qty: '600 kg', isYou: false, color: 'bg-red-50 text-red-600' },
             ].map((farmer, i) => (
               <div key={i} className={`p-4 flex justify-between items-center hover:bg-gray-50 transition-colors ${farmer.isYou ? 'bg-[#F3F9F6]/30' : ''}`}>
                  <div className="flex gap-3 items-center">
                     <div className={`w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0 ${farmer.color}`}>
                       {farmer.initials}
                     </div>
                     <div className="flex flex-col">
                        <span className="font-extrabold text-gray-900 text-sm">{farmer.name}</span>
                        <span className="text-[11px] font-medium text-gray-500 mt-0.5">{farmer.loc}</span>
                     </div>
                  </div>
                  <div className="flex flex-col items-end">
                     <span className={`text-sm font-extrabold ${farmer.isYou ? 'text-[var(--color-brand-green-dark)]' : 'text-gray-900'}`}>{farmer.qty}</span>
                     {farmer.isYou && <span className="bg-[#E3F2EB] text-[var(--color-brand-green-dark)] text-[9px] font-bold px-2 py-0.5 rounded mt-1">You</span>}
                  </div>
               </div>
             ))}
           </div>
           
           <div className="p-4 border-t border-gray-100 flex justify-center mt-auto">
              <button className="text-sm font-bold text-[var(--color-brand-green-dark)] hover:underline flex items-center gap-1">
                View All Farmers
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
           </div>
        </section>

        {/* Right: Pool Details & Actions */}
        <section className="w-full md:w-1/2 bg-[#F8FAF9] border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
           <div>
             <h3 className="text-base font-extrabold text-[var(--color-brand-green-dark)] mb-4">Pool Details</h3>
             <div className="flex flex-col divide-y divide-gray-100">
                {[
                  { label: 'Target Quantity', val: '10,000 kg', icon: <><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></> },
                  { label: 'Expected Completion', val: 'Tomorrow, 6:00 PM', icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></> },
                  { label: 'Pickup Location', val: 'Anakapalli Collection Center', icon: <><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></> },
                  { label: 'Expected Price Range', val: '₹20.0 – ₹21.5 /kg', highlight: true, icon: <><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><line x1="12" y1="18" x2="12" y2="22"></line><line x1="12" y1="2" x2="12" y2="6"></line></> },
                  { label: 'Quality Standard', val: 'Grade A • 90%+ AI Score', icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></> },
                ].map((detail, i) => (
                  <div key={i} className="flex justify-between items-center py-3">
                     <div className="flex gap-2.5 items-center text-gray-500">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green)]">{detail.icon}</svg>
                        <span className="text-xs font-bold">{detail.label}</span>
                     </div>
                     <span className={`text-xs font-extrabold ${detail.highlight ? 'text-[var(--color-brand-green-dark)]' : 'text-gray-900'}`}>{detail.val}</span>
                  </div>
                ))}
             </div>
           </div>
           
           <div className="flex flex-col gap-3 mt-6">
              <button className="w-full bg-[var(--color-brand-green-dark)] hover:bg-green-800 text-white font-bold rounded-xl px-4 py-3 text-sm flex items-center justify-center gap-2 shadow-sm transition-colors">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                 Invite More Farmers
              </button>
              <button className="w-full bg-white border border-[#25D366] text-[#25D366] hover:bg-[#E5F5E9] font-bold rounded-xl px-4 py-3 text-sm flex items-center justify-center gap-2 shadow-sm transition-colors">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                 Share via WhatsApp
              </button>
           </div>
        </section>

      </div>
      
      {/* Action Banner */}
      <div className="bg-[#F8F5FF] border border-[#EBE3FF] rounded-2xl p-4 md:p-5 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm">
         <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-full bg-[#EBE3FF] text-purple-700 flex items-center justify-center flex-shrink-0 shadow-sm">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div className="flex flex-col">
               <span className="text-sm md:text-base font-extrabold text-purple-900">Stronger Together</span>
               <span className="text-[11px] md:text-xs font-medium text-purple-800 mt-0.5">Only 1,250 kg more to complete the pool and unlock the best price!</span>
            </div>
         </div>
         <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl px-5 py-3 text-sm flex items-center justify-center gap-2 shadow-sm w-full md:w-auto flex-shrink-0 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Add More Quantity
         </button>
      </div>

      {/* Footer Alert */}
      <div className="bg-[#F3F9F6] border border-[#E3F2EB] rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between overflow-hidden relative min-h-[100px]">
         <div className="flex gap-4 items-center z-10 w-full md:w-2/3">
            <div className="w-10 h-10 rounded-full bg-white text-[var(--color-brand-green-dark)] flex items-center justify-center flex-shrink-0 shadow-sm">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </div>
            <div className="flex flex-col">
               <span className="text-sm font-extrabold text-[var(--color-brand-green-dark)] mb-1">AI Recommendation</span>
               <span className="text-xs font-medium text-gray-800 leading-tight">This pool has high demand. Completing the pool will help you get the best price and faster sale.</span>
            </div>
         </div>
         {/* Fake Illustration */}
         <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-[url('/images/bg_landscape.jpg')] bg-cover bg-center opacity-40 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F3F9F6] to-transparent"></div>
         </div>
      </div>

    </div>
  );
}
