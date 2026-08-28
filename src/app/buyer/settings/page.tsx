"use client";

import React from 'react';
import { useBuyerData } from '@/context/BuyerDataContext';

export default function Settings() {
  const { buyerInfo } = useBuyerData();

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-6">
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Settings</h1>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
         {/* Settings Nav */}
         <div className="w-full md:w-64 space-y-1">
            <button className="w-full text-left px-4 py-3 bg-[#F3F9F6] text-[var(--color-brand-green-dark)] font-black rounded-xl">Business Profile</button>
            <button className="w-full text-left px-4 py-3 text-gray-700 font-bold hover:bg-gray-50 rounded-xl">Notifications</button>
            <button className="w-full text-left px-4 py-3 text-gray-700 font-bold hover:bg-gray-50 rounded-xl">Security</button>
            <button className="w-full text-left px-4 py-3 text-gray-700 font-bold hover:bg-gray-50 rounded-xl">Preferences</button>
         </div>

         {/* Settings Content */}
         <div className="flex-1 space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
               <h2 className="font-extrabold text-lg text-gray-900 mb-4 border-b border-gray-100 pb-3">Business Profile</h2>
               
               <div className="space-y-4">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-4xl shadow-sm border border-gray-200">
                        🏢
                     </div>
                     <button className="px-4 py-2 bg-gray-100 text-gray-800 font-bold rounded-lg hover:bg-gray-200 text-sm transition-colors">Change Logo</button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Company Name</label>
                        <input type="text" defaultValue={buyerInfo.name} className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 font-bold text-gray-900" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Account Type</label>
                        <input type="text" defaultValue={buyerInfo.accountType} disabled className="w-full p-3 border border-gray-200 rounded-xl bg-gray-100 font-bold text-gray-500" />
                     </div>
                  </div>

                  <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Registered Address</label>
                     <textarea defaultValue={buyerInfo.location} className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 font-bold text-gray-900" rows={2}></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">GSTIN</label>
                        <input type="text" defaultValue="36AAACV1234F1Z5" className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 font-bold text-gray-900" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">FSSAI License</label>
                        <input type="text" defaultValue="13612345000123" className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 font-bold text-gray-900" />
                     </div>
                  </div>
               </div>

               <div className="mt-6 pt-4 border-t border-gray-100 text-right">
                  <button className="px-6 py-2.5 bg-[var(--color-brand-green-dark)] text-white font-bold rounded-xl shadow-sm hover:opacity-90">Save Changes</button>
               </div>
            </div>

            {/* Danger Zone */}
            <div className="border border-red-200 rounded-2xl p-6 bg-red-50/30">
               <h3 className="font-extrabold text-red-700 mb-2">Danger Zone</h3>
               <p className="text-sm font-medium text-red-600 mb-4">Deleting your account is permanent and cannot be reversed. All data will be lost.</p>
               <button className="px-4 py-2 bg-red-100 text-red-700 font-bold rounded-lg border border-red-200 hover:bg-red-200 transition-colors text-sm">Delete Account</button>
            </div>
         </div>
      </div>
    </div>
  );
}
