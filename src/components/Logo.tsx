import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "", light = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex items-center">
        <span className={`text-4xl font-black tracking-tighter ${light ? 'text-white' : 'text-premium-black'}`} style={{ fontFamily: 'system-ui, sans-serif' }}>X</span>
        <span className={`text-2xl font-bold mx-1 ${light ? 'text-white/60' : 'text-gray-400'}`}>-</span>
        <span className={`text-2xl font-bold tracking-tight ${light ? 'text-white' : 'text-premium-black'}`} style={{ fontFamily: 'system-ui, sans-serif' }}>LOGICA</span>
      </div>
    </div>
  );
}
