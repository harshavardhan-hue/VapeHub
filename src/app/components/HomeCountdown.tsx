'use client';
import { useState, useEffect } from 'react';

export default function HomeCountdown({
  totalSecs,
  size = 'md',
}: {
  totalSecs: number;
  size?: 'sm' | 'md' | 'lg';
}) {
  const [secs, setSecs] = useState(totalSecs);

  useEffect(() => {
    const id = setInterval(() => setSecs((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const h = String(Math.floor(secs / 3600)).padStart(2, '0');
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');

  const box =
    size === 'lg'
      ? 'text-3xl sm:text-4xl px-4 py-3 rounded-2xl'
      : size === 'sm'
      ? 'text-lg px-2.5 py-1.5 rounded-lg'
      : 'text-2xl sm:text-3xl px-3 py-2 rounded-xl';

  return (
    <div className="flex items-end gap-1.5" suppressHydrationWarning>
      {[{ v: h, l: 'HRS' }, { v: m, l: 'MIN' }, { v: s, l: 'SEC' }].map(
        ({ v, l }, i) => (
          <span key={i} className="flex items-end gap-1.5">
            <span className="flex flex-col items-center">
              <span
                suppressHydrationWarning
                className={`${box} bg-black/50 border border-white/20 font-black text-white tabular-nums backdrop-blur-sm shadow-[0_0_16px_rgba(239,68,68,0.4)] keep-white`}
              >
                {v}
              </span>
              <span className="text-[9px] text-white/50 uppercase tracking-widest mt-1 keep-white">
                {l}
              </span>
            </span>
            {i < 2 && (
              <span className="text-white/80 font-black text-2xl pb-5 keep-white animate-pulse">
                :
              </span>
            )}
          </span>
        )
      )}
    </div>
  );
}
