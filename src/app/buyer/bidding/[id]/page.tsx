"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useBuyerData } from '@/context/BuyerDataContext';

export default function BiddingNegotiation() {
  const { id } = useParams();
  const router = useRouter();
  const { matches, createOrder } = useBuyerData();
  const match = matches.find(m => m.id === id) || matches[0];
  
  const [bidPrice, setBidPrice] = useState(match.offeredPrice.toString());
  const [messages, setMessages] = useState([
    { sender: 'supplier', text: `Hello, we can supply 12,000 kg of Grade A Tomato at ₹${match.offeredPrice}/kg.`, time: '10:00 AM' }
  ]);
  const [isAccepted, setIsAccepted] = useState(false);

  const handleCounter = () => {
    setMessages([...messages, { sender: 'buyer', text: `I am offering ₹${bidPrice}/kg for the full quantity.`, time: 'Just now' }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'supplier', text: `We can accept ₹${bidPrice}/kg if payment terms remain the same. Deal?`, time: 'Just now' }]);
    }, 1500);
  };

  const handleAccept = () => {
    setIsAccepted(true);
    createOrder(match.id, parseFloat(bidPrice));
    setTimeout(() => {
      router.push('/buyer/orders');
    }, 2000);
  };

  if (isAccepted) {
    return (
      <div className="p-8 max-w-2xl mx-auto text-center mt-20">
         <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">🎉</div>
         <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Deal Accepted!</h1>
         <p className="text-gray-500 font-medium mb-8">Your order with {match.supplier.name} has been confirmed. Redirecting to Orders...</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
      
      {/* Left Column: Context */}
      <div className="w-full md:w-1/3 space-y-6">
         <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-extrabold text-lg text-gray-900 mb-1">Bidding & Negotiation</h2>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide border-b border-gray-100 pb-4 mb-4">with {match.supplier.name}</p>
            
            <div className="space-y-4">
               <div>
                  <div className="text-xs font-bold text-gray-500">Requirement</div>
                  <div className="text-sm font-extrabold text-gray-900">12,000 kg • Tomato (Grade A)</div>
               </div>
               <div>
                  <div className="text-xs font-bold text-gray-500">Supplier's Initial Offer</div>
                  <div className="text-sm font-extrabold text-gray-900">₹{match.offeredPrice.toFixed(2)} / kg</div>
               </div>
               <div>
                  <div className="text-xs font-bold text-gray-500">Market Average</div>
                  <div className="text-sm font-extrabold text-gray-900">₹24.00 / kg</div>
               </div>
            </div>
         </div>

         <div className="bg-[#F3F9F6] border border-[var(--color-brand-green)]/20 rounded-2xl p-5">
            <h3 className="font-extrabold text-[var(--color-brand-green-dark)] flex items-center gap-2 mb-2">
              <span>✨</span> Negotiation Insight
            </h3>
            <p className="text-sm font-medium text-gray-700">
              The supplier has high inventory. A counter-bid around <strong>₹{(match.offeredPrice - 0.5).toFixed(2)}</strong> has an 85% chance of automated acceptance.
            </p>
         </div>
      </div>

      {/* Right Column: Chat & Bid Interface */}
      <div className="w-full md:w-2/3 flex flex-col bg-white border border-gray-200 rounded-2xl shadow-sm h-[600px]">
         
         <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50 rounded-t-2xl">
            <div className="font-extrabold text-gray-900">Live Negotiation</div>
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
               <span className="text-xs font-bold text-gray-500 uppercase">Supplier Online</span>
            </div>
         </div>

         <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50/50">
            {messages.map((msg, i) => (
               <div key={i} className={`flex flex-col ${msg.sender === 'buyer' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium ${
                     msg.sender === 'buyer' ? 'bg-[var(--color-brand-green-dark)] text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                  }`}>
                     {msg.text}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 mt-1 mx-1">{msg.time}</span>
               </div>
            ))}
         </div>

         <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex items-center gap-3">
               <div className="flex-1 relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-extrabold text-gray-500">₹</span>
                  <input 
                    type="number" 
                    step="0.1"
                    value={bidPrice}
                    onChange={(e) => setBidPrice(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-[var(--color-brand-green)] font-extrabold text-gray-900" 
                  />
               </div>
               <span className="font-bold text-gray-500">/ kg</span>
            </div>
            
            <div className="flex gap-3 mt-4">
               <button onClick={handleCounter} className="flex-1 px-4 py-3 bg-white border-2 border-gray-200 text-gray-800 font-bold rounded-xl hover:bg-gray-50 transition-colors">
                  Send Counter
               </button>
               <button onClick={handleAccept} className="flex-1 px-4 py-3 bg-[var(--color-brand-green-dark)] text-white font-bold rounded-xl shadow-md hover:opacity-90 transition-opacity">
                  Accept Deal
               </button>
            </div>
         </div>
      </div>

    </div>
  );
}
