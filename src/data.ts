export const img = (file: string) => `${import.meta.env.BASE_URL}img/${file}`;
export const pub = (file: string) => `${import.meta.env.BASE_URL}${file}`;

export type GameId = 'kart' | 'tram' | 'parkour' | 'zombi';

export type View = { id: string; label: string; file: string; portrait?: boolean; redbull?: boolean; phone?: boolean };
export type Entry = [string, string];

export type Level = { name: string; tag: string; text: string; signature: string; map?: string };

export type Game = {
  id: GameId;
  n: string;
  title: string;
  genre: string;
  color: string;
  hook: string;
  short: string;
  subtitle: string;
  soul: { premise: string; tone: string; moments: Entry[] };
  loop: string[];
  pills: string[];
  ticker: string[];
  controls: { summary: string; list: Entry[] };
  core: Entry[];
  levelsTitle: string;
  levelsIntro: string;
  levels: Level[];
  itemsTitle: string;
  items: Entry[];
  hazards: Entry[];
  characters: Entry[];
  modes: Entry[];
  progression: Entry[];
  session: string;
  views: View[];
  similar: { name: string; note: string; url: string }[];
  redbull: { headline: string; items: Entry[] };
  map: string;
  mapText: string;
  phases: { title: string; duration: string; items: string[] }[];
};

const GP = 'https://play.google.com/store/apps/details?id=';

export const GAMES: Game[] = [
  {
    id: 'kart',
    n: '01',
    title: 'Mahala Grand Prix',
    genre: 'Arkadni karting',
    color: '#dfc958',
    hook: 'Gas do daske kroz tri kvarta.',
    short: 'Četiri staze, pet vozača i nagrada koju svi žele: veresija u granapu do kraja života.',
    subtitle:
      'Karting u stilu Mario Karta kroz Alipašino Polje, Dobrinju i Švrakino. Drift oko nebodera, skok preko parkinga, papuča koja te prati do cilja i kup koji se brani pred cijelom mahalom.',
    soul: {
      premise:
        'Granap na uglu raspisao je Mahalski Grand Prix. Pobjednik dobija neograničenu veresiju. Bruca vidi priliku da otplati sve dugove odjednom, Braca je već sredio „sponzora“, Bruda vozi za čast Švrakina, Brada je kart sklopio od dijelova veš mašine, a Cura trči za ostalima jer misli da je sve to igra. Svaki kup završava ceremonijom ispred granapa, gdje prodavač proglašava pobjednika.',
      tone: 'Glasno, brzo i bezobrazno. Utrku komentariše mahalski radio, likovi govore originalnim glasovima, a lokalni beat se ubrza u zadnjem krugu.',
      moments: [
        ['Papuča iz zadnjeg reda', 'Zadnji vozač dobije majčinu papuču. Ona leti kroz cijelo polje i pogađa prvog tik pred cilj.'],
        ['Skok preko parkinga', 'Na Alipašinu je rampa preko parkiranih Golfova. Ko u zraku izvede trik, dobija boost pri doskoku.'],
        ['Ulica Michaela Schumachera', 'Druga staza u Dobrinji prolazi stvarnom ulicom nazvanom po Schumacheru. Najbrži krug na njoj nosi titulu „Šumaher mahale“.'],
        ['Komšija s tepihom', 'U drugom krugu komšija istresa tepih s balkona i oblak prašine na sekundu zamagli ekran.'],
      ],
    },
    loop: ['Odaberi vozača i kart', 'Tri kruga kroz kvart', 'Drift, skok i predmet u pravom trenutku', 'Bodovi za kup i dijelovi za kart'],
    pills: ['4 gradske staze', '5 vozača', 'Solo kup i online utrke'],
    ticker: ['Drift kod granapa', 'Burek boost', 'Skok preko parkinga', 'Majčina papuča', 'Šumaher mahale', 'Veresija za pobjednika'],
    controls: {
      summary: 'Kamera iza karta, automatski gas, upravljanje palčevima',
      list: [
        ['Lijevo i desno', 'Dvije velike strelice pod lijevim palcem. Može i naginjanjem telefona.'],
        ['Drift', 'Drži dugme dok skrećeš. Iskre prelaze iz plave u narandžastu, a kad pustiš, dobijaš mini turbo.'],
        ['Predmet', 'Dodir koristi predmet prema naprijed, povlačenje prema dolje baca ga iza karta.'],
        ['Trik u skoku', 'Prevuci prstom gore dok je kart u zraku. Čist doskok daje kratki boost.'],
      ],
    },
    core: [
      ['Drift i mini turbo', 'Drift je srce vožnje. Duži drift puni tri nivoa iskri i daje jači turbo. Dobar vozač drifta kroz cijelu krivinu, a početnik je samo pređe. Igra je laka za početak, a majstori imaju gdje napredovati.'],
      ['Skokovi i trikovi', 'Svaka staza ima bar dvije rampe. Trik u zraku daje boost, a prečice iza rampi dostupne su samo onome ko skoči pod pravim uglom.'],
      ['Kutije s predmetima', 'Redovi kutija stoje na pravcima. Vozač na začelju dobija jače predmete, pa je utrka otvorena do zadnje krivine. To je ključni Mario Kart osjećaj.'],
      ['Zavjetrina i KM žetoni', 'Vožnja iza rivala puni zavjetrinu i katapultira kart naprijed. KM žetoni na stazi podižu maksimalnu brzinu, a udarac u zid ih rasipa.'],
      ['Prečice kroz mahalu', 'Prolaz ispod zgrade, dvorište s kokoškama, pješačka staza pored škole. Prečica štedi dvije sekunde, ali je uska i rizična.'],
    ],
    levelsTitle: 'Četiri staze',
    levelsIntro: 'Jedna staza na Alipašinu, dvije u Dobrinji i jedna u Švrakinu. Sve prate stvarne ulice i svaka ima svoj karakter.',
    levels: [
      { name: 'Alipašino Polje', tag: 'Krug oko bloka', map: 'alipasino', text: 'Široke krivine između nebodera u Semira Frašte i Nerkeza Smailagića. Idealna staza za učenje drifta.', signature: 'Rampa preko parkinga i prolaz ispod zgrade kao prečica.' },
      { name: 'Dobrinja I', tag: 'Bulevar', map: 'dobrinja', text: 'Brzi pravci Bulevara branilaca Dobrinje i Bulevara Mimara Sinana. Staza za zavjetrinu i borbu predmetima.', signature: 'Skakaonica preko nasipa i autobus koji izlazi sa stanice.' },
      { name: 'Dobrinja II', tag: 'Schumacher', map: 'dobrinja2', text: 'Tehnički krug kroz ulice Michaela Schumachera, Želimira Vidovića Kelije i Senada Poturka Senčija. Najviše krivina po krugu.', signature: 'S krivina, šikana od kontejnera i pit stop pored ćevabdžinice koji puni boost.' },
      { name: 'Švrakino', tag: 'Brdo', map: 'svrakino', text: 'Uske ulice Safeta Hadžića, Vrbovske i Milinkladske. Stalno se ide gore ili dolje i nema mnogo prostora za greške.', signature: 'Skok preko vrha brda s dugim letom i prečica kroz dvorište s kokoškama.' },
    ],
    itemsTitle: 'Predmeti',
    items: [
      ['Burek', 'Snažan boost od tri sekunde. Najčešći predmet.'],
      ['Ćevapi x10', 'Tri kratka boosta koja trošiš kad hoćeš.'],
      ['Majčina papuča', 'Leti za prvim vozačem i pogađa ga. Dobija je samo začelje.'],
      ['Gajba', 'Prepreka koju ostavljaš iza sebe. Ko je udari, gubi brzinu.'],
      ['Curin lavež', 'Kratko omete sve vozače oko tebe i natjera ih da skrenu.'],
      ['Nestalo struje', 'Svim rivalima se na dvije sekunde ugasi HUD i zatamni ekran.'],
      ['Veresija', 'Preuzimaš predmet vozača ispred sebe.'],
    ],
    hazards: [
      ['Parkirani Golf', 'U svakom krugu stoji na drugom mjestu.'],
      ['Lokva', 'Okrene kart ako u nju uđeš u driftu.'],
      ['Tepih s balkona', 'Oblak prašine kratko zamagli vidljivost.'],
      ['Gradski autobus', 'Na Dobrinji I izlazi sa stanice u drugom krugu.'],
    ],
    characters: [
      ['Bruca', 'Izbalansiran kart. Najlakši za početak.'],
      ['Braca', 'Kreće s predmetom jer „ima vezu“ kod prodavača.'],
      ['Bruda', 'Najteži kart. Gura rivale i ne gubi brzinu pri sudaru. Bonus na Švrakinu.'],
      ['Brada', 'Najduži drift i najjači mini turbo. Kart od veš mašine.'],
      ['Cura', 'Mali kart s najbržim ubrzanjem i slabijom maksimalnom brzinom. Prolazi kroz najuže prečice.'],
    ],
    modes: [
      ['Mahalski kup', 'Četiri staze zaredom, bodovi po plasmanu i ceremonija ispred granapa.'],
      ['Na vrijeme', 'Vožnja protiv svog ghosta i tuđih rekorda.'],
      ['Online utrka', 'Pet igrača, brzo uparivanje i privatne sobe za ekipu.'],
      ['Dnevni izazov', 'Jedna staza s posebnim pravilom, npr. samo papuče ili bez drifta.'],
    ],
    progression: [
      ['Dijelovi karta', 'Točkovi, motor i spojleri mijenjaju izgled i blago balans.'],
      ['Kozmetika', 'Kacige, boje, tragovi dima i glasovne linije pobjede.'],
      ['Sezonski kup', 'Nova pravila i nagrade svakih nekoliko sedmica.'],
    ],
    session: 'Utrka traje 2 do 3 minute, tri kruga.',
    views: [
      { id: 'cover', label: 'Naslovni vizual', file: 'cover-kart.webp' },
      { id: 'gameplay', label: 'Gameplay s leđa', file: 'gameplay-kart.webp', phone: true },
      { id: 'front', label: 'Prednji kadar', file: 'gameplay-kart-front.webp', phone: true },
      { id: 'rb-gameplay', label: 'Red Bull gameplay', file: 'gameplay-kart-v2-redbull.webp', phone: true, redbull: true },
      { id: 'rb-cover', label: 'Red Bull cover', file: 'cover-kart-v2-redbull.webp', redbull: true },
    ],
    similar: [
      { name: 'Mario Kart Tour', note: 'Nintendo. Mobilni Mario Kart: drift, predmeti, kupovi.', url: GP + 'com.nintendo.zaka' },
      { name: 'Mario Kart World', note: 'Nintendo Switch 2. Skokovi, rampe i otvorene staze.', url: 'https://www.nintendo.com/us/store/products/mario-kart-world-switch-2/' },
      { name: 'Beach Buggy Racing 2', note: 'Vector Unit. Arkadni karting s power-upovima na telefonu.', url: GP + 'com.vectorunit.cobalt.googleplay' },
    ],
    redbull: {
      headline: 'Red Bull kart, Red Bull kapije i skakaonica s krilima.',
      items: [
        ['Red Bull kart', 'Posebna livreja karta kao nagrada ili event sadržaj.'],
        ['Brendirana staza', 'Kapije, baneri i Red Bull skakaonica na jednom dijelu staze.'],
        ['Krila boost', 'Limenka kao predmet: kratko ubrzanje i duži skok.'],
      ],
    },
    map: 'kart',
    mapText: 'Sve četiri karting staze na jednoj mapi: Alipašino, Dobrinja I, Dobrinja II i Švrakino.',
    phases: [
      { title: 'Igrivi prototip', duration: 'Faza I', items: ['Staza Alipašino Polje', 'Vožnja, drift, mini turbo i skok', 'Kutije s predmetima: burek, gajba, papuča', 'Bruca i dva AI protivnika', 'Test kontrola na telefonu'] },
      { title: 'Produkcija', duration: 'Faza II', items: ['Sve četiri staze', 'Svih pet vozača i njihovi kartovi', 'Kompletan set predmeta i prepreka', 'Mahalski kup i ceremonija', 'Interfejs, zvuk i originalni glasovi'] },
      { title: 'Lansiranje', duration: 'Faza III', items: ['Online utrke i privatne sobe', 'App Store i Google Play objava', 'Optimizacija za uređaje', 'Sezonski kupovi i dnevni izazovi'] },
    ],
  },
  {
    id: 'tram',
    n: '02',
    title: 'Bježi, ide tramvaj!',
    genre: 'Endless runner',
    color: '#00a7e1',
    hook: 'Švercali se u trojki. Kontrolor ih provalio.',
    short: 'Ekipa bježi od kontrolora niz šine, od Alipašina do Marijin Dvora.',
    subtitle:
      'Subway Surfers u sarajevskom ruhu. Ekipa se švercala u tramvaju broj 3, kontrolor ih je provalio na Alipašinu i sad bježe niz šine. Mijenjaj trake, skači na krov tramvaja, klizi ispod ograde i ne daj da te stigne.',
    soul: {
      premise:
        'Svaka partija počinje istom scenom: vrata trojke se otvore, kontrolor vikne „Karte!“, a ekipa iskoči i počne bježati. Kontrolor ih juri cijelim putem. Ako se igrač dva puta zaredom spotakne, kontrolor ga stigne i partija završava njegovom poznatom rečenicom. Svaki dio grada mijenja izgled i prepreke, pa je partija kao vožnja trojkom kroz Sarajevo, samo pješke i u panici.',
      tone: 'Panično i smiješno. Kontrolor dobacuje iza leđa, likovi se dovikuju, a muzika ubrzava sa svakim dijelom grada.',
      moments: [
        ['Trčanje po krovu tramvaja', 'Uskočiš na krov tramvaja koji stoji na stanici i pretrčiš tri vagona dok ispod prolazi cijela gužva.'],
        ['Dnevna karta', 'Pokupljena karta je štit: kontrolor te jednom pusti i samo odmahne rukom.'],
        ['Most na Otoci', 'Uski prolaz preko mosta, tramvaj iz suprotnog smjera i samo jedna slobodna traka.'],
        ['Marijin Dvor', 'Završni dio grada: neboderi, gužva i najbrži tempo partije.'],
      ],
    },
    loop: ['Iskoči iz trojke', 'Bježi kontroloru kroz tri trake', 'Skupljaj KM i power-upove', 'Rekord, misije i nagrade'],
    pills: ['3 trake', 'Partije od 1 do 3 min', 'Dnevni rekordi'],
    ticker: ['Karte!', 'Swipe lijevo', 'Skok na krov tramvaja', 'Klizni ispod ograde', 'Otoka', 'Marijin Dvor'],
    controls: {
      summary: 'Kamera iza lika, sve kontrole su prevlačenje prstom',
      list: [
        ['Prevuci lijevo ili desno', 'Promjena trake: lijeva šina, desna šina ili cesta.'],
        ['Prevuci gore', 'Skok preko prepreke ili na krov tramvaja.'],
        ['Prevuci dolje', 'Klizanje ispod ograde i table. U zraku ubrzava pad.'],
        ['Dvostruki dodir', 'Aktivira skupljeni štit ili romobil.'],
      ],
    },
    core: [
      ['Tri trake i tramvaji', 'Dvije šine i cesta. Tramvaji dolaze iz oba smjera, a neki stoje na stanici i služe kao platforma za trčanje po krovu.'],
      ['Kontrolor iza leđa', 'Prvi udarac ga dovede tik iza tebe na nekoliko sekundi. Drugi udarac u tom roku znači kraj partije. Prijetnja je stalna, ali smiješna.'],
      ['Dijelovi grada', 'Svakih 45 sekundi mijenja se dio grada: Alipašino, Otoka, Pofalići i Marijin Dvor. Mijenjaju se zgrade, prepreke i brzina.'],
      ['Multiplikator i misije', 'Uvijek su aktivne tri misije, npr. „preskoči 20 ograda“. Svaki završen komplet misija trajno podiže multiplikator bodova.'],
      ['Power-upovi', 'Pojavljuju se na teškim mjestima, pa je svaki power-up mali rizik.'],
    ],
    levelsTitle: 'Dijelovi grada',
    levelsIntro: 'Beskonačna trka sastavljena od segmenata uz stvarnu tramvajsku trasu.',
    levels: [
      { name: 'Alipašino', tag: 'Start', text: 'Stanica, gužva i prvi tramvaji. Polagan početak za ulazak u ritam.', signature: 'Iskakanje iz trojke i prvo „Karte!“' },
      { name: 'Otoka', tag: 'Most', text: 'Uži prolaz, most i tramvaj iz suprotnog smjera.', signature: 'Samo jedna slobodna traka na mostu.' },
      { name: 'Pofalići', tag: 'Radovi', text: 'Gradilište, rupe na cesti i ograde.', signature: 'Klizanje i skok bez pauze.' },
      { name: 'Marijin Dvor', tag: 'Finale', text: 'Neboderi, najveća gužva i najbrži tempo.', signature: 'Trčanje po krovu tri vagona zaredom.' },
    ],
    itemsTitle: 'Power-upovi',
    items: [
      ['Dnevna karta', 'Štit. Kontrolor te pušta jednom.'],
      ['Električni romobil', 'Deset sekundi vožnje. Udarac uništi samo romobil.'],
      ['Burek magnet', 'Privlači sve KM žetone u blizini.'],
      ['Nove patike', 'Osam sekundi visokih skokova preko svega.'],
      ['Duplo', 'Svaki žeton vrijedi dvostruko.'],
    ],
    hazards: [
      ['Tramvaj u pokretu', 'Zaobilazi se promjenom trake.'],
      ['Tramvaj na stanici', 'Na njega se skače i trči po krovu.'],
      ['Ograda i tabla', 'Ispod se klizi.'],
      ['Taksi i kiosk', 'Zatvaraju traku na ulici.'],
    ],
    characters: [
      ['Bruca', 'Izbalansiran. Početni lik.'],
      ['Braca', 'Skuplja 20% više KM žetona.'],
      ['Bruda', 'Probija drvene ograde bez pada.'],
      ['Brada', 'Multiplikator mu raste brže.'],
      ['Cura', 'Prolazi ispod niskih prepreka bez klizanja.'],
    ],
    modes: [
      ['Beskonačna trka', 'Glavni mod. Što dalje, to brže.'],
      ['Dnevni izazov', 'Ista staza za sve igrače i rang-lista do ponoći.'],
      ['Sedmični lov', 'Event s posebnim kontrolorom i nagradama.'],
    ],
    progression: [
      ['Nadogradnje', 'Duže trajanje power-upova za KM.'],
      ['Kolekcija', 'Jakne, kape i patike za svakog lika.'],
      ['Misije', 'Multiplikator raste sa svakim kompletom misija.'],
    ],
    session: 'Partija traje 1 do 3 minute i igra se jednom rukom.',
    views: [
      { id: 'cover', label: 'Naslovni vizual', file: 'cover-tram.webp' },
      { id: 'gameplay', label: 'Gameplay s leđa', file: 'gameplay-tram.webp', portrait: true, phone: true },
      { id: 'front', label: 'Prednji kadar', file: 'gameplay-tram-front.webp', portrait: true, phone: true },
      { id: 'rb-gameplay', label: 'Red Bull gameplay', file: 'gameplay-tram-v2-redbull.webp', portrait: true, phone: true, redbull: true },
      { id: 'rb-cover', label: 'Red Bull cover', file: 'cover-tram-v2-redbull.webp', redbull: true },
    ],
    similar: [
      { name: 'Subway Surfers', note: 'SYBO. Tri trake, voz, kontrolor i swipe kontrole.', url: GP + 'com.kiloo.subwaysurf' },
      { name: 'Subway Surfers City', note: 'SYBO. Novi gradski runner iz iste serije.', url: GP + 'com.sybogames.subway.surfers.game' },
      { name: 'Temple Run 2', note: 'Imangi. Klasični endless runner.', url: GP + 'com.imangi.templerun2' },
    ],
    redbull: {
      headline: 'Red Bull tramvaj juri niz glavnu ulicu.',
      items: [
        ['Red Bull tramvaj', 'Oslikan tramvaj kao prepreka i prepoznatljiv vizual eventa.'],
        ['Limenka daje krila', 'Power-up: kratak let iznad tramvaja i skupljanje žetona u zraku.'],
        ['Sponzorisani izazov', 'Sedmični rekord s nagradom i rang-listom.'],
      ],
    },
    map: 'tram',
    mapText: 'Približan koridor uz tramvajsku trasu od Alipašina do Marijin Dvora.',
    phases: [
      { title: 'Igrivi prototip', duration: 'Faza I', items: ['Dio grada Alipašino', 'Četiri geste i kontrolor', 'Tramvaj u pokretu i na stanici', 'Bruca kao igrivi lik'] },
      { title: 'Produkcija', duration: 'Faza II', items: ['Sva četiri dijela grada', 'Svih pet likova i sposobnosti', 'Power-upovi i misije', 'Interfejs, zvuk i originalni glasovi'] },
      { title: 'Lansiranje', duration: 'Faza III', items: ['Rang-liste i dnevni izazovi', 'App Store i Google Play objava', 'Optimizacija za uređaje', 'Sedmični eventi'] },
    ],
  },
  {
    id: 'parkour',
    n: '03',
    title: 'Preko mahale',
    genre: '2.5D multiplayer trka',
    color: '#21c39c',
    hook: 'Preko krova, kroz balkon, prvi do granapa.',
    short: 'Pet igrača, tri visine i samo jedna zadnja gajba Cedevite u granapu.',
    subtitle:
      'Fun Run u Švrakinu. Kroz mahalu se pročulo da je granap dobio zadnju gajbu Cedevite. Pet igrača trči preko krovova, tendi i haustora, a predmeti mijenjaju poredak do zadnjeg metra.',
    soul: {
      premise:
        'Partija počinje porukom u grupi „Granap dobio zadnju gajbu Cedevite!“ i pet likova kreće istovremeno. Staza ima tri visine koje se stalno spajaju i razdvajaju. Krovovi su najbrži, ali najopasniji. Haustor je siguran, ali spor. Između su tende, balkoni i veš na konopcima. Dok trče, igrači jedni drugima šalju poznate rečenice iz serije kao emote.',
      tone: 'Haotično i društveno. Kratke trke, puno smijeha, glasovne emote poruke i stalni preokreti.',
      moments: [
        ['Tenda kao trampolin', 'Skok na tendu izbaci te pravo na krov i preskočiš pola polja.'],
        ['Propadanje kroz krov', 'Trula ploča pukne i igrač padne u podrum, nazad na začelje.'],
        ['Sanduk u haustoru', 'Ostaviš sanduk u uskom haustoru i svi iza tebe se zaglave.'],
        ['Emote usred trke', 'Pretekneš rivala i pošalješ mu poznatu rečenicu iz serije.'],
      ],
    },
    loop: ['Uđi u trku s još četiri igrača', 'Biraj visinu: haustor, tende ili krovovi', 'Iskoristi predmet u pravom trenutku', 'Prvi do granapa'],
    pills: ['5 igrača', 'Bočna kamera', 'Privatne sobe'],
    ticker: ['Krovovi', 'Tende', 'Haustor', 'Opruga na krov', 'Zadnja gajba Cedevite', 'Prvi do granapa'],
    controls: {
      summary: 'Automatsko trčanje, bočna kamera, dva palca',
      list: [
        ['Skok', 'Desni palac. Dvostruki dodir je dupli skok, a uz zid odskok od zida.'],
        ['Klizanje', 'Lijevi palac. Prolaz ispod prepreka i propadanje kroz tendu na nižu visinu.'],
        ['Predmet', 'Dugme iznad skoka koristi pokupljeni predmet.'],
        ['Emote', 'Kratak dodir na lice lika šalje glasovnu poruku iz serije.'],
      ],
    },
    core: [
      ['Tri povezane visine', 'Donja ruta ide kroz haustor i podrum, srednja preko tendi i balkona, a gornja preko krovova. Rampe, opruge i rupe spajaju putanje, pa se poredak mijenja svakih nekoliko sekundi.'],
      ['Rizik i brzina', 'Krovovi su 20% brži, ali imaju rupe i antene. Haustor je spor, ali ima najviše kutija s predmetima. Igrač stalno bira između rizika i sigurnosti.'],
      ['Predmeti mijenjaju trku', 'Predmeti se dijele prema poziciji: vođa dobija odbrambene, a začelje napadačke. Trka je otvorena do kraja.'],
      ['Kratke partije', 'Trka traje 60 do 90 sekundi i odmah se ulazi u sljedeću, kao u Fun Runu.'],
      ['Emote i glasovi', 'Poznate rečenice iz serije služe kao emote. To ovu igru čini BBBB igrom, a ne samo još jednim runnerom.'],
    ],
    levelsTitle: 'Staze kroz Švrakino',
    levelsIntro: 'Svaka staza je bočni presjek mahale s tri visine. Platforme se dizajniraju posebno za trku.',
    levels: [
      { name: 'Vrbovska', tag: 'Prva staza', text: 'Niske kuće, tende i jedan dugi haustor. Tu se uče tri visine.', signature: 'Tenda trampolin na sredini staze.' },
      { name: 'Pijaca', tag: 'Tezge', text: 'Srednja visina ide preko tezgi i cerada, a donja ispod pijace.', signature: 'Tezga s lubenicama koja se ruši.' },
      { name: 'Krovovi', tag: 'Visoko', text: 'Gornja ruta preko zgrada s antenama i trulim pločama.', signature: 'Najduži skok između dvije zgrade.' },
      { name: 'Do granapa', tag: 'Finale', text: 'Sve tri visine spajaju se u jednu ulicu pred granapom.', signature: 'Sprint do vrata i gajba Cedevite.' },
    ],
    itemsTitle: 'Predmeti',
    items: [
      ['Sanduk', 'Zatvara prolaz iza tebe.'],
      ['Opruga', 'Izbacuje te na gornju visinu.'],
      ['Curin lavež', 'Omami sve igrače u blizini na sekundu.'],
      ['Komšinicin kišobran', 'Štit od jednog napada.'],
      ['Veza', 'Privuče te do igrača ispred tebe.'],
      ['Burek', 'Ubrzanje od dvije sekunde.'],
      ['Nestalo struje', 'Uspori sve igrače ispred tebe.'],
    ],
    hazards: [
      ['Veš na konopcu', 'Zakači i uspori igrača.'],
      ['Komšinica zaliva cvijeće', 'Mokar balkon je klizav.'],
      ['Trula ploča', 'Propadneš na nižu visinu.'],
      ['Mačka', 'Iskoči iz kontejnera i prepadne prolaznika.'],
    ],
    characters: [
      ['Bruca', 'Najbrže se oporavlja nakon pogotka.'],
      ['Braca', 'Kreće s predmetom i vidi skrivene prečice.'],
      ['Bruda', 'Probija sanduke bez zaustavljanja.'],
      ['Brada', 'Ima najduži skok.'],
      ['Cura', 'Provlači se kroz rupe u ogradi kroz koje drugi ne mogu.'],
    ],
    modes: [
      ['Brza trka', 'Pet igrača online, uparivanje za nekoliko sekundi.'],
      ['Privatna soba', 'Kod za ekipu i trke samo s prijateljima.'],
      ['Vikend turnir', 'Liga s nagradama i rang-listom.'],
      ['Trening', 'Trka protiv AI za učenje staza.'],
    ],
    progression: [
      ['Liga', 'Od haustora do krova: rang raste s pobjedama.'],
      ['Kozmetika', 'Odjeća, tragovi i animacije pobjede.'],
      ['Emote paketi', 'Nove rečenice iz novih epizoda serije.'],
    ],
    session: 'Trka traje 60 do 90 sekundi.',
    views: [
      { id: 'cover', label: 'Naslovni vizual', file: 'cover-parkour.webp' },
      { id: 'gameplay', label: 'Tri visine', file: 'gameplay-parkour-multi.webp', phone: true },
      { id: 'original', label: 'Prva staza', file: 'gameplay-parkour.webp', phone: true },
      { id: 'rb-gameplay', label: 'Red Bull gameplay', file: 'gameplay-parkour-v2-redbull.webp', phone: true, redbull: true },
      { id: 'rb-cover', label: 'Red Bull cover', file: 'cover-parkour-v2-redbull.webp', redbull: true },
    ],
    similar: [
      { name: 'Fun Run 3', note: 'Dirtybit. 2D multiplayer trka s predmetima.', url: GP + 'com.dirtybit.fra' },
      { name: 'Dirtybit', note: 'Studio iza Fun Run serije.', url: 'https://www.dirtybit.com/' },
    ],
    redbull: {
      headline: 'Red Bull power-up: super skok preko cijelog bloka.',
      items: [
        ['Super skok', 'Limenka katapultira lika na gornju rutu preko krovova.'],
        ['Brendirani krovovi', 'Baneri i rampa u Red Bull bojama na odabranim stazama.'],
        ['Event utrke', 'Vikend turnir s posebnim nagradama i skinovima.'],
      ],
    },
    map: 'parkour',
    mapText: 'Konceptualna putanja kroz dvorišta i preko krovova uz Vrbovsku.',
    phases: [
      { title: 'Igrivi prototip', duration: 'Faza I', items: ['Staza Vrbovska s tri visine', 'Trčanje, skok i klizanje', 'Tri predmeta', 'Lokalna trka protiv AI'] },
      { title: 'Produkcija', duration: 'Faza II', items: ['Četiri staze kroz Švrakino', 'Svih pet likova', 'Kompletan set predmeta i prepreka', 'Emote sistem i originalni glasovi'] },
      { title: 'Lansiranje', duration: 'Faza III', items: ['Online sobe i turniri', 'App Store i Google Play objava', 'Optimizacija za uređaje', 'Liga i sezonski sadržaj'] },
    ],
  },
  {
    id: 'zombi',
    n: '04',
    title: 'Švrakino: zombi proboj',
    genre: 'Akcijski survival shooter',
    color: '#9bd34a',
    hook: 'Zid je pao. Švrakino se brani.',
    short: 'Zid između Istočnog i Zapadnog Švrakina je pao, a s druge strane dolaze zombiji.',
    subtitle:
      'Shooter u stilu Last Z. Ekipa se probija niz švrakinsku ulicu, puca na bačve s brojevima, skuplja pojačanja i nove članove, a na kraju svake ulice dočekuje bossa.',
    soul: {
      premise:
        'Nastavak priče iz epizode ZID. Zid između Istočnog i Zapadnog Švrakina se srušio, a s druge strane ne dolaze komšije nego zombiji. Ekipa kreće od granapa i čisti ulicu po ulicu prema Zidu. Usput spašava komšije, koji se priključuju i pucaju s njima. Svaka ulica završava bossom kojeg mahala dobro poznaje.',
      tone: 'Akcija s BBBB humorom. Pucnjava, eksplozije bačvi i komentari ekipe dok horda raste.',
      moments: [
        ['Bačva sa zadnjim pogotkom', 'Bačvi s brojem 1 treba još jedan pogodak, a horda je odmah iza nje. Ako je razbiješ, dobijaš rafal. Ako ne, horda te stiže.'],
        ['Komšija se pridruži', 'Oslobodiš komšiju iz kaveza i on se odmah postroji iza ekipe i puca.'],
        ['Domar sa ključevima', 'Prvi boss: zombi domar koji baca svežanj ključeva.'],
        ['Zid', 'Završni nivo kampanje: proboj do srušenog Zida pod najvećim talasom.'],
      ],
    },
    loop: ['Odaberi vođu ekipe', 'Pomjeraj se lijevo i desno, paljba je automatska', 'Razbij bačve, prođi kroz prave kapije', 'Preživi hordu i sruši bossa'],
    pills: ['Kamera iza lika', 'Pucanje i izbjegavanje', '5 igrivih likova'],
    ticker: ['Razbij bačvu', 'Rafal', 'Horda dolazi', 'Švrakino drži', 'Boss na kraju ulice', 'Zid je pao'],
    controls: {
      summary: 'Kamera iza ekipe, jedan prst za kretanje',
      list: [
        ['Povuci lijevo ili desno', 'Pomjera cijelu ekipu kroz ulicu.'],
        ['Paljba', 'Automatska, uvijek prema naprijed.'],
        ['Sposobnost', 'Jedno veliko dugme, puni se ubijanjem zombija.'],
        ['Između talasa', 'Biraš jedno od tri ponuđena pojačanja.'],
      ],
    },
    core: [
      ['Bačve s brojevima', 'Broj na bačvi je broj pogodaka do pucanja. Ikona na bačvi pokazuje nagradu: brža paljba, nova cijev, štit ili novi član. Igrač stalno odlučuje da li će ostati u traci i razbiti bačvu ili se skloniti od horde.'],
      ['Kapije', 'Kapije s plusom ili množenjem dodaju članove i paljbu, a kapije s minusom ih oduzimaju. Biranje prave kapije je brza odluka pod pritiskom.'],
      ['Ekipa raste', 'Svaki spašeni komšija se postroji iza ekipe i puca. Što je ekipa veća, to je paljba jača, ali je i meta veća.'],
      ['Horde i protivnici', 'Obični zombi, brzi zombi u trenerci, debeli koji eksplodira i zombi na biciklu. Što je boss bliže, talasi su gušći.'],
      ['Boss na kraju ulice', 'Svaka ulica završava bossom s posebnim napadom. Pobjeda otključava sljedeću ulicu na putu do Zida.'],
    ],
    levelsTitle: 'Ulice do Zida',
    levelsIntro: 'Kampanja kroz Švrakino. Svaka ulica je borbeni koridor između poznatih zgrada.',
    levels: [
      { name: 'Vrbovska', tag: 'Ulica 1', text: 'Mirna ulica i prvi zombiji. Tu se uče bačve i kapije.', signature: 'Boss: domar sa ključevima.' },
      { name: 'Pijaca', tag: 'Ulica 2', text: 'Tezge, kontejneri i brzi zombiji u trenerkama.', signature: 'Boss: zombi prodavač s kolicima.' },
      { name: 'Safeta Hadžića', tag: 'Ulica 3', text: 'Široka ulica i prvi zombiji na biciklima.', signature: 'Boss: zombi taksista.' },
      { name: 'Zid', tag: 'Finale', text: 'Najveći talas i sve vrste protivnika odjednom.', signature: 'Proboj kroz srušeni Zid.' },
    ],
    itemsTitle: 'Pojačanja',
    items: [
      ['Brža paljba', 'Rafal postaje gušći.'],
      ['Nova cijev', 'Jedan metak više u svakom rafalu.'],
      ['Probojni metak', 'Metak prolazi kroz više zombija.'],
      ['Štit', 'Ekipa izdrži jedan udarac.'],
      ['Novi član', 'Komšija se pridružuje ekipi.'],
      ['Ćevap granata', 'Eksplozija koja čisti cijelu traku.'],
    ],
    hazards: [
      ['Debeli zombi', 'Eksplodira kad priđe ekipi.'],
      ['Minus kapija', 'Oduzima članove ili paljbu.'],
      ['Zapaljeni auto', 'Zatvara traku na nekoliko sekundi.'],
      ['Zombi na biciklu', 'Brzo mijenja traku.'],
    ],
    characters: [
      ['Bruca', 'Snalaženje: usporava vrijeme na tri sekunde.'],
      ['Braca', 'Veza: poziva dron s municijom.'],
      ['Bruda', 'Rafal: pet sekundi trostruke paljbe.'],
      ['Brada', 'Probojni hitac kroz cijelu traku.'],
      ['Cura', 'Lavež: omami cijeli talas.'],
    ],
    modes: [
      ['Kampanja', 'Ulica po ulica do Zida.'],
      ['Dnevni talas', 'Jedan nivo s posebnim pravilom i nagradom.'],
      ['Beskonačna odbrana', 'Koliko dugo ekipa može izdržati.'],
    ],
    progression: [
      ['Nadogradnja likova', 'Jača sposobnost i paljba svakog lika.'],
      ['Oružja', 'Nova oružja i njihov izgled.'],
      ['Baza i PvP', 'Opcionalno proširenje po dogovoru.'],
    ],
    session: 'Nivo traje 2 do 4 minute.',
    views: [
      { id: 'cover', label: 'Naslovni vizual', file: 'cover-zombi.webp' },
      { id: 'gameplay', label: 'Gameplay s leđa', file: 'gameplay-zombi.webp', portrait: true, phone: true },
      { id: 'front', label: 'Prednji kadar', file: 'gameplay-zombi-front.webp', portrait: true, phone: true },
      { id: 'rb-gameplay', label: 'Red Bull gameplay', file: 'gameplay-zombi-v2-redbull.webp', portrait: true, phone: true, redbull: true },
      { id: 'rb-cover', label: 'Red Bull cover', file: 'cover-zombi-v2-redbull.webp', redbull: true },
    ],
    similar: [
      { name: 'Last Z: Survival Shooter', note: 'Direktna referenca: kamera s leđa, bačve s brojevima i horda.', url: GP + 'com.readygo.barrel.gphh' },
      { name: 'Last War: Survival', note: 'Isti žanr: koridor, kapije, pojačanja i rast ekipe.', url: GP + 'com.fun.lastwar.gp' },
      { name: 'Survivor.io', note: 'Habby. Horde zombija i automatska paljba.', url: GP + 'com.dxx.firenow' },
    ],
    redbull: {
      headline: 'Red Bull bačva daje krila i rafal.',
      items: [
        ['Red Bull pojačanje', 'Bačva s limenkom: brža paljba i kratka neranjivost.'],
        ['Brendirani talas', 'Event nivo s Red Bull barikadama i nagradama.'],
        ['Sponzorisani boss', 'Posebna borba s ograničenim trajanjem i rang-listom.'],
      ],
    },
    map: 'strategy',
    mapText: 'Švrakino je prostor kampanje. Unutar zone se izrađuju borbeni koridori između poznatih zgrada.',
    phases: [
      { title: 'Igrivi prototip', duration: 'Faza I', items: ['Ulica Vrbovska', 'Bačve, kapije, pojačanja i horda', 'Automatska paljba i kretanje', 'Bruca, Cura i prvi boss'] },
      { title: 'Produkcija', duration: 'Faza II', items: ['Četiri ulice do Zida', 'Svih pet likova i sposobnosti', 'Sve vrste protivnika i bossovi', 'Interfejs, zvuk i originalni glasovi'] },
      { title: 'Lansiranje', duration: 'Faza III', items: ['Dnevni talasi i progresija', 'App Store i Google Play objava', 'Optimizacija za uređaje', 'Baza i PvP po dogovoru'] },
    ],
  },
];

export const PLATFORMS = ['iOS', 'Android', 'PC', 'PlayStation', 'Xbox', 'Nintendo'];
