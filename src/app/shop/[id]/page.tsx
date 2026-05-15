'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import ThemeToggle from '../../components/ThemeToggle';
import { products, categories } from '../data';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  const [activeImg, setActiveImg] = useState(0);
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-2xl">
        Product not found.
      </div>
    );
  }

  const imgs = [product.img, product.img, product.img, product.img];
  const recommended = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  const setQty = (flavor: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [flavor]: Math.max(0, (prev[flavor] ?? 0) + delta),
    }));
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">

      {/* Promo bar */}
      <div className="relative overflow-hidden border-b border-white/5 text-[11px] sm:text-[12px]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#2563eb,#60a5fa,#ef4444,#2563eb)] bg-[length:300%_100%] opacity-90 animate-marquee" />
        <div className="relative flex items-center justify-center gap-3 sm:gap-8 py-2 text-white font-medium tracking-wide whitespace-nowrap">
          <span>⚡ FLASH SALE 12:34:56</span>
          <span className="opacity-70 hidden sm:inline">·</span>
          <span className="hidden sm:inline">FREE SHIPPING OVER $99</span>
          <span className="opacity-70 hidden md:inline">·</span>
          <span className="hidden md:inline">10% OFF · <b>VAPEHUB10</b></span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 site-header border-b border-white/10">
        <div className="mx-auto max-w-[1700px] px-3 sm:px-6 h-14 sm:h-16 flex items-center gap-2 sm:gap-4 lg:gap-6">
          <a href="/" className="flex items-center gap-2 shrink-0">
            <span className="relative inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[conic-gradient(from_0deg,#2563eb,#60a5fa,#ef4444,#2563eb)]">
              <span className="absolute inset-[2px] rounded-[10px] bg-[#06070f] flex items-center justify-center text-white font-black text-base sm:text-lg">V</span>
            </span>
            <span className="hidden sm:inline text-lg sm:text-xl font-black tracking-tight text-gradient">Vape Hub</span>
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
              <input type="text" placeholder="Search products…" className="w-full h-9 sm:h-10 rounded-full bg-white/[0.04] border border-white/10 pl-10 pr-24 text-sm text-white placeholder-white/40 outline-none focus:border-[#2563eb] transition" />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <button type="button" className="hidden sm:block absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3 rounded-full text-xs font-semibold bg-gradient-to-r from-[#1d4ed8] to-[#ef4444] text-white">Search</button>
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="hidden sm:block"><ThemeToggle /></div>
            <button type="button" aria-label="Account" className="relative h-10 w-10 rounded-full glass flex items-center justify-center text-white/80 hover:text-white transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>
            </button>
            <button type="button" aria-label="Cart" className="relative h-10 w-10 rounded-full glass flex items-center justify-center text-white/80 hover:text-white transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3h2l2.4 12.3a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="10" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-br from-[#ef4444] to-[#2563eb] text-[10px] font-bold text-white flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="border-b border-white/5 px-4 sm:px-8 py-3">
        <nav className="flex items-center gap-2 text-xs text-white/50 max-w-[1700px] mx-auto">
          <a href="/" className="hover:text-white transition">Home</a>
          <span>/</span>
          <a href="/shop" className="hover:text-white transition">Shop</a>
          <span>/</span>
          <span className="text-white/80 truncate max-w-xs">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="flex-1 max-w-[1700px] mx-auto w-full px-3 sm:px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* ── Left sidebar ── */}
          <aside className="w-full lg:w-60 shrink-0 space-y-4">

            {/* Recommended */}
            {recommended.length > 0 && (
              <div className="glass rounded-2xl p-4">
                <h3 className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-3">Recommended Products</h3>
                <div className="space-y-3">
                  {recommended.map((r) => (
                    <a key={r.id} href={`/shop/${r.id}`} className="flex items-center gap-3 hover:bg-white/5 rounded-xl p-2 transition group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={r.img} alt={r.name} className="h-14 w-14 rounded-lg object-cover shrink-0 border border-white/10" loading="lazy" />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-white/85 group-hover:text-white leading-snug line-clamp-2">{r.name}</p>
                        <p className="text-xs text-[#60a5fa] font-bold mt-0.5">${r.price.toFixed(2)}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Category sidebar */}
            <div className="glass rounded-2xl p-3">
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
              <div className="px-3 pt-4 pb-2">
                <h3 className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold">Categories</h3>
              </div>
              <ul className="space-y-0.5">
                {categories.slice(1).map((c) => (
                  <li key={c.name}>
                    <a href="#" className="group flex items-center justify-between px-3 py-2.5 rounded-xl text-base text-white/80 hover:bg-white/5 hover:text-white transition">
                      <span className="flex items-center gap-2 min-w-0 truncate">
                        {"icon" in c && <span className="text-lg">{c.icon}</span>}
                        <span className="uppercase tracking-wide text-sm font-semibold truncate">{c.name}</span>
                        {"hot" in c && c.hot && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full border bg-[#ef4444]/20 border-[#ef4444]/40 text-[#fca5a5]">HOT</span>}
                      </span>
                      <span className="text-white/40 group-hover:text-white/80">›</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ── Center: image gallery ── */}
          <div className="w-full lg:w-[380px] shrink-0">
            <div className="glass rounded-2xl overflow-hidden border border-white/10 aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgs[activeImg]} alt={product.name} className="w-full h-full object-cover" loading="eager" />
            </div>
            {/* Thumbnails */}
            <div className="mt-3 grid grid-cols-4 gap-2">
              {imgs.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={`relative overflow-hidden rounded-xl border-2 transition aspect-square ${activeImg === i ? 'border-[#2563eb] shadow-[0_0_12px_rgba(37,99,235,0.6)]' : 'border-white/10 hover:border-white/30'}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`View ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {/* ── Right: product info ── */}
          <div className="flex-1 min-w-0">

            {/* Notice */}
            <div className="mb-4 px-4 py-2.5 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/30 text-[#fca5a5] text-xs font-medium">
              ⚠ Please note: All purchases are final and non-refundable.
            </div>

            {/* Title & price */}
            <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3 flex-wrap">
              <span className="text-3xl font-black text-[#60a5fa]">${product.price.toFixed(2)}</span>
              {product.original && (
                <span className="text-lg text-white/35 line-through">${product.original.toFixed(2)}</span>
              )}
              {product.original && (
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#fbbf24]/20 border border-[#fbbf24]/40 text-[#fde68a]">
                  SAVE {Math.round((1 - product.price / product.original) * 100)}%
                </span>
              )}
            </div>

            {/* Meta */}
            <div className="mt-4 space-y-1.5 text-sm">
              <p><span className="text-white/40 w-24 inline-block">SKU:</span><span className="text-white/80">{product.sku}</span></p>
              <p><span className="text-white/40 w-24 inline-block">Category:</span><a href="/shop" className="text-[#60a5fa] hover:underline">{product.category}</a></p>
              <p><span className="text-white/40 w-24 inline-block">Brand:</span><span className="text-white/80">Vape Hub Exclusive</span></p>
            </div>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className={`h-4 w-4 ${i < Math.round(product.rating) ? 'text-[#fbbf24]' : 'text-white/20'}`} fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-white/60">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Flavor / variant table */}
            <div className="mt-6">
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-base">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.04]">
                      <th className="text-left px-4 py-3.5 text-sm uppercase tracking-widest text-white/50 font-semibold">Flavor</th>
                      <th className="text-center px-4 py-3.5 text-sm uppercase tracking-widest text-white/50 font-semibold">Price</th>
                      <th className="text-center px-4 py-3.5 text-sm uppercase tracking-widest text-white/50 font-semibold">Stock</th>
                      <th className="text-center px-4 py-3.5 text-sm uppercase tracking-widest text-white/50 font-semibold">Quantity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {product.flavors.map((f) => (
                      <tr key={f.name} className="hover:bg-white/[0.03] transition">
                        <td className="px-4 py-3.5 text-white/85 font-medium">{f.name}</td>
                        <td className="px-4 py-3.5 text-center text-[#60a5fa] font-bold">${product.price.toFixed(2)}</td>
                        <td className="px-4 py-3.5 text-center text-white/60">{f.stock}</td>
                        <td className="px-4 py-3.5">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              type="button"
                              onClick={() => setQty(f.name, -1)}
                              className="h-8 w-8 rounded-full glass flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition text-xl leading-none"
                            >
                              −
                            </button>
                            <span className="w-9 text-center text-white font-semibold tabular-nums text-base">
                              {quantities[f.name] ?? 0}
                            </span>
                            <button
                              type="button"
                              onClick={() => setQty(f.name, 1)}
                              className="h-8 w-8 rounded-full glass flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition text-xl leading-none"
                            >
                              +
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button type="button" className="flex-1 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] text-white shadow-[0_8px_30px_-6px_rgba(37,99,235,0.7)] hover:brightness-110 transition">
                Add to Cart
              </button>
              <button type="button" className="flex-1 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#ef4444] to-[#dc2626] text-white shadow-[0_8px_30px_-6px_rgba(239,68,68,0.6)] hover:brightness-110 transition">
                Buy Now
              </button>
              <button type="button" aria-label="Add to wishlist" className="h-12 w-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-[#ef4444] transition border border-white/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Description ── */}
        <div className="mt-10 glass rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-black text-white mb-1">{product.name}</h2>
          <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-4">Description</h3>
          <p className="text-white/70 leading-relaxed">{product.description}</p>
          <h3 className="mt-6 text-sm font-bold text-white/60 uppercase tracking-widest mb-3">Features</h3>
          <ul className="space-y-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-white/75">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2563eb] shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/5 bg-[#04050c]/60 backdrop-blur-md">
        <div className="mx-auto max-w-[1700px] px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[conic-gradient(from_0deg,#2563eb,#60a5fa,#ef4444,#2563eb)]">
              <span className="absolute inset-[2px] rounded-[10px] bg-[#06070f] flex items-center justify-center text-white font-black text-sm">V</span>
            </span>
            <span className="font-black tracking-tight text-gradient text-base">Vape Hub</span>
          </div>
          <p>© 2026 Vape Hub. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
