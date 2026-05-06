## ADDED Requirements

### Requirement: PalitosCounter component renders points as grouped sticks
The PalitosCounter component SHALL display a score between 0 and N points using the traditional "palitos" (stick) visual representation. Each stick group represents 5 points: the first four are vertical sticks and the fifth is a diagonal stroke crossing all four. The component SHALL render complete groups (5/5 sticks) in active color and the current incomplete group with active sticks + ghost placeholders for remaining slots.

#### Scenario: Display 0 points
- **WHEN** PalitosCounter receives `puntos={0}` and `max={15}`
- **THEN** it renders 3 empty groups (placeholders), each showing 5 ghost sticks

#### Scenario: Display 7 points
- **WHEN** PalitosCounter receives `puntos={7}` with `max={15}`
- **THEN** it renders: [complete group with 5 active sticks] [incomplete group with 2 active sticks + 3 ghost sticks] [empty group with 5 ghost sticks]

#### Scenario: Display 15 points (complete)
- **WHEN** PalitosCounter receives `puntos={15}` with `max={15}`
- **THEN** it renders 3 complete groups, all with 5 active sticks each

#### Scenario: Dynamic point changes
- **WHEN** `puntos` prop changes from 5 to 6
- **THEN** the new stick in group 2 animates from invisible/scaled to full visibility over 0.25 seconds

### Requirement: PalitoGroup SVG renders individual stick groups
The PalitoGroup component SHALL render an SVG with exactly 5 "stick" elements: four vertical rects and one diagonal rect crossing them. Active sticks SHALL use the project's primary color; ghost sticks SHALL use a semi-transparent variant (20% opacity on light themes, 15% on dark).

#### Scenario: Render a 5-stick complete group
- **WHEN** PalitoGroup receives `filled={5}`
- **THEN** SVG renders 4 vertical + 1 diagonal stick, all with class `palito-active`

#### Scenario: Render a partial group
- **WHEN** PalitoGroup receives `filled={2}`
- **THEN** SVG renders 2 vertical sticks with class `palito-active` and 3 vertical sticks + 1 diagonal with class `palito-ghost`

#### Scenario: Render an empty group
- **WHEN** PalitoGroup receives `filled={0}`
- **THEN** SVG renders all 5 elements (4 vertical + 1 diagonal) with class `palito-ghost`

### Requirement: Accessibility for palitos display
The PalitosCounter SHALL include appropriate ARIA attributes so screen readers convey the score numerically. The container SHALL have `role="img"` and an `aria-label` with the format "{puntos} de {max} puntos" (e.g., "7 de 15 puntos").

#### Scenario: Screen reader announcement
- **WHEN** assistive technology scans the PalitosCounter
- **THEN** it announces "7 de 15 puntos" (or appropriate number)

#### Scenario: Numeric text fallback
- **WHEN** PalitosCounter is rendered alongside numeric display (e.g., "7/15")
- **THEN** the numeric text is visible and provides redundant confirmation of the score

### Requirement: Responsive layout for palitos groups
The PalitosCounter SHALL arrange stick groups horizontally with appropriate spacing. On mobile screens (viewport < 400px), all dimensions SHALL scale to 75% of desktop size. The container SHALL use flexbox with wrapping.

#### Scenario: Desktop layout
- **WHEN** PalitosCounter renders on a desktop (viewport ≥ 400px)
- **THEN** stick groups are spaced 14px apart horizontally, each group is 52px wide × 36px tall

#### Scenario: Mobile layout
- **WHEN** PalitosCounter renders on mobile (viewport < 400px)
- **THEN** all dimensions scale to 75%, each group is ~39px wide × 27px tall, gaps are 10.5px

#### Scenario: Group wrapping
- **WHEN** PalitosCounter renders 6 groups (30 points) on a 1024px viewport
- **THEN** groups display on one row with no wrapping (sufficient space)

### Requirement: Animation when new stick appears
When a point is added and a new stick becomes active, that stick SHALL animate into view. The animation SHALL use CSS `@keyframes palito-appear` with a duration of 0.25 seconds and an easing of `ease-out`. Vertical sticks animate with `scaleY` (origin: bottom center); the diagonal stick animates with `scaleX` and rotation maintained.

#### Scenario: Animate new vertical stick
- **WHEN** a point is added, triggering a new vertical stick to change from ghost to active
- **THEN** the stick animates from `opacity: 0; scaleY(0.4)` to `opacity: 1; scaleY(1)` over 0.25s

#### Scenario: Animate new diagonal stick (5th point in group)
- **WHEN** the 5th point is added to a group
- **THEN** the diagonal stick animates from `opacity: 0; scaleX(0)` to `opacity: 1; scaleX(1)` over 0.25s (rotation stays at -66deg)

#### Scenario: No animation for ghost sticks
- **WHEN** a new group is introduced (e.g., moving from 5 to 6 points)
- **THEN** the new empty group's 5 ghost sticks appear instantly without animation (animation applies only to sticks changing to active)

### Requirement: Color and styling consistency
Palitos SHALL use CSS variables for color, not hardcoded hex values. Active sticks SHALL use `var(--color-primary)`. Ghost sticks SHALL use `color-mix(in srgb, var(--color-primary) 20%, transparent)` on light themes and `color-mix(in srgb, var(--color-primary) 15%, transparent)` on dark themes (via `@media (prefers-color-scheme: dark)`).

#### Scenario: Light theme colors
- **WHEN** the browser is in light mode
- **THEN** active sticks are colored with `--color-primary` and ghost sticks are 20% opacity

#### Scenario: Dark theme colors
- **WHEN** the browser is in dark mode (prefers-color-scheme: dark)
- **THEN** active sticks are colored with `--color-primary` and ghost sticks are 15% opacity
