"use client";

import React from 'react';
import Image from 'next/image';

export default function AIGrading() {
  return (
    <div className="w-full px-4 pt-4 pb-8 flex flex-col gap-6 md:px-8">
      
      {/* Page Title & Context Selector */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold text-[var(--color-brand-green-dark)] flex items-center gap-2">
            AI Visual Pre-Grading 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
              <path d="M14.5 2.5l-1.5 4.5-4.5 1.5 4.5 1.5 1.5 4.5 1.5-4.5 4.5-1.5-4.5-1.5z"></path>
              <path d="M6 13l-1 3-3 1 3 1 1 3 1-3 3-1-3-1z"></path>
            </svg>
          </h1>
          <p className="text-sm font-medium text-gray-600 mt-1">Upload photos of your crop for instant AI grading</p>
        </div>
        
        <button className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-full px-3 py-1.5 hover:bg-gray-50 transition-colors">
           <span className="text-lg">🥔</span>
           <span className="text-sm font-bold text-gray-800"><span className="text-[var(--color-brand-green-dark)]">Potato</span> • Uploaded</span>
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
             <polyline points="6 9 12 15 18 9"></polyline>
           </svg>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        
        {/* Upload Action Card */}
        <div className="w-full md:w-1/3 bg-[#F3F9F6] border-2 border-dashed border-[#C1E1D2] rounded-2xl p-6 flex flex-col items-center justify-center relative shadow-sm">
           
           <div className="flex flex-col items-center text-center mb-6">
              <span className="text-base font-extrabold text-[var(--color-brand-green-dark)]">Take a clear photo<br/>in good light</span>
              <div className="w-20 h-20 rounded-full bg-[#E3F2EB] flex items-center justify-center text-[var(--color-brand-green-dark)] mt-6 shadow-inner">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
              </div>
           </div>
           
           <button className="w-full bg-[var(--color-brand-green-dark)] hover:bg-green-800 text-white font-bold rounded-xl px-4 py-3.5 text-sm flex items-center justify-center gap-2 shadow-sm transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
              Take Photo
           </button>
           
           <div className="flex items-center w-full my-4">
              <div className="flex-1 h-px bg-[#C1E1D2]"></div>
              <span className="px-3 text-xs font-bold text-gray-500">or</span>
              <div className="flex-1 h-px bg-[#C1E1D2]"></div>
           </div>
           
           <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-[var(--color-brand-green-dark)] font-bold rounded-xl px-4 py-3 text-sm flex items-center justify-center gap-2 shadow-sm transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              Choose from Gallery
           </button>
           
           <div className="mt-6 bg-[#FFF8F0] border border-[#FFE7CC] rounded-xl p-3 flex items-start gap-2 w-full">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              <p className="text-xs font-medium text-orange-900 leading-relaxed"><span className="font-bold text-orange-800">Tip:</span> Include whole, medium and close-up shots for better accuracy.</p>
           </div>
        </div>

        {/* Analysis Card */}
        <div className="w-full md:w-2/3 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col">
           <div className="flex justify-between items-center mb-4">
             <h3 className="text-base font-extrabold text-gray-900">Latest Analysis</h3>
             <span className="bg-[#E3F2EB] text-[var(--color-brand-green-dark)] text-[10px] font-bold px-2.5 py-1 rounded-md">Just now</span>
           </div>
           
           <div className="w-full h-48 sm:h-64 relative rounded-xl overflow-hidden mb-4 shadow-sm border border-gray-200">
             <Image 
                src="/images/grade_b_potatoes_v2.jpg" 
                alt="Uploaded potatoes" 
                fill
                className="object-cover"
             />
           </div>
           
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 rounded-xl p-4 flex flex-col justify-center border border-orange-100">
                 <span className="text-sm font-bold text-orange-800">AI Grade</span>
                 <span className="text-3xl font-extrabold text-orange-600 mt-1">Grade B</span>
              </div>
              
              <div className="bg-[#F9FAFB] rounded-xl p-4 flex flex-col justify-center items-center text-center border border-gray-100">
                 <span className="text-sm font-bold text-gray-700">Quality Score</span>
                 <span className="text-4xl font-extrabold text-gray-900 mt-1">74%</span>
                 <span className="text-sm font-bold text-orange-600 mt-1">Fair Quality</span>
              </div>
           </div>
        </div>
        
      </div>

      {/* Quality Parameters */}
      <section className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-extrabold text-gray-900 mb-4">Quality Parameters</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { name: 'Size', val: 'Moderate', icon: <><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></>, color: 'text-orange-600' },
            { name: 'Color', val: 'Good', icon: <><circle cx="12" cy="12" r="10"></circle><circle cx="8" cy="10" r="1.5"></circle><circle cx="12" cy="6" r="1.5"></circle><circle cx="16" cy="10" r="1.5"></circle><circle cx="12" cy="14" r="1.5"></circle></>, color: 'text-[var(--color-brand-green-dark)]' },
            { name: 'Firmness', val: 'Good', icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></>, color: 'text-[var(--color-brand-green-dark)]' },
            { name: 'Defects', val: 'Moderate', icon: <><circle cx="12" cy="12" r="10" strokeDasharray="4 4"></circle></>, color: 'text-orange-600' },
            { name: 'Uniformity', val: 'Irregular', icon: <><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></>, color: 'text-orange-600' },
          ].map((param, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-3 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
              <span className="text-[10px] font-bold text-gray-500">{param.name}</span>
              <div className="w-10 h-10 rounded-full bg-gray-50 text-gray-700 flex items-center justify-center mb-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {param.icon}
                </svg>
              </div>
              <span className={`text-xs font-bold ${param.color}`}>{param.val}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex flex-col md:flex-row gap-6 items-center">
           <div className="flex-1 w-full flex flex-col gap-2">
              <div className="flex justify-between items-center w-full">
                 <div className="flex items-center gap-1.5 text-sm font-extrabold text-gray-900">
                   AI Confidence 
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                 </div>
                 <span className="text-xl font-extrabold text-gray-900">92%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                 <div className="h-full bg-[var(--color-brand-green-dark)] rounded-full" style={{ width: '92%' }}></div>
              </div>
           </div>
           
           <div className="w-full md:w-1/3 bg-[#F3F9F6] border border-[#E3F2EB] rounded-xl p-3 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-white text-[var(--color-brand-green-dark)] flex items-center justify-center shadow-sm flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <p className="text-xs font-medium text-gray-800 leading-tight">AI is 92% confident about this grade.</p>
           </div>
        </div>
      </section>

      {/* Split Row: Issues & Manual Check */}
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Detected Issues */}
        <section className="w-full md:w-3/5 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
           <h3 className="text-sm font-extrabold text-gray-900 mb-4">Detected Issues (Minor)</h3>
           <div className="grid grid-cols-3 gap-3">
              {[
                { name: 'Irregular shapes', pos: 'object-left-top' },
                { name: 'Surface blemishes', pos: 'object-right-top' },
                { name: 'Dirt marks', pos: 'object-center' }
              ].map((issue, i) => (
                <div key={i} className="flex flex-col gap-2">
                   <div className="w-full h-20 relative rounded-lg overflow-hidden border border-gray-200">
                     <Image 
                        src="/images/grade_b_potatoes_v2.jpg" 
                        alt="Issue detail" 
                        fill
                        className={`object-cover scale-150 ${issue.pos}`}
                     />
                   </div>
                   <span className="text-[10px] font-medium text-gray-700 leading-tight">{issue.name}</span>
                </div>
              ))}
           </div>
        </section>

        {/* Manual Check */}
        <section className="w-full md:w-2/5 bg-blue-50/50 border border-blue-100 rounded-2xl p-5 shadow-sm flex flex-col justify-center">
           <h3 className="text-sm font-extrabold text-blue-800 mb-2">Not happy with AI grade?</h3>
           <p className="text-xs font-medium text-gray-600 mb-5 leading-relaxed">
             Request manual verification<br/>by our quality expert.
           </p>
           <button className="w-full bg-white border border-blue-200 text-blue-700 hover:bg-blue-50 font-bold rounded-xl px-4 py-2.5 text-sm flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              Request Manual Check
           </button>
        </section>

      </div>
      
      {/* Footer Alert */}
      <div className="bg-[#F3F9F6] border border-[#E3F2EB] rounded-xl p-4 flex items-center justify-center gap-3">
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-green-dark)]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
         <span className="text-xs font-extrabold text-[var(--color-brand-green-dark)]">This grading helps buyers trust your quality and get you better prices.</span>
      </div>

    </div>
  );
}
