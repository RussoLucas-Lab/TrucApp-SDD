## 1. Crear infraestructura y constantes

- [x] 1.1 Crear src/hooks/useGameState.js vacío
- [x] 1.2 Definir constantes MAX_SCORE, MALAS_LIMIT y estado inicial

## 2. Implementar useReducer y acciones base

- [x] 2.1 Implementar el reducer con acciones: ADD_POINTS, SUBTRACT_POINT, RESET_GAME
- [x] 2.2 Controlar que los puntos nunca superen 30
- [x] 2.3 Controlar que los puntos nunca bajen de 0
- [x] 2.4 Detección de Malas/Buenas automáticamente según score
- [x] 2.5 Marcar gameOver y winner cuando un equipo llega a 30

## 3. Interfaz del hook

- [x] 3.1 Exponer estado completo (scores, gameOver, winner, etapa cada equipo)
- [x] 3.2 Exponer dispatchers (addPoints, subtractPoint, resetGame)
- [x] 3.3 Documentar brevemente API pública (en JSDoc)
