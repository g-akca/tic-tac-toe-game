import GameScores from "./GameScores";

import { useGame } from "../context/GameContext";

function GameBoard() {
  const { board } = useGame();

  return (
    <section className="w-full flex flex-col gap-5">
      <div className="grid grid-cols-3 gap-5">
        {board.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 w-full aspect-square rounded-[10px] inset-shadow-[0_-8px_#10212A]"
          >
          </div>
        ))}
      </div>

      <GameScores />
    </section>
  )
}

export default GameBoard;