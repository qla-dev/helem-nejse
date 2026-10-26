import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Clock, ExternalLink, Flame, Hand, Map, Package, Sparkles, Timer, TriangleAlert, Trophy, TrendingUp, Users, Zap } from 'lucide-react';
import { GAMES, type Entry, type Game, type View, img, pub } from './data';
import { Eyebrow, Partnership, Reveal, SHARE, Sticker, Ticker, cn, scrollToId, useZoom } from './ui';

/* Phone mockups are transparent cutouts: no border, no rounding, only a soft shadow. */
function Shot({ view, alt, className }: { view: View; alt: string; className?: string }) {
  const zoom = useZoom();
  const src = img(view.file);
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onClick={() => zoom({ src, alt })}
      className={cn(
        'cursor-zoom-in',
        view.phone ? 'drop-shadow-[0_24px_30px_rgba(0,0,0,0.35)]' : 'rounded-2xl border-2 border-hn-ink',
        className
      )}
    />
  );
}

function Viewer({ game }: { game: Game }) {
  const [active, setActive] = useState(game.views[0].id);
  const view = game.views.find((v) => v.id === active)!;
  const alt = `${game.title}: ${view.label}, vizuelna simulacija`;
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Prikaz">
        {game.views.map((v) => (
          <button
            key={v.id}
            onClick={() => setActive(v.id)}
            aria-pressed={v.id === active}
            className={cn(
              'px-4 py-2 rounded-full text-xs sm:text-sm font-bold border-2 transition-colors',
              v.id === active
                ? v.redbull ? 'bg-rb-red border-rb-red text-white' : 'bg-hn-ink border-hn-ink text-hn-orange'
                : v.redbull ? 'border-rb-red text-rb-red bg-white' : 'border-hn-ink bg-white hover:bg-hn-yellow'
            )}
          >
            {v.redbull && <Zap className="inline w-3.5 h-3.5 -mt-0.5 mr-1" />}
            {v.label}
          </button>
        ))}
      </div>
      <div className="flex justify-center min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={view.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="relative"
          >
            <Shot view={view} alt={alt} className={view.portrait ? 'h-[520px] sm:h-[680px] w-auto' : 'w-full max-w-5xl h-auto'} />
            {view.redbull && (
              <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-rb-yellow text-rb-navy text-[10px] font-extrabold uppercase tracking-widest border-2 border-rb-navy">Sponzorska opcija</span>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="mt-4 text-center text-xs font-medium opacity-70">
        {view.phone ? game.controls.summary : 'Naslovni vizual sa svih pet likova'}. Klikni na sliku za uvećanje.
      </p>
    </div>
  );
}

function SectionHead({ eyebrow, title, hollow, text, center }: { eyebrow: string; title: string; hollow?: string; text?: string; center?: boolean }) {
  return (
    <Reveal className={cn('mb-12', center ? 'text-center' : 'flex flex-col md:flex-row md:items-end justify-between gap-6')}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-5 font-display uppercase text-4xl sm:text-6xl leading-[0.9] tracking-tight">
          {title}
          {hollow && <span className="block hollow-ink">{hollow}</span>}
        </h2>
      </div>
      {text && <p className={cn('font-medium opacity-75', center ? 'mt-5 max-w-2xl mx-auto' : 'max-w-md')}>{text}</p>}
    </Reveal>
  );
}

function EntryGrid({ entries, icon: Icon, cols = 'sm:grid-cols-2 lg:grid-cols-3', dark }: { entries: Entry[]; icon: typeof Zap; cols?: string; dark?: boolean }) {
  return (
    <div className={cn('grid gap-4', cols)}>
      {entries.map(([h, p], i) => (
        <Reveal key={h} delay={i * 0.04}>
          <div className={cn('p-5 rounded-2xl border-2 flex gap-4 h-full', dark ? 'border-hn-cream/15 bg-hn-cream/5' : 'border-hn-ink bg-white')}>
            <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center shrink-0', dark ? 'bg-hn-orange text-hn-ink' : 'bg-hn-ink text-hn-orange')}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold leading-tight">{h}</h4>
              <p className={cn('mt-1 text-sm leading-relaxed', dark ? 'text-hn-cream/70' : 'opacity-75')}>{p}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function GamePage({ game }: { game: Game }) {
  const zoom = useZoom();
  const idx = GAMES.findIndex((g) => g.id === game.id);
  const next = GAMES[(idx + 1) % GAMES.length];
  const prev = GAMES[(idx + GAMES.length - 1) % GAMES.length];
  const rbGameplay = game.views.find((v) => v.id === 'rb-gameplay')!;
  const rbCover = game.views.find((v) => v.id === 'rb-cover')!;
  const hasLevelMaps = game.levels.some((l) => l.map);

  return (
    <div>
      {/* Hero */}
      <section className="px-4 sm:px-6 pt-8 sm:pt-14 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-bold mb-8 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Svi scenariji
          </a>
          <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex flex-wrap gap-2 mb-6">
                <Eyebrow>Scenarij {game.n} / 04</Eyebrow>
                <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] border-2 border-hn-ink" style={{ background: game.color }}>
                  {game.genre}
                </span>
              </div>
              <h1 className="font-display uppercase leading-[0.88] tracking-[-0.03em] text-5xl min-[400px]:text-6xl sm:text-7xl xl:text-[6.5rem]">{game.title}</h1>
              <p className="mt-5 font-display uppercase text-xl sm:text-2xl hollow-ink">{game.hook}</p>
              <p className="mt-6 text-lg font-medium leading-relaxed max-w-xl">{game.subtitle}</p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                <button onClick={() => scrollToId('gameplay')} className="px-5 sm:px-7 py-4 bg-hn-ink text-hn-orange rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 group">
                  Gameplay <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={() => scrollToId('mehanika')} className="px-5 sm:px-7 py-4 bg-hn-cream border-2 border-hn-ink rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" /> Mehanika
                </button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
              <button
                onClick={() => zoom({ src: img(`cover-${game.id}.webp`), alt: `${game.title}: naslovni vizual` })}
                className="block brutal rounded-[2rem] overflow-hidden rotate-[1.5deg] bg-hn-ink cursor-zoom-in"
              >
                <img src={img(`cover-${game.id}.webp`)} alt={`${game.title}: naslovni vizual sa svih pet likova`} className="w-full aspect-[16/10] object-cover" />
              </button>
              <Sticker className="absolute -top-4 left-4" rotate={-8}>
                <Sparkles className="w-3.5 h-3.5" /> {game.pills[0]}
              </Sticker>
              <Sticker className="absolute -bottom-4 right-4 bg-hn-cream" rotate={5}>
                {game.session}
              </Sticker>
            </motion.div>
          </div>
        </div>
      </section>

      <Ticker items={game.ticker} />

      {/* Soul */}
      <section className="px-4 sm:px-6 py-20 sm:py-24 bg-hn-ink text-hn-cream">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
          <Reveal>
            <Eyebrow className="bg-hn-orange text-hn-ink">Duša igre</Eyebrow>
            <h2 className="mt-5 font-display uppercase text-4xl sm:text-6xl leading-[0.9] tracking-tight">
              Priča
              <span className="block hollow-cream">iza igre.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-hn-cream/85">{game.soul.premise}</p>
            <div className="mt-8 p-5 rounded-2xl border-2 border-hn-cream/15">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-hn-orange">Ton i zvuk</p>
              <p className="mt-2 text-hn-cream/80">{game.soul.tone}</p>
            </div>
          </Reveal>
          <div className="grid gap-4 content-start">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-hn-yellow">Trenuci koje igrači pamte</p>
            {game.soul.moments.map(([h, p], i) => (
              <Reveal key={h} delay={i * 0.06}>
                <div className="p-5 rounded-2xl bg-hn-cream text-hn-ink border-2 border-hn-cream" style={{ rotate: `${[-1, 0.8, -0.6, 1][i]}deg` }}>
                  <h4 className="font-display uppercase text-lg leading-tight">{h}</h4>
                  <p className="mt-1.5 text-sm opacity-80">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gameplay */}
      <section id="gameplay" className="px-4 sm:px-6 py-20 sm:py-24 bg-hn-cream scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="Kako izgleda" title="Gameplay" hollow="na telefonu." text={game.controls.summary + '.'} />
          <Reveal>
            <Viewer game={game} />
          </Reveal>
          <Reveal className="mt-16">
            <h3 className="font-display uppercase text-2xl sm:text-3xl mb-5">Slične igre na tržištu</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {game.similar.map((r) => (
                <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className="brutal brutal-hover rounded-2xl bg-white p-5 flex flex-col gap-2">
                  <span className="flex items-center justify-between gap-2 font-display uppercase text-lg leading-tight">
                    {r.name} <ExternalLink className="w-4 h-4 shrink-0" />
                  </span>
                  <span className="text-sm opacity-70">{r.note}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mechanics */}
      <section id="mehanika" className="px-4 sm:px-6 py-20 sm:py-24 bg-white border-y-2 border-hn-ink scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="Kako se igra" title="Jedna partija" center text={game.session} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5">
            {game.loop.map((step, i) => (
              <Reveal key={step} delay={i * 0.07} className="relative">
                <div
                  className={cn('rounded-[1.75rem] p-6 h-full border-2 border-hn-ink flex flex-col items-center text-center', i === 1 ? 'bg-hn-ink text-hn-cream' : 'bg-hn-cream')}
                  style={i === game.loop.length - 1 ? { background: game.color } : undefined}
                >
                  <span className="font-display text-5xl leading-none mb-3">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-bold text-lg leading-tight">{step}</h3>
                </div>
                {i < game.loop.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-[0.9rem] -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-hn-yellow border-2 border-hn-ink items-center justify-center">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
            <Reveal>
              <h3 className="font-display uppercase text-3xl sm:text-4xl leading-none">Kontrole na telefonu</h3>
              <p className="mt-3 opacity-70 font-medium">{game.controls.summary}.</p>
              <div className="mt-6 space-y-3">
                {game.controls.list.map(([k, v]) => (
                  <div key={k} className="flex gap-4 p-4 rounded-2xl bg-hn-cream border-2 border-hn-ink">
                    <Hand className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">{k}</p>
                      <p className="text-sm opacity-75">{v}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <div>
              <Reveal>
                <h3 className="font-display uppercase text-3xl sm:text-4xl leading-none mb-6">Osnovne mehanike</h3>
              </Reveal>
              <div className="space-y-4">
                {game.core.map(([h, p], i) => (
                  <Reveal key={h} delay={i * 0.04}>
                    <div className="p-6 rounded-3xl border-2 border-hn-ink bg-white flex gap-5">
                      <span className="font-display text-3xl leading-none" style={{ color: game.color, WebkitTextStroke: '1.5px #0b0b0b' }}>{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h4 className="font-display uppercase text-lg leading-tight">{h}</h4>
                        <p className="mt-2 text-[15px] opacity-80 leading-relaxed">{p}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="px-4 sm:px-6 py-20 sm:py-24" style={{ background: game.color }}>
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow={game.id === 'kart' ? 'Staze' : 'Nivoi'} title={game.levelsTitle} text={game.levelsIntro} />
          <div className={cn('grid gap-6', hasLevelMaps ? 'md:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-4')}>
            {game.levels.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.06}>
                <div className="brutal rounded-3xl bg-hn-cream overflow-hidden h-full flex flex-col">
                  {l.map && (
                    <a href={pub(`maps/map-${l.map}.svg`)} target="_blank" rel="noreferrer" className="block border-b-2 border-hn-ink bg-white">
                      <img src={pub(`maps/map-${l.map}.svg`)} alt={`Mapa staze ${l.name}`} loading="lazy" className="w-full" />
                    </a>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] opacity-60">{String(i + 1).padStart(2, '0')} · {l.tag}</span>
                      {l.map && <Map className="w-4 h-4 opacity-60" />}
                    </div>
                    <h3 className="mt-2 font-display uppercase text-2xl">{l.name}</h3>
                    <p className="mt-2 text-sm opacity-80 flex-1">{l.text}</p>
                    <p className="mt-4 text-sm font-bold flex gap-2"><Flame className="w-4 h-4 shrink-0 mt-0.5" />{l.signature}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Items and hazards */}
      <section className="px-4 sm:px-6 py-20 sm:py-24 bg-hn-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="Sadržaj igre" title={game.itemsTitle} hollow="i prepreke." />
          <EntryGrid entries={game.items} icon={Package} />
          <h3 className="mt-14 mb-5 font-display uppercase text-2xl sm:text-3xl">Prepreke i opasnosti</h3>
          <EntryGrid entries={game.hazards} icon={TriangleAlert} cols="sm:grid-cols-2 lg:grid-cols-4" />
        </div>
      </section>

      {/* Characters, modes, progression */}
      <section className="px-4 sm:px-6 py-20 sm:py-24 bg-hn-ink text-hn-cream">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-10">
            <Eyebrow className="bg-hn-orange text-hn-ink">Pet likova, pet stilova</Eyebrow>
            <h2 className="mt-5 font-display uppercase text-4xl sm:text-6xl leading-[0.9] tracking-tight">
              Ko šta radi
              <span className="block hollow-cream">u ovoj igri.</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {game.characters.map(([name, ability], i) => (
              <Reveal key={name} delay={i * 0.05}>
                <div className="p-5 rounded-2xl border-2 border-hn-cream/15 h-full">
                  <p className="font-display uppercase text-2xl text-hn-orange">{name}</p>
                  <p className="mt-2 text-sm text-hn-cream/80">{ability}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-display uppercase text-2xl mb-5 flex items-center gap-3"><Users className="w-6 h-6 text-hn-orange" /> Modovi</h3>
              <EntryGrid entries={game.modes} icon={Trophy} cols="grid-cols-1" dark />
            </div>
            <div>
              <h3 className="font-display uppercase text-2xl mb-5 flex items-center gap-3"><TrendingUp className="w-6 h-6 text-hn-orange" /> Napredovanje</h3>
              <EntryGrid entries={game.progression} icon={Timer} cols="grid-cols-1" dark />
            </div>
          </div>
        </div>
      </section>

      {/* Red Bull option */}
      <section className="px-4 sm:px-6 py-20 sm:py-24 bg-rb-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <Reveal>
            <span className="inline-flex px-3 py-1 rounded-full bg-rb-yellow text-rb-navy text-[11px] font-extrabold uppercase tracking-widest">Opcija koja se može dodati</span>
            <h2 className="mt-5 font-display uppercase text-4xl sm:text-5xl leading-[0.92] tracking-tight">{game.redbull.headline}</h2>
            <div className="mt-8 space-y-4">
              {game.redbull.items.map(([h, p]) => (
                <div key={h} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rb-red flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-rb-yellow" />
                  </div>
                  <div>
                    <h4 className="font-bold">{h}</h4>
                    <p className="text-sm text-white/70">{p}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-white/45 max-w-md">Sponzorska integracija je opcionalna i dogovara se zasebno, uz odobrenje Red Bulla. Red Bull je zaštitni znak vlasnika.</p>
          </Reveal>
          <Reveal delay={0.1} className={cn('grid gap-6 items-center', rbGameplay.portrait ? 'grid-cols-[1fr_auto]' : 'grid-cols-1')}>
            <Shot view={rbCover} alt={`${game.title}: Red Bull naslovni vizual`} className="w-full" />
            <Shot view={rbGameplay} alt={`${game.title}: Red Bull gameplay`} className={rbGameplay.portrait ? 'h-80 sm:h-[420px] w-auto' : 'w-full'} />
          </Reveal>
        </div>
      </section>

      {/* Map overview */}
      {(!hasLevelMaps || game.id === 'kart') && (
        <section className="px-4 sm:px-6 py-20 sm:py-24 bg-hn-cream">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
            <Reveal>
              <Eyebrow>Sarajevo je teren</Eyebrow>
              <h2 className="mt-5 font-display uppercase text-4xl sm:text-5xl leading-[0.9] tracking-tight">
                {game.id === 'zombi' ? 'Prostor kampanje' : game.id === 'kart' ? 'Sve staze' : 'Predložena ruta'}
              </h2>
              <p className="mt-5 font-medium opacity-75">{game.mapText}</p>
              <p className="mt-4 text-xs opacity-60">
                Približne rute preko stvarne geometrije ulica. ©{' '}
                <a className="underline" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap contributors</a>
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <a href={pub(`maps/map-${game.map}.svg`)} target="_blank" rel="noreferrer" className="block brutal rounded-3xl overflow-hidden bg-white">
                <img src={pub(`maps/map-${game.map}.svg`)} alt={game.mapText} loading="lazy" className="w-full" />
                <div className="px-5 py-3 border-t-2 border-hn-ink flex items-center gap-2 text-sm font-bold">
                  <Map className="w-4 h-4" /> Otvori mapu <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            </Reveal>
          </div>
        </section>
      )}

      {/* Phases */}
      <section id="faze" className="px-4 sm:px-6 py-20 sm:py-28 bg-hn-orange border-t-2 border-hn-ink scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow={`Plan razvoja · scenarij ${game.n}`} title="Od prototipa" hollow="do App Storea." center />
          <div className="grid md:grid-cols-3 gap-6">
            {game.phases.map((ph, i) => (
              <Reveal key={ph.title} delay={i * 0.08}>
                <div className={cn('rounded-3xl p-6 xl:p-8 h-full flex flex-col border-2 border-hn-ink', i === 0 ? 'bg-hn-ink text-hn-cream shadow-[6px_6px_0_#dfc958]' : 'bg-hn-cream brutal')}>
                  <span className="text-xs font-black uppercase tracking-[0.25em] opacity-60">{ph.duration}</span>
                  <h3 className="mt-2 font-display uppercase text-2xl">{ph.title}</h3>
                  <ul className="mt-6 space-y-3 flex-1">
                    {ph.items.map((it) => (
                      <li key={it} className="flex gap-3 text-sm">
                        <CheckCircle2 className={cn('w-5 h-5 shrink-0', i === 0 ? 'text-hn-orange' : '')} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={cn('mt-6 pt-5 border-t flex justify-between items-center', i === 0 ? 'border-hn-cream/15' : 'border-hn-ink/15')}>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60">Model</span>
                    <span className="font-display text-lg">Partnerstvo {SHARE.helem}/{SHARE.qla}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Partnership />
          </Reveal>
          <Reveal className="mt-6 flex justify-center">
            <a href="mailto:info@qla.dev?subject=Helem%20Nejse%3A%20partnerstvo" className="px-7 py-4 rounded-2xl bg-hn-ink text-hn-yellow font-bold flex items-center gap-2">
              Krenimo s prototipom <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Prev / next */}
      <section className="grid sm:grid-cols-2 border-t-2 border-hn-ink">
        {[prev, next].map((g, i) => (
          <a key={g.id} href={`/igra/${g.id}`} className={cn('group relative overflow-hidden px-6 py-10 sm:py-14 flex items-center gap-5', i === 0 ? 'bg-hn-yellow sm:border-r-2 border-hn-ink' : 'bg-hn-cream justify-end text-right')}>
            {i === 0 && <ArrowLeft className="w-7 h-7 shrink-0 group-hover:-translate-x-1 transition-transform" />}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">{i === 0 ? 'Prethodni scenarij' : 'Sljedeći scenarij'} · {g.n}</p>
              <p className="font-display uppercase text-2xl sm:text-3xl leading-none mt-1">{g.title}</p>
            </div>
            {i === 1 && <ArrowRight className="w-7 h-7 shrink-0 group-hover:translate-x-1 transition-transform" />}
          </a>
        ))}
      </section>
    </div>
  );
}
