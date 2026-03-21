import { useGame } from "../context/GameContext";

function GameScores() {
  const { player1, player2 } = useGame();

  const p1Starter = player1.mark === "X";
  const p1Color = p1Starter ? "bg-teal-400" : "bg-amber-400";
  const p2Color = p1Starter ? "bg-amber-400" : "bg-teal-400";

  return (
    <section className="w-full grid grid-cols-3 gap-5 h-16">
      <div className={`${p1Color} text-slate-900 flex flex-col items-center justify-center rounded-[10px]`}>
        <span className="font-medium text-[12px] leading-base tracking-[0.75px] uppercase">{player1.mark} (You)</span>
        <span className="font-bold text-[20px] leading-base tracking-[1.25px]">0</span>
      </div>

      <div className="bg-slate-300 text-slate-900 flex flex-col items-center justify-center rounded-[10px]">
        <span className="font-medium text-[12px] leading-base tracking-[0.75px] uppercase">Ties</span>
        <span className="font-bold text-[20px] leading-base tracking-[1.25px]">0</span>
      </div>

      <div className={`${p2Color} text-slate-900 flex flex-col items-center justify-center rounded-[10px]`}>
        <span className="font-medium text-[12px] leading-base tracking-[0.75px] uppercase">{player2.mark} (CPU)</span>
        <span className="font-bold text-[20px] leading-base tracking-[1.25px]">0</span>
      </div>
    </section>
  )
}

export default GameScores;