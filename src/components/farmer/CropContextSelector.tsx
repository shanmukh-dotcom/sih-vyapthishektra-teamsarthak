"use client";

import React from 'react';
import Image from 'next/image';

export default function CropContextSelector() {
  return (
    <div className="w-full bg-white border-b border-gray-100 py-2 px-4 shadow-sm z-30 relative">
      <div className="max-w-lg mx-auto flex items-center justify-between bg-[var(--color-brand-green-light)]/20 rounded-xl p-2 pr-3 border border-[var(--color-brand-green)]/10">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center p-1 border border-gray-100 overflow-hidden relative">
            <span className="text-2xl z-10 drop-shadow-sm">🍅</span>
            {/* Subtle background color for crop type */}
            <div className="absolute inset-0 bg-red-50 opacity-50"></div>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900 text-sm">Tomato</span>
              <span className="text-[10px] font-bold bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-center leading-none">Grade A</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium mt-0.5">
              <span className="font-semibold text-gray-700">12,000 kg</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span className="flex items-center gap-0.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Anakapalli, AP
              </span>
            </div>
          </div>
        </div>

        <button className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-50">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

      </div>
    </div>
  );
}
