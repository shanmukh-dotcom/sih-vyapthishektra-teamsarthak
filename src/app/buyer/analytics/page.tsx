"use client";

import React from 'react';
import { useBuyerData } from '@/context/BuyerDataContext';

export default function Analytics() {
  const { orders } = useBuyerData();

  const totalSpent = orders.filter(o => o.status === 'Delivered').reduce((sum, o) => sum + o.totalAmount, 0);

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Analytics</h1>
        <p className="text-gray-500 font-medium mt-1">Insights into your procurement spending and supplier performance.</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Total Spent (YTD)</div>
          <div className="text-2xl font-black text-gray-900 mt-2">₹{totalSpent.toLocaleString()}</div>
        </div>
        <div className="bg-[#F3F9F6] border border-[var(--color-brand-green)]/20 p-5 rounded-2xl shadow-sm">
          <div className="text-xs font-bold text-[var(--color-brand-green-dark)] uppercase tracking-wide">Total Saved</div>
          <div className="text-2xl font-black text-[var(--color-brand-green-dark)] mt-2">₹14,500</div>
        </div>
        <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Avg. Price / kg</div>
          <div className="text-2xl font-black text-gray-900 mt-2">₹21.50</div>
        </div>
        <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Orders Placed</div>
          <div className="text-2xl font-black text-gray-900 mt-2">{orders.length}</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         {/* Spending Overview Chart */}
         <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-extrabold text-lg text-gray-900 mb-6">Spending Overview</h2>
            <div className="h-48 flex items-end justify-between gap-2 px-2">
               {[30, 45, 25, 60, 40, 75, 50, 80].map((h, i) => (
                  <div key={i} className="w-full bg-gray-100 rounded-t-sm relative group">
                     <div className="absolute bottom-0 w-full bg-gray-900 rounded-t-sm transition-all group-hover:bg-[var(--color-brand-green-dark)]" style={{height: `${h}%`}}></div>
                  </div>
               ))}
            </div>
            <div className="flex justify-between text-xs font-bold text-gray-400 mt-3 px-2 uppercase">
               <span>Jan</span>
               <span>Feb</span>
               <span>Mar</span>
               <span>Apr</span>
               <span>May</span>
               <span>Jun</span>
               <span>Jul</span>
               <span>Aug</span>
            </div>
         </div>

         {/* Top Suppliers */}
         <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-extrabold text-lg text-gray-900 mb-4">Top Suppliers by Spend</h2>
            <div className="space-y-4">
               {orders.map((order, i) => (
                  <div key={i} className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center font-black text-gray-400 text-xs">{i+1}</div>
                        <div>
                           <div className="font-extrabold text-gray-900 text-sm">{order.supplier.name}</div>
                           <div className="text-xs font-bold text-gray-500">{order.commodity}</div>
                        </div>
                     </div>
                     <div className="font-black text-gray-900">₹{order.totalAmount.toLocaleString()}</div>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
