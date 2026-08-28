"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceDot } from 'recharts';

const trendData = [
  { day: 'Today', price: 19.5 },
  { day: 'Day 1', price: 19.8 },
  { day: 'Day 2', price: 20.4 },
  { day: 'Day 3', price: 21.3 },
];

export default function FairPriceGuard() {
  return (
    <div className="w-full px-4 pt-4 pb-8 flex flex-col gap-6 md:px-8">
      
      {/* Page Title & Context Selector */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold text-[var(--color-brand-green-dark)] flex items-center gap-2">
            Fair Price Guard 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </h1>
          <p className="text-sm font-medium text-gray-600 mt-1">మీ పంటకు సరైన ధర పరిధి</p>
        </div>
        
        <button className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-full px-3 py-1.5 hover:bg-gray-50 transition-colors">
           <span className="text-lg">🍅</span>
           <span className="text-sm font-bold text-gray-800"><span className="text-[var(--color-brand-green-dark)]">Potato</span> • Grade A</span>
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
             <polyline points="6 9 12 15 18 9"></polyline>
           </svg>
        </button>
      </div>

      {/* Main Price Band Card */}
      <section>
        <div className="bg-[#F3F9F6] border border-[#E3F2EB] rounded-2xl p-5 shadow-sm relative overflow-hidden flex flex-col min-h-[220px]">
          
          <div className="flex items-center gap-1.5 text-[var(--color-brand-green-dark)] font-bold text-sm z-10 mb-2">
             Your Price Band (Today)
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
               <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
             </svg>
          </div>

          <div className="z-10 mt-1 mb-6">
             <h2 className="text-5xl font-extrabold text-[var(--color-brand-green-dark)] tracking-tight">
               ₹19.5 – ₹21.5 <span className="text-xl font-bold text-[var(--color-brand-green)]">/kg</span>
             </h2>
             <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-brand-green)] mt-2">
                <span>Grade A</span>
                <span>•</span>
                <span>Medium Quality</span>
             </div>
          </div>

          <div className="w-[60%] md:w-[45%] z-10 mt-2">
             <div className="w-full h-2.5 rounded-full flex overflow-hidden">
                <div className="h-full bg-orange-500 w-[20%]"></div>
                <div className="h-full bg-yellow-400 w-[25%]"></div>
                <div className="h-full bg-[var(--color-brand-green)] w-[35%] relative">
                   <div className="absolute top-0 right-0 -translate-y-[40%] translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-transparent border-t-[var(--color-brand-green-dark)]"></div>
                </div>
                <div className="h-full bg-[var(--color-brand-green-dark)] w-[20%]"></div>
             </div>
             <div className="flex justify-between w-full text-[11px] font-bold text-gray-800 mt-2">
                <div className="flex flex-col items-start"><span className="text-sm">₹18.0</span><span className="text-red-500 font-medium">Low</span></div>
                <div className="flex flex-col items-center text-[var(--color-brand-green)]"><span className="text-sm">₹20.5</span><span className="font-medium">Fair</span></div>
                <div className="flex flex-col items-end"><span className="text-sm">₹22.0+</span><span className="text-[var(--color-brand-green-dark)] font-medium">High</span></div>
             </div>
          </div>

          <div className="absolute top-4 right-4 z-20 bg-[var(--color-brand-green-dark)]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg flex flex-col items-center shadow-sm">
             <span className="text-sm font-extrabold flex items-center gap-1">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
               85%
             </span>
             <span className="text-[8px] font-medium uppercase tracking-wider">Confidence</span>
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

      {/* Don't Sell Yet Advisor Card */}
      <section className="bg-[#F8F5FF] border border-[#EBE3FF] rounded-2xl p-5 shadow-sm flex flex-col md:flex-row gap-6 justify-between items-center">
         <div className="flex gap-4 items-start w-full md:w-1/2">
            <div className="w-12 h-12 rounded-full bg-[#EBE3FF] text-purple-700 flex items-center justify-center flex-shrink-0 shadow-sm">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
            </div>
            <div className="flex flex-col">
               <span className="text-base font-extrabold text-purple-900">Don&apos;t Sell Yet Advisor</span>
               <span className="text-xs font-medium text-purple-800 mt-1.5 leading-relaxed">ధరలు రాబోయే 2-3 రోజుల్లో పెరగవచ్చు. మీ ప్రాంతంలో డిమాండ్ పెరుగుతోంది.</span>
               <div className="mt-3">
                 <span className="bg-[#EBE3FF] text-purple-700 text-[10px] font-bold px-3 py-1.5 rounded-full">85% Confidence</span>
               </div>
            </div>
         </div>
         
         <div className="w-full md:w-1/2 h-32 flex flex-col justify-end relative">
            <div className="absolute top-0 left-0">
               <span className="text-[10px] font-bold text-gray-600 block">Expected Price Trend</span>
               <span className="text-xl font-extrabold text-purple-800 flex items-baseline gap-1 mt-0.5">+ ₹1.2 – ₹1.8 <span className="text-xs font-bold text-gray-500">/kg</span></span>
               <span className="text-[10px] font-medium text-gray-500 block mt-0.5">in next 2–3 days</span>
            </div>
            <div className="w-full h-20 ml-2">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={trendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                   <defs>
                     <linearGradient id="colorTrend" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.2}/>
                       <stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#6B7280', fontWeight: 600 }} dy={5} />
                   <Area 
                     type="monotone" 
                     dataKey="price" 
                     stroke="#7C3AED" 
                     strokeWidth={2}
                     fillOpacity={1} 
                     fill="url(#colorTrend)" 
                   />
                   {trendData.map((entry, index) => (
                     <ReferenceDot 
                       key={index}
                       x={entry.day} 
                       y={entry.price} 
                       r={3} 
                       fill="white" 
                       stroke="#7C3AED" 
                       strokeWidth={2} 
                     />
                   ))}
                 </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>
      </section>

      {/* Split Row: Offers & Advice */}
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Current Best Offers */}
        <section className="w-full md:w-3/5 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col">
           <div className="p-4 border-b border-gray-100 flex justify-between items-center">
             <h3 className="text-base font-extrabold text-gray-900">Current Best Offers (Today)</h3>
             <span className="bg-[#F3F9F6] text-[var(--color-brand-green-dark)] text-[10px] font-bold px-2.5 py-1 rounded-md">Nearby Buyers</span>
           </div>
           
           <div className="flex flex-col divide-y divide-gray-100">
             {[
               { name: 'Green Fields Foods Pvt. Ltd.', initials: 'GF', color: 'bg-[#E3F2EB] text-[var(--color-brand-green-dark)]', req: '2,000 kg', dist: '12 km', price: '20.8', demand: 'High Demand', demandColor: 'bg-[#E3F2EB] text-[var(--color-brand-green-dark)]' },
               { name: 'Sunrise Exports', initials: 'SE', color: 'bg-orange-50 text-orange-600', req: '1,500 kg', dist: '18 km', price: '19.6', demand: 'Medium Demand', demandColor: 'bg-orange-50 text-orange-600' },
               { name: 'FreshMart Retail Chain', initials: 'F', color: 'bg-green-50 text-green-700', req: '3,000 kg', dist: '22 km', price: '19.2', demand: 'Medium Demand', demandColor: 'bg-orange-50 text-orange-600' },
             ].map((buyer, i) => (
               <div key={i} className="p-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex gap-3 items-center">
                     <div className={`w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0 ${buyer.color}`}>
                       {buyer.initials}
                     </div>
                     <div className="flex flex-col">
                        <span className="font-extrabold text-gray-900 text-sm">{buyer.name}</span>
                        <span className="text-[11px] font-medium text-gray-500 mt-0.5">{buyer.dist} away • Need {buyer.req}</span>
                     </div>
                  </div>
                  <div className="flex flex-col items-end">
                     <div className="flex items-baseline gap-1 mb-1">
                       <span className="text-base font-extrabold text-gray-900">₹{buyer.price}</span>
                       <span className="text-[10px] font-bold text-gray-500">/kg</span>
                     </div>
                     <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${buyer.demandColor}`}>
                       {buyer.demand}
                     </span>
                  </div>
               </div>
             ))}
           </div>
           
           <div className="p-4 border-t border-gray-100 flex justify-center">
              <Link href="/farmer/market" className="text-sm font-bold text-[var(--color-brand-green-dark)] hover:underline flex items-center gap-1">
                View All Offers
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
           </div>
        </section>

        {/* Our Advice */}
        <section className="w-full md:w-2/5 bg-[#F3F9F6] border border-[#E3F2EB] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
           <h3 className="text-base font-extrabold text-[var(--color-brand-green-dark)] mb-4">Our Advice</h3>
           <div className="flex flex-col items-center text-center px-4 flex-1 justify-center">
              <div className="w-14 h-14 rounded-full bg-white border-4 border-[#E3F2EB] text-[var(--color-brand-green-dark)] flex items-center justify-center mb-4 shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <p className="text-[var(--color-brand-green-dark)] font-extrabold text-sm mb-2 leading-tight">
                 Your crop price is<br/>good today.
              </p>
              <p className="text-xs font-medium text-gray-700 leading-relaxed mb-6">
                 If you can wait 2-3 days, you may get a better price.
              </p>
              <button className="w-full bg-[var(--color-brand-green-dark)] hover:bg-green-800 text-white font-bold rounded-xl px-4 py-3 text-sm flex items-center justify-center gap-2 shadow-sm transition-colors mt-auto">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                 Voice Advice
              </button>
           </div>
        </section>

      </div>

      {/* Tip Banner */}
      <div className="bg-[#FFF8F0] border border-[#FFE7CC] rounded-2xl p-4 flex justify-between items-center relative overflow-hidden shadow-sm mt-2">
         <div className="flex gap-4 items-center z-10 w-2/3">
            <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </div>
            <div className="flex flex-col">
               <span className="text-sm font-extrabold text-orange-800 mb-1">Tip for You</span>
               <span className="text-[11px] font-bold text-gray-800 leading-tight">ఉత్తర దిశలో ధరలు ఎక్కువగా ఉన్నాయి. మీరు అక్కడి కొనుగోలుదారులతో మాట్లాడండి.</span>
            </div>
         </div>
         {/* Fake Illustration right side */}
         <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-orange-200/50 flex items-end justify-end p-2 opacity-60">
            <svg width="60" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-800"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
         </div>
      </div>
      
      {/* Footer Contact Options */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
         <button className="bg-white border border-gray-200 shadow-sm rounded-xl p-3 flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#E5F5E9] text-[#25D366] flex items-center justify-center flex-shrink-0">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </div>
            <div className="flex flex-col items-start leading-tight">
               <span className="text-[10px] font-bold text-gray-900">Share on WhatsApp</span>
               <span className="text-[9px] font-medium text-gray-500 mt-0.5">వాట్సాప్ లో పంపండి</span>
            </div>
         </button>
         
         <button className="bg-white border border-gray-200 shadow-sm rounded-xl p-3 flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#E3F2EB] text-[var(--color-brand-green-dark)] flex items-center justify-center flex-shrink-0">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div className="flex flex-col items-start leading-tight">
               <span className="text-[10px] font-bold text-gray-900">Voice Call</span>
               <span className="text-[9px] font-medium text-gray-500 mt-0.5">వాయిస్ కాల్</span>
            </div>
         </button>
         
         <button className="bg-white border border-gray-200 shadow-sm rounded-xl p-3 flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="9" y1="10" x2="15" y2="10"></line><line x1="12" y1="7" x2="12" y2="13"></line></svg>
            </div>
            <div className="flex flex-col items-start leading-tight">
               <span className="text-[10px] font-bold text-gray-900">SMS</span>
               <span className="text-[9px] font-medium text-gray-500 mt-0.5">SMS పంపండి</span>
            </div>
         </button>
         
         <button className="bg-white border border-gray-200 shadow-sm rounded-xl p-3 flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <div className="flex flex-col items-start leading-tight">
               <span className="text-[10px] font-bold text-gray-900">Ask Vyapti Mitra</span>
               <span className="text-[9px] font-medium text-gray-500 mt-0.5">వ్యాప్తి మిత్రను అడగండి</span>
            </div>
         </button>
      </div>

    </div>
  );
}
