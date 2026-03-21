import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [gamemode, setGamemode] = useState("solo");

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

  function startGame(mark, mode = "solo") {
    const p1Mark = mark === "X" ? "X" : "O";
    const p2Mark = mark === "X" ? "O" : "X";

    const updatedPlayer1 = { ...player1, mark: p1Mark };
    const updatedPlayer2 = { ...player2, mark: p2Mark };

    setPlayer1(updatedPlayer1);
    setPlayer2(updatedPlayer2);

    setCurrentPlayer(updatedPlayer1.mark === "X" ? updatedPlayer1 : updatedPlayer2);

    setGamemode(mode);
    setIsGameStarted(true);
  }

  function playRound(index) {
    if (board[index] !== "") return;

    setBoard(prev => prev.map((item, ind) => index === ind ? currentPlayer.mark : item));

    setCurrentPlayer(prev => prev.id === 1 ? player2 : player1);
  }

  return (
    <GameContext.Provider
      value={{ isGameStarted, startGame, playRound, board, player1, player2, currentPlayer }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}