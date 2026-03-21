import { useGame } from "../context/GameContext";

function GameOverlay() {
  const { winner, isTie, resetGame } = useGame();

  return (
    <div className="fixed inset-0 bg-neutral-950/50 flex items-center justify-center z-50">
      <div className="bg-slate-800 h-57 w-full text-center flex flex-col items-center justify-center">
        {winner ? (
          <>
            
          </>
        ) : isTie ? (
          <>
            
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold leading-base tracking-[1.25px] uppercase">Restart game?</h2>
            <div className="mt-6 flex gap-4 h-13">
              <button type="button" className="p-4 rounded-[10px] bg-slate-300 cursor-pointer inset-shadow-[0_-4px_#6B8997] text-slate-900 uppercase font-bold">No, cancel</button>
              <button type="button" onClick={resetGame} className="p-4 rounded-[10px] bg-amber-400 cursor-pointer inset-shadow-[0_-4px_#CC8B13] text-slate-900 uppercase font-bold">Yes, restart</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default GameOverlay;