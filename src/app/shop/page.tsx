'use client';

import ThemeToggle from "../components/ThemeToggle";

const HERO_IMAGE = "https://i.ytimg.com/vi/3KvlZ69sk9o/maxresdefault.jpg";

const categories = [
  { name: "All Products", count: 466 },
  { name: "CBD", icon: "🌿", count: 48 },
  { name: "Batteries", icon: "🔋", count: 22 },
  { name: "Glass", icon: "🥃", count: 35 },
  { name: "Cream Chargers", icon: "🧴", count: 19 },
  { name: "Disposable", icon: "💨", count: 125, hot: true },
  { name: "E-Liquids", icon: "💧", count: 89 },
  { name: "Herb / Concentrate", icon: "🌱", count: 31 },
  { name: "Hydroxy", icon: "⚗️", count: 14 },
  { name: "Kratom", icon: "🍃", count: 34, hot: true },
  { name: "Botanicals", icon: "🌾", count: 27 },
  { name: "MGM / MG-X", icon: "⚡", count: 18 },
  { name: "Mushroom", icon: "🍄", count: 23 },
  { name: "Nicotine Pouches", icon: "🟢", count: 41 },
];

const brands = ["Geek Bar", "Lemmons", "KLAZ", "Meta", "Smashhh", "BLNDZ", "RAW", "Buttons"];

const products = [
  {
    id: 1,
    name: "Geek Bar Pulse X 25000 Puffs",
    price: 19.99,
    original: 24.99,
    category: "Disposable",
    badge: "HOT",
    rating: 4.8,
    reviews: 234,
    img: "https://s1.phantasm.host/storage/layouts/SGpKSWMtmOFg3AGMtA5s8PhXjYN2bnp5FOHq7SRD.avif",
  },
  {
    id: 2,
    name: "Lemmons Buy 5 Get 1 Free Pack",
    price: 34.99,
    original: 41.99,
    category: "Kratom",
    badge: "SALE",
    rating: 4.9,
    reviews: 178,
    img: "https://s1.phantasm.host/storage/layouts/3SVEDQXJqTh164ozGGfjE5yGrHyrKObXFQ2v2yiw.avif",
  },
  {
    id: 3,
    name: "KLAZ Meta Strawberry 100mg",
    price: 12.99,
    original: null,
    category: "E-Liquids",
    badge: "NEW",
    rating: 4.7,
    reviews: 92,
    img: "https://s1.phantasm.host/storage/layouts/nBTebPVYEHymLDies5vJ6i62RhrW6asTO7JSDWV3.avif",
  },
  {
    id: 4,
    name: "Smashhh 480mg Pseudoindoxyl",
    price: 27.99,
    original: 32.99,
    category: "Botanicals",
    badge: "HOT",
    rating: 4.6,
    reviews: 317,
    img: "https://s1.phantasm.host/storage/layouts/qm6D2upUJQFaawFbGR80MrNuHZdZmJmqOSze4yYX.avif",
  },
  {
    id: 5,
    name: "BLNDZ Premium 7-Hydroxy 320mg",
    price: 44.99,
    original: 54.99,
    category: "Hydroxy",
    badge: "SALE",
    rating: 4.9,
    reviews: 145,
    img: "https://s1.phantasm.host/storage/layouts/AvtnXPaycvOKR5CzvDVN3DmhZJ461a75xqFNynrB.avif",
  },
  {
    id: 6,
    name: "RAW Smokeshop Collection Box",
    price: 22.99,
    original: null,
    category: "Smoke Shop",
    badge: null,
    rating: 4.5,
    reviews: 68,
    img: "https://s1.phantasm.host/storage/layouts/cWAXgLfkOGzVVVNywKhxE0QIJbqgEJKQwrud4SXj.avif",
  },
  {
    id: 7,
    name: "Buttons 7-Hydroxymitragynine 50ct",
    price: 39.99,
    original: 47.99,
    category: "Botanicals",
    badge: "HOT",
    rating: 4.8,
    reviews: 203,
    img: "https://s1.phantasm.host/storage/layouts/AD5mrQ6YiH0beQM8nyNeUZSPNn1Kh0umBTU2Qstv.avif",
  },
  {
    id: 8,
    name: "E-Liquid Blue Raspberry Chew 100ml",
    price: 15.99,
    original: 18.99,
    category: "E-Liquids",
    badge: "SALE",
    rating: 4.4,
    reviews: 112,
    img: "https://s1.phantasm.host/storage/layouts/pluQi49ubpMIlhg7yFcMV3Ium0sz9ilguuAMLG2v.avif",
  },
  {
    id: 9,
    name: "Kratom Feel Free Tonic Shot",
    price: 9.99,
    original: null,
    category: "Kratom",
    badge: "NEW",
    rating: 4.7,
    reviews: 389,
    img: "https://s1.phantasm.host/storage/layouts/4VAsbSHTssDtwQ2J0jJpQHN04WwubNJSFvpOwDLr.avif",
  },
  {
    id: 10,
    name: "META Shroom2 Blue Razz 4900mg",
    price: 49.99,
    original: 59.99,
    category: "Mushroom",
    badge: "HOT",
    rating: 4.9,
    reviews: 271,
    img: "https://s1.phantasm.host/storage/layouts/2026/03/V4MnX2kBxkR0bzEDw7wYNEsI6aU1AGOZLY93RNLl.gif",
  },
  {
    id: 11,
    name: "MGM/MG-X Power Formula 30ct",
    price: 32.99,
    original: 38.99,
    category: "MGM / MG-X",
    badge: "SALE",
    rating: 4.6,
    reviews: 84,
    img: "https://s1.phantasm.host/storage/layouts/Je10EsPJfqLp84O6HedmMgBZkuaqkFXiisHE7CDJ.avif",
  },
  {
    id: 12,
    name: "Roxy 10ct Tablet Bottle 160mg",
    price: 18.99,
    original: null,
    category: "Botanicals",
    badge: "NEW",
    rating: 4.5,
    reviews: 57,
    img: "https://s1.phantasm.host/storage/layouts/921aLl70h8ktb5O8Mc08tVI8l0IYZKqOmXTHS8zQ.avif",
  },
  {
    id: 13,
    name: "Geek Bar Pulse X 15000 Tropical",
    price: 16.99,
    original: 21.99,
    category: "Disposable",
    badge: "SALE",
    rating: 4.8,
    reviews: 412,
    img: "https://s1.phantasm.host/storage/layouts/Z3c4aFwVZriAA3altiMDaC01ix9L3Q9l1x0yDERU.avif",
  },
  {
    id: 14,
    name: "King Palm Mini Rolls 2pk",
    price: 4.99,
    original: null,
    category: "Smoke Shop",
    badge: "NEW",
    rating: 4.6,
    reviews: 198,
    img: "https://s1.phantasm.host/storage/layouts/KhcVFpRCASoxX8SZyo2m7FmUFaW83V2PwG60LwXz.avif",
  },
  {
    id: 15,
    name: "RAW Classic Cone 1¼ 50pk",
    price: 11.99,
    original: 14.99,
    category: "Smoke Shop",
    badge: "SALE",
    rating: 4.7,
    reviews: 523,
    img: "https://s1.phantasm.host/storage/layouts/9fgeGyhKVCY0pc0d2srrWkhnLh8cTI2xnUHCWuvu.avif",
  },
  {
    id: 16,
    name: "Lookah Octopus Electric Nectar Collector",
    price: 59.99,
    original: 74.99,
    category: "Glass",
    badge: "HOT",
    rating: 4.9,
    reviews: 87,
    img: "https://s1.phantasm.host/storage/layouts/Q3dULtUskW6FLdPMZT4avtkGswxZ2pTG0hPDvn86.avif",
  },
  {
    id: 17,
    name: "Modus Mushroom Gummies 5000mg",
    price: 24.99,
    original: 29.99,
    category: "Mushroom",
    badge: "HOT",
    rating: 4.8,
    reviews: 163,
    img: "https://s1.phantasm.host/storage/layouts/LPkzY7gDHOyQj1MpbdnZD1vFuuAaNIZRItaWYaW5.avif",
  },
  {
    id: 18,
    name: "Nicotine Pouches On! 6mg Cool Mint",
    price: 5.99,
    original: null,
    category: "Nicotine Pouches",
    badge: "NEW",
    rating: 4.5,
    reviews: 241,
    img: "https://s1.phantasm.host/storage/layouts/cWAXgLfkOGzVVVNywKhxE0QIJbqgEJKQwrud4SXj.avif",
  },
  {
    id: 19,
    name: "Delta Drink Haze Energy 12oz Can",
    price: 7.99,
    original: 9.99,
    category: "Delta Drinks",
    badge: "SALE",
    rating: 4.4,
    reviews: 76,
    img: "https://s1.phantasm.host/storage/layouts/4VAsbSHTssDtwQ2J0jJpQHN04WwubNJSFvpOwDLr.avif",
  },
  {
    id: 20,
    name: "Ketatabz 100mg Tablets 30ct",
    price: 36.99,
    original: 44.99,
    category: "Ketatabz",
    badge: "HOT",
    rating: 4.7,
    reviews: 134,
    img: "https://s1.phantasm.host/storage/layouts/Je10EsPJfqLp84O6HedmMgBZkuaqkFXiisHE7CDJ.avif",
  },
];

const badgeColor: Record<string, string> = {
  HOT: "bg-[#ef4444]/20 border-[#ef4444]/40 text-[#fca5a5]",
  SALE: "bg-[#fbbf24]/20 border-[#fbbf24]/40 text-[#fde68a]",
  NEW: "bg-[#2563eb]/20 border-[#2563eb]/40 text-[#93c5fd]",
};

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">

      {/* ── Promo bar ── */}
      <div className="relative overflow-hidden border-b border-white/5 text-[11px] sm:text-[12px]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#2563eb,#60a5fa,#ef4444,#2563eb)] bg-[length:300%_100%] opacity-90 animate-marquee" />
        <div className="relative flex items-center justify-center gap-3 sm:gap-8 py-2 text-white font-medium tracking-wide whitespace-nowrap overflow-hidden">
          <span>⚡ FLASH SALE 12:34:56</span>
          <span className="opacity-70 hidden sm:inline">·</span>
          <span className="hidden sm:inline">FREE SHIPPING OVER $99</span>
          <span className="opacity-70 hidden md:inline">·</span>
          <span className="hidden md:inline">10% OFF · <b>VAPEHUB10</b></span>
        </div>
      </div>

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 site-header border-b border-white/10">
        <div className="mx-auto max-w-[1700px] px-3 sm:px-6 h-14 sm:h-16 flex items-center gap-2 sm:gap-4 lg:gap-6">
          <a href="/" className="flex items-center gap-2 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://s1.phantasm.host/storage/layouts/kpZKCKHtbspVvwoAENnelAJE7ueZgHNvRCdHCUvj.png" alt="American Distributors LLC" className="h-9 sm:h-10 w-auto object-contain" />
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-sm text-white/80">
            <a className="hover:text-white transition" href="/">Home</a>
            <a className="text-white font-semibold border-b border-[#2563eb] pb-0.5" href="/shop">Shop</a>
            <a className="hover:text-white transition" href="#">Deals</a>
            <a className="hover:text-white transition" href="#">Brands</a>
            <a className="hover:text-white transition" href="#">New</a>
            <a className="hover:text-white transition" href="#">Support</a>
          </nav>

          <div className="flex-1 min-w-0 max-w-xl">
            <div className="relative">
              <input type="text" placeholder="Search products…" className="w-full h-9 sm:h-10 rounded-full bg-white/[0.04] border border-white/10 pl-10 pr-3 sm:pr-24 text-sm text-white placeholder-white/40 outline-none focus:border-[#2563eb] focus:bg-white/[0.06] transition" />
              <svg className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <button type="button" className="hidden sm:block absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3 rounded-full text-xs font-semibold bg-gradient-to-r from-[#1d4ed8] to-[#ef4444] text-white">Search</button>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="hidden sm:block"><ThemeToggle /></div>
            <button type="button" aria-label="Wishlist" className="hidden md:flex relative h-10 w-10 rounded-full glass items-center justify-center text-white/80 hover:text-white hover:bg-white/[0.08] transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
            <button type="button" aria-label="Account" className="relative h-10 w-10 rounded-full glass flex items-center justify-center text-white/80 hover:text-white hover:bg-white/[0.08] transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>
            </button>
            <button type="button" aria-label="Cart" className="relative h-10 w-10 rounded-full glass flex items-center justify-center text-white/80 hover:text-white hover:bg-white/[0.08] transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3h2l2.4 12.3a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="10" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>
              <span className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 rounded-full bg-gradient-to-br from-[#ef4444] to-[#2563eb] text-[10px] font-bold text-white flex items-center justify-center shadow-[0_0_12px_rgba(239,68,68,0.7)]">3</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative h-[340px] sm:h-[420px] lg:h-[500px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt="Shop All Products"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050812] via-transparent to-transparent" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 2xl:pl-[14rem]">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-4">
            <a href="/" className="hover:text-white transition">Home</a>
            <span>/</span>
            <span className="text-white/80">Shop</span>
          </nav>

          <span className="chip mb-3">466 Products Available</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
            <span className="text-gradient">Shop</span>
            <br />
            <span className="text-white">All Products</span>
          </h1>
          <p className="mt-4 text-white/60 text-sm sm:text-base max-w-md">
            Browse our full lineup — disposables, e-liquids, kratom, CBD, mushrooms and more.
          </p>

          {/* Quick filter chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["Disposable 🔥", "E-Liquids", "Kratom", "CBD", "Mushroom", "Deals"].map((t) => (
              <a
                key={t}
                href="#"
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 border border-white/15 text-white hover:bg-white/20 hover:border-white/30 transition backdrop-blur-sm"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main: filters + products ── */}
      <div className="flex-1 px-3 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* ── Filter sidebar ── */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="glass rounded-2xl p-4 lg:sticky lg:top-20 space-y-6">

              {/* Categories */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold mb-3">Categories</h3>
                <ul className="space-y-1">
                  {categories.map((c) => (
                    <li key={c.name}>
                      <label className="flex items-center justify-between px-2 py-2 rounded-lg hover:bg-white/5 cursor-pointer group transition">
                        <span className="flex items-center gap-2 text-sm text-white/80 group-hover:text-white">
                          <input type="checkbox" className="accent-[#2563eb] h-3.5 w-3.5" defaultChecked={c.name === "All Products"} />
                          <span>{"icon" in c ? `${c.icon} ` : ""}{c.name}</span>
                          {"hot" in c && c.hot && <span className="chip !text-[9px] !px-1.5 !py-0.5 bg-[#ef4444]/20 border-[#ef4444]/40 text-[#fca5a5]">HOT</span>}
                        </span>
                        <span className="text-xs text-white/30">{c.count}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10" />

              {/* Price range */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold mb-3">Price Range</h3>
                <div className="flex items-center gap-2">
                  <input type="number" placeholder="$0" className="w-full h-8 rounded-lg bg-white/[0.04] border border-white/10 px-2 text-xs text-white placeholder-white/30 outline-none focus:border-[#2563eb]" />
                  <span className="text-white/40 text-xs shrink-0">to</span>
                  <input type="number" placeholder="$200" className="w-full h-8 rounded-lg bg-white/[0.04] border border-white/10 px-2 text-xs text-white placeholder-white/30 outline-none focus:border-[#2563eb]" />
                </div>
                <button type="button" className="mt-3 w-full cta-primary !py-2 !text-xs">Apply</button>
              </div>

              <div className="border-t border-white/10" />

              {/* Brands */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold mb-3">Brands</h3>
                <ul className="space-y-1">
                  {brands.map((b) => (
                    <li key={b}>
                      <label className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer transition">
                        <input type="checkbox" className="accent-[#2563eb] h-3.5 w-3.5" />
                        <span className="text-sm text-white/75 hover:text-white">{b}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10" />

              {/* In stock */}
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-[#2563eb] h-3.5 w-3.5" defaultChecked />
                  <span className="text-sm text-white/75">In stock only</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer mt-2">
                  <input type="checkbox" className="accent-[#2563eb] h-3.5 w-3.5" />
                  <span className="text-sm text-white/75">On sale</span>
                </label>
              </div>
            </div>
          </aside>

          {/* ── Products area ── */}
          <main className="flex-1 min-w-0">
            {/* Sort / results bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <p className="text-sm text-white/60">
                Showing <span className="text-white font-semibold">20</span> of <span className="text-white font-semibold">466</span> products
              </p>
              <div className="flex items-center gap-3">
                <select className="h-9 rounded-full bg-white/[0.04] border border-white/10 px-4 text-sm text-white outline-none focus:border-[#2563eb] cursor-pointer">
                  <option>Sort: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Best Selling</option>
                  <option>Newest First</option>
                </select>
                <div className="flex items-center gap-1 glass rounded-full px-1 py-1">
                  <button type="button" aria-label="Grid view" className="h-7 w-7 rounded-full flex items-center justify-center bg-white/10 text-white">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  </button>
                  <button type="button" aria-label="List view" className="h-7 w-7 rounded-full flex items-center justify-center text-white/40 hover:text-white transition">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><rect x="3" y="4" width="18" height="2"/><rect x="3" y="11" width="18" height="2"/><rect x="3" y="18" width="18" height="2"/></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {products.map((p) => (
                <a
                  key={p.id}
                  href={`/shop/${p.id}`}
                  className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 hover:shadow-[0_20px_60px_-20px_rgba(37,99,235,0.5)] transition bg-white/[0.02]"
                >
                  {/* Badge */}
                  {p.badge && (
                    <span className={`absolute top-2 left-2 z-10 text-[10px] font-bold px-2 py-0.5 rounded-full border ${badgeColor[p.badge]}`}>
                      {p.badge}
                    </span>
                  )}

                  {/* Wishlist */}
                  <button
                    type="button"
                    aria-label="Add to wishlist"
                    onClick={(e) => e.preventDefault()}
                    className="absolute top-2 right-2 z-10 h-7 w-7 rounded-full glass flex items-center justify-center text-white/50 hover:text-[#ef4444] transition opacity-0 group-hover:opacity-100"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  </button>

                  {/* Image */}
                  <div className="relative overflow-hidden aspect-square bg-white/[0.03]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-[1.06] transition duration-500"
                      loading="lazy"
                    />
                    {/* Quick add overlay */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition duration-300 p-2">
                      <button
                        type="button"
                        onClick={(e) => e.preventDefault()}
                        className="w-full py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#1d4ed8] to-[#ef4444] text-white shadow-lg"
                      >
                        + Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-3 flex flex-col gap-1.5 flex-1">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium">{p.category}</span>
                    <p className="text-sm font-semibold text-white leading-snug line-clamp-2">{p.name}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg key={i} viewBox="0 0 20 20" className={`h-3 w-3 ${i < Math.round(p.rating) ? "text-[#fbbf24]" : "text-white/20"}`} fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"/></svg>
                        ))}
                      </div>
                      <span className="text-[10px] text-white/40">({p.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mt-auto pt-1">
                      <span className="text-base font-black text-white">${p.price.toFixed(2)}</span>
                      {p.original && (
                        <span className="text-xs text-white/35 line-through">${p.original.toFixed(2)}</span>
                      )}
                      {p.original && (
                        <span className="ml-auto text-[10px] font-bold text-[#4ade80]">
                          -{Math.round((1 - p.price / p.original) * 100)}%
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex items-center justify-center gap-2">
              {[1, 2, 3, "…", 39].map((p, i) => (
                <button
                  key={i}
                  type="button"
                  className={`h-9 min-w-[36px] px-3 rounded-full text-sm font-semibold transition ${
                    p === 1
                      ? "bg-gradient-to-r from-[#1d4ed8] to-[#ef4444] text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                      : "glass text-white/70 hover:text-white"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button type="button" className="h-9 px-4 rounded-full glass text-sm text-white/70 hover:text-white transition">Next →</button>
            </div>
          </main>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="mt-16 border-t border-white/5 bg-[#04050c]/60 backdrop-blur-md">
        <div className="mx-auto max-w-[1700px] px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://s1.phantasm.host/storage/layouts/kpZKCKHtbspVvwoAENnelAJE7ueZgHNvRCdHCUvj.png" alt="American Distributors LLC" className="h-8 w-auto object-contain" />
              <span className="text-base font-black tracking-tight text-gradient">American Distributors LLC</span>
            </div>
            <p className="mt-3 text-white/60 max-w-sm">Premium vape &amp; smoke shop. Authorized resellers for 200+ global brands.</p>
            <div className="mt-4 flex items-center gap-2">
              {["X", "IG", "YT", "TT", "DC"].map((s) => (
                <a key={s} href="#" className="h-9 w-9 rounded-full glass flex items-center justify-center text-xs font-bold text-white/80 hover:text-white">{s}</a>
              ))}
            </div>
          </div>
          {[
            { title: "Shop", links: ["New arrivals", "Trending", "Deals", "Bundles", "Gift cards"] },
            { title: "Support", links: ["Help center", "Track order", "Returns", "Warranty", "Contact"] },
            { title: "Company", links: ["About", "Careers", "Press", "Sustainability", "Affiliates"] },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold">{title}</h4>
              <ul className="mt-3 space-y-2">
                {links.map((l) => <li key={l}><a href="#" className="text-white/75 hover:text-white transition">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/5">
          <div className="mx-auto max-w-[1700px] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <p>© 2026 American Distributors LLC. All rights reserved.</p>
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
