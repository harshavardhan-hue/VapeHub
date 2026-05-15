'use client';

import { useEffect, useState } from 'react';

const POPUP_BANNER =
  'https://vapehub.risingbamboo.com/wp-content/uploads/2024/10/section-banner1-1.png';

export default function PromoPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={() => setVisible(false)}
      />

      {/* Card */}
      <div className="relative z-10 w-full max-w-2xl animate-[float_0.3s_ease-out]">
        {/* Close button */}
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Close promotion"
          className="absolute -top-4 -right-4 z-20 h-9 w-9 rounded-full bg-white text-black flex items-center justify-center text-xl font-black shadow-xl hover:bg-red-500 hover:text-white transition"
        >
          ×
        </button>

        {/* Banner image */}
        <a
          href="#"
          className="block rounded-2xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(37,99,235,0.7)] border border-white/10"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={POPUP_BANNER}
            alt="Super Sale — Shop Now"
            className="w-full h-auto block"
            loading="eager"
          />
        </a>

        {/* Countdown bar */}
        <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="popup-countdown h-full origin-left rounded-full bg-gradient-to-r from-[#2563eb] to-[#ef4444]"
          />
        </div>
        <p className="mt-1.5 text-center text-[11px] text-white/40 tracking-widest uppercase">
          Closing automatically…
        </p>
      </div>
    </div>
  );
}
