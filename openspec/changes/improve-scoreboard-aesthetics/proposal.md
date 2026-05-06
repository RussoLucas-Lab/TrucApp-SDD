## Why

The current ScoreBoard component uses a basic numeric counter without visual feedback or cultural context. Implementing a **palitos-based scoring display** (traditional Argentine Truco stick counter) makes the interface more immersive, culturally authentic, and provides better visual feedback when scores change. This aligns with the design spec already established in `@docs/DESIGN.md`.

## What Changes

- Replace or augment the numeric score display with a **PalitosCounter component** that renders traditional stick groups (5 sticks per group)
- Add visual animations when points are scored (stick "grows" into view)
- Maintain numeric display alongside palitos for accessibility
- Update ScoreBoard layout to accommodate the new visual representation
- Apply styling consistent with the existing project color palette (no new colors)

## Capabilities

### New Capabilities
- `palitos-counter`: Core component that renders 0–N points as grouped sticks (5 per group). Handles animations on point changes and supports customizable max points (15, 30, etc.)

### Modified Capabilities
- `score-display`: The existing score display capability now includes visual palitos representation alongside numeric values. Layout and animations added to existing ScoreBoard component.

## Impact

- **Components**: `src/components/ScoreBoard.jsx` (modified) and new `src/components/PalitosCounter.jsx` 
- **Styles**: `src/components/ScoreBoard.css` (updated) and new `src/components/PalitosCounter.css`
- **State**: No changes to score state management — this is purely a visual layer
- **Accessibility**: Adds `aria-label` to palitos groups for screen readers
- **Browser support**: SVG rendering required (modern browsers, no IE11)
