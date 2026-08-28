"use client";

import React from 'react';
import Link from 'next/link';

export default function BuyerMatches() {
  const buyers = [
    {
      id: 1,
      name: "Green Fields Foods Pvt. Ltd.",
      verified: true,
      type: "Procurement Company",
      distance: "12 km away",
      needs: "2,000 kg",
      grade: "Grade A",
      tags: [
        { label: "High Demand", color: "text-green-700 bg-green-50 border border-green-200", icon: <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline> },
        { label: "On-time Payments", color: "text-blue-700 bg-blue-50 border border-blue-200", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> },
        { label: "Trusted Buyer", color: "text-green-700 bg-green-50 border border-green-200", icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon> }
      ],
      price: "₹20.8",
      quality: "Grade A",
      payment: "2 Days",
      score: 96,
      bestMatch: true,
      logo: <path d="M3 21h18v-2H3v2zm6-4v-4h6v4H9zm-6 0h4v-8H3v8zm14 0h4v-6h-4v6zm-4-10h4V3h-4v4z"></path>
    },
    {
      id: 2,
      name: "Sunrise Exports",
      verified: false,
      type: "Exporter",
      distance: "18 km away",
      needs: "1,500 kg",
      grade: "Grade A",
      tags: [
        { label: "Medium Demand", color: "text-orange-600 bg-orange-50 border border-orange-200", icon: <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline> },
        { label: "On-time Payments", color: "text-blue-700 bg-blue-50 border border-blue-200", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> },
        { label: "Trusted Buyer", color: "text-green-700 bg-green-50 border border-green-200", icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon> }
      ],
      price: "₹19.6",
      quality: "Grade A",
      payment: "3 Days",
      score: 88,
      bestMatch: false,
      logo: <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path>
    },
    {
      id: 3,
      name: "FreshMart Retail Chain",
      verified: true,
      type: "Retail Chain",
      distance: "22 km away",
      needs: "3,000 kg",
      grade: "Grade A",
      tags: [
        { label: "Medium Demand", color: "text-orange-600 bg-orange-50 border border-orange-200", icon: <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline> },
        { label: "Fast Payments", color: "text-blue-600 bg-blue-50 border border-blue-200", icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon> },
        { label: "Trusted Buyer", color: "text-green-700 bg-green-50 border border-green-200", icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon> }
      ],
      price: "₹19.2",
      quality: "Grade A",
      payment: "1 Day",
      score: 82,
      bestMatch: false,
      logo: <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    },
    {
      id: 4,
      name: "TruTaste Foods",
      verified: false,
      type: "Food Processing Unit",
      distance: "28 km away",
      needs: "2,500 kg",
      grade: "Grade A",
      tags: [
        { label: "Steady Demand", color: "text-blue-600 bg-blue-50 border border-blue-200", icon: <line x1="5" y1="12" x2="19" y2="12"></line> },
        { label: "On-time Payments", color: "text-blue-700 bg-blue-50 border border-blue-200", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> },
        { label: "Trusted Buyer", color: "text-green-700 bg-green-50 border border-green-200", icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon> }
      ],
      price: "₹18.7",
      quality: "Grade A",
      payment: "2 Days",
      score: 74,
      bestMatch: false,
      logo: <path d="M4 7V4h16v3M9 20h6M12 4v16"></path>
    },
    {
      id: 5,
      name: "Krishna Traders",
      verified: false,
      type: "Local Trader",
      distance: "35 km away",
      needs: "1,200 kg",
      grade: "Grade A",
      tags: [
        { label: "Low Demand", color: "text-red-600 bg-red-50 border border-red-200", icon: <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline> },
        { label: "Cash Payment", color: "text-purple-600 bg-purple-50 border border-purple-200", icon: <rect x="2" y="6" width="20" height="12" rx="2"></rect> },
        { label: "Trusted Buyer", color: "text-green-700 bg-green-50 border border-green-200", icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon> }
      ],
      price: "₹18.0",
      quality: "Grade A",
      payment: "Cash",
      score: 62,
      bestMatch: false,
      logo: <path d="M9 20V4M17 4l-8 8 8 8"></path>
    }
  ];

  return (
    <div className="w-full px-4 pt-4 pb-28 flex flex-col gap-6 md:px-8 relative">
      
      {/* Page Title & Context Selector */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
            Buyer Matches for You
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green-dark)]">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </h1>
          <p className="text-sm font-medium text-gray-600 mt-1">AI matched buyers looking for your quality & quantity</p>
        </div>
        
        <button className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-full px-3 py-1.5 hover:bg-gray-50 transition-colors">
           <span className="text-lg">🥔</span>
           <span className="text-sm font-bold text-gray-800"><span className="text-[var(--color-brand-green-dark)]">Potato</span> • Grade A</span>
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
             <polyline points="6 9 12 15 18 9"></polyline>
           </svg>
        </button>
      </div>

      {/* Top Metrics Row */}
      <div className="bg-[#F8FAF9] border border-gray-100 rounded-2xl p-4 flex gap-4 overflow-x-auto hide-scrollbar shadow-sm">
         {[
           { title: '6', desc: 'Active Buyers', icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></> },
           { title: '11,200 kg', desc: 'Total Demand', icon: <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></> },
           { title: '5–35 km', desc: 'Distance Range', icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></> },
           { title: 'High', desc: 'Market Demand', icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></> },
         ].map((item, i) => (
           <div key={i} className="flex gap-3 items-center min-w-[200px] flex-shrink-0 border-r border-gray-200 last:border-0 pr-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${i === 1 ? 'bg-orange-100 text-orange-600' : i === 2 ? 'bg-blue-100 text-blue-600' : i === 3 ? 'bg-purple-100 text-purple-600' : 'bg-[#E3F2EB] text-[var(--color-brand-green-dark)]'}`}>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
              </div>
              <div className="flex flex-col">
                 <span className="text-sm font-extrabold text-gray-900">{item.title}</span>
                 <span className="text-[10px] font-medium text-gray-600 mt-0.5 leading-tight">{item.desc}</span>
              </div>
           </div>
         ))}
      </div>

      {/* Buyers List */}
      <div className="flex flex-col gap-4">
        {buyers.map((buyer, i) => (
          <div key={buyer.id} className={`bg-white rounded-2xl p-5 shadow-sm border relative overflow-hidden flex flex-col md:flex-row gap-6 items-stretch ${buyer.bestMatch ? 'border-[var(--color-brand-green-dark)]' : 'border-gray-200'}`}>
             
             {buyer.bestMatch && (
               <div className="absolute top-0 right-0 bg-[var(--color-brand-green-dark)] text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl shadow-sm z-10">
                 Best Match
               </div>
             )}

             {/* Left Section: Company Info */}
             <div className="flex-1 flex flex-col justify-between">
                <div className="flex gap-4 items-start mb-4">
                   <div className="w-14 h-14 rounded-full bg-[#F3F9F6] text-[var(--color-brand-green-dark)] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#E3F2EB]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{buyer.logo}</svg>
                   </div>
                   <div className="flex flex-col pt-0.5">
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-base font-extrabold text-gray-900">{buyer.name}</h3>
                        {buyer.verified && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-brand-green-dark)" stroke="none" className="flex-shrink-0"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                        )}
                      </div>
                      <span className="text-[11px] font-medium text-gray-500 mb-1.5">{buyer.type}</span>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-gray-600 flex-wrap">
                         <span className="flex items-center gap-1">
                           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                           {buyer.distance}
                         </span>
                         <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                         <span>Needs {buyer.needs}</span>
                         <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                         <span>{buyer.grade}</span>
                      </div>
                   </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {buyer.tags.map((tag, tIndex) => (
                    <div key={tIndex} className={`flex items-center gap-1 text-[9px] font-bold px-2 py-1 rounded ${tag.color}`}>
                       <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{tag.icon}</svg>
                       {tag.label}
                    </div>
                  ))}
                </div>
             </div>

             {/* Middle Section: Price Info */}
             <div className="w-full md:w-[200px] flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                <span className="text-[10px] font-bold text-gray-500 mb-0.5">Offered Price</span>
                <div className="flex items-baseline gap-1 mb-3">
                   <span className="text-2xl font-extrabold text-[var(--color-brand-green-dark)]">{buyer.price}</span>
                   <span className="text-xs font-bold text-[var(--color-brand-green)]">/kg</span>
                </div>
                <div className="flex flex-col gap-1.5 text-[10px] font-medium text-gray-600">
                   <div className="flex items-center gap-1.5">
                     Quality: <span className="font-bold text-gray-900">{buyer.quality}</span>
                   </div>
                   <div className="flex items-center gap-1.5">
                     Payment: <span className="font-bold text-gray-900">{buyer.payment}</span>
                   </div>
                </div>
             </div>

             {/* Right Section: Match Score & Action */}
             <div className="w-full md:w-[150px] flex flex-col justify-between items-center md:items-end border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                <div className="flex flex-col items-center">
                   <span className="text-[10px] font-bold text-gray-500 mb-2">Match Score</span>
                   <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                           <circle cx="50" cy="50" r="45" fill="none" stroke="#F3F4F6" strokeWidth="10" />
                           <circle cx="50" cy="50" r="45" fill="none" stroke={buyer.score > 90 ? 'var(--color-brand-green-dark)' : buyer.score > 70 ? '#10B981' : '#F59E0B'} strokeWidth="10" strokeDasharray="282.7" strokeDashoffset={282.7 * (1 - (buyer.score / 100))} strokeLinecap="round" />
                        </svg>
                      </div>
                      <span className="text-xl font-extrabold text-gray-900">{buyer.score}%</span>
                   </div>
                </div>
                <button className={`w-full mt-4 md:mt-0 font-bold rounded-xl px-4 py-2.5 text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors ${buyer.bestMatch ? 'bg-[var(--color-brand-green-dark)] text-white hover:bg-green-800 border border-transparent' : 'bg-white border border-[var(--color-brand-green-dark)] text-[var(--color-brand-green-dark)] hover:bg-[#F3F9F6]'}`}>
                   View Details
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
             </div>

          </div>
        ))}
      </div>

      {/* Floating Bottom Bar (Sticky) */}
      <div className="fixed bottom-0 md:bottom-auto md:sticky md:bottom-4 left-0 right-0 bg-[#F3F9F6] border-t border-[#C1E1D2] md:border md:rounded-2xl md:mx-4 lg:mx-8 p-4 z-40 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:shadow-lg flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
         <div className="flex gap-4 items-center flex-1">
            <div className="w-10 h-10 rounded-full bg-white text-[var(--color-brand-green-dark)] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#E3F2EB]">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </div>
            <div className="flex flex-col">
               <span className="text-sm font-extrabold text-[var(--color-brand-green-dark)] mb-0.5">AI Recommendation</span>
               <span className="text-[11px] font-medium text-gray-800 leading-tight">Green Fields Foods is offering the best price with high reliability and faster payment.</span>
            </div>
         </div>
         <Link href="/farmer/matches/compare" className="bg-[var(--color-brand-green-dark)] hover:bg-green-800 text-white font-bold rounded-xl px-5 py-3 text-sm flex items-center justify-center gap-2 shadow-md w-full md:w-auto flex-shrink-0 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"></path><rect x="3" y="11" width="6" height="10" rx="1"></rect><rect x="15" y="5" width="6" height="16" rx="1"></rect></svg>
            Compare Offers (2)
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
         </Link>
      </div>

    </div>
  );
}
