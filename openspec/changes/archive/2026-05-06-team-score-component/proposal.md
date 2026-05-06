## Why

Para que la UI sea clara, jerárquica y fácil de leer (especialmente en mobile), cada equipo necesita un bloque visual dedicado que muestre su nombre y score de manera destacada e independiente del componente de botones. Esto mejora la organización, refuerza la identidad de equipo y permite futuras mejoras visuales o de interacción en un solo lugar. Además, separando la responsabilidad visual del score, facilitamos el mantenimiento y la escalabilidad de la app.

## What Changes

- Crea el componente `TeamScore.jsx`, mostrando:
  - El nombre del equipo (“Nosotros” o “Ellos”) pasado por prop.
  - El score actual del equipo, en display grande/centrado para mobile.
- Permite reutilización en ScoreBoard y App, para ambos equipos.
- Desacopla la presentación del score de la lógica de modificación (PointButtons).

## Capabilities

### New Capabilities
- `team-score`: Componente visual centrado en mostrar nombre y score de un equipo, pensado para usarse junto a botones y otros indicadores.

### Modified Capabilities
- (Ninguna — El change es estrictamente aditivo y desacoplado.)

## Impact

- src/components/TeamScore.jsx (nuevo)
- Integración en ScoreBoard.jsx y/o App.jsx, reemplazando cualquier display de score/información de equipo hecho inline o “hardcodeado”.
