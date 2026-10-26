import { GAMES } from './data';
import GamePage from './GamePage';
import Home from './Home';
import { Footer, Nav, ZoomProvider, useRoute } from './ui';

export default function App() {
  const route = useRoute();
  const game = GAMES.find((g) => route === `/igra/${g.id}`);

  return (
    <ZoomProvider>
      <div className="grain min-h-screen font-sans">
        <Nav route={route} />
        <main>{game ? <GamePage key={game.id} game={game} /> : <Home />}</main>
        <Footer />
      </div>
    </ZoomProvider>
  );
}
