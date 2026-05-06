# Truco Score Counter — PROJECT.md

## Descripción General

**Nombre del proyecto:** Truco Score Counter  
**Tipo:** Single Page Application (SPA) — Mobile-First  
**Stack:** React (sin backend, sin base de datos)  
**Contexto de desarrollo:** Especificación SDD / Flujo OPSX

---

## Propósito

Aplicación web para llevar el marcador del **Truco Argentino**, el juego de cartas más popular de Argentina. Permite a dos equipos (o dos jugadores) registrar sus puntos de forma rápida, visualmente clara y sin fricción, desde un celular en la mesa de juego.

---

## Reglas del Juego relevantes para el marcador

El Truco se juega a **30 puntos** (o a 15 en algunas variantes). Los puntos se suman de dos fuentes principales:

| Fuente        | Puntos posibles          |
|---------------|--------------------------|
| **Truco**     | 1 o 2 puntos por mano    |
| **Envido**    | 1, 2, 3 o 4 puntos       |
| **Flor**      | 3, 4 o hasta 7 puntos    |

- Hay **dos equipos**: "Nosotros" y "Ellos" (o dos jugadores).
- La partida termina cuando un equipo llega a **30 puntos**.
- Los puntos NO pueden exceder 30.
- Se juegan en **malas** (1–15) y **buenas** (16–30) — diferencia visual importante.

---

## Alcance MVP (v1.0)

### ✅ Incluido

- Marcador visual para 2 equipos: **"Nosotros"** vs **"Ellos"**
- Botones para sumar puntos: +1, +2, +3, +4
- Botón para restar un punto (corrección de error)
- Indicador visual de **Malas** (1–15) y **Buenas** (16–30)
- Detección de **fin de partida** con anuncio del ganador
- Botón para **reiniciar** la partida
- Diseño **Mobile-First**, táctil, usable con una mano
- Sin registro, sin login, sin persistencia entre sesiones

### ❌ Excluido del MVP

- Historial de partidas
- Sonidos
- Animaciones complejas
- Modo multijugador en red
- Configuración de nombres de equipos (hardcoded en v1)
- Variante a 15 puntos

---

## Decisiones Técnicas

| Decisión               | Elección               | Razón                                      |
|------------------------|------------------------|--------------------------------------------|
| Framework              | React                  | Requerimiento del proyecto                 |
| Estado                 | useState / useReducer  | Sin backend, estado local suficiente       |
| Estilos                | CSS Modules o Tailwind | A definir en implementación                |
| Build tool             | Vite                   | Rápido, estándar moderno para React SPA    |
| Deploy                 | GitHub Pages / Netlify | Estático, sin servidor                     |
| Persistencia           | Ninguna (v1)           | Simplicidad del MVP                        |

---

## Estructura de Archivos Esperada

```
truco-counter/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ScoreBoard.jsx       # Marcador principal
│   │   ├── TeamScore.jsx        # Bloque de puntaje por equipo
│   │   ├── PointButtons.jsx     # Botones +1 +2 +3 +4 -1
│   │   ├── GameStatus.jsx       # Malas/Buenas + ganador
│   │   └── ResetButton.jsx      # Botón reiniciar
│   ├── hooks/
│   │   └── useGameState.js      # Lógica del juego
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
│       └── globals.css
├── PROJECT.md
├── AGENT.md
├── USER_STORIES.md
├── package.json
└── vite.config.js
```

---

## Criterios de Éxito

- [ ] Un usuario puede completar una partida entera sin confusión
- [ ] Los puntos se suman correctamente y nunca superan 30
- [ ] El cambio de Malas a Buenas es visualmente evidente
- [ ] El fin de partida es inmediatamente obvio
- [ ] Funciona bien en pantalla de 375px de ancho (iPhone SE)
- [ ] No requiere instrucciones para usar

---

## Glosario

| Término   | Significado                                              |
|-----------|----------------------------------------------------------|
| Malas     | Primera mitad de la partida (1 a 15 puntos)             |
| Buenas    | Segunda mitad de la partida (16 a 30 puntos)            |
| Truco     | Jugada que apuesta puntos entre manos                   |
| Envido    | Jugada que apuesta puntos basada en cartas de un palo   |
| Flor      | Jugada especial con tres cartas del mismo palo          |
| Nosotros  | Equipo local / el que anota                             |
| Ellos     | Equipo rival                                            |
