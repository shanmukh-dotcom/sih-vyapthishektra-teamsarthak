"use client";

import React from 'react';
import Link from 'next/link';
import { useBuyerData } from '@/context/BuyerDataContext';

export default function BiddingIndex() {
  const { matches } = useBuyerData();

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Active Bids & Negotiations</h1>
        <p className="text-gray-500 font-medium mt-1">Manage your ongoing supplier negotiations.</p>
      </header>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Supplier</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Commodity</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Offered Price</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {matches.map((match) => (
                <tr key={match.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="font-extrabold text-gray-900">{match.supplier.name}</div>
                    <div className="text-xs font-bold text-gray-400 mt-1">{match.supplier.location}</div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="font-bold text-gray-900">{match.commodity}</div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="font-extrabold text-gray-900">?{match.offeredPrice.toFixed(2)}/kg</div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 text-xs font-black rounded-full border bg-orange-100 text-orange-700 border-orange-200">
                      Negotiating
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <Link href={`/buyer/bidding/${match.id}`} className="px-4 py-2 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition-colors text-sm">
                      Open Chat
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
