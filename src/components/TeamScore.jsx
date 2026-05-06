import React from "react";
import PropTypes from "prop-types";
import PalitosCounter from "./PalitosCounter";
import "./TeamScore.css";

/**
 * TeamScore
 * Componente stateless. Muestra el nombre del equipo con su marcador visual (palitos)
 * y su valor numérico.
 * Contrato props:
 * - teamName: string (required)
 * - score: number (required)
 * - maxPoints: number (opcional, por defecto 30 para partida completa - 6 cajas × 5 puntos)
 */
function TeamScore({ teamName, score, maxPoints = 30 }) {
  return (
    <div className="team-score">
      <span className="team-name">{teamName}</span>
      <div className="team-score-display">
        <PalitosCounter puntos={score} max={maxPoints} />
        <span className="team-score-value">{score}/{maxPoints}</span>
      </div>
    </div>
  );
}

TeamScore.propTypes = {
  teamName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  maxPoints: PropTypes.number,
};

export default TeamScore;
