/**
 * useGameState - Custom hook para manejar toda la lógica de estado del marcador de Truco Argentino
 *
 * API pública:
 *   - state.nosotros: número (puntaje actual equipo Nosotros)
 *   - state.ellos: número (puntaje actual equipo Ellos)
 *   - state.gameOver: boolean (true si la partida terminó)
 *   - state.winner: 'nosotros' | 'ellos' | null (ganador actual)
 *   - state.etapa: { nosotros: 'malas'|'buenas', ellos: 'malas'|'buenas' }
 *
 *   - addPoints(team, amount): suma puntos a equipo, respeta límites y gameOver
 *   - subtractPoint(team): resta un punto, nunca menor a 0
 *   - resetGame(): reinicia el marcador completo
 *
 * @returns { state, addPoints, subtractPoint, resetGame }
 */
import { useReducer } from 'react';

// Constantes del juego
const MAX_SCORE = 30;
const MALAS_LIMIT = 15;

const INITIAL_STATE = {
  nosotros: 0,
  ellos: 0,
  gameOver: false,
  winner: null // 'nosotros' | 'ellos' | null
};

function calcularEtapa(puntos) {
  return puntos > MALAS_LIMIT ? 'buenas' : 'malas';
}

function calcularGanador(state) {
  if (state.nosotros === MAX_SCORE) return 'nosotros';
  if (state.ellos === MAX_SCORE) return 'ellos';
  return null;
}

function gameReducer(state, action) {
  switch (action.type) {
    case 'ADD_POINTS': {
      if (state.gameOver) return state;
      const { team, amount } = action;
      let nuevoScore = state[team] + amount;
      if (nuevoScore > MAX_SCORE) nuevoScore = MAX_SCORE;
      const otrosTeam = team === 'nosotros' ? 'ellos' : 'nosotros';
      const newState = {
        ...state,
        [team]: nuevoScore
      };
      // Chequear si hay ganador
      if (nuevoScore === MAX_SCORE) {
        newState.gameOver = true;
        newState.winner = team;
      }
      return newState;
    }
    case 'SUBTRACT_POINT': {
      const { team } = action;
      if (state.gameOver) return state;
      let nuevoScore = state[team] - 1;
      if (nuevoScore < 0) nuevoScore = 0;
      return {
        ...state,
        [team]: nuevoScore
      };
    }
    case 'RESET_GAME':
      return { ...INITIAL_STATE };
    default:
      return state;
  }
}

export default function useGameState() {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  // Derivados: etapas y winner como props de conveniencia
  const etapa = {
    nosotros: calcularEtapa(state.nosotros),
    ellos: calcularEtapa(state.ellos)
  };

  // Actions
  const addPoints = (team, amount) => {
    if (![1, 2, 3, 4].includes(amount)) return;
    if (!(team === 'nosotros' || team === 'ellos')) return;
    dispatch({ type: 'ADD_POINTS', team, amount });
  };
  const subtractPoint = (team) => {
    if (!(team === 'nosotros' || team === 'ellos')) return;
    dispatch({ type: 'SUBTRACT_POINT', team });
  };
  const resetGame = () => dispatch({ type: 'RESET_GAME' });

  return {
    state: {
      ...state,
      etapa,
    },
    addPoints,
    subtractPoint,
    resetGame,
  };
}
