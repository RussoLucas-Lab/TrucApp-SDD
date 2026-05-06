## ADDED Requirements

### Requirement: Lógica centralizada de estado para marcador de Truco
El sistema SHALL administrar todo el estado relevante de una partida de Truco Argentino, incluyendo sumar/restar puntos, validar límites, etapa Malas/Buenas, detección de ganador y reset, encapsulando la lógica y exponiendo un API clara a los componentes de UI.

#### Scenario: Sumar puntos a un equipo
- **WHEN** se despacha ADD_POINTS a un equipo válido y la partida no está finalizada
- **THEN** el score del equipo aumenta en la cantidad indicada, sin exceder 30

#### Scenario: No superar 30 puntos
- **WHEN** se intenta sumar puntos a un equipo cuyo score actual está en 30
- **THEN** el score NO aumenta y permanece en 30

#### Scenario: Restar puntos corrige error, nunca debajo de 0
- **WHEN** se despacha SUBTRACT_POINT y el score > 0
- **THEN** el score del equipo disminuye en 1
- **WHEN** el score ya está en 0
- **THEN** el score permanece en 0

#### Scenario: Detección automática de Malas y Buenas
- **WHEN** un equipo tiene 15 puntos o menos
- **THEN** está en etapa "Malas"
- **WHEN** un equipo supera los 15 puntos (16 a 30)
- **THEN** está en etapa "Buenas"

#### Scenario: Anuncio automático de ganador
- **WHEN** un equipo alcanza 30 puntos exactos
- **THEN** el campo gameOver pasa a true, winner se setea a ese equipo y no se permite modificar más el score

#### Scenario: Reinicio total de la partida
- **WHEN** se despacha RESET_GAME
- **THEN** ambos puntajes vuelven a 0, etapa a Malas y winner/null, gameOver en false
