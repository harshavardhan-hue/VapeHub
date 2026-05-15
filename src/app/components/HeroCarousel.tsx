'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const slides = [
  {
    type: 'video' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/WhatsApp-Video-2026-04-30-at-4.33.53-PM.mp4',
    badge: '🔥 Live Deal',
    title: 'Buy 5 Get 1',
    highlight: 'FREE',
    sub: 'On all E-Liquids & Disposables · Use code VAPEHUB10',
    cta: 'Shop Now',
    ctaHref: '/shop',
    accent: '#ef4444',
  },
  {
    type: 'image' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/juice-head-scaled.jpg',
    badge: '💧 Premium Range',
    title: 'Juice Head',
    highlight: 'Collection',
    sub: 'Bold fruit flavors crafted for the real connoisseur. From $19.99.',
    cta: 'Explore Flavors',
    ctaHref: '/shop',
    accent: '#2563eb',
  },
  {
    type: 'video' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Task-4-zour.mp4',
    badge: '⚡ Just Dropped',
    title: 'Zour Drop',
    highlight: 'Limited',
    sub: 'Sour. Bold. Unstoppable. The new wave of vape culture is here.',
    cta: 'Grab Yours',
    ctaHref: '/shop',
    accent: '#a855f7',
  },
  {
    type: 'image' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Alien_avif.avif',
    badge: '🛸 Exclusive',
    title: 'Alien',
    highlight: 'Series',
    sub: 'Out-of-this-world flavors that hit different every single time.',
    cta: 'Discover',
    ctaHref: '/shop',
    accent: '#10b981',
  },
  {
    type: 'image' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/task-6.avif',
    badge: '🏷️ Flash Sale',
    title: 'Up to 40%',
    highlight: 'Off',
    sub: 'Limited time deals on hundreds of products. While stocks last.',
    cta: 'Shop Sale',
    ctaHref: '/shop',
    accent: '#f59e0b',
  },
  {
    type: 'video' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/FVKD-V2.mp4',
    badge: '🚀 Limited Edition',
    title: 'FVKD',
    highlight: 'V2',
    sub: 'The most anticipated vape release of 2026. Pre-order yours today.',
    cta: 'Pre-Order',
    ctaHref: '/shop',
    accent: '#ef4444',
  },
];

const INTERVAL = 5000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const goTo = useCallback((idx: number) => {
    setPrev(current);
    setCurrent(idx);
    setAnimKey((k) => k + 1);
  }, [current]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev_ = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next]);

  const restart = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, INTERVAL);
  };

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === current) { v.currentTime = 0; v.play().catch(() => {}); }
      else v.pause();
    });
  }, [current]);

  const s = slides[current];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(37,99,235,0.5)]" style={{ minHeight: 480 }}>

      {/* ── Slides ── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 2 : i === prev ? 1 : 0 }}
        >
          {slide.type === 'video' ? (
            <video
              ref={(el) => { videoRefs.current[i] = el; }}
              src={slide.src}
              className="w-full h-full object-cover"
              autoPlay={i === 0}
              muted
              loop
              playsInline
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={slide.src} alt={slide.title} className="w-full h-full object-cover" loading={i === 0 ? 'eager' : 'lazy'} />
          )}
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* ── Animated text (re-mounts on slide change) ── */}
      <div key={animKey} className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-10 pointer-events-none">
        {/* Badge */}
        <div className="animate-badge-pop" style={{ animationDelay: '0ms' }}>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white keep-white mb-3 border border-white/20"
            style={{ background: `${s.accent}cc` }}
          >
            {s.badge}
          </span>
        </div>
        {/* Title */}
        <h2
          className="text-4xl sm:text-6xl font-black text-white keep-white leading-none drop-shadow-2xl animate-hero-text"
          style={{ animationDelay: '80ms' }}
        >
          {s.title}{' '}
          <span style={{ color: s.accent }}>{s.highlight}</span>
        </h2>
        {/* Sub */}
        <p
          className="mt-3 text-white/80 keep-white text-sm sm:text-base max-w-lg leading-relaxed animate-fade-up"
          style={{ animationDelay: '180ms' }}
        >
          {s.sub}
        </p>
        {/* CTA */}
        <div className="mt-5 flex items-center gap-3 pointer-events-auto animate-fade-up" style={{ animationDelay: '280ms' }}>
          <a
            href={s.ctaHref}
            className="px-6 py-3 rounded-full font-bold text-sm text-white keep-white border-2 border-white/80 hover:bg-white hover:text-black transition-all duration-300"
            style={{ background: `${s.accent}dd` }}
          >
            {s.cta} →
          </a>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="text-white/60 keep-white text-xs">Code</span>
            <span className="font-black text-white keep-white tracking-widest text-sm">VAPEHUB10</span>
          </div>
        </div>
      </div>

      {/* ── Progress bar ── */}
      <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 p-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => { goTo(i); restart(); }}
            className="flex-1 h-1 rounded-full overflow-hidden bg-white/20 cursor-pointer"
          >
            <div
              className="h-full rounded-full origin-left"
              style={{
                background: i === current ? s.accent : 'transparent',
                animation: i === current ? `bar-grow ${INTERVAL}ms linear forwards` : 'none',
              }}
            />
          </button>
        ))}
      </div>

      {/* ── Arrow controls ── */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => { prev_(); restart(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-black/40 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white keep-white hover:bg-black/70 hover:scale-110 transition-all duration-200"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 6l-6 6 6 6"/></svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => { next(); restart(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-black/40 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white keep-white hover:bg-black/70 hover:scale-110 transition-all duration-200"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 6l6 6-6 6"/></svg>
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => { goTo(i); restart(); }}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              background: i === current ? s.accent : 'rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-4 right-4 z-20 text-xs text-white/50 keep-white font-mono tabular-nums">
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  );
}
