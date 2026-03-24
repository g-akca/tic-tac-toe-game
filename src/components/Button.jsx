function Button({ handleClick, className, shadowColor, shadowWidth, children }) {
  return (
    <button 
      type="button" 
      onClick={handleClick} 
      style={{ boxShadow: `inset 0 -${shadowWidth}px 0 ${shadowColor}` }}
      className={`bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-[10px] uppercase font-bold transition-all cursor-pointer ${className}`}
    >
      {children}
    </button>
  )
}

export default Button;