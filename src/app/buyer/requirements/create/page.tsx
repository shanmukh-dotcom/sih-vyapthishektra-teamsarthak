"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useBuyerData, Requirement } from '@/context/BuyerDataContext';

export default function CreateRequirement() {
  const router = useRouter();
  const { addRequirement } = useBuyerData();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    commodity: 'Tomato',
    grade: 'Grade A',
    quantity: '12000',
    unit: 'kg',
    requiredBy: '2026-09-05',
    organic: false,
    directFromFarmer: true,
    pricePreference: 'Market Avg'
  });

  const handleSubmit = () => {
    const newReq: Requirement = {
      id: `REQ-${Math.floor(1000 + Math.random() * 9000)}`,
      commodity: formData.commodity,
      grade: formData.grade,
      quantity: parseInt(formData.quantity),
      unit: formData.unit,
      requiredBy: formData.requiredBy,
      status: 'Active'
    };
    addRequirement(newReq);
    router.push('/buyer/matches');
  };

  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto">
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Create Procurement Requirement</h1>
      </header>

      {/* Progress */}
      <div className="flex items-center justify-between mb-8 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[var(--color-brand-green-dark)] -z-10 transition-all" style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
        
        {['Details', 'Preferences', 'Delivery', 'Review'].map((label, i) => (
          <div key={label} className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
              step > i + 1 ? 'bg-[var(--color-brand-green-dark)] text-white' : 
              step === i + 1 ? 'bg-[var(--color-brand-green-dark)] text-white ring-4 ring-green-100' : 
              'bg-gray-200 text-gray-500'
            }`}>
              {step > i + 1 ? '✓' : i + 1}
            </div>
            <span className={`text-xs font-bold mt-2 ${step >= i + 1 ? 'text-gray-900' : 'text-gray-400'}`}>{label}</span>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        {step === 1 && (
          <div className="space-y-5">
            <h2 className="font-extrabold text-xl text-gray-900 border-b border-gray-100 pb-3">Requirement Details</h2>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Commodity</label>
              <select 
                value={formData.commodity}
                onChange={e => setFormData({...formData, commodity: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 font-medium"
              >
                <option>Tomato</option>
                <option>Potato</option>
                <option>Onion</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Grade / Quality</label>
                <select 
                  value={formData.grade}
                  onChange={e => setFormData({...formData, grade: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 font-medium"
                >
                  <option>Grade A</option>
                  <option>Grade B</option>
                  <option>Processing Grade</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Quantity Needed (kg)</label>
                <input 
                  type="number" 
                  value={formData.quantity}
                  onChange={e => setFormData({...formData, quantity: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 font-medium" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Required By</label>
              <input 
                type="date" 
                value={formData.requiredBy}
                onChange={e => setFormData({...formData, requiredBy: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 font-medium" 
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <h2 className="font-extrabold text-xl text-gray-900 border-b border-gray-100 pb-3">Sourcing Preferences</h2>
            
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                <input type="checkbox" checked={formData.organic} onChange={e => setFormData({...formData, organic: e.target.checked})} className="w-5 h-5 accent-[var(--color-brand-green-dark)]" />
                <span className="font-bold text-gray-700">Must be Organic / Residue-Free</span>
              </label>
              <label className="flex items-center gap-3 p-4 border border-[var(--color-brand-green-dark)] bg-[#F3F9F6] rounded-xl cursor-pointer">
                <input type="checkbox" checked={formData.directFromFarmer} onChange={e => setFormData({...formData, directFromFarmer: e.target.checked})} className="w-5 h-5 accent-[var(--color-brand-green-dark)]" />
                <span className="font-bold text-[var(--color-brand-green-dark)]">Direct from Farmer / FPO</span>
              </label>
            </div>
            
            {/* AI Explanation */}
            <div className="bg-[#F3F9F6] border border-[var(--color-brand-green)]/20 rounded-xl p-4 flex gap-3">
               <div className="text-[var(--color-brand-green-dark)] mt-0.5">✨</div>
               <p className="text-sm font-medium text-gray-700">
                 <strong className="font-bold text-[var(--color-brand-green-dark)]">Vyapti AI</strong> will prioritize FPOs and collectives within a 300km radius based on these preferences to minimize logistics overhead.
               </p>
            </div>
          </div>
        )}

        {step > 2 && (
          <div className="py-12 text-center">
             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">👀</div>
             <h3 className="font-extrabold text-lg">Ready to find suppliers</h3>
             <p className="text-gray-500 font-medium mt-1 mb-6">Review skipped for demo purposes.</p>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between">
          {step > 1 ? (
            <button onClick={() => setStep(step - 1)} className="px-6 py-3 font-bold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">Back</button>
          ) : <div></div>}
          
          {step < 3 ? (
            <button onClick={() => setStep(step + 1)} className="px-8 py-3 bg-gray-900 hover:bg-black text-white font-bold rounded-xl shadow-sm transition-colors">Continue</button>
          ) : (
            <button onClick={handleSubmit} className="px-8 py-3 bg-[var(--color-brand-green-dark)] hover:opacity-90 text-white font-bold rounded-xl shadow-md transition-opacity">Submit & Find Matches</button>
          )}
        </div>
      </div>
    </div>
  );
}
