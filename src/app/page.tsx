import ThemeToggle from "./components/ThemeToggle";
import PromoPopup from "./components/PromoPopup";
import HeroCarousel from "./components/HeroCarousel";
import BrandMarquee from "./components/BrandMarquee";
import { products } from "./shop/data";

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
  "https://s1.phantasm.host/storage/layouts/2026/05/eyeJo2eTK9qjECDYDyZQGEHShSL76CmGuZ5nA81N.jpg",
  "https://s1.phantasm.host/storage/layouts/2026/05/RSI9kPMXgXW8Tz6GEnNtrohQ1pWbeUguko8Rsjif.jpg",
  "https://s1.phantasm.host/storage/layouts/2026/05/PJElflRHjMeT50JjRsDJspraX9c4FOZ7JujnU0AM.jpg",
  "https://s1.phantasm.host/storage/layouts/2026/05/Ro5EHoZQoNAQOuQrsh2jTHQZ2hXEdfp7eJC1Z1FI.jpg",
];

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

const newBrands = [
  { name: "JIMMY", img: "https://splash-dev.phantasm.host/wp-content/uploads/2025/12/JIMMY_.jpg", tag: "Premium" },
  { name: "RAW", img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Raw.jpg", tag: "Organic" },
  { name: "Blazy Susan", img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/blazy-susan.jpg", tag: "Best Seller" },
  { name: "King Palm", img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/king-palm.jpg", tag: "Natural" },
  { name: "AWS", img: "https://splash-dev.phantasm.host/wp-content/uploads/2026/04/aws.jpg", tag: "Exclusive" },
];

const trustItems = [
  { icon: "🚚", label: "Free Shipping", sub: "On orders over $99" },
  { icon: "🏷️", label: "500+ Brands", sub: "Authorized resellers" },
  { icon: "👥", label: "50,000+ Customers", sub: "Trusted & loved" },
  { icon: "✅", label: "Texas Compliant", sub: "All products verified" },
  { icon: "🔒", label: "Secure Checkout", sub: "256-bit SSL" },
];

const stats = [
  { value: "50K+", label: "Happy Customers", icon: "👥" },
  { value: "500+", label: "Premium Brands", icon: "🏆" },
  { value: "10K+", label: "Products", icon: "📦" },
  { value: "99%", label: "Satisfaction Rate", icon: "⭐" },
];

const testimonials = [
  { name: "Jordan M.", stars: 5, text: "Best vape shop online. Super fast shipping and legit products. VAPEHUB10 always works!", avatar: "J" },
  { name: "Priya S.", stars: 5, text: "Incredible selection. Found my favorite Juice Head flavors here and they arrived in 2 days!", avatar: "P" },
  { name: "Marcus T.", stars: 5, text: "Texas compliant, great prices, even better customer service. Won't shop anywhere else.", avatar: "M" },
  { name: "Ashley R.", stars: 5, text: "Buy 5 Get 1 Free is real! Got 6 disposables for the price of 5. Huge W.", avatar: "A" },
];

export default function Home() {
  const featured = products.slice(0, 8);
  const hotDeals = products.filter((p) => p.badge).slice(0, 4);
  const newArrivals = products.slice(10, 16);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <PromoPopup />

      {/* ── Fixed side banners — outside offset wrapper so they hug viewport edges ── */}
      <div className="hidden 2xl:flex fixed top-0 left-0 w-52 h-screen flex-col gap-1 p-1 z-40 overflow-hidden">
        <FixedSideBanner src={categoryTiles[0]} alt="Side promo 1" />
        <FixedSideBanner src={categoryTiles[6]} alt="Side promo 2" />
        <FixedSideBanner src={categoryTiles[1]} alt="Side promo 3" />
        <FixedSideBanner src={categoryTiles[7]} alt="Side promo 4" />
      </div>
      <div className="hidden 2xl:flex fixed top-0 right-0 w-52 h-screen flex-col gap-1 p-1 z-40 overflow-hidden">
        <FixedSideBanner src={categoryTiles[3]} alt="Side promo 5" />
        <FixedSideBanner src={categoryTiles[9]} alt="Side promo 6" />
        <FixedSideBanner src={categoryTiles[4]} alt="Side promo 7" />
        <FixedSideBanner src={categoryTiles[10]} alt="Side promo 8" />
      </div>

      {/* ── Everything below is offset so banners never overlap ── */}
      <div className="flex flex-col flex-1 2xl:ml-52 2xl:mr-52">

      {/* ── Animated Promo Bar ── */}
      <div className="relative overflow-hidden border-b border-white/5 text-[11px] sm:text-[12px]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#2563eb,#60a5fa,#ef4444,#f59e0b,#2563eb)] bg-[length:300%_100%] animate-bg-pan opacity-90" />
        <div className="relative py-2 overflow-hidden">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
            {[
              "⚡ FLASH SALE · 12:34:56",
              "·",
              "FREE SHIPPING OVER $99",
              "·",
              "10% OFF · USE CODE VAPEHUB10",
              "·",
              "BUY 5 GET 1 FREE on E-Liquids",
              "·",
              "500+ PREMIUM BRANDS",
              "·",
              "TEXAS COMPLIANT",
              "·",
              "50,000+ HAPPY CUSTOMERS",
              "·",
              "⚡ FLASH SALE · 12:34:56",
              "·",
              "FREE SHIPPING OVER $99",
              "·",
              "10% OFF · USE CODE VAPEHUB10",
              "·",
              "BUY 5 GET 1 FREE on E-Liquids",
              "·",
              "500+ PREMIUM BRANDS",
              "·",
              "TEXAS COMPLIANT",
              "·",
              "50,000+ HAPPY CUSTOMERS",
              "·",
            ].map((t, i) => (
              <span key={i} className={`text-white font-semibold tracking-wide keep-white ${t === '·' ? 'opacity-50' : ''}`}>{t}</span>
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
            <a className="text-white font-semibold border-b-2 border-[#2563eb] pb-0.5 transition" href="/">Home</a>
            <a className="hover:text-white transition hover:border-b-2 hover:border-[#ef4444] pb-0.5" href="/shop">Shop</a>
            <a className="hover:text-white transition hover:border-b-2 hover:border-[#ef4444] pb-0.5" href="/deals">Deals</a>
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
            <button type="button" aria-label="Account" className="relative h-10 w-10 rounded-full glass flex items-center justify-center text-white/80 hover:text-white transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>
            </button>
            <button type="button" aria-label="Cart" className="relative h-10 w-10 rounded-full glass flex items-center justify-center text-white/80 hover:text-white transition animate-glow-blue">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3h2l2.4 12.3a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="10" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-br from-[#ef4444] to-[#2563eb] text-[10px] font-bold text-white keep-white flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="flex-1 mt-4 sm:mt-6 px-3 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-5">

          {/* ── Sidebar ── */}
          <aside className="w-full lg:w-72 lg:shrink-0">
            <div className="glass rounded-2xl p-3 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto scrollbar-hide">
              <div className="space-y-2 px-1 pt-1">
                <a href="#" className="relative block rounded-xl px-4 py-3 text-center font-black tracking-wider text-white bg-[linear-gradient(90deg,#ef4444,#ff5d2a,#ffd23d,#ef4444)] bg-[length:300%_100%] animate-marquee shadow-[0_8px_24px_-6px_rgba(239,68,68,0.55)] keep-white">
                  $ DOLLAR SALE $
                </a>
                <a href="#" className="block rounded-xl px-4 py-3 text-center bg-white/[0.04] border border-white/10 hover:border-white/25 transition">
                  <div className="text-xl font-black tracking-wider text-gradient-strong">OFFERS</div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/55">Texas Compliant</div>
                </a>
                <a href="#" className="block rounded-xl px-4 py-2.5 text-center text-xs uppercase tracking-[0.22em] font-bold bg-white/[0.03] border border-white/10 text-white/80 hover:text-white hover:bg-white/[0.07] transition">
                  Clearance
                </a>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 px-1">
                <a href="#" className="text-center text-xs font-bold uppercase tracking-wider rounded-lg px-2 py-2.5 bg-gradient-to-br from-[#e11d48] to-[#9f1239] text-white hover:brightness-110 transition keep-white">Shop by Brand</a>
                <a href="#" className="text-center text-xs font-bold uppercase tracking-wider rounded-lg px-2 py-2.5 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-white hover:brightness-110 transition keep-white">Shop by List</a>
              </div>
              <div className="px-3 pt-4 pb-2 flex items-center justify-between">
                <h3 className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold">Categories</h3>
                <span className="chip">All</span>
              </div>
              <ul className="space-y-1">
                {categories.map((c) => (
                  <li key={c.name}>
                    <a href="#" className="group flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-white/85 hover:bg-white/5 hover:text-white transition">
                      <span className="flex items-center gap-3 min-w-0">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06] border border-white/10 text-base">{c.icon}</span>
                        <span className="truncate uppercase tracking-wide text-[13px] font-semibold">{c.name}</span>
                        {c.hot && <span className="chip !text-[10px] !px-1.5 !py-0.5 bg-[#ef4444]/20 border-[#ef4444]/40 text-[#fca5a5]">HOT</span>}
                      </span>
                      <span className="text-white/40 group-hover:text-white/80 transition">›</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3 mx-1 p-4 rounded-xl bg-[radial-gradient(120%_120%_at_0%_0%,rgba(37,99,235,0.28),transparent_60%),radial-gradient(120%_120%_at_100%_100%,rgba(239,68,68,0.22),transparent_60%)] border border-white/10">
                <p className="text-[11px] uppercase tracking-widest text-white/60">Members get</p>
                <p className="mt-1 text-lg font-bold text-white leading-tight">Extra 15% off<br />+ free express</p>
                <button type="button" className="mt-3 cta-primary !py-2 !px-4 !text-xs">Join Rewards</button>
              </div>
            </div>
          </aside>

          {/* ── Main ── */}
          <main className="flex-1 min-w-0 space-y-10">

            {/* 1 ── ANIMATED HERO CAROUSEL ── */}
            <section style={{ minHeight: 480 }}>
              <HeroCarousel />
            </section>

            {/* 2 ── TRUST STRIP (animated slide-in) ── */}
            <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {trustItems.map((t, i) => (
                <div
                  key={t.label}
                  className="glass rounded-2xl px-4 py-3 flex items-center gap-3 hover:border-[#2563eb]/40 hover:shadow-[0_8px_24px_-8px_rgba(37,99,235,0.4)] transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="text-2xl shrink-0 animate-float" style={{ animationDelay: `${i * 200}ms` }}>{t.icon}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white truncate">{t.label}</p>
                    <p className="text-[11px] text-white/50 truncate">{t.sub}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* 3 ── FLASH DEALS ── */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="relative">
                    <div className="absolute -inset-1.5 rounded-full bg-[#ef4444] blur-lg opacity-50 animate-pulse" />
                    <span className="relative px-4 py-2 rounded-full bg-gradient-to-r from-[#ef4444] to-[#dc2626] text-white font-black text-sm uppercase tracking-wider keep-white">
                      🔥 Flash Deals
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {["12", "34", "56"].map((n, i) => (
                      <span key={i} className="flex items-center gap-1.5">
                        <span className="px-3 py-1.5 rounded-lg bg-[#0d1117] border border-[#ef4444]/30 text-white font-black text-xl tabular-nums shadow-[0_0_14px_rgba(239,68,68,0.3)]">{n}</span>
                        {i < 2 && <span className="text-[#ef4444] font-black text-xl animate-pulse">:</span>}
                      </span>
                    ))}
                  </div>
                </div>
                <a href="/shop" className="text-sm font-semibold text-gradient hover:opacity-80 transition">View all →</a>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {hotDeals.map((p, i) => (
                  <ProductCard key={p.id} product={p} hot delay={i * 80} />
                ))}
              </div>
            </section>

            {/* 4 ── FLANK BANNERS + CENTER ── */}
            <section className="grid grid-cols-4 gap-3">
              <div className="col-span-1 flex flex-col gap-3">
                <FlankBanner src={banners[0]} alt="Promo A" eager />
                <FlankBanner src={banners[1]} alt="Promo B" />
              </div>
              <div className="col-span-2 relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://splash-dev.phantasm.host/wp-content/uploads/2026/04/banner-strip-scaled.jpg" alt="Banner" className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white keep-white font-black text-lg drop-shadow">New Arrivals</p>
                  <a href="/shop" className="mt-1 inline-block text-xs text-white/80 keep-white hover:text-white border-b border-white/40 transition">Shop now →</a>
                </div>
              </div>
              <div className="col-span-1 flex flex-col gap-3">
                <FlankBanner src={banners[2]} alt="Promo C" />
                <FlankBanner src={banners[3]} alt="Promo D" />
              </div>
            </section>

            {/* 5 ── FEATURED PRODUCTS ── */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <span className="chip animate-badge-pop">Top Picks · This Week</span>
                  <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight animate-slide-left">Featured Products</h2>
                  <p className="text-white/50 text-sm mt-1">Hand-selected from our best-selling lineup</p>
                </div>
                <a href="/shop" className="text-sm font-semibold text-gradient hover:opacity-80 transition">Shop all →</a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {featured.map((p, i) => (
                  <ProductCard key={p.id} product={p} delay={i * 60} />
                ))}
              </div>
            </section>

            {/* 6 ── VIDEO FEATURE: FVKD V2 ── */}
            <section className="relative overflow-hidden rounded-2xl border border-white/10">
              <video
                src="https://splash-dev.phantasm.host/wp-content/uploads/2026/04/FVKD-V2.mp4"
                className="w-full h-[340px] sm:h-[460px] object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-14">
                <span className="inline-flex w-fit items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ef4444]/20 border border-[#ef4444]/40 text-[#fca5a5] text-xs font-black uppercase tracking-widest mb-4 animate-badge-pop">
                  🚀 Limited Edition
                </span>
                <h2 className="text-4xl sm:text-6xl font-black text-white keep-white leading-none animate-hero-text">
                  FVKD <span className="text-[#ef4444]">V2</span>
                </h2>
                <p className="mt-3 text-white/70 keep-white max-w-md text-sm sm:text-base leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
                  The most anticipated vape drop of 2026. Bold flavor. Unreal clouds. Pre-order yours before it sells out.
                </p>
                <div className="mt-6 flex gap-3 animate-fade-up" style={{ animationDelay: '350ms' }}>
                  <a href="/shop" className="px-6 py-3 rounded-full font-bold text-sm bg-[#ef4444] text-white keep-white hover:bg-[#dc2626] hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_-6px_rgba(239,68,68,0.7)]">Pre-Order Now</a>
                  <a href="/shop" className="px-6 py-3 rounded-full font-bold text-sm bg-white/10 border border-white/25 text-white keep-white hover:bg-white/20 transition-all duration-300">Learn More</a>
                </div>
              </div>
            </section>

            {/* 7 ── GIF SPOTLIGHT + STATS ── */}
            <section className="grid md:grid-cols-2 gap-5">
              {/* GIF card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Task-10roadtrip.gif"
                  alt="Road Trip Collection"
                  className="w-full h-full object-cover min-h-[260px] group-hover:scale-[1.04] transition duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="chip !bg-[#f59e0b]/20 !border-[#f59e0b]/40 text-[#fde68a] mb-2">🛣️ Road Trip Collection</span>
                  <h3 className="text-2xl font-black text-white keep-white">On-The-Go<br />Flavors</h3>
                  <a href="/shop" className="mt-3 inline-block px-5 py-2 rounded-full text-xs font-bold bg-[#f59e0b] text-black keep-white hover:brightness-110 transition">Explore →</a>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="glass rounded-2xl p-5 flex flex-col justify-between hover:border-[#2563eb]/40 hover:shadow-[0_12px_40px_-10px_rgba(37,99,235,0.4)] transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <span className="text-3xl">{s.icon}</span>
                    <div>
                      <p className="text-3xl font-black text-gradient-strong">{s.value}</p>
                      <p className="text-sm text-white/60 mt-0.5">{s.label}</p>
                    </div>
                    {/* Animated bar */}
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden mt-3">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#2563eb] to-[#ef4444] origin-left"
                        style={{ animation: 'bar-grow 1.5s ease-out both', animationDelay: `${i * 200 + 300}ms` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 8 ── NEW ARRIVALS ── */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <span className="chip">Just Landed</span>
                  <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">New Arrivals</h2>
                </div>
                <a href="/shop" className="text-sm font-semibold text-gradient hover:opacity-80 transition">See all new →</a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                {newArrivals.map((p, i) => (
                  <ProductCard key={p.id} product={p} delay={i * 70} />
                ))}
              </div>
            </section>

            {/* 9 ── BUY 5 GET 1 PROMO ── */}
            <section className="relative overflow-hidden rounded-2xl border border-[#ef4444]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] via-[#0d0d1f] to-[#050820]" />
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#ef4444] blur-[120px] opacity-25 pointer-events-none animate-pulse" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#2563eb] blur-[120px] opacity-25 pointer-events-none animate-pulse" />
              <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
              <div className="relative grid md:grid-cols-2 gap-6 items-center p-8 md:p-12">
                <div className="animate-slide-left">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ef4444]/15 border border-[#ef4444]/30 text-[#fca5a5] text-xs font-black uppercase tracking-wider">
                    🎁 Exclusive Offer · Limited Time
                  </span>
                  <h2 className="mt-4 text-5xl md:text-7xl font-black text-white keep-white leading-none">
                    Buy <span className="text-[#60a5fa]">5</span><br />
                    Get <span className="text-[#ef4444] animate-glow-red inline-block rounded-xl px-2">1 FREE</span>
                  </h2>
                  <p className="mt-4 text-white/65 keep-white text-sm leading-relaxed max-w-sm">
                    Mix and match any 5 products from our E-Liquids or Disposables range and get the lowest-priced item absolutely free. No minimum spend required.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-sm text-white/50">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">✓ Mix any flavors</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">✓ Any brand</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">✓ Auto applied</span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href="/shop" className="cta-primary !py-3 !px-8 !text-sm">Shop Now →</a>
                    <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-white/5 border border-white/10">
                      <span className="text-white/40 text-xs">Extra 10% with</span>
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
                    <div key={i} className="relative overflow-hidden rounded-xl border border-white/10 group hover:border-white/30 transition">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt="" className="w-full h-36 object-cover group-hover:scale-[1.06] transition duration-500" loading="lazy" />
                      {i === 0 && (
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#ef4444] text-white keep-white text-[10px] font-black">FREE</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 10 ── BRAND MARQUEE ── */}
            <section>
              <div className="mb-4">
                <span className="chip">500+ Partners</span>
                <h2 className="mt-2 text-2xl font-black">Featured Brands</h2>
              </div>
              <BrandMarquee />
            </section>

            {/* 11 ── CATEGORY TILES ── */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <span className="chip">Browse</span>
                  <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">Shop by Category</h2>
                </div>
                <a href="/shop" className="text-sm font-semibold text-gradient hover:opacity-80">All categories →</a>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {categories.slice(0, 12).map((cat, i) => (
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

            {/* 12 ── NEW BRAND SHOWCASE ── */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <span className="chip">Exclusive Partners</span>
                  <h2 className="mt-2 text-2xl md:text-3xl font-black">Top Brands</h2>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {newBrands.map((b, i) => (
                  <a
                    key={b.name}
                    href="#"
                    className="group relative block rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 hover:shadow-[0_20px_50px_-12px_rgba(239,68,68,0.5)] transition-all duration-300 hover:-translate-y-2 animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={b.img} alt={b.name} className="block w-full h-40 object-cover group-hover:scale-[1.06] transition duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-sm font-black text-white keep-white">{b.name}</p>
                      <p className="text-[10px] text-white/60 keep-white">{b.tag}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* 13 ── TESTIMONIALS ── */}
            <section>
              <div className="mb-5 text-center">
                <span className="chip mx-auto">Customer Love</span>
                <h2 className="mt-2 text-2xl md:text-3xl font-black">What Our Customers Say</h2>
                <p className="text-white/50 text-sm mt-1">50,000+ happy customers can&apos;t be wrong</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {testimonials.map((t, i) => (
                  <div
                    key={t.name}
                    className="glass rounded-2xl p-5 flex flex-col gap-3 hover:border-[#2563eb]/30 hover:-translate-y-1 transition-all duration-300 animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
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

            {/* 14 ── NEWSLETTER ── */}
            <section>
              <div className="relative overflow-hidden rounded-2xl glass-strong p-8 md:p-12">
                <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#60a5fa] blur-[120px] opacity-30 pointer-events-none animate-pulse" />
                <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#ef4444] blur-[120px] opacity-30 pointer-events-none animate-pulse" />
                <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none rounded-2xl" />
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="chip">Newsletter · No spam, ever</span>
                    <h2 className="mt-3 text-3xl md:text-4xl font-black leading-tight">
                      Get drops <span className="text-gradient-strong">before</span><br className="hidden sm:block" /> they go live.
                    </h2>
                    <p className="mt-3 text-white/65 max-w-md text-sm leading-relaxed">
                      Flash sales, brand collabs, members-only combos. Plus <b className="text-white">10% off</b> your first order when you join.
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/50">
                      <span>✓ No spam</span>
                      <span>✓ Unsubscribe anytime</span>
                      <span>✓ Exclusive deals</span>
                    </div>
                  </div>
                  <form className="flex flex-col gap-3" action="#">
                    <input type="email" required placeholder="your@email.com" className="h-12 rounded-full bg-white/[0.05] border border-white/10 px-5 text-white placeholder-white/40 outline-none focus:border-[#2563eb] transition text-sm" />
                    <button className="cta-primary !h-12 !px-7 !text-sm" type="submit">Subscribe & Get 10% Off 🎉</button>
                  </form>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

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
      </div>{/* end 2xl offset wrapper */}
    </div>
  );
}

/* ── Sub-components ── */

function ProductCard({
  product,
  hot = false,
  delay = 0,
}: {
  product: typeof products[0];
  hot?: boolean;
  delay?: number;
}) {
  const discount = product.original
    ? Math.round((1 - product.price / product.original) * 100)
    : null;

  return (
    <a
      href={`/shop/${product.id}`}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 hover:border-[#2563eb]/60 bg-gradient-to-b from-white/[0.05] to-white/[0.01] hover:shadow-[0_24px_64px_-12px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-1.5 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-[1.08] transition duration-500" loading="lazy" />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.badge && <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-[#ef4444] text-white keep-white shadow-lg">{product.badge}</span>}
          {discount && <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#fbbf24]/90 text-black shadow">-{discount}%</span>}
        </div>
        <span className="absolute top-2 right-2 h-7 w-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-[#ef4444] opacity-0 group-hover:opacity-100 transition keep-white">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition duration-300">
          <span className="block w-full py-2 rounded-xl text-xs font-bold bg-[#2563eb] text-white keep-white text-center shadow-[0_4px_16px_rgba(37,99,235,0.6)]">Add to Cart</span>
        </div>
      </div>
      {/* Info */}
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
          {hot && <span className="text-[10px] font-bold text-[#fbbf24] animate-pulse">HOT</span>}
        </div>
      </div>
    </a>
  );
}

function FlankBanner({ src, alt, eager = false }: { src: string; alt: string; eager?: boolean }) {
  return (
    <a href="#" className="relative block rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 hover:shadow-[0_12px_40px_-12px_rgba(37,99,235,0.4)] transition group">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="block w-full h-full object-cover aspect-square group-hover:scale-[1.05] transition duration-500" loading={eager ? "eager" : "lazy"} />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
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
          <li key={l}>
            <a href="#" className="text-white/70 hover:text-white transition text-sm">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
