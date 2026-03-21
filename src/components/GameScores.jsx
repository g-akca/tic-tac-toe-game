function GameScores() {
  return (
    <section className="w-full grid grid-cols-3 gap-5 h-16">
      <div className="bg-teal-400 text-slate-900 flex flex-col items-center justify-center rounded-[10px]">
        <span className="font-medium text-[12px] leading-base tracking-[0.75px] uppercase">X (You)</span>
        <span className="font-bold text-[20px] leading-base tracking-[1.25px]">0</span>
      </div>

      <div className="bg-slate-300 text-slate-900 flex flex-col items-center justify-center rounded-[10px]">
        <span className="font-medium text-[12px] leading-base tracking-[0.75px] uppercase">Ties</span>
        <span className="font-bold text-[20px] leading-base tracking-[1.25px]">0</span>
      </div>

      <div className="bg-amber-400 text-slate-900 flex flex-col items-center justify-center rounded-[10px]">
        <span className="font-medium text-[12px] leading-base tracking-[0.75px] uppercase">O (CPU)</span>
        <span className="font-bold text-[20px] leading-base tracking-[1.25px]">0</span>
      </div>
    </section>
  )
}

export default GameScores;