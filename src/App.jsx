import NewGameMenu from "./components/NewGameMenu"
import GameScreen from "./components/GameScreen";

import { useGame } from "./context/GameContext";

function App() {
  const { isGameStarted } = useGame();

  return (
    <div 
      className={`
        text-base leading-base tracking-base text-slate-300 
        min-h-screen p-6 bg-slate-900 flex justify-center ${!isGameStarted ? "items-center" : ""}
      `}
    >
      {isGameStarted ? (
        <GameScreen />
      ) : (
        <NewGameMenu />
      )}
    </div>
  )
}

export default App
