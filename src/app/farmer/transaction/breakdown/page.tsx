"use client";

import React from 'react';

export default function MoneyBreakdown() {
  return (
    <div className="w-full px-4 pt-4 pb-28 flex flex-col gap-6 md:px-8 relative">
      
      {/* Page Title & Context Selector */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
            Money Breakdown
            <div className="w-6 h-6 rounded-full bg-[#E3F2EB] text-[var(--color-brand-green-dark)] flex items-center justify-center flex-shrink-0">
               <span className="text-sm font-bold">₹</span>
            </div>
          </h1>
          <p className="text-sm font-medium text-gray-600 mt-1">Complete transparency in your earnings</p>
        </div>
        
        <button className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-xl px-4 py-2 hover:bg-gray-50 transition-colors">
           <span className="text-2xl">🥔</span>
           <div className="flex flex-col items-start leading-tight">
             <span className="text-sm font-bold text-gray-800"><span className="text-[var(--color-brand-green-dark)]">Potato</span> • Grade A</span>
             <span className="text-[10px] font-medium text-gray-500 mt-0.5">12,000 kg • Anakapalli, AP</span>
           </div>
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 ml-2">
             <polyline points="6 9 12 15 18 9"></polyline>
           </svg>
        </button>
      </div>

      {/* Selected Offer Card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
         <div className="flex items-center gap-3 pb-4 border-b border-gray-100 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#F3F9F6] text-[var(--color-brand-green-dark)] flex items-center justify-center shadow-sm border border-[#E3F2EB]">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            </div>
            <div className="flex flex-col">
               <span className="text-[10px] font-bold text-gray-500">Selected Offer</span>
               <div className="flex items-center gap-2">
                 <span className="text-sm font-extrabold text-gray-900">FreshAgro Exports Pvt. Ltd.</span>
                 <div className="flex items-center gap-1 text-[10px] font-bold text-[var(--color-brand-green-dark)] bg-[#E3F2EB] px-2 py-0.5 rounded">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    Verified Buyer
                 </div>
               </div>
            </div>
         </div>
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex gap-6 md:gap-12 flex-wrap">
               <div className="flex flex-col border-l-2 border-gray-100 pl-3">
                  <span className="text-[10px] font-bold text-gray-500">Offered Price</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                     <span className="text-lg font-extrabold text-[var(--color-brand-green-dark)]">₹21.50</span>
                     <span className="text-xs font-bold text-gray-500">/kg</span>
                  </div>
               </div>
               <div className="flex flex-col border-l-2 border-gray-100 pl-3">
                  <span className="text-[10px] font-bold text-gray-500">Total Quantity</span>
                  <span className="text-lg font-extrabold text-gray-900 mt-0.5">12,000 kg</span>
               </div>
               <div className="flex flex-col border-l-2 border-gray-100 pl-3">
                  <span className="text-[10px] font-bold text-gray-500">Total Payable</span>
                  <span className="text-lg font-extrabold text-gray-900 mt-0.5">₹2,58,000</span>
               </div>
               <div className="flex flex-col border-l-2 border-gray-100 pl-3">
                  <span className="text-[10px] font-bold text-gray-500">Payment Terms</span>
                  <span className="text-sm font-extrabold text-gray-900 mt-0.5">2 Days After Delivery</span>
               </div>
            </div>
            <button className="bg-white border border-[var(--color-brand-green-dark)] text-[var(--color-brand-green-dark)] hover:bg-[#F3F9F6] font-bold rounded-xl px-4 py-2 text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors w-full md:w-auto mt-2 md:mt-0">
               View Offer Details
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
         </div>
      </div>

      {/* Your Earnings Summary */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
         <div className="flex justify-between items-center mb-6">
            <h3 className="text-base font-extrabold text-gray-900">Your Earnings Summary</h3>
            <span className="text-[10px] font-medium text-gray-500">All amounts in ₹</span>
         </div>

         <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
            
            {/* Gross */}
            <div className="flex-1 bg-[#F8FAF9] border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center justify-center min-h-[120px]">
               <span className="text-xs font-extrabold text-gray-900">Gross Amount</span>
               <span className="text-[10px] font-medium text-gray-500 mb-2">(Price × Quantity)</span>
               <span className="text-2xl font-extrabold text-gray-900">₹2,58,000</span>
               <span className="text-[10px] font-medium text-gray-500 mt-1">(₹21.50 × 12,000 kg)</span>
            </div>

            <div className="hidden md:flex text-gray-400 font-extrabold text-2xl mx-2">—</div>

            {/* Deductions */}
            <div className="flex-1 bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center justify-center min-h-[120px]">
               <span className="text-xs font-extrabold text-gray-900">Deductions</span>
               <span className="text-[10px] font-medium text-gray-500 mb-2">(Transparent & Itemized)</span>
               <span className="text-2xl font-extrabold text-gray-900">- ₹12,400</span>
            </div>

            <div className="hidden md:flex text-gray-400 font-extrabold text-2xl mx-2">=</div>

            {/* Net Amount */}
            <div className="flex-1 bg-[#F3F9F6] border border-[#C1E1D2] rounded-xl p-5 flex flex-col items-center text-center justify-center shadow-[0_4px_15px_-5px_rgba(16,185,129,0.2)] min-h-[120px]">
               <span className="text-xs font-extrabold text-[var(--color-brand-green-dark)]">You Will Receive</span>
               <span className="text-[10px] font-medium text-[var(--color-brand-green-dark)] mb-2">(Net Amount)</span>
               <span className="text-3xl font-extrabold text-[var(--color-brand-green-dark)]">₹2,45,600</span>
            </div>

         </div>

         <div className="bg-[#F8FAF9] border border-gray-100 rounded-lg p-3 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-brand-green-dark)" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
            <span className="text-[11px] font-bold text-[var(--color-brand-green-dark)]">No hidden charges. 100% transparent.</span>
         </div>
      </div>

      {/* Deductions Breakdown Box */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
         <div className="flex justify-between items-center mb-6">
            <h3 className="text-base font-extrabold text-gray-900">Deductions Breakdown</h3>
            <div className="flex gap-12">
               <span className="text-[10px] font-medium text-gray-500 w-20 text-right">Amount (₹)</span>
               <span className="text-[10px] font-medium text-gray-500 w-20 text-right">Per kg (₹)</span>
            </div>
         </div>

         <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch">
            
            {/* Donut Chart (CSS representation) */}
            <div className="w-48 h-48 relative flex-shrink-0 flex items-center justify-center">
               <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  {/* Segment 1: Logistics (40%) Green */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#48A78F" strokeWidth="20" strokeDasharray="100.5 150.8" strokeDashoffset="0" />
                  {/* Segment 2: Platform (24%) Blue */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="20" strokeDasharray="60.3 191" strokeDashoffset="-100.5" />
                  {/* Segment 3: Quality (16%) Orange */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#F59E0B" strokeWidth="20" strokeDasharray="40.2 211.1" strokeDashoffset="-160.8" />
                  {/* Segment 4: Payment (12%) Purple */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#8B5CF6" strokeWidth="20" strokeDasharray="30.1 221.2" strokeDashoffset="-201" />
                  {/* Segment 5: Other (8%) Red */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#EF4444" strokeWidth="20" strokeDasharray="20.1 231.2" strokeDashoffset="-231.1" />
               </svg>
               <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-full m-8 shadow-sm">
                  <span className="text-[10px] font-extrabold text-gray-600 leading-tight">Total<br/>Deductions</span>
                  <span className="text-lg font-extrabold text-gray-900 mt-1">₹12,400</span>
               </div>
               
               {/* Labels positioned around donut (approximate for CSS demo) */}
               <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-[10px] font-bold">40%</div>
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold">24%</div>
               <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-[10px] font-bold">16%</div>
               <div className="absolute left-8 top-10 text-white text-[10px] font-bold">12%</div>
               <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold">8%</div>
            </div>

            {/* List */}
            <div className="flex-1 flex flex-col justify-center">
               <div className="flex flex-col gap-4">
                  {[
                    { name: 'Logistics & Transportation', desc: 'From farm to buyer\'s collection center', amount: '4,960', perkg: '0.413', icon: <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm11 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>, color: 'text-[#48A78F]' },
                    { name: 'Platform Service Fee', desc: 'Platform & technology services', amount: '2,976', perkg: '0.248', icon: <path d="M11 20A7 7 0 0 1 4 13c0-3.5 2.5-6.5 6-7V4l3 3-3 3V8c-2.5.5-4.5 3-4.5 5 0 2.5 2 4.5 4.5 5 2.5-.5 4.5-3 4.5-5h2a7 7 0 0 1-7 7z"/>, color: 'text-[#3B82F6]' },
                    { name: 'Quality Assurance Fee', desc: 'Grading, inspection & quality check', amount: '1,984', perkg: '0.165', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, color: 'text-[var(--color-brand-green-dark)]' },
                    { name: 'Payment Processing Fee', desc: 'Secure payment & banking charges', amount: '1,488', perkg: '0.124', icon: <rect x="2" y="6" width="20" height="12" rx="2" ry="2"/>, color: 'text-[#8B5CF6]' },
                    { name: 'Other Charges', desc: 'Admin & misc. charges', amount: '992', perkg: '0.082', icon: <><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="5" cy="12" r="2"/></>, color: 'text-gray-500' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-1 border-b border-gray-50 last:border-0">
                       <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 ${item.color}`}>
                             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                          </div>
                          <div className="flex flex-col">
                             <span className="text-xs font-extrabold text-gray-900">{item.name}</span>
                             <span className="text-[10px] font-medium text-gray-500">{item.desc}</span>
                          </div>
                       </div>
                       <div className="flex gap-12">
                          <span className="text-sm font-extrabold text-gray-900 w-20 text-right">{item.amount}</span>
                          <span className="text-xs font-bold text-gray-600 w-20 text-right">{item.perkg}</span>
                       </div>
                    </div>
                  ))}
                  
                  <div className="flex justify-between items-center bg-[#F3F9F6] px-4 py-3 rounded-lg mt-2">
                     <span className="text-sm font-extrabold text-[var(--color-brand-green-dark)]">Total Deductions</span>
                     <div className="flex gap-12">
                        <span className="text-sm font-extrabold text-[var(--color-brand-green-dark)] w-20 text-right">₹12,400</span>
                        <span className="text-sm font-extrabold text-[var(--color-brand-green-dark)] w-20 text-right">₹1.033 /kg</span>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>

      {/* Bottom Insights row */}
      <div className="flex flex-col md:flex-row gap-5 items-stretch">
         
         {/* Payout Details */}
         <div className="w-full md:w-1/2 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <h3 className="text-base font-extrabold text-gray-900 mb-6">Payout Details</h3>
            
            <div className="flex flex-col gap-4 text-xs">
               <div className="flex items-center bg-[#F3F9F6] p-3 rounded-xl border border-[#C1E1D2]">
                  <div className="w-8 h-8 rounded-full bg-white text-[var(--color-brand-green-dark)] flex items-center justify-center flex-shrink-0 shadow-sm mr-3">
                     <span className="text-sm font-bold">₹</span>
                  </div>
                  <span className="font-extrabold text-gray-800 flex-1">You Will Receive</span>
                  <span className="text-base font-extrabold text-[var(--color-brand-green-dark)]">₹2,45,600</span>
               </div>
               
               <div className="flex items-center px-2 py-1">
                  <div className="w-8 h-8 flex items-center justify-center text-[var(--color-brand-green-dark)] mr-3">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="16" r="2"></circle><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </div>
                  <span className="font-bold text-gray-500 w-32">Payout Mode</span>
                  <span className="font-extrabold text-gray-900 flex-1 text-right">Bank Transfer (NEFT)</span>
               </div>
               
               <div className="flex items-center px-2 py-1">
                  <div className="w-8 h-8 flex items-center justify-center text-[var(--color-brand-green-dark)] mr-3">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </div>
                  <span className="font-bold text-gray-500 w-32">Expected Payout Date</span>
                  <div className="flex flex-col flex-1 items-end">
                     <span className="font-extrabold text-gray-900">27 May 2025</span>
                     <span className="text-[9px] font-medium text-gray-500">(2 Days After Delivery)</span>
                  </div>
               </div>

               <div className="flex items-center px-2 py-1">
                  <div className="w-8 h-8 flex items-center justify-center text-[var(--color-brand-green-dark)] mr-3">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"></path><path d="M3 10h18"></path><path d="M5 6l7-3 7 3"></path><path d="M4 10v11"></path><path d="M20 10v11"></path><path d="M8 14v3"></path><path d="M12 14v3"></path><path d="M16 14v3"></path></svg>
                  </div>
                  <span className="font-bold text-gray-500 w-32">Bank Account</span>
                  <div className="flex flex-col flex-1 items-end">
                     <span className="font-extrabold text-gray-900">XXXX XXXX 1234</span>
                     <span className="text-[9px] font-medium text-gray-500">State Bank of India</span>
                  </div>
               </div>
            </div>
            
            <button className="mt-4 w-full bg-white border border-[var(--color-brand-green-dark)] text-[var(--color-brand-green-dark)] hover:bg-[#F3F9F6] font-bold rounded-xl px-4 py-2.5 text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors">
               Change Bank Account
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </button>
         </div>

         {/* Earnings Per kg */}
         <div className="w-full md:w-1/2 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <h3 className="text-base font-extrabold text-gray-900 mb-4">Earnings Per kg</h3>
            
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">₹</span>
               </div>
               <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-[var(--color-brand-green-dark)]">₹20.47</span>
                  <span className="text-sm font-bold text-gray-600">/kg</span>
                  <span className="ml-2 bg-blue-50 text-blue-700 border border-blue-100 text-[9px] font-bold px-2 py-0.5 rounded">You Earn</span>
               </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
               <div className="flex-1 flex flex-col">
                  <span className="text-[10px] font-bold text-gray-500 mb-3">Breakdown per kg</span>
                  <div className="flex flex-col gap-2 text-xs">
                     <div className="flex justify-between items-center text-gray-700">
                        <span>Offered Price</span>
                        <span className="font-extrabold text-gray-900">₹21.50</span>
                     </div>
                     <div className="flex justify-between items-center text-gray-700">
                        <span>Total Deductions</span>
                        <span className="font-extrabold text-red-500">- ₹1.03</span>
                     </div>
                     <div className="flex justify-between items-center mt-1 pt-2 border-t border-gray-100">
                        <span className="font-bold text-[var(--color-brand-green-dark)]">You Earn</span>
                        <span className="font-extrabold text-[var(--color-brand-green-dark)]">₹20.47</span>
                     </div>
                  </div>
               </div>

               <div className="bg-[#F8FAF9] border border-[#E3F2EB] rounded-xl p-4 flex flex-col w-full md:w-36 flex-shrink-0 relative overflow-hidden">
                  <span className="text-[10px] font-bold text-[var(--color-brand-green-dark)] mb-1">You Earn More</span>
                  <div className="flex items-baseline gap-1">
                     <span className="text-base font-extrabold text-[var(--color-brand-green-dark)]">₹1.03</span>
                     <span className="text-[9px] font-bold text-[var(--color-brand-green-dark)]">/kg</span>
                  </div>
                  <span className="text-[9px] font-medium text-gray-600 mt-1">than market<br/>average</span>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-green-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute bottom-2 right-2 opacity-50">
                     <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
               </div>
            </div>

            <div className="mt-6 bg-[#F8F5FF] border border-[#EBE3FF] rounded-xl p-3 flex items-start gap-3">
               <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <span className="text-xs">★</span>
               </div>
               <span className="text-[11px] font-bold text-purple-900 leading-tight">
                  Thanks to Vyapti Kshetra, you are earning more with full transparency and better market access!
               </span>
            </div>
         </div>

      </div>

      {/* Footer Banner */}
      <div className="bg-[#F3F9F6] border border-[#C1E1D2] rounded-xl p-4 flex flex-col md:flex-row justify-between items-center gap-4 mt-2">
         <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--color-brand-green-dark)] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div className="flex flex-col">
               <span className="text-sm font-extrabold text-[var(--color-brand-green-dark)]">Fair. Transparent. Farmer First.</span>
               <span className="text-[10px] font-medium text-gray-800 leading-tight mt-0.5">We are committed to your fair earnings.</span>
            </div>
         </div>
         <button className="text-xs font-bold text-[var(--color-brand-green-dark)] hover:underline flex items-center gap-1 w-full md:w-auto justify-end">
            View Our Fair Pricing Policy
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
         </button>
      </div>

    </div>
  );
}
