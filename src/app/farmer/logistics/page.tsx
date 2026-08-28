"use client";

import React from 'react';

export default function LogisticsAndPickup() {
  return (
    <div className="w-full px-4 pt-4 pb-28 flex flex-col gap-6 md:px-8 relative">
      
      {/* Page Title & Context Selector */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
            Logistics & Pickup
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green-dark)]">
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
          </h1>
          <p className="text-sm font-medium text-gray-600 mt-1">We'll pick up your produce and deliver it on time</p>
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

      {/* Progress Stepper */}
      <div className="relative w-full py-4 mt-2 hidden md:block">
         <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
         <div className="flex justify-between relative z-10">
            {[
              { num: '1', title: 'Request Pickup', sub: 'Today', active: true },
              { num: '2', title: 'In Transit', sub: '-', active: false },
              { num: '3', title: 'At Collection Center', sub: '-', active: false },
              { num: '4', title: 'Delivered to Buyer', sub: '-', active: false },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center bg-[var(--background)] px-4">
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-2 shadow-sm ${step.active ? 'bg-[var(--color-brand-green-dark)] text-white border-2 border-white' : 'bg-white border-2 border-gray-200 text-gray-400'}`}>
                    {step.num}
                 </div>
                 <span className={`text-xs font-bold ${step.active ? 'text-[var(--color-brand-green-dark)]' : 'text-gray-900'}`}>{step.title}</span>
                 <span className="text-[10px] font-medium text-gray-500">{step.sub}</span>
              </div>
            ))}
         </div>
      </div>
      
      {/* Mobile Stepper (simplified) */}
      <div className="md:hidden flex flex-col gap-2 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
         <span className="text-[10px] font-bold text-[var(--color-brand-green-dark)]">Step 1 of 4</span>
         <span className="text-sm font-extrabold text-gray-900">Request Pickup (Today)</span>
         <div className="w-full bg-gray-100 h-1.5 rounded-full mt-1 overflow-hidden">
            <div className="bg-[var(--color-brand-green-dark)] w-1/4 h-full rounded-full"></div>
         </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 items-stretch">
         
         {/* Your Scheduled Pickup */}
         <div className="w-full md:w-1/2 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-base font-extrabold text-gray-900">Your Scheduled Pickup</h3>
               <span className="bg-green-50 text-green-700 border border-green-200 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Confirmed
               </span>
            </div>
            
            <div className="flex flex-col gap-5 flex-1">
               <div className="flex items-start gap-4 pb-5 border-b border-gray-50">
                  <div className="w-10 h-10 rounded-full bg-[#F3F9F6] text-[var(--color-brand-green-dark)] flex items-center justify-center flex-shrink-0">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[11px] font-bold text-gray-500 mb-0.5">Pickup Date</span>
                     <span className="text-base font-extrabold text-[var(--color-brand-green-dark)]">Tomorrow, 26 May 2025</span>
                     <span className="text-[11px] font-bold text-gray-700 mt-0.5">06:00 AM – 08:00 AM</span>
                  </div>
               </div>
               
               <div className="flex items-start gap-4 pb-5 border-b border-gray-50">
                  <div className="w-10 h-10 rounded-full bg-[#F3F9F6] text-[var(--color-brand-green-dark)] flex items-center justify-center flex-shrink-0">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className="flex flex-col flex-1">
                     <span className="text-[11px] font-bold text-gray-500 mb-0.5">Pickup Location</span>
                     <span className="text-sm font-extrabold text-gray-900">Your Farm</span>
                     <span className="text-[11px] font-medium text-gray-600 mt-0.5">Anakapalli, Andhra Pradesh</span>
                  </div>
                  <button className="text-[10px] font-bold text-[var(--color-brand-green-dark)] bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm hover:bg-gray-50">
                     View on Map
                  </button>
               </div>
               
               <div className="flex items-center gap-4 pb-5 border-b border-gray-50">
                  <div className="w-10 h-10 rounded-full bg-[#F3F9F6] text-[var(--color-brand-green-dark)] flex items-center justify-center flex-shrink-0">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                  </div>
                  <div className="flex flex-col flex-1">
                     <span className="text-[11px] font-bold text-gray-500 mb-0.5">Vehicle Type</span>
                     <span className="text-sm font-extrabold text-gray-900">Mini Truck (Tata Ace)</span>
                  </div>
                  <svg width="48" height="32" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                     <rect x="5" y="10" width="60" height="40" fill="#4CAF50" rx="4"/>
                     <rect x="65" y="25" width="25" height="25" fill="#4CAF50" rx="4"/>
                     <circle cx="25" cy="50" r="8" fill="#333"/>
                     <circle cx="75" cy="50" r="8" fill="#333"/>
                  </svg>
               </div>
               
               <div className="flex items-center gap-4 pb-2">
                  <div className="w-10 h-10 rounded-full bg-[#F3F9F6] text-[var(--color-brand-green-dark)] flex items-center justify-center flex-shrink-0">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[11px] font-bold text-gray-500 mb-0.5">Quantity</span>
                     <span className="text-sm font-extrabold text-gray-900">1,000 kg</span>
                     <span className="text-[10px] font-medium text-gray-500 mt-0.5">(Potato • Grade A)</span>
                  </div>
               </div>
            </div>
            
            <div className="mt-4 bg-[#F3F9F6] border border-[#E3F2EB] rounded-xl p-3 flex items-start gap-2.5 text-[11px] text-gray-700 leading-tight">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green-dark)] flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
               Keep your produce ready before the pickup time for smooth and on-time collection.
            </div>
         </div>

         {/* Live Tracking */}
         <div className="w-full md:w-1/2 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-4">
               <h3 className="text-base font-extrabold text-gray-900 flex flex-col">
                  Live Tracking
                  <span className="text-[10px] font-medium text-gray-500 mt-0.5 font-normal">Vehicle: AP 31 TC 1234</span>
               </h3>
               <button className="text-[10px] font-bold text-[var(--color-brand-green-dark)] bg-white border border-[var(--color-brand-green-dark)] px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 hover:bg-[#F3F9F6] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                  Refresh
               </button>
            </div>
            
            {/* Fake Map */}
            <div className="w-full h-48 md:h-64 bg-[#E5E3DF] rounded-xl relative overflow-hidden mb-5 border border-gray-200">
               <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]"></div>
               {/* Map features fake drawing */}
               <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 200" preserveAspectRatio="none">
                  {/* Fake roads */}
                  <path d="M-50 150 Q 100 200 200 100 T 450 50" fill="none" stroke="#FFFFFF" strokeWidth="6" opacity="0.6"/>
                  <path d="M-50 150 Q 100 200 200 100 T 450 50" fill="none" stroke="#FBBF24" strokeWidth="2" opacity="0.4"/>
                  {/* Route dashed line */}
                  <path d="M 80 120 Q 180 140 320 80" fill="none" stroke="var(--color-brand-green-dark)" strokeWidth="3" strokeDasharray="6 4" strokeLinecap="round"/>
               </svg>
               
               {/* City labels */}
               <span className="absolute top-8 right-12 text-[9px] font-bold text-gray-500">Narsipatnam</span>
               <span className="absolute top-16 right-32 text-[9px] font-bold text-gray-500">Pendurthi</span>
               <span className="absolute bottom-6 left-10 text-[9px] font-bold text-gray-500">Payakaraopeta</span>
               
               {/* Map Pins */}
               {/* Farm Pin */}
               <div className="absolute top-[100px] left-[70px] flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-brand-green-dark)] text-white flex items-center justify-center shadow-md relative z-10 border-2 border-white">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  </div>
                  <div className="w-1 h-3 bg-[var(--color-brand-green-dark)] -mt-1"></div>
                  <div className="w-3 h-1 bg-black/20 rounded-full blur-[1px]"></div>
               </div>

               {/* Destination Pin */}
               <div className="absolute top-[60px] left-[310px] flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md relative z-10 border-2 border-white">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className="w-1 h-3 bg-blue-600 -mt-1"></div>
                  <div className="w-3 h-1 bg-black/20 rounded-full blur-[1px]"></div>
                  <span className="absolute -bottom-6 text-[10px] font-extrabold text-gray-900 bg-white/80 px-2 py-0.5 rounded shadow-sm backdrop-blur-sm">Anakapalli</span>
               </div>

               {/* Truck moving */}
               <div className="absolute top-[85px] left-[200px] flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white text-[var(--color-brand-green-dark)] flex items-center justify-center shadow-lg relative z-20 border border-gray-200">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                  </div>
                  {/* Pulse effect */}
                  <div className="absolute w-12 h-12 bg-[var(--color-brand-green-dark)] rounded-full opacity-20 animate-ping z-10"></div>
               </div>
            </div>

            <div className="flex gap-4 items-center justify-around flex-1 mt-auto bg-[#F8FAF9] rounded-xl p-4 border border-gray-100">
               <div className="flex flex-col items-center border-r border-gray-200 pr-10">
                  <div className="flex items-center gap-1.5 text-gray-600 mb-1">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                     <span className="text-[11px] font-bold">Estimated Arrival</span>
                  </div>
                  <span className="text-2xl font-extrabold text-[var(--color-brand-green-dark)]">06:45 AM</span>
                  <span className="text-[10px] font-bold text-gray-500">Tomorrow</span>
               </div>
               <div className="flex flex-col items-center pl-6">
                  <div className="flex items-center gap-1.5 text-gray-600 mb-1">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path></svg>
                     <span className="text-[11px] font-bold">Distance</span>
                  </div>
                  <span className="text-xl font-extrabold text-gray-900 mt-1">12.4 km</span>
               </div>
            </div>
         </div>

      </div>

      {/* Logistics Partner Banner */}
      <div className="bg-[#FFFDF5] border border-[#FDE68A] rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
         <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[var(--color-brand-green-dark)] font-extrabold text-xs shadow-sm">
               LOGO
            </div>
            <div className="flex flex-col">
               <span className="text-[10px] font-bold text-gray-500 mb-0.5">Logistics Partner</span>
               <div className="flex items-center gap-2">
                  <span className="text-sm font-extrabold text-gray-900">Kisan Logistics Network</span>
                  <span className="bg-[#F3F9F6] text-[var(--color-brand-green-dark)] text-[9px] font-bold px-2 py-0.5 rounded border border-[#C1E1D2]">Trusted Partner</span>
               </div>
               <span className="text-[11px] font-medium text-gray-600 mt-0.5">Specialized in agri produce transportation</span>
            </div>
         </div>
         
         <div className="flex gap-6 flex-wrap justify-center">
            <div className="flex gap-2 items-start">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green-dark)] mt-0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
               <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold text-gray-900">Safe Handling</span>
                  <span className="text-[9px] font-medium text-gray-500">Careful handling of<br/>your produce</span>
               </div>
            </div>
            <div className="flex gap-2 items-start">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green-dark)] mt-0.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
               <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold text-gray-900">On-time Delivery</span>
                  <span className="text-[9px] font-medium text-gray-500">Punctual and<br/>reliable service</span>
               </div>
            </div>
            <div className="flex gap-2 items-start">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green-dark)] mt-0.5"><path d="M12 1v22"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
               <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold text-gray-900">Fair Pricing</span>
                  <span className="text-[9px] font-medium text-gray-500">Transparent and<br/>low charges</span>
               </div>
            </div>
         </div>
      </div>

      {/* Your Pickup History */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col">
         <div className="flex justify-between items-center p-5 border-b border-gray-100">
            <h3 className="text-base font-extrabold text-gray-900">Your Pickup History</h3>
            <button className="text-[11px] font-bold text-[var(--color-brand-green-dark)] hover:underline">View All</button>
         </div>
         
         <div className="flex flex-col">
            {[
              { date: '20', month: 'May', status: 'Delivered', buyer: 'Sunrise Exports', price: '₹19.8', qty: '850 kg', statusColor: 'text-[var(--color-brand-green-dark)]', icon: <polyline points="20 6 9 17 4 12"></polyline> },
              { date: '17', month: 'May', status: 'Delivered', buyer: 'Green Fields Foods', price: '₹20.2', qty: '1,200 kg', statusColor: 'text-[var(--color-brand-green-dark)]', icon: <polyline points="20 6 9 17 4 12"></polyline> },
              { date: '12', month: 'May', status: 'In Transit', buyer: 'FreshMart Retail Chain', price: '₹19.5', qty: '750 kg', statusColor: 'text-orange-500', icon: <circle cx="12" cy="12" r="10"></circle> },
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b border-gray-50 gap-4 last:border-0 hover:bg-gray-50 transition-colors">
                 
                 <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={item.statusColor}>{item.icon}</svg>
                    </div>
                    <div className="flex flex-col items-center w-10">
                       <span className="text-sm font-extrabold text-gray-900">{item.date}</span>
                       <span className="text-[10px] font-bold text-gray-500">{item.month}</span>
                    </div>
                    <div className="w-px h-8 bg-gray-200 mx-2"></div>
                    <div className="flex flex-col w-32">
                       <span className="text-xs font-extrabold text-gray-900">Potato • Grade A</span>
                       <span className="text-[10px] font-medium text-gray-500">{item.qty}</span>
                    </div>
                 </div>

                 <div className="flex items-center justify-between flex-1 gap-4 ml-12 md:ml-0 border-t md:border-0 pt-3 md:pt-0 border-gray-100">
                    <div className="flex flex-col w-32">
                       <span className={`text-[11px] font-extrabold ${item.statusColor}`}>{item.status}</span>
                       <span className="text-[10px] font-medium text-gray-500 truncate">To: {item.buyer}</span>
                    </div>
                    <div className="flex items-baseline gap-1 mr-auto md:mr-0">
                       <p className="text-[var(--color-text-secondary)] text-sm">Today&apos;s Dispatch</p>
                       <span className="text-sm font-extrabold text-gray-900">{item.price}</span>
                       <span className="text-[10px] font-bold text-gray-500">/kg</span>
                    </div>
                    <button className="bg-white border border-gray-200 hover:bg-gray-50 text-[var(--color-brand-green-dark)] font-bold rounded-lg px-3 py-1.5 text-[10px] flex items-center gap-1.5 shadow-sm transition-colors">
                       Invoice
                       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    </button>
                 </div>

              </div>
            ))}
         </div>
      </div>

      {/* Support Banner */}
      <div className="bg-[#F8FAF9] border border-[#E3F2EB] rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-4 mt-2">
         <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white text-[var(--color-brand-green-dark)] flex items-center justify-center shadow-sm overflow-hidden border border-gray-200">
               {/* Farmer Illustration */}
               <svg viewBox="0 0 100 100" className="w-full h-full bg-green-100 mt-2">
                  <circle cx="50" cy="40" r="25" fill="#FCD34D"/>
                  <path d="M20 100 Q50 60 80 100" fill="#059669"/>
                  <circle cx="50" cy="40" r="25" fill="#FCD34D"/>
                  <path d="M35 35 Q50 50 65 35" stroke="#451A03" strokeWidth="2" fill="none"/>
                  <circle cx="42" cy="30" r="2" fill="#451A03"/>
                  <circle cx="58" cy="30" r="2" fill="#451A03"/>
                  <path d="M25 40 Q50 -10 75 40" fill="#451A03"/>
               </svg>
            </div>
            <div className="flex flex-col">
               <span className="text-sm font-extrabold text-[var(--color-brand-green-dark)]">Need Help with Pickup?</span>
               <span className="text-[11px] font-medium text-gray-600 mt-0.5">Our support team is here to help you.</span>
            </div>
         </div>
         <div className="flex gap-3 w-full md:w-auto mt-2 md:mt-0">
            <button className="flex-1 md:flex-none bg-white border border-[var(--color-brand-green-dark)] text-[var(--color-brand-green-dark)] hover:bg-[#F3F9F6] font-bold rounded-xl px-4 py-2 text-xs flex items-center justify-center gap-2 shadow-sm transition-colors">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
               Call Support
            </button>
            <button className="flex-1 md:flex-none bg-[#128C7E] text-white hover:bg-[#075E54] font-bold rounded-xl px-4 py-2 text-xs flex items-center justify-center gap-2 shadow-sm transition-colors">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
               WhatsApp
            </button>
         </div>
      </div>

    </div>
  );
}
