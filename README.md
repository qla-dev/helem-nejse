# qla.dev × Helem Nejse: četiri scenarija igara

Partnerska ponuda qla.dev za Helem Nejse: četiri BBBB igre u istom svijetu, svaka na svojoj stranici.

- `/igra/kart` Mahala Grand Prix, arkadni karting (4 staze)
- `/igra/tram` Bježi, ide tramvaj!, endless runner
- `/igra/parkour` Preko mahale, 2.5D multiplayer trka
- `/igra/zombi` Švrakino: zombi proboj, survival shooter

Model: bez investicije, prihod se dijeli 55% Helem Nejse / 45% qla.dev.

## Pokretanje

```bash
npm install
npm run dev      # http://localhost:5177/helem-nejse/
npm run build    # statički sajt u dist/
```

## Deploy

Sajt se servira s `https://qla.dev/helem-nejse` (isti server kao `qla.dev/hideya`). `dist/` je commitovan: nakon izmjena pokreni `npm run build` i commituj `dist/`.

Na qla.dev serveru je ovaj repo kloniran u `dist/helem-nejse`, a root `.htaccess` iz repoa `qla-dev/qladev` mapira `/helem-nejse/*` na `dist/helem-nejse/dist/` i `/helem-nejse/redeploy.php` na skriptu ovdje. Redeploy (`https://qla.dev/helem-nejse/redeploy.php`) je samo `git pull --ff-only` kroz `redeploy.php`. `deploy.htaccess` se pri buildu kopira u `dist/.htaccess`: postojeći fajlovi se serviraju direktno, a sve ostale putanje (`/igra/...`) otvaraju React aplikaciju.

Share cover za Open Graph i Twitter je `public/og-cover.jpg` (1200 × 630).

Sadržaj igara je u `src/data.ts`. Vizuali su konceptualne simulacije. BBBB likovi i svijet pripadaju Helem Nejse; Red Bull je zaštitni znak vlasnika i prikazan je samo kao opcija sponzorstva. Mape: © OpenStreetMap contributors.
