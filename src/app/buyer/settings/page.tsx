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
            <button className="w-full text-left px-4 py-3 text-gray-700 font-bold hover:bg-gray-50 rounded-xl">Account</button>
            <button className="w-full text-left px-4 py-3 bg-[#F3F9F6] text-[var(--color-brand-green-dark)] font-black rounded-xl">Business Profile</button>
            <button className="w-full text-left px-4 py-3 text-gray-700 font-bold hover:bg-gray-50 rounded-xl">Notifications</button>
            <button className="w-full text-left px-4 py-3 text-gray-700 font-bold hover:bg-gray-50 rounded-xl">Security</button>
            <button className="w-full text-left px-4 py-3 text-gray-700 font-bold hover:bg-gray-50 rounded-xl">Preferences</button>
         </div>

         {/* Settings Content */}
         <div className="flex-1 space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
               <h2 className="font-extrabold text-lg text-gray-900 mb-4 border-b border-gray-100 pb-3">Account & Business Profile</h2>
               
               <div className="space-y-4">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-20 h-20 bg-[var(--color-brand-green)]/20 rounded-full flex items-center justify-center text-4xl text-[var(--color-brand-green-dark)] shadow-sm border border-[var(--color-brand-green)]/30">
                        MB
                     </div>
                     <div>
                       <h3 className="font-black text-gray-900 text-lg">{buyerInfo.name}</h3>
                       <p className="font-bold text-gray-500 text-sm">{buyerInfo.accountType}</p>
                       <p className="font-medium text-gray-400 text-xs mt-1">Account ID: {buyerInfo.accountId} • Member Since: {buyerInfo.memberSince}</p>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email</label>
                        <input type="text" defaultValue={buyerInfo.email} className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 font-bold text-gray-900" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone</label>
                        <input type="text" defaultValue={buyerInfo.phone} className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 font-bold text-gray-900" />
                     </div>
                  </div>

                  <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Business Address</label>
                     <textarea defaultValue={buyerInfo.address} className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 font-bold text-gray-900" rows={3}></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Bank</label>
                        <input type="text" defaultValue={buyerInfo.bank} className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 font-bold text-gray-900" />
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
               <h2 className="font-extrabold text-lg text-gray-900 mb-4 border-b border-gray-100 pb-3">Preferences</h2>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Language</label>
                    <select className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 font-bold text-gray-900"><option>English</option></select>
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Currency</label>
                    <select className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 font-bold text-gray-900"><option>INR (₹)</option></select>
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Date Format</label>
                    <select className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 font-bold text-gray-900"><option>DD MMM YYYY</option></select>
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Time Zone</label>
                    <select className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 font-bold text-gray-900"><option>IST / Asia/Kolkata</option></select>
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Unit System</label>
                    <select className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 font-bold text-gray-900"><option>Metric</option></select>
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Theme</label>
                    <select className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 font-bold text-gray-900"><option>Light</option></select>
                 </div>
               </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
               <h2 className="font-extrabold text-lg text-gray-900 mb-4 border-b border-gray-100 pb-3">Security</h2>
               <div className="space-y-4">
                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div>
                      <div className="font-extrabold text-gray-900">Password</div>
                      <div className="text-xs font-medium text-gray-500">Last changed 3 months ago</div>
                    </div>
                    <button className="px-4 py-2 bg-gray-100 text-gray-800 font-bold rounded-lg text-sm">Change Password</button>
                 </div>
                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div>
                      <div className="font-extrabold text-gray-900">Two-Factor Authentication</div>
                      <div className="text-xs font-medium text-gray-500">Protect your account with an extra layer of security.</div>
                    </div>
                    <div className="w-12 h-6 bg-[var(--color-brand-green)] rounded-full relative cursor-pointer"><div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div></div>
                 </div>
                 <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div>
                      <div className="font-extrabold text-gray-900">Active Sessions</div>
                      <div className="text-xs font-medium text-gray-500">Manage devices logged into your account.</div>
                    </div>
                    <button className="px-4 py-2 bg-gray-100 text-gray-800 font-bold rounded-lg text-sm">View Devices</button>
                 </div>
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


