import { useGame } from "../context/GameContext";

function GameScores() {
  const { player1, player2, gamemode, ties } = useGame();

  const xPlayer = player1.mark === "X" ? player1 : player2;
  const oPlayer = player1.mark === "O" ? player1 : player2;

  const isSolo = gamemode === "solo";

  return (
    <section className="w-full grid grid-cols-3 gap-5 h-16">
      <div className="bg-teal-400 text-slate-900 flex flex-col items-center justify-center rounded-[10px]">
        <span className="font-medium text-[12px] leading-base tracking-[0.75px] uppercase">X {isSolo ? (xPlayer.id === 1 ? "(You)" : "(CPU)") : `(P${xPlayer.id})`}</span>
        <span className="font-bold text-[20px] leading-base tracking-[1.25px]">{player1.wins}</span>
      </div>

      <div className="bg-slate-300 text-slate-900 flex flex-col items-center justify-center rounded-[10px]">
        <span className="font-medium text-[12px] leading-base tracking-[0.75px] uppercase">Ties</span>
        <span className="font-bold text-[20px] leading-base tracking-[1.25px]">{ties}</span>
      </div>

      <div className="bg-amber-400 text-slate-900 flex flex-col items-center justify-center rounded-[10px]">
        <span className="font-medium text-[12px] leading-base tracking-[0.75px] uppercase">O {isSolo ? (oPlayer.id === 1 ? "(You)" : "(CPU)") : `(P${oPlayer.id})`}</span>
        <span className="font-bold text-[20px] leading-base tracking-[1.25px]">{player2.wins}</span>
      </div>
    </section>
  )
}

export default GameScores;