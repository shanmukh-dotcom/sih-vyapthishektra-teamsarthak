"use client";

import React from 'react';
import Link from 'next/link';
import { useBuyerData } from '@/context/BuyerDataContext';

export default function Requirements() {
  const { requirements } = useBuyerData();

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      <header className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Procurement Requirements</h1>
          <p className="text-gray-500 font-medium mt-1">Manage your active supply needs.</p>
        </div>
        <Link href="/buyer/requirements/create" className="px-5 py-2.5 bg-[var(--color-brand-green-dark)] text-white font-bold rounded-xl shadow-sm hover:opacity-90 transition-opacity">
          + New Requirement
        </Link>
      </header>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Req ID</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Commodity</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Required By</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {requirements.map((req) => (
                <tr key={req.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5 font-extrabold text-gray-900">{req.id}</td>
                  <td className="px-6 py-5">
                    <div className="font-extrabold text-gray-900">{req.commodity}</div>
                    <div className="text-xs font-bold text-gray-500">{req.grade}</div>
                  </td>
                  <td className="px-6 py-5 font-bold text-gray-700">{req.quantity.toLocaleString()} {req.unit}</td>
                  <td className="px-6 py-5 font-bold text-gray-700">{req.requiredBy}</td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 text-xs font-black rounded-full bg-green-100 text-[var(--color-brand-green-dark)] border border-green-200">
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <Link href="/buyer/matches" className="text-[var(--color-brand-green-dark)] font-bold text-sm hover:underline">View Matches</Link>
                  </td>
                </tr>
              ))}
              {requirements.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500 font-medium">No active requirements. Click New Requirement to start procuring.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
