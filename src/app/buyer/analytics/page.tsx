"use client";

import React, { useState } from 'react';
import { useBuyerData } from '@/context/BuyerDataContext';

export default function Analytics() {
  const { orders } = useBuyerData();
  

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      <header className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Analytics</h1>
          <p className="text-gray-500 font-medium mt-1">Insights into your procurement spending and supplier performance.</p>
        </div>
      </header>

      {/* Primary Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Total Spent</div>
          <div className="text-2xl font-black text-gray-900 mt-2">₹32,40,000</div>
        </div>
        <div className="bg-[#F3F9F6] border border-[var(--color-brand-green)]/20 p-5 rounded-2xl shadow-sm">
          <div className="text-xs font-bold text-[var(--color-brand-green-dark)] uppercase tracking-wide">Total Saved</div>
          <div className="text-2xl font-black text-[var(--color-brand-green-dark)] mt-2">₹1,84,000</div>
        </div>
        <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Avg. Price</div>
          <div className="text-2xl font-black text-gray-900 mt-2">₹22.45/kg</div>
        </div>
        <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Orders Placed</div>
          <div className="text-2xl font-black text-gray-900 mt-2">{orders.length}</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         {/* Spending Overview */}
         <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-extrabold text-lg text-gray-900">Spending Overview</h2>
              <select className="text-xs font-bold bg-gray-50 border border-gray-200 rounded p-1">
                <option>This Month vs Last Month</option>
              </select>
            </div>
            <div className="h-48 flex items-end justify-between gap-2 px-2">
               {/* Mock chart bars showing comparison */}
               {[30, 45, 25, 60, 40, 75, 50, 80].map((h, i) => (
                  <div key={i} className="w-full flex gap-1 items-end">
                     <div className="w-full bg-gray-200 rounded-t-sm" style={{height: `${h - 10}%`}}></div>
                     <div className="w-full bg-[var(--color-brand-green-dark)] rounded-t-sm" style={{height: `${h}%`}}></div>
                  </div>
               ))}
            </div>
            <div className="flex justify-between text-[10px] font-bold text-gray-400 mt-3 px-2 uppercase">
               <span>W1</span><span>W2</span><span>W3</span><span>W4</span>
            </div>
         </div>

         {/* Top Categories by Spend */}
         <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-extrabold text-lg text-gray-900 mb-4">Top Categories by Spend</h2>
            <div className="space-y-4">
               {[
                 { name: 'Tomato', value: '45%', color: 'bg-red-500' },
                 { name: 'Onion', value: '30%', color: 'bg-purple-500' },
                 { name: 'Potato', value: '15%', color: 'bg-yellow-500' },
                 { name: 'Others', value: '10%', color: 'bg-gray-400' },
               ].map((cat, i) => (
                 <div key={i}>
                   <div className="flex justify-between text-sm font-bold text-gray-700 mb-1">
                     <span>{cat.name}</span>
                     <span>{cat.value}</span>
                   </div>
                   <div className="w-full bg-gray-100 rounded-full h-2">
                     <div className={`${cat.color} h-2 rounded-full`} style={{ width: cat.value }}></div>
                   </div>
                 </div>
               ))}
            </div>
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         {/* Top Suppliers by Performance */}
         <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-extrabold text-lg text-gray-900 mb-4">Top Suppliers by Performance</h2>
            <div className="space-y-4">
               <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <div>
                    <div className="font-extrabold text-gray-900 text-sm">Green Fields FPC</div>
                    <div className="text-xs font-medium text-gray-500">Ranked by Quality</div>
                  </div>
                  <div className="font-black text-[var(--color-brand-green-dark)]">9.4/10</div>
               </div>
               <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <div>
                    <div className="font-extrabold text-gray-900 text-sm">Sahyadri Organic Collective</div>
                    <div className="text-xs font-medium text-gray-500">Ranked by Delivery Reliability</div>
                  </div>
                  <div className="font-black text-[var(--color-brand-green-dark)]">98%</div>
               </div>
               <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <div>
                    <div className="font-extrabold text-gray-900 text-sm">Vikram Agro Producers</div>
                    <div className="text-xs font-medium text-gray-500">Ranked by Best Price Variance</div>
                  </div>
                  <div className="font-black text-[var(--color-brand-green-dark)]">+4.2%</div>
               </div>
            </div>
         </div>

         {/* Order Insights */}
         <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-extrabold text-lg text-gray-900 mb-4">Order Insights</h2>
            <div className="grid grid-cols-3 gap-2">
               <div className="bg-green-50 border border-green-100 p-4 rounded-xl text-center">
                 <div className="text-2xl font-black text-green-600">4</div>
                 <div className="text-xs font-bold text-green-700 uppercase mt-1">Completed</div>
               </div>
               <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl text-center">
                 <div className="text-2xl font-black text-orange-600">3</div>
                 <div className="text-xs font-bold text-orange-700 uppercase mt-1">In Transit</div>
               </div>
               <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-center">
                 <div className="text-2xl font-black text-blue-600">1</div>
                 <div className="text-xs font-bold text-blue-700 uppercase mt-1">Pending</div>
               </div>
            </div>

            <div className="mt-6 bg-[#F3F9F6] border border-[var(--color-brand-green)]/20 p-4 rounded-xl flex gap-3">
               <div className="text-[var(--color-brand-green-dark)]">✨</div>
               <div className="text-sm">
                 <p className="font-extrabold text-[var(--color-brand-green-dark)] mb-1">AI Insight & Savings Summary</p>
                 <p className="font-medium text-gray-700">By shifting 40% of procurement to direct FPOs this quarter, you have bypassed intermediate margins, saving ₹1,84,000. Quality rejection rate has also decreased by 2.4%.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
