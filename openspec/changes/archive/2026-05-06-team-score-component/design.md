## Context

Actualmente la UI muestra el score y nombre del equipo de forma “hardcodeada” en el componente raíz (App) o en markup no reutilizable. Esto dificulta la escalabilidad, la consistencia visual y la posibilidad de evolucionar la presentación o integración futura (ej: animaciones, color, badges).
El nuevo componente TeamScore apunta a centralizar y estandarizar la visualización del nombre y puntaje de cada equipo, usado en ScoreBoard y App, totalmente desacoplado de la lógica/acciones (que quedan en el hook y PointButtons).

## Goals / Non-Goals

**Goals:**
- Mostrar el nombre del equipo y el score, bien jerarquizado y centrado.
- Visual prominente: el score debe ser lo más notorio, tamaño de fuente grande.
- Reutilizable, stateless y configurado sólo vía props.
- Listo para mobile y desktop, con layout responsive simple.
- Permitir el agregado futuro de elementos visuales (iconos, color, animación) sin romper contrato.

**Non-Goals:**
- No contiene lógica de suma/resta de puntos (eso es responsabilidad de PointButtons/hook).
- No navega estados complejos del juego ni muestra mensajes de ganador (lo hace GameStatus en cambios posteriores).
- No implementa animaciones ni efectos avanzados en este release (queda como mejora posible/futura).

## Decisions

- **Props esperados:** `teamName` (string, por ej. “Nosotros”), `score` (number).
- **Layout:** `<div>` principal con display flex column, `teamName` en la parte superior, score centrado y grande. Opcionalmente, un contenedor con clase CSS `.team-score`.
- **Estilizado:**
  - score: fuente grande (2.5em o más), contraste fuerte.
  - nombre equipo: subtítulo más chico, pero visible.
  - Opcional CSS para variantes primario/secundario si se requiriera.
- **Responsivo:** tamaño adaptable, ocupa todo el ancho disponible en mobile.
- **Alternativas descartadas:**
  - Inyectar componente de botones dentro: separado para máxima composición.
  - Manejar lógica local de score: siempre viene por prop.

## Risks / Trade-offs

| Riesgo                                         | Mitigación                                               |
|------------------------------------------------|----------------------------------------------------------|
| Futuro desacople de estilos con ScoreBoard     | Centralizar estilos en `.team-score` y variantes         |
| Desequilibro visual si nombres muy largos      | Limitar/anidar text-overflow en CSS                      |
| Ambigüedad en formato (ej: nombres similares)  | Dejar extensible, no hardcodear “Nosotros/Ellos”         |
