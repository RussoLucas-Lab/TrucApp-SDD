## ADDED Requirements

### Requirement: ScoreBoard displays palitos alongside numeric score
The ScoreBoard component SHALL render both a visual palitos representation and the numeric score. Palitos are displayed above or alongside the numeric value. The layout adapts to viewport width.

#### Scenario: Desktop layout (≥600px)
- **WHEN** ScoreBoard renders on desktop viewport
- **THEN** palitos and numeric score are displayed horizontally: `[Palitos: ⟍|||| ⟍||]` next to `[11/15]`

#### Scenario: Mobile layout (<600px)
- **WHEN** ScoreBoard renders on mobile viewport
- **THEN** palitos stack vertically above the numeric score

#### Scenario: Two-team display
- **WHEN** ScoreBoard shows both "Nosotros" and "Ellos" teams
- **THEN** each team has its own palitos group and numeric score in a left-right balanced layout

### Requirement: Palitos are updated when score changes
When the score for a team increases or decreases, the palitos display SHALL update immediately. New sticks that become active SHALL animate into view.

#### Scenario: Score increments
- **WHEN** team score changes from 5 to 6 points
- **THEN** the first stick of the second group animates into active state

#### Scenario: Score animation feedback
- **WHEN** an animation completes (0.25s)
- **THEN** the stick remains visible and stable

### Requirement: Fallback numeric display for accessibility
The numeric score text (e.g., "11 / 15") SHALL be always visible and readable. It provides redundant, accessible confirmation of the score alongside the visual palitos.

#### Scenario: Numeric display visibility
- **WHEN** PalitosCounter is present
- **THEN** numeric score is displayed clearly and is not hidden or occluded

#### Scenario: Screen reader gets both
- **WHEN** a screen reader encounters ScoreBoard with palitos
- **THEN** it announces both the palitos `aria-label` and reads the numeric text
