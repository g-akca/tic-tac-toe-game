import GameScores from "./GameScores";

import OIcon from "./icons/OIcon";
import XIcon from "./icons/XIcon";

import { useGame } from "../context/GameContext";

function GameBoard() {
  const { board, playRound, currentPlayer, gamemode } = useGame();

  const isCpuTurn = gamemode === "solo" && currentPlayer.id === 2;

  return (
    <section className="w-full flex flex-col gap-5">
      <div className="grid grid-cols-3 gap-5">
        {board.map((item, index) => (
          <div
            key={index}
            className={`bg-slate-800 w-full pb-2 aspect-square rounded-[10px] inset-shadow-[0_-8px_#10212A] flex items-center justify-center 
              ${isCpuTurn ? "pointer-events-none cursor-not-allowed opacity-60" : "cursor-pointer"}
            `}
            onClick={() => {
              if (isCpuTurn) return;
              playRound(index);
            }}
          >
            {item === "X" && (
              <XIcon className="text-teal-400 h-10 w-10" />
            )}
            {item === "O" && (
              <OIcon className="text-amber-400 h-10 w-10" />
            )}
          </div>
        ))}
      </div>

      <GameScores />
    </section>
  )
}

export default GameBoard;