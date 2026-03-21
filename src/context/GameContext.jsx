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
  });

  const [player2, setPlayer2] = useState({
    id: 2,
    mark: "",
    wins: 0
  });

  function startGame(mark, mode = "solo") {
    const p1Mark = mark === "X" ? "X" : "O";
    const p2Mark = mark === "X" ? "O" : "X";

    const p1 = { ...player1, mark: p1Mark };
    const p2 = { ...player2, mark: p2Mark };

    setPlayer1(p1);
    setPlayer2(p2);

    const starter = p1.mark === "X" ? p1 : p2;

    setCurrentPlayer(starter);
    setGamemode(mode);
    setIsGameStarted(true);

    if (mode === "solo" && starter.id === 2) {
      setTimeout(() => {
        const cpuBoard = runCpuTurn(["", "", "", "", "", "", "", "", ""], p2);
        setBoard(cpuBoard);

        if (!handleGameState(cpuBoard)) setCurrentPlayer(p1);
      }, 800);
    }
  }

  function handleGameState(newBoard) {
    const win = checkWinner(newBoard);

    if (win) {
      setWinner(win);

      setPlayer1(p => p.mark === win ? { ...p, wins: p.wins + 1 } : p);
      setPlayer2(p => p.mark === win ? { ...p, wins: p.wins + 1 } : p);

      return true;
    }

    if (newBoard.every(cell => cell !== "")) {
      setIsTie(true);
      return true;
    }

    return false;
  }

  function playRound(index) {
    if (board[index] || winner || isTie) return;
    if (gamemode === "solo" && currentPlayer.id === 2) return;

    const newBoard = board.map((cell, i) => i === index ? currentPlayer.mark : cell);

    setBoard(newBoard);

    if (handleGameState(newBoard)) return;

    const nextPlayer = currentPlayer.id === 1 ? player2 : player1;
    setCurrentPlayer(nextPlayer);

    if (gamemode === "solo") {
      setTimeout(() => {
        const cpuBoard = runCpuTurn(newBoard, nextPlayer);

        setBoard(cpuBoard);

        if (handleGameState(cpuBoard)) return;

        setCurrentPlayer(player1);
      }, 800);
    }
  }

  function runCpuTurn(boardState, cpuPlayer) {
    const move = cpuMove(boardState);

    return boardState.map((cell, i) => i === move ? cpuPlayer.mark : cell);
  }

  function checkWinner(board) {
    const patterns = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];

    for (let [a, b, c] of patterns) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  }

  function cpuMove(boardState) {
    const empty = boardState.map((val, i) => (val === "" ? i : null)).filter(i => i !== null);

    return empty[Math.floor(Math.random() * empty.length)];
  }

  function nextRound() {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setWinner(null);
    setIsTie(false);

    const starter = player1.mark === "X" ? player1 : player2;
    setCurrentPlayer(starter);

    if (gamemode === "solo" && starter.id === 2) {
      setTimeout(() => {
        const cpuBoard = runCpuTurn(["", "", "", "", "", "", "", "", ""], player2);
        setBoard(cpuBoard);

        if (!handleGameState(cpuBoard)) setCurrentPlayer(player1);
      }, 800);
    }
  }

  function resetGame() {
    setIsGameStarted(false);
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setCurrentPlayer(null);
    setGamemode("solo");
    setWinner(null);
    setIsTie(false);
    setPaused(false);

    setPlayer1({ id: 1, mark: "", wins: 0 });
    setPlayer2({ id: 2, mark: "", wins: 0 });
  }

  return (
    <GameContext.Provider
      value={{
        isGameStarted,
        startGame,
        resetGame,
        playRound,
        board,
        player1,
        player2,
        currentPlayer,
        gamemode,
        paused,
        setPaused,
        winner,
        isTie,
        nextRound
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}