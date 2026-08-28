"use client";

import React from 'react';
import Link from 'next/link';
import { useBuyerData } from '@/context/BuyerDataContext';

export default function Orders() {
  const { orders } = useBuyerData();

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'In Progress': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Delivered': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Orders</h1>
        <p className="text-gray-500 font-medium mt-1">Manage your active and past procurements.</p>
      </header>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Total Orders</div>
          <div className="text-3xl font-black text-gray-900 mt-2">{orders.length}</div>
        </div>
        <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">In Progress</div>
          <div className="text-3xl font-black text-orange-500 mt-2">{orders.filter(o => o.status === 'In Progress').length}</div>
        </div>
        <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Delivered</div>
          <div className="text-3xl font-black text-green-500 mt-2">{orders.filter(o => o.status === 'Delivered').length}</div>
        </div>
      </div>

      {/* Order Table */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Supplier</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Details</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Total</th>
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
                    <div className="font-extrabold text-gray-900">{order.commodity}</div>
                    <div className="text-xs font-bold text-gray-500">{order.quantity.toLocaleString()} kg @ ₹{order.price.toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="font-extrabold text-gray-900">₹{order.totalAmount.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 text-xs font-black rounded-full border ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <Link href={`/buyer/logistics/${order.id}`} className="text-[var(--color-brand-green-dark)] font-bold text-sm hover:underline">
                      Track
                    </Link>
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500 font-medium">No orders found. Create a requirement to begin.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
