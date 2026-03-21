import GameHeader from "./GameHeader";
import GameBoard from "./GameBoard";

function GameScreen() {
  return (
    <section className="w-full max-w-115 flex flex-col items-center gap-16">
      <GameHeader />

      <GameBoard />
    </section>
  )
}

export default GameScreen;