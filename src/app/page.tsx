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

const trustItems = [
  { icon: "📋", label: "Licensed Distributor", sub: "All brands authorized" },
  { icon: "💳", label: "Net 30 Terms", sub: "Approved accounts" },
  { icon: "📦", label: "Volume Pricing", sub: "12+ unit tiers" },
  { icon: "👤", label: "Account Manager", sub: "Dedicated support" },
  { icon: "✅", label: "TX Compliant", sub: "100% verified" },
];

const pricingTiers = [
  { qty: "12 Units", label: "1 Case", price: 8.49, msrp: 9.99, savings: 15, badge: null, color: "#2563eb", popular: false },
  { qty: "24 Units", label: "2 Cases", price: 7.99, msrp: 9.99, savings: 20, badge: "Most Ordered", color: "#a855f7", popular: true },
  { qty: "48 Units", label: "4 Cases", price: 7.49, msrp: 9.99, savings: 25, badge: "Best Margin", color: "#ef4444", popular: false },
  { qty: "96+ Units", label: "8+ Cases", price: 6.99, msrp: 9.99, savings: 30, badge: "Max Savings", color: "#f59e0b", popular: false },
];

const promoBlocks = [
  {
    label: "🎯 Distributor Exclusive",
    title: "Pallet Deals",
    sub: "Full pallet pricing — up to 40% off MSRP",
    img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/juice-head-scaled.jpg",
    color: "#ef4444",
    fromColor: "#7f1d1d",
    toColor: "#1a0505",
    cta: "View Pallet Pricing",
    savings: "SAVE UP TO 40% OFF MSRP",
    href: "/deals",
  },
  {
    label: "🔄 Overstock Clearance",
    title: "Lot Clearance",
    sub: "End-of-line lots — deep wholesale pricing",
    img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Alien_avif.avif",
    color: "#2563eb",
    fromColor: "#1e3a8a",
    toColor: "#050820",
    cta: "Browse Clearance Lots",
    savings: "LOTS FROM $299",
    href: "/deals",
  },
  {
    label: "🚀 First Allocation",
    title: "New Season Stock",
    sub: "Secure your allocation before public launch",
    img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/task-6.avif",
    color: "#a855f7",
    fromColor: "#4c1d95",
    toColor: "#09040f",
    cta: "Pre-Allocate Inventory",
    savings: "10% EARLY-BIRD OFF",
    href: "/deals",
  },
];

const accountTiers = [
  {
    name: "Bronze",
    moq: "$500",
    color: "#cd7f32",
    icon: "🥉",
    perks: ["Standard wholesale pricing", "Email support (48h SLA)", "Full product catalog", "15-day payment terms"],
    badge: null,
    cta: "Your Current Tier",
    isCurrent: true,
  },
  {
    name: "Silver",
    moq: "$2,500",
    color: "#94a3b8",
    icon: "🥈",
    perks: ["5% off wholesale price", "Priority support (24h)", "Early new-stock access", "Net 15 payment terms"],
    badge: "Recommended",
    cta: "Upgrade to Silver",
    isCurrent: false,
  },
  {
    name: "Gold",
    moq: "$7,500",
    color: "#fbbf24",
    icon: "🥇",
    perks: ["10% off wholesale price", "Dedicated account rep", "Custom allocation priority", "Net 30 payment terms"],
    badge: "Most Popular",
    cta: "Upgrade to Gold",
    isCurrent: false,
  },
  {
    name: "Platinum",
    moq: "$20,000",
    color: "#a855f7",
    icon: "💎",
    perks: ["15% off wholesale price", "White-glove service", "Net 45 payment terms", "Co-op advertising fund", "Custom pricing available"],
    badge: "Enterprise",
    cta: "Contact Sales",
    isCurrent: false,
  },
];

const casePacks = [
  {
    name: "Disposable Case Pack",
    items: "24× Mixed Disposables — 4 Flavors × 6 Units",
    img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/juice-head-scaled.jpg",
    msrp: 287.76,
    wholesale: 191.84,
    badge: "BEST SELLER",
    accent: "#2563eb",
    tag: "Highest Turnover",
    savings: 95.92,
    moq: "1 case minimum",
    margin: "34%",
  },
  {
    name: "E-Liquid Master Case",
    items: "48× 30ml Bottles — Assorted Premium Brands",
    img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Alien_avif.avif",
    msrp: 479.52,
    wholesale: 299.99,
    badge: "SAVE $180",
    accent: "#ef4444",
    tag: "High Margin",
    savings: 179.53,
    moq: "1 case minimum",
    margin: "37%",
  },
  {
    name: "Accessories Bundle",
    items: "100-Piece Assorted Accessories — Display Ready",
    img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/task-6.avif",
    msrp: 350.00,
    wholesale: 224.99,
    badge: "NEW",
    accent: "#a855f7",
    tag: "Fast Moving",
    savings: 125.01,
    moq: "1 bundle minimum",
    margin: "36%",
  },
];

const brandDeals = [
  { name: "JIMMY", img: "https://splash-dev.phantasm.host/wp-content/uploads/2025/12/JIMMY_.jpg", off: 20, accent: "#2563eb" },
  { name: "RAW", img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Raw.jpg", off: 15, accent: "#f59e0b" },
  { name: "Blazy Susan", img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/blazy-susan.jpg", off: 25, accent: "#ec4899" },
  { name: "King Palm", img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/king-palm.jpg", off: 18, accent: "#10b981" },
  { name: "AWS", img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/aws.jpg", off: 30, accent: "#ef4444" },
];

const wholesaleStats = [
  { value: "500+", label: "Active Retailers", icon: "🏪", color: "#2563eb" },
  { value: "10K+", label: "SKUs In Stock", icon: "📦", color: "#ef4444" },
  { value: "98%", label: "Order Fill Rate", icon: "✅", color: "#10b981" },
  { value: "Net 30", label: "Payment Terms", icon: "💳", color: "#f59e0b" },
];

const testimonials = [
  { name: "Mike H.", biz: "Summit Smoke Shop · Dallas TX", stars: 5, text: "Switched to American Distributors 8 months ago. Our margins jumped from 28% to 41% on disposables. The volume tiers are unmatched.", avatar: "M" },
  { name: "Sarah K.", biz: "CloudVape Retail · Austin TX", stars: 5, text: "Gold tier means first allocation on new drops. We haven't run out of a bestseller in 6 months. That's real value.", avatar: "S" },
  { name: "James T.", biz: "GT Distribution · Houston TX", stars: 5, text: "Net 30 terms and a dedicated rep changed our cash flow. This is how a B2B wholesale platform should work.", avatar: "J" },
  { name: "Priya N.", biz: "Texas Smoke Co. · San Antonio TX", stars: 5, text: "Pallet pricing on E-Liquids gave us a 35% retail margin. Our regulars notice the difference — and so does our P&L.", avatar: "P" },
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

      {/* ── Wholesale Announcement Bar ── */}
      <div className="relative overflow-hidden border-b border-white/5 text-[11px] sm:text-[12px]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#1e3a8a,#2563eb,#1d4ed8,#1e3a8a)] bg-[length:400%_100%] animate-bg-pan opacity-95" />
        <div className="relative py-2 overflow-hidden">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
            {[
              "🏢 AUTHORIZED WHOLESALE DISTRIBUTOR PORTAL",
              "·", "NET 30 PAYMENT TERMS — APPROVED ACCOUNTS",
              "·", "VOLUME DISCOUNTS UP TO 35% OFF MSRP",
              "·", "FREE LTL FREIGHT ON ORDERS $2,500+",
              "·", "500+ AUTHORIZED BRANDS — TX COMPLIANT",
              "·", "MOQ FROM $500 · PALLET PRICING AVAILABLE",
              "·", "DEDICATED ACCOUNT MANAGER ON EVERY ORDER",
              "·", "🏢 AUTHORIZED WHOLESALE DISTRIBUTOR PORTAL",
              "·", "NET 30 PAYMENT TERMS — APPROVED ACCOUNTS",
              "·", "VOLUME DISCOUNTS UP TO 35% OFF MSRP",
              "·", "FREE LTL FREIGHT ON ORDERS $2,500+",
              "·", "500+ AUTHORIZED BRANDS — TX COMPLIANT",
              "·", "MOQ FROM $500 · PALLET PRICING AVAILABLE",
              "·", "DEDICATED ACCOUNT MANAGER ON EVERY ORDER",
              "·",
            ].map((t, i) => (
              <span key={i} className={`text-white font-bold tracking-wide keep-white ${t === "·" ? "opacity-30" : ""}`}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 site-header border-b border-white/10">
        <div className="mx-auto max-w-[1700px] px-3 sm:px-6 h-14 sm:h-16 flex items-center gap-2 sm:gap-4 lg:gap-6">
          <a href="/" className="flex items-center gap-3 shrink-0 group">
            {/* Logo — spinning gradient ring */}
            <div className="relative inline-flex items-center justify-center shrink-0">
              <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,#2563eb,#60a5fa,#ef4444,#fbbf24,#2563eb)] animate-spin-slow opacity-80 group-hover:opacity-100 transition" />
              <div className="relative bg-[#06070f] rounded-[10px] p-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://s1.phantasm.host/storage/layouts/kpZKCKHtbspVvwoAENnelAJE7ueZgHNvRCdHCUvj.png" alt="American Distributors LLC" className="h-8 sm:h-9 w-auto object-contain" />
              </div>
            </div>
            {/* Brand text */}
            <div className="hidden sm:flex flex-col leading-none gap-1">
              <span className="text-sm font-black tracking-tight text-gradient-strong leading-none">American Distributors LLC</span>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb] animate-pulse shrink-0" />
                <span className="text-[9px] text-[#60a5fa] font-bold uppercase tracking-widest">Wholesale Portal</span>
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-5 text-sm text-white/80">
            <a className="text-white font-semibold border-b-2 border-[#2563eb] pb-0.5" href="/">Dashboard</a>
            <a className="hover:text-white transition hover:border-b-2 hover:border-[#ef4444] pb-0.5" href="/shop">Catalog</a>
            <a className="hover:text-white transition hover:border-b-2 hover:border-[#ef4444] pb-0.5 text-[#fca5a5] font-semibold" href="/deals">🔥 Deals</a>
            <a className="hover:text-white transition hover:border-b-2 hover:border-[#a855f7] pb-0.5" href="/brands">Brands</a>
            <a className="hover:text-white transition hover:border-b-2 hover:border-white/60 pb-0.5" href="#">My Orders</a>
            <a className="hover:text-white transition pb-0.5 text-[#60a5fa]" href="#">Account Manager</a>
          </nav>

          <div className="flex-1 min-w-0 max-w-xl">
            <div className="relative">
              <input type="text" placeholder="Search 10,000+ SKUs, brands, categories…" className="w-full h-9 sm:h-10 rounded-full bg-white/[0.04] border border-white/10 pl-10 pr-3 sm:pr-24 text-sm text-white placeholder-white/40 outline-none focus:border-[#2563eb] focus:bg-white/[0.06] transition" />
              <svg className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <button type="button" className="hidden sm:block absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3 rounded-full text-xs font-semibold bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] text-white keep-white">Search</button>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fbbf24]/10 border border-[#fbbf24]/25">
              <span className="text-[10px] text-[#fbbf24] font-black uppercase tracking-widest">🥉 Bronze</span>
            </div>
            <a href="/login" className="hidden sm:block px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white keep-white hover:brightness-110 transition">My Account</a>
            <button type="button" aria-label="Cart" className="relative h-10 w-10 rounded-full glass flex items-center justify-center text-white/80 hover:text-white transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3h2l2.4 12.3a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="10" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-br from-[#ef4444] to-[#2563eb] text-[10px] font-bold text-white keep-white flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </header>

      {/* ══════════════ BODY ══════════════ */}
      <div className="flex-1 mt-4 sm:mt-6 px-3 sm:px-6 pb-10 space-y-10">

        {/* 1 ── HERO CAROUSEL ── */}
        <section style={{ minHeight: 480 }}>
          <HeroCarousel />
        </section>

        {/* 2 ── WHOLESALE FLASH DEAL BAR ── */}
        <section className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#1e3a8a] bg-[length:200%_100%] animate-bg-pan" />
          <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5">
            <div className="text-center sm:text-left">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-white/70 keep-white">📦 New Season Wholesale Drop</p>
              <h2 className="text-2xl sm:text-4xl font-black text-white keep-white leading-none mt-1">
                BULK PRICING — SAVE UP TO <span className="text-[#fbbf24]">35% OFF MSRP</span> — ENDS IN
              </h2>
            </div>
            <HomeCountdown totalSecs={5 * 3600 + 47 * 60 + 30} size="lg" />
            <a href="/deals" className="shrink-0 px-8 py-3 rounded-full bg-white text-[#2563eb] font-black text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300">
              Order Now →
            </a>
          </div>
        </section>

        {/* 3 ── B2B TRUST STRIP ── */}
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

        {/* 4 ── VOLUME PRICING TIERS ── */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="chip animate-badge-pop">📊 Wholesale Pricing</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">Volume Pricing Tiers</h2>
              <p className="text-white/50 text-sm mt-1">The more you order, the more you save — pricing auto-applies at checkout</p>
            </div>
            <a href="/shop" className="text-sm font-semibold text-gradient hover:opacity-80 transition hidden sm:inline">See all products →</a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pricingTiers.map((tier, i) => (
              <div
                key={tier.qty}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 animate-fade-up ${
                  tier.popular
                    ? 'border-white/30 shadow-[0_0_40px_-8px_rgba(168,85,247,0.5)]'
                    : 'border-white/10 hover:border-white/25'
                }`}
                style={{ animationDelay: `${i * 100}ms`, background: tier.popular ? `linear-gradient(180deg, ${tier.color}18, ${tier.color}08)` : 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))' }}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${tier.color}, transparent)` }} />
                )}
                {tier.badge && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-black text-white keep-white" style={{ background: tier.color }}>
                    {tier.badge}
                  </div>
                )}

                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-white/50">{tier.label}</p>
                    <p className="text-2xl font-black text-white mt-1">{tier.qty}</p>
                  </div>

                  {/* Price display */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black" style={{ color: tier.color }}>${tier.price.toFixed(2)}</span>
                      <span className="text-sm text-white/40 font-semibold">/ unit</span>
                    </div>
                    <p className="text-xs text-white/40 mt-1">MSRP ${tier.msrp.toFixed(2)} · You save <span className="text-[#fbbf24] font-bold">{tier.savings}%</span></p>
                  </div>

                  {/* Case total */}
                  <div className="py-3 px-4 rounded-xl mb-4" style={{ background: `${tier.color}15`, border: `1px solid ${tier.color}30` }}>
                    <p className="text-xs text-white/50">Case total</p>
                    <p className="text-lg font-black text-white">${(tier.price * parseInt(tier.qty)).toFixed(2)}</p>
                  </div>

                  {/* Savings pill */}
                  <div className="flex items-center gap-2 mb-5">
                    <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: tier.color }} />
                    <p className="text-xs font-semibold text-white/60">{tier.savings}% below MSRP — <span className="text-white">${((tier.msrp - tier.price) * parseInt(tier.qty)).toFixed(2)} saved</span></p>
                  </div>

                  <a href="/shop" className="flex items-center justify-center w-full py-2.5 rounded-xl text-xs font-black text-white keep-white transition hover:brightness-110 hover:scale-[1.02]" style={{ background: tier.color }}>
                    Order at This Tier →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Tier note */}
          <div className="mt-4 flex flex-wrap items-center gap-6 px-2 text-xs text-white/40">
            {["✓ Pricing auto-applies at checkout", "✓ Mix SKUs within category", "✓ No code required", "✓ Stack with account tier discount"].map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
        </section>

        {/* 5 ── 3 WHOLESALE PROMO BLOCKS ── */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="chip animate-badge-pop">Wholesale Offers</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">Current Wholesale Programs</h2>
            </div>
            <a href="/deals" className="text-sm font-semibold text-gradient hover:opacity-80 transition">All programs →</a>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {promoBlocks.map((b, i) => (
              <a
                key={b.title}
                href={b.href}
                className="group relative overflow-hidden rounded-2xl min-h-[260px] flex flex-col justify-between border border-white/10 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6)] transition-all duration-400 animate-fade-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.img} alt={b.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition duration-700" loading="lazy" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${b.fromColor}ee, ${b.toColor}cc)` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="relative z-10 p-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-black uppercase tracking-widest text-white keep-white" style={{ borderColor: `${b.color}60`, background: `${b.color}25` }}>
                    {b.label}
                  </span>
                </div>
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

        {/* 6 ── HOT WHOLESALE DEALS GRID ── */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="relative">
                <div className="absolute -inset-1.5 rounded-full bg-[#ef4444] blur-lg opacity-60 animate-pulse" />
                <span className="relative px-4 py-2 rounded-full bg-gradient-to-r from-[#ef4444] to-[#dc2626] text-white font-black text-sm uppercase tracking-wider keep-white">
                  🔥 Flash Wholesale
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
              <span className="text-xs text-white/40">· Deep wholesale discounts</span>
            </div>
            <a href="/deals" className="text-sm font-semibold text-gradient hover:opacity-80 transition">View all →</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {hotDeals.map((p, i) => (
              <DealCard key={p.id} product={p} discount={dealDiscounts[i]} saved={dealSaved[i]} low={dealLow[i]} delay={i * 70} />
            ))}
          </div>
        </section>

        {/* 7 ── CASE VOLUME SAVINGS BANNER ── */}
        <section className="relative overflow-hidden rounded-3xl border border-[#2563eb]/25">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050820] via-[#0d0d1f] to-[#04060f]" />
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#2563eb] blur-[140px] opacity-15 animate-pulse pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#ef4444] blur-[140px] opacity-15 animate-pulse pointer-events-none" />
          <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
          <div className="relative grid md:grid-cols-2 gap-6 items-center p-8 md:p-14">
            <div className="animate-slide-left">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2563eb]/15 border border-[#2563eb]/30 text-[#93c5fd] text-xs font-black uppercase tracking-wider">
                📦 Case-Level Pricing · Auto-Applied
              </span>
              <h2 className="mt-5 font-black text-white keep-white leading-none">
                <span className="text-6xl md:text-7xl text-[#60a5fa]">Order 1</span><br />
                <span className="text-4xl md:text-5xl">case, save </span>
                <span className="text-5xl md:text-6xl text-[#fbbf24]">15%</span>
              </h2>
              <p className="mt-4 text-white/65 keep-white text-sm leading-relaxed max-w-sm">
                Tiered case pricing applies automatically across all categories. Mix SKUs within a category — your discount scales with quantity, no minimum per SKU.
              </p>
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { qty: "1 Case", save: "15%" },
                  { qty: "2 Cases", save: "20%" },
                  { qty: "4 Cases", save: "25%" },
                  { qty: "8+ Cases", save: "30%" },
                ].map((t) => (
                  <div key={t.qty} className="px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                    <p className="text-[10px] text-white/50 uppercase tracking-wider">{t.qty}</p>
                    <p className="text-lg font-black text-[#60a5fa] mt-0.5">{t.save}</p>
                    <p className="text-[9px] text-white/30">off MSRP</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="/shop" className="cta-primary !py-3.5 !px-10 !text-sm">Browse Catalog →</a>
                <a href="/deals" className="cta-ghost !py-3.5 !px-8 !text-sm">View All Deals</a>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#2563eb] text-white keep-white">Case {i + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8 ── TRENDING PRODUCTS SLIDER ── */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="chip animate-badge-pop">High-Velocity SKUs</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">Trending Wholesale Items</h2>
              <p className="text-white/50 text-sm mt-1">Fast-moving products — reorder before stock runs out</p>
            </div>
            <a href="/shop" className="text-sm font-semibold text-gradient hover:opacity-80 transition">Full catalog →</a>
          </div>
          <ProductSlider />
        </section>

        {/* 9 ── VIDEO DEAL SPOTLIGHT ── */}
        <section className="relative overflow-hidden rounded-2xl border border-white/10">
          <video src="https://splash-dev.phantasm.host/wp-content/uploads/2026/04/FVKD-V2.mp4" className="w-full h-[360px] sm:h-[480px] object-cover" autoPlay muted loop playsInline />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/10" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16">
            <span className="inline-flex w-fit items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ef4444]/20 border border-[#ef4444]/40 text-[#fca5a5] text-xs font-black uppercase tracking-widest mb-5 animate-badge-pop">
              🚀 Pre-Order · Wholesale Allocation
            </span>
            <h2 className="text-5xl sm:text-7xl font-black text-white keep-white leading-none animate-hero-text">
              FVKD <span className="text-[#ef4444]" style={{ textShadow: '0 0 40px rgba(239,68,68,0.8)' }}>V2</span>
            </h2>
            <p className="mt-3 text-white/70 keep-white max-w-md text-sm sm:text-base leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
              Secure your wholesale allocation before the public launch. First-come, first-served. Pre-order price locked for verified distributors.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
              <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                <p className="text-xs text-white/50 keep-white">Wholesale Pre-order</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white keep-white">$19.99</span>
                  <span className="text-sm text-white/40 keep-white line-through">$29.99</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#ef4444] text-white keep-white text-xs font-black">-33%</span>
                </div>
              </div>
              <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/15">
                <p className="text-xs text-white/50 keep-white">MOQ</p>
                <p className="text-xl font-black text-white keep-white">12 units</p>
              </div>
            </div>
            <div className="mt-6 flex gap-3 animate-fade-up" style={{ animationDelay: '400ms' }}>
              <a href="/shop" className="px-8 py-3.5 rounded-full font-bold text-sm bg-[#ef4444] text-white keep-white hover:bg-[#dc2626] hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_-6px_rgba(239,68,68,0.7)]">
                Pre-Order Wholesale Allocation
              </a>
              <a href="/shop" className="px-8 py-3.5 rounded-full font-bold text-sm bg-white/10 border border-white/25 text-white keep-white hover:bg-white/20 transition">
                View Spec Sheet
              </a>
            </div>
          </div>
          <div className="absolute top-5 right-5 flex flex-col items-center justify-center h-20 w-20 rounded-full bg-[#fbbf24] shadow-[0_0_30px_rgba(251,191,36,0.6)] animate-badge-pop">
            <span className="text-black font-black text-xl leading-none">33%</span>
            <span className="text-black font-black text-[10px] uppercase tracking-widest">OFF</span>
          </div>
        </section>

        {/* 10 ── ACCOUNT TIER PROGRAM ── */}
        <section>
          <div className="text-center mb-8">
            <span className="chip mx-auto animate-badge-pop">Wholesale Membership</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">Account Tier Program</h2>
            <p className="text-white/50 text-sm mt-1">Order more, unlock better pricing — tiers upgrade automatically</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {accountTiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 animate-fade-up ${
                  tier.isCurrent
                    ? 'border-white/25 shadow-[0_0_30px_-8px_rgba(253,191,36,0.35)]'
                    : 'border-white/10 hover:border-white/20'
                }`}
                style={{
                  animationDelay: `${i * 110}ms`,
                  background: tier.isCurrent
                    ? `linear-gradient(180deg, ${tier.color}22, ${tier.color}08)`
                    : 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                }}
              >
                {tier.isCurrent && (
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: tier.color }} />
                )}
                {tier.badge && !tier.isCurrent && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-black text-white keep-white" style={{ background: tier.color }}>
                    {tier.badge}
                  </div>
                )}
                {tier.isCurrent && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-black bg-white/10 border border-white/20 text-white keep-white">
                    Current
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl">{tier.icon}</span>
                    <div>
                      <p className="font-black text-white text-lg leading-none">{tier.name}</p>
                      <p className="text-xs text-white/40 mt-0.5">MOQ {tier.moq} / order</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-xs text-white/75">
                        <span className="mt-0.5 shrink-0 h-3.5 w-3.5 rounded-full flex items-center justify-center text-[8px] font-black text-white keep-white" style={{ background: tier.color }}>✓</span>
                        {perk}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={tier.isCurrent ? '#' : '/login'}
                    className={`flex items-center justify-center w-full py-2.5 rounded-xl text-xs font-black transition ${
                      tier.isCurrent
                        ? 'bg-white/5 border border-white/10 text-white/50 cursor-default'
                        : 'text-white keep-white hover:brightness-110 hover:scale-[1.02]'
                    }`}
                    style={!tier.isCurrent ? { background: tier.color } : {}}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 11 ── FEATURED WHOLESALE PRODUCTS ── */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="chip">Top Sellers · On Wholesale Deal</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight animate-slide-left">Featured Products</h2>
              <p className="text-white/50 text-sm mt-1">Hand-picked high-margin items — all discounted this week</p>
            </div>
            <a href="/shop" className="text-sm font-semibold text-gradient hover:opacity-80 transition">Full catalog →</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} delay={i * 60} />
            ))}
          </div>
        </section>

        {/* 12 ── CASE PACK DEALS ── */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="chip">Maximum Margin</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">Case Pack Pricing</h2>
              <p className="text-white/50 text-sm mt-1">Pre-built cases — ready to stock, maximum turn rate</p>
            </div>
            <a href="/deals" className="text-sm font-semibold text-gradient hover:opacity-80 transition">All case packs →</a>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {casePacks.map((b, i) => (
              <a
                key={b.name}
                href="/deals"
                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/25 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.7)] transition-all duration-300 animate-fade-up bg-gradient-to-b from-white/[0.05] to-white/[0.01]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative overflow-hidden h-44">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.img} alt={b.name} className="w-full h-full object-cover group-hover:scale-[1.07] transition duration-600" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-black text-white keep-white shadow-[0_0_12px_rgba(0,0,0,0.5)]" style={{ background: b.accent }}>
                      {b.badge}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                    <span className="px-2 py-0.5 rounded-full bg-[#fbbf24] text-black text-[10px] font-black">
                      SAVE ${b.savings.toFixed(0)}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#10b981]/80 text-white keep-white text-[10px] font-black">
                      ~{b.margin} margin
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-full bg-white/15 border border-white/20 text-white keep-white text-[10px] font-semibold backdrop-blur-sm">
                      {b.tag}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white/15 border border-white/20 text-white keep-white text-[10px] font-semibold backdrop-blur-sm">
                      {b.moq}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-black text-white text-base">{b.name}</h3>
                  <p className="text-white/55 text-xs mt-1">{b.items}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">Wholesale</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-[#60a5fa]">${b.wholesale.toFixed(2)}</span>
                        <span className="text-sm text-white/30 line-through">${b.msrp.toFixed(2)}</span>
                      </div>
                    </div>
                    <span className="text-xs font-black px-3 py-1.5 rounded-full text-white keep-white" style={{ background: b.accent }}>
                      Order Case →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 13 ── BRAND WHOLESALE SALE ── */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="chip">Authorized Partners</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">Brand Wholesale Discounts</h2>
              <p className="text-white/50 text-sm mt-1">Exclusive off-MSRP pricing on partner brands this week</p>
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
                <div className="absolute top-3 right-3 h-14 w-14 rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]" style={{ background: b.accent }}>
                  <span className="text-white keep-white font-black text-lg leading-none">{b.off}%</span>
                  <span className="text-white/80 keep-white font-black text-[9px] uppercase">OFF</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-sm font-black text-white keep-white">{b.name}</p>
                  <p className="text-[10px] text-white/60 keep-white">All {b.name} wholesale SKUs</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 14 ── NEW ARRIVALS ── */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="chip">Just In 🚀</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">New Inventory Arrivals</h2>
              <p className="text-white/50 text-sm mt-1">Secure your first allocation — new stock sells out fast</p>
            </div>
            <a href="/shop" className="text-sm font-semibold text-gradient hover:opacity-80 transition">See all new →</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {newArrivals.map((p, i) => (
              <ProductCard key={p.id} product={p} delay={i * 70} />
            ))}
          </div>
        </section>

        {/* 15 ── WHOLESALE STATS + GIF ── */}
        <section className="grid md:grid-cols-2 gap-5">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Task-10roadtrip.gif" alt="Distribution" className="w-full h-full object-cover min-h-[280px] group-hover:scale-[1.04] transition duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="chip !bg-[#2563eb]/20 !border-[#2563eb]/40 text-[#93c5fd] mb-3">🏢 Distributor Network</span>
              <h3 className="text-2xl font-black text-white keep-white">Serving 500+ Retailers Nationwide</h3>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-2xl font-black text-[#60a5fa]">TX Compliant</span>
                <a href="/shop" className="px-5 py-2 rounded-full text-xs font-bold bg-[#2563eb] text-white keep-white hover:brightness-110 transition">Join Network →</a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {wholesaleStats.map((s, i) => (
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

        {/* 16 ── BRAND MARQUEE ── */}
        <section>
          <div className="mb-4">
            <span className="chip">500+ Authorized Partners</span>
            <h2 className="mt-2 text-2xl font-black">Brands We Distribute</h2>
          </div>
          <BrandMarquee />
        </section>

        {/* 17 ── CATEGORY TILES ── */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="chip">Browse Wholesale</span>
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

        {/* 18 ── B2B TESTIMONIALS ── */}
        <section>
          <div className="mb-5 text-center">
            <span className="chip mx-auto">Verified Partners ⭐</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-black">What Our Retailers Say</h2>
            <p className="text-white/50 text-sm mt-1">Real accounts · Verified wholesale customers</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((t, i) => (
              <div key={t.name} className="glass rounded-2xl p-5 flex flex-col gap-3 hover:border-[#2563eb]/30 hover:-translate-y-1 transition-all duration-300 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <svg key={j} viewBox="0 0 20 20" className="h-4 w-4 text-[#fbbf24]" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#2563eb]/15 border border-[#2563eb]/25 text-[#93c5fd] font-semibold">Verified</span>
                </div>
                <p className="text-sm text-white/75 leading-relaxed flex-1">&quot;{t.text}&quot;</p>
                <div className="pt-1 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="h-8 w-8 rounded-full bg-gradient-to-br from-[#2563eb] to-[#ef4444] flex items-center justify-center text-white keep-white text-xs font-black">{t.avatar}</span>
                    <div>
                      <p className="text-sm font-semibold text-white/90 leading-none">{t.name}</p>
                      <p className="text-[10px] text-white/40 mt-0.5">{t.biz}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 19 ── WHOLESALE NETWORK JOIN ── */}
        <section>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-14">
            <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#2563eb] blur-[120px] opacity-25 pointer-events-none animate-pulse" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#ef4444] blur-[120px] opacity-20 pointer-events-none animate-pulse" />
            <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none rounded-3xl" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="chip">Wholesale Network · Join Free</span>
                <h2 className="mt-3 text-3xl md:text-5xl font-black leading-tight">
                  Get <span className="text-gradient-strong">wholesale</span><br className="hidden sm:block" /> pricing updates first.
                </h2>
                <p className="mt-3 text-white/65 max-w-md text-sm leading-relaxed">
                  Be first to know about new stock drops, exclusive lot clearances, and seasonal promotions. Plus <b className="text-white">priority access</b> to pallet deals before general release.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  {[
                    { icon: "📦", text: "First allocation alerts" },
                    { icon: "💰", text: "Volume deal previews" },
                    { icon: "📋", text: "New brand announcements" },
                    { icon: "🎯", text: "Lot clearance early access" },
                  ].map((f) => (
                    <div key={f.text} className="flex items-center gap-2 text-white/60">
                      <span>{f.icon}</span>
                      <span className="text-xs">{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <form className="flex flex-col gap-3" action="#">
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="Business name" className="h-11 rounded-full bg-white/[0.05] border border-white/10 px-5 text-white placeholder-white/40 outline-none focus:border-[#2563eb] transition text-sm" />
                  <input type="email" required placeholder="Business email" className="h-11 rounded-full bg-white/[0.05] border border-white/10 px-5 text-white placeholder-white/40 outline-none focus:border-[#2563eb] transition text-sm" />
                </div>
                <button className="cta-primary !h-12 !px-7 !text-sm" type="submit">
                  Join Wholesale Network →
                </button>
                <p className="text-center text-xs text-white/30">No spam · Wholesale-only updates · Unsubscribe anytime</p>
              </form>
            </div>
          </div>
        </section>

      </div>{/* end body */}

      {/* ── Footer ── */}
      <footer className="mt-16 border-t border-white/5 bg-[#04050c]/60 backdrop-blur-md">
        <div className="mx-auto max-w-[1700px] px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              {/* Footer logo — spinning gradient ring */}
              <div className="relative inline-flex items-center justify-center shrink-0">
                <div className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,#2563eb,#60a5fa,#ef4444,#fbbf24,#2563eb)] animate-spin-slow opacity-70" />
                <div className="relative bg-[#06070f] rounded-[10px] p-1.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://s1.phantasm.host/storage/layouts/kpZKCKHtbspVvwoAENnelAJE7ueZgHNvRCdHCUvj.png" alt="American Distributors LLC" className="h-8 w-auto object-contain" />
                </div>
              </div>
              <div>
                <span className="text-base font-black tracking-tight text-gradient-strong block leading-none">American Distributors LLC</span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb] animate-pulse shrink-0" />
                  <span className="text-[9px] text-[#60a5fa] font-bold uppercase tracking-widest">Wholesale Portal</span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-white/60 max-w-sm text-sm leading-relaxed">
              Authorized wholesale distributor for 500+ global vape &amp; smoke brands. TX compliant. Serving verified retailers &amp; distributors only.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["📋 Licensed Distributor", "✅ TX Compliant", "💳 Net 30 Terms"].map((b) => (
                <span key={b} className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">{b}</span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2">
              {["X", "IG", "YT", "TT", "LI"].map((s) => (
                <a key={s} href="#" className="h-9 w-9 rounded-full glass flex items-center justify-center text-xs font-bold text-white/80 hover:text-white hover:border-white/30 transition">{s}</a>
              ))}
            </div>
          </div>
          <FooterCol title="Wholesale" links={["Place Order", "Case Pricing", "Pallet Deals", "Clearance Lots", "New Arrivals"]} />
          <FooterCol title="Account" links={["My Dashboard", "Order History", "Account Tier", "Payment Terms", "Account Manager"]} />
          <FooterCol title="Company" links={["About Us", "Become a Distributor", "TX Compliance", "Authorized Brands", "Contact Sales"]} />
        </div>
        <div className="border-t border-white/5">
          <div className="mx-auto max-w-[1700px] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <p>© 2026 American Distributors LLC. All rights reserved. · Authorized accounts only.</p>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Wholesale Agreement</a>
            </div>
          </div>
        </div>
      </footer>

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
      <div className="relative overflow-hidden aspect-square">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-[1.09] transition duration-500" loading="lazy" />
        <div className="absolute top-2 left-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-black bg-[#ef4444] text-white keep-white shadow-[0_0_12px_rgba(239,68,68,0.6)]">-{discount}%</span>
        </div>
        <div className="absolute bottom-2 left-2">
          <span className="px-2 py-0.5 rounded-lg bg-[#fbbf24] text-black text-[9px] font-black">SAVE ${saved.toFixed(2)}</span>
        </div>
        {low && (
          <div className="absolute top-2 right-2">
            <span className="px-1.5 py-0.5 rounded-full bg-[#7f1d1d]/80 border border-[#ef4444]/40 text-[#fca5a5] text-[8px] font-black uppercase tracking-wide">Low Stock</span>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40">
          <span className="px-4 py-2 rounded-full bg-[#ef4444] text-white keep-white font-black text-xs shadow-[0_0_20px_rgba(239,68,68,0.7)]">Add to Order</span>
        </div>
      </div>
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
        <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition duration-300">
          <span className="block w-full py-2 rounded-xl text-xs font-bold bg-[#2563eb] text-white keep-white text-center shadow-[0_4px_16px_rgba(37,99,235,0.6)]">Add to Order</span>
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
