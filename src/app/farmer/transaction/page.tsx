"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MyTransaction() {
  return (
    <div className="w-full px-4 pt-4 pb-8 flex flex-col gap-5 md:px-8">
      
      {/* Page Title & Context Selector */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
            My Transaction
          </h1>
          <p className="text-sm font-medium text-gray-600 mt-1">Track your order, delivery & payment</p>
        </div>
        
        <button className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-xl px-4 py-2 hover:bg-gray-50 transition-colors">
           <span className="text-2xl">🍅</span>
           <div className="flex flex-col items-start leading-tight">
             <span className="text-sm font-bold text-gray-800"><span className="text-[var(--color-brand-green-dark)]">Potato</span> • Grade A</span>
             <span className="text-[10px] font-medium text-gray-500 mt-0.5">12,000 kg • Anakapalli, AP</span>
           </div>
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 ml-2">
             <polyline points="6 9 12 15 18 9"></polyline>
           </svg>
        </button>
      </div>

      {/* Main Order Details Card */}
      <section className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-5 border-b border-gray-100 gap-4">
            
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-[#E3F2EB] text-[var(--color-brand-green-dark)] flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-500">Order ID</span>
                  <div className="flex items-center gap-2">
                     <span className="text-lg font-extrabold text-gray-900 tracking-tight">VTK2505261001</span>
                     <button className="text-gray-400 hover:text-gray-700 transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                     </button>
                  </div>
                  <span className="bg-[#E3F2EB] text-[var(--color-brand-green-dark)] text-[10px] font-bold px-2 py-0.5 rounded-full w-max mt-1">Completed</span>
               </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-100"></div>

            <div className="flex flex-col">
               <span className="text-[10px] font-bold text-gray-500">Buyer</span>
               <span className="text-sm font-extrabold text-gray-900 mt-0.5">FreshAgro Exports Pvt. Ltd.</span>
               <span className="text-[10px] font-bold text-[var(--color-brand-green-dark)] flex items-center gap-1 mt-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Verified Buyer
               </span>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-gray-100"></div>

            <div className="flex flex-col">
               <span className="text-[10px] font-bold text-gray-500">Total Quantity</span>
               <span className="text-lg font-extrabold text-gray-900 mt-0.5">12,000 kg</span>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-gray-100"></div>

            <div className="flex flex-col">
               <span className="text-[10px] font-bold text-gray-500">Total Payable</span>
               <span className="text-lg font-extrabold text-gray-900 mt-0.5">₹2,58,000</span>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-100"></div>
            
            <div className="flex flex-col">
               <span className="text-[10px] font-bold text-[var(--color-brand-green-dark)]">You Will Receive</span>
               <span className="text-xl font-extrabold text-[var(--color-brand-green-dark)] mt-0.5">₹2,45,600</span>
            </div>
         </div>
         
         <div className="pt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex gap-8">
               <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-500">Order Date</span>
                  <span className="text-xs font-bold text-gray-900 mt-1">24 May 2025, 10:30 AM</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-500">Pickup Location</span>
                  <span className="text-xs font-bold text-gray-900 mt-1">Anakapalli Collection Center</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-500">Payment Terms</span>
                  <span className="text-xs font-bold text-gray-900 mt-1">2 Days After Delivery</span>
               </div>
            </div>
            <button className="bg-white border border-[var(--color-brand-green-dark)] text-[var(--color-brand-green-dark)] hover:bg-[#F3F9F6] font-bold rounded-xl px-4 py-2 text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors w-full md:w-auto">
               View Offer Details
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
         </div>
      </section>

      {/* Progress Tracker */}
      <section className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm overflow-hidden">
         <div className="flex justify-between items-center mb-8">
            <h3 className="text-base font-extrabold text-gray-900">Order Progress</h3>
            <span className="text-[10px] font-medium text-gray-500 flex items-center gap-1">
               Last updated: Today, 11:20 AM
               <button className="text-gray-400 hover:text-gray-700 ml-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg></button>
            </span>
         </div>
         
         <div className="relative w-full pb-4 overflow-x-auto hide-scrollbar">
            {/* Connecting line */}
            <div className="absolute top-4 left-[5%] right-[5%] h-1 bg-[var(--color-brand-green-dark)] z-0"></div>
            
            <div className="flex justify-between w-full min-w-[700px] relative z-10 px-2">
               {[
                 { title: 'Order Confirmed', date: '24 May, 10:30 AM', desc: 'Your order has been confirmed by the buyer.', icon: <path d="M20 6L9 17l-5-5"></path> },
                 { title: 'Pickup Scheduled', date: '24 May, 02:15 PM', desc: 'Pickup scheduled for 25 May, 08:00 AM', icon: <path d="M20 6L9 17l-5-5"></path> },
                 { title: 'Picked Up', date: '25 May, 08:30 AM', desc: 'Your produce has been picked up.', icon: <path d="M20 6L9 17l-5-5"></path> },
                 { title: 'In Transit', date: '25 May, 09:10 AM', desc: 'Your produce is on the way to buyer.', icon: <><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></> },
                 { title: 'Delivered', date: '25 May, 02:45 PM', desc: 'Delivered to buyer\'s facility.', icon: <path d="M20 6L9 17l-5-5"></path> },
                 { title: 'Payment Initiated', date: '25 May, 04:30 PM', desc: 'Payment initiated by buyer.', icon: <path d="M20 6L9 17l-5-5"></path> },
                 { title: 'Payment Completed', date: '26 May, 10:15 AM', desc: 'Amount credited to your bank.', icon: <><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></>, active: true },
               ].map((step, i) => (
                 <div key={i} className={`flex flex-col items-center text-center w-32 ${step.active ? 'bg-[#F3F9F6] border border-[#C1E1D2] rounded-lg p-2 -mt-2 -mb-2' : ''}`}>
                    <div className="w-8 h-8 rounded-full bg-[var(--color-brand-green-dark)] text-white flex items-center justify-center mb-3 shadow-md border-2 border-white">
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">{step.icon}</svg>
                    </div>
                    <span className="text-[11px] font-extrabold text-gray-900 leading-tight mb-1">{step.title}</span>
                    <span className="text-[9px] font-bold text-gray-500 mb-1">{step.date}</span>
                    <span className="text-[9px] font-medium text-gray-500 leading-tight px-1">{step.desc}</span>
                 </div>
               ))}
            </div>
         </div>
         
         <div className="mt-4 bg-[#F3F9F6] border border-[#E3F2EB] rounded-xl p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
               <span className="text-xl">🎉</span>
               <span className="text-xs font-medium text-gray-800">
                 Great! Payment of <strong className="text-[var(--color-brand-green-dark)]">₹2,45,600</strong> has been credited to your bank account.
               </span>
            </div>
            <button className="bg-white border border-[var(--color-brand-green-dark)] text-[var(--color-brand-green-dark)] hover:bg-gray-50 font-bold rounded-lg px-4 py-2 text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors w-full sm:w-auto">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
               Download Invoice
            </button>
         </div>
      </section>

      {/* Split Details Row */}
      <div className="flex flex-col md:flex-row gap-5 items-stretch">
         
         {/* Delivery & Pickup Details */}
         <section className="w-full md:w-1/2 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col">
            <h3 className="text-sm font-extrabold text-gray-900 mb-4 flex items-center gap-2">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green-dark)]"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
               Delivery & Pickup Details
            </h3>
            
            <div className="flex flex-col gap-4 text-xs flex-1 justify-between">
               <div className="flex justify-between items-start pb-4 border-b border-gray-50">
                  <span className="text-gray-500 font-bold w-1/3">Pickup From</span>
                  <div className="flex flex-col items-end w-2/3">
                     <span className="font-extrabold text-gray-900">Anakapalli Collection Center, AP</span>
                     <button className="text-[var(--color-brand-green-dark)] font-bold mt-1 flex items-center gap-1 hover:underline">
                        View Location <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                     </button>
                  </div>
               </div>
               
               <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                  <span className="text-gray-500 font-bold w-1/3">Picked Up On</span>
                  <span className="font-extrabold text-gray-900 w-2/3 text-right">25 May 2025, 08:30 AM</span>
               </div>
               
               <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                  <span className="text-gray-500 font-bold w-1/3">Transporter</span>
                  <div className="flex items-center justify-end gap-1.5 w-2/3">
                     <span className="font-extrabold text-gray-900">Sri Venkateswara Logistics</span>
                     <span className="bg-[#E3F2EB] text-[var(--color-brand-green-dark)] text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                       <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                       Verified
                     </span>
                  </div>
               </div>
               
               <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                  <span className="text-gray-500 font-bold w-1/3">Vehicle Number</span>
                  <span className="font-extrabold text-gray-900 w-2/3 text-right">AP39 TT 1234</span>
               </div>
               
               <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                  <span className="text-gray-500 font-bold w-1/3">Delivered On</span>
                  <span className="font-extrabold text-gray-900 w-2/3 text-right">25 May 2025, 02:45 PM</span>
               </div>
               
               <div className="flex justify-between items-center pt-2">
                  <span className="text-gray-500 font-bold w-1/3">Received By</span>
                  <div className="flex items-center gap-3 w-2/3 justify-end">
                     <span className="font-extrabold text-gray-900 text-right">Ramesh Patil<br/><span className="font-medium text-[10px] text-gray-500">(Warehouse In-charge)</span></span>
                     <div className="w-16 h-8 opacity-60">
                       <svg viewBox="0 0 100 40" className="w-full h-full stroke-black stroke-2 fill-none stroke-linecap-round"><path d="M10 25c5-10 10-15 15-15s10 20 15 25 15-20 20-25 10 25 15 25M50 15c-5 15-10 15-15 0" /></svg>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Payment Details */}
         <section className="w-full md:w-1/2 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col">
            <h3 className="text-sm font-extrabold text-gray-900 mb-4 flex items-center gap-2">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green-dark)]"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
               Payment Details
            </h3>
            
            <div className="flex flex-col gap-3 text-xs mb-6">
               <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-bold">Total Payable</span>
                  <span className="font-extrabold text-gray-900">₹2,58,000</span>
               </div>
               <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600 font-bold flex items-center gap-1">Total Deductions <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></span>
                  <span className="font-extrabold text-red-500">- ₹12,400</span>
               </div>
               <div className="flex justify-between items-center py-2 bg-[#F3F9F6] -mx-5 px-5">
                  <span className="font-extrabold text-[var(--color-brand-green-dark)]">You Will Receive <span className="font-medium text-gray-600">(Net Amount)</span></span>
                  <span className="text-base font-extrabold text-[var(--color-brand-green-dark)]">₹2,45,600</span>
               </div>
            </div>
            
            <div className="flex flex-col gap-4 text-[11px] flex-1">
               <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-bold">Payment Mode</span>
                  <span className="font-extrabold text-gray-900">Bank Transfer (NEFT)</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-bold">Payment Initiated On</span>
                  <span className="font-extrabold text-gray-900">25 May 2025, 04:30 PM</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-bold">Payment Completed On</span>
                  <span className="font-extrabold text-gray-900">26 May 2025, 10:15 AM</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-bold">Bank Reference No.</span>
                  <span className="font-extrabold text-gray-900">SBI25052610151234</span>
               </div>
            </div>
            
            <Link href="/farmer/transaction/breakdown" className="mt-6 w-full bg-white border border-gray-200 text-[var(--color-brand-green-dark)] hover:bg-gray-50 font-bold rounded-xl px-4 py-3 text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors">
               View Money Breakdown
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
         </section>
      </div>
      
      {/* Footer Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
         
         {/* Documents */}
         <section className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
               <h3 className="text-sm font-extrabold text-gray-900 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Documents
               </h3>
               <button className="text-xs font-bold text-[var(--color-brand-green-dark)] hover:underline flex items-center gap-1">
                 View All
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
               </button>
            </div>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
               {[
                 { name: 'Tax Invoice', file: 'INV-2505261001.pdf' },
                 { name: 'Weighment Slip', file: 'WS-2505261001.pdf' },
                 { name: 'Quality Report', file: 'QR-2505261001.pdf' },
               ].map((doc, i) => (
                 <button key={i} className="bg-white border border-gray-200 hover:bg-gray-50 rounded-xl p-3 flex flex-col items-start min-w-[140px] shadow-sm transition-colors relative group">
                    <div className="w-8 h-8 rounded bg-red-50 text-red-600 flex items-center justify-center mb-3">
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M9 15v-2a1 1 0 0 1 1-1h1"></path><path d="M15 12v3"></path></svg>
                    </div>
                    <span className="text-[10px] font-bold text-gray-900">{doc.name}</span>
                    <span className="text-[9px] font-medium text-gray-500 mt-0.5">{doc.file}</span>
                    <div className="absolute bottom-3 right-3 text-[var(--color-brand-green-dark)] opacity-50 group-hover:opacity-100 transition-opacity">
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    </div>
                 </button>
               ))}
            </div>
         </section>

         {/* Need Help */}
         <section className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-center">
            <h3 className="text-sm font-extrabold text-gray-900 mb-2 flex items-center gap-2">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
               Need Help?
            </h3>
            <p className="text-[11px] font-medium text-gray-600 mb-4 leading-relaxed">
               If you have any questions or face any issue,<br/>our support team is here to help you.
            </p>
            <button className="bg-white border border-gray-200 text-[var(--color-brand-green-dark)] hover:bg-gray-50 font-bold rounded-xl px-4 py-2.5 text-xs flex items-center gap-2 shadow-sm transition-colors w-max">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
               Contact Support
            </button>
         </section>

      </div>

      {/* Trust Banner */}
      <div className="bg-[#E3F2EB] border border-[#C1E1D2] rounded-xl p-4 flex items-center gap-4 mt-2">
         <div className="w-10 h-10 rounded-full bg-[var(--color-brand-green-dark)] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
         </div>
         <div className="flex flex-col">
            <span className="text-sm font-extrabold text-[var(--color-brand-green-dark)] mb-0.5">100% Secure. 100% Transparent.</span>
            <span className="text-[10px] font-medium text-gray-800 leading-tight">Vyapti Kshetra ensures fair trade, on-time payments and complete transparency in every transaction.</span>
         </div>
      </div>

    </div>
  );
}
