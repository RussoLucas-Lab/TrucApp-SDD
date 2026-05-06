## Context

The TrucApp uses a basic numeric score display in the ScoreBoard component. The project already has a comprehensive design specification for "palitos" (traditional Argentine Truco stick counter) in `docs/DESIGN.md`. This design document operationalizes that specification, breaking it into concrete architectural decisions and implementation approach.

Current state:
- ScoreBoard displays scores as plain numbers (e.g., "11 / 15")
- No cultural or visual context for the scoring system
- CSS already exists for ScoreBoard styling

## Goals / Non-Goals

**Goals:**
- Implement PalitosCounter component that renders points as grouped sticks (5 per group)
- Add animation feedback when scores increment
- Keep numeric display for accessibility and clarity
- Maintain existing color palette (no new design tokens)
- Ensure mobile responsiveness (scales down on screens < 400px)

**Non-Goals:**
- Replacing numeric score display (keep both)
- Adding new color tokens to the project
- Supporting old browsers without SVG
- Making palitos the primary interface for score input/modification (visual only)

## Decisions

### 1. SVG vs CSS-based palitos
**Decision**: Use SVG for stick rendering, not CSS borders.

**Rationale**:
- SVG provides precise positioning for the diagonal "5th stick" without complex CSS transforms
- Cleaner rotation and overlap handling for the crossing stick
- Better performance for many stick groups (fewer DOM nodes than CSS approach)
- Spec in `docs/DESIGN.md` already assumes SVG structure

**Alternative considered**: CSS with `border` elements → rejected because diagonal overlay is awkward and less accessible.

### 2. Component granularity
**Decision**: Two-component structure:
- `PalitoGroup`: Renders 0–5 sticks as SVG (reusable, testable)
- `PalitosCounter`: Composition layer that renders N groups based on total points

**Rationale**:
- Separation of concerns: group rendering logic separate from composition
- Easier to test and animate individual groups
- Simplifies state management in parent

### 3. Animation trigger
**Decision**: Animate only the *new* stick on each point increment.

**Rationale**:
- Subtle visual feedback without overwhelming animation
- CSS `@keyframes palito-appear` with 0.25s duration (spec-aligned)
- Only sticks that change from ghost → active get the animation

**Alternative considered**: Animate entire group → too busy, distracting.

### 4. Layout in ScoreBoard
**Decision**: Palitos stack horizontally, wrap to next line if needed. Numeric score below palitos.

**Rationale**:
- Matches spec layout (Section 7: "MARCADOR" diagram)
- Horizontal flex allows flexible group count
- Numeric fallback maintains accessibility

**Mobile variant**: On screens < 400px, scale all dimensions to 75% (spec requirement).

### 5. Color and styling
**Decision**: Reuse `--color-primary` CSS variable for palito color. No new tokens.

**Rationale**:
- Cohesive visual identity (sticks use project primary color)
- Ghost sticks use `color-mix()` with 20% opacity of primary
- Spec explicitly says "use existing palette"

### 6. Accessibility layer
**Decision**: Add `role="img"` and `aria-label` to palitos container with numeric string.

**Rationale**:
- Screen readers get numeric context (e.g., "15 of 15 points")
- Avoids duplicate announcements (numeric text already present below)
- Follows WCAG pattern for icon/image content

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| SVG rendering unsupported in very old browsers | No IE11 support required; modern browser assumption is valid for this project |
| Performance with many groups (30+ sticks) | Lazy render or virtualization later if needed; current scope is 15–30 max points |
| Animated sticks may distract during gameplay | Animation is subtle (0.25s) and only on new sticks; A/B test if concern arises |
| Color contrast on light backgrounds | Verify `--color-primary` meets WCAG AA (4.5:1) in design review |

## Migration Plan

1. Create `PalitosCounter.jsx` and `PalitosCounter.css` alongside existing ScoreBoard
2. Update `ScoreBoard.jsx` to import and render `<PalitosCounter />` above or alongside numeric score
3. No database or API changes required
4. CSS variables already exist in project; no additional tokens to define
5. Rollback: Simply remove `<PalitosCounter />` import from ScoreBoard

## Open Questions

1. Should the 5th stick be a true diagonal, or is a rotated rect acceptable for browser compatibility?
   - **Recommendation**: Use rotated rect (`transform: rotate(-66deg)`) — cross-browser safe and still visually clear
2. Do we want optional "fósforo heads" (colored circles at stick tips)?
   - **Recommendation**: Start without heads; add as enhancement if feedback requests it
3. Should completed groups (5/5 sticks) display differently from the current group?
   - **Recommendation**: No — same color for all active sticks; only ghost sticks differ in opacity
