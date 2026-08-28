"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';

const data = [
  { date: '18 May', price: 18.6 },
  { date: '19 May', price: 18.9 },
  { date: '20 May', price: 19.2 },
  { date: '21 May', price: 19.8 },
  { date: '22 May', price: 20.1 },
  { date: '23 May', price: 20.6 },
  { date: '24 May', price: 20.6 },
];

export default function MarketPrices() {
  return (
    <div className="w-full px-4 pt-4 pb-8 flex flex-col gap-6 md:px-8">
      
      {/* Page Title & Context Selector */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
            Market Prices 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
          </h1>
          <p className="text-sm font-medium text-gray-600 mt-1">Real-time prices from top markets</p>
        </div>
        
        <button className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-full px-3 py-1.5 hover:bg-gray-50 transition-colors">
           <span className="text-lg">🍅</span>
           <span className="text-sm font-bold text-gray-800"><span className="text-[var(--color-brand-green-dark)]">Potato</span> • Grade A</span>
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
             <polyline points="6 9 12 15 18 9"></polyline>
           </svg>
        </button>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-green-50 text-[var(--color-brand-green-dark)] flex items-center justify-center font-bold">₹</div>
            <span className="text-xs font-bold text-gray-800">Average Market Price</span>
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-3xl font-extrabold text-[var(--color-brand-green-dark)]">₹20.6</span>
            <span className="text-sm font-bold text-[var(--color-brand-green)]">/kg</span>
          </div>
          <div className="text-[11px] font-bold text-green-700 mt-1 flex items-center gap-1">
            ↑ ₹0.8 (4.1%) 
            <span className="text-gray-500 font-medium">vs yesterday</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
            </div>
            <span className="text-xs font-bold text-gray-800">Highest Price</span>
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-3xl font-extrabold text-blue-700">₹24.5</span>
            <span className="text-sm font-bold text-blue-500">/kg</span>
          </div>
          <div className="text-[11px] font-medium text-gray-500 mt-1 flex flex-col">
             <span className="font-bold text-gray-700">Hyderabad Market</span>
             Today
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
            </div>
            <span className="text-xs font-bold text-gray-800">Lowest Price</span>
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-3xl font-extrabold text-purple-700">₹16.8</span>
            <span className="text-sm font-bold text-purple-500">/kg</span>
          </div>
          <div className="text-[11px] font-medium text-gray-500 mt-1 flex flex-col">
             <span className="font-bold text-gray-700">Kurnool Market</span>
             Today
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <span className="text-xs font-bold text-gray-800">Price Trend</span>
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-extrabold text-orange-500">Rising</span>
          </div>
          <div className="text-[11px] font-medium text-gray-500 mt-2 flex flex-col gap-1">
             <span className="font-bold text-gray-700">Good time to sell</span>
             <Link href="#" className="font-bold text-[var(--color-brand-green-dark)] flex items-center gap-0.5 hover:underline">
               Learn more 
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
             </Link>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <section className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-extrabold text-gray-900">Price Trend (Last 7 Days)</h3>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50">
            7 Days
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="h-56 w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-brand-green)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-brand-green)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#6B7280', fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#6B7280', fontWeight: 600 }} tickFormatter={(value) => `₹${value}`} domain={['dataMin - 1', 'dataMax + 2']} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  labelStyle={{ fontWeight: 'bold', color: '#374151' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="price" 
                  stroke="var(--color-brand-green-dark)" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorPrice)" 
                  activeDot={{ r: 6, fill: 'var(--color-brand-green-dark)', stroke: 'white', strokeWidth: 2 }}
                />
                {data.map((entry, index) => (
                  <ReferenceDot 
                    key={index}
                    x={entry.date} 
                    y={entry.price} 
                    r={4} 
                    fill="white" 
                    stroke="var(--color-brand-green-dark)" 
                    strokeWidth={2} 
                  />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="md:w-64 bg-[#F3F9F6] border border-[#E3F2EB] rounded-xl p-4 flex flex-col justify-between">
             <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5 text-[var(--color-brand-green-dark)] font-bold text-sm">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                   Market Insights
                </div>
                <p className="text-xs font-medium text-gray-700 leading-relaxed">
                  Prices are expected to remain stable or increase slightly in the next 2–3 days.
                </p>
                <p className="text-xs font-medium text-gray-700 leading-relaxed">
                  High demand in Hyderabad and Bengaluru markets.
                </p>
             </div>
             <Link href="#" className="text-xs font-bold text-[var(--color-brand-green-dark)] hover:underline flex items-center gap-1 mt-4">
                View Detailed Analysis
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
             </Link>
          </div>
        </div>
      </section>

      {/* Prices by Market Table */}
      <section className="flex flex-col gap-3">
        <h3 className="font-extrabold text-gray-900">Prices by Market</h3>
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="px-5 py-3 text-xs font-bold text-gray-500 w-1/3">Market</th>
                  <th className="px-5 py-3 text-xs font-bold text-gray-500">Price (₹/kg)</th>
                  <th className="px-5 py-3 text-xs font-bold text-gray-500">Change</th>
                  <th className="px-5 py-3 text-xs font-bold text-gray-500">Demand</th>
                  <th className="px-5 py-3 text-xs font-bold text-gray-500">Distance</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'Hyderabad Market', loc: 'Hyderabad, Telangana', price: '24.5', change: '↑ ₹1.2 (5.1%)', demand: 'Very High', demandColor: 'bg-green-100 text-green-700', dist: '312 km', priceColor: 'text-[var(--color-brand-green-dark)]', changeColor: 'text-green-600' },
                  { name: 'Bengaluru Market', loc: 'Bengaluru, Karnataka', price: '22.3', change: '↑ ₹0.9 (4.2%)', demand: 'High', demandColor: 'bg-green-50 text-green-600', dist: '328 km', priceColor: 'text-[var(--color-brand-green-dark)]', changeColor: 'text-green-600' },
                  { name: 'Vijayawada Market', loc: 'Vijayawada, Andhra Pradesh', price: '20.1', change: '↑ ₹0.5 (2.6%)', demand: 'Medium', demandColor: 'bg-orange-50 text-orange-600', dist: '156 km', priceColor: 'text-[var(--color-brand-green-dark)]', changeColor: 'text-green-600' },
                  { name: 'Tirupati Market', loc: 'Tirupati, Andhra Pradesh', price: '18.7', change: '↑ ₹0.3 (1.6%)', demand: 'Medium', demandColor: 'bg-orange-50 text-orange-600', dist: '182 km', priceColor: 'text-[var(--color-brand-green-dark)]', changeColor: 'text-green-600' },
                  { name: 'Kurnool Market', loc: 'Kurnool, Andhra Pradesh', price: '16.8', change: '↓ ₹0.2 (1.2%)', demand: 'Low', demandColor: 'bg-red-50 text-red-600', dist: '95 km', priceColor: 'text-[var(--color-brand-green-dark)]', changeColor: 'text-red-600' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors cursor-pointer group">
                    <td className="px-5 py-4">
                      <div className="flex items-start gap-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green)] mt-0.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-900">{row.name}</span>
                          <span className="text-[11px] font-medium text-gray-500">{row.loc}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-base font-extrabold ${row.priceColor}`}>₹{row.price}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-xs font-bold ${row.changeColor}`}>{row.change}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${row.demandColor}`}>{row.demand}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-xs font-medium text-gray-600">{row.dist}</span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-[var(--color-brand-green-dark)]"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full border-t border-gray-100 p-3 flex justify-center">
             <button className="text-sm font-bold text-[var(--color-brand-green-dark)] hover:underline flex items-center gap-1">
               View All Markets
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
             </button>
          </div>
        </div>
      </section>

      {/* Banners */}
      <div className="flex flex-col gap-3">
        {/* Price Alert Banner */}
        <div className="bg-[#F3F9F6] border border-[#E3F2EB] rounded-2xl p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div className="flex gap-3 items-center">
             <div className="w-12 h-12 rounded-full bg-[var(--color-brand-green-dark)] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
             </div>
             <div className="flex flex-col">
                <span className="text-sm md:text-base font-bold text-gray-900">Get the Best Price for Your Produce</span>
                <span className="text-xs font-medium text-gray-600 mt-0.5">Compare market prices, track trends, and sell at the right time to maximize your earnings.</span>
             </div>
           </div>
           <div className="flex flex-col items-center gap-2 flex-shrink-0">
             <button className="bg-[var(--color-brand-green-dark)] hover:bg-green-800 text-white font-bold rounded-xl px-5 py-2.5 text-sm flex items-center justify-center gap-2 shadow-sm w-full transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                Get Price Alert
             </button>
             <Link href="#" className="text-[10px] font-medium text-gray-500 hover:underline flex items-center gap-1">
               How Price Alerts Work? 
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
             </Link>
           </div>
        </div>

        {/* AI Prediction Banner */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div className="flex gap-3 items-center w-full md:w-1/3">
             <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>
             </div>
             <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900">AI Price Prediction</span>
                <span className="text-[10px] md:text-xs font-medium text-gray-600 mt-0.5">AI predicts prices based on demand, supply, weather and market trends.</span>
             </div>
           </div>
           
           <div className="flex flex-1 justify-between items-center bg-white rounded-xl p-3 border border-blue-100 shadow-sm divide-x divide-gray-100">
              <div className="flex flex-col items-center px-2 w-1/3">
                 <span className="text-[10px] font-bold text-gray-500">Tomorrow</span>
                 <span className="text-xs md:text-sm font-extrabold text-gray-900 mt-1 whitespace-nowrap">₹21.0-₹22.0<span className="text-[10px] text-gray-500 font-medium">/kg</span></span>
                 <span className="text-[9px] font-bold text-green-600 mt-1 flex items-center gap-0.5"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg> Slight Increase</span>
              </div>
              <div className="flex flex-col items-center px-2 w-1/3">
                 <span className="text-[10px] font-bold text-gray-500">In 3 Days</span>
                 <span className="text-xs md:text-sm font-extrabold text-gray-900 mt-1 whitespace-nowrap">₹21.5-₹22.8<span className="text-[10px] text-gray-500 font-medium">/kg</span></span>
                 <span className="text-[9px] font-bold text-green-600 mt-1 flex items-center gap-0.5"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg> Increase</span>
              </div>
              <div className="flex flex-col items-center px-2 w-1/3">
                 <span className="text-[10px] font-bold text-gray-500">In 7 Days</span>
                 <span className="text-xs md:text-sm font-extrabold text-gray-900 mt-1 whitespace-nowrap">₹20.5-₹21.5<span className="text-[10px] text-gray-500 font-medium">/kg</span></span>
                 <span className="text-[9px] font-bold text-gray-500 mt-1 flex items-center gap-0.5"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> Stable</span>
              </div>
           </div>
        </div>
        
        {/* Tip Banner */}
        <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-3 flex justify-between items-center">
           <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              <span className="text-xs font-bold text-blue-900">Tip: Prices are usually higher on Tuesday, Wednesday and Thursday.</span>
           </div>
           <Link href="#" className="text-xs font-bold text-blue-700 hover:underline flex items-center gap-1">
             Best Days to Sell
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
           </Link>
        </div>
      </div>

    </div>
  );
}
