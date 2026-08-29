"use client";

import React from 'react';
import Link from 'next/link';
import { useBuyerData } from '@/context/BuyerDataContext';

export default function LogisticsIndex() {
  const { orders } = useBuyerData();

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Logistics & Tracking</h1>
        <p className="text-gray-500 font-medium mt-1">Track your active and past deliveries.</p>
      </header>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Supplier</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="font-extrabold text-gray-900">{order.id}</div>
                    <div className="text-xs font-bold text-gray-400 mt-1">{order.date}</div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="font-bold text-gray-900">{order.supplier.name}</div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 text-xs font-black rounded-full border ${order.status === 'In Progress' ? 'bg-orange-100 text-orange-700 border-orange-200' : 'bg-green-100 text-green-700 border-green-200'}`}>
                      {order.status === 'In Progress' ? 'In Transit' : order.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <Link href={`/buyer/logistics/${order.id}`} className="px-4 py-2 bg-[var(--color-brand-green-dark)] text-white font-bold rounded-lg hover:opacity-90 transition-opacity text-sm">
                      View Map
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
