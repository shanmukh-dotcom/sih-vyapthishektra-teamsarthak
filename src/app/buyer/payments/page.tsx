"use client";

import React from 'react';
import { useBuyerData } from '@/context/BuyerDataContext';

export default function Payments() {
  const { orders } = useBuyerData();

  const totalSpent = orders.filter(o => o.status === 'Delivered').reduce((sum, o) => sum + o.totalAmount, 0);
  const totalPending = orders.filter(o => o.status === 'In Progress').reduce((sum, o) => sum + o.totalAmount, 0);

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Payments</h1>
        <p className="text-gray-500 font-medium mt-1">Manage your spending and pending invoices.</p>
      </header>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Total Spent</div>
          <div className="text-2xl md:text-3xl font-black text-gray-900 mt-2">₹{totalSpent.toLocaleString()}</div>
        </div>
        <div className="bg-[#F3F9F6] border border-[var(--color-brand-green)]/20 p-5 rounded-2xl shadow-sm">
          <div className="text-xs font-bold text-[var(--color-brand-green-dark)] uppercase tracking-wide">Total Saved</div>
          <div className="text-2xl md:text-3xl font-black text-[var(--color-brand-green-dark)] mt-2">₹14,500</div>
        </div>
        <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Pending</div>
          <div className="text-2xl md:text-3xl font-black text-orange-500 mt-2">₹{totalPending.toLocaleString()}</div>
        </div>
        <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm flex flex-col justify-center">
          <button className="w-full py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-colors">
            Pay All Pending
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
         <div className="md:col-span-2 space-y-6">
            {/* Pending Invoices */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-5 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                 <h2 className="font-extrabold text-gray-900 text-lg">Upcoming Payments</h2>
                 <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded">Needs Attention</span>
              </div>
              <div className="divide-y divide-gray-100">
                 {orders.filter(o => o.status === 'In Progress').map(order => (
                    <div key={order.id} className="p-5 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:bg-gray-50/50">
                       <div>
                          <div className="font-extrabold text-gray-900">{order.supplier.name}</div>
                          <div className="text-xs font-bold text-gray-500 mt-1">Invoice against {order.id}</div>
                       </div>
                       <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
                          <div className="font-black text-gray-900">₹{order.totalAmount.toLocaleString()}</div>
                          <button className="px-4 py-2 bg-[var(--color-brand-green-dark)] text-white font-bold rounded-lg hover:opacity-90">Pay Now</button>
                       </div>
                    </div>
                 ))}
                 {orders.filter(o => o.status === 'In Progress').length === 0 && (
                    <div className="p-8 text-center text-gray-500 font-medium">No pending payments.</div>
                 )}
              </div>
            </div>

            {/* Completed Transactions */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-5 border-b border-gray-100">
                 <h2 className="font-extrabold text-gray-900 text-lg">Recent Transactions</h2>
              </div>
              <div className="divide-y divide-gray-100">
                 {orders.filter(o => o.status === 'Delivered').map(order => (
                    <div key={order.id} className="p-5 flex justify-between items-center">
                       <div>
                          <div className="font-bold text-gray-900">{order.supplier.name}</div>
                          <div className="text-xs font-bold text-gray-500 mt-1">{order.date} • Paid via Escrow</div>
                       </div>
                       <div className="font-extrabold text-gray-900">₹{order.totalAmount.toLocaleString()}</div>
                    </div>
                 ))}
                 {orders.filter(o => o.status === 'Delivered').length === 0 && (
                    <div className="p-8 text-center text-gray-500 font-medium">No completed transactions.</div>
                 )}
              </div>
            </div>
         </div>

         {/* Payment Methods */}
         <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
               <h3 className="font-extrabold text-lg text-gray-900 mb-4 border-b border-gray-100 pb-3">Payment Methods</h3>
               <div className="space-y-3">
                  <div className="p-3 border border-[var(--color-brand-green)] bg-[#F3F9F6] rounded-xl flex justify-between items-center">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-6 bg-white border border-gray-200 rounded shadow-sm"></div>
                        <span className="font-bold text-gray-900 text-sm">HDFC Bank ****4590</span>
                     </div>
                     <span className="text-[10px] font-black text-[var(--color-brand-green-dark)] uppercase">Default</span>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-xl flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-6 bg-gray-200 rounded"></div>
                        <span className="font-bold text-gray-700 text-sm">Vyapti Escrow Wallet</span>
                     </div>
                  </div>
                  <button className="w-full py-2.5 border-2 border-dashed border-gray-300 text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition-colors text-sm">
                     + Add Payment Method
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
