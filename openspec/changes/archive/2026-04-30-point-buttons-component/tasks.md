## 1. Setup y estructura

- [x] 1.1 Crear el archivo y esqueleto de `src/components/PointButtons.jsx`
- [x] 1.2 Definir props esperados: `team`, `addPoints`, `subtractPoint`, `gameOver`, `scoreActual`
- [x] 1.3 Agregar estilos base CSS reservados para el componente o clase específica

## 2. Render y lógica UI

- [x] 2.1 Renderizar los cinco botones (+1, +2, +3, +4, -1) respetando el orden visual
- [x] 2.2 Implementar área táctil mínima (CSS: min-width/min-height 48px para cada botón)
- [x] 2.3 Asignar estilos diferenciales a sumar/restar (color, fondo, contraste)
- [x] 2.4 Conectar cada botón de suma a `addPoints(team, amount)` correctamente
- [x] 2.5 Conectar botón de resta a `subtractPoint(team)`

## 3. Validaciones y estados

- [x] 3.1 Deshabilitar todos los botones si `gameOver === true`
- [x] 3.2 Deshabilitar botones de suma si la acción llevaría el score > 30
- [x] 3.3 Deshabilitar botón "-1" si score actual es 0
- [x] 3.4 Agregar aria-label/atributo accesible a cada botón (opcional pero recomendado)

## 4. Integración y pruebas

- [x] 4.1 Integrar el componente en el componente padre (mock implementación)
- [x] 4.2 Verificar funcionamiento real en mobile (devtools/simulador)
- [x] 4.3 Validar accesibilidad al tacto y feedback visual
