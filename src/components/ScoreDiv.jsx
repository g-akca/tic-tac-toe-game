function ScoreDiv({ className, headerText, scoreText }) {
  return (
    <div className={`bg-amber-400 text-slate-900 flex flex-col items-center justify-center rounded-[10px] ${className}`}>
      <span className="font-medium text-[12px] leading-base tracking-[0.75px] uppercase tablet:text-[14px] tablet:tracking-[0.9px]">{headerText}</span>
      <span className="font-bold text-[20px] leading-base tracking-[1.25px] tablet:text-[24px] tablet:tracking-[1.5px]">{scoreText}</span>
    </div>
  )
}

export default ScoreDiv;