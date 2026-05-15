'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const slides = [
  {
    id: 1,
    type: 'video' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/WhatsApp-Video-2026-04-30-at-4.33.53-PM.mp4',
    thumb: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/juice-head-scaled.jpg',
    badge: '🔥 LIVE DEAL',
    eyebrow: 'Limited Time Offer',
    title: 'Buy 5 Get 1',
    highlight: 'FREE',
    sub: 'On all E-Liquids & Disposables. Stack your favourites and save big every single time.',
    tag: 'Use code VAPEHUB10',
    cta: 'Shop Now',
    ctaHref: '/shop',
    accent: '#ef4444',
    glow: 'rgba(239,68,68,0.35)',
  },
  {
    id: 2,
    type: 'image' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/juice-head-scaled.jpg',
    thumb: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/juice-head-scaled.jpg',
    badge: '💧 PREMIUM',
    eyebrow: 'Signature Range',
    title: 'Juice Head',
    highlight: 'Collection',
    sub: 'Bold, tropical fruit flavors crafted for the real connoisseur. Starting from $19.99.',
    tag: '40+ Flavors Available',
    cta: 'Explore Flavors',
    ctaHref: '/shop',
    accent: '#2563eb',
    glow: 'rgba(37,99,235,0.35)',
  },
  {
    id: 3,
    type: 'video' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Task-4-zour.mp4',
    thumb: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Alien_avif.avif',
    badge: '⚡ JUST DROPPED',
    eyebrow: 'New Arrival',
    title: 'Zour Drop',
    highlight: 'Series',
    sub: 'Sour. Bold. Unstoppable. The new wave of vape culture has arrived — grab it before it sells out.',
    tag: 'Limited Stock',
    cta: 'Grab Yours',
    ctaHref: '/shop',
    accent: '#a855f7',
    glow: 'rgba(168,85,247,0.35)',
  },
  {
    id: 4,
    type: 'image' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Alien_avif.avif',
    thumb: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Alien_avif.avif',
    badge: '🛸 EXCLUSIVE',
    eyebrow: 'Out-of-This-World',
    title: 'Alien Labs',
    highlight: 'Series',
    sub: 'Flavors from another dimension. Crafted with precision, delivered with style. Experience the unknown.',
    tag: 'Exclusive to Vape Hub',
    cta: 'Discover',
    ctaHref: '/brands',
    accent: '#10b981',
    glow: 'rgba(16,185,129,0.35)',
  },
  {
    id: 5,
    type: 'image' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2025/12/JIMMY_.jpg',
    thumb: 'https://splash-dev.phantasm.host/wp-content/uploads/2025/12/JIMMY_.jpg',
    badge: '👑 PREMIUM BRAND',
    eyebrow: 'Premium Partner',
    title: 'JIMMY',
    highlight: 'Official',
    sub: 'Premium rolling essentials meet modern vape culture. Elevate every session with JIMMY.',
    tag: 'Authorized Reseller',
    cta: 'Shop Brand',
    ctaHref: '/brands',
    accent: '#f59e0b',
    glow: 'rgba(245,158,11,0.35)',
  },
  {
    id: 6,
    type: 'video' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/FVKD-V2.mp4',
    thumb: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/task-6.avif',
    badge: '🚀 LIMITED EDITION',
    eyebrow: 'Most Anticipated',
    title: 'FVKD',
    highlight: 'V2',
    sub: 'The most anticipated vape release of 2026 is finally here. Pre-order yours before it is gone.',
    tag: 'Pre-Order Open',
    cta: 'Pre-Order Now',
    ctaHref: '/shop',
    accent: '#ef4444',
    glow: 'rgba(239,68,68,0.35)',
  },
  {
    id: 7,
    type: 'image' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/task-6.avif',
    thumb: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/task-6.avif',
    badge: '🏷️ FLASH SALE',
    eyebrow: 'Clearance Event',
    title: 'Up to 40%',
    highlight: 'Off',
    sub: 'Hundreds of products slashed. Limited-time deals across every category — while stocks last.',
    tag: 'Ends Soon',
    cta: 'Shop Sale',
    ctaHref: '/deals',
    accent: '#f97316',
    glow: 'rgba(249,115,22,0.35)',
  },
  {
    id: 8,
    type: 'image' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Raw.jpg',
    thumb: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Raw.jpg',
    badge: '🌿 ORGANIC',
    eyebrow: 'Natural & Pure',
    title: 'RAW',
    highlight: 'Naturals',
    sub: 'Pure, unrefined rolling papers. No chalk, no chlorine — just the cleanest smoke possible.',
    tag: 'Eco-Certified',
    cta: 'Explore RAW',
    ctaHref: '/brands',
    accent: '#84cc16',
    glow: 'rgba(132,204,22,0.35)',
  },
];

const INTERVAL = 6000;

export default function SlideshowPage() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animKey, setAnimKey] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [thumbsVisible, setThumbsVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const progressAnim = useRef<Animation | null>(null);

  const goTo = useCallback((idx: number) => {
    setPrev(current);
    setCurrent(idx);
    setAnimKey((k) => k + 1);
  }, [current]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev_ = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, INTERVAL);
  }, [next]);

  useEffect(() => {
    if (playing) startTimer();
    else if (timerRef.current) clearInterval(timerRef.current);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [playing, startTimer]);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === current) { v.currentTime = 0; v.play().catch(() => {}); }
      else v.pause();
    });
  }, [current]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') { next(); startTimer(); }
      if (e.key === 'ArrowLeft') { prev_(); startTimer(); }
      if (e.key === ' ') { e.preventDefault(); setPlaying((p) => !p); }
      if (e.key === 'f') document.documentElement.requestFullscreen?.();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev_, startTimer]);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev_(); startTimer(); }
    touchStartX.current = null;
  };

  const s = slides[current];

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden select-none"
      style={{ background: '#000' }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Ambient glow background ── */}
      <div
        className="absolute inset-0 z-0 transition-all duration-1000"
        style={{ background: `radial-gradient(ellipse 80% 60% at 30% 50%, ${s.glow}, transparent 70%)` }}
      />

      {/* ── Slides ── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 2 : i === prev ? 1 : 0 }}
        >
          {slide.type === 'video' ? (
            <video
              ref={(el) => { videoRefs.current[i] = el; }}
              src={slide.src}
              className="w-full h-full object-cover"
              style={{ transform: i === current ? 'scale(1.05)' : 'scale(1)', transition: 'transform 8s ease-out' }}
              autoPlay={i === 0}
              muted
              loop
              playsInline
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover"
              style={{ transform: i === current ? 'scale(1.07)' : 'scale(1)', transition: 'transform 8s ease-out' }}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          )}
          {/* layered gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        </div>
      ))}

      {/* ── Top bar ── */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-xl flex items-center justify-center text-white font-black text-sm"
            style={{ background: `linear-gradient(135deg, ${s.accent}, #7c3aed)`, boxShadow: `0 0 20px ${s.glow}`, transition: 'box-shadow 1s' }}>
            VH
          </div>
          <span className="text-white font-black text-lg tracking-tight hidden sm:inline" style={{ textShadow: '0 0 30px rgba(255,255,255,0.3)' }}>
            Vape Hub
          </span>
        </a>

        {/* Slide counter + controls */}
        <div className="flex items-center gap-3">
          <span className="text-white/50 text-xs font-mono tabular-nums hidden sm:block">
            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>

          {/* Play / Pause */}
          <button
            type="button"
            aria-label={playing ? 'Pause' : 'Play'}
            onClick={() => setPlaying((p) => !p)}
            className="h-9 w-9 rounded-full flex items-center justify-center border border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition"
          >
            {playing ? (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
            )}
          </button>

          {/* Thumbnails toggle */}
          <button
            type="button"
            aria-label="Toggle thumbnails"
            onClick={() => setThumbsVisible((v) => !v)}
            className="h-9 w-9 rounded-full flex items-center justify-center border border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
            </svg>
          </button>

          {/* Close / Home */}
          <a
            href="/"
            className="h-9 w-9 rounded-full flex items-center justify-center border border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition"
            aria-label="Back to home"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </a>
        </div>
      </div>

      {/* ── Progress bars ── */}
      <div className="absolute top-16 left-6 right-6 z-30 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => { goTo(i); startTimer(); }}
            className="flex-1 h-0.5 rounded-full overflow-hidden bg-white/20 cursor-pointer"
          >
            <div
              className="h-full rounded-full origin-left"
              style={{
                background: i < current ? 'rgba(255,255,255,0.6)' : i === current ? s.accent : 'transparent',
                width: i < current ? '100%' : undefined,
                animation: i === current && playing ? `bar-grow ${INTERVAL}ms linear forwards` : 'none',
                animationPlayState: playing ? 'running' : 'paused',
              }}
            />
          </button>
        ))}
      </div>

      {/* ── Slide content ── */}
      <div
        key={animKey}
        className="absolute inset-0 z-20 flex flex-col justify-center px-8 sm:px-16 lg:px-24 pb-32 pointer-events-none"
      >
        {/* Eyebrow */}
        <p
          className="text-xs uppercase tracking-[0.3em] font-bold mb-3 animate-fade-up"
          style={{ color: s.accent, animationDelay: '0ms' }}
        >
          {s.eyebrow}
        </p>

        {/* Badge */}
        <div className="animate-badge-pop mb-4" style={{ animationDelay: '60ms' }}>
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white border border-white/20 backdrop-blur-sm"
            style={{ background: `${s.accent}33` }}
          >
            {s.badge}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-none drop-shadow-2xl animate-hero-text max-w-3xl"
          style={{ animationDelay: '100ms' }}
        >
          {s.title}{' '}
          <span
            className="relative"
            style={{ color: s.accent, textShadow: `0 0 60px ${s.accent}80` }}
          >
            {s.highlight}
            <span
              className="absolute -bottom-2 left-0 h-1 rounded-full animate-slide-right"
              style={{ width: '100%', background: s.accent, animationDelay: '500ms' }}
            />
          </span>
        </h1>

        {/* Sub */}
        <p
          className="mt-6 text-white/75 text-base sm:text-lg max-w-xl leading-relaxed animate-fade-up"
          style={{ animationDelay: '220ms' }}
        >
          {s.sub}
        </p>

        {/* Tag pill */}
        <div className="mt-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/60 border border-white/15 px-3 py-1 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: s.accent }} />
            {s.tag}
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex items-center gap-4 pointer-events-auto animate-fade-up" style={{ animationDelay: '380ms' }}>
          <a
            href={s.ctaHref}
            className="group relative px-8 py-3.5 rounded-full font-bold text-sm text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: s.accent, boxShadow: `0 0 30px ${s.glow}` }}
          >
            <span className="relative z-10 flex items-center gap-2">
              {s.cta}
              <svg viewBox="0 0 24 24" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition" />
          </a>

          <a
            href="/deals"
            className="px-8 py-3.5 rounded-full font-bold text-sm text-white/80 border border-white/20 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            View Deals
          </a>
        </div>
      </div>

      {/* ── Arrow controls ── */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => { prev_(); startTimer(); }}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-black/40 border border-white/15 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all duration-200 group"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 6l-6 6 6 6"/>
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => { next(); startTimer(); }}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-black/40 border border-white/15 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all duration-200 group"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 6l6 6-6 6"/>
        </svg>
      </button>

      {/* ── Thumbnail strip ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 transition-all duration-500"
        style={{ transform: thumbsVisible ? 'translateY(0)' : 'translateY(100%)' }}
      >
        {/* Gradient fade */}
        <div className="h-32 w-full bg-gradient-to-t from-black/95 to-transparent pointer-events-none absolute bottom-full left-0 right-0" />

        <div className="bg-black/80 backdrop-blur-xl border-t border-white/10 px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
            {slides.map((slide, i) => (
              <button
                key={i}
                type="button"
                onClick={() => { goTo(i); startTimer(); }}
                className="relative flex-none rounded-lg overflow-hidden transition-all duration-300 group"
                style={{
                  width: i === current ? 96 : 64,
                  height: 52,
                  outline: i === current ? `2px solid ${s.accent}` : '2px solid transparent',
                  outlineOffset: 2,
                  opacity: i === current ? 1 : 0.5,
                  transform: i === current ? 'scale(1.08)' : 'scale(1)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.thumb}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                {slide.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor">
                      <polygon points="5,3 19,12 5,21"/>
                    </svg>
                  </div>
                )}
                {i === current && (
                  <div
                    className="absolute bottom-0 left-0 h-0.5 origin-left"
                    style={{ width: '100%', background: s.accent, animation: playing ? `bar-grow ${INTERVAL}ms linear forwards` : 'none' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Keyboard hint ── */}
      <div className="absolute bottom-24 right-6 z-30 hidden sm:flex flex-col items-end gap-1 text-white/25 text-[10px] font-mono">
        <span>← → navigate</span>
        <span>space pause</span>
      </div>

      {/* ── Side slide count strip ── */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => { goTo(i); startTimer(); }}
            className="rounded-full transition-all duration-300"
            style={{
              width: 4,
              height: i === current ? 28 : 4,
              background: i === current ? s.accent : 'rgba(255,255,255,0.25)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
