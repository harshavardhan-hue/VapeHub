'use client';

import { useState, useRef, useCallback } from 'react';
import ThemeToggle from '../components/ThemeToggle';

/* ─── Brand data ─── */
const brands = [
  {
    id: 1, name: 'JIMMY', category: 'E-Liquids', featured: true, isNew: false, exclusive: true,
    img: 'https://splash-dev.phantasm.host/wp-content/uploads/2025/12/JIMMY_.jpg',
    color: '#2563eb', products: 48, rating: 4.9, reviews: 1240,
    desc: 'Premium craft e-liquids with complex, layered flavor profiles loved by connoisseurs worldwide.',
    tags: ['Premium', 'Craft', 'Bold Flavors'],
    discount: 20,
  },
  {
    id: 2, name: 'RAW', category: 'Smoke Shop', featured: true, isNew: false, exclusive: false,
    img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Raw.jpg',
    color: '#f59e0b', products: 62, rating: 4.8, reviews: 3420,
    desc: 'The world\'s #1 organic rolling paper brand. Unbleached, natural and eco-friendly.',
    tags: ['Organic', 'Natural', 'Eco-Friendly'],
    discount: 15,
  },
  {
    id: 3, name: 'Blazy Susan', category: 'Smoke Shop', featured: false, isNew: true, exclusive: false,
    img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/blazy-susan.jpg',
    color: '#ec4899', products: 34, rating: 4.7, reviews: 890,
    desc: 'Pink rolling papers that stand out. Ultra-thin, slow-burning, and 100% vegan.',
    tags: ['Pink', 'Vegan', 'Ultra-Thin'],
    discount: 25,
  },
  {
    id: 4, name: 'King Palm', category: 'Botanicals', featured: true, isNew: false, exclusive: false,
    img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/king-palm.jpg',
    color: '#10b981', products: 29, rating: 4.8, reviews: 1560,
    desc: 'All-natural corn husk filter rolls. The cleanest smoke experience — no additives, ever.',
    tags: ['Natural', 'Corn Husk', 'Clean'],
    discount: 18,
  },
  {
    id: 5, name: 'AWS', category: 'Disposable', featured: false, isNew: false, exclusive: true,
    img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/aws.jpg',
    color: '#ef4444', products: 55, rating: 4.6, reviews: 2100,
    desc: 'High-performance disposable vapes engineered for maximum puff count and flavor retention.',
    tags: ['Disposable', 'Long-Lasting', 'Tech'],
    discount: 30,
  },
  {
    id: 6, name: 'Juice Head', category: 'E-Liquids', featured: false, isNew: true, exclusive: false,
    img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/juice-head-scaled.jpg',
    color: '#a855f7', products: 38, rating: 4.9, reviews: 2780,
    desc: 'Vibrant fruit-forward e-liquids inspired by summer and tropical goodness.',
    tags: ['Fruity', 'Summer', 'Bold'],
    discount: 22,
  },
  {
    id: 7, name: 'Alien Labs', category: 'Disposable', featured: false, isNew: true, exclusive: true,
    img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Alien_avif.avif',
    color: '#06b6d4', products: 22, rating: 4.7, reviews: 670,
    desc: 'Out-of-this-world flavor combinations that defy expectations every single time.',
    tags: ['Exotic', 'Exclusive', 'Limited'],
    discount: 0,
  },
  {
    id: 8, name: 'Zour Drop', category: 'E-Liquids', featured: false, isNew: true, exclusive: false,
    img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/task-6.avif',
    color: '#84cc16', products: 18, rating: 4.6, reviews: 430,
    desc: 'Sour candy-inspired e-liquids with a bold pucker that hits different every time.',
    tags: ['Sour', 'Candy', 'Bold'],
    discount: 10,
  },
];

const CATEGORIES = ['All', 'E-Liquids', 'Smoke Shop', 'Disposable', 'Botanicals'] as const;
type Cat = typeof CATEGORIES[number];

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

/* ─── 3D Tilt Card ─── */
function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * 8;
    const ry = ((cx - x) / cx) * 8;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`;
  }, []);

  const onLeave = useCallback(() => {
    const el = cardRef.current;
    if (el) el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
  }, []);

  return (
    <div ref={cardRef} onMouseMove={onMove} onMouseLeave={onLeave} className={`transition-transform duration-200 ease-out will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/* ─── Star rating ─── */
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`h-3.5 w-3.5 ${i < Math.round(rating) ? 'text-[#fbbf24]' : 'text-white/15'}`} fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Main Page ─── */
export default function BrandsPage() {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState<Cat>('All');
  const [activeLetter, setActiveLetter] = useState('');
  const [spotlight, setSpotlight] = useState(brands[0]);
  const [spotlightVisible, setSpotlightVisible] = useState(false);

  const filtered = brands.filter((b) => {
    const matchSearch = b.name.toLowerCase().includes(search.toLowerCase()) || b.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchCat = activeCat === 'All' || b.category === activeCat;
    const matchLetter = !activeLetter || b.name.toUpperCase().startsWith(activeLetter);
    return matchSearch && matchCat && matchLetter;
  });

  const featured = brands.filter((b) => b.featured);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#050812]">

      {/* ── Promo bar ── */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#2563eb,#a855f7,#ef4444,#2563eb)] bg-[length:300%_100%] animate-bg-pan opacity-90" />
        <div className="relative py-2 overflow-hidden">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
            {['🏆 500+ AUTHORIZED BRANDS', '·', 'OFFICIAL RESELLER CERTIFIED', '·', 'EXCLUSIVE BRAND DEALS', '·', 'NEW BRANDS ADDED WEEKLY', '·', '🏆 500+ AUTHORIZED BRANDS', '·', 'OFFICIAL RESELLER CERTIFIED', '·', 'EXCLUSIVE BRAND DEALS', '·', 'NEW BRANDS ADDED WEEKLY', '·'].map((t, i) => (
              <span key={i} className={`text-white keep-white font-bold tracking-wide text-xs sm:text-sm ${t === '·' ? 'opacity-40' : ''}`}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 site-header border-b border-white/10">
        <div className="mx-auto max-w-[1600px] px-3 sm:px-6 h-14 sm:h-16 flex items-center gap-2 sm:gap-4 lg:gap-6">
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative inline-flex items-center justify-center shrink-0">
              <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,#2563eb,#60a5fa,#ef4444,#fbbf24,#2563eb)] animate-spin-slow opacity-80" />
              <div className="relative bg-[#06070f] rounded-[10px] p-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://s1.phantasm.host/storage/layouts/kpZKCKHtbspVvwoAENnelAJE7ueZgHNvRCdHCUvj.png" alt="American Distributors LLC" className="h-8 sm:h-9 w-auto object-contain" />
              </div>
            </div>
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
            <a className="hover:text-white transition" href="/deals">Deals</a>
            <a className="text-white font-semibold border-b-2 border-[#a855f7] pb-0.5" href="/brands">Brands</a>
            <a className="hover:text-white transition" href="#">Support</a>
          </nav>
          <div className="flex-1 min-w-0 max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search brands, categories, tags…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-9 sm:h-10 rounded-full bg-white/[0.04] border border-white/10 pl-10 pr-3 sm:pr-20 text-sm text-white placeholder-white/40 outline-none focus:border-[#a855f7] transition"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="hidden sm:block"><ThemeToggle /></div>
            <button type="button" aria-label="Cart" className="relative h-10 w-10 rounded-full glass flex items-center justify-center text-white/80 hover:text-white transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3h2l2.4 12.3a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="10" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#ef4444] text-[10px] font-bold text-white keep-white flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-[1600px] mx-auto w-full px-3 sm:px-6 py-8 space-y-14">

        {/* ── 1. HERO ── */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 min-h-[480px] flex flex-col justify-end">
          {/* Animated gradient bg */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_60%_40%,rgba(168,85,247,0.35),transparent_60%),radial-gradient(ellipse_80%_80%_at_10%_80%,rgba(37,99,235,0.4),transparent_60%),radial-gradient(ellipse_60%_60%_at_90%_20%,rgba(239,68,68,0.3),transparent_60%)] bg-[#070a1a]" />

          {/* Floating orbs */}
          <div className="absolute top-10 right-20 h-40 w-40 rounded-full bg-[#a855f7] blur-[80px] opacity-30 animate-float pointer-events-none" />
          <div className="absolute bottom-10 left-20 h-56 w-56 rounded-full bg-[#2563eb] blur-[100px] opacity-25 animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-[#ef4444] blur-[120px] opacity-15 animate-pulse pointer-events-none" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

          {/* Floating brand images */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {brands.slice(0, 6).map((b, i) => {
              const positions = [
                'top-6 right-6', 'top-6 right-44', 'top-24 right-20',
                'bottom-24 right-8', 'top-12 right-80', 'bottom-16 right-52',
              ];
              const sizes = ['h-20 w-28', 'h-16 w-22', 'h-24 w-32', 'h-18 w-26', 'h-14 w-20', 'h-20 w-28'];
              return (
                <div
                  key={b.id}
                  className={`absolute ${positions[i]} ${sizes[i]} rounded-xl overflow-hidden border border-white/20 opacity-60 animate-float shadow-lg`}
                  style={{ animationDelay: `${i * 0.7}s`, animationDuration: `${4 + i * 0.5}s` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.img} alt={b.name} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 border border-white/10 rounded-xl" />
                </div>
              );
            })}
          </div>

          {/* Text content */}
          <div className="relative z-10 p-8 sm:p-14 max-w-2xl">
            <div className="flex items-center gap-2 mb-4 animate-badge-pop">
              <span className="px-3 py-1.5 rounded-full bg-[#a855f7]/20 border border-[#a855f7]/40 text-[#d8b4fe] text-xs font-black uppercase tracking-widest">
                🏆 Official Partner Directory
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-white leading-none animate-hero-text">
              World&apos;s Best<br /><span className="text-gradient-strong">Vape Brands</span>
            </h1>
            <p className="mt-4 text-white/65 text-base leading-relaxed max-w-lg animate-fade-up" style={{ animationDelay: '150ms' }}>
              Authorized reseller for 500+ premium brands. Every product is verified, genuine, and Texas compliant. Shop with confidence.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '280ms' }}>
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-3xl font-black text-gradient-strong">500+</span>
                <span className="text-white/60 text-sm">Partner Brands</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-3xl font-black text-gradient-strong">10K+</span>
                <span className="text-white/60 text-sm">Products</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-3xl font-black text-gradient-strong">100%</span>
                <span className="text-white/60 text-sm">Authentic</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. FEATURED BRAND SPOTLIGHT (hover-interactive) ── */}
        <section>
          <div className="mb-6">
            <span className="chip">Top Picks</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-black">Featured Brands</h2>
            <p className="text-white/50 text-sm mt-1">Hover any brand to explore — click to shop all products</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {/* Left: spotlight display */}
            <div
              className="lg:col-span-1 relative overflow-hidden rounded-2xl border transition-all duration-500 min-h-[400px]"
              style={{ borderColor: `${spotlight.color}40`, background: `linear-gradient(135deg, ${spotlight.color}15, #0d1117 60%)` }}
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full blur-[80px] opacity-30 animate-pulse" style={{ background: spotlight.color }} />
                <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full blur-[60px] opacity-20" style={{ background: spotlight.color }} />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={spotlight.img} alt={spotlight.name} className="w-full h-52 object-cover transition-all duration-700" loading="lazy" />
              <div className="absolute top-4 left-4 flex gap-2">
                {spotlight.exclusive && <span className="px-2 py-1 rounded-full text-[10px] font-black bg-[#a855f7] text-white keep-white">EXCLUSIVE</span>}
                {spotlight.isNew && <span className="px-2 py-1 rounded-full text-[10px] font-black bg-[#10b981] text-white keep-white">NEW</span>}
                {spotlight.discount > 0 && <span className="px-2 py-1 rounded-full text-[10px] font-black bg-[#ef4444] text-white keep-white">-{spotlight.discount}%</span>}
              </div>
              <div className="relative p-5">
                <h3 className="text-2xl font-black text-white">{spotlight.name}</h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full border mt-1 inline-block" style={{ color: spotlight.color, borderColor: `${spotlight.color}50`, background: `${spotlight.color}15` }}>{spotlight.category}</span>
                <p className="mt-3 text-white/65 text-sm leading-relaxed">{spotlight.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <Stars rating={spotlight.rating} />
                  <span className="text-xs text-white/50">{spotlight.rating} ({spotlight.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/8 text-center">
                    <p className="text-lg font-black text-white">{spotlight.products}</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider">Products</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/8 text-center">
                    <p className="text-lg font-black" style={{ color: spotlight.color }}>{spotlight.discount > 0 ? `-${spotlight.discount}%` : 'Authentic'}</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider">{spotlight.discount > 0 ? 'Current Deal' : 'Certified'}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <a href="/shop" className="flex-1 py-2.5 rounded-xl text-sm font-bold text-center text-white keep-white hover:brightness-110 hover:scale-[1.02] transition-all" style={{ background: spotlight.color }}>
                    Shop {spotlight.name} →
                  </a>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {spotlight.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/5 border border-white/10 text-white/60">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: brand selector grid */}
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {featured.map((b) => (
                <TiltCard key={b.id}>
                  <div
                    className={`relative group cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ${spotlight.id === b.id ? 'ring-2 scale-[1.02]' : 'border-white/10 hover:border-white/30'}`}
                    style={spotlight.id === b.id ? { borderColor: b.color, boxShadow: `0 0 30px ${b.color}50` } : {}}
                    onMouseEnter={() => { setSpotlight(b); setSpotlightVisible(true); }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={b.img} alt={b.name} className="w-full h-44 object-cover group-hover:scale-[1.07] transition duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {/* Active glow */}
                    {spotlight.id === b.id && (
                      <div className="absolute inset-0 pointer-events-none animate-fade-in" style={{ background: `radial-gradient(circle at center, ${b.color}20, transparent 70%)` }} />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-black text-white keep-white text-base">{b.name}</h3>
                        {spotlight.id === b.id && <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: b.color }} />}
                      </div>
                      <p className="text-[11px] text-white/60 keep-white">{b.products} products</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Stars rating={b.rating} />
                        <span className="text-[10px] text-white/40 keep-white">{b.rating}</span>
                      </div>
                    </div>
                    {b.exclusive && <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[9px] font-black bg-[#a855f7] text-white keep-white">EXCL</span>}
                  </div>
                </TiltCard>
              ))}
              {/* CTA card */}
              <TiltCard>
                <a href="/shop" className="relative flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 h-44 hover:border-[#a855f7]/50 hover:bg-[#a855f7]/5 transition-all duration-300 group">
                  <div className="h-12 w-12 rounded-full bg-[#a855f7]/15 border border-[#a855f7]/30 flex items-center justify-center mb-3 group-hover:scale-110 transition">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#a855f7]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                  </div>
                  <p className="text-sm font-bold text-white/60 group-hover:text-white transition">View All Brands</p>
                  <p className="text-xs text-white/30 mt-0.5">500+ partners</p>
                </a>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* ── 3. BENTO BRAND GRID ── */}
        <section>
          {/* Filter controls */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div>
              <span className="chip">All Brands</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black">Brand Directory</h2>
            </div>
            <div className="sm:ml-auto flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCat(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 ${activeCat === cat
                    ? 'bg-gradient-to-r from-[#a855f7] to-[#2563eb] text-white keep-white shadow-[0_4px_16px_-4px_rgba(168,85,247,0.6)]'
                    : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* A-Z filter */}
          <div className="flex flex-wrap gap-1 mb-6">
            <button type="button" onClick={() => setActiveLetter('')} className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${!activeLetter ? 'bg-[#a855f7] text-white keep-white' : 'bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10'}`}>ALL</button>
            {ALPHABET.map((l) => {
              const hasMatch = brands.some(b => b.name.toUpperCase().startsWith(l));
              return (
                <button key={l} type="button" onClick={() => setActiveLetter(activeLetter === l ? '' : l)} disabled={!hasMatch} className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${activeLetter === l ? 'bg-[#a855f7] text-white keep-white' : hasMatch ? 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10' : 'bg-white/[0.02] border border-white/5 text-white/20 cursor-not-allowed'}`}>{l}</button>
              );
            })}
          </div>

          {/* Bento grid */}
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <span className="text-6xl mb-4">🔍</span>
              <p className="text-white/60 text-lg">No brands found for &quot;{search}&quot;</p>
              <button onClick={() => { setSearch(''); setActiveCat('All'); setActiveLetter(''); }} className="mt-4 px-5 py-2 rounded-full text-sm font-bold bg-white/5 border border-white/10 text-white/70 hover:text-white transition">Clear filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto">
              {filtered.map((b, idx) => {
                const isBig = idx === 0 || idx === 5;
                return (
                  <TiltCard key={b.id} className={isBig ? 'sm:col-span-2 sm:row-span-2' : ''}>
                    <a
                      href="/shop"
                      onMouseEnter={() => setSpotlight(b)}
                      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 hover:border-white/25 bg-gradient-to-b from-white/[0.05] to-white/[0.01] h-full transition-all duration-300 animate-fade-up"
                      style={{
                        animationDelay: `${idx * 60}ms`,
                        boxShadow: `0 0 0 0 ${b.color}`,
                      }}
                      onFocus={(e) => { e.currentTarget.style.boxShadow = `0 16px 50px -12px ${b.color}50`; }}
                      onBlur={(e) => { e.currentTarget.style.boxShadow = '0 0 0 0 transparent'; }}
                    >
                      {/* Hover glow overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ background: `radial-gradient(circle at 50% 0%, ${b.color}20, transparent 70%)`, boxShadow: `inset 0 0 0 1px ${b.color}40` }} />

                      {/* Image */}
                      <div className={`relative overflow-hidden ${isBig ? 'h-56 sm:h-72' : 'h-36'}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={b.img} alt={b.name} className="w-full h-full object-cover group-hover:scale-[1.08] transition duration-600" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                        {/* Badges */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          {b.exclusive && <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-[#a855f7] text-white keep-white">EXCLUSIVE</span>}
                          {b.isNew && <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-[#10b981] text-white keep-white">NEW</span>}
                          {b.discount > 0 && <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-[#ef4444] text-white keep-white">-{b.discount}%</span>}
                        </div>

                        {/* Authorized badge */}
                        <div className="absolute top-2 right-2 h-7 w-7 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center" title="Authorized Reseller">
                          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[#4ade80]" fill="currentColor"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-4 flex flex-col gap-2 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className={`font-black text-white group-hover:text-white transition ${isBig ? 'text-xl' : 'text-base'}`}>{b.name}</h3>
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full border mt-1 inline-block" style={{ color: b.color, borderColor: `${b.color}40`, background: `${b.color}12` }}>{b.category}</span>
                          </div>
                          <div className="shrink-0 h-8 w-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0" style={{ background: b.color }}>
                            <svg viewBox="0 0 24 24" className="h-4 w-4 text-white keep-white" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 6l6 6-6 6"/></svg>
                          </div>
                        </div>

                        {isBig && <p className="text-xs text-white/60 leading-relaxed line-clamp-2">{b.desc}</p>}

                        <div className="flex items-center gap-1.5 mt-1">
                          <Stars rating={b.rating} />
                          <span className="text-[11px] text-white/40">{b.rating} ({b.reviews.toLocaleString()})</span>
                        </div>

                        {/* Product count bar */}
                        <div className="mt-auto pt-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] text-white/40 uppercase tracking-wider">{b.products} Products</span>
                            {b.discount > 0 && <span className="text-[10px] font-bold text-[#ef4444]">{b.discount}% off</span>}
                          </div>
                          <div className="h-1 bg-white/8 rounded-full overflow-hidden">
                            <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${(b.products / 70) * 100}%`, background: b.color }} />
                          </div>
                        </div>
                      </div>
                    </a>
                  </TiltCard>
                );
              })}
            </div>
          )}
        </section>

        {/* ── 4. STATS SECTION ── */}
        <section className="relative overflow-hidden rounded-2xl border border-white/10 p-8 sm:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/10 via-[#2563eb]/10 to-[#ef4444]/10" />
          <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
          <div className="relative">
            <div className="text-center mb-10">
              <span className="chip">Why Shop Brands at Vape Hub</span>
              <h2 className="mt-3 text-3xl font-black">The Vape Hub Difference</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🏆', value: '500+', label: 'Partner Brands', sub: 'Carefully vetted and authorized' },
                { icon: '✅', value: '100%', label: 'Authentic Products', sub: 'Every item verified genuine' },
                { icon: '🚀', value: '48hr', label: 'Fast Shipping', sub: 'On orders placed before 3pm' },
                { icon: '🔒', value: '256-bit', label: 'Secure Shopping', sub: 'SSL encrypted checkout' },
              ].map((s, i) => (
                <div key={s.label} className="relative group flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-[#a855f7]/40 hover:bg-[#a855f7]/5 transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <span className="text-4xl mb-3 group-hover:scale-110 transition animate-float" style={{ animationDelay: `${i * 500}ms` }}>{s.icon}</span>
                  <p className="text-3xl font-black text-gradient-strong">{s.value}</p>
                  <p className="text-sm font-bold text-white mt-1">{s.label}</p>
                  <p className="text-xs text-white/50 mt-1 leading-snug">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. BECOME A BRAND PARTNER ── */}
        <section className="relative overflow-hidden rounded-2xl border border-[#a855f7]/30">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d0520] via-[#0a0f1f] to-[#050812]" />
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[#a855f7] blur-[120px] opacity-20 pointer-events-none animate-pulse" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#2563eb] blur-[120px] opacity-20 pointer-events-none animate-pulse" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 sm:p-14">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#a855f7]/15 border border-[#a855f7]/30 text-[#d8b4fe] text-xs font-black uppercase tracking-wider mb-4">
                🤝 Brand Partnership
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Want Your Brand<br />Listed <span className="text-[#a855f7]">Here?</span>
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-md">
                Join 500+ brands already selling on Vape Hub. Access 50,000+ active customers, zero listing fees, and a dedicated brand page with analytics.
              </p>
              <ul className="mt-5 space-y-2">
                {['Dedicated brand storefront', 'Real-time sales analytics', 'Zero monthly fees', 'Featured placement opportunities'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/75">
                    <span className="h-5 w-5 rounded-full bg-[#a855f7]/20 border border-[#a855f7]/40 flex items-center justify-center text-[#d8b4fe] text-xs font-bold shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#" className="px-8 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#a855f7] to-[#2563eb] text-white keep-white hover:brightness-110 hover:scale-105 transition-all shadow-[0_8px_30px_-6px_rgba(168,85,247,0.6)]">Apply to Partner →</a>
                <a href="#" className="px-8 py-3.5 rounded-full font-bold text-sm bg-white/5 border border-white/15 text-white hover:bg-white/10 transition">Learn More</a>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-3">
              {brands.slice(0, 4).map((b) => (
                <div key={b.id} className="relative overflow-hidden rounded-xl border border-white/10 group hover:border-white/25 transition">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.img} alt={b.name} className="w-full h-28 object-cover group-hover:scale-[1.05] transition duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <p className="text-xs font-black text-white keep-white">{b.name}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 text-[#4ade80]" fill="currentColor"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                      <span className="text-[9px] text-[#4ade80] keep-white font-bold">Authorized</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. NEWSLETTER ── */}
        <section>
          <div className="relative overflow-hidden rounded-2xl glass-strong p-8 md:p-12">
            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#a855f7] blur-[100px] opacity-20 pointer-events-none animate-pulse" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#2563eb] blur-[100px] opacity-20 pointer-events-none animate-pulse" />
            <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none rounded-2xl" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="chip">Brand Updates</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-black leading-tight">New brands. <span className="text-gradient-strong">First to know.</span></h2>
                <p className="mt-3 text-white/60 text-sm leading-relaxed">Get notified when new brands launch exclusive products, run flash deals, or drop limited editions. Be first every time.</p>
              </div>
              <form className="flex flex-col gap-3" action="#">
                <input type="email" required placeholder="your@email.com" className="h-12 rounded-full bg-white/[0.05] border border-white/10 px-5 text-white placeholder-white/40 outline-none focus:border-[#a855f7] transition text-sm" />
                <button className="h-12 px-7 rounded-full font-bold text-sm bg-gradient-to-r from-[#a855f7] to-[#2563eb] text-white keep-white hover:brightness-110 transition" type="submit">
                  Get Brand Alerts ✨
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
            <a href="/deals" className="hover:text-white transition">Deals</a>
            <a href="/brands" className="text-white">Brands</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
