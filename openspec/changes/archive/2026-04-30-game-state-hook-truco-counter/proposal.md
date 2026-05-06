## Why

Sin una lógica de estado central y robusta, la aplicación no puede reflejar correctamente las reglas del Truco ni garantizar precisión al sumar/restar puntos, detectar el fin de partido, y controlar todas las transiciones (Malas, Buenas, ganador). Esta etapa es crucial para construir un marcador confiable, flexible y fácil de mantener, evitando código duplicado y bugs por lógica dispersa.

## What Changes

- Se crea un custom hook (`useGameState.js`) con `useReducer` que maneja todo el ciclo de vida del juego.
- Implementa las acciones de sumar puntos, restar uno, cap a 30, reset general.
- Determina si cada equipo está en "Malas" o "Buenas", y si hay ganador.
- Expone estado y acciones desacoplados de la UI.

## Capabilities

### New Capabilities
- `game-state`: Gestiona todo el estado y reglas del marcador de Truco Argentino: sumar/restar puntos, detección de límites, transición entre etapas, y ganador.

### Modified Capabilities
- 

## Impact

- src/hooks/useGameState.js (nuevo archivo principal)
- Todo componente que requiera acceso al estado del juego o deba disparar acciones
