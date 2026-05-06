import PropTypes from "prop-types";
import TeamScore from "./TeamScore";
import PointButtons from "./PointButtons";
import "./ScoreBoard.css";

function ScoreBoard({ teams, addPoints, subtractPoint, gameOver }) {
  return (
    <section className="scoreboard" aria-label="Marcador de equipos">
      {teams.map((team) => (
        <article className="team-panel" key={team.key}>
          <TeamScore teamName={team.label} score={team.score} />
          <PointButtons
            team={team.key}
            addPoints={addPoints}
            subtractPoint={subtractPoint}
            gameOver={gameOver}
            scoreActual={team.score}
          />
        </article>
      ))}
    </section>
  );
}

ScoreBoard.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOf(["nosotros", "ellos"]).isRequired,
      label: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
  addPoints: PropTypes.func.isRequired,
  subtractPoint: PropTypes.func.isRequired,
  gameOver: PropTypes.bool.isRequired,
};

export default ScoreBoard;