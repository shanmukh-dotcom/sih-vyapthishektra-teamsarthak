"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { useBuyerData } from '@/context/BuyerDataContext';

export default function Logistics() {
  const { id } = useParams();
  const { orders } = useBuyerData();
  const order = orders.find(o => o.id === id) || orders[0];

  const steps = ['Order Confirmed', 'Packed & Dispatched', 'In Transit', 'Out for Delivery', 'Delivered'];
  const currentStepIndex = steps.indexOf(order?.deliveryStatus || 'Order Confirmed');

  if (!order) {
     return <div className="p-8 text-center font-bold text-gray-500">Order not found.</div>;
  }

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
      
      {/* Left Column: Progress */}
      <div className="w-full md:w-1/3 space-y-6">
         <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-extrabold text-lg text-gray-900 mb-1">Shipment Progress</h2>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide border-b border-gray-100 pb-4 mb-6">{order.id}</p>
            
            <div className="space-y-6 relative">
               <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-100 -z-10"></div>
               {steps.map((step, index) => {
                  const isCompleted = index <= currentStepIndex;
                  const isCurrent = index === currentStepIndex;
                  return (
                    <div key={step} className="flex gap-4">
                       <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border-2 ${
                          isCompleted ? 'bg-[var(--color-brand-green-dark)] border-[var(--color-brand-green-dark)] text-white' : 'bg-white border-gray-300'
                       }`}>
                          {isCompleted && <span className="text-xs">✓</span>}
                       </div>
                       <div>
                          <div className={`font-extrabold ${isCurrent ? 'text-gray-900' : isCompleted ? 'text-gray-700' : 'text-gray-400'}`}>{step}</div>
                          {isCurrent && <div className="text-xs font-bold text-gray-500 mt-1">Updated recently</div>}
                       </div>
                    </div>
                  );
               })}
            </div>
         </div>

         <div className="bg-[#F3F9F6] border border-[var(--color-brand-green)]/20 rounded-2xl p-5">
            <h3 className="font-extrabold text-[var(--color-brand-green-dark)] flex items-center gap-2 mb-2">
              <span>🚚</span> AI Logistics Insight
            </h3>
            <p className="text-sm font-medium text-gray-700">
              Weather on the route is clear. Shipment is expected to arrive exactly on time. No thermal threshold violations detected in transit.
            </p>
         </div>
      </div>

      {/* Right Column: Map & Details */}
      <div className="w-full md:w-2/3 space-y-6">
         
         {/* Fake Map */}
         <div className="bg-gray-100 border border-gray-200 rounded-2xl shadow-sm h-64 overflow-hidden relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-20" style={{
               backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
               backgroundSize: '20px 20px'
            }}></div>
            <svg className="absolute w-full h-full opacity-50" preserveAspectRatio="none">
               <path d="M 50,50 Q 150,200 400,100 T 700,200" fill="none" stroke="var(--color-brand-green-dark)" strokeWidth="4" strokeDasharray="8 8" />
            </svg>
            <div className="relative z-10 flex flex-col items-center">
               <div className="w-4 h-4 bg-[var(--color-brand-green-dark)] rounded-full animate-ping absolute"></div>
               <div className="w-4 h-4 bg-[var(--color-brand-green-dark)] rounded-full border-2 border-white relative"></div>
               <span className="mt-2 font-black text-gray-900 bg-white/80 px-2 py-0.5 rounded shadow-sm text-sm">Live Location (GPS Active)</span>
            </div>
         </div>

         <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
               <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Origin (Supplier)</div>
               <div className="font-extrabold text-gray-900">{order.supplier.name}</div>
               <div className="text-sm font-medium text-gray-600 mt-1">{order.supplier.location}</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
               <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Destination (You)</div>
               <div className="font-extrabold text-gray-900">Meera Business Pvt. Ltd.</div>
               <div className="text-sm font-medium text-gray-600 mt-1">Hyderabad, Telangana</div>
            </div>
         </div>

      </div>

    </div>
  );
}
