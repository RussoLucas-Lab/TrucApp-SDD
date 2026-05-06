# Change Map: Truco Score Counter

**Orden de implementación:**  
Basado en el flujo de trabajo sugerido y agrupado en capas:  
**1. Estado → 2. Componentes → 3. Estilos y UX Final**

---

## 1. State Logic (src/hooks/useGameState.js)

| ID    | User Stories                  | Dependencies | Affected Files                  |
|-------|-------------------------------|--------------|---------------------------------|
| T-01  | US-02, US-03, US-04, US-06, US-07, US-05 | —            | src/hooks/useGameState.js       |

**Descripción:**  
Implementar el hook principal con useReducer:
- Sumar puntos a cada equipo (+1, +2, +3, +4) [US-02]
- Aplicar el "cap" de 30 puntos [US-03]
- Restar 1 punto, nunca menor que 0 [US-04]
- Detectar “Malas” (≤15) o “Buenas” (>15) por equipo [US-05]
- Detección de fin de partida y ganador [US-06]
- Resetear estado a valores iniciales [US-07]

---

## 2. Componentes

### 2.1 Componentes Base

| ID    | User Stories      | Dependencies | Affected Files                |
|-------|-------------------|--------------|-------------------------------|
| T-02  | US-02, US-04, US-08 | T-01         | src/components/PointButtons.jsx|
| T-03  | US-01, US-09      | T-01         | src/components/TeamScore.jsx  |
| T-04  | US-01             | T-03         | src/components/ScoreBoard.jsx |

**Descripción:**   
- T-02: Renderizar botones "+1", "+2", "+3", "+4" y "-1", zona táctil >= 48x48px, disparar acciones del hook.  
- T-03: Mostrar nombre de equipo y score, indicador grande y visualmente dominante.  
- T-04: Ensamblar TeamScore de ambos equipos, muestra ambos scores simultáneos y diferenciados.

### 2.2 Estado de juego y UX

| ID    | User Stories         | Dependencies    | Affected Files                 |
|-------|----------------------|-----------------|--------------------------------|
| T-05  | US-05, US-06, US-03  | T-01, T-03      | src/components/GameStatus.jsx  |
| T-06  | US-07                | T-01            | src/components/ResetButton.jsx |

**Descripción:**  
- T-05: Mostrar indicador "Malas"/"Buenas", mensaje de ganador cuando corresponde, deshabilitar sumar cuando juego terminado.  
- T-06: Botón "Reiniciar"; al clickear llama a acción de reset del hook.

### 2.3 Aplicación principal

| ID    | User Stories                   | Dependencies               | Affected Files     |
|-------|--------------------------------|----------------------------|--------------------|
| T-07  | Todas (integración)            | T-01…T-06                  | src/App.jsx, src/main.jsx |

**Descripción:**  
- Ensamblar ScoreBoard, TeamScore, PointButtons, GameStatus, ResetButton
- Obtener y pasar estado/acciones del hook a cada componente correspondiente

---

## 3. Styles & Responsive UX

| ID    | User Stories              | Dependencies     | Affected Files            |
|-------|---------------------------|------------------|---------------------------|
| T-08  | US-08, US-09, US-10       | T-07             | src/styles/globals.css, componentes |

**Descripción:**  
- Mobile-First, mínimo 375px (iPhone SE)
- Layout sin scroll horizontal en landscape [US-10]
- Etiquetas y botones claros e intuitivos [US-09]
- Paleta, tipografía y jerarquía visual [PROJECT.md]
- Área táctil mínima para elementos interactivos [US-08]
- Feedback visual para cambios de Malas/Buenas, ganador
- Compatibilidad y pruebas visuales (portrait/landscape)

---

## Listado Resumido

### 1. Estado
- **T-01**: useGameState.js con toda la lógica (US-02/03/04/05/06/07)

### 2. Componentes
- **T-02**: PointButtons (+/-) por equipo (US-02, US-04, US-08)
- **T-03**: TeamScore — bloque nombre+score (US-01, US-09)
- **T-04**: ScoreBoard — layout principal (US-01)
- **T-05**: GameStatus — Malas/Buenas + ganador (US-05, US-06, US-03)
- **T-06**: ResetButton — reinicio partida (US-07)
- **T-07**: App.jsx — integración y wiring (todas)

### 3. Estilos / UX
- **T-08**: Mobile/responsive, jerarquía visual, feedback, accesibilidad (US-08/09/10)

---

## ¿Qué viene primero?
1. **T-01** (hook, lógica de juego central)
2. **T-02, T-03** (botones y bloques para cada equipo)
3. **T-04** (ScoreBoard arma la pantalla principal)
4. **T-05, T-06** (estado de juego extra y reinicio)
5. **T-07** (App.jsx final integra todo)
6. **T-08** (estilos y pruebas UX)
