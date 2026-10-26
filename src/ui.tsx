import React, { createContext, useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Printer } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { GAMES, img } from './data';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_EVENT = 'app:navigate';

export const go = (path: string) => {
  if (path === window.location.pathname) return;
  window.history.pushState(null, '', path);
  window.dispatchEvent(new Event(NAV_EVENT));
  window.scrollTo({ top: 0 });
};

export function useRoute() {
  const read = () => window.location.pathname.replace(/\/+$/, '') || '/';
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const sync = () => setRoute(read());
    // Internal links stay in the SPA; modified clicks and external links behave normally.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest('a');
      const href = a?.getAttribute('href');
      if (!a || !href || !href.startsWith('/') || a.target) return;
      e.preventDefault();
      go(href);
    };
    window.addEventListener('popstate', sync);
    window.addEventListener(NAV_EVENT, sync);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener(NAV_EVENT, sync);
      document.removeEventListener('click', onClick);
    };
  }, []);
  return route;
}

export const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

/* Lightbox */
type Zoom = { src: string; alt: string } | null;
const ZoomCtx = createContext<(z: Zoom) => void>(() => {});
export const useZoom = () => useContext(ZoomCtx);

export function ZoomProvider({ children }: { children: React.ReactNode }) {
  const [zoom, setZoom] = useState<Zoom>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setZoom(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return (
    <ZoomCtx.Provider value={setZoom}>
      {children}
      <AnimatePresence>
        {zoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-hn-ink/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-10 cursor-zoom-out"
            onClick={() => setZoom(null)}
          >
            <button aria-label="Zatvori" className="absolute top-4 right-4 w-11 h-11 rounded-full bg-hn-yellow text-hn-ink flex items-center justify-center border-2 border-hn-ink">
              <X className="w-5 h-5" />
            </button>
            <img src={zoom.src} alt={zoom.alt} className="max-h-[84vh] max-w-full object-contain rounded-2xl border-2 border-hn-cream/20" />
            <p className="mt-4 text-sm text-hn-cream/80 text-center max-w-2xl">{zoom.alt}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </ZoomCtx.Provider>
  );
}

export function Zoomable({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const zoom = useZoom();
  return <img src={src} alt={alt} loading="lazy" onClick={() => zoom({ src, alt })} className={cn('cursor-zoom-in', className)} />;
}

export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay, duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Ticker({ items, dark = true, className }: { items: string[]; dark?: boolean; className?: string }) {
  const track = (
    <div className="ticker-track flex shrink-0 gap-8 py-3 pl-4 pr-8 font-display uppercase text-base sm:text-xl tracking-wide whitespace-nowrap">
      {[...items, ...items].map((t, i) => (
        <span key={i} className="flex items-center gap-8">
          {t}
          <span className={dark ? 'text-hn-yellow' : 'text-hn-orange'}>◆</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className={cn('flex overflow-hidden select-none border-y-2 border-hn-ink', dark ? 'bg-hn-ink text-hn-orange' : 'bg-hn-yellow text-hn-ink', className)} aria-hidden>
      {track}
      {track}
    </div>
  );
}

export function Sticker({ children, className, rotate = -4 }: { children: React.ReactNode; className?: string; rotate?: number }) {
  return (
    <span
      style={{ rotate: `${rotate}deg` }}
      className={cn('inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-hn-ink bg-hn-yellow text-hn-ink text-[11px] font-extrabold uppercase tracking-wider shadow-[3px_3px_0_#0b0b0b]', className)}
    >
      {children}
    </span>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn('inline-block bg-hn-ink text-hn-orange px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]', className)}>{children}</span>;
}

export const SHARE = { helem: 55, qla: 45 };

export function Partnership({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-[2rem] bg-hn-ink text-hn-cream p-6 sm:p-10', className)}>
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
        <div>
          <Eyebrow className="bg-hn-orange text-hn-ink">Partnerski model</Eyebrow>
          <h3 className="mt-5 font-display uppercase text-4xl sm:text-5xl leading-[0.9] tracking-tight">
            Bez investicije.
            <span className="block hollow-cream">Dijelimo prihod.</span>
          </h3>
          <p className="mt-6 text-hn-cream/75 leading-relaxed">
            Svi scenariji su ponuđeni kao partnerstvo. Helem Nejse ne plaća razvoj. Od svih prihoda igre, uključujući kupovine u igri, reklame i sponzorstva poput Red Bulla, {SHARE.helem}% pripada Helem Nejse, a {SHARE.qla}% qla.dev.
          </p>
        </div>
        <div>
          <div className="flex h-20 sm:h-24 rounded-2xl overflow-hidden border-2 border-hn-cream/20 font-display">
            <div className="bg-hn-orange text-hn-ink flex items-center justify-between px-4 sm:px-6" style={{ width: `${SHARE.helem}%` }}>
              <span className="text-3xl sm:text-5xl">{SHARE.helem}%</span>
              <img src={img('helem-nejse-logo.svg')} alt="Helem Nejse" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <div className="bg-[#0a95ff] text-white flex items-center justify-between px-4 sm:px-6" style={{ width: `${SHARE.qla}%` }}>
              <span className="text-3xl sm:text-5xl">{SHARE.qla}%</span>
              <img src={img('qla-logo-white.png')} alt="qla.dev" className="h-4 sm:h-5 object-contain hidden min-[420px]:block" />
            </div>
          </div>
          <div className="mt-5 grid sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-2xl border-2 border-hn-cream/15">
              <p className="font-bold text-hn-orange">Helem Nejse · {SHARE.helem}%</p>
              <p className="mt-1 text-hn-cream/70">Likovi i svijet serije, originalni glasovi i promocija kroz kanale serije.</p>
            </div>
            <div className="p-4 rounded-2xl border-2 border-hn-cream/15">
              <p className="font-bold text-[#4db3ff]">qla.dev · {SHARE.qla}%</p>
              <p className="mt-1 text-hn-cream/70">Razvoj, produkcija, objava na App Store i Google Play te održavanje igre.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Nav({ route }: { route: string }) {
  return (
    <nav className="sticky top-0 z-50 bg-hn-orange/85 backdrop-blur-md border-b-2 border-hn-ink print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 py-3 flex items-center gap-3 sm:gap-5">
        <a href="/" className="flex items-center gap-3 shrink-0" aria-label="Početna">
          <img src={img('helem-nejse-logo.svg')} alt="Helem Nejse" className="w-10 h-10 sm:w-11 sm:h-11 spin-slow" />
          <span className="font-display text-lg leading-none">×</span>
          <img src={img('qla-logo-white.png')} alt="qla.dev" className="h-5 sm:h-6 object-contain" />
        </a>
        <div className="ml-auto hidden lg:flex items-center gap-1">
          {GAMES.map((g) => {
            const active = route === `/igra/${g.id}`;
            return (
              <a
                key={g.id}
                href={`/igra/${g.id}`}
                className={cn(
                  'px-3 py-2 rounded-full text-[13px] font-bold transition-colors border-2',
                  active ? 'bg-hn-ink text-hn-orange border-hn-ink' : 'border-transparent hover:border-hn-ink'
                )}
              >
                <span className="opacity-50 mr-1">{g.n}</span>
                {g.title}
              </a>
            );
          })}
        </div>
        <button
          onClick={() => window.print()}
          className="ml-auto lg:ml-2 px-4 py-2 bg-hn-ink text-hn-orange text-xs font-bold rounded-full flex items-center gap-2 hover:bg-hn-ink/85"
        >
          <Printer className="w-3.5 h-3.5" /> PDF
        </button>
      </div>
      <div className="lg:hidden flex gap-2 overflow-x-auto px-4 pb-3 -mt-1 [scrollbar-width:none]">
        {GAMES.map((g) => (
          <a
            key={g.id}
            href={`/igra/${g.id}`}
            className={cn(
              'shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border-2 border-hn-ink',
              route === `/igra/${g.id}` ? 'bg-hn-ink text-hn-orange' : 'bg-hn-cream/40'
            )}
          >
            {g.n} {g.title}
          </a>
        ))}
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-hn-ink text-hn-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-[1.4fr_1fr] gap-10 items-end">
        <div>
          <p className="font-display uppercase text-4xl sm:text-6xl leading-[0.9] tracking-tight">
            Mahala je
            <span className="block hollow-cream">spremna.</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {GAMES.map((g) => (
              <a key={g.id} href={`/igra/${g.id}`} className="px-3 py-1.5 rounded-full border border-hn-cream/30 text-xs font-bold hover:bg-hn-cream hover:text-hn-ink transition-colors flex items-center gap-1">
                {g.title} <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:items-end gap-4 text-sm text-hn-cream/60">
          <div className="flex items-center gap-4">
            <img src={img('helem-nejse-logo.svg')} alt="Helem Nejse" className="w-12 h-12" />
            <span className="font-display text-hn-orange">×</span>
            <a href="https://qla.dev/" target="_blank" rel="noopener noreferrer">
              <img src={img('qla-logo-white.png')} alt="qla.dev" className="h-6 object-contain" />
            </a>
          </div>
          <p className="md:text-right">Ponuda qla.dev za Helem Nejse · oktobar 2026.<br />BBBB likovi i svijet pripadaju Helem Nejse. Vizuali su simulacije budućih igara.</p>
        </div>
      </div>
    </footer>
  );
}
