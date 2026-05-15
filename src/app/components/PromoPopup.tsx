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

        {/* Card body */}
        <div className="rounded-2xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(37,99,235,0.7)] border border-white/10 bg-[#0d1117]">
          {/* Banner image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={POPUP_BANNER}
            alt="Vape Hub Promo"
            className="w-full h-auto block"
            loading="eager"
          />

          {/* Offer details */}
          <div className="px-6 py-5 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-1">
              Limited Time Offer
            </p>
            <h2 className="text-3xl font-black text-white mb-1">
              Buy <span className="text-blue-500">5</span> Get{' '}
              <span className="text-red-500">1 FREE</span>
            </h2>
            <p className="text-sm text-white/60 mb-4">
              On all selected vape products &amp; accessories. Mix &amp; match any flavours!
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-center">
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Use Code</p>
                <p className="text-lg font-black text-white tracking-widest">VAPEHUB10</p>
              </div>
              <a
                href="/shop"
                onClick={() => setVisible(false)}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-lg transition text-sm"
              >
                Shop Now →
              </a>
            </div>
          </div>
        </div>

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
