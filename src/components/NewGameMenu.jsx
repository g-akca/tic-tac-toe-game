import logoImg from "/images/logo.svg";

import XIcon from "./icons/XIcon";
import OIcon from "./icons/OIcon";

function NewGameMenu({ setIsGameStarted }) {
  const startGame = () => {
    setIsGameStarted();
  }

  return (
    <section className="w-full max-w-115 flex flex-col items-center gap-8 text-center">
      <img src={logoImg} alt="Tic tac toe logo" />

      <section className="w-full bg-slate-800 p-6 pb-8 rounded-2xl inset-shadow-[0_-8px_#10212A] flex flex-col gap-4">
        <form className="flex flex-col gap-6">
          <p className="font-bold uppercase">Pick Player 1's mark</p>
          
          <div className="bg-slate-900 rounded-[10px] p-2.25 grid grid-cols-2">
            <label className="group h-13.5 rounded-[10px] cursor-pointer flex items-center justify-center not-has-checked:hover:bg-slate-850 has-checked:bg-slate-300 has-checked:text-slate-900">
              <input type="radio" name="mark" value="X" className="hidden" defaultChecked />
              <XIcon className="text-slate-300 group-has-checked:text-slate-900 h-8 w-8" />
            </label>
            <label className="group h-13.5 rounded-[10px] cursor-pointer flex items-center justify-center not-has-checked:hover:bg-slate-850 has-checked:bg-slate-300 has-checked:text-slate-900">
              <input type="radio" name="mark" value="O" className="hidden" />
              <OIcon className="text-slate-300 group-has-checked:text-slate-900 h-8 w-8" />
            </label>
          </div>
        </form>

        <p className="text-[14px] font-medium leading-[130%] tracking-[0.9px] uppercase">Remember : X goes first</p>
      </section>

      <div className="w-full text-slate-900 font-bold flex flex-col gap-4">
        <button type="button" onClick={startGame} className="h-14 pb-1 rounded-2xl w-full uppercase bg-amber-400 cursor-pointer inset-shadow-[0_-8px_#CC8B13]">New Game (VS CPU)</button>
        <button type="button" onClick={startGame} className="h-14 pb-1 rounded-2xl w-full uppercase bg-teal-400 cursor-pointer inset-shadow-[0_-8px_#118C87]">New Game (VS Player)</button>
      </div>
    </section>
  )
}

export default NewGameMenu;