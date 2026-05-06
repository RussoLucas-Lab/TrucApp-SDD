## Context

La aplicación Truco Score Counter requiere un mecanismo centralizado para la administración de estado que refleje fielmente las reglas del Truco, evite errores y habilite un desarrollo modular. Actualmente, no existe un sistema que encapsule la lógica: sumar/restar puntos, límites, etapas (Malas/Buenas), ganador, y reinicio.

## Goals / Non-Goals

**Goals:**
- Encapsular TODA la lógica de negocio del marcador de Truco en un custom hook único.
- Evitar código duplicado y side effects en los componentes de UI.
- Hacer que la UI dependa solamente del estado y despache acciones, sin importar la lógica.
- Implementar fácil testing/manual QA aislado del hook.
- Validar todas las transiciones del juego según reglas: cap de 30, mínimo 0, Malas/Buenas, ganador, reset.

**Non-Goals:**
- No se maneja persistencia (ni localstorage ni backend).
- No agrega features fuera del MVP ni modo variante 15 puntos.
- No contempla internacionalización ni cambios de nombres de equipos.
- No implementa animaciones ni efectos visuales: sólo lógica de estado.

## Decisions

- Se usará React useReducer por sobre useState para que las transiciones sean predecibles y auditable (razón: múltiples acciones, lógica condicional y escalabilidad para features futuras).
- El estado tendrá la siguiente forma base:
  ```js
  {
    nosotros: 0, // score actual
    ellos: 0,    // score actual
    gameOver: false, // ¿acabó el partido?
    winner: null // 'nosotros' | 'ellos' | null
  }
  ```
- Las acciones posibles serán:
  - ADD_POINTS: { team: 'nosotros' | 'ellos', amount: 1|2|3|4 }
  - SUBTRACT_POINT: { team }
  - RESET_GAME
- Se definirán constantes para los límites (MAX_SCORE = 30, MALAS_LIMIT = 15)
- Todo control de “no pasar de 30” y “no bajar de 0” está en el reducer, nunca en la UI.
- Las derivaciones Malas/Buenas y ganador serán derivadas del estado numérico actual, nunca guardadas por separado (para single source of truth)

## Risks / Trade-offs

- [Risk] UI tightly coupled to hook signatures → Mitigación: proporcionar documentación de API clara y test manual
- [Risk] Errores por no validar correctamente límites o condiciones de fin de juego → Mitigación: tests manuales exhaustivos, QA antes de integración
- [Trade-off] No guardar historial ni permitir undo (por scope MVP)
