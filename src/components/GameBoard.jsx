import { useState } from "react";

import GameScores from "./GameScores";

function GameBoard() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])

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