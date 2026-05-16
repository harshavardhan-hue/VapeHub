import ThemeToggle from "./components/ThemeToggle";
import PromoPopup from "./components/PromoPopup";
import HeroCarousel from "./components/HeroCarousel";
import BrandMarquee from "./components/BrandMarquee";
import ProductSlider from "./components/ProductSlider";
import HomeCountdown from "./components/HomeCountdown";
import { products } from "./shop/data";

/* ═══════════════════════ DATA ═══════════════════════ */

const categoryTiles = [
  "https://s1.phantasm.host/storage/layouts/SGpKSWMtmOFg3AGMtA5s8PhXjYN2bnp5FOHq7SRD.avif",
  "https://s1.phantasm.host/storage/layouts/3SVEDQXJqTh164ozGGfjE5yGrHyrKObXFQ2v2yiw.avif",
  "https://s1.phantasm.host/storage/layouts/nBTebPVYEHymLDies5vJ6i62RhrW6asTO7JSDWV3.avif",
  "https://s1.phantasm.host/storage/layouts/qm6D2upUJQFaawFbGR80MrNuHZdZmJmqOSze4yYX.avif",
  "https://s1.phantasm.host/storage/layouts/AvtnXPaycvOKR5CzvDVN3DmhZJ461a75xqFNynrB.avif",
  "https://s1.phantasm.host/storage/layouts/cWAXgLfkOGzVVVNywKhxE0QIJbqgEJKQwrud4SXj.avif",
  "https://s1.phantasm.host/storage/layouts/AD5mrQ6YiH0beQM8nyNeUZSPNn1Kh0umBTU2Qstv.avif",
  "https://s1.phantasm.host/storage/layouts/pluQi49ubpMIlhg7yFcMV3Ium0sz9ilguuAMLG2v.avif",
  "https://s1.phantasm.host/storage/layouts/4VAsbSHTssDtwQ2J0jJpQHN04WwubNJSFvpOwDLr.avif",
  "https://s1.phantasm.host/storage/layouts/2026/03/V4MnX2kBxkR0bzEDw7wYNEsI6aU1AGOZLY93RNLl.gif",
  "https://s1.phantasm.host/storage/layouts/Je10EsPJfqLp84O6HedmMgBZkuaqkFXiisHE7CDJ.avif",
  "https://s1.phantasm.host/storage/layouts/921aLl70h8ktb5O8Mc08tVI8l0IYZKqOmXTHS8zQ.avif",
];

const categories = [
  { name: "CBD", icon: "🌿" },
  { name: "Batteries", icon: "🔋" },
  { name: "Glass", icon: "🥃" },
  { name: "Cream Chargers", icon: "🧴" },
  { name: "Disposable", icon: "💨", hot: true },
  { name: "E-Liquids", icon: "💧" },
  { name: "Herb / Concentrate", icon: "🌱" },
  { name: "Hydroxy", icon: "⚗️" },
  { name: "Kratom", icon: "🍃", hot: true },
  { name: "Botanicals", icon: "🌾" },
  { name: "Mushroom", icon: "🍄" },
  { name: "Salt Nic", icon: "🧂" },
];

const promoBlocks = [
  {
    label: "⚡ Today Only",
    title: "Flash Sale",
    sub: "Up to 50% OFF select products",
    img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/juice-head-scaled.jpg",
    color: "#ef4444",
    fromColor: "#7f1d1d",
    toColor: "#1a0505",
    cta: "Shop Flash Deals",
    savings: "SAVE UP TO $30",
    href: "/deals",
  },
  {
    label: "🎁 Best Value",
    title: "Bundle & Save",
    sub: "Buy 5 Get 1 FREE on E-Liquids",
    img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Alien_avif.avif",
    color: "#2563eb",
    fromColor: "#1e3a8a",
    toColor: "#050820",
    cta: "Build Your Bundle",
    savings: "FREE ITEM WORTH $15+",
    href: "/deals",
  },
  {
    label: "💥 Limited Stock",
    title: "Clearance",
    sub: "Up to 70% off — ends midnight",
    img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/task-6.avif",
    color: "#a855f7",
    fromColor: "#4c1d95",
    toColor: "#09040f",
    cta: "Shop Clearance",
    savings: "SAVE UP TO $45",
    href: "/deals",
  },
];

const bundles = [
  {
    name: "Starter Pack",
    items: "5 Disposables + FREE 30ml E-Liquid",
    img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/juice-head-scaled.jpg",
    original: 89.95,
    sale: 64.99,
    badge: "BEST VALUE",
    accent: "#2563eb",
    tag: "Most Popular",
    savings: 24.96,
  },
  {
    name: "Cloud Chaser Kit",
    items: "Premium Device + 3× 100ml + Coil Pack",
    img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Alien_avif.avif",
    original: 149.99,
    sale: 99.99,
    badge: "SAVE $50",
    accent: "#ef4444",
    tag: "Fan Favourite",
    savings: 50.0,
  },
  {
    name: "Flavor Explorer",
    items: "10× Assorted 30ml — Mystery Pack",
    img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/task-6.avif",
    original: 79.9,
    sale: 54.99,
    badge: "NEW",
    accent: "#a855f7",
    tag: "Top Rated",
    savings: 24.91,
  },
];

const brandDeals = [
  { name: "JIMMY", img: "https://splash-dev.phantasm.host/wp-content/uploads/2025/12/JIMMY_.jpg", off: 20, accent: "#2563eb" },
  { name: "RAW", img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Raw.jpg", off: 15, accent: "#f59e0b" },
  { name: "Blazy Susan", img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/blazy-susan.jpg", off: 25, accent: "#ec4899" },
  { name: "King Palm", img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/king-palm.jpg", off: 18, accent: "#10b981" },
  { name: "AWS", img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/aws.jpg", off: 30, accent: "#ef4444" },
];

const promoCodes = [
  { code: "VAPEHUB10", title: "10% Off Sitewide", desc: "Valid on all products, all brands", terms: "Min. $30 · Ends Sunday midnight", accent: "#ef4444", emoji: "🔥" },
  { code: "NEWVAPER15", title: "15% Off First Order", desc: "Exclusive welcome discount for new customers", terms: "One-time use · No minimum spend", accent: "#2563eb", emoji: "🎁" },
  { code: "BUNDLE20", title: "20% Off Bundles", desc: "Stack savings on any 3+ same-brand items", terms: "Stackable with sale prices · Limited time", accent: "#a855f7", emoji: "⚡" },
];

const trustItems = [
  { icon: "🚚", label: "Free Shipping", sub: "Orders over $99" },
  { icon: "🏷️", label: "500+ Brands", sub: "All authorized" },
  { icon: "👥", label: "50K+ Customers", sub: "Trusted & loved" },
  { icon: "✅", label: "TX Compliant", sub: "100% verified" },
  { icon: "🔒", label: "Secure Pay", sub: "256-bit SSL" },
];

const testimonials = [
  { name: "Jordan M.", stars: 5, text: "Best vape shop online. Super fast shipping and legit products. VAPEHUB10 always works!", avatar: "J" },
  { name: "Priya S.", stars: 5, text: "Incredible selection. Found my Juice Head flavors and they arrived in 2 days!", avatar: "P" },
  { name: "Marcus T.", stars: 5, text: "Texas compliant, great prices, even better customer service. Won't shop anywhere else.", avatar: "M" },
  { name: "Ashley R.", stars: 5, text: "Buy 5 Get 1 Free is REAL! Got 6 disposables for the price of 5. Massive W.", avatar: "A" },
];

const dealDiscounts = [28, 40, 22, 35, 30, 45];
const dealSaved = [8.4, 16.0, 7.7, 14.0, 9.0, 18.0];
const dealLow = [true, false, true, false, true, false];

/* ═══════════════════════ PAGE ═══════════════════════ */

export default function Home() {
  const hotDeals = products.filter((p) => p.badge).slice(0, 6);
  const featured = products.slice(0, 8);
  const newArrivals = products.slice(10, 16);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <PromoPopup />

      {/* ── Fixed side banners ── */}
      <div className="hidden 2xl:flex fixed top-0 left-0 w-52 h-screen flex-col gap-1 p-1 z-40 overflow-hidden">
        {[categoryTiles[0], categoryTiles[6], categoryTiles[1], categoryTiles[7]].map((src, i) => (
          <FixedSideBanner key={i} src={src} alt={`Promo ${i}`} />
        ))}
      </div>
      <div className="hidden 2xl:flex fixed top-0 right-0 w-52 h-screen flex-col gap-1 p-1 z-40 overflow-hidden">
        {[categoryTiles[3], categoryTiles[9], categoryTiles[4], categoryTiles[10]].map((src, i) => (
          <FixedSideBanner key={i} src={src} alt={`Promo ${i + 4}`} />
        ))}
      </div>

      <div className="flex flex-col flex-1 2xl:ml-52 2xl:mr-52">

        {/* ── Promo Bar ── */}
        <div className="relative overflow-hidden border-b border-white/5 text-[11px] sm:text-[12px]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#ef4444,#f97316,#fbbf24,#ef4444,#2563eb,#a855f7,#ef4444)] bg-[length:400%_100%] animate-bg-pan opacity-95" />
          <div className="relative py-2 overflow-hidden">
            <div className="flex items-center gap-8 animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
              {[
                "🔥 SUMMER MEGA SALE — UP TO 50% OFF",
                "·", "FREE SHIPPING OVER $99",
                "·", "CODE: VAPEHUB10 — EXTRA 10% OFF",
                "·", "BUY 5 GET 1 FREE ON ALL E-LIQUIDS",
                "·", "500+ PREMIUM BRANDS",
                "·", "TEXAS COMPLIANT · SAME-DAY DISPATCH",
                "·", "🔥 SUMMER MEGA SALE — UP TO 50% OFF",
                "·", "FREE SHIPPING OVER $99",
                "·", "CODE: VAPEHUB10 — EXTRA 10% OFF",
                "·", "BUY 5 GET 1 FREE ON ALL E-LIQUIDS",
                "·", "500+ PREMIUM BRANDS",
                "·", "TEXAS COMPLIANT · SAME-DAY DISPATCH",
                "·",
              ].map((t, i) => (
                <span key={i} className={`text-white font-bold tracking-wide keep-white ${t === "·" ? "opacity-40" : ""}`}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Header ── */}
        <header className="sticky top-0 z-50 site-header border-b border-white/10">
          <div className="mx-auto max-w-[1700px] px-3 sm:px-6 h-14 sm:h-16 flex items-center gap-2 sm:gap-4 lg:gap-6">
            <a href="/" className="flex items-center gap-2 shrink-0">
              <span className="relative inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[conic-gradient(from_0deg,#2563eb,#60a5fa,#ef4444,#2563eb)] animate-spin-slow">
                <span className="absolute inset-[2px] rounded-[10px] bg-[#06070f] flex items-center justify-center text-white font-black text-base sm:text-lg">V</span>
              </span>
              <span className="hidden sm:inline text-lg sm:text-xl font-black tracking-tight text-gradient">Vape Hub</span>
            </a>
            <nav className="hidden lg:flex items-center gap-6 text-sm text-white/80">
              <a className="text-white font-semibold border-b-2 border-[#2563eb] pb-0.5" href="/">Home</a>
              <a className="hover:text-white transition hover:border-b-2 hover:border-[#ef4444] pb-0.5" href="/shop">Shop</a>
              <a className="hover:text-white transition hover:border-b-2 hover:border-[#ef4444] pb-0.5 text-[#fca5a5] font-semibold" href="/deals">🔥 Deals</a>
              <a className="hover:text-white transition hover:border-b-2 hover:border-[#a855f7] pb-0.5" href="/brands">Brands</a>
              <a className="hover:text-white transition hover:border-b-2 hover:border-white/60 pb-0.5" href="/slideshow">Slideshow</a>
              <a className="hover:text-white transition pb-0.5" href="#">Support</a>
            </nav>
            <div className="flex-1 min-w-0 max-w-xl">
              <div className="relative">
                <input type="text" placeholder="Search products, brands, flavors…" className="w-full h-9 sm:h-10 rounded-full bg-white/[0.04] border border-white/10 pl-10 pr-3 sm:pr-24 text-sm text-white placeholder-white/40 outline-none focus:border-[#2563eb] focus:bg-white/[0.06] transition" />
                <svg className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <button type="button" className="hidden sm:block absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3 rounded-full text-xs font-semibold bg-gradient-to-r from-[#1d4ed8] to-[#ef4444] text-white keep-white">Search</button>
              </div>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <div className="hidden sm:block"><ThemeToggle /></div>
              <a href="/login" className="hidden sm:block px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-[#ef4444] to-[#2563eb] text-white keep-white hover:brightness-110 transition">Sign In</a>
              <button type="button" aria-label="Cart" className="relative h-10 w-10 rounded-full glass flex items-center justify-center text-white/80 hover:text-white transition">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3h2l2.4 12.3a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="10" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-br from-[#ef4444] to-[#2563eb] text-[10px] font-bold text-white keep-white flex items-center justify-center">3</span>
              </button>
            </div>
          </div>
        </header>

        {/* ══════════════ BODY — NO SIDEBAR ══════════════ */}
        <div className="flex-1 mt-4 sm:mt-6 px-3 sm:px-6 pb-10 space-y-10">

          {/* 1 ── HERO CAROUSEL ── */}
          <section style={{ minHeight: 480 }}>
            <HeroCarousel />
          </section>

          {/* 2 ── FLASH SALE ALERT BAR ── */}
          <section className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7f1d1d] via-[#ef4444] to-[#7f1d1d] bg-[length:200%_100%] animate-bg-pan" />
            <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5">
              <div className="text-center sm:text-left">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-white/70 keep-white">⚡ Summer Mega Sale</p>
                <h2 className="text-2xl sm:text-4xl font-black text-white keep-white leading-none mt-1">
                  UP TO <span className="text-[#fbbf24]">50% OFF</span> — ENDS IN
                </h2>
              </div>
              <HomeCountdown totalSecs={3 * 3600 + 24 * 60 + 56} size="lg" />
              <a href="/deals" className="shrink-0 px-8 py-3 rounded-full bg-white text-[#ef4444] font-black text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:scale-105 transition-all duration-300">
                Shop All Deals →
              </a>
            </div>
          </section>

          {/* 3 ── TRUST STRIP ── */}
          <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {trustItems.map((t, i) => (
              <div key={t.label} className="glass rounded-2xl px-4 py-3 flex items-center gap-3 hover:border-[#2563eb]/40 hover:shadow-[0_8px_24px_-8px_rgba(37,99,235,0.4)] transition-all duration-300 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <span className="text-2xl shrink-0 animate-float" style={{ animationDelay: `${i * 200}ms` }}>{t.icon}</span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white truncate">{t.label}</p>
                  <p className="text-[11px] text-white/50 truncate">{t.sub}</p>
                </div>
              </div>
            ))}
          </section>

          {/* 4 ── 3 PROMO CATEGORY BLOCKS ── */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="chip animate-badge-pop">Deal Categories</span>
                <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">Shop by Offer Type</h2>
              </div>
              <a href="/deals" className="text-sm font-semibold text-gradient hover:opacity-80 transition">All offers →</a>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {promoBlocks.map((b, i) => (
                <a
                  key={b.title}
                  href={b.href}
                  className="group relative overflow-hidden rounded-2xl min-h-[260px] flex flex-col justify-between border border-white/10 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6)] transition-all duration-400 animate-fade-up"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  {/* BG image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.img} alt={b.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition duration-700" loading="lazy" />
                  {/* Gradient overlays */}
                  <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${b.fromColor}ee, ${b.toColor}cc)` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {/* Top label */}
                  <div className="relative z-10 p-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-black uppercase tracking-widest text-white keep-white" style={{ borderColor: `${b.color}60`, background: `${b.color}25` }}>
                      {b.label}
                    </span>
                  </div>
                  {/* Bottom content */}
                  <div className="relative z-10 p-5">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1 keep-white" style={{ color: b.color }}>{b.savings}</p>
                    <h3 className="text-3xl font-black text-white keep-white leading-none">{b.title}</h3>
                    <p className="text-white/70 keep-white text-sm mt-1">{b.sub}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-black text-white keep-white transition-all duration-300 group-hover:scale-105" style={{ background: b.color, boxShadow: `0 0 20px ${b.color}60` }}>
                      {b.cta} →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* 5 ── HOT DEALS GRID ── */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="relative">
                  <div className="absolute -inset-1.5 rounded-full bg-[#ef4444] blur-lg opacity-60 animate-pulse" />
                  <span className="relative px-4 py-2 rounded-full bg-gradient-to-r from-[#ef4444] to-[#dc2626] text-white font-black text-sm uppercase tracking-wider keep-white">
                    🔥 Hot Deals
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {["06", "42", "18"].map((n, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <span className="px-3 py-1.5 rounded-lg bg-[#0d1117] border border-[#ef4444]/30 text-white font-black text-xl tabular-nums shadow-[0_0_14px_rgba(239,68,68,0.3)]">{n}</span>
                      {i < 2 && <span className="text-[#ef4444] font-black text-xl animate-pulse">:</span>}
                    </span>
                  ))}
                </div>
              </div>
              <a href="/deals" className="text-sm font-semibold text-gradient hover:opacity-80 transition">View all →</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {hotDeals.map((p, i) => (
                <DealCard key={p.id} product={p} discount={dealDiscounts[i]} saved={dealSaved[i]} low={dealLow[i]} delay={i * 70} />
              ))}
            </div>
          </section>

          {/* 6 ── BUY 5 GET 1 BANNER ── */}
          <section className="relative overflow-hidden rounded-3xl border border-[#ef4444]/25">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] via-[#0d0d1f] to-[#050820]" />
            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#ef4444] blur-[140px] opacity-20 animate-pulse pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#2563eb] blur-[140px] opacity-20 animate-pulse pointer-events-none" />
            <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
            <div className="relative grid md:grid-cols-2 gap-6 items-center p-8 md:p-14">
              <div className="animate-slide-left">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ef4444]/15 border border-[#ef4444]/30 text-[#fca5a5] text-xs font-black uppercase tracking-wider">
                  🎁 Exclusive Offer · Auto Applied at Checkout
                </span>
                <h2 className="mt-5 text-6xl md:text-8xl font-black text-white keep-white leading-none">
                  Buy <span className="text-[#60a5fa]">5</span><br />
                  Get <span className="text-[#ef4444] animate-glow-red inline-block rounded-xl px-3">1 FREE</span>
                </h2>
                <p className="mt-5 text-white/65 keep-white text-sm leading-relaxed max-w-sm">
                  Mix and match any 5 products from our entire E-Liquids or Disposables range. The lowest-priced item is yours absolutely free — no code needed.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/50">
                  {["✓ Any brand", "✓ Mix flavors", "✓ Auto applied", "✓ No min. spend"].map((f) => (
                    <span key={f} className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{f}</span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="/shop" className="cta-primary !py-3.5 !px-10 !text-sm">Shop Now →</a>
                  <div className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/5 border border-white/10">
                    <span className="text-white/40 text-xs">Stack with code</span>
                    <span className="font-black text-white tracking-widest text-sm">VAPEHUB10</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:grid grid-cols-2 gap-3 animate-slide-right">
                {[
                  "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/juice-head-scaled.jpg",
                  "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Alien_avif.avif",
                  "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/task-6.avif",
                  "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/blazy-susan.jpg",
                ].map((src, i) => (
                  <div key={i} className="relative overflow-hidden rounded-2xl border border-white/10 group hover:border-white/30 transition">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" className="w-full h-40 object-cover group-hover:scale-[1.06] transition duration-500" loading="lazy" />
                    {i === 2 && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <span className="text-4xl font-black text-white keep-white drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]">FREE</span>
                      </div>
                    )}
                    {i !== 2 && <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#ef4444] text-white keep-white text-[10px] font-black shadow-[0_0_10px_rgba(239,68,68,0.6)]">#{i + 1}</div>}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 7 ── TRENDING PRODUCTS SLIDER ── */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="chip animate-badge-pop">Auto-Sliding</span>
                <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">Trending Products</h2>
                <p className="text-white/50 text-sm mt-1">Hover to pause · updates every 3.5s</p>
              </div>
              <a href="/shop" className="text-sm font-semibold text-gradient hover:opacity-80 transition">Browse all →</a>
            </div>
            <ProductSlider />
          </section>

          {/* 8 ── VIDEO DEAL SPOTLIGHT ── */}
          <section className="relative overflow-hidden rounded-2xl border border-white/10">
            <video src="https://splash-dev.phantasm.host/wp-content/uploads/2026/04/FVKD-V2.mp4" className="w-full h-[360px] sm:h-[480px] object-cover" autoPlay muted loop playsInline />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/10" />
            <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16">
              <span className="inline-flex w-fit items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ef4444]/20 border border-[#ef4444]/40 text-[#fca5a5] text-xs font-black uppercase tracking-widest mb-5 animate-badge-pop">
                🚀 Pre-Order · Limited Edition
              </span>
              <h2 className="text-5xl sm:text-7xl font-black text-white keep-white leading-none animate-hero-text">
                FVKD <span className="text-[#ef4444]" style={{ textShadow: '0 0 40px rgba(239,68,68,0.8)' }}>V2</span>
              </h2>
              <p className="mt-3 text-white/70 keep-white max-w-md text-sm sm:text-base leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
                The most anticipated vape drop of 2026. Pre-order now and lock in the launch price before it sells out.
              </p>
              {/* Deal price */}
              <div className="mt-5 flex items-center gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
                <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                  <p className="text-xs text-white/50 keep-white">Pre-order Price</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white keep-white">$29.99</span>
                    <span className="text-sm text-white/40 keep-white line-through">$49.99</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#ef4444] text-white keep-white text-xs font-black">-40%</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-3 animate-fade-up" style={{ animationDelay: '400ms' }}>
                <a href="/shop" className="px-8 py-3.5 rounded-full font-bold text-sm bg-[#ef4444] text-white keep-white hover:bg-[#dc2626] hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_-6px_rgba(239,68,68,0.7)]">
                  Pre-Order Now — $29.99
                </a>
                <a href="/shop" className="px-8 py-3.5 rounded-full font-bold text-sm bg-white/10 border border-white/25 text-white keep-white hover:bg-white/20 transition">
                  Learn More
                </a>
              </div>
            </div>
            {/* Savings badge */}
            <div className="absolute top-5 right-5 flex flex-col items-center justify-center h-20 w-20 rounded-full bg-[#fbbf24] shadow-[0_0_30px_rgba(251,191,36,0.6)] animate-badge-pop">
              <span className="text-black font-black text-xl leading-none">40%</span>
              <span className="text-black font-black text-[10px] uppercase tracking-widest">OFF</span>
            </div>
          </section>

          {/* 9 ── PROMO CODES ── */}
          <section>
            <div className="text-center mb-7">
              <span className="chip animate-badge-pop">Exclusive Codes</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">Your Discount Codes</h2>
              <p className="text-white/50 text-sm mt-1">Copy any code · auto-applies at checkout</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {promoCodes.map((c, i) => (
                <div
                  key={c.code}
                  className="relative overflow-hidden rounded-2xl border border-white/10 p-6 glass-strong hover:border-white/20 hover:-translate-y-1 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Glow blob */}
                  <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full blur-[40px] opacity-30 pointer-events-none" style={{ background: c.accent }} />
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{c.emoji}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-black border keep-white" style={{ borderColor: `${c.accent}50`, background: `${c.accent}20`, color: c.accent }}>
                      ACTIVE
                    </span>
                  </div>
                  <h3 className="font-black text-white text-base">{c.title}</h3>
                  <p className="text-white/55 text-xs mt-1 leading-relaxed">{c.desc}</p>
                  {/* Code display */}
                  <div className="mt-4 flex items-center gap-2">
                    <div
                      className="flex-1 flex items-center justify-center py-3 rounded-xl border font-black text-white text-lg tracking-[0.2em] keep-white"
                      style={{ borderColor: `${c.accent}50`, background: `${c.accent}15`, fontFamily: 'monospace' }}
                    >
                      {c.code}
                    </div>
                  </div>
                  <p className="text-white/30 text-[10px] mt-2">{c.terms}</p>
                  <a href="/shop" className="mt-3 flex items-center justify-center w-full py-2.5 rounded-xl text-xs font-black text-white keep-white transition hover:brightness-110" style={{ background: c.accent }}>
                    Use Code & Shop →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* 10 ── FEATURED DEALS ── */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="chip">Top Picks · On Sale</span>
                <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight animate-slide-left">Featured Deals</h2>
                <p className="text-white/50 text-sm mt-1">Hand-picked — all discounted this week</p>
              </div>
              <a href="/shop" className="text-sm font-semibold text-gradient hover:opacity-80 transition">Shop all →</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {featured.map((p, i) => (
                <ProductCard key={p.id} product={p} delay={i * 60} />
              ))}
            </div>
          </section>

          {/* 11 ── BUNDLE DEALS ── */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="chip">Maximum Savings</span>
                <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">Bundle Deals</h2>
                <p className="text-white/50 text-sm mt-1">Curated packs — save more, get more</p>
              </div>
              <a href="/deals" className="text-sm font-semibold text-gradient hover:opacity-80 transition">All bundles →</a>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {bundles.map((b, i) => (
                <a
                  key={b.name}
                  href="/deals"
                  className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/25 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.7)] transition-all duration-300 animate-fade-up bg-gradient-to-b from-white/[0.05] to-white/[0.01]"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-44">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={b.img} alt={b.name} className="w-full h-full object-cover group-hover:scale-[1.07] transition duration-600" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    {/* Savings badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-black text-white keep-white shadow-[0_0_12px_rgba(0,0,0,0.5)]" style={{ background: b.accent }}>
                        {b.badge}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-[#fbbf24] text-black text-[10px] font-black">
                      SAVE ${b.savings.toFixed(0)}
                    </div>
                    {/* Tag */}
                    <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-full bg-white/15 border border-white/20 text-white keep-white text-[10px] font-semibold backdrop-blur-sm">
                      {b.tag}
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-black text-white text-base">{b.name}</h3>
                    <p className="text-white/55 text-xs mt-1">{b.items}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-black text-[#60a5fa]">${b.sale.toFixed(2)}</span>
                        <span className="text-sm text-white/30 line-through ml-2">${b.original.toFixed(2)}</span>
                      </div>
                      <span className="text-xs font-black px-3 py-1 rounded-full text-white keep-white" style={{ background: b.accent }}>
                        Get Bundle →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* 12 ── BRAND DEALS ── */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="chip">Partner Brands</span>
                <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">Brand Sale</h2>
                <p className="text-white/50 text-sm mt-1">Exclusive discounts on your favourite brands</p>
              </div>
              <a href="/brands" className="text-sm font-semibold text-gradient hover:opacity-80 transition">All brands →</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {brandDeals.map((b, i) => (
                <a
                  key={b.name}
                  href="/brands"
                  className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/30 hover:-translate-y-1.5 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.img} alt={b.name} className="block w-full h-44 object-cover group-hover:scale-[1.07] transition duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  {/* % OFF badge */}
                  <div className="absolute top-3 right-3 h-14 w-14 rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]" style={{ background: b.accent }}>
                    <span className="text-white keep-white font-black text-lg leading-none">{b.off}%</span>
                    <span className="text-white/80 keep-white font-black text-[9px] uppercase">OFF</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-sm font-black text-white keep-white">{b.name}</p>
                    <p className="text-[10px] text-white/60 keep-white">All {b.name} products</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* 13 ── NEW ARRIVALS ── */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="chip">Just Landed 🚀</span>
                <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">New Arrivals</h2>
                <p className="text-white/50 text-sm mt-1">Fresh drops — selling out fast</p>
              </div>
              <a href="/shop" className="text-sm font-semibold text-gradient hover:opacity-80 transition">See all new →</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {newArrivals.map((p, i) => (
                <ProductCard key={p.id} product={p} delay={i * 70} />
              ))}
            </div>
          </section>

          {/* 14 ── GIF + STATS ── */}
          <section className="grid md:grid-cols-2 gap-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Task-10roadtrip.gif" alt="Road Trip" className="w-full h-full object-cover min-h-[280px] group-hover:scale-[1.04] transition duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="chip !bg-[#f59e0b]/20 !border-[#f59e0b]/40 text-[#fde68a] mb-3">🛣️ Road Trip Collection</span>
                <h3 className="text-2xl font-black text-white keep-white">On-The-Go Flavors</h3>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-2xl font-black text-[#fbbf24]">30% OFF</span>
                  <a href="/shop" className="px-5 py-2 rounded-full text-xs font-bold bg-[#f59e0b] text-black keep-white hover:brightness-110 transition">Shop Now →</a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50K+", label: "Happy Customers", icon: "👥", color: "#2563eb" },
                { value: "500+", label: "Premium Brands", icon: "🏆", color: "#ef4444" },
                { value: "10K+", label: "Products", icon: "📦", color: "#a855f7" },
                { value: "99%", label: "Satisfaction", icon: "⭐", color: "#f59e0b" },
              ].map((s, i) => (
                <div key={s.label} className="glass rounded-2xl p-5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <span className="text-3xl">{s.icon}</span>
                  <div>
                    <p className="text-3xl font-black" style={{ color: s.color }}>{s.value}</p>
                    <p className="text-sm text-white/60 mt-0.5">{s.label}</p>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden mt-3">
                    <div className="h-full rounded-full origin-left" style={{ background: s.color, animation: 'bar-grow 1.5s ease-out both', animationDelay: `${i * 200 + 300}ms` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 15 ── BRAND MARQUEE ── */}
          <section>
            <div className="mb-4">
              <span className="chip">500+ Partners</span>
              <h2 className="mt-2 text-2xl font-black">Featured Brands</h2>
            </div>
            <BrandMarquee />
          </section>

          {/* 16 ── CATEGORY TILES ── */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="chip">Browse</span>
                <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">Shop by Category</h2>
              </div>
              <a href="/shop" className="text-sm font-semibold text-gradient hover:opacity-80">All categories →</a>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {categories.map((cat, i) => (
                <a key={cat.name} href="#" className="group relative block rounded-2xl overflow-hidden border border-white/10 hover:border-[#2563eb]/50 hover:shadow-[0_18px_40px_-12px_rgba(37,99,235,0.55)] transition-all duration-300 hover:-translate-y-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={categoryTiles[i]} alt={cat.name} className="block w-full h-full object-cover aspect-square group-hover:scale-[1.08] transition duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
                    <p className="text-[11px] font-bold text-white keep-white uppercase tracking-wide leading-tight truncate">{cat.name}</p>
                    {cat.hot && <span className="text-[9px] font-black text-[#fca5a5] keep-white">HOT 🔥</span>}
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* 17 ── TESTIMONIALS ── */}
          <section>
            <div className="mb-5 text-center">
              <span className="chip mx-auto">Customer Love ❤️</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black">50,000+ Happy Customers</h2>
              <p className="text-white/50 text-sm mt-1">Real reviews · No paid endorsements</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {testimonials.map((t, i) => (
                <div key={t.name} className="glass rounded-2xl p-5 flex flex-col gap-3 hover:border-[#2563eb]/30 hover:-translate-y-1 transition-all duration-300 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="flex">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <svg key={j} viewBox="0 0 20 20" className="h-4 w-4 text-[#fbbf24]" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-white/75 leading-relaxed flex-1">&quot;{t.text}&quot;</p>
                  <div className="flex items-center gap-2 pt-1 border-t border-white/5">
                    <span className="h-8 w-8 rounded-full bg-gradient-to-br from-[#2563eb] to-[#ef4444] flex items-center justify-center text-white keep-white text-xs font-black">{t.avatar}</span>
                    <span className="text-sm font-semibold text-white/80">{t.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 18 ── NEWSLETTER ── */}
          <section>
            <div className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-14">
              <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#60a5fa] blur-[120px] opacity-30 pointer-events-none animate-pulse" />
              <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#ef4444] blur-[120px] opacity-30 pointer-events-none animate-pulse" />
              <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none rounded-3xl" />
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="chip">Get 10% Off · Join Free</span>
                  <h2 className="mt-3 text-3xl md:text-5xl font-black leading-tight">
                    Get drops <span className="text-gradient-strong">before</span><br className="hidden sm:block" /> they go live.
                  </h2>
                  <p className="mt-3 text-white/65 max-w-md text-sm leading-relaxed">
                    Flash sales, brand collabs, members-only combos. Plus <b className="text-white">10% off</b> your first order when you join today.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/50">
                    {["✓ No spam", "✓ Unsubscribe anytime", "✓ Exclusive deals only"].map((f) => (
                      <span key={f}>{f}</span>
                    ))}
                  </div>
                </div>
                <form className="flex flex-col gap-3" action="#">
                  <input type="email" required placeholder="your@email.com" className="h-12 rounded-full bg-white/[0.05] border border-white/10 px-5 text-white placeholder-white/40 outline-none focus:border-[#2563eb] transition text-sm" />
                  <button className="cta-primary !h-12 !px-7 !text-sm" type="submit">
                    Subscribe & Get 10% Off 🎉
                  </button>
                </form>
              </div>
            </div>
          </section>

        </div>{/* end body */}

        {/* ── Footer ── */}
        <footer className="mt-16 border-t border-white/5 bg-[#04050c]/60 backdrop-blur-md">
          <div className="mx-auto max-w-[1700px] px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
            <div className="col-span-2">
              <div className="flex items-center gap-2">
                <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[conic-gradient(from_0deg,#2563eb,#60a5fa,#ef4444,#2563eb)]">
                  <span className="absolute inset-[2px] rounded-[10px] bg-[#06070f] flex items-center justify-center text-white font-black">V</span>
                </span>
                <span className="text-lg font-black tracking-tight text-gradient">Vape Hub</span>
              </div>
              <p className="mt-3 text-white/60 max-w-sm text-sm leading-relaxed">Premium vape & smoke products. Authorized resellers for 500+ global brands. Texas compliant & verified.</p>
              <div className="mt-4 flex items-center gap-2">
                {["X", "IG", "YT", "TT", "DC"].map((s) => (
                  <a key={s} href="#" className="h-9 w-9 rounded-full glass flex items-center justify-center text-xs font-bold text-white/80 hover:text-white hover:border-white/30 transition">{s}</a>
                ))}
              </div>
            </div>
            <FooterCol title="Shop" links={["New Arrivals", "Flash Deals", "Disposable", "E-Liquids", "Bundles"]} />
            <FooterCol title="Support" links={["Help Center", "Track Order", "Returns", "Warranty", "Contact"]} />
            <FooterCol title="Company" links={["About Us", "Careers", "Press", "Texas Compliance", "Affiliates"]} />
          </div>
          <div className="border-t border-white/5">
            <div className="mx-auto max-w-[1700px] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
              <p>© 2026 Vape Hub. All rights reserved.</p>
              <div className="flex items-center gap-5">
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Terms</a>
                <a href="#" className="hover:text-white">Cookies</a>
              </div>
            </div>
          </div>
        </footer>

      </div>{/* end 2xl wrapper */}
    </div>
  );
}

/* ═══════════════════════ SUB-COMPONENTS ═══════════════════════ */

function DealCard({
  product,
  discount,
  saved,
  low = false,
  delay = 0,
}: {
  product: typeof products[0];
  discount: number;
  saved: number;
  low?: boolean;
  delay?: number;
}) {
  return (
    <a
      href={`/shop/${product.id}`}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 hover:border-[#ef4444]/60 bg-gradient-to-b from-white/[0.05] to-white/[0.01] hover:shadow-[0_20px_50px_-12px_rgba(239,68,68,0.4)] transition-all duration-300 hover:-translate-y-1.5 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-[1.09] transition duration-500" loading="lazy" />
        {/* Big % badge */}
        <div className="absolute top-2 left-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-black bg-[#ef4444] text-white keep-white shadow-[0_0_12px_rgba(239,68,68,0.6)]">-{discount}%</span>
        </div>
        {/* Savings */}
        <div className="absolute bottom-2 left-2">
          <span className="px-2 py-0.5 rounded-lg bg-[#fbbf24] text-black text-[9px] font-black">SAVE ${saved.toFixed(2)}</span>
        </div>
        {low && (
          <div className="absolute top-2 right-2">
            <span className="px-1.5 py-0.5 rounded-full bg-[#7f1d1d]/80 border border-[#ef4444]/40 text-[#fca5a5] text-[8px] font-black uppercase tracking-wide">Low Stock</span>
          </div>
        )}
        {/* CTA overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40">
          <span className="px-4 py-2 rounded-full bg-[#ef4444] text-white keep-white font-black text-xs shadow-[0_0_20px_rgba(239,68,68,0.7)]">Add to Cart</span>
        </div>
      </div>
      {/* Info */}
      <div className="p-2.5 flex flex-col gap-1 flex-1">
        <p className="text-[9px] text-white/40 uppercase tracking-wider truncate">{product.category}</p>
        <p className="text-xs font-semibold text-white/90 leading-snug line-clamp-2 group-hover:text-white transition">{product.name}</p>
        <div className="mt-auto pt-1.5 flex items-center justify-between gap-1">
          <span className="text-sm font-black text-[#60a5fa]">${product.price.toFixed(2)}</span>
          {product.original && <span className="text-[10px] text-white/25 line-through">${product.original.toFixed(2)}</span>}
        </div>
      </div>
    </a>
  );
}

function ProductCard({
  product,
  delay = 0,
}: {
  product: typeof products[0];
  delay?: number;
}) {
  const discount = product.original ? Math.round((1 - product.price / product.original) * 100) : null;
  return (
    <a
      href={`/shop/${product.id}`}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 hover:border-[#2563eb]/60 bg-gradient-to-b from-white/[0.05] to-white/[0.01] hover:shadow-[0_24px_64px_-12px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-1.5 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden aspect-square">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-[1.08] transition duration-500" loading="lazy" />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.badge && <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-[#ef4444] text-white keep-white">{product.badge}</span>}
          {discount && <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#fbbf24]/90 text-black">-{discount}%</span>}
        </div>
        <span className="absolute top-2 right-2 h-7 w-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-[#ef4444] opacity-0 group-hover:opacity-100 transition keep-white">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition duration-300">
          <span className="block w-full py-2 rounded-xl text-xs font-bold bg-[#2563eb] text-white keep-white text-center shadow-[0_4px_16px_rgba(37,99,235,0.6)]">Add to Cart</span>
        </div>
      </div>
      <div className="p-3 flex flex-col gap-1 flex-1">
        <p className="text-[11px] text-white/40 uppercase tracking-wider truncate">{product.category}</p>
        <p className="text-sm font-semibold text-white/90 leading-snug line-clamp-2 group-hover:text-white transition">{product.name}</p>
        <div className="flex items-center gap-1 mt-0.5">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" className={`h-3 w-3 ${i < Math.round(product.rating) ? 'text-[#fbbf24]' : 'text-white/15'}`} fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[10px] text-white/40">({product.reviews})</span>
        </div>
        <div className="mt-auto pt-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="text-base font-black text-[#60a5fa]">${product.price.toFixed(2)}</span>
            {product.original && <span className="text-xs text-white/30 line-through">${product.original.toFixed(2)}</span>}
          </div>
        </div>
      </div>
    </a>
  );
}

function FixedSideBanner({ src, alt }: { src: string; alt: string }) {
  return (
    <a href="#" className="relative flex-1 block overflow-hidden rounded-xl border border-white/10 hover:border-white/25 transition group min-h-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500" loading="lazy" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
    </a>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold">{title}</h4>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l}><a href="#" className="text-white/70 hover:text-white transition text-sm">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
