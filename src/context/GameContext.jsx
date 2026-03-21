import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [isGameStarted, setIsGameStarted] = useState();
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = useState();

  const [player1, setPlayer1] = useState({
    id: 1,
    mark: "",
    wins: 0
  })

  const [player2, setPlayer2] = useState({
    id: 2,
    mark: "",
    wins: 0
  })

  let gamemode;

  function startGame(mark, mode = "solo") {
    const p1Mark = mark === "X" ? "X" : "O";
    const p2Mark = mark === "X" ? "O" : "X";

    const updatedPlayer1 = { ...player1, mark: p1Mark };
    const updatedPlayer2 = { ...player2, mark: p2Mark };

    setPlayer1(updatedPlayer1);
    setPlayer2(updatedPlayer2);

    setCurrentPlayer(updatedPlayer1.mark === "X" ? updatedPlayer1 : updatedPlayer2);

    gamemode = mode;
    setIsGameStarted(true);
  }

  return (
    <GameContext.Provider
      value={{ isGameStarted, startGame, board, player1, player2, currentPlayer }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}