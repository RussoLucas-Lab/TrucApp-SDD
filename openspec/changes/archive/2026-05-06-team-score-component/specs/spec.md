# Especificación Funcional — TeamScore Component (T-03)

## Propósito
Componente visual que muestra el nombre de un equipo y su score de forma destacada, reutilizable y 100% stateless, desacoplado de la lógica de puntaje/interacción. Permite composición en futuras pantallas/módulos.

## Requisitos Funcionales

- Debe recibir por props:
  - `teamName` (string): Nombre a mostrar ("Nosotros", "Ellos", o cualquier valor)
  - `score` (number): Marcador actual del equipo
- Debe renderizar:
  - El nombre del equipo en la zona superior del bloque.
  - El score en posición prominente: grande, centrado y bien visible.
- El score debe utilizar un tamaño tipográfico muy superior al nombre (ej: 2.5em+ vs 1.1em).
- Estructura básica sugerida (flex column, centrado):
  ```jsx
  <div className="team-score">
    <span className="team-name">{teamName}</span>
    <span className="team-score-value">{score}</span>
  </div>
  ```
- 100% controlado por props, sin estado local.
- Debe ocupar todo el ancho disponible en mobile (responsive width: 100%).
- Visual mobile-first y accesible: contraste fuerte, textos legibles, jerarquía clara.
- No debe incluir botones, acciones o lógica de eventos.
- Debe poder reutilizarse dos veces en el ScoreBoard para mostrar ambos equipos.

## Criterios de Aceptación

- Se renderiza correctamente con cualquier par de valores de teamName/score.
- El layout no se rompe con nombres largos (usar text-overflow: ellipsis o similar).
- Puede integrarse en cualquier layout padre sin estilos acoplados/hardcodeados.
- No modifica props ni mantiene lógica de negocio ni hooks propios.
- Los estilos pueden extenderse con variantes pero el contrato de props es fijo.

## No-objetivos

- No gestiona lógica de sumar/restar puntos.
- No muestra mensajes de estado del juego ni animaciones.
- No depende de componentes de botones u otros features.

## Ejemplo de Uso

```jsx
<TeamScore teamName="Nosotros" score={12} />
<TeamScore teamName="Ellos" score={10} />
```

---

> Cualquier modificación futura (badges, animaciones) debe ser compatible con este contrato.