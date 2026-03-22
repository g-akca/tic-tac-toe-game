import XIcon from "./icons/XIcon";
import OIcon from "./icons/OIcon";

function MarkToggler({ mark, setMark }) {
  return (
    <div className="relative bg-slate-900 rounded-[10px] p-2.25 grid grid-cols-2 tablet:p-2">
      <div className="absolute top-2.25 bottom-2.25 left-2.25 right-2.25 tablet:top-2 tablet:bottom-2 tablet:left-2 tablet:right-2 grid grid-cols-2 pointer-events-none">
        <div className={`bg-slate-300 rounded-[10px] transition-all duration-300 ${mark === "X" ? "translate-x-0" : "translate-x-full"}`}/>
      </div>

      <label className="relative z-10 h-13.5 rounded-[10px] cursor-pointer flex items-center justify-center not-has-checked:hover:bg-slate-850">
        <input type="radio" name="mark" value="X" className="hidden" onChange={(e) => setMark(e.target.value)} defaultChecked />
        <XIcon className={`h-8 w-8 transition-all duration-300 ${
          mark === "X" ? "text-slate-900" : "text-slate-300"
        }`} />
      </label>

      <label className="relative z-10 h-13.5 rounded-[10px] cursor-pointer flex items-center justify-center not-has-checked:hover:bg-slate-850">
        <input type="radio" name="mark" value="O" className="hidden" onChange={(e) => setMark(e.target.value)} />
        <OIcon className={`h-8 w-8 transition-all duration-300 ${
          mark === "O" ? "text-slate-900" : "text-slate-300"
        }`} />
      </label>
    </div>
  )
}

export default MarkToggler;