'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { products } from '../shop/data';

/* ── Hero deal slides ── */
const heroSlides = [
  {
    type: 'video' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/FVKD-V2.mp4',
    badge: '🔥 Flash Sale',
    title: 'FVKD V2',
    highlight: '40% Off',
    sub: 'Limited edition release. Most anticipated drop of 2026. While stocks last!',
    original: 49.99, sale: 29.99,
    totalSec: 3 * 3600 + 24 * 60 + 56,
    accent: '#ef4444',
    cta: 'Grab Deal →',
  },
  {
    type: 'image' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/juice-head-scaled.jpg',
    badge: '💧 Bundle Deal',
    title: 'Juice Head',
    highlight: 'Buy 5 Get 1 FREE',
    sub: 'Mix and match any flavors from our premium E-Liquid range. Auto applied.',
    original: 119.94, sale: 99.95,
    totalSec: 8 * 3600 + 15 * 60 + 30,
    accent: '#2563eb',
    cta: 'Build Bundle →',
  },
  {
    type: 'video' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Task-4-zour.mp4',
    badge: '⚡ Just Dropped',
    title: 'Zour Collection',
    highlight: '25% Off',
    sub: 'Sour & bold. The new wave of vape culture hits different every time.',
    original: 34.99, sale: 26.24,
    totalSec: 5 * 3600 + 45 * 60 + 10,
    accent: '#a855f7',
    cta: 'Shop Now →',
  },
  {
    type: 'image' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Alien_avif.avif',
    badge: '🛸 Exclusive',
    title: 'Alien Series',
    highlight: '30% Off',
    sub: 'Out-of-this-world flavors with out-of-this-world savings. Today only.',
    original: 39.99, sale: 27.99,
    totalSec: 12 * 3600 + 0 * 60 + 0,
    accent: '#10b981',
    cta: 'Explore →',
  },
  {
    type: 'image' as const,
    src: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/task-6.avif',
    badge: '🏷️ Clearance',
    title: 'Mega Clearance',
    highlight: 'Up to 50% Off',
    sub: 'Massive savings across hundreds of products. Limited quantities — act fast!',
    original: 59.99, sale: 29.99,
    totalSec: 24 * 3600,
    accent: '#f59e0b',
    cta: 'Shop Clearance →',
  },
];

/* ── Bundle packs ── */
const bundles = [
  {
    name: 'Starter Pack',
    desc: '5 disposables of your choice + free 30ml e-liquid',
    img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/juice-head-scaled.jpg',
    original: 89.95, sale: 64.99, saved: 24.96, badge: 'Best Value',
    accent: '#2563eb',
  },
  {
    name: 'Cloud Chaser Kit',
    desc: 'Premium device + 3 x 100ml e-liquids + coils pack',
    img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Alien_avif.avif',
    original: 149.99, sale: 99.99, saved: 50, badge: 'Most Popular',
    accent: '#ef4444',
  },
  {
    name: 'Flavor Explorer',
    desc: '10 assorted 30ml e-liquids — curated mystery pack',
    img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/task-6.avif',
    original: 79.90, sale: 54.99, saved: 24.91, badge: 'New',
    accent: '#a855f7',
  },
  {
    name: 'Road Trip Bundle',
    desc: '3 disposables + car charger + flavor sampler',
    img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Task-10roadtrip.gif',
    original: 74.97, sale: 49.99, saved: 24.98, badge: 'Limited',
    accent: '#f59e0b',
  },
];

/* ── Brand deal cards ── */
const brandDeals = [
  { name: 'JIMMY', img: 'https://splash-dev.phantasm.host/wp-content/uploads/2025/12/JIMMY_.jpg', off: 20 },
  { name: 'RAW', img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Raw.jpg', off: 15 },
  { name: 'Blazy Susan', img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/blazy-susan.jpg', off: 25 },
  { name: 'King Palm', img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/king-palm.jpg', off: 18 },
  { name: 'AWS', img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/aws.jpg', off: 30 },
];

/* ── Tabs ── */
const TABS = ['All Deals', 'Flash Sale', 'Bundle', 'Clearance', 'New Arrivals'] as const;
type Tab = typeof TABS[number];

/* ── Helpers ── */
function useCountdown(totalSeconds: number) {
  const [secs, setSecs] = useState(totalSeconds);
  useEffect(() => {
    setSecs(totalSeconds);
    const id = setInterval(() => setSecs((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [totalSeconds]);
  const h = String(Math.floor(secs / 3600)).padStart(2, '0');
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  return { h, m, s, done: secs === 0 };
}

function CountdownBlock({ secs, accent }: { secs: number; accent: string }) {
  const { h, m, s } = useCountdown(secs);
  return (
    <div className="flex items-center gap-1">
      {[h, m, s].map((v, i) => (
        <span key={i} className="flex items-center gap-1">
          <span className="px-2 py-1 rounded-lg font-black text-white keep-white text-base tabular-nums border border-white/20 backdrop-blur-sm" style={{ background: `${accent}cc` }}>{v}</span>
          {i < 2 && <span className="font-black text-white/80 keep-white">:</span>}
        </span>
      ))}
    </div>
  );
}

/* ── Main flash countdown at top ── */
function FlashCountdown() {
  const { h, m, s } = useCountdown(3 * 3600 + 24 * 60 + 56);
  return (
    <div className="flex items-center gap-2">
      {[{ v: h, l: 'HRS' }, { v: m, l: 'MIN' }, { v: s, l: 'SEC' }].map(({ v, l }, i) => (
        <span key={i} className="flex items-center gap-2">
          <span className="flex flex-col items-center">
            <span className="px-3 sm:px-4 py-2 rounded-xl bg-[#0d1117] border border-[#ef4444]/40 text-white font-black text-2xl sm:text-4xl tabular-nums shadow-[0_0_20px_rgba(239,68,68,0.3)]">{v}</span>
            <span className="text-[9px] text-white/40 uppercase tracking-widest mt-1">{l}</span>
          </span>
          {i < 2 && <span className="text-[#ef4444] font-black text-2xl sm:text-4xl mb-4 animate-pulse">:</span>}
        </span>
      ))}
    </div>
  );
}

/* ─────────────────────────────── PAGE ─────────────────────────────── */
export default function DealsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('All Deals');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  /* carousel auto-play */
  const goTo = useCallback((idx: number) => {
    setPrevSlide(currentSlide);
    setCurrentSlide(idx);
    setAnimKey((k) => k + 1);
  }, [currentSlide]);

  const nextSlide = useCallback(() => goTo((currentSlide + 1) % heroSlides.length), [currentSlide, goTo]);
  const prevSlide_ = useCallback(() => goTo((currentSlide - 1 + heroSlides.length) % heroSlides.length), [currentSlide, goTo]);

  const restartTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, 5000);
  }, [nextSlide]);

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [nextSlide]);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === currentSlide) { v.currentTime = 0; v.play().catch(() => {}); }
      else v.pause();
    });
  }, [currentSlide]);

  /* horizontal auto-scroll for deal strip */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let frame: number;
    let pos = 0;
    const tick = () => {
      if (!isPaused) {
        pos += 0.6;
        if (pos >= el.scrollWidth / 2) pos = 0;
        el.scrollLeft = pos;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  /* filtered products */
  const allDeals = products.map((p, i) => ({ ...p, off: [20, 30, 15, 40, 25, 35][i % 6] }));
  const filtered = activeTab === 'All Deals' ? allDeals
    : activeTab === 'Flash Sale' ? allDeals.filter((_, i) => i % 3 === 0)
    : activeTab === 'Bundle' ? allDeals.filter((_, i) => i % 4 === 0)
    : activeTab === 'Clearance' ? allDeals.filter((_, i) => i % 5 === 0)
    : allDeals.filter((_, i) => i % 2 === 0);

  const slide = heroSlides[currentSlide];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#050812]">

      {/* ── Promo bar ── */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ef4444,#f59e0b,#2563eb,#ef4444)] bg-[length:300%_100%] animate-bg-pan opacity-90" />
        <div className="relative py-2 overflow-hidden">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
            {['🔥 FLASH SALE LIVE NOW', '·', 'BUY 5 GET 1 FREE', '·', 'UP TO 50% OFF TODAY', '·', 'FREE SHIPPING $99+', '·', 'CODE: VAPEHUB10', '·', '🔥 FLASH SALE LIVE NOW', '·', 'BUY 5 GET 1 FREE', '·', 'UP TO 50% OFF TODAY', '·', 'FREE SHIPPING $99+', '·', 'CODE: VAPEHUB10', '·'].map((t, i) => (
              <span key={i} className={`text-white keep-white font-bold tracking-wide text-xs sm:text-sm ${t === '·' ? 'opacity-40' : ''}`}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 site-header border-b border-white/10">
        <div className="mx-auto max-w-[1600px] px-3 sm:px-6 h-14 sm:h-16 flex items-center gap-2 sm:gap-4 lg:gap-6">
          <a href="/" className="flex items-center gap-2 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://s1.phantasm.host/storage/layouts/kpZKCKHtbspVvwoAENnelAJE7ueZgHNvRCdHCUvj.png" alt="American Distributors LLC" className="h-9 sm:h-10 w-auto object-contain" />
            <div className="hidden sm:flex flex-col leading-none gap-1">
              <span className="text-sm font-black tracking-tight text-gradient-strong leading-none">American Distributors LLC</span>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb] animate-pulse shrink-0" />
                <span className="text-[9px] text-[#60a5fa] font-bold uppercase tracking-widest">Wholesale Portal</span>
              </div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-5 text-sm text-white/80">
            <a className="hover:text-white transition" href="/">Home</a>
            <a className="hover:text-white transition" href="/shop">Shop</a>
            <a className="text-white font-semibold border-b-2 border-[#ef4444] pb-0.5" href="/deals">Deals</a>
            <a className="hover:text-white transition" href="#">Brands</a>
            <a className="hover:text-white transition" href="#">Support</a>
          </nav>
          <div className="flex-1 min-w-0 max-w-xl">
            <div className="relative">
              <input type="text" placeholder="Search deals…" className="w-full h-9 sm:h-10 rounded-full bg-white/[0.04] border border-white/10 pl-10 pr-3 sm:pr-20 text-sm text-white placeholder-white/40 outline-none focus:border-[#ef4444] transition" />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="hidden sm:block"><ThemeToggle /></div>
            <a href="/login" className="px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-[#ef4444] to-[#2563eb] text-white keep-white hover:brightness-110 transition">Sign In</a>
            <button type="button" aria-label="Cart" className="relative h-10 w-10 rounded-full glass flex items-center justify-center text-white/80 hover:text-white transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3h2l2.4 12.3a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="10" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#ef4444] text-[10px] font-bold text-white keep-white flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-[1600px] mx-auto w-full px-3 sm:px-6 py-6 space-y-10">

        {/* ── 1. HERO DEAL CAROUSEL ── */}
        <section className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_120px_-20px_rgba(239,68,68,0.4)]" style={{ minHeight: 520 }}>

          {/* slides */}
          {heroSlides.map((s, i) => (
            <div key={i} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: i === currentSlide ? 1 : 0, zIndex: i === currentSlide ? 2 : i === prevSlide ? 1 : 0 }}>
              {s.type === 'video' ? (
                <video ref={(el) => { videoRefs.current[i] = el; }} src={s.src} className="w-full h-full object-cover" autoPlay={i === 0} muted loop playsInline />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.src} alt={s.title} className="w-full h-full object-cover" loading={i === 0 ? 'eager' : 'lazy'} />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          ))}

          {/* progress bars */}
          <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 p-2">
            {heroSlides.map((_, i) => (
              <button key={i} type="button" onClick={() => { goTo(i); restartTimer(); }} className="flex-1 h-1 rounded-full overflow-hidden bg-white/20">
                <div className="h-full rounded-full origin-left" style={{ background: i === currentSlide ? slide.accent : 'transparent', animation: i === currentSlide ? 'bar-grow 5000ms linear forwards' : 'none' }} />
              </button>
            ))}
          </div>

          {/* animated text */}
          <div key={animKey} className="absolute inset-0 z-10 flex flex-col justify-center px-8 sm:px-14 pointer-events-none">
            <div className="animate-badge-pop">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white keep-white mb-3 border border-white/20" style={{ background: `${slide.accent}cc` }}>
                {slide.badge}
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white keep-white leading-none animate-hero-text">
              {slide.title}<br /><span style={{ color: slide.accent }}>{slide.highlight}</span>
            </h1>
            <p className="mt-3 text-white/75 keep-white max-w-lg text-sm sm:text-base leading-relaxed animate-fade-up" style={{ animationDelay: '150ms' }}>{slide.sub}</p>

            {/* Price + timer */}
            <div className="mt-5 flex flex-wrap items-center gap-4 animate-fade-up pointer-events-auto" style={{ animationDelay: '250ms' }}>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-white keep-white">${slide.sale.toFixed(2)}</span>
                <div>
                  <p className="text-white/40 keep-white text-xs line-through">${slide.original.toFixed(2)}</p>
                  <p className="text-xs font-bold keep-white" style={{ color: slide.accent }}>SAVE ${(slide.original - slide.sale).toFixed(2)}</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[10px] uppercase tracking-widest text-white/50 keep-white">Deal Ends In</p>
                <CountdownBlock secs={slide.totalSec} accent={slide.accent} />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 pointer-events-auto animate-fade-up" style={{ animationDelay: '350ms' }}>
              <a href="/shop" className="px-7 py-3.5 rounded-full font-bold text-sm text-white keep-white hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg" style={{ background: slide.accent }}>
                {slide.cta}
              </a>
              <div className="px-4 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center gap-2">
                <span className="text-white/50 keep-white text-xs">Code</span>
                <span className="font-black text-white keep-white tracking-widest text-sm">VAPEHUB10</span>
              </div>
            </div>
          </div>

          {/* arrows */}
          <button type="button" onClick={() => { prevSlide_(); restartTimer(); }} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/50 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white keep-white hover:bg-black/80 hover:scale-110 transition-all">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 6l-6 6 6 6"/></svg>
          </button>
          <button type="button" onClick={() => { nextSlide(); restartTimer(); }} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/50 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white keep-white hover:bg-black/80 hover:scale-110 transition-all">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 6l6 6-6 6"/></svg>
          </button>

          {/* dot nav */}
          <div className="absolute bottom-5 right-8 z-20 flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button key={i} type="button" onClick={() => { goTo(i); restartTimer(); }} className="rounded-full transition-all duration-300" style={{ width: i === currentSlide ? 28 : 8, height: 8, background: i === currentSlide ? slide.accent : 'rgba(255,255,255,0.3)' }} />
            ))}
          </div>

          {/* slide counter */}
          <div className="absolute bottom-5 left-6 z-20 text-xs text-white/40 keep-white font-mono tabular-nums">
            {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
          </div>
        </section>

        {/* ── 2. LIVE FLASH SALE STRIP ── */}
        <section className="relative overflow-hidden rounded-2xl border border-[#ef4444]/30 bg-gradient-to-r from-[#1a0505] via-[#0d0505] to-[#1a0505]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.15),transparent_70%)] pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 px-6 sm:px-10 py-6 sm:py-8">
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444] animate-pulse" />
                <span className="text-[#ef4444] text-xs font-black uppercase tracking-widest">Live Flash Sale</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">Today&apos;s Top Deals End In</h2>
              <p className="text-white/50 text-sm mt-1">Prices reset at midnight. Don&apos;t miss out.</p>
            </div>
            <FlashCountdown />
            <a href="#deals-grid" className="px-8 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#ef4444] to-[#dc2626] text-white keep-white hover:brightness-110 hover:scale-105 transition-all shadow-[0_8px_30px_-6px_rgba(239,68,68,0.7)] whitespace-nowrap animate-glow-red">
              View All Deals →
            </a>
          </div>
        </section>

        {/* ── 3. AUTO-SCROLL DEAL STRIP ── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl sm:text-2xl font-black text-white">🏷️ Today&apos;s Hot Deals</h2>
            <span className="text-xs text-white/40">Hover to pause</span>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#050812] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#050812] to-transparent z-10 pointer-events-none" />
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* doubled for seamless loop */}
              {[...allDeals, ...allDeals].map((p, i) => (
                <a key={i} href={`/shop/${p.id}`} className="group shrink-0 w-44 sm:w-52 flex flex-col rounded-2xl overflow-hidden border border-white/10 hover:border-[#ef4444]/50 bg-gradient-to-b from-white/[0.05] to-white/[0.01] hover:shadow-[0_12px_40px_-10px_rgba(239,68,68,0.4)] transition-all duration-300 hover:-translate-y-1">
                  <div className="relative overflow-hidden aspect-square">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-[1.07] transition duration-500" loading="lazy" />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-black bg-[#ef4444] text-white keep-white">-{p.off}%</span>
                  </div>
                  <div className="p-3 flex flex-col gap-1">
                    <p className="text-xs font-semibold text-white/85 line-clamp-2 leading-snug">{p.name}</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="text-sm font-black text-[#60a5fa]">${(p.price * (1 - p.off / 100)).toFixed(2)}</span>
                      <span className="text-xs text-white/30 line-through">${p.price.toFixed(2)}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. TABS + DEALS GRID ── */}
        <section id="deals-grid">
          {/* Tab bar */}
          <div className="flex items-center gap-2 flex-wrap mb-6">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === tab
                  ? 'bg-gradient-to-r from-[#ef4444] to-[#2563eb] text-white keep-white shadow-[0_6px_20px_-6px_rgba(239,68,68,0.6)] scale-105'
                  : 'bg-white/[0.05] border border-white/10 text-white/70 hover:text-white hover:bg-white/[0.09]'}`}
              >
                {tab}
                {tab === 'Flash Sale' && <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#ef4444] animate-pulse" />}
              </button>
            ))}
            <span className="ml-auto text-xs text-white/40">{filtered.length} deals found</span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((p, i) => {
              const salePrice = p.price * (1 - p.off / 100);
              const savedAmt = (p.price - salePrice).toFixed(2);
              const stock = Math.floor(Math.random() * 20) + 3;
              return (
                <a
                  key={`${p.id}-${i}`}
                  href={`/shop/${p.id}`}
                  className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 hover:border-[#ef4444]/50 bg-gradient-to-b from-white/[0.05] to-white/[0.01] hover:shadow-[0_20px_50px_-12px_rgba(239,68,68,0.4)] transition-all duration-300 hover:-translate-y-1.5 animate-fade-up"
                  style={{ animationDelay: `${(i % 10) * 50}ms` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-square">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-[1.07] transition duration-500" loading="lazy" />
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#ef4444] text-white keep-white">-{p.off}%</span>
                      {p.badge && <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#fbbf24] text-black">{p.badge}</span>}
                    </div>
                    {/* Hover add to cart */}
                    <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition duration-300">
                      <span className="block w-full py-2 rounded-xl text-xs font-bold bg-[#ef4444] text-white keep-white text-center">Add to Cart</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-3 flex flex-col gap-1.5 flex-1">
                    <p className="text-[11px] text-white/40 uppercase tracking-wider">{p.category}</p>
                    <p className="text-xs font-semibold text-white/90 line-clamp-2 group-hover:text-white transition">{p.name}</p>

                    {/* Stock meter */}
                    <div className="mt-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-white/40">{stock} left</span>
                        <span className="text-[10px] text-[#ef4444] font-bold">Almost gone!</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#ef4444] to-[#f59e0b]" style={{ width: `${(stock / 30) * 100}%` }} />
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mt-auto pt-2 border-t border-white/5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-base font-black text-[#ef4444]">${salePrice.toFixed(2)}</span>
                        <span className="text-xs text-white/30 line-through">${p.price.toFixed(2)}</span>
                      </div>
                      <p className="text-[10px] text-[#4ade80] font-bold">You save ${savedAmt}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* ── 5. BUNDLE DEALS ── */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="chip">Save More</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black">Bundle &amp; Save</h2>
              <p className="text-white/50 text-sm mt-1">Curated packs at unbeatable prices</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bundles.map((b, i) => (
              <div
                key={b.name}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 bg-gradient-to-b from-white/[0.05] to-white/[0.01] hover:shadow-[0_24px_60px_-12px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-44">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.img} alt={b.name} className="w-full h-full object-cover group-hover:scale-[1.06] transition duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black text-white keep-white border border-white/20" style={{ background: `${b.accent}dd` }}>{b.badge}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-black text-white keep-white">{b.name}</h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex flex-col gap-3 flex-1">
                  <p className="text-xs text-white/60 leading-relaxed">{b.desc}</p>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-black" style={{ color: b.accent }}>${b.sale.toFixed(2)}</span>
                    <span className="text-sm text-white/30 line-through mb-0.5">${b.original.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#4ade80]/10 border border-[#4ade80]/20">
                    <span className="text-[#4ade80] text-xs font-black">✓ You save ${b.saved.toFixed(2)}</span>
                  </div>
                  <a href="/shop" className="mt-auto block w-full py-3 rounded-xl text-sm font-bold text-center text-white keep-white hover:brightness-110 hover:scale-[1.02] transition-all duration-300" style={{ background: `linear-gradient(135deg, ${b.accent}, ${b.accent}bb)` }}>
                    Add Bundle to Cart
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. BRAND DEALS ── */}
        <section>
          <div className="mb-5">
            <span className="chip">Partner Offers</span>
            <h2 className="mt-2 text-2xl font-black">Shop by Brand Deal</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {brandDeals.map((b, i) => (
              <a key={b.name} href="/shop" className="group relative block rounded-2xl overflow-hidden border border-white/10 hover:border-[#ef4444]/50 hover:shadow-[0_16px_40px_-10px_rgba(239,68,68,0.4)] transition-all duration-300 hover:-translate-y-1.5 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.img} alt={b.name} className="w-full h-36 object-cover group-hover:scale-[1.06] transition duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute top-2 right-2 px-2 py-1 rounded-full text-[10px] font-black bg-[#ef4444] text-white keep-white">-{b.off}%</div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-sm font-black text-white keep-white">{b.name}</p>
                  <p className="text-[10px] text-white/60 keep-white">{b.off}% off all products</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── 7. VIDEO DEAL SPOTLIGHT ── */}
        <section className="relative overflow-hidden rounded-2xl border border-white/10">
          <video src="https://splash-dev.phantasm.host/wp-content/uploads/2026/04/WhatsApp-Video-2026-04-30-at-4.33.53-PM.mp4" className="w-full h-[300px] sm:h-[420px] object-cover" autoPlay muted loop playsInline />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-14">
            <span className="inline-flex w-fit items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2563eb]/20 border border-[#2563eb]/40 text-[#93c5fd] text-xs font-black uppercase tracking-widest mb-4 animate-badge-pop">
              🎁 Deal of the Day
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white keep-white leading-none animate-hero-text">
              Buy <span className="text-[#60a5fa]">5</span> Get <span className="text-[#ef4444]">1 FREE</span>
            </h2>
            <p className="mt-3 text-white/70 keep-white max-w-md text-sm leading-relaxed animate-fade-up" style={{ animationDelay: '150ms' }}>
              Mix and match any 5 vape products from our E-Liquids or Disposables range. Lowest-priced item is absolutely free.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '280ms' }}>
              <a href="/shop" className="px-7 py-3 rounded-full font-bold text-sm bg-[#2563eb] text-white keep-white hover:bg-[#1d4ed8] hover:scale-105 transition-all">Shop the Deal</a>
              <div className="px-4 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center gap-2">
                <span className="text-white/50 keep-white text-xs">Auto applied:</span>
                <span className="font-black text-white keep-white tracking-widest text-sm">5+1 FREE</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. GIF DEAL + PROMO CODE ── */}
        <section className="grid md:grid-cols-3 gap-5">
          {/* GIF */}
          <div className="md:col-span-2 relative overflow-hidden rounded-2xl border border-white/10 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Task-10roadtrip.gif" alt="Road Trip Deal" className="w-full h-full object-cover min-h-[240px] group-hover:scale-[1.04] transition duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="chip !bg-[#f59e0b]/20 !border-[#f59e0b]/40 text-[#fde68a] mb-2">🛣️ Road Trip Bundle — Limited</span>
              <h3 className="text-2xl font-black text-white keep-white">On-The-Go Collection</h3>
              <p className="text-white/60 keep-white text-sm mt-1">Perfect for your next adventure. Compact, long-lasting.</p>
              <a href="/shop" className="mt-3 inline-block px-5 py-2.5 rounded-full text-xs font-bold bg-[#f59e0b] text-black hover:brightness-110 transition">Shop Collection →</a>
            </div>
          </div>

          {/* Promo code card */}
          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-2xl border border-[#2563eb]/30 bg-gradient-to-br from-[#050e2a] to-[#0a0f1f] p-6 flex-1 flex flex-col justify-between">
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-[#2563eb] blur-[60px] opacity-20 pointer-events-none animate-pulse" />
              <div>
                <p className="text-xs uppercase tracking-widest text-[#60a5fa] font-bold mb-2">Exclusive Code</p>
                <h3 className="text-3xl font-black text-white">Extra 10% Off</h3>
                <p className="text-white/55 text-sm mt-2 leading-relaxed">On top of all sale prices. Valid on all orders. No minimum spend.</p>
              </div>
              <div className="mt-4 flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 border-dashed">
                <span className="flex-1 font-black text-white tracking-[0.3em] text-center text-lg">VAPEHUB10</span>
                <button type="button" className="px-3 py-1.5 rounded-lg bg-[#2563eb] text-white keep-white text-xs font-bold hover:bg-[#1d4ed8] transition">Copy</button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[#ef4444]/30 bg-gradient-to-br from-[#1a0505] to-[#0d0505] p-6 flex-1 flex flex-col justify-between">
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#ef4444] blur-[60px] opacity-20 pointer-events-none animate-pulse" />
              <div>
                <p className="text-xs uppercase tracking-widest text-[#fca5a5] font-bold mb-2">Flash Code</p>
                <h3 className="text-3xl font-black text-white">15% Off First Order</h3>
                <p className="text-white/55 text-sm mt-2 leading-relaxed">New customers only. Expires at midnight tonight.</p>
              </div>
              <div className="mt-4 flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 border-dashed">
                <span className="flex-1 font-black text-white tracking-[0.3em] text-center text-lg">NEWVAPER15</span>
                <button type="button" className="px-3 py-1.5 rounded-lg bg-[#ef4444] text-white keep-white text-xs font-bold hover:bg-[#dc2626] transition">Copy</button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. NEWSLETTER ── */}
        <section>
          <div className="relative overflow-hidden rounded-2xl glass-strong p-8 md:p-12">
            <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#ef4444] blur-[120px] opacity-20 pointer-events-none animate-pulse" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#2563eb] blur-[120px] opacity-20 pointer-events-none animate-pulse" />
            <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none rounded-2xl" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="chip">Deals Alerts · Never miss a sale</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-black leading-tight">Get deals <span className="text-gradient-strong">before</span> everyone else.</h2>
                <p className="mt-3 text-white/60 text-sm leading-relaxed max-w-md">Flash sale alerts, secret codes, and bundle drops — straight to your inbox before we post anywhere else.</p>
              </div>
              <form className="flex flex-col gap-3" action="#">
                <input type="email" required placeholder="your@email.com" className="h-12 rounded-full bg-white/[0.05] border border-white/10 px-5 text-white placeholder-white/40 outline-none focus:border-[#ef4444] transition text-sm" />
                <button className="h-12 px-7 rounded-full font-bold text-sm bg-gradient-to-r from-[#ef4444] to-[#2563eb] text-white keep-white hover:brightness-110 transition" type="submit">
                  Get Deal Alerts 🔥
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* ── Footer ── */}
      <footer className="mt-8 border-t border-white/5 bg-[#04050c]/60 backdrop-blur-md">
        <div className="mx-auto max-w-[1600px] px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://s1.phantasm.host/storage/layouts/kpZKCKHtbspVvwoAENnelAJE7ueZgHNvRCdHCUvj.png" alt="American Distributors LLC" className="h-7 w-auto object-contain" />
            <span className="font-black tracking-tight text-gradient text-base">American Distributors LLC</span>
          </div>
          <p>© 2026 American Distributors LLC. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/shop" className="hover:text-white transition">Shop</a>
            <a href="/deals" className="text-white">Deals</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
