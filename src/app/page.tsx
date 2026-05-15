/* ──────────────────────────────────────────────────────────────
   Vape Hub — CloudRush-inspired premium e-commerce homepage.
   Dark futuristic theme, neon accents, banner-first layout.
   ────────────────────────────────────────────────────────────── */

import ThemeToggle from "./components/ThemeToggle";
import PromoPopup from "./components/PromoPopup";

const categories = [
  { name: "CBD", icon: "🌿" },
  { name: "Batteries", icon: "🔋" },
  { name: "Glass", icon: "🥃" },
  { name: "Cream Chargers / Dispensers", icon: "🧴" },
  { name: "Disposable", icon: "💨", hot: true },
  { name: "E-Liquids", icon: "💧" },
  { name: "Herb / Concentrate", icon: "🌱" },
  { name: "Hydroxy", icon: "⚗️" },
  { name: "Kratom", icon: "🍃", hot: true },
  { name: "Botanicals", icon: "🌾" },
  { name: "MGM / MG-X", icon: "⚡" },
  { name: "Mushroom", icon: "🍄" },
  { name: "Nicotine Pouches", icon: "🟢" },
  { name: "Vape Shop", icon: "🚭" },
  { name: "Salt Nic", icon: "🧂" },
  { name: "Smoke Shop", icon: "🚬" },
  { name: "Ketatabz", icon: "💊" },
  { name: "Perfumes & Refreshers", icon: "🌸" },
  { name: "Delta Drinks", icon: "🥤" },
];

const banners = [
  // Hero block (4 flanks + 1 center)
  "https://s1.phantasm.host/storage/layouts/2026/05/eyeJo2eTK9qjECDYDyZQGEHShSL76CmGuZ5nA81N.jpg", // 0 left top
  "https://s1.phantasm.host/storage/layouts/2026/05/RSI9kPMXgXW8Tz6GEnNtrohQ1pWbeUguko8Rsjif.jpg", // 1 left bottom
  "https://s1.phantasm.host/storage/layouts/2026/05/PJElflRHjMeT50JjRsDJspraX9c4FOZ7JujnU0AM.jpg", // 2 right top
  "https://s1.phantasm.host/storage/layouts/2026/05/Ro5EHoZQoNAQOuQrsh2jTHQZ2hXEdfp7eJC1Z1FI.jpg", // 3 right bottom
  "https://s1.phantasm.host/storage/layouts/2026/05/QNe5mmqLAA1FjNbDsQbdqeY1ukE9lfTS9AOoSJas.jpg", // 4 center hero
  // Stacked below
  "https://s1.phantasm.host/storage/layouts/2026/04/v6P3bCkk5rONjwqENRrT0yApa5HnAnNrKk2gHtjW.jpg", // 5
  "https://s1.phantasm.host/storage/layouts/2026/04/u5RmKocZ1sbppYfQq51K0ql3yvfPwAKP90TiG4tl.jpg", // 6
  "https://s1.phantasm.host/storage/layouts/2026/03/5ZGYPAnj9PNmgKdy0JCZWLO5YdUj6xzqFyb9Be9P.jpg", // 7
  "https://s1.phantasm.host/storage/layouts/2026/02/dQVqOYFqxeMlgVnARGbTROSz0QATse20GmWDD1cF.jpg", // 8
  "https://s1.phantasm.host/storage/layouts/zfgJve6D5jMSg1rVaJTE56hVqQ2xrasNn5c7d9LB.jpg",         // 9
];

// 12 square category tile banners (2 rows of 6) — visual replacement for plain brand text grid
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

// 5 wider landscape brand tile banners (1 row of 5)
const brandTiles = [
  "https://s1.phantasm.host/storage/layouts/Z3c4aFwVZriAA3altiMDaC01ix9L3Q9l1x0yDERU.avif",
  "https://s1.phantasm.host/storage/layouts/KhcVFpRCASoxX8SZyo2m7FmUFaW83V2PwG60LwXz.avif",
  "https://s1.phantasm.host/storage/layouts/9fgeGyhKVCY0pc0d2srrWkhnLh8cTI2xnUHCWuvu.avif",
  "https://s1.phantasm.host/storage/layouts/Q3dULtUskW6FLdPMZT4avtkGswxZ2pTG0hPDvn86.avif",
  "https://s1.phantasm.host/storage/layouts/LPkzY7gDHOyQj1MpbdnZD1vFuuAaNIZRItaWYaW5.avif",
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <PromoPopup />
      {/* ───────── Top promo bar ───────── */}
      <div className="relative overflow-hidden border-b border-white/5 text-[11px] sm:text-[12px]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#2563eb,#60a5fa,#ef4444,#2563eb)] bg-[length:300%_100%] opacity-90 animate-marquee" />
        <div className="relative flex items-center justify-center gap-3 sm:gap-8 py-2 text-white font-medium tracking-wide whitespace-nowrap overflow-hidden">
          <span className="truncate">⚡ FLASH SALE 12:34:56</span>
          <span className="opacity-70 hidden sm:inline">·</span>
          <span className="hidden sm:inline">FREE SHIPPING OVER $99</span>
          <span className="opacity-70 hidden md:inline">·</span>
          <span className="hidden md:inline">10% OFF · <b>VAPEHUB10</b></span>
        </div>
      </div>

      {/* ───────── Header ───────── */}
      <header className="sticky top-0 z-50 site-header border-b border-white/10">
        <div className="mx-auto max-w-[1700px] px-3 sm:px-6 h-14 sm:h-16 flex items-center gap-2 sm:gap-4 lg:gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <span className="relative inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[conic-gradient(from_0deg,#2563eb,#60a5fa,#ef4444,#2563eb)]">
              <span className="absolute inset-[2px] rounded-[10px] bg-[#06070f] flex items-center justify-center text-white font-black text-base sm:text-lg">N</span>
            </span>
            <span className="hidden sm:inline text-lg sm:text-xl font-black tracking-tight text-gradient">Vape Hub</span>
          </a>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm text-white/80">
            <a className="hover:text-white transition" href="#">Shop</a>
            <a className="hover:text-white transition" href="#">Deals</a>
            <a className="hover:text-white transition" href="#">Brands</a>
            <a className="hover:text-white transition" href="#">New</a>
            <a className="hover:text-white transition" href="#">Support</a>
          </nav>

          {/* Search */}
          <div className="flex-1 min-w-0 max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products…"
                className="w-full h-9 sm:h-10 rounded-full bg-white/[0.04] border border-white/10 pl-10 pr-3 sm:pr-24 text-sm text-white placeholder-white/40 outline-none focus:border-[#2563eb] focus:bg-white/[0.06] transition"
              />
              <svg className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <button type="button" className="hidden sm:block absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3 rounded-full text-xs font-semibold bg-gradient-to-r from-[#1d4ed8] to-[#ef4444] text-white">Search</button>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <div className="hidden md:block">
              <IconButton ariaLabel="Wishlist">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </IconButton>
            </div>
            <IconButton ariaLabel="Account">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>
            </IconButton>
            <IconButton ariaLabel="Cart" badge="3">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3h2l2.4 12.3a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="10" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>
            </IconButton>
          </div>
        </div>
      </header>

      {/* ───────── Fixed side banners — always fill viewport sides ───────── */}
      <div className="hidden 2xl:flex fixed top-20 left-0 w-52 h-[calc(100vh-5rem)] flex-col gap-1 p-1 z-30 overflow-hidden">
        <FixedSideBanner src={categoryTiles[0]} alt="Side promo 1" />
        <FixedSideBanner src={categoryTiles[6]} alt="Side promo 2" />
        <FixedSideBanner src={categoryTiles[1]} alt="Side promo 3" />
        <FixedSideBanner src={categoryTiles[7]} alt="Side promo 4" />
      </div>
      <div className="hidden 2xl:flex fixed top-20 right-0 w-52 h-[calc(100vh-5rem)] flex-col gap-1 p-1 z-30 overflow-hidden">
        <FixedSideBanner src={categoryTiles[3]} alt="Side promo 5" />
        <FixedSideBanner src={categoryTiles[9]} alt="Side promo 6" />
        <FixedSideBanner src={categoryTiles[4]} alt="Side promo 7" />
        <FixedSideBanner src={categoryTiles[10]} alt="Side promo 8" />
      </div>

      {/* ───────── BODY: persistent sidebar + main column ───────── */}
      <div className="flex-1 mt-4 sm:mt-6 px-3 sm:px-6 2xl:ml-52 2xl:mr-52">
      <div className="flex flex-col lg:flex-row gap-5">
          {/* Persistent left category sidebar — sticky, runs alongside whole page */}
          <aside className="w-full lg:w-72 lg:shrink-0">
            <div className="glass rounded-2xl p-3 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
            {/* Promo strip — Dollar Sale / Offers / Clearance */}
            <div className="space-y-2 px-1 pt-1">
              <a
                href="#"
                className="relative block rounded-xl px-4 py-3 text-center font-black tracking-wider text-white bg-[linear-gradient(90deg,#ef4444,#ff5d2a,#ffd23d,#ef4444)] bg-[length:300%_100%] animate-marquee shadow-[0_8px_24px_-6px_rgba(239,68,68,0.55)] keep-white"
              >
                $ DOLLAR SALE $
              </a>
              <a
                href="#"
                className="block rounded-xl px-4 py-3 text-center bg-white/[0.04] border border-white/10 hover:border-white/25 transition"
              >
                <div className="text-xl font-black tracking-wider text-gradient-strong">OFFERS</div>
                <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/55">Texas Compliant</div>
              </a>
              <a
                href="#"
                className="block rounded-xl px-4 py-2.5 text-center text-xs uppercase tracking-[0.22em] font-bold bg-white/[0.03] border border-white/10 text-white/80 hover:text-white hover:bg-white/[0.07] transition"
              >
                Clearance
              </a>
            </div>

            {/* Shop by Brand / Shop by List */}
            <div className="mt-3 grid grid-cols-2 gap-2 px-1">
              <a
                href="#"
                className="text-center text-xs font-bold uppercase tracking-wider rounded-lg px-2 py-2.5 bg-gradient-to-br from-[#e11d48] to-[#9f1239] text-white shadow-[0_6px_18px_-6px_rgba(225,29,72,0.6)] hover:brightness-110 transition keep-white"
              >
                Shop by Brand
              </a>
              <a
                href="#"
                className="text-center text-xs font-bold uppercase tracking-wider rounded-lg px-2 py-2.5 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-white shadow-[0_6px_18px_-6px_rgba(37,99,235,0.6)] hover:brightness-110 transition keep-white"
              >
                Shop by List
              </a>
            </div>

            {/* Header */}
            <div className="px-3 pt-4 pb-2 flex items-center justify-between">
              <h3 className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold">Categories</h3>
              <span className="chip">All</span>
            </div>

            {/* Category list */}
            <ul className="space-y-1">
              {categories.map((c) => (
                <li key={c.name}>
                  <a
                    href="#"
                    className="group flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-white/85 hover:bg-white/5 hover:text-white transition"
                  >
                    <span className="flex items-center gap-3 min-w-0">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06] border border-white/10 text-base">
                        {c.icon}
                      </span>
                      <span className="truncate uppercase tracking-wide text-[13px] font-semibold">{c.name}</span>
                      {c.hot && (
                        <span className="chip !text-[10px] !px-1.5 !py-0.5 bg-[#ef4444]/20 border-[#ef4444]/40 text-[#fca5a5]">
                          HOT
                        </span>
                      )}
                    </span>
                    <span className="text-white/40 group-hover:text-white/80 transition">›</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Members CTA */}
            <div className="mt-3 mx-1 p-4 rounded-xl bg-[radial-gradient(120%_120%_at_0%_0%,rgba(37,99,235,0.28),transparent_60%),radial-gradient(120%_120%_at_100%_100%,rgba(239,68,68,0.22),transparent_60%)] border border-white/10">
              <p className="text-[11px] uppercase tracking-widest text-white/60">Members get</p>
              <p className="mt-1 text-lg font-bold text-white leading-tight">
                Extra 15% off
                <br />+ free express
              </p>
              <button type="button" className="mt-3 cta-primary !py-2 !px-4 !text-xs">Join Rewards</button>
            </div>
            </div>
          </aside>

          {/* Main content column */}
          <main className="flex-1 min-w-0 space-y-8">

          {/* ───────── Hero block: 2 small left | big center | 2 small right ───────── */}
          <section className="grid grid-cols-12 gap-3">
            {/* Left flank */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-2 flex flex-col gap-3">
              <FlankBanner src={banners[0]} alt="Promo 1" eager />
              <FlankBanner src={banners[1]} alt="Promo 2" />
            </div>

            {/* Center hero — carousel-style */}
            <a
              href="#"
              className="col-span-12 sm:col-span-12 lg:col-span-8 relative block rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 shadow-[0_30px_80px_-20px_rgba(37,99,235,0.45)] transition group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={banners[4]}
                alt="Featured promotion"
                className="block w-full h-full object-cover aspect-[16/10] lg:aspect-auto lg:min-h-full"
                loading="eager"
                fetchPriority="high"
              />
              {/* Carousel arrows (decorative) */}
              <button
                type="button"
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full glass flex items-center justify-center text-white/90 keep-white opacity-0 group-hover:opacity-100 transition"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 6l-6 6 6 6"/></svg>
              </button>
              <button
                type="button"
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full glass flex items-center justify-center text-white/90 keep-white opacity-0 group-hover:opacity-100 transition"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 6l6 6-6 6"/></svg>
              </button>
              {/* Carousel dots (decorative) */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                <span className="h-1.5 w-6 rounded-full bg-white/90" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
              </div>
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </a>

            {/* Right flank */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-2 flex flex-col gap-3">
              <FlankBanner src={banners[2]} alt="Promo 3" />
              <FlankBanner src={banners[3]} alt="Promo 4" />
            </div>
          </section>

          {/* ───────── Stacked wide banners ───────── */}
          <section className="space-y-3">
            {banners.slice(5).map((src, i) => (
              <a
                key={src}
                href="#"
                className="relative block rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 shadow-[0_20px_60px_-20px_rgba(239,68,68,0.35)] transition group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Promotion ${i + 6}`}
                  className="block w-full h-auto"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
              </a>
            ))}
          </section>

          {/* ───────── Categories & Brands tile grid ───────── */}
          <section className="mt-6">
            <SectionHeader
              kicker="Shop by category & brand"
              title="Featured collections"
              desc="Tap a tile to browse the full lineup."
              link="View all →"
            />

            {/* 12 square category tiles — 2 rows of 6 on desktop */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
              {categoryTiles.map((src, i) => (
                <a
                  key={src}
                  href="#"
                  className="relative block rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 hover:shadow-[0_18px_40px_-12px_rgba(37,99,235,0.55)] transition group"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Category ${i + 1}`}
                    className="block w-full h-full object-cover aspect-square group-hover:scale-[1.03] transition duration-500"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                </a>
              ))}
            </div>

            {/* 5 wider brand tiles — 1 row on desktop */}
            <div className="mt-3 md:mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
              {brandTiles.map((src, i) => (
                <a
                  key={src}
                  href="#"
                  className="relative block rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 hover:shadow-[0_18px_40px_-12px_rgba(239,68,68,0.55)] transition group"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Brand ${i + 1}`}
                    className="block w-full h-full object-cover aspect-[4/3] group-hover:scale-[1.03] transition duration-500"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                </a>
              ))}
            </div>
          </section>

          {/* ───────── Promo campaign / Newsletter ───────── */}
          <section className="mt-6">
            <div className="relative overflow-hidden rounded-2xl glass-strong p-8 md:p-12">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#60a5fa] blur-[120px] opacity-30" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#2563eb] blur-[120px] opacity-30" />
          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <div>
              <span className="chip">Newsletter · No spam, ever</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-black leading-tight">
                Get drops <span className="text-gradient-strong">before</span> they go live.
              </h2>
              <p className="mt-3 text-white/70 max-w-md">
                Be the first to know about flash sales, brand collabs and members-only combos. Plus 10% off your first order.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3" action="#">
              <input
                type="email"
                required
                placeholder="you@stellar.mail"
                className="flex-1 h-12 rounded-full bg-white/[0.05] border border-white/10 px-5 text-white placeholder-white/40 outline-none focus:border-[#2563eb]"
              />
              <button className="cta-primary !h-12 !px-7" type="submit">Subscribe</button>
            </form>
          </div>
            </div>
          </section>
          </main>
      </div>
      </div>

      {/* ───────── Footer ───────── */}
      <footer className="mt-16 border-t border-white/5 bg-[#04050c]/60 backdrop-blur-md">
        <div className="mx-auto max-w-[1700px] px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[conic-gradient(from_0deg,#2563eb,#60a5fa,#ef4444,#2563eb)]">
                <span className="absolute inset-[2px] rounded-[10px] bg-[#06070f] flex items-center justify-center text-white font-black">N</span>
              </span>
              <span className="text-lg font-black tracking-tight text-gradient">Vape Hub</span>
            </div>
            <p className="mt-3 text-white/60 max-w-sm">
              Premium tech, future-forward shopping. Authorized resellers for 200+ global brands.
            </p>
            <div className="mt-4 flex items-center gap-2">
              {["X", "IG", "YT", "TT", "DC"].map((s) => (
                <a key={s} href="#" className="h-9 w-9 rounded-full glass flex items-center justify-center text-xs font-bold text-white/80 hover:text-white">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <FooterCol title="Shop" links={["New arrivals", "Trending", "Deals", "Bundles", "Gift cards"]} />
          <FooterCol title="Support" links={["Help center", "Track order", "Returns", "Warranty", "Contact"]} />
          <FooterCol title="Company" links={["About", "Careers", "Press", "Sustainability", "Affiliates"]} />
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
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Sub-components
   ────────────────────────────────────────────────────────────── */

function IconButton({
  children,
  ariaLabel,
  badge,
}: {
  children: React.ReactNode;
  ariaLabel: string;
  badge?: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="relative h-10 w-10 rounded-full glass flex items-center justify-center text-white/80 hover:text-white hover:bg-white/[0.08] transition"
    >
      {children}
      {badge && (
        <span className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 rounded-full bg-gradient-to-br from-[#ef4444] to-[#2563eb] text-[10px] font-bold text-white flex items-center justify-center shadow-[0_0_12px_rgba(239,68,68,0.7)]">
          {badge}
        </span>
      )}
    </button>
  );
}

function SectionHeader({
  kicker,
  title,
  desc,
  link,
}: {
  kicker: string;
  title: string;
  desc?: string;
  link?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
      <div>
        <span className="chip">{kicker}</span>
        <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">{title}</h2>
        {desc && <p className="mt-1 text-white/60 text-sm">{desc}</p>}
      </div>
      {link && (
        <a href="#" className="text-sm font-semibold text-gradient hover:opacity-80">
          {link}
        </a>
      )}
    </div>
  );
}

function FlankBanner({ src, alt, eager = false }: { src: string; alt: string; eager?: boolean }) {
  return (
    <a
      href="#"
      className="relative block rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 shadow-[0_12px_40px_-12px_rgba(37,99,235,0.4)] transition group"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="block w-full h-full object-cover aspect-square"
        loading={eager ? "eager" : "lazy"}
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
    </a>
  );
}

function FixedSideBanner({ src, alt }: { src: string; alt: string }) {
  return (
    <a
      href="#"
      className="relative flex-1 block overflow-hidden rounded-xl border border-white/10 hover:border-white/25 transition group min-h-0"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500"
        loading="lazy"
      />
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
          <li key={l}>
            <a href="#" className="text-white/75 hover:text-white transition">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
