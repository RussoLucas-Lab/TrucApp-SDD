## Why

Los usuarios del Truco Counter necesitan una forma simple, táctil y rápida de sumar o corregir puntos para cada equipo. La UI de botones dedicados reduce errores y aporta claridad de interacción, esencial en contexto de mesa y dispositivos móviles.

## What Changes

- Agrega el componente PointButtons.jsx, con todos los botones (+1, +2, +3, +4, -1) para un equipo.
- Permite sumar y restar puntos directamente con acciones desacopladas, compatible con mobile.
- Integra el hitbox táctil de mínimo 48x48px por botón para evitar errores de toque.
- Diferencia visualmente los botones de sumar/restar.

## Capabilities

### New Capabilities
- `point-buttons`: Componente agrupador de botones de suma y resta de puntos, usable y accesible desde mobile.

### Modified Capabilities
- 

## Impact

- src/components/PointButtons.jsx (nuevo)
- Interfaz directa con el hook useGameState (actions addPoints/subtractPoint)
- Cambios menores en componentes padres para integración