"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function RoleSelection() {
  const router = useRouter();

  const handleRoleSelect = (role: 'farmer' | 'buyer') => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('vyapti_role', role);
    }
    if (role === 'farmer') {
      router.push('/farmer');
    } else {
      router.push('/buyer');
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[var(--color-background)] flex flex-col items-center overflow-x-hidden font-sans pb-4">
      {/* Decorative subtle background leaves could be placed here if SVG assets exist, using plain background for now to match clean look */}
      
      <div className="relative z-10 w-full max-w-5xl px-4 pt-6 flex flex-col items-center">
        
        <Logo />
        {/* ml-12 perfectly offsets the 48px width of the SVG icon, centering the tagline under the text */}
        <p className="mt-1 text-xs font-medium text-[var(--color-text-primary)] tracking-wide hidden sm:block ml-12">
          One field. One network. A fairer market.
        </p>

        <div className="mt-4 mb-4 text-center max-w-md mx-auto">
          <h1 className="text-2xl font-extrabold text-[var(--color-text-primary)] mb-2 leading-tight">
            Choose how you will <br/> use Vyapti Kshetra
          </h1>
          <p className="text-[var(--color-text-secondary)] text-sm">
            Select your role to get a customised<br/>experience that works best for you.
          </p>
        </div>

        {/* Role Cards Container */}
        <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-4 max-w-4xl mb-6">
          
          {/* Farmer Card */}
          <div className="flex-1 bg-[var(--color-brand-green-light)]/40 border border-[var(--color-brand-green)]/30 rounded-[24px] p-4 sm:p-5 flex flex-col items-center shadow-sm relative overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md">
            
            {/* Circular Illustration */}
            <div className="relative w-28 h-28 rounded-full mb-3 border-4 border-white shadow-sm overflow-hidden flex-shrink-0">
               <Image 
                  src="/images/farmer_portrait.jpg" 
                  alt="Farmer" 
                  fill
                  className="object-cover object-center"
                />
                {/* Icon Badge */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-[var(--color-brand-green)] rounded-full flex items-center justify-center border-2 border-white shadow-sm z-10 translate-x-1/4 -translate-y-1/4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
            </div>

            <h2 className="text-xl font-bold text-[var(--color-brand-green-dark)] mb-1">I am a Farmer</h2>
            <p className="text-center text-[var(--color-text-secondary)] text-xs mb-4">
              Sell my produce, get fair prices, connect with buyers and track my earnings.
            </p>

            <ul className="w-full flex flex-col gap-2 mb-4 border-t border-[var(--color-brand-green)]/20 pt-4">
              {[
                { icon: <><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></>, text: "Check market prices" },
                { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>, text: "Compare & sell to buyers" },
                { icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>, text: "Track payments & orders" },
                { icon: <><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></>, text: "AI crop insights & grading" }
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-[var(--color-text-primary)] text-sm font-medium">
                  <div className="w-5 h-5 rounded-md bg-[var(--color-brand-green)]/10 flex items-center justify-center text-[var(--color-brand-green-dark)] flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      {feature.icon}
                    </svg>
                  </div>
                  {feature.text}
                </li>
              ))}
            </ul>

            <Link 
              href="/farmer"
              onClick={() => {
                if (typeof window !== 'undefined') localStorage.setItem('vyapti_role', 'farmer');
              }}
              className="mt-auto w-full bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-hover)] text-white py-3 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              Continue as Farmer
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          {/* Buyer Card */}
          <div className="flex-1 bg-[var(--color-buyer-blue-light)]/40 border border-[var(--color-buyer-blue)]/20 rounded-[24px] p-4 sm:p-5 flex flex-col items-center shadow-sm relative overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md mt-4 md:mt-0">
            
            {/* Circular Illustration */}
            <div className="relative w-28 h-28 rounded-full mb-3 border-4 border-white shadow-sm overflow-hidden flex-shrink-0">
               <Image 
                  src="/images/buyer_portrait.jpg" 
                  alt="Buyer" 
                  fill
                  className="object-cover object-center"
                />
                {/* Icon Badge */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-[var(--color-buyer-blue)] rounded-full flex items-center justify-center border-2 border-white shadow-sm z-10 translate-x-1/4 -translate-y-1/4">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
            </div>

            <h2 className="text-xl font-bold text-[var(--color-buyer-blue)] mb-1">I am a Buyer / Consumer</h2>
            <p className="text-center text-[var(--color-text-secondary)] text-xs mb-4 px-2">
              Buy quality produce directly from verified farmers and trusted collectives.
            </p>

            <ul className="w-full flex flex-col gap-2 mb-4 border-t border-[var(--color-buyer-blue)]/20 pt-4">
              {[
                { icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>, text: "Find quality produce" },
                { icon: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>, text: "View farmer & product details" },
                { icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>, text: "Transparent pricing" },
                { icon: <><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>, text: "Secure payments & delivery" }
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-[var(--color-text-primary)] text-sm font-medium">
                  <div className="w-5 h-5 rounded-md bg-[var(--color-buyer-blue)]/10 flex items-center justify-center text-[var(--color-buyer-blue)] flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      {feature.icon}
                    </svg>
                  </div>
                  {feature.text}
                </li>
              ))}
            </ul>

            <Link 
              href="/buyer"
              onClick={() => {
                if (typeof window !== 'undefined') localStorage.setItem('vyapti_role', 'buyer');
              }}
              className="mt-auto w-full bg-[var(--color-buyer-blue)] hover:bg-[var(--color-buyer-blue-hover)] text-white py-3 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              Continue as Buyer
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>

        {/* Security Banner */}
        <div className="w-full max-w-2xl bg-[#F3FAF4] rounded-2xl p-3 flex items-center gap-3 border border-[var(--color-brand-green)]/10 mx-auto relative overflow-hidden shadow-sm">
          <div className="w-10 h-10 bg-[var(--color-brand-green)] rounded-full flex items-center justify-center flex-shrink-0 z-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <div className="flex flex-col z-10">
            <span className="font-bold text-[var(--color-text-primary)] text-[13px] sm:text-sm">100% Secure • Transparent • Fair for Everyone</span>
            <span className="text-[var(--color-text-secondary)] text-[11px] sm:text-[13px]">Your data is safe with us. We never share your information.</span>
          </div>
          
          {/* Faded Lock Graphic */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none transform translate-x-4 scale-125">
             <svg width="80" height="80" viewBox="0 0 24 24" fill="var(--color-brand-green)" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="none" />
                <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="var(--color-brand-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
             </svg>
          </div>
        </div>

        {/* Login Link */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-[var(--color-text-secondary)] text-sm font-medium">Already have an account?</span>
          <button className="text-[var(--color-brand-green)] text-sm font-bold flex items-center gap-1 hover:underline">
            Login
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
