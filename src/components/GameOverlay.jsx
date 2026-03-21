import { useGame } from "../context/GameContext";

import XIcon from "./icons/XIcon";
import OIcon from "./icons/OIcon";

function GameOverlay() {
  const { winner, isTie, resetGame, player1, player2, gamemode, setPaused, nextRound } = useGame();

  const winningPlayer = player1.mark === winner ? player1 : player2;
  let text;

  if (gamemode === "solo") {
    if (winningPlayer.id === 1) text = "You won!";
    else text = "Oh no, you lost...";
  }
  else {
    if (winningPlayer.id === 1) text = "Player 1 wins!";
    else text = "Player 2 wins!";
  }

  return (
    <div className="fixed inset-0 bg-neutral-950/50 flex items-center justify-center z-50">
      <div className="bg-slate-800 h-57 w-full text-center flex flex-col items-center justify-center tablet:h-66.5">
        {winner ? (
          <>
            <p className="text-[14px] uppercase font-bold tracking-[0.9px] leading-[130%] text-slate-300 tablet:text-base tablet:leading-base tablet:tracking-base">
              {text}
            </p>

            <div className={`flex items-center justify-center mt-4 gap-4 ${winner === "X" ? "text-teal-400" : "text-amber-400"}`}>
              {winner === "X" ? (
                <XIcon className="h-6.5 w-6.5 tablet:h-16 tablet:w-16" />
              ): (
                <OIcon className="h-6.5 w-6.5 tablet:h-16 tablet:w-16" />
              )} 
              
              <span className="text-[24px] font-bold leading-base tracking-[1.5px] uppercase tablet:text-[40px] tablet:tracking-[2.5px]">takes the round</span>
            </div>

            <div className="mt-6 flex gap-4 h-13">
              <button
                type="button"
                onClick={resetGame}
                className="p-4 rounded-[10px] bg-slate-300 hover:bg-slate-100 cursor-pointer transition-all inset-shadow-[0_-4px_#6B8997] text-slate-900 uppercase font-bold"
              >
                Quit
              </button>

              <button
                type="button"
                onClick={nextRound}
                className="p-4 rounded-[10px] bg-amber-400 hover:bg-amber-300 cursor-pointer transition-all inset-shadow-[0_-4px_#CC8B13] text-slate-900 uppercase font-bold"
              >
                Next round
              </button>
            </div>
          </>
        ) : isTie ? (
          <>
            <h2 className="text-2xl font-bold leading-base tracking-[1.25px] uppercase tablet:text-[40px] tablet:tracking-[2.5px]">Round tied</h2>
            <div className="mt-6 flex gap-4 h-13 tablet:mt-7.5">
              <button 
                type="button" 
                onClick={resetGame} 
                className="p-4 rounded-[10px] bg-slate-300 hover:bg-slate-100 cursor-pointer transition-all inset-shadow-[0_-4px_#6B8997] text-slate-900 uppercase font-bold"
              >
                Quit
              </button>
              <button 
                type="button" 
                onClick={nextRound} 
                className="p-4 rounded-[10px] bg-amber-400 hover:bg-amber-300 cursor-pointer transition-all inset-shadow-[0_-4px_#CC8B13] text-slate-900 uppercase font-bold"
              >
                Next round
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold leading-base tracking-[1.25px] uppercase tablet:text-[40px] tablet:tracking-[2.5px]">Restart game?</h2>
            <div className="mt-6 flex gap-4 h-13">
              <button 
                type="button" 
                onClick={() => setPaused(false)} 
                className="p-4 rounded-[10px] bg-slate-300 hover:bg-slate-100 cursor-pointer transition-all inset-shadow-[0_-4px_#6B8997] text-slate-900 uppercase font-bold"
              >
                No, cancel
              </button>
              <button 
                type="button" 
                onClick={resetGame} 
                className="p-4 rounded-[10px] bg-amber-400 hover:bg-amber-300 cursor-pointer transition-all inset-shadow-[0_-4px_#CC8B13] text-slate-900 uppercase font-bold"
              >
                Yes, restart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default GameOverlay;