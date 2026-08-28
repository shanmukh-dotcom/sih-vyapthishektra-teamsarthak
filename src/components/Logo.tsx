import React from 'react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center gap-3">
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sun Rays */}
          <path d="M32 4L35 12H29L32 4Z" fill="var(--color-warm-yellow)"/>
          <path d="M16 12L22 18L17 21L12 17L16 12Z" fill="var(--color-warm-yellow)"/>
          <path d="M48 12L52 17L47 21L42 18L48 12Z" fill="var(--color-warm-yellow)"/>
          
          {/* Sun Body */}
          <path d="M18 32C18 24.268 24.268 18 32 18C39.732 18 46 24.268 46 32" fill="var(--color-warm-yellow)"/>
          
          {/* Leaves */}
          <path d="M12 30C12 30 18 44 32 46C32 46 16 46 12 30Z" fill="var(--color-brand-green-dark)"/>
          <path d="M52 30C52 30 46 44 32 46C32 46 48 46 52 30Z" fill="var(--color-brand-green)"/>
          <path d="M32 46C32 46 36 56 42 60C42 60 28 58 32 46Z" fill="var(--color-brand-green-dark)"/>
          <path d="M32 46C32 46 28 56 22 60C22 60 36 58 32 46Z" fill="var(--color-brand-green)"/>
        </svg>
        <div className="flex flex-col items-start justify-center pt-1">
          <span className="text-[2.25rem] font-extrabold text-[var(--color-brand-green-dark)] leading-none tracking-tight">VYAPTI</span>
          <span className="text-[0.95rem] font-bold text-[var(--color-brand-green-dark)] tracking-[0.35em] mt-1 leading-none pl-1">KSHETRA</span>
        </div>
      </div>
    </div>
  );
}
