"use client";

import React from 'react';
import Link from 'next/link';
import { useBuyerData } from '@/context/BuyerDataContext';

export default function SupplyMatches() {
  const { matches } = useBuyerData();

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <header className="mb-6 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-1">
             <span className="px-2 py-1 bg-green-100 text-[var(--color-brand-green-dark)] text-xs font-bold rounded">Requirement Active</span>
             <span className="text-sm font-bold text-gray-500">REQ-001</span>
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">AI Supply Matches</h1>
          <p className="text-gray-600 font-medium mt-1">Found 6 matches for <strong>Tomato (Grade A) • 12,000 kg</strong></p>
        </div>
        <Link href="/buyer/matches/compare" className="hidden md:flex px-5 py-2.5 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-colors">
          Compare Top 3
        </Link>
      </header>

      <div className="grid gap-4">
        {matches.map((match, i) => (
          <div key={match.id} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              
              {/* Supplier Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-extrabold text-lg text-gray-900 flex items-center gap-2">
                      {match.supplier.name}
                      {match.supplier.certifications.includes('Organic') && (
                        <span className="px-2 py-0.5 bg-green-100 text-[var(--color-brand-green-dark)] text-[10px] font-black uppercase rounded-full tracking-wider">Organic</span>
                      )}
                    </h3>
                    <p className="text-sm font-bold text-gray-500 mt-1">{match.supplier.type} • {match.supplier.location} ({match.supplier.distance} km away)</p>
                  </div>
                  {i === 0 && (
                    <div className="px-3 py-1 bg-[#F3F9F6] border border-[var(--color-brand-green)]/30 rounded-lg text-[var(--color-brand-green-dark)] font-black text-xs flex items-center gap-1">
                      ✨ Best Match
                    </div>
                  )}
                </div>

                {/* Match Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Match Score</div>
                    <div className="text-xl font-black text-[var(--color-brand-green-dark)] mt-1">{match.matchScore}%</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Quality</div>
                    <div className="text-xl font-black text-gray-900 mt-1">{match.qualityScore}/100</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Quantity</div>
                    <div className="text-xl font-black text-gray-900 mt-1">{match.availableQuantity.toLocaleString()} <span className="text-sm">kg</span></div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Expected</div>
                    <div className="text-xl font-black text-gray-900 mt-1">{match.expectedDelivery}</div>
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="md:w-64 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                <div>
                  <div className="text-3xl font-black text-gray-900">₹{match.offeredPrice.toFixed(2)}<span className="text-sm text-gray-500">/kg</span></div>
                  <div className="text-sm font-bold text-[var(--color-brand-green-dark)] mt-1">Est. Savings: {match.savings}%</div>
                </div>
                <div className="mt-6 space-y-2">
                  <Link href={`/buyer/matches/${match.id}`} className="w-full block text-center px-4 py-3 bg-[var(--color-brand-green-dark)] text-white font-bold rounded-xl hover:opacity-90 transition-opacity">
                    View Details
                  </Link>
                  <Link href={`/buyer/bidding/${match.id}`} className="w-full block text-center px-4 py-3 bg-white border-2 border-gray-200 text-gray-800 font-bold rounded-xl hover:bg-gray-50 transition-colors">
                    Negotiate
                  </Link>
                </div>
              </div>
            </div>
            
            {/* AI Insight */}
            <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2 items-start">
               <span className="text-[var(--color-brand-green-dark)] mt-0.5">✨</span>
               <p className="text-sm font-medium text-gray-600"><strong className="text-gray-900 font-bold">Vyapti AI:</strong> {match.aiRecommendation}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile Compare Sticky */}
      <div className="fixed bottom-[70px] left-0 w-full p-4 md:hidden z-30">
         <Link href="/buyer/matches/compare" className="w-full flex justify-center px-5 py-3.5 bg-gray-900 text-white font-bold rounded-xl shadow-xl">
           Compare Top 3 Matches
         </Link>
      </div>
    </div>
  );
}
