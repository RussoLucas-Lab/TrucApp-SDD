import React from "react";
import PropTypes from "prop-types";
import "./PointButtons.css";

function PointButtons({
  team,
  addPoints,
  subtractPoint,
  gameOver,
  scoreActual
}) {
  // Lógica para habilitar/deshabilitar botones según los requisitos
  const maxScore = 30;
  const addAmounts = [1, 2, 3, 4];

  return (
    <div className="point-buttons">
      {addAmounts.map(amount => (
        <button
          key={"add" + amount}
          type="button"
          className="point-button add"
          aria-label={`Sumar ${amount} punto${amount > 1 ? 's' : ''} a ${team}`}
          onClick={() => addPoints(team, amount)}
          disabled={gameOver || scoreActual + amount > maxScore}
        >
          +{amount}
        </button>
      ))}
      <button
        type="button"
        className="point-button remove"
        aria-label={`Restar un punto a ${team}`}
        onClick={() => subtractPoint(team)}
        disabled={gameOver || scoreActual <= 0}
      >
        -1
      </button>
    </div>
  );
}

PointButtons.propTypes = {
  team: PropTypes.oneOf(["nosotros", "ellos"]).isRequired,
  addPoints: PropTypes.func.isRequired,
  subtractPoint: PropTypes.func.isRequired,
  gameOver: PropTypes.bool.isRequired,
  scoreActual: PropTypes.number.isRequired
};

export default PointButtons;
