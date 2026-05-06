import PropTypes from "prop-types";
import "./GameStatus.css";

function GameStatus({ teams, gameOver, winner }) {
  return (
    <section className="game-status" aria-label="Estado de la partida">
      <div className="game-status__stages">
        {teams.map((team) => (
          <div className="game-status__stage" key={team.key}>
            <span className="game-status__team">{team.label}</span>
            <span
              className={`game-status__badge game-status__badge--${team.stage}`}
            >
              {team.stage === "buenas" ? "Buenas" : "Malas"}
            </span>
          </div>
        ))}
      </div>

      {gameOver && winner && (
        <p className="game-status__winner" role="status" aria-live="polite">
          Ganador: {winner === "nosotros" ? "Nosotros" : "Ellos"}
        </p>
      )}
    </section>
  );
}

GameStatus.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOf(["nosotros", "ellos"]).isRequired,
      label: PropTypes.string.isRequired,
      stage: PropTypes.oneOf(["malas", "buenas"]).isRequired,
    })
  ).isRequired,
  gameOver: PropTypes.bool.isRequired,
  winner: PropTypes.oneOf(["nosotros", "ellos"]),
};

GameStatus.defaultProps = {
  winner: null,
};

export default GameStatus;