"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FarmerHome() {
  return (
    <div className="w-full px-4 pt-4 pb-8 flex flex-col gap-6 md:px-8">
      
      {/* Greeting & Weather */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
            Namaste Ramesh! <span className="text-xl">👋</span>
          </h1>
          <p className="text-xs font-medium text-gray-600 mt-1">
            మీ శ్రమకు సరైన ధర లభించాలి, అదే మా లక్ష్యం.
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-1.5 text-orange-500 font-extrabold text-2xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></line>
              <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></line>
              <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></line>
              <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></line>
            </svg>
            <span>28°C</span>
          </div>
          <span className="text-[11px] font-bold text-[var(--color-brand-green-dark)] flex items-center gap-1 mt-0.5">
            Anakapalli, AP
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </span>
        </div>
      </div>

      {/* Centerpiece: Today's Fair Price */}
      <section>
        <div className="bg-[#F3F9F6] border border-[#E3F2EB] rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col min-h-[200px]">
          
          {/* Header */}
          <div className="flex justify-between items-start z-10 w-full mb-1">
             <div className="flex items-center gap-1.5 text-[var(--color-brand-green-dark)] font-bold text-base">
                Today&apos;s Fair Price (Potato)
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
             </div>
             <button className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm font-bold text-gray-800 shadow-sm flex items-center gap-1 hover:bg-gray-50 cursor-pointer transition-colors z-20">
               View Details
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                 <line x1="5" y1="12" x2="19" y2="12"></line>
                 <polyline points="12 5 19 12 12 19"></polyline>
               </svg>
             </button>
          </div>

          {/* Price */}
          <div className="z-10 mt-2 mb-4">
             <h2 className="text-5xl font-extrabold text-[var(--color-brand-green-dark)] tracking-tight">
               ₹19.5 – ₹21.5 <span className="text-xl font-bold text-[var(--color-brand-green)]">/kg</span>
             </h2>
             <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-brand-green)] mt-2">
                <span>Grade A</span>
                <span>•</span>
                <span>Medium Quality</span>
             </div>
          </div>

          {/* Slider */}
          <div className="w-[60%] md:w-[45%] z-10 mt-3">
             <div className="w-full h-2 rounded-full flex overflow-hidden">
                <div className="h-full bg-orange-500 w-[20%]"></div>
                <div className="h-full bg-yellow-400 w-[25%]"></div>
                <div className="h-full bg-[var(--color-brand-green)] w-[35%] relative">
                   <div className="absolute top-0 right-0 -translate-y-[40%] translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-transparent border-t-[var(--color-brand-green-dark)]"></div>
                </div>
                <div className="h-full bg-[var(--color-brand-green-dark)] w-[20%]"></div>
             </div>
             <div className="flex justify-between w-full text-[11px] font-bold text-gray-800 mt-2">
                <div className="flex flex-col items-start"><span className="text-sm">₹18.0</span><span className="text-gray-500 font-medium">Low</span></div>
                <div className="flex flex-col items-center text-[var(--color-brand-green)]"><span className="text-sm">₹20.5</span><span className="font-medium">Fair</span></div>
                <div className="flex flex-col items-end"><span className="text-sm">₹22.0+</span><span className="text-gray-500 font-medium">High</span></div>
             </div>
          </div>

          {/* Large Illustration on Right */}
          <div className="absolute bottom-0 right-0 w-64 md:w-96 h-full z-0 pointer-events-none">
             <Image 
                src="/images/bg_landscape.jpg" 
                alt="Potatoes in a field" 
                fill
                className="object-cover object-left md:object-center rounded-l-full opacity-100"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#F3F9F6] via-[#F3F9F6]/80 to-transparent"></div>
          </div>

        </div>
      </section>

      {/* Quick Actions (Grid on Desktop) */}
      <section className="-mx-4 px-4 md:mx-0 md:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {[
            { name: 'Market Radar', sub: 'Nearby buyers & prices', icon: <><path d="M12 2L2 22l10-4 10 4L12 2z"/></>, color: 'text-green-700 bg-green-50 border-green-100' },
            { name: 'My Produce', sub: 'Upload & Grade', icon: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></>, color: 'text-orange-600 bg-orange-50 border-orange-100' },
            { name: 'Vyapti Collective', sub: 'Pool & Earn More', icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>, color: 'text-purple-600 bg-purple-50 border-purple-100' },
            { name: 'Profit Calculator', sub: 'Check Earnings', icon: <><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></>, color: 'text-blue-600 bg-blue-50 border-blue-100' },
            { name: 'Payments', sub: 'Safe & Secure', icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>, color: 'text-teal-700 bg-teal-50 border-teal-100' },
          ].map((action, i) => (
            <button key={i} className="flex flex-col items-center bg-white border border-gray-100 rounded-2xl p-4 shadow-sm w-full transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer">
               <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-3 border ${action.color}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {action.icon}
                  </svg>
               </div>
               <span className="text-sm font-bold text-gray-900 text-center leading-tight mb-1">{action.name}</span>
               <span className="text-[10px] font-medium text-gray-500 text-center leading-tight">{action.sub}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Important Alerts */}
      <section className="bg-red-50 border border-red-100 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-4">
           <div className="flex items-center gap-2 text-red-600 font-bold text-base">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
               <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
               <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
               <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
             </svg>
             Important Alerts
           </div>
           <button className="text-sm font-bold text-red-600 flex items-center gap-1 hover:underline">
             View All
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
           </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-4 flex items-center gap-4 w-full border border-red-100 shadow-sm cursor-pointer hover:border-red-300">
             <div className="w-12 h-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
             </div>
             <div className="flex flex-col flex-1">
                <span className="text-sm font-bold text-gray-900 leading-tight">Prices may increase in</span>
                <span className="text-lg font-extrabold text-red-600 leading-tight my-0.5">2–3 days</span>
                <span className="text-xs text-gray-500">For Potato in your area</span>
             </div>
             <div className="flex flex-col items-center justify-center">
                <span className="text-base font-extrabold text-red-600 border border-red-200 rounded-full w-12 h-12 flex items-center justify-center">85%</span>
                <span className="text-[9px] font-bold text-red-600 mt-1 uppercase tracking-widest">Confidence</span>
             </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl p-4 flex items-center gap-4 w-full border border-red-100 shadow-sm cursor-pointer hover:border-red-300">
             <div className="w-12 h-12 rounded-lg bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
             </div>
             <div className="flex flex-col flex-1">
                <span className="text-sm font-bold text-gray-900 leading-tight">Bad Deal Alert</span>
                <span className="text-xs text-gray-500 mt-1">1 offer is below the<br/>fair price band</span>
             </div>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>
      </section>

      {/* Active Opportunities */}
      <section>
        <div className="flex items-center justify-between mb-4 px-1">
           <h3 className="text-base font-extrabold text-gray-900">Active Opportunities</h3>
           <Link href="/farmer/buyers" className="text-sm font-bold text-[var(--color-brand-green-dark)] flex items-center gap-1 hover:underline">
             See All
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
           </Link>
        </div>
        
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col group cursor-pointer hover:border-[var(--color-brand-green)]/30 transition-colors">
           <div className="flex justify-between items-start mb-4">
              <div className="flex gap-4">
                 <div className="w-14 h-14 rounded-full bg-green-50 text-[var(--color-brand-green-dark)] flex items-center justify-center border border-green-100 flex-shrink-0">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22 22H2V10l7-5 7 5v2h6v10z"/><path d="M14 22V8l-7-5-7 5v14h14z" fill="var(--color-brand-green)"/></svg>
                 </div>
                 <div className="flex flex-col">
                    <h4 className="font-extrabold text-gray-900 text-lg group-hover:text-[var(--color-brand-green-dark)] transition-colors">Green Fields Foods Pvt. Ltd.</h4>
                    <span className="text-xs font-medium text-gray-600 mt-1">Needs 2,000 kg • Grade A Potato</span>
                    <span className="text-xs font-medium text-gray-500 mt-1 flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      55 km away • Pickup in 1 day
                    </span>
                 </div>
              </div>
              <div className="flex flex-col items-end">
                 <div className="flex items-baseline gap-1 mb-2">
                   <span className="text-2xl font-extrabold text-[var(--color-brand-green-dark)]">₹20.8</span>
                   <span className="text-xs font-bold text-gray-600">/kg</span>
                 </div>
                 <button className="bg-[var(--color-brand-green-dark)] hover:bg-green-800 text-white font-bold rounded-lg px-4 py-2 text-sm flex items-center gap-1 shadow-sm transition-colors">
                   View Details
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                 </button>
              </div>
           </div>

           <div className="flex gap-3">
              <span className="text-xs font-bold text-green-700 bg-white border border-green-200 px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-sm">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                 High Demand
              </span>
              <span className="text-xs font-bold text-blue-700 bg-white border border-blue-200 px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-sm">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                 On-time Payment
              </span>
              <span className="text-xs font-bold text-[var(--color-brand-green-dark)] bg-white border border-green-200 px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-sm">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                 Verified Buyer
              </span>
           </div>
        </div>
      </section>

      {/* Use Vyapti in multiple ways */}
      <section className="bg-[#F3F9F6] rounded-2xl p-6 mt-2">
        <h3 className="text-base font-extrabold text-[var(--color-brand-green-dark)] mb-5">Use Vyapti in multiple ways</h3>
        <div className="flex justify-around items-center px-4 w-full">
          {[
            { name: 'WhatsApp', icon: <><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></> },
            { name: 'Voice', icon: <><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></> },
            { name: 'SMS', icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="12" y1="7" x2="12" y2="13"/></> },
            { name: 'Missed Call', icon: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14 2L22 10"/><path d="M14 10L22 2"/></> },
            { name: 'Vyapti Mitra', icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></> },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[var(--color-brand-green-dark)] shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon}
                </svg>
              </div>
              <span className="text-xs font-bold text-gray-800 text-center leading-tight">{item.name}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
