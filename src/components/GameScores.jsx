import { useGame } from "../context/GameContext";

import ScoreDiv from "./ScoreDiv";

function GameScores() {
  const { player1, player2, gamemode, ties } = useGame();

  const xPlayer = player1.mark === "X" ? player1 : player2;
  const oPlayer = player1.mark === "O" ? player1 : player2;

  const isSolo = gamemode === "solo";

  return (
    <section className="w-full grid grid-cols-3 gap-5 h-16 tablet:h-18">
      <ScoreDiv
        className="bg-teal-400"
        headerText={`X ${isSolo ? (xPlayer.id === 1 ? "(You)" : "(CPU)") : `(P${xPlayer.id})`}`}
        scoreText={player1.wins}
      />

      <ScoreDiv
        className="bg-slate-300"
        headerText="Ties"
        scoreText={ties}
      />

      <ScoreDiv
        className="bg-amber-400"
        headerText={`O ${isSolo ? (oPlayer.id === 1 ? "(You)" : "(CPU)") : `(P${oPlayer.id})`}`}
        scoreText={player2.wins}
      />
    </section>
  )
}

export default GameScores;