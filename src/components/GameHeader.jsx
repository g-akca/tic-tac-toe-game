import logoImg from "/images/logo.svg";
import restartIcon from "/images/icon-restart.svg";

function GameHeader() {
  return (
    <header className="grid grid-cols-3 gap-5 items-center w-full">
      <img src={logoImg} alt="Tic tac toe logo" />

      <div className="text-center uppercase text-[14px] leading-[130%] tracking-[0.9px] font-bold h-10 bg-slate-800 rounded-md inset-shadow-[0_-4px_#10212A] flex justify-center items-center">
        X Turn
      </div>

      <button className="justify-self-end w-10 h-10 bg-slate-300 rounded-md inset-shadow-[0_-4px_#6B8997] cursor-pointer flex justify-center items-center">
        <img src={restartIcon} alt="Restart icon" className="w-4 h-4" />
      </button>
    </header>
  );
}

export default GameHeader;