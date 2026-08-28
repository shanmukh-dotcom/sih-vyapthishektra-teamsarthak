"use client";

import React from 'react';
import { useBuyerData } from '@/context/BuyerDataContext';

export default function Documents() {
  const { orders } = useBuyerData();

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      <header className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Documents</h1>
          <p className="text-gray-500 font-medium mt-1">Invoices, quality reports, and contracts.</p>
        </div>
        <div className="relative">
           <input type="text" placeholder="Search documents..." className="w-full md:w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-[var(--color-brand-green)] font-medium text-sm" />
           <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        </div>
      </header>

      {/* Categories */}
      <div className="flex overflow-x-auto gap-3 pb-2 hide-scrollbar">
         {['All Documents', 'Invoices', 'Quality Reports', 'E-Way Bills', 'Contracts'].map((cat, i) => (
            <button key={cat} className={`whitespace-nowrap px-4 py-2 rounded-lg font-bold text-sm transition-colors ${i === 0 ? 'bg-gray-900 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
               {cat}
            </button>
         ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden mt-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Document Name</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Related To</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => (
                <React.Fragment key={order.id}>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 bg-red-100 text-red-600 rounded flex items-center justify-center font-black text-xs">PDF</div>
                         <div className="font-extrabold text-gray-900">Invoice_{order.id}.pdf</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-600">{order.supplier.name}</td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-500">{order.date}</td>
                    <td className="px-6 py-4">
                      <button className="text-[var(--color-brand-green-dark)] font-bold text-sm hover:underline">Download</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded flex items-center justify-center font-black text-xs">DOC</div>
                         <div className="font-extrabold text-gray-900">Quality_Report_{order.matchId}.pdf</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-600">{order.commodity} Lot</td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-500">{order.date}</td>
                    <td className="px-6 py-4">
                      <button className="text-[var(--color-brand-green-dark)] font-bold text-sm hover:underline">View</button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-500 font-medium">No documents generated yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
