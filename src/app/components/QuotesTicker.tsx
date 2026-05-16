'use client';
import { useState, useEffect, useCallback } from 'react';

const quotes = [
  {
    text: "The best cloud you'll ever chase is the one already in your hand.",
    by: "Vape Hub Community",
    role: "50,000+ Members",
    accent: '#2563eb',
  },
  {
    text: "Flavor is an art form. Every pull is your signature.",
    by: "Premium Vaper",
    role: "Texas, USA",
    accent: '#a855f7',
  },
  {
    text: "Life's too short for ordinary vapes. Elevate every single session.",
    by: "Vape Hub Motto",
    role: "Est. 2021",
    accent: '#ef4444',
  },
  {
    text: "Find your flavor. Own your vibe. Define your culture.",
    by: "Our Customers",
    role: "Worldwide",
    accent: '#10b981',
  },
  {
    text: "Premium isn't just a price tag — it's a promise we keep on every order.",
    by: "Vape Hub Promise",
    role: "Every Order",
    accent: '#f59e0b',
  },
  {
    text: "Born to explore the flavors the world hasn't tasted yet.",
    by: "The Culture",
    role: "Our DNA",
    accent: '#06b6d4',
  },
];

export default function QuotesTicker() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const advance = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % quotes.length);
      setVisible(true);
    }, 600);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, 6000);
    return () => clearInterval(id);
  }, [advance]);

  const q = quotes[current];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 py-16 px-6 sm:px-14">
      {/* Background */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse 80% 70% at 50% 50%, ${q.accent}18, transparent 70%), #04060f`,
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      {/* Corner orbs */}
      <div className="absolute -top-12 -left-12 h-36 w-36 rounded-full blur-[60px] opacity-30 animate-pulse pointer-events-none" style={{ background: q.accent }} />
      <div className="absolute -bottom-12 -right-12 h-36 w-36 rounded-full blur-[60px] opacity-20 animate-pulse pointer-events-none" style={{ background: q.accent, animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

        {/* Label */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-black uppercase tracking-widest text-white keep-white mb-8 animate-badge-pop"
          style={{ borderColor: `${q.accent}50`, background: `${q.accent}15` }}
        >
          <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: q.accent }} />
          Voices of the Community
        </div>

        {/* Big quote mark */}
        <div
          className="text-8xl sm:text-9xl font-black leading-none mb-2 select-none pointer-events-none"
          style={{
            color: q.accent,
            opacity: 0.25,
            fontFamily: 'Georgia, serif',
            lineHeight: 0.8,
            transition: 'color 0.6s',
          }}
        >
          "
        </div>

        {/* Quote text */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
            {q.text}
          </p>

          <div className="mt-6 flex flex-col items-center gap-1">
            <div className="h-px w-12 rounded-full mb-3" style={{ background: q.accent }} />
            <p className="text-sm font-black text-white/90">{q.by}</p>
            <p className="text-xs text-white/40 uppercase tracking-widest">{q.role}</p>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center gap-2 mt-10">
          {quotes.map((qt, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Quote ${i + 1}`}
              onClick={() => { setVisible(false); setTimeout(() => { setCurrent(i); setVisible(true); }, 300); }}
              className="rounded-full transition-all duration-300 focus:outline-none"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? qt.accent : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-4 w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            key={current}
            className="h-full rounded-full origin-left"
            style={{
              background: q.accent,
              animation: 'bar-grow 6000ms linear forwards',
            }}
          />
        </div>
      </div>
    </section>
  );
}
