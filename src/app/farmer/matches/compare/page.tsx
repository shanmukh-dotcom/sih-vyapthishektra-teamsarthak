"use client";

import React from 'react';

export default function CompareOffers() {
  const offers = [
    {
      id: 1,
      name: "FreshAgro Exports Pvt. Ltd.",
      verified: true,
      rating: "4.8",
      reviews: "128",
      isBestOffer: true,
      price: 21.50,
      payable: "2,58,000",
      bonus: 0.50,
      bonusIncluded: true,
      payment: "2 Days",
      paymentSub: "After Delivery",
      pickup: "Free Pickup",
      pickupSub: "By Buyer",
      distance: 12,
      distanceLabel: "Nearest",
      logo: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    },
    {
      id: 2,
      name: "GreenBasket Agri Traders",
      verified: true,
      rating: "4.6",
      reviews: "96",
      isBestOffer: false,
      price: 20.80,
      payable: "2,49,600",
      bonus: 0.30,
      bonusIncluded: true,
      payment: "3 Days",
      paymentSub: "After Delivery",
      pickup: "Free Pickup",
      pickupSub: "By Buyer",
      distance: 28,
      distanceLabel: "",
      logo: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    },
    {
      id: 3,
      name: "Siri Traders",
      verified: true,
      rating: "4.3",
      reviews: "72",
      isBestOffer: false,
      price: 19.75,
      payable: "2,37,000",
      bonus: 0.25,
      bonusIncluded: true,
      payment: "7 Days",
      paymentSub: "After Delivery",
      pickup: "Free Pickup",
      pickupSub: "By Buyer",
      distance: 45,
      distanceLabel: "",
      logo: <circle cx="12" cy="12" r="10" />
    },
    {
      id: 4,
      name: "Local Mandi Cooperative",
      verified: true,
      rating: "4.2",
      reviews: "54",
      isBestOffer: false,
      price: 18.90,
      payable: "2,26,800",
      bonus: 0.00,
      bonusIncluded: false,
      payment: "Cash on Delivery",
      paymentSub: "",
      pickup: "Free Pickup",
      pickupSub: "By Buyer",
      distance: 8,
      distanceLabel: "Nearest",
      logo: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    }
  ];

  return (
    <div className="w-full px-4 pt-4 pb-28 flex flex-col gap-6 md:px-8 relative">
      
      {/* Page Title & Context Selector */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
            Compare Offers
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green-dark)]">
              <line x1="12" y1="3" x2="12" y2="21"></line>
              <path d="M3 14h18"></path>
              <path d="M7 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
              <path d="M17 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
            </svg>
          </h1>
          <p className="text-sm font-medium text-gray-600 mt-1">Choose the best offer for your produce</p>
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

      {/* Top Status Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {[
           { title: '4 Offers', desc: 'Today, 10:30 AM', label: 'Offers Received', icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path> },
           { title: '24h 30m', desc: '26 May 2025, 11:00 AM', label: 'Offer Deadline', icon: <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect> },
           { title: 'Anakapalli Collection Center', desc: '', label: 'Pickup Location', icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path> },
           { title: '12,000 kg', desc: 'Grade A Potato', label: 'Your Quantity', icon: <polyline points="20 6 9 17 4 12"></polyline> },
         ].map((item, i) => (
           <div key={i} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F3F9F6] text-[var(--color-brand-green-dark)] flex items-center justify-center flex-shrink-0 mt-1">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-bold text-gray-500 mb-0.5">{item.label}</span>
                 <span className="text-sm font-extrabold text-gray-900 leading-tight">{item.title}</span>
                 {item.desc && <span className="text-[10px] font-medium text-gray-500 mt-1 leading-tight">{item.desc}</span>}
              </div>
           </div>
         ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-between items-center overflow-x-auto hide-scrollbar gap-4">
         <div className="flex gap-2 min-w-max">
            {[
              { name: 'Best Offers', count: 4, active: true, icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path> },
              { name: 'Nearest First', count: null, active: false, icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path> },
              { name: 'Highest Price', count: null, active: false, icon: <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline> },
              { name: 'Trusted Buyers', count: null, active: false, icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> },
            ].map((tab, i) => (
              <button key={i} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors border ${tab.active ? 'bg-[#F3F9F6] border-[var(--color-brand-green-dark)] text-[var(--color-brand-green-dark)]' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{tab.icon}</svg>
                {tab.name}
                {tab.count && <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${tab.active ? 'bg-[var(--color-brand-green-dark)] text-white' : 'bg-gray-200 text-gray-700'}`}>{tab.count}</span>}
              </button>
            ))}
         </div>
         <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border border-gray-200 bg-white text-[var(--color-brand-green-dark)] flex-shrink-0 shadow-sm hover:bg-gray-50">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
            Filters
         </button>
      </div>

      {/* Comparison Table */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col">
         
         <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-gray-50/50">
            <h3 className="text-sm font-extrabold text-gray-900 flex items-center gap-1.5">
               Compare All Offers
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </h3>
            <span className="text-[10px] font-medium text-gray-500">All prices in ₹ per kg</span>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
               <thead>
                  <tr>
                     <th className="w-48 p-4 border-b border-r border-gray-100 bg-white sticky left-0 z-20"></th>
                     {offers.map((offer, i) => (
                        <th key={offer.id} className={`p-4 border-b border-r border-gray-100 last:border-r-0 min-w-[200px] align-top relative ${offer.isBestOffer ? 'bg-[#F3F9F6]' : 'bg-white'}`}>
                           {offer.isBestOffer && (
                             <div className="absolute top-0 left-0 right-0 bg-[var(--color-brand-green-dark)] text-white text-[9px] font-bold text-center py-1 uppercase tracking-wider flex items-center justify-center gap-1">
                               <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                               BEST OFFER
                             </div>
                           )}
                           <div className={`flex flex-col items-center text-center ${offer.isBestOffer ? 'pt-6' : 'pt-2'}`}>
                              <div className="relative mb-3">
                                 <div className="w-12 h-12 rounded-full bg-white text-[var(--color-brand-green-dark)] flex items-center justify-center border border-gray-200 shadow-sm">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{offer.logo}</svg>
                                 </div>
                                 <div className="absolute -top-1 -left-2 w-5 h-5 rounded-full bg-gray-500 text-white text-[10px] font-bold flex items-center justify-center shadow-sm border border-white">{i + 1}</div>
                              </div>
                              <h4 className="text-sm font-extrabold text-gray-900 leading-tight mb-1 h-10 flex items-center justify-center">{offer.name}</h4>
                              <div className="flex items-center gap-1 text-[10px] font-bold text-[var(--color-brand-green-dark)] bg-[#E3F2EB] px-2 py-0.5 rounded mb-2">
                                 <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                                 Verified Buyer
                              </div>
                              <div className="flex items-center gap-1 text-xs font-bold text-gray-700">
                                 <span className="text-yellow-500">★</span> {offer.rating} <span className="text-gray-400 font-medium">({offer.reviews})</span>
                              </div>
                           </div>
                        </th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  
                  {/* Row 1: Offered Price */}
                  <tr>
                     <td className="p-4 border-b border-r border-gray-100 bg-white sticky left-0 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-green-50 text-green-700 flex items-center justify-center flex-shrink-0">
                              <span className="text-xs font-bold">₹</span>
                           </div>
                           <div className="flex flex-col">
                              <span className="text-xs font-extrabold text-gray-900">Offered Price</span>
                              <span className="text-[10px] font-medium text-gray-500">(₹/kg)</span>
                           </div>
                        </div>
                     </td>
                     {offers.map(offer => (
                        <td key={offer.id} className={`p-4 border-b border-r border-gray-100 text-center ${offer.isBestOffer ? 'bg-[#F3F9F6]' : 'bg-white'}`}>
                           <div className="flex flex-col items-center">
                              <span className="text-base font-extrabold text-gray-900">₹{offer.price.toFixed(2)}</span>
                              {offer.isBestOffer && <span className="text-[10px] font-bold text-[var(--color-brand-green-dark)]">Best Price</span>}
                           </div>
                        </td>
                     ))}
                  </tr>

                  {/* Row 2: Total Payable */}
                  <tr>
                     <td className="p-4 border-b border-r border-gray-100 bg-white sticky left-0 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
                           </div>
                           <div className="flex flex-col">
                              <span className="text-xs font-extrabold text-gray-900">Total Payable</span>
                              <span className="text-[10px] font-medium text-gray-500">(for 12,000 kg)</span>
                           </div>
                        </div>
                     </td>
                     {offers.map(offer => (
                        <td key={offer.id} className={`p-4 border-b border-r border-gray-100 text-center ${offer.isBestOffer ? 'bg-[#F3F9F6]' : 'bg-white'}`}>
                           <span className="text-sm font-extrabold text-[var(--color-brand-green-dark)]">₹{offer.payable}</span>
                        </td>
                     ))}
                  </tr>

                  {/* Row 3: Quality Bonus */}
                  <tr>
                     <td className="p-4 border-b border-r border-gray-100 bg-white sticky left-0 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center flex-shrink-0">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                           </div>
                           <div className="flex flex-col">
                              <span className="text-xs font-extrabold text-gray-900">Quality Bonus</span>
                              <span className="text-[10px] font-medium text-gray-500">(₹/kg)</span>
                           </div>
                        </div>
                     </td>
                     {offers.map(offer => (
                        <td key={offer.id} className={`p-4 border-b border-r border-gray-100 text-center ${offer.isBestOffer ? 'bg-[#F3F9F6]' : 'bg-white'}`}>
                           <div className="flex flex-col items-center">
                              <span className="text-sm font-extrabold text-gray-900">₹{offer.bonus.toFixed(2)}</span>
                              <span className={`text-[10px] font-bold ${offer.bonusIncluded ? 'text-[var(--color-brand-green-dark)]' : 'text-red-500'}`}>{offer.bonusIncluded ? 'Included' : 'Not Included'}</span>
                           </div>
                        </td>
                     ))}
                  </tr>

                  {/* Row 4: Payment Terms */}
                  <tr>
                     <td className="p-4 border-b border-r border-gray-100 bg-white sticky left-0 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-700 flex items-center justify-center flex-shrink-0">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                           </div>
                           <span className="text-xs font-extrabold text-gray-900">Payment Terms</span>
                        </div>
                     </td>
                     {offers.map(offer => (
                        <td key={offer.id} className={`p-4 border-b border-r border-gray-100 text-center ${offer.isBestOffer ? 'bg-[#F3F9F6]' : 'bg-white'}`}>
                           <div className="flex flex-col items-center">
                              <span className={`text-sm font-extrabold ${offer.isBestOffer ? 'text-[var(--color-brand-green-dark)]' : 'text-gray-900'}`}>{offer.payment}</span>
                              {offer.paymentSub && <span className={`text-[10px] font-medium ${offer.isBestOffer ? 'text-[var(--color-brand-green-dark)]' : 'text-gray-500'}`}>{offer.paymentSub}</span>}
                           </div>
                        </td>
                     ))}
                  </tr>

                  {/* Row 5: Pickup */}
                  <tr>
                     <td className="p-4 border-b border-r border-gray-100 bg-white sticky left-0 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                           </div>
                           <span className="text-xs font-extrabold text-gray-900">Pickup & Logistics</span>
                        </div>
                     </td>
                     {offers.map(offer => (
                        <td key={offer.id} className={`p-4 border-b border-r border-gray-100 text-center ${offer.isBestOffer ? 'bg-[#F3F9F6]' : 'bg-white'}`}>
                           <div className="flex flex-col items-center">
                              <span className="text-sm font-extrabold text-[var(--color-brand-green-dark)]">{offer.pickup}</span>
                              <span className="text-[10px] font-medium text-gray-500">{offer.pickupSub}</span>
                           </div>
                        </td>
                     ))}
                  </tr>

                  {/* Row 6: Distance */}
                  <tr>
                     <td className="p-4 border-b border-r border-gray-100 bg-white sticky left-0 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center flex-shrink-0">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                           </div>
                           <div className="flex flex-col">
                              <span className="text-xs font-extrabold text-gray-900">Distance</span>
                              <span className="text-[10px] font-medium text-gray-500">from Farm</span>
                           </div>
                        </div>
                     </td>
                     {offers.map(offer => (
                        <td key={offer.id} className={`p-4 border-b border-r border-gray-100 text-center ${offer.isBestOffer ? 'bg-[#F3F9F6]' : 'bg-white'}`}>
                           <div className="flex flex-col items-center">
                              <span className={`text-sm font-extrabold ${offer.isBestOffer ? 'text-[var(--color-brand-green-dark)]' : 'text-gray-900'}`}>{offer.distance} km</span>
                              {offer.distanceLabel && <span className="text-[10px] font-medium text-gray-500">{offer.distanceLabel}</span>}
                           </div>
                        </td>
                     ))}
                  </tr>

                  {/* Row 7: Action */}
                  <tr>
                     <td className="p-4 border-r border-gray-100 bg-white sticky left-0 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]"></td>
                     {offers.map(offer => (
                        <td key={offer.id} className={`p-4 border-r border-gray-100 text-center ${offer.isBestOffer ? 'bg-[#F3F9F6]' : 'bg-white'}`}>
                           <button className={`w-full font-bold rounded-xl px-4 py-2.5 text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors ${offer.isBestOffer ? 'bg-[var(--color-brand-green-dark)] text-white hover:bg-green-800' : 'bg-white border border-[var(--color-brand-green-dark)] text-[var(--color-brand-green-dark)] hover:bg-[#F3F9F6]'}`}>
                              Select Offer
                           </button>
                        </td>
                     ))}
                  </tr>

               </tbody>
            </table>
         </div>
      </div>

      {/* Bottom Insights row */}
      <div className="flex flex-col md:flex-row gap-5 items-stretch">
         
         {/* AI Recommendation */}
         <div className="w-full md:w-3/5 bg-[#F8FAF9] border border-[#E3F2EB] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-2">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green-dark)]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
               <h3 className="text-sm font-extrabold text-[var(--color-brand-green-dark)]">AI Recommendation</h3>
            </div>
            <p className="text-[11px] font-medium text-gray-600 mb-4">Based on price, distance, payment terms and buyer trust score</p>
            
            <div className="flex flex-col md:flex-row gap-4 items-center bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
               <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 rounded-full bg-[#F3F9F6] text-[var(--color-brand-green-dark)] flex items-center justify-center flex-shrink-0 border border-[#E3F2EB]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{offers[0].logo}</svg>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-sm font-extrabold text-gray-900">{offers[0].name}</span>
                        <div className="bg-[#E3F2EB] text-[var(--color-brand-green-dark)] text-[9px] font-bold px-2 py-0.5 rounded w-max mt-1">Best Choice</div>
                     </div>
                  </div>
                  <ul className="text-[10px] font-bold text-gray-700 flex flex-col gap-2">
                     <li className="flex items-center gap-1.5"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-green-dark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Highest price + quality bonus</li>
                     <li className="flex items-center gap-1.5"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-green-dark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Fast payment (2 days)</li>
                     <li className="flex items-center gap-1.5"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-green-dark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Trusted buyer with high rating</li>
                     <li className="flex items-center gap-1.5"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-green-dark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Reasonable distance & free pickup</li>
                  </ul>
               </div>
               <div className="w-px h-32 bg-gray-100 hidden md:block"></div>
               <div className="flex items-center gap-4 pl-0 md:pl-4">
                  <div className="flex flex-col">
                     <span className="text-[10px] font-bold text-gray-500">You can earn</span>
                     <span className="text-xl font-extrabold text-[var(--color-brand-green-dark)]">₹8,400</span>
                     <span className="text-[10px] font-bold text-gray-900">more</span>
                     <span className="text-[9px] font-medium text-gray-500 leading-tight mt-1">compared to<br/>lowest offer</span>
                  </div>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-green-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                     <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
               </div>
            </div>
         </div>

         {/* Savings Box */}
         <div className="w-full md:w-2/5 bg-[#F8F5FF] border border-[#EBE3FF] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 rounded-full bg-[#EBE3FF] text-purple-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">₹</span>
               </div>
               <h3 className="text-sm font-extrabold text-purple-900">Potential Savings & Benefits</h3>
            </div>
            
            <div className="flex flex-col gap-4 text-xs">
               <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-700">Lowest Offer</span>
                  <span className="font-extrabold text-gray-900">₹2,26,800</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="font-bold text-[var(--color-brand-green-dark)]">Best Offer</span>
                  <span className="font-extrabold text-[var(--color-brand-green-dark)]">₹2,58,000</span>
               </div>
               
               <div className="mt-2 pt-4 border-t border-purple-200/50 flex flex-col gap-1">
                  <span className="font-bold text-purple-700">Potential Extra Earnings</span>
                  <div className="flex items-baseline gap-2 mt-1">
                     <span className="text-xl font-extrabold text-[var(--color-brand-green-dark)]">₹31,200</span>
                     <span className="text-xs font-bold text-[var(--color-brand-green-dark)]">(13.8% more)</span>
                  </div>
               </div>
            </div>
         </div>

      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex flex-col md:flex-row justify-between items-center gap-4">
         <div className="flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <div className="flex flex-col">
               <span className="text-sm font-extrabold text-gray-900">Need more time to decide?</span>
               <span className="text-[11px] font-medium text-gray-600">You can wait for more offers or extend the deadline.</span>
            </div>
         </div>
         <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-bold rounded-xl px-5 py-3 text-sm flex items-center justify-center gap-2 shadow-sm transition-colors">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
               Extend Deadline
            </button>
            <button className="flex-1 md:flex-none bg-[#9A6B22] text-white hover:bg-[#7A551B] font-bold rounded-xl px-5 py-3 text-sm flex items-center justify-center gap-2 shadow-md transition-colors">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
               Wait for More Offers
            </button>
         </div>
      </div>

    </div>
  );
}
