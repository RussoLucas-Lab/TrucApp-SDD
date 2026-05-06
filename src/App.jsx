import { useState } from "react";
import useGameState from "./hooks/useGameState";
import ScoreBoard from "./components/ScoreBoard";
import GameStatus from "./components/GameStatus";
import ResetButton from "./components/ResetButton";
import WelcomeCard from "./components/WelcomeCard";
import "./App.css";

function App() {
  const { state, addPoints, subtractPoint, resetGame } = useGameState();
  const [showWelcome, setShowWelcome] = useState(true);

  const teams = [
    {
      key: "nosotros",
      label: "Nosotros",
      score: state.nosotros,
      stage: state.etapa.nosotros,
    },
    {
      key: "ellos",
      label: "Ellos",
      score: state.ellos,
      stage: state.etapa.ellos,
    },
  ];

  const handleWelcomeClose = () => {
    setShowWelcome(false);
  };

  return (
    <main className="app-shell">
      {showWelcome && <WelcomeCard onClose={handleWelcomeClose} />}

      <header className="app-header">
        <p className="app-kicker">Truco Score Counter</p>
        <h1 className="app-title">Marcador de Truco</h1>
      </header>

      <ScoreBoard
        teams={teams}
        addPoints={addPoints}
        subtractPoint={subtractPoint}
        gameOver={state.gameOver}
      />

      <GameStatus teams={teams} gameOver={state.gameOver} winner={state.winner} />

      <section className="actions">
        <ResetButton onReset={resetGame} />
      </section>
    </main>
  );
}

export default App;
