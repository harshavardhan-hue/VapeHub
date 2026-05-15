'use client';

const brands = [
  { name: 'JIMMY', img: 'https://splash-dev.phantasm.host/wp-content/uploads/2025/12/JIMMY_.jpg' },
  { name: 'RAW', img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Raw.jpg' },
  { name: 'Blazy Susan', img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/blazy-susan.jpg' },
  { name: 'King Palm', img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/king-palm.jpg' },
  { name: 'AWS', img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/aws.jpg' },
  { name: 'Juice Head', img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/juice-head-scaled.jpg' },
  { name: 'FVKD', img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/Alien_avif.avif' },
  { name: 'Zour', img: 'https://splash-dev.phantasm.host/wp-content/uploads/2026/04/task-6.avif' },
];

export default function BrandMarquee() {
  const doubled = [...brands, ...brands];

  return (
    <div className="relative overflow-hidden rounded-2xl glass border border-white/10 py-4">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050812] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050812] to-transparent z-10 pointer-events-none" />

      <div className="flex gap-6 animate-scroll-x" style={{ width: 'max-content' }}>
        {doubled.map((b, i) => (
          <a
            key={i}
            href="#"
            className="flex items-center gap-3 px-5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.08] transition-all duration-300 shrink-0 group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={b.img}
              alt={b.name}
              className="h-10 w-16 object-cover rounded-lg group-hover:scale-105 transition duration-300"
              loading="lazy"
            />
            <span className="text-sm font-bold text-white/70 group-hover:text-white transition uppercase tracking-wider whitespace-nowrap">
              {b.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
