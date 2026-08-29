"use client";

import React from 'react';
import Link from 'next/link';
import { useBuyerData } from '@/context/BuyerDataContext';

export default function CompareSuppliers() {
  const { matches } = useBuyerData();

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <header className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Compare Suppliers</h1>
          <p className="text-gray-600 font-medium mt-1">Comparing top 3 matches for your requirement.</p>
        </div>
        <Link href="/buyer/matches" className="hidden md:flex px-4 py-2 bg-white border border-gray-200 font-bold rounded-lg hover:bg-gray-50 transition-colors">
          Back to Matches
        </Link>
      </header>

      {/* Comparison Table / Cards */}
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {matches.slice(0, 3).map((match, i) => (
          <div key={match.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col relative">
            {i === 0 && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#F3F9F6] border border-[var(--color-brand-green)]/30 rounded-full text-[var(--color-brand-green-dark)] font-black text-xs shadow-sm">
                ✨ Best Match
              </div>
            )}
            
            <div className="text-center mb-6 pt-2">
               <h3 className="font-extrabold text-lg text-gray-900">{match.supplier.name}</h3>
               <p className="text-xs font-bold text-gray-500 mt-1">{match.supplier.type} • {match.supplier.location}</p>
            </div>

            <div className="text-center mb-6">
               <div className="text-4xl font-black text-gray-900">₹{match.offeredPrice.toFixed(2)}</div>
               <div className="text-sm font-bold text-[var(--color-brand-green-dark)] mt-1">{match.savings}% savings</div>
            </div>

            <div className="flex-1 space-y-4">
               <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-bold text-gray-500">Match Score</span>
                  <span className={`font-black ${i === 0 ? 'text-[var(--color-brand-green-dark)]' : 'text-gray-900'}`}>{match.matchScore}%</span>
               </div>
               <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-bold text-gray-500">Quality Score</span>
                  <span className="font-black text-gray-900">{match.qualityScore}/100</span>
               </div>
               <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-bold text-gray-500">Availability</span>
                  <span className={`font-bold ${match.availableQuantity >= 12000 ? 'text-gray-900' : 'text-red-500'}`}>
                    {match.availableQuantity.toLocaleString()} kg
                  </span>
               </div>
               <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-bold text-gray-500">Distance</span>
                  <span className="font-bold text-gray-900">{match.supplier.distance} km</span>
               </div>
               <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-bold text-gray-500">Delivery</span>
                  <span className="font-bold text-gray-900 text-right">{match.expectedDelivery}</span>
               </div>
               <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-bold text-gray-500">Payment</span>
                  <span className="font-bold text-gray-900 text-right text-xs max-w-[120px]">{match.paymentTerms}</span>
               </div>
            </div>

            <div className="mt-8">
               <Link href={`/buyer/bidding/${match.id}`} className={`w-full block text-center px-4 py-3 font-bold rounded-xl transition-colors ${i === 0 ? 'bg-[var(--color-brand-green-dark)] text-white hover:opacity-90' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                  Select & Negotiate
               </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#F3F9F6] border border-[var(--color-brand-green)]/20 rounded-2xl p-5 mt-6">
         <h3 className="font-extrabold text-[var(--color-brand-green-dark)] flex items-center gap-2 mb-2">
           <span>✨</span> Vyapti Kshetra AI Recommendation
         </h3>
         <p className="text-sm font-medium text-gray-700 leading-relaxed">
           <strong>Green Fields FPC</strong> offers the best combination of price, quality, and reliability for your requirement.
         </p>
      </div>
    </div>
  );
}



