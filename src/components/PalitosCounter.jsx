import React, { useMemo, useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./PalitosCounter.css";

/**
 * PalitoBox
 * Renderiza un cuadro de 100x100px con 5 puntos (líneas):
 * - point-1: línea horizontal arriba
 * - point-2: línea vertical derecha
 * - point-3: línea vertical izquierda
 * - point-4: línea horizontal abajo
 * - point-5: línea diagonal
 *
 * Props:
 * - filled: número de palitos activos (0–5)
 * - isNew: booleano para animar el nuevo palito
 */
function PalitoBox({ filled = 0, isNew = false }) {
  return (
    <div className="palito-box" aria-hidden="true">
      <div
        className={`point point-1 ${filled >= 1 ? "active" : ""} ${
          filled >= 1 && isNew ? "new" : ""
        }`}
      />
      <div
        className={`point point-2 ${filled >= 2 ? "active" : ""} ${
          filled >= 2 && isNew ? "new" : ""
        }`}
      />
      <div
        className={`point point-3 ${filled >= 3 ? "active" : ""} ${
          filled >= 3 && isNew ? "new" : ""
        }`}
      />
      <div
        className={`point point-4 ${filled >= 4 ? "active" : ""} ${
          filled >= 4 && isNew ? "new" : ""
        }`}
      />
      <div
        className={`point point-5 ${filled >= 5 ? "active" : ""} ${
          filled >= 5 && isNew ? "new" : ""
        }`}
      />
    </div>
  );
}

PalitoBox.propTypes = {
  filled: PropTypes.number,
  isNew: PropTypes.bool,
};

/**
 * PalitosCounter
 * Renderiza los puntos de un equipo como palitos de truco.
 * Agrupa de a 5 puntos (un "tanto" o "quinielita").
 * Cada grupo es una caja de 100x100 con 5 líneas (4 lados + diagonal).
 *
 * Props:
 * - puntos: número actual de puntos (0–30)
 * - max: máximo de puntos (por defecto 30 - 6 cajas × 5 puntos cada una)
 */
function PalitosCounter({ puntos = 0, max = 30 }) {
  const PALITOS_PER_GROUP = 5;
  const prevPuntosRef = useRef(puntos);
  const [animatingStick, setAnimatingStick] = useState(false);

  // Calcular grupos completos, grupo actual, y palitos en el grupo actual
  const completedGroups = Math.floor(puntos / PALITOS_PER_GROUP);
  const remainder = puntos % PALITOS_PER_GROUP;
  const totalGroups = Math.ceil(max / PALITOS_PER_GROUP);

  // Detectar si el puntaje incrementó (para animar el nuevo palito)
  useEffect(() => {
    if (puntos > prevPuntosRef.current) {
      setAnimatingStick(true);
      // Remover la animación después de que complete (0.2s)
      const timer = setTimeout(() => {
        setAnimatingStick(false);
      }, 200);
      return () => clearTimeout(timer);
    }
    prevPuntosRef.current = puntos;
  }, [puntos]);

  // Construir array de grupos con sus estados
  const groups = useMemo(() => {
    const groupsArray = [];
    for (let i = 0; i < totalGroups; i++) {
      let filled = 0;
      let isNew = false;

      if (i < completedGroups) {
        filled = 5;
      } else if (i === completedGroups && remainder > 0) {
        filled = remainder;
        // Solo animar si el puntaje acababa de incrementar
        isNew = animatingStick && puntos > prevPuntosRef.current;
      }

      groupsArray.push({ filled, isNew });
    }
    return groupsArray;
  }, [puntos, max, completedGroups, remainder, animatingStick]);

  return (
    <div
      className="palitos-counter"
      role="img"
      aria-label={`${puntos} de ${max} puntos`}
    >
      {groups.map((group, idx) => (
        <PalitoBox key={idx} filled={group.filled} isNew={group.isNew} />
      ))}
    </div>
  );
}

PalitosCounter.propTypes = {
  puntos: PropTypes.number,
  max: PropTypes.number,
};

export default PalitosCounter;
