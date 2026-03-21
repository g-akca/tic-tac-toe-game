import logoImg from "/images/logo.svg";
import restartIcon from "/images/icon-restart.svg";

import XIcon from "./icons/XIcon";
import OIcon from "./icons/OIcon";

import { useGame } from "../context/GameContext";

function GameHeader() {
  const { currentPlayer, setPaused } = useGame();

  return (
    <header className="grid grid-cols-3 gap-5 items-center w-full">
      <img src={logoImg} alt="Tic tac toe logo" />

      <div 
        className="
          text-center uppercase text-[14px] leading-[130%] tracking-[0.9px] font-bold h-10 tablet:h-13 
          bg-slate-800 rounded-md inset-shadow-[0_-4px_#10212A] flex justify-center items-center gap-3
          tablet:text-base tablet:leading-base tablet:tracking-base
        "
      >
        {currentPlayer.mark === "X" ? (
          <XIcon className="w-4 h-4 tablet:w-5 tablet:h-5" />
        ) : (
          <OIcon className="w-4 h-4 tablet:w-5 tablet:h-5" />
        )}
        
        <span>Turn</span>
      </div>

      <button type="button" onClick={() => setPaused(true)} className="justify-self-end w-10 h-10 tablet:w-13 tablet:h-13 bg-slate-300 hover:bg-slate-100 rounded-md inset-shadow-[0_-4px_#6B8997] cursor-pointer flex justify-center items-center">
        <img src={restartIcon} alt="Restart icon" className="w-4 h-4 tablet:w-5 tablet:h-5" />
      </button>
    </header>
  );
}

export default GameHeader;