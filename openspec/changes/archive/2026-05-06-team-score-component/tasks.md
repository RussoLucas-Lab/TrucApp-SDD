# Tasks: team-score-component

## 1. Estructura y contrato del componente

- [x] 1.1 Crear archivo src/components/TeamScore.jsx y esqueleto base
- [x] 1.2 Definir props obligatorios: teamName (string), score (number)
- [x] 1.3 Agregar validación de tipos de props (PropTypes o TS si aplica)

## 2. Render y estilos visuales

- [x] 2.1 Implementar layout flex column centrado, 100% stateless
- [x] 2.2 Mostrar el nombre del equipo en zona superior, bien visible
- [x] 2.3 Renderizar el score con tipografía grande (2.5em+), con fuerte contraste
- [x] 2.4 Estilizar para responsivo y mobile-first (ocupa ancho completo, texto elidido si es largo)
- [x] 2.5 Encapsular estilos principales en clase .team-score y subclases, sin acoplar a layout padre

## 3. Reutilización e integración

- [x] 3.1 Validar que puede usarse dos veces en ScoreBoard/App con distintos props
- [ ] 3.2 Pruebas de render integrando diferentes nombres de equipo/extremos de score

## 4. Verificación de criterios de aceptación

- [x] 4.1 Revisar que no incluya lógica de negocio, hooks ni manipulación de estado interno
- [ ] 4.2 Chequear compatibilidad con futuras extensiones (ej: variantes visuales)

---
Cada task es atómica y debe poder marcarse como completa de manera independiente.