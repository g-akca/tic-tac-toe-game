import { useState } from "react"

import NewGameMenu from "./components/NewGameMenu"
import GameScreen from "./components/GameScreen";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <div 
      className={`
        text-base leading-base tracking-base text-slate-300 
        min-h-screen p-6 bg-slate-900 flex items-center ${isGameStarted ? "justify-center" : ""}
      `}
    >
      {isGameStarted ? (
        <GameScreen />
      ) : (
        <NewGameMenu setIsGameStarted={() => setIsGameStarted(true)} />
      )}
    </div>
  )
}

export default App
