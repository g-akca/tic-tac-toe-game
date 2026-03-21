import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [gamemode, setGamemode] = useState("solo");
  const [winner, setWinner] = useState(null);
  const [isTie, setIsTie] = useState(false);
  const [paused, setPaused] = useState(false);

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

    const startingPlayer = updatedPlayer1.mark === "X" ? updatedPlayer1 : updatedPlayer2;

    setCurrentPlayer(startingPlayer);

    setGamemode(mode);
    setIsGameStarted(true);
  }

  function playRound(index) {
    if (board[index] !== "" || winner || isTie || (gamemode === "solo" && currentPlayer.id === 2)) return;

    const newBoard = board.map((item, ind) => ind === index ? currentPlayer.mark : item);
    setBoard(newBoard);

    const win = checkWinner(newBoard);

    if (win) {
      if (player1.mark === win) {
        setPlayer1(p => ({ ...p, wins: p.wins + 1 }));
      }
      else {
        setPlayer2(p => ({ ...p, wins: p.wins + 1 }));
      }

      setWinner(win);
      return;
    }

    if (newBoard.every(cell => cell !== "")) {
      setIsTie(true);
      return;
    }

    const nextPlayer = currentPlayer.id === 1 ? player2 : player1;
    setCurrentPlayer(nextPlayer);

    if (gamemode === "solo") {
      setTimeout(() => {
        setBoard(prevBoard => runCpuTurn(prevBoard, nextPlayer));
      }, 800);
    }
  }

  function checkWinner(board) {
    const winPatterns = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];

    for (let [a, b, c] of winPatterns) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  }

  function cpuMove(boardState) {
    const emptyIndexes = boardState.map((val, i) => (val === "" ? i : null)).filter(i => i !== null);
    return emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
  }

  function runCpuTurn(boardState, cpuPlayer) {
    const move = cpuMove(boardState);

    const cpuBoard = boardState.map((item, ind) => ind === move ? cpuPlayer.mark : item);

    const win = checkWinner(cpuBoard);

    if (win) {
      if (player1.mark === win) {
        setPlayer1(p => ({ ...p, wins: p.wins + 1 }));
      }
      else {
        setPlayer2(p => ({ ...p, wins: p.wins + 1 }));
      }

      setWinner(win);
      return cpuBoard;
    }

    if (cpuBoard.every(cell => cell !== "")) {
      setIsTie(true);
      return cpuBoard;
    }

    setCurrentPlayer(player1);

    return cpuBoard;
  }

  function resetGame() {
    setIsGameStarted(false);
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setCurrentPlayer(null);
    setGamemode("solo");
    setWinner(null);
    setIsTie(false);
    setPaused(false);
    setPlayer1({
      id: 1,
      mark: "",
      wins: 0
    })

    setPlayer2({
      id: 2,
      mark: "",
      wins: 0
    })
  }

  return (
    <GameContext.Provider
      value={{ isGameStarted, startGame, resetGame, playRound, board, player1, player2, currentPlayer, gamemode, paused, setPaused, winner, isTie }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}