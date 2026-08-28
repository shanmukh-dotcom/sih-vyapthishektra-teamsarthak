"use client";

import React from 'react';
import Link from 'next/link';
import { useBuyerData } from '@/context/BuyerDataContext';

export default function BuyerDashboard() {
  const { buyerInfo, requirements, matches, orders } = useBuyerData();
  
  const activeReqs = requirements.filter(r => r.status === 'Active').length;
  const inProgressOrders = orders.filter(o => o.status === 'In Progress').length;

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Good morning, {buyerInfo.name.split(' ')[0]} 👋</h1>
        <p className="text-gray-500 font-medium mt-1">Here is what&apos;s happening with your procurement today.</p>
      </header>

      {/* Action Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link href="/buyer/requirements/create" className="bg-[var(--color-brand-green-dark)] text-white p-5 rounded-2xl shadow-sm flex flex-col justify-between h-32 hover:opacity-90 transition-opacity">
          <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </div>
          <span className="font-extrabold tracking-tight">Create<br/>Requirement</span>
        </Link>
        
        <Link href="/buyer/requirements" className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm flex flex-col justify-between h-32 hover:border-gray-300 transition-colors">
          <div className="text-3xl font-black text-gray-900">{activeReqs}</div>
          <span className="font-bold text-gray-500 text-sm">Active Requirements</span>
        </Link>

        <Link href="/buyer/matches" className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm flex flex-col justify-between h-32 hover:border-gray-300 transition-colors">
          <div className="text-3xl font-black text-[var(--color-brand-green-dark)]">{matches.length}</div>
          <span className="font-bold text-gray-500 text-sm">AI Supply Matches</span>
        </Link>

        <Link href="/buyer/orders" className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm flex flex-col justify-between h-32 hover:border-gray-300 transition-colors">
          <div className="text-3xl font-black text-gray-900">{inProgressOrders}</div>
          <span className="font-bold text-gray-500 text-sm">Orders in Progress</span>
        </Link>
      </div>

      {/* AI Insight */}
      <div className="bg-[#F3F9F6] border border-[var(--color-brand-green)]/20 rounded-2xl p-5 flex gap-4 mt-6">
         <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-[var(--color-brand-green-dark)]">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
         </div>
         <div>
           <h3 className="font-extrabold text-[var(--color-brand-green-dark)]">Vyapti Kshetra KSHETRA Shektra SHEKTRA SHEKTRA AI says</h3>
           <p className="text-sm font-medium text-gray-700 mt-1 leading-relaxed">
             Tomato (Grade A) prices in your region have dropped by 4% in the last 48 hours. This is an optimal time to procure your 12,000 kg requirement.
           </p>
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {/* Market Insight */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
             <h2 className="font-extrabold text-gray-900 text-lg">Market Insight</h2>
             <span className="px-2 py-1 bg-orange-100 text-orange-700 font-bold text-xs rounded-md">Trending</span>
          </div>
          <div className="flex items-end gap-3">
             <span className="text-3xl font-black text-gray-900">₹21.50</span>
             <span className="text-sm font-bold text-gray-500 mb-1">/ kg avg</span>
          </div>
          <div className="mt-4 h-32 flex items-end gap-2">
             {/* Mock Chart */}
             {[40, 35, 55, 45, 60, 50, 65].map((h, i) => (
                <div key={i} className="flex-1 bg-gray-100 rounded-t-sm relative group">
                   <div className="absolute bottom-0 w-full bg-[var(--color-brand-green-dark)] rounded-t-sm transition-all" style={{height: `${h}%`}}></div>
                </div>
             ))}
          </div>
        </div>

        {/* Actions Needed */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="font-extrabold text-gray-900 text-lg mb-4">Actions Needed</h2>
          <div className="space-y-3">
             <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                   <span className="font-bold text-sm text-gray-800">Review 6 new supply matches</span>
                </div>
                <Link href="/buyer/matches" className="text-[var(--color-brand-green-dark)] font-bold text-sm">View</Link>
             </div>
             <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                   <span className="font-bold text-sm text-gray-800">Pending payment for ORD-VY-8890</span>
                </div>
                <Link href="/buyer/payments" className="text-[var(--color-brand-green-dark)] font-bold text-sm">Pay</Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}


