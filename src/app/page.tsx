"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from '@/components/Logo';

const languages = [
  { id: 'en', native: 'English', name: 'English' },
  { id: 'te', native: 'తెలుగు', name: 'Telugu' },
  { id: 'kn', native: 'ಕನ್ನಡ', name: 'Kannada' },
  { id: 'hi', native: 'हिंदी', name: 'Hindi' },
  { id: 'ta', native: 'தமிழ்', name: 'Tamil' },
  { id: 'mr', native: 'मराठी', name: 'Marathi' },
  { id: 'bn', native: 'বাংলা', name: 'Bengali' },
];

export default function LanguageSelection() {
  const [selectedLang, setSelectedLang] = useState('en');
  const router = useRouter();

  const handleContinue = () => {
    // In a real app, save to context or local storage
    if (typeof window !== 'undefined') {
      localStorage.setItem('vyapti_lang', selectedLang);
    }
    router.push('/role');
  };

  return (
    <div className="relative min-h-screen w-full bg-[var(--color-background)] flex flex-col items-center overflow-x-hidden font-sans pb-8">
      {/* Background Image Container */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Image 
          src="/images/bg_landscape.jpg" 
          alt="Agricultural landscape" 
          fill
          priority
          className="object-cover object-center opacity-100 brightness-[1.15] contrast-[0.95]"
        />
        {/* Subtle overlay to ensure the white panel stands out nicely */}
        <div className="absolute inset-0 bg-white/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-md px-4 pt-12 flex flex-col items-center min-h-screen">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center mb-8">
          <Logo />
          {/* ml-12 perfectly offsets the 48px width of the SVG icon, centering the tagline under the text */}
          <p className="mt-2 text-sm font-medium text-[var(--color-text-primary)] tracking-wide ml-12">
            One field. One network. A fairer market.
          </p>
        </div>

        {/* Main Panel */}
        <div className="w-full bg-[var(--color-surface)] rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[var(--color-border)] p-6 md:p-8 flex flex-col items-center">
          
          <div className="flex flex-col items-center mb-6 text-center">
            <div className="w-10 h-10 rounded-full bg-[var(--color-brand-green-light)] flex items-center justify-center mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-green-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-[var(--color-brand-green-dark)] mb-1">Choose Your Language</h1>
            <p className="text-sm text-[var(--color-text-secondary)]">Select your preferred language to continue</p>
          </div>

          {/* Language Options List */}
          <div className="w-full flex flex-col gap-3 mb-8">
            {languages.map((lang) => {
              const isSelected = selectedLang === lang.id;
              return (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLang(lang.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 ${
                    isSelected 
                      ? 'bg-[var(--color-brand-green-light)] border-[var(--color-brand-green)]' 
                      : 'bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-brand-green)]/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Circle Icon */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-medium ${
                      isSelected 
                        ? 'bg-[var(--color-brand-green)]/10 text-[var(--color-brand-green-dark)]' 
                        : 'bg-gray-50 text-[var(--color-text-primary)]'
                    }`}>
                      {lang.native.charAt(0)}
                    </div>
                    {/* Language Names */}
                    <div className="flex flex-col items-start">
                      <span className={`text-base font-bold ${isSelected ? 'text-[var(--color-brand-green-dark)]' : 'text-[var(--color-text-primary)]'}`}>
                        {lang.native} {lang.name !== lang.native && <span className="font-medium text-[var(--color-text-secondary)]">({lang.name})</span>}
                      </span>
                      {lang.name !== lang.native && (
                        <span className={`text-xs ${isSelected ? 'text-[var(--color-brand-green)]' : 'text-[var(--color-text-secondary)]'}`}>
                          {lang.native}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Radio Button Indicator */}
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? 'border-[var(--color-brand-green-dark)]' : 'border-[#D1D5DB]'
                  }`}>
                    {isSelected && <div className="w-3 h-3 rounded-full bg-[var(--color-brand-green-dark)]" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Continue Button */}
          <button 
            onClick={handleContinue}
            className="w-full bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-hover)] text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            Continue
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          
          <div className="flex items-center justify-center gap-2 mt-5 text-[var(--color-text-secondary)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span className="text-sm font-medium">You can change language later in settings</span>
          </div>

        </div>
      </div>
    </div>
  );
}


