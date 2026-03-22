function Button({ handleClick, className, shadowColor, shadowWidth, children }) {
  return (
    <button 
      type="button" 
      onClick={handleClick} 
      className={`bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-[10px] uppercase font-bold transition-all cursor-pointer inset-shadow-[0_-${shadowWidth}px_${shadowColor}] ${className}`}
    >
      {children}
    </button>
  )
}

export default Button;