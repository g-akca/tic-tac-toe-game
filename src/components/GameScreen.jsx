import GameHeader from "./GameHeader";
import GameBoard from "./GameBoard";
import GameOverlay from "./GameOverlay";

import { useGame } from "../context/GameContext";

function GameScreen() {
  const { winner, isTie, paused } = useGame();

  return (
    <section className="w-full max-w-115 flex flex-col items-center gap-16">
      <GameHeader />

      <GameBoard />

      {winner || isTie || paused && (
        <GameOverlay />
      )}
    </section>
  )
}

export default GameScreen;