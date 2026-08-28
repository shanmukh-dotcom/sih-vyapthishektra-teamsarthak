"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MyFarmProfile() {
  return (
    <div className="w-full px-4 pt-4 pb-8 flex flex-col gap-6 md:px-8">
      
      {/* Page Title & Context Selector */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
            My Farm & Crop Profile
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green-dark)]">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
            </svg>
          </h1>
          <p className="text-sm font-medium text-gray-600 mt-1">Manage your farm details and current crop information</p>
        </div>
        
        <button className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-full px-3 py-1.5 hover:bg-gray-50 transition-colors">
           <span className="text-lg">🥔</span>
           <span className="text-sm font-bold text-gray-800"><span className="text-[var(--color-brand-green-dark)]">Potato</span> • Grade A</span>
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
             <polyline points="6 9 12 15 18 9"></polyline>
           </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 overflow-x-auto hide-scrollbar bg-white rounded-t-xl px-2">
         {[
           { name: 'Farm Overview', active: true, icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></> },
           { name: 'Current Crop', active: false, icon: <><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></> },
           { name: 'Crop History', active: false, icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></> },
           { name: 'Documents', active: false, icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></> },
         ].map((tab, i) => (
           <button key={i} className={`flex items-center gap-2 py-4 px-6 border-b-4 transition-colors whitespace-nowrap ${tab.active ? 'border-[var(--color-brand-green-dark)] text-[var(--color-brand-green-dark)]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{tab.icon}</svg>
             <span className="text-sm font-extrabold">{tab.name}</span>
           </button>
         ))}
      </div>

      {/* Farm Overview Card */}
      <section className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
         <h3 className="text-base font-extrabold text-gray-900 mb-4">Farm Overview</h3>
         <div className="flex flex-col md:flex-row gap-6 items-stretch">
            
            {/* Left: Farm Photo */}
            <div className="w-full md:w-1/3 relative h-48 md:h-auto rounded-xl overflow-hidden border border-gray-200">
               <Image 
                  src="/images/realistic_farm.jpg" 
                  alt="Farm Overview" 
                  fill
                  className="object-cover"
               />
               <button className="absolute bottom-3 left-3 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white font-bold rounded-lg px-3 py-1.5 text-xs flex items-center justify-center gap-1.5 transition-colors border border-white/20">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                  Edit Farm Photo
               </button>
            </div>

            {/* Middle: Details */}
            <div className="w-full md:w-1/3 flex flex-col justify-center">
               <div className="flex items-center gap-2 mb-1">
                 <h2 className="text-lg font-extrabold text-gray-900">Balaya Farm</h2>
                 <span className="bg-[#E3F2EB] text-[var(--color-brand-green-dark)] text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                   <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                   Verified
                 </span>
               </div>
               <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 mb-5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Anakapalli, Andhra Pradesh
               </div>
               
               <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-2 text-gray-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><path d="M9 21V9"></path></svg>
                        <span className="text-xs font-bold">Farm Size</span>
                     </div>
                     <span className="text-sm font-extrabold text-gray-900">2.50 Acres</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-2 text-gray-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
                        <span className="text-xs font-bold">Soil Type</span>
                     </div>
                     <span className="text-sm font-extrabold text-gray-900">Red Loamy</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-2 text-gray-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        <span className="text-xs font-bold">Irrigation Source</span>
                     </div>
                     <span className="text-sm font-extrabold text-gray-900">Borewell</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-2 text-gray-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span className="text-xs font-bold">Farming Experience</span>
                     </div>
                     <span className="text-sm font-extrabold text-gray-900">6 Years</span>
                  </div>
               </div>
            </div>

            {/* Right: Map */}
            <div className="w-full md:w-1/3 bg-[#F8FAF9] rounded-xl relative border border-gray-200 overflow-hidden h-48 md:h-auto flex flex-col items-center justify-center shadow-inner">
               <div className="absolute inset-0 bg-[#E5E3DF] opacity-40"></div>
               <div className="z-10 flex flex-col items-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--color-brand-green-dark)" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-md"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3" fill="white"></circle></svg>
                  <span className="text-xs font-extrabold text-gray-900 mt-1 bg-white/80 px-2 py-0.5 rounded backdrop-blur-sm shadow-sm">Anakapalli, AP</span>
               </div>
               <button className="absolute bottom-3 bg-white hover:bg-gray-50 text-[var(--color-brand-green-dark)] font-bold rounded-lg px-4 py-2 text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors border border-gray-200 z-10">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Update Location
               </button>
            </div>
         </div>
      </section>

      {/* Current Season Summary */}
      <section className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
         <h3 className="text-base font-extrabold text-gray-900 mb-4">Current Season Summary</h3>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#F3F9F6] border border-[#E3F2EB] rounded-xl p-4 flex flex-col justify-center">
               <div className="flex gap-2 items-center text-gray-700 mb-1">
                  <div className="w-6 h-6 rounded-full bg-[#E3F2EB] text-[var(--color-brand-green-dark)] flex items-center justify-center flex-shrink-0">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>
                  </div>
                  <span className="text-[10px] font-bold">Total Area Under Crop</span>
               </div>
               <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-2xl font-extrabold text-[var(--color-brand-green-dark)]">2.00</span>
                  <span className="text-sm font-bold text-[var(--color-brand-green-dark)]">Acres</span>
               </div>
               <span className="text-[10px] font-medium text-gray-500 mt-1">80% of total farm</span>
            </div>
            
            <div className="bg-[#F8FBFF] border border-blue-100 rounded-xl p-4 flex flex-col justify-center">
               <div className="flex gap-2 items-center text-gray-700 mb-1">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                     <span className="text-sm">🥔</span>
                  </div>
                  <span className="text-[10px] font-bold">Expected Production</span>
               </div>
               <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-2xl font-extrabold text-blue-800">12,000</span>
                  <span className="text-sm font-bold text-blue-600">kg</span>
               </div>
               <span className="text-[10px] font-medium text-gray-500 mt-1">This Season</span>
            </div>
            
            <div className="bg-[#F8F5FF] border border-[#EBE3FF] rounded-xl p-4 flex flex-col justify-center">
               <div className="flex gap-2 items-center text-gray-700 mb-1">
                  <div className="w-6 h-6 rounded-full bg-[#EBE3FF] text-purple-700 flex items-center justify-center flex-shrink-0">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                  </div>
                  <span className="text-[10px] font-bold">Average Yield</span>
               </div>
               <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-2xl font-extrabold text-purple-800">6,000</span>
                  <span className="text-sm font-bold text-purple-600">kg/acre</span>
               </div>
               <span className="text-[10px] font-medium text-gray-500 mt-1">Last 3 Seasons</span>
            </div>
            
            <div className="bg-[#FFF8F0] border border-[#FFE7CC] rounded-xl p-4 flex flex-col justify-center">
               <div className="flex gap-2 items-center text-gray-700 mb-1">
                  <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  </div>
                  <span className="text-[10px] font-bold">Expected Revenue</span>
               </div>
               <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-2xl font-extrabold text-orange-600">₹2.40</span>
                  <span className="text-sm font-bold text-orange-500">Lakh</span>
               </div>
               <span className="text-[10px] font-medium text-gray-500 mt-1">(Est.)</span>
            </div>
         </div>
      </section>

      {/* Current Crop Details */}
      <section className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
         <h3 className="text-base font-extrabold text-gray-900 mb-4">Current Crop Details</h3>
         <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch mb-6">
            
            {/* Crop Photo */}
            <div className="w-full md:w-1/3 relative h-56 rounded-xl overflow-hidden border border-gray-200">
               <Image 
                  src="/images/realistic_potatoes_v2.jpg" 
                  alt="Crop Photo" 
                  fill
                  className="object-cover"
               />
               
               <div className="absolute bottom-3 left-3 bg-white/95 text-gray-900 font-bold rounded-lg px-3 py-1.5 text-xs flex items-center gap-1.5 shadow-md">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green-dark)]"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  45 Days to Harvest
               </div>
            </div>

            {/* Middle: Details List */}
            <div className="w-full md:w-1/3 flex flex-col justify-center">
               <div className="flex items-center gap-3 mb-4">
                 <h2 className="text-lg font-extrabold text-gray-900">Potato • Grade A</h2>
                 <span className="bg-[#E3F2EB] text-[var(--color-brand-green-dark)] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                   <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="12" r="12"></circle></svg>
                   Growing
                 </span>
               </div>
               
               <div className="flex flex-col gap-2.5">
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-2 text-gray-500">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green)]"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                        <span className="text-xs font-bold">Variety</span>
                     </div>
                     <span className="text-xs font-extrabold text-gray-900">Kufri Jyoti</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-2 text-gray-500">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green)]"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        <span className="text-xs font-bold">Date of Sowing</span>
                     </div>
                     <span className="text-xs font-extrabold text-gray-900">10 Apr 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-2 text-gray-500">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green)]"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span className="text-xs font-bold">Crop Age</span>
                     </div>
                     <span className="text-xs font-extrabold text-gray-900">65 Days</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-2 text-gray-500">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green)]"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        <span className="text-xs font-bold">Expected Harvest</span>
                     </div>
                     <span className="text-xs font-extrabold text-gray-900">20 Jun – 25 Jun 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-2 text-gray-500">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green)]"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                        <span className="text-xs font-bold">Expected Quantity</span>
                     </div>
                     <span className="text-xs font-extrabold text-gray-900">12,000 kg</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-2 text-gray-500">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green)]"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <span className="text-xs font-bold">Quality Grade</span>
                     </div>
                     <span className="text-xs font-extrabold text-gray-900 flex items-center gap-1">
                       Grade A (AI Pre-graded)
                       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                     </span>
                  </div>
               </div>
            </div>

            {/* Right: Crop Health Score */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center border-l md:border-l border-gray-100 pl-0 md:pl-6 pt-4 md:pt-0">
               <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                     <circle cx="50" cy="50" r="45" fill="none" stroke="#F3F4F6" strokeWidth="10" />
                     <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-brand-green-dark)" strokeWidth="10" strokeDasharray="282.7" strokeDashoffset={282.7 * (1 - 0.75)} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <span className="text-3xl font-extrabold text-gray-900">75%</span>
                  </div>
               </div>
               <span className="text-xs font-bold text-gray-500 mt-4 flex items-center gap-1">
                 Crop Health Score
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
               </span>
               <button className="mt-4 bg-white border border-gray-200 text-[var(--color-brand-green-dark)] hover:bg-gray-50 font-bold rounded-xl px-4 py-2 text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors w-full">
                  View Crop Health Details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
               </button>
            </div>
         </div>
         
         {/* Bottom Advisory Banner */}
         <div className="bg-[#F3F9F6] border border-[#E3F2EB] rounded-xl p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex gap-3 items-center">
               <div className="w-10 h-10 rounded-full bg-white text-[var(--color-brand-green-dark)] flex items-center justify-center flex-shrink-0 shadow-sm border border-green-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
               </div>
               <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-[var(--color-brand-green-dark)] mb-0.5">AI Crop Advisory</span>
                  <span className="text-[11px] font-medium text-gray-700 leading-tight">Your crop is healthy! Continue regular irrigation and monitor for early blight.</span>
               </div>
            </div>
            <button className="bg-white border border-gray-200 text-[var(--color-brand-green-dark)] hover:bg-gray-50 font-bold rounded-xl px-4 py-2 text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors flex-shrink-0 w-full md:w-auto">
               View Advisory
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
         </div>
      </section>

      {/* Recent Farm Activities */}
      <section className="flex flex-col gap-4">
         <div className="flex justify-between items-center px-1">
            <h3 className="text-base font-extrabold text-gray-900">Recent Farm Activities</h3>
            <button className="text-xs font-bold text-[var(--color-brand-green-dark)] hover:underline flex items-center gap-1">
              View All Activities
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
         </div>
         
         <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            {[
              { date: '18 May, 2025', title: 'Fertilizer Applied', sub: 'NPK 19:19:19', icon: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></>, color: 'bg-green-50 text-green-600' },
              { date: '22 May, 2025', title: 'Pesticide Sprayed', sub: 'Neem Based', icon: <><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></>, color: 'bg-teal-50 text-teal-600' },
              { date: '25 May, 2025', title: 'Irrigation Done', sub: 'Borewell', icon: <><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></>, color: 'bg-blue-50 text-blue-600' },
              { date: '28 May, 2025', title: 'Field Inspection', sub: 'AI Health Check', icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></>, color: 'bg-green-50 text-[var(--color-brand-green-dark)]' },
            ].map((activity, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 flex gap-3 min-w-[240px] shadow-sm flex-shrink-0">
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${activity.color}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{activity.icon}</svg>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-gray-500 mb-0.5">{activity.date}</span>
                    <span className="text-xs font-extrabold text-gray-900">{activity.title}</span>
                    <span className="text-[10px] font-medium text-gray-600 mt-0.5">{activity.sub}</span>
                 </div>
              </div>
            ))}
         </div>
      </section>

    </div>
  );
}
