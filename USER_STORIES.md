# USER_STORIES.md — Historias de Usuario

> Formato: **Como** [rol] **quiero** [acción] **para** [beneficio]  
> Cada historia tiene criterios de aceptación (AC) verificables.  
> Prioridad: 🔴 Must Have · 🟡 Should Have · 🟢 Nice to Have

---

## Épica 1: Gestión del Marcador

### US-01 · Ver el marcador de ambos equipos 🔴

**Como** jugador de Truco  
**quiero** ver el puntaje actual de "Nosotros" y "Ellos" en pantalla  
**para** saber en qué situación está la partida en todo momento

**Criterios de Aceptación:**
- [ ] Se muestran dos bloques diferenciados: "Nosotros" y "Ellos"
- [ ] El puntaje de cada equipo es un número visible y grande (mínimo 48px)
- [ ] Ambos puntajes son visibles simultáneamente sin scroll
- [ ] El diseño es legible en una pantalla de 375px de ancho

---

### US-02 · Sumar puntos a un equipo 🔴

**Como** jugador que lleva el marcador  
**quiero** sumar 1, 2, 3 o 4 puntos a cualquiera de los dos equipos  
**para** registrar lo que se ganó en cada mano (Truco, Envido, Flor)

**Criterios de Aceptación:**
- [ ] Hay botones "+1", "+2", "+3", "+4" para cada equipo
- [ ] Al tocar un botón, el puntaje del equipo correspondiente aumenta correctamente
- [ ] Los botones son lo suficientemente grandes para tocar con el pulgar sin errores
- [ ] El puntaje se actualiza de forma inmediata y visible

---

### US-03 · El puntaje no puede superar 30 🔴

**Como** jugador  
**quiero** que el sistema no permita sumar más de 30 puntos  
**para** respetar las reglas del Truco

**Criterios de Aceptación:**
- [ ] Si el puntaje + puntos a sumar > 30, el puntaje queda en 30 (cap)
- [ ] No se muestra un número mayor a 30 en ningún caso
- [ ] Los botones de suma se deshabilitan o ignoran cuando el equipo ya llegó a 30

---

### US-04 · Corregir un error restando un punto 🔴

**Como** jugador que se equivocó al anotar  
**quiero** poder restar 1 punto a cualquier equipo  
**para** corregir errores de carga sin tener que reiniciar la partida

**Criterios de Aceptación:**
- [ ] Hay un botón "-1" para cada equipo
- [ ] Al tocarlo, el puntaje disminuye en 1
- [ ] El puntaje no puede bajar de 0 (mínimo es 0)
- [ ] El botón está visualmente diferenciado de los botones de suma

---

## Épica 2: Etapas del Juego

### US-05 · Ver si el equipo está en Malas o Buenas 🔴

**Como** jugador  
**quiero** ver claramente si cada equipo está en "Malas" (1–15) o "Buenas" (16–30)  
**para** saber en qué etapa de la partida está cada uno

**Criterios de Aceptación:**
- [ ] Cada equipo muestra una etiqueta o indicador: "Malas" o "Buenas"
- [ ] El indicador cambia automáticamente cuando el puntaje supera 15
- [ ] La diferencia visual entre Malas y Buenas es clara e inmediata
- [ ] Un jugador que no conoce la app puede entender la diferencia sin instrucciones

---

### US-06 · Ver quién ganó la partida 🔴

**Como** jugador  
**quiero** que la app me avise cuando alguien llegó a 30 puntos  
**para** saber que la partida terminó sin tener que estar contando

**Criterios de Aceptación:**
- [ ] Cuando un equipo llega a 30, se muestra un mensaje de ganador prominente
- [ ] El mensaje indica claramente qué equipo ganó ("¡Ganaron Nosotros!" o "¡Ganaron Ellos!")
- [ ] Los botones de suma se deshabilitan cuando la partida terminó
- [ ] El estado de fin de partida es visualmente inequívoco (no se puede confundir con el juego en curso)

---

## Épica 3: Control de Partida

### US-07 · Reiniciar la partida 🔴

**Como** jugador que quiere empezar una nueva partida  
**quiero** poder resetear el marcador con un solo toque  
**para** no tener que recargar la página

**Criterios de Aceptación:**
- [ ] Hay un botón "Nueva Partida" o "Reiniciar" siempre visible
- [ ] Al tocarlo, ambos puntajes vuelven a 0
- [ ] La etapa de ambos equipos vuelve a "Malas"
- [ ] Si había un ganador, el mensaje desaparece
- [ ] El reinicio es inmediato, sin confirmación (simplicidad sobre seguridad en v1)

---

## Épica 4: Experiencia de Uso

### US-08 · Usar la app cómodamente con una mano en el celular 🟡

**Como** jugador en la mesa de juego  
**quiero** poder operar el marcador con una sola mano mientras sostengo las cartas con la otra  
**para** no interrumpir el flujo del juego

**Criterios de Aceptación:**
- [ ] Todos los elementos interactivos tienen un área táctil mínima de 48x48px
- [ ] Los botones más usados (+1, +2) están en una zona cómoda del pulgar
- [ ] No hay elementos que requieran precisión extrema para tocar
- [ ] El layout es estable (no hay re-layouts al sumar puntos)

---

### US-09 · Entender la app sin leer instrucciones 🟡

**Como** jugador que ve la app por primera vez  
**quiero** entender cómo usarla de forma intuitiva  
**para** no perder tiempo mientras los demás esperan

**Criterios de Aceptación:**
- [ ] Las etiquetas "Nosotros" y "Ellos" son visibles y claras
- [ ] La función de cada botón se entiende por su label (+1, +2, etc.)
- [ ] El puntaje grande es el elemento visual dominante
- [ ] No hay elementos decorativos que confundan la jerarquía visual

---

### US-10 · Ver la app bien en modo retrato y paisaje 🟢

**Como** jugador  
**quiero** que el marcador se vea bien sin importar cómo tenga el celular  
**para** poder ubicar el teléfono como quiera en la mesa

**Criterios de Aceptación:**
- [ ] El layout en modo retrato (portrait) es el diseño principal
- [ ] En modo paisaje (landscape) el contenido no se corta ni se superpone
- [ ] No hay scroll horizontal en ninguna orientación

---

## Backlog Futuro (fuera del MVP)

> Estas historias están identificadas pero **no se implementan en v1**.

| ID     | Historia                                        | Prioridad Futura |
|--------|-------------------------------------------------|------------------|
| US-F01 | Editar los nombres de los equipos               | Alta             |
| US-F02 | Persistir el marcador si se cierra el navegador | Media            |
| US-F03 | Seleccionar variante a 15 o 30 puntos           | Media            |
| US-F04 | Historial de partidas jugadas                   | Baja             |
| US-F05 | Sonido al sumar puntos                          | Baja             |
| US-F06 | Modo oscuro / claro                             | Baja             |

---

## Resumen de Prioridades MVP

| Historia | Descripción                        | Prioridad |
|----------|------------------------------------|-----------|
| US-01    | Ver marcador de ambos equipos      | 🔴 Must   |
| US-02    | Sumar puntos                       | 🔴 Must   |
| US-03    | Cap de 30 puntos                   | 🔴 Must   |
| US-04    | Restar un punto (corrección)       | 🔴 Must   |
| US-05    | Indicador Malas / Buenas           | 🔴 Must   |
| US-06    | Detección de fin de partida        | 🔴 Must   |
| US-07    | Reiniciar partida                  | 🔴 Must   |
| US-08    | UX táctil con una mano             | 🟡 Should |
| US-09    | Intuitividad sin instrucciones     | 🟡 Should |
| US-10    | Soporte landscape                  | 🟢 Nice   |
