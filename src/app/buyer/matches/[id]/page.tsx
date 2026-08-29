"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useBuyerData } from '@/context/BuyerDataContext';

export default function LotDetails() {
  const { id } = useParams();
  const { matches } = useBuyerData();
  const match = matches.find(m => m.id === id) || matches[0]; // fallback

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto pb-24">
      {/* Header Profile */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-60"></div>
         
         <div className="flex flex-col md:flex-row justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                 <span className="px-2 py-1 bg-[#F3F9F6] border border-[var(--color-brand-green)]/30 rounded-lg text-[var(--color-brand-green-dark)] font-black text-[10px] uppercase tracking-widest">
                   Top Match ({match.matchScore}%)
                 </span>
                 <span className="text-xs font-bold text-gray-400">LOT ID: {match.id}</span>
              </div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{match.supplier.name}</h1>
              <p className="text-gray-600 font-medium mt-1 flex items-center gap-2">
                 {match.supplier.location} • <span className="font-bold">{match.supplier.distance} km</span> away • ⭐️ {match.supplier.rating} ({match.supplier.reviews} reviews)
              </p>
            </div>
            
            <div className="md:text-right">
               <div className="text-4xl font-black text-gray-900">₹{match.offeredPrice.toFixed(2)}<span className="text-base text-gray-500 font-bold">/kg</span></div>
               <p className="text-sm font-bold text-[var(--color-brand-green-dark)] mt-1">{match.savings}% cheaper than market</p>
            </div>
         </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
         {/* Main Content */}
         <div className="md:col-span-2 space-y-6">
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
               <h2 className="font-extrabold text-lg text-gray-900 mb-4 border-b border-gray-100 pb-3">Lot Overview</h2>
               <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Commodity</div>
                    <div className="text-base font-extrabold text-gray-900 mt-1">{match.commodity}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Grade</div>
                    <div className="text-base font-extrabold text-gray-900 mt-1">{match.grade}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Available Quantity</div>
                    <div className="text-base font-extrabold text-gray-900 mt-1">{match.availableQuantity.toLocaleString()} kg</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Expected Delivery</div>
                    <div className="text-base font-extrabold text-gray-900 mt-1">{match.expectedDelivery}</div>
                  </div>
               </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
               <h2 className="font-extrabold text-lg text-gray-900 mb-4 border-b border-gray-100 pb-3">Quality & Tests</h2>
               <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-xl mb-4">
                  <div>
                     <div className="font-bold text-gray-900">Vyapti AI Quality Score</div>
                     <div className="text-sm text-gray-500 font-medium">Based on physical inspection & image analytics</div>
                  </div>
                  <div className="text-2xl font-black text-[var(--color-brand-green-dark)]">{match.qualityScore}/100</div>
               </div>
               
               <h3 className="font-bold text-sm text-gray-700 mb-2">Quality Highlights</h3>
               <ul className="space-y-2">
                 {match.supplier.certifications.map(cert => (
                   <li key={cert} className="flex items-center gap-2 text-sm font-medium text-gray-800">
                      <span className="text-green-500">✓</span> Certified {cert}
                   </li>
                 ))}
                 <li className="flex items-center gap-2 text-sm font-medium text-gray-800"><span className="text-green-500">✓</span> Uniform size (Avg 65mm)</li>
                 <li className="flex items-center gap-2 text-sm font-medium text-gray-800"><span className="text-green-500">✓</span> Minimal surface defects (&lt;2%)</li>
               </ul>
            </div>

         </div>

         {/* Sidebar Actions */}
         <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
               <h3 className="font-extrabold text-lg text-gray-900 mb-4 border-b border-gray-100 pb-3">Price Summary</h3>
               
               <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm font-medium text-gray-600">
                     <span>Base Price (12,000 kg)</span>
                     <span>₹{(match.offeredPrice * 12000).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-gray-600">
                     <span>Packing & Handling (₹0.80/kg)</span>
                     <span>₹{(0.80 * 12000).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-gray-600">
                     <span>Logistics (₹1.20/kg)</span>
                     <span>₹{(1.20 * 12000).toLocaleString()}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex justify-between">
                     <span className="font-extrabold text-gray-900">Total Est. Landed</span>
                     <span className="font-black text-gray-900 text-lg">₹{((match.offeredPrice + 0.80 + 1.20) * 12000).toLocaleString()}</span>
                  </div>
               </div>

               <Link href={`/buyer/bidding/${match.id}`} className="w-full block text-center px-4 py-3.5 bg-[var(--color-brand-green-dark)] text-white font-bold rounded-xl hover:opacity-90 transition-opacity mb-3">
                  Place Bid / Negotiate
               </Link>
               <button className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 text-gray-800 font-bold rounded-xl hover:bg-gray-100 transition-colors">
                  Contact Supplier
               </button>
            </div>
            
            <div className="bg-[#F3F9F6] border border-[var(--color-brand-green)]/20 rounded-2xl p-5">
               <h3 className="font-extrabold text-[var(--color-brand-green-dark)] flex items-center gap-2 mb-2">
                 <span>✨</span> Why this match?
               </h3>
               <p className="text-sm font-medium text-gray-700 leading-relaxed">
                 {match.aiRecommendation}
               </p>
            </div>
         </div>
      </div>
    </div>
  );
}
