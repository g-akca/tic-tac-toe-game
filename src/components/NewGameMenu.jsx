import { useState } from "react";

import logoImg from "/images/logo.svg";

import XIcon from "./icons/XIcon";
import OIcon from "./icons/OIcon";

import { useGame } from "../context/GameContext";

function NewGameMenu() {
  const { startGame } = useGame();
  const [mark, setMark] = useState("X");

  return (
    <section className="w-full max-w-115 flex flex-col items-center gap-8 text-center tablet:gap-10">
      <img src={logoImg} alt="Tic tac toe logo" />

      <section className="w-full bg-slate-800 p-6 pb-8 rounded-2xl inset-shadow-[0_-8px_#10212A] flex flex-col gap-4 tablet:gap-6 tablet:pt-5 tablet:pb-7">
        <form className="flex flex-col gap-6">
          <p className="font-bold uppercase">Pick Player 1's mark</p>
          
          <div className="relative bg-slate-900 rounded-[10px] p-2.25 grid grid-cols-2 tablet:p-2">
            <div className="absolute top-2.25 bottom-2.25 left-2.25 right-2.25 tablet:top-2 tablet:bottom-2 tablet:left-2 tablet:right-2 grid grid-cols-2 pointer-events-none">
              <div className={`bg-slate-300 rounded-[10px] transition-all duration-300 ${mark === "X" ? "translate-x-0" : "translate-x-full"}`}/>
            </div>

            <label className="relative z-10 h-13.5 rounded-[10px] cursor-pointer flex items-center justify-center not-has-checked:hover:bg-slate-850 transition-all">
              <input type="radio" name="mark" value="X" className="hidden" onChange={(e) => setMark(e.target.value)} defaultChecked />
              <XIcon className={`h-8 w-8 transition-all duration-300 ${
                mark === "X" ? "text-slate-900" : "text-slate-300"
              }`} />
            </label>

            <label className="relative z-10 h-13.5 rounded-[10px] cursor-pointer flex items-center justify-center not-has-checked:hover:bg-slate-850 transition-all">
              <input type="radio" name="mark" value="O" className="hidden" onChange={(e) => setMark(e.target.value)} />
              <OIcon className={`h-8 w-8 transition-all duration-300 ${
                mark === "O" ? "text-slate-900" : "text-slate-300"
              }`} />
            </label>
          </div>
        </form>

        <p className="text-[14px] font-medium leading-[130%] tracking-[0.9px] uppercase">Remember : X goes first</p>
      </section>

      <div className="w-full text-slate-900 font-bold flex flex-col gap-4 tablet:gap-5 tablet:text-[20px] tablet:leading-base tablet:tracking-[1.25px]">
        <button 
          type="button" 
          onClick={() => startGame(mark, "solo")} 
          className="h-14 tablet:h-18 pb-1 rounded-2xl w-full uppercase bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer inset-shadow-[0_-8px_#CC8B13]"
        >
          New Game (VS CPU)
        </button>
        <button 
          type="button" 
          onClick={() => startGame(mark, "multi")} 
          className="h-14 tablet:h-18 pb-1 rounded-2xl w-full uppercase bg-teal-400 hover:bg-teal-300 transition-all cursor-pointer inset-shadow-[0_-8px_#118C87]"
        >
          New Game (VS Player)
        </button>
      </div>
    </section>
  )
}

export default NewGameMenu;