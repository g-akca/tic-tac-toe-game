import { useGame } from "../context/GameContext";

import Button from "./Button";

function ModeSelection({ mark }) {
  const { startGame } = useGame();

  return (
    <div className="w-full flex flex-col gap-4 tablet:gap-5 tablet:text-[20px] tablet:leading-base tablet:tracking-[1.25px]">
      <Button 
        handleClick={() => startGame(mark, "solo")} 
        className="pb-1 rounded-2xl w-full h-14 tablet:h-18 bg-amber-400 hover:bg-amber-300"
        shadowColor="#CC8B13"
        shadowWidth="8"
      >
        New Game (VS CPU)
      </Button>
      <Button 
        handleClick={() => startGame(mark, "multi")} 
        className="pb-1 rounded-2xl w-full h-14 tablet:h-18 bg-teal-400 hover:bg-teal-300"
        shadowColor="#118C87"
        shadowWidth="8"
      >
        New Game (VS Player)
      </Button>
    </div>
  )
}

export default ModeSelection;