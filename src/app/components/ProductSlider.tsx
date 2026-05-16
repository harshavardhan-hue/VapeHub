'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { products } from '../shop/data';

const ITEMS = products.slice(0, 12);
const INTERVAL = 3500;

export default function ProductSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[idx] as HTMLElement;
    if (card) track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
    setCurrent(idx);
  }, []);

  const next = useCallback(() => goTo((current + 1) % ITEMS.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + ITEMS.length) % ITEMS.length), [current, goTo]);

  const restart = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, INTERVAL);
  }, [next]);

  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(next, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next, paused]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); restart(); }}
      className="relative"
    >
      {/* ── Glow backdrop ── */}
      <div className="absolute -inset-4 rounded-3xl bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(37,99,235,0.18),transparent)] pointer-events-none" />

      {/* ── Track ── */}
      <div
        ref={trackRef}
        className="relative flex gap-3 overflow-x-auto scrollbar-hide pb-2"
        style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
      >
        {ITEMS.map((p, i) => {
          const discount = p.original ? Math.round((1 - p.price / p.original) * 100) : null;
          const active = i === current;
          return (
            <a
              key={p.id}
              href={`/shop/${p.id}`}
              className={`group relative flex-none rounded-2xl overflow-hidden border transition-all duration-500 bg-gradient-to-b from-white/[0.05] to-white/[0.01] ${
                active
                  ? 'border-[#2563eb]/70 shadow-[0_0_35px_-6px_rgba(37,99,235,0.6)] -translate-y-1'
                  : 'border-white/10 hover:border-[#2563eb]/40 hover:-translate-y-0.5 hover:shadow-[0_0_20px_-6px_rgba(37,99,235,0.35)]'
              }`}
              style={{
                width: 'clamp(200px, 46vw, 240px)',
                scrollSnapAlign: 'start',
                transition: 'transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
              }}
            >
              {/* Active neon top bar */}
              {active && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#ef4444] z-10" />
              )}

              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '1' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-[1.08] transition duration-600"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {p.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-[#ef4444] text-white keep-white shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                      {p.badge}
                    </span>
                  )}
                  {discount && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#fbbf24]/90 text-black">
                      -{discount}%
                    </span>
                  )}
                </div>

                {/* Wishlist */}
                <span className="absolute top-2 right-2 h-6 w-6 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-[#ef4444] opacity-0 group-hover:opacity-100 transition keep-white">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </span>

                {/* Add to cart hover */}
                <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition duration-300">
                  <span className="block w-full py-2 rounded-xl text-[11px] font-bold bg-[#2563eb] text-white keep-white text-center shadow-[0_4px_16px_rgba(37,99,235,0.6)]">
                    + Add to Cart
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-3">
                <p className="text-[10px] text-white/40 uppercase tracking-wider truncate">{p.category}</p>
                <p className="text-sm font-semibold text-white/90 line-clamp-2 mt-0.5 leading-snug group-hover:text-white transition">
                  {p.name}
                </p>
                <div className="flex items-center gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} viewBox="0 0 20 20" className={`h-2.5 w-2.5 ${j < Math.round(p.rating) ? 'text-[#fbbf24]' : 'text-white/15'}`} fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-[9px] text-white/30 ml-0.5">({p.reviews})</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-base font-black text-[#60a5fa]">${p.price.toFixed(2)}</span>
                  {p.original && <span className="text-xs text-white/25 line-through">${p.original.toFixed(2)}</span>}
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* ── Controls ── */}
      <div className="flex items-center justify-between mt-4">
        {/* Dot indicators */}
        <div className="flex gap-1.5 flex-wrap max-w-[60%]">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Product ${i + 1}`}
              onClick={() => { goTo(i); restart(); }}
              className="rounded-full transition-all duration-300 focus:outline-none"
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                background: i === current ? '#2563eb' : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/30 font-mono tabular-nums hidden sm:inline">
            {String(current + 1).padStart(2, '0')} / {String(ITEMS.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            aria-label="Previous product"
            onClick={() => { prev(); restart(); }}
            className="h-9 w-9 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 6l-6 6 6 6"/></svg>
          </button>
          <button
            type="button"
            aria-label="Next product"
            onClick={() => { next(); restart(); }}
            className="h-9 w-9 rounded-full bg-[#2563eb] flex items-center justify-center text-white hover:bg-[#1d4ed8] shadow-[0_0_16px_rgba(37,99,235,0.5)] transition"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>

      {/* ── Progress bar ── */}
      {!paused && (
        <div className="mt-3 h-0.5 bg-white/5 rounded-full overflow-hidden">
          <div
            key={current}
            className="h-full rounded-full bg-gradient-to-r from-[#2563eb] to-[#60a5fa] origin-left"
            style={{ animation: `bar-grow ${INTERVAL}ms linear forwards` }}
          />
        </div>
      )}
    </div>
  );
}
