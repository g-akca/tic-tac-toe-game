import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [isGameStarted, setIsGameStarted] = useState();
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = useState();

  let player1Mark, player2Mark, gamemode;

  function startGame(mark, mode="solo") {
    if (mark === "X") {
      player1Mark = "X";
      player2Mark = "O";
      setCurrentPlayer(1);
    }
    else {
      player1Mark = "O";
      player2Mark = "X";
      setCurrentPlayer(2);
    }

    gamemode = mode;

    setIsGameStarted(true);
  }

  return (
    <GameContext.Provider
      value={{ isGameStarted, startGame, board }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}