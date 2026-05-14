// Colorful, animated, organic-style SVG icons
// Anthropic-inspired: warm, human, hand-drawn feel with vibrant life

type IconProps = { className?: string };

/* ─────────────────────────────────────────────
   1. Remote-First — spinning teal/blue globe
───────────────────────────────────────────── */
export function RemoteFirstIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <style>{`
          @keyframes globe-spin {
            from { transform: rotateY(0deg); }
            to   { transform: rotateY(360deg); }
          }
          @keyframes orbit-ring {
            from { stroke-dashoffset: 0; }
            to   { stroke-dashoffset: -110; }
          }
          @keyframes pin-bob {
            0%,100% { transform: translateY(0); }
            50%      { transform: translateY(-2.5px); }
          }
          .globe-meridian { animation: orbit-ring 3s linear infinite; }
          .globe-pin       { animation: pin-bob   2s ease-in-out infinite; }
        `}</style>
        <linearGradient id="globe-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8"/>
          <stop offset="100%" stopColor="#6366F1"/>
        </linearGradient>
        <linearGradient id="globe-lat" x1="0" y1="0" x2="48" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0EA5E9"/>
          <stop offset="100%" stopColor="#818CF8"/>
        </linearGradient>
      </defs>
      {/* Outer globe */}
      <circle cx="24" cy="24" r="17" stroke="url(#globe-grad)" strokeWidth="2"/>
      {/* Latitude bands */}
      <path d="M7.5 24 Q16 19 24 19 Q32 19 40.5 24" stroke="url(#globe-lat)" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M7.5 24 Q16 29 24 29 Q32 29 40.5 24" stroke="url(#globe-lat)" strokeWidth="1.6" strokeLinecap="round"/>
      {/* Scrolling meridian (animated) */}
      <ellipse
        className="globe-meridian"
        cx="24" cy="24" rx="9" ry="17"
        stroke="#38BDF8" strokeWidth="1.6" strokeDasharray="8 4"
        style={{ transformOrigin: '24px 24px' }}
      />
      {/* Pin dot */}
      <circle className="globe-pin" cx="33" cy="14" r="3" fill="#F472B6" style={{ transformOrigin: '33px 14px' }}/>
      <circle className="globe-pin" cx="33" cy="14" r="1.2" fill="white" style={{ transformOrigin: '33px 14px' }}/>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   2. Growth Budget — growing green bar chart
───────────────────────────────────────────── */
export function GrowthBudgetIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <style>{`
          @keyframes bar-grow-1 {
            0%,100% { transform: scaleY(1);    }
            50%      { transform: scaleY(0.65); }
          }
          @keyframes bar-grow-2 {
            0%,100% { transform: scaleY(1);    }
            50%      { transform: scaleY(0.75); }
          }
          @keyframes bar-grow-3 {
            0%,100% { transform: scaleY(1);    }
            50%      { transform: scaleY(0.55); }
          }
          @keyframes dash-move {
            from { stroke-dashoffset: 60; }
            to   { stroke-dashoffset: 0;  }
          }
          .bar1 { animation: bar-grow-1 2.4s ease-in-out infinite; transform-origin: 10.5px 41px; }
          .bar2 { animation: bar-grow-2 2.4s ease-in-out 0.3s infinite; transform-origin: 23.5px 41px; }
          .bar3 { animation: bar-grow-3 2.4s ease-in-out 0.6s infinite; transform-origin: 36.5px 41px; }
          .trend-line { animation: dash-move 1.8s ease-out infinite; }
        `}</style>
        <linearGradient id="bar1-g" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#34D399"/><stop offset="100%" stopColor="#10B981"/>
        </linearGradient>
        <linearGradient id="bar2-g" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#6EE7B7"/><stop offset="100%" stopColor="#34D399"/>
        </linearGradient>
        <linearGradient id="bar3-g" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#A7F3D0"/><stop offset="100%" stopColor="#6EE7B7"/>
        </linearGradient>
      </defs>
      <rect className="bar1" x="7"  y="30" width="7" height="11" rx="2.5" fill="url(#bar1-g)" opacity="0.9"/>
      <rect className="bar2" x="20" y="22" width="7" height="19" rx="2.5" fill="url(#bar2-g)" opacity="0.9"/>
      <rect className="bar3" x="33" y="13" width="7" height="28" rx="2.5" fill="url(#bar3-g)" opacity="0.9"/>
      {/* Trend arrow */}
      <path
        className="trend-line"
        d="M9 29 Q18 15 36 10"
        stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"
        strokeDasharray="60" strokeDashoffset="60"
      />
      <path d="M33 9.5 l4 1.5 -1.5 4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   3. Unlimited PTO — rotating golden sun
───────────────────────────────────────────── */
export function UnlimitedPTOIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <style>{`
          @keyframes sun-spin {
            from { transform: rotate(0deg);   }
            to   { transform: rotate(360deg); }
          }
          @keyframes wave-sway {
            0%,100% { d: path("M8 38 Q16 33 24 37 Q32 41 40 38"); }
            50%      { d: path("M8 38 Q16 43 24 39 Q32 35 40 38"); }
          }
          @keyframes sun-pulse {
            0%,100% { r: 7; }
            50%      { r: 8; }
          }
          .sun-rays  { animation: sun-spin   8s linear infinite; transform-origin: 24px 21px; }
          .sun-core  { animation: sun-pulse  2s ease-in-out infinite; }
          .beach-wave { animation: wave-sway  3s ease-in-out infinite; }
        `}</style>
        <radialGradient id="sun-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDE68A"/>
          <stop offset="100%" stopColor="#F59E0B"/>
        </radialGradient>
        <linearGradient id="wave-grad" x1="0" y1="0" x2="48" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8"/><stop offset="100%" stopColor="#6366F1"/>
        </linearGradient>
      </defs>
      {/* Rotating rays */}
      <g className="sun-rays">
        <path d="M24 10 v-3.5" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 34 v-2.5" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <path d="M36 21 h3"    stroke="#FBBF24" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 21 h3.5"   stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        <path d="M32.5 12.5 l2-2"  stroke="#FBBF24" strokeWidth="2" strokeLinecap="round"/>
        <path d="M13.5 29.5 l2-2"  stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <path d="M15.5 12.5 l-2-2" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round"/>
        <path d="M34.5 29.5 l-2-2" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </g>
      {/* Sun core */}
      <circle className="sun-core" cx="24" cy="21" r="7" fill="url(#sun-grad)" stroke="#F59E0B" strokeWidth="1.5"/>
      {/* Beach wave */}
      <path
        className="beach-wave"
        d="M8 38 Q16 33 24 37 Q32 41 40 38"
        stroke="url(#wave-grad)" strokeWidth="2.2" strokeLinecap="round" fill="none"
      />
      {/* Umbrella pole */}
      <path d="M24 37 v-9" stroke="#F472B6" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M20 28 Q24 25 28 28" stroke="#F472B6" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   4. Competitive Pay — shimmering gold coin
───────────────────────────────────────────── */
export function CompetitivePayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <style>{`
          @keyframes coin-shine {
            0%,100% { opacity: 0.15; transform: translateX(-8px); }
            50%      { opacity: 0.55; transform: translateX(8px);  }
          }
          @keyframes dollar-pop {
            0%,100% { transform: scale(1);    }
            50%      { transform: scale(1.06); }
          }
          @keyframes ring-pulse {
            0%,100% { stroke-dashoffset: 0;  opacity: 0.6; }
            50%      { stroke-dashoffset: 20; opacity: 1;   }
          }
          .coin-shimmer { animation: coin-shine  2s ease-in-out infinite; transform-origin: 24px 24px; }
          .dollar-sign  { animation: dollar-pop  2.4s ease-in-out infinite; transform-origin: 24px 24px; }
          .inner-ring   { animation: ring-pulse  3s ease-in-out infinite; }
        `}</style>
        <radialGradient id="coin-grad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FDE68A"/>
          <stop offset="60%" stopColor="#F59E0B"/>
          <stop offset="100%" stopColor="#D97706"/>
        </radialGradient>
        <clipPath id="coin-clip"><circle cx="24" cy="24" r="17"/></clipPath>
      </defs>
      {/* Coin body */}
      <circle cx="24" cy="24" r="17" fill="url(#coin-grad)" stroke="#D97706" strokeWidth="1.5"/>
      {/* Shimmer highlight */}
      <ellipse
        className="coin-shimmer"
        cx="24" cy="18" rx="5" ry="10"
        fill="white" clipPath="url(#coin-clip)"
      />
      {/* Inner ring */}
      <circle
        className="inner-ring"
        cx="24" cy="24" r="11"
        stroke="#FDE68A" strokeWidth="1.2" strokeDasharray="6 3" fill="none"
      />
      {/* Dollar sign */}
      <g className="dollar-sign">
        <path d="M24 14 v2" stroke="#7C2D12" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 32 v2" stroke="#7C2D12" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 18c-1-1.5-2.5-2-4-2-2.5 0-4 1.5-4 3.5 0 2 1.5 3 4 3.5s4 1.5 4 3.5c0 2-1.5 3.5-4 3.5-1.8 0-3.2-.8-4-2"
              stroke="#92400E" strokeWidth="2" strokeLinecap="round"/>
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   5. Full Benefits — pulsing red/pink heart
───────────────────────────────────────────── */
export function FullBenefitsIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <style>{`
          @keyframes heartbeat {
            0%   { transform: scale(1);    }
            14%  { transform: scale(1.15); }
            28%  { transform: scale(1);    }
            42%  { transform: scale(1.08); }
            70%  { transform: scale(1);    }
            100% { transform: scale(1);    }
          }
          @keyframes cross-blink {
            0%,100% { opacity: 0.7; }
            50%      { opacity: 1;   }
          }
          @keyframes glow-ring {
            0%,100% { r: 19; opacity: 0; }
            50%      { r: 22; opacity: 0.3; }
          }
          .heart      { animation: heartbeat  1.4s ease-in-out infinite; transform-origin: 24px 24px; }
          .cross-icon { animation: cross-blink 1.4s ease-in-out infinite; }
          .heart-glow { animation: glow-ring   1.4s ease-in-out infinite; }
        `}</style>
        <radialGradient id="heart-grad" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FB7185"/>
          <stop offset="100%" stopColor="#E11D48"/>
        </radialGradient>
      </defs>
      {/* Glow ring */}
      <circle className="heart-glow" cx="24" cy="25" r="19" fill="#FB7185" opacity="0"/>
      {/* Heart */}
      <g className="heart">
        <path
          d="M24 38 C24 38 8 28 8 18 C8 13 12 9 17 9 C19.5 9 22 10.5 24 13 C26 10.5 28.5 9 31 9 C36 9 40 13 40 18 C40 28 24 38 24 38 Z"
          fill="url(#heart-grad)" stroke="#BE123C" strokeWidth="1.2"
        />
        {/* Cross */}
        <g className="cross-icon">
          <path d="M24 19 v8" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
          <path d="M20 23 h8" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
        </g>
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   6. Impactful Work — arrow striking bullseye
───────────────────────────────────────────── */
export function ImpactfulWorkIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <style>{`
          @keyframes arrow-strike {
            0%   { transform: translate(-14px, 14px); opacity: 0; }
            60%  { transform: translate(0, 0);         opacity: 1; }
            80%  { transform: translate(1px, -1px);    opacity: 1; }
            100% { transform: translate(0, 0);         opacity: 1; }
          }
          @keyframes ring-expand {
            0%   { stroke-dashoffset: 0;  opacity: 1;   }
            100% { stroke-dashoffset: -130; opacity: 0;  }
          }
          @keyframes bullseye-pulse {
            0%,100% { transform: scale(1);    opacity: 1;   }
            50%      { transform: scale(1.04); opacity: 0.85; }
          }
          .arrow-group   { animation: arrow-strike  1.8s cubic-bezier(.22,1,.36,1) infinite; transform-origin: 30px 18px; }
          .impact-ring   { animation: ring-expand   1.8s ease-out infinite; transform-origin: 24px 24px; }
          .target-inner  { animation: bullseye-pulse 1.8s ease-in-out infinite; transform-origin: 24px 24px; }
        `}</style>
        <linearGradient id="ring1-g" x1="7" y1="7" x2="41" y2="41" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C4B5FD"/><stop offset="100%" stopColor="#7C3AED"/>
        </linearGradient>
        <linearGradient id="ring2-g" x1="14" y1="14" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A78BFA"/><stop offset="100%" stopColor="#6D28D9"/>
        </linearGradient>
        <linearGradient id="arrow-g" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#FCD34D"/><stop offset="100%" stopColor="#F59E0B"/>
        </linearGradient>
      </defs>
      {/* Outer ring */}
      <circle cx="24" cy="24" r="17" stroke="url(#ring1-g)" strokeWidth="2"/>
      {/* Impact expanding ring */}
      <circle className="impact-ring" cx="24" cy="24" r="17" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="130" strokeDashoffset="0" fill="none" opacity="0.5"/>
      {/* Middle ring */}
      <circle cx="24" cy="24" r="10" stroke="url(#ring2-g)" strokeWidth="1.8"/>
      {/* Bullseye */}
      <circle className="target-inner" cx="24" cy="24" r="4" fill="#7C3AED"/>
      {/* Arrow */}
      <g className="arrow-group">
        <path d="M38 10 L26 22" stroke="url(#arrow-g)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M34 9 l5 0.5 0.5 5" stroke="url(#arrow-g)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
}
