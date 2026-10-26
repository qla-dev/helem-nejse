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
npm run dev      # http://localhost:5177
npm run build    # statički sajt u dist/
```

Rute koriste History API, pa hosting mora sve putanje preusmjeriti na `index.html`.

Sadržaj igara je u `src/data.ts`. Vizuali su konceptualne simulacije. BBBB likovi i svijet pripadaju Helem Nejse; Red Bull je zaštitni znak vlasnika i prikazan je samo kao opcija sponzorstva. Mape: © OpenStreetMap contributors.
