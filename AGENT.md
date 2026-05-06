# AGENT.md — Instrucciones para el Agente de Código

> Este archivo guía al agente de IA (Opencode + GitHub Copilot) durante el desarrollo.  
> Leerlo completo antes de tocar cualquier archivo de código.

---

## Contexto del Proyecto

Estás construyendo **Truco Score Counter**, una SPA Mobile-First en React para llevar el marcador del juego de cartas argentino "Truco". No hay backend. No hay base de datos. Todo el estado vive en el cliente durante la sesión.

Lee `PROJECT.md` para entender las reglas del juego y el alcance del MVP.  
Lee `USER_STORIES.md` para entender qué debe poder hacer el usuario.

---

## Tu Rol

Eres un desarrollador frontend senior trabajando en un proyecto bien definido. Tu trabajo es:

1. **Implementar** lo que dicen las historias de usuario — ni más, ni menos.
2. **Respetar** la estructura de archivos definida en `PROJECT.md`.
3. **Preguntar antes de asumir** si algo no está especificado.
4. **No agregar features** que no estén en el alcance del MVP.

---

## Stack y Restricciones Técnicas

| Ítem              | Valor                          |
|-------------------|--------------------------------|
| Framework         | React 18+                      |
| Build tool        | Vite                           |
| Lenguaje          | JavaScript (no TypeScript en v1)|
| Estilos           | CSS puro con CSS Variables     |
| Estado            | useState / useReducer (sin Redux, sin Zustand) |
| Routing           | Ninguno (SPA de una sola vista)|
| Testing           | No requerido en v1             |
| Dependencias ext. | Mínimas — evitar librerías innecesarias |

**Prohibido en v1:**
- TypeScript
- Librerías de UI (MUI, Chakra, Shadcn, etc.)
- Gestores de estado externos
- Fetch / llamadas a APIs
- localStorage o sessionStorage
- React Router

---

## Principios de Código

### Legibilidad primero
- Nombres de variables y funciones en **inglés**
- Comentarios explicativos en **español** cuando la lógica del juego lo requiera
- Componentes pequeños y con responsabilidad única

### Lógica del juego aislada
- Toda la lógica de puntuación debe vivir en `src/hooks/useGameState.js`
- Los componentes solo renderizan — no calculan ni validan puntos
- Las reglas del juego (límite 30, malas/buenas) se definen como constantes

### Ejemplo de constantes del juego
```javascript
// src/hooks/useGameState.js
const MAX_SCORE = 30;
const MALAS_LIMIT = 15;
const INITIAL_STATE = { nosotros: 0, ellos: 0, gameOver: false, winner: null };
```

### Manejo de estado
Usar `useReducer` para el estado del juego con acciones claras:

```javascript
// Acciones esperadas
{ type: 'ADD_POINTS', team: 'nosotros', amount: 2 }
{ type: 'SUBTRACT_POINT', team: 'ellos' }
{ type: 'RESET_GAME' }
```

---

## Diseño y UX

### Principios Mobile-First
- Diseñar para **375px de ancho mínimo** (iPhone SE)
- Botones con mínimo **48x48px** de área táctil
- Sin hover-only interactions (los móviles no tienen hover)
- Fuente mínima de **16px** para evitar zoom automático en iOS

### Layout esperado
```
┌─────────────────────────┐
│   TRUCO COUNTER         │  ← Header con título
├────────────┬────────────┤
│  NOSOTROS  │   ELLOS    │  ← Dos columnas
│    [12]    │    [8]     │  ← Puntaje grande
│  [MALAS]   │  [MALAS]   │  ← Indicador malas/buenas
│ +1 +2 +3 +4│ +1 +2 +3 +4│ ← Botones de suma
│    [-1]    │    [-1]    │  ← Botón de resta
├────────────┴────────────┤
│      [REINICIAR]        │  ← Botón reset centrado
└─────────────────────────┘
```

### Paleta sugerida (estilo naipes argentinos)
- Fondo: verde oscuro (mesa de juego) `#1a472a`
- Tarjetas: crema/marfil `#f5f0e8`
- Acento: rojo `#c0392b`
- Texto: casi negro `#1c1c1c`
- Malas: tono neutro
- Buenas: tono dorado/cálido para destacar

---

## Flujo de Trabajo Esperado

Seguir este orden al implementar:

1. **Setup del proyecto** — `npm create vite@latest`, instalar dependencias
2. **Hook de lógica** — `useGameState.js` con toda la lógica del juego
3. **Componentes base** — de menor a mayor: botones → team score → scoreboard
4. **App principal** — ensamblar en `App.jsx`
5. **Estilos** — aplicar CSS después de que la lógica funcione
6. **QA manual** — simular una partida completa en móvil

---

## Checklist antes de cada commit

- [ ] ¿El componente tiene una sola responsabilidad?
- [ ] ¿La lógica del juego está en el hook, no en el componente?
- [ ] ¿Los botones son fácilmente tocables en mobile?
- [ ] ¿El puntaje nunca puede superar 30?
- [ ] ¿El juego se puede reiniciar correctamente?
- [ ] ¿El código es legible sin necesidad de comentarios adicionales?

---

## Preguntas Frecuentes del Agente

**¿Puedo usar TypeScript?**  
No en v1. Está explícitamente excluido para mantener la simplicidad.

**¿Puedo agregar animaciones?**  
Sí, con CSS puro. No agregar librerías de animación.

**¿Qué hago si una historia de usuario es ambigua?**  
Detente y pregunta al desarrollador antes de asumir. Documentar la pregunta como comentario `// TODO: clarificar con dev —`.

**¿Puedo refactorizar código existente?**  
Solo si es necesario para implementar una historia. No refactorizar por estética.

**¿Qué pasa si los puntos quedan en negativo?**  
No es posible. El mínimo es 0. La acción `SUBTRACT_POINT` debe ignorarse si el score ya es 0.
