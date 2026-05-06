## 1. Component Structure

- [x] 1.1 Create `src/components/PalitosCounter.jsx` with `PalitoGroup` and `PalitosCounter` components
- [x] 1.2 Create `src/components/PalitosCounter.css` with base styling and animations
- [x] 1.3 Verify SVG structure renders correctly: 4 vertical + 1 diagonal stick per group

## 2. Core Rendering Logic

- [x] 2.1 Implement `PalitoGroup` component to render SVG with `filled` prop (0–5)
- [x] 2.2 Implement active vs ghost stick styling with CSS classes `palito-active` and `palito-ghost`
- [x] 2.3 Implement `PalitosCounter` component that calculates groups and remainder from `puntos` and `max`
- [x] 2.4 Test rendering for scores: 0, 1, 5, 6, 14, 15, 30 points

## 3. Styling and Colors

- [x] 3.1 Define CSS variables: `--palito-color-active`, `--palito-color-ghost` using existing `--color-primary`
- [x] 3.2 Add dark theme support with `@media (prefers-color-scheme: dark)` for ghost stick opacity
- [x] 3.3 Set base dimensions: sticks 4px wide × 32px tall, group spacing 14px, ghost sticks use 20% opacity (light) / 15% (dark)
- [x] 3.4 Verify color contrast meets WCAG AA (4.5:1 minimum) against project background

## 4. Animations

- [x] 4.1 Create `@keyframes palito-appear` for vertical sticks (scaleY: 0.4 → 1, opacity: 0 → 1)
- [x] 4.2 Create `@keyframes diagonal-appear` for 5th stick (scaleX: 0 → 1, opacity: 0 → 1, rotation: -66deg)
- [x] 4.3 Apply animation class `.palito-active.new` with 0.25s duration and `ease-out` timing
- [x] 4.4 Add key tracking logic to identify which stick is newly activated on prop changes

## 5. Responsive Design

- [x] 5.1 Implement mobile layout scaling: all dimensions 75% on viewport < 400px
- [x] 5.2 Use flexbox layout for horizontal stick group arrangement with wrapping
- [x] 5.3 Test on desktop (1024px+), tablet (768px), and mobile (320px–400px) viewports

## 6. Accessibility

- [x] 6.1 Add `role="img"` to `.palitos-counter` container
- [x] 6.2 Add `aria-label` with format "{puntos} de {max} puntos" (e.g., "7 de 15 puntos")
- [x] 6.3 Ensure numeric score text is always visible alongside palitos
- [ ] 6.4 Test with screen reader (NVDA or JAWS) to verify announcements

## 7. Integration with ScoreBoard

- [x] 7.1 Import `PalitosCounter` component in `src/components/ScoreBoard.jsx`
- [x] 7.2 Update ScoreBoard layout to render palitos above or alongside numeric score
- [x] 7.3 Pass current team scores and max points to PalitosCounter as props
- [x] 7.4 Verify both "Nosotros" and "Ellos" teams display palitos correctly
- [x] 7.5 Test palitos update reactively when scores change in game state

## 8. Testing

- [ ] 8.1 Unit test PalitoGroup: renders correct number of active/ghost sticks for `filled` values 0–5
- [ ] 8.2 Unit test PalitosCounter: calculates correct group composition and remainder for various point totals
- [ ] 8.3 Integration test: ScoreBoard with PalitosCounter updates when score changes from 5 → 6, 14 → 15, etc.
- [ ] 8.4 Visual regression test: compare palitos rendering on light and dark themes
- [ ] 8.5 Snapshot test: verify SVG structure hasn't changed between renders

## 9. Documentation and Cleanup

- [x] 9.1 Add JSDoc comments to `PalitoGroup` and `PalitosCounter` explaining props and behavior
- [x] 9.2 Add inline comments to SVG rect coordinates explaining the group layout
- [x] 9.3 Verify no console warnings or errors during rendering
- [x] 9.4 Clean up any temporary console.log or debug code
