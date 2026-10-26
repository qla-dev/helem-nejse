import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Gamepad2, Smartphone, Sparkles, Users, Rocket, Hammer, Lightbulb } from 'lucide-react';
import { GAMES, PLATFORMS, img } from './data';
import { Eyebrow, Partnership, Reveal, Sticker, Ticker, scrollToId } from './ui';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-4 sm:px-6 pt-10 sm:pt-16 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex flex-wrap gap-2 mb-6">
              <Eyebrow>Za Helem Nejse · 26. 10. 2026.</Eyebrow>
              <Eyebrow className="bg-hn-yellow text-hn-ink">qla.dev × Helem Nejse</Eyebrow>
            </div>
            <h1 className="font-display uppercase leading-[0.86] tracking-[-0.03em] text-[3.4rem] min-[400px]:text-[4.2rem] sm:text-8xl xl:text-[8.5rem]">
              Četiri igre.
              <span className="block hollow-ink">Jedna mahala.</span>
            </h1>
            <p className="mt-7 text-lg sm:text-xl font-medium max-w-xl leading-relaxed">
              Za BBBB smo razradili četiri različita scenarija igre: karting, tramvajski runner, multiplayer trku preko krovova i zombi shooter. Svaki je potpun koncept s pričom, gameplayem, mehanikama, planom razvoja i sponzorskom opcijom. Svi dijele isti svijet i istih pet likova.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <button onClick={() => scrollToId('igre')} className="px-5 sm:px-7 py-4 bg-hn-ink text-hn-orange rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 group">
                Četiri scenarija <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollToId('redbull')} className="px-5 sm:px-7 py-4 bg-hn-cream border-2 border-hn-ink rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" /> Red Bull opcija
              </button>
            </div>
            <div className="mt-10 flex gap-8">
              {[['04', 'scenarija'], ['05', 'igrivih likova'], ['01', 'BBBB svijet']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-4xl">{n}</div>
                  <div className="text-[11px] font-bold uppercase tracking-widest opacity-70">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {GAMES.map((g, i) => (
                <a
                  key={g.id}
                  href={`/igra/${g.id}`}
                  style={{ rotate: `${[-2.5, 2, 1.5, -2][i]}deg` }}
                  className="brutal brutal-hover block rounded-2xl overflow-hidden bg-hn-ink"
                >
                  <img src={img(`cover-${g.id}.webp`)} alt={g.title} className="aspect-[16/11] w-full object-cover" />
                  <div className="px-3 py-2 flex items-center justify-between text-hn-cream">
                    <span className="font-display text-[11px] sm:text-sm uppercase truncate">{g.title}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" style={{ color: g.color }} />
                  </div>
                </a>
              ))}
            </div>
            <Sticker className="absolute -top-4 -left-2 sm:-left-5" rotate={-10}>
              <Sparkles className="w-3.5 h-3.5" /> Unreal Engine
            </Sticker>
            <Sticker className="absolute -bottom-4 right-2 bg-hn-cream" rotate={6}>
              Vizuelna simulacija
            </Sticker>
          </motion.div>
        </div>
      </section>

      <Ticker items={['Mahala Grand Prix', 'Bježi, ide tramvaj!', 'Preko mahale', 'Švrakino: zombi proboj', 'Alipašino', 'Dobrinja', 'Švrakino']} />

      {/* Games */}
      <section id="igre" className="px-4 sm:px-6 py-20 sm:py-28 bg-hn-cream scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <Eyebrow>Četiri scenarija</Eyebrow>
              <h2 className="mt-5 font-display uppercase text-5xl sm:text-7xl leading-[0.9] tracking-tight">
                Isti svijet.
                <span className="block hollow-ink">Četiri žanra.</span>
              </h2>
            </div>
            <p className="max-w-md text-base font-medium opacity-75">
              Svaki scenarij ima zasebnu stranicu: gameplay na telefonu, mehanike, faze razvoja, rutu kroz Sarajevo i opcionalnu Red Bull integraciju. Scenariji se mogu razvijati pojedinačno ili kao serija BBBB igara.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {GAMES.map((g, i) => (
              <Reveal key={g.id} delay={i * 0.06}>
                <a href={`/igra/${g.id}`} className="brutal brutal-hover group block rounded-[2rem] overflow-hidden bg-white h-full">
                  <div className="relative">
                    <img src={img(`cover-${g.id}.webp`)} alt={`${g.title}: naslovni vizual`} loading="lazy" className="w-full aspect-[16/9] object-cover" />
                    <span className="absolute top-4 left-4 font-display text-5xl sm:text-6xl hollow-cream drop-shadow">{g.n}</span>
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider border-2 border-hn-ink" style={{ background: g.color }}>
                      {g.genre}
                    </span>
                  </div>
                  <div className="p-6 sm:p-8 border-t-2 border-hn-ink">
                    <h3 className="font-display uppercase text-2xl sm:text-3xl leading-none">{g.title}</h3>
                    <p className="mt-3 text-[15px] opacity-75">{g.short}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-wider">Slično: {g.similar.map((r) => r.name).slice(0, 2).join(' · ')}</p>
                    <p className="mt-3 text-sm opacity-80">{g.soul.premise.split('. ').slice(0, 2).join('. ')}.</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {g.pills.map((p) => (
                        <span key={p} className="px-2.5 py-1 rounded-full bg-hn-cream border border-hn-ink/20 text-[11px] font-bold">{p}</span>
                      ))}
                    </div>
                    <div className="mt-6 pt-5 border-t border-hn-ink/10 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest opacity-60">Scenarij {g.n}</span>
                      <span className="flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all">
                        Pogledaj scenarij <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Ticker dark={false} items={['Red Bull daje krila', 'Sponzorska opcija', 'Red Bull kart', 'Red Bull tramvaj', 'Power-up limenka']} />

      {/* Red Bull */}
      <section id="redbull" className="px-4 sm:px-6 py-20 sm:py-28 bg-rb-navy text-white overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rb-yellow text-rb-navy text-[11px] font-extrabold uppercase tracking-widest">Opcija · sponzorstvo</span>
            <h2 className="mt-5 font-display uppercase text-5xl sm:text-6xl leading-[0.9] tracking-tight">
              Red Bull <span className="text-rb-red">daje krila</span> i power-upove.
            </h2>
            <p className="mt-6 text-white/75 text-lg leading-relaxed">
              Svaka igra ima pripremljenu Red Bull varijantu: brendirani kart i staza, oslikan tramvaj, power-up limenka u Fun Runu i zombi igri. To je opcija koja se može dodati kroz sponzorski ugovor. Igre rade i bez nje.
            </p>
            <p className="mt-4 text-xs text-white/45">Red Bull je zaštitni znak vlasnika. Integracija se uvrštava tek nakon dogovora i odobrenja sponzora.</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {GAMES.map((g, i) => (
              <Reveal key={g.id} delay={i * 0.06}>
                <a href={`/igra/${g.id}`} className="block rounded-2xl overflow-hidden border-2 border-white/15 hover:border-rb-yellow transition-colors">
                  <img src={img(`cover-${g.id}-v2-redbull.webp`)} alt={`${g.title}: Red Bull varijanta`} loading="lazy" className="w-full aspect-[16/10] object-cover" />
                  <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider bg-white/5">{g.redbull.items[0][0]}</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms + process */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 bg-hn-cream">
        <div className="max-w-7xl mx-auto">
          <Reveal className="grid md:grid-cols-2 gap-8 rounded-[2rem] brutal bg-hn-yellow p-6 sm:p-10 mb-20">
            <div>
              <Gamepad2 className="w-9 h-9 mb-4" />
              <h3 className="font-display uppercase text-3xl sm:text-4xl leading-none">Jedan engine. Svi ekrani.</h3>
              <p className="mt-4 font-medium opacity-80">Razvoj u Unreal Engineu. Ovdje prikazujemo mobilni gameplay s dodirnim kontrolama; PC i konzole dobijaju tastaturu, miš i gamepad.</p>
              <p className="mt-3 text-sm opacity-70">Imamo vlastitu Unreal biblioteku Sarajeva s tramvajima, zgradama, ulicama i kartovima, što skraćuje pripremu svakog nivoa.</p>
            </div>
            <div className="flex flex-wrap content-center gap-2">
              {PLATFORMS.map((p) => (
                <span key={p} className="px-4 py-2 rounded-full bg-hn-ink text-hn-yellow font-bold text-sm flex items-center gap-2">
                  {p === 'iOS' || p === 'Android' ? <Smartphone className="w-4 h-4" /> : <Gamepad2 className="w-4 h-4" />}
                  {p}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="text-center mb-14">
            <Eyebrow>Kako radimo</Eyebrow>
            <h2 className="mt-5 font-display uppercase text-5xl sm:text-6xl leading-[0.9] tracking-tight">
              Prvo osjećaj.
              <span className="block hollow-ink">Onda produkcija.</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Lightbulb, t: 'Prvi scenarij', d: 'Zajedno određujemo s kojim scenarijem krećemo, publiku, obim i glasove.' },
              { icon: Hammer, t: 'Igrivi prototip', d: 'Jedan nivo, osnovna petlja, kontrole na telefonu i test stila.' },
              { icon: Users, t: 'Produkcija', d: 'Svih pet likova, lokacije, animacije, interfejs, zvuk i testiranje.' },
              { icon: Rocket, t: 'Lansiranje', d: 'App Store i Google Play, objava i sadržaj nakon lansiranja.' },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.07}>
                <div className={`rounded-[1.75rem] p-6 h-full border-2 border-hn-ink ${i === 1 ? 'bg-hn-ink text-hn-cream' : 'bg-white'}`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${i === 1 ? 'bg-hn-orange text-hn-ink' : 'bg-hn-yellow'}`}>
                    <s.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Korak {String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-1 font-display uppercase text-xl">{s.t}</h3>
                  <p className="mt-2 text-sm opacity-75">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-medium opacity-70 max-w-2xl mx-auto">
            Četiri scenarija nisu obaveza razvoja svih odjednom. Svaki scenarij je zasebno partnerstvo s istom podjelom prihoda.
          </p>
          <Reveal className="mt-16">
            <Partnership />
          </Reveal>
        </div>
      </section>

    </>
  );
}
