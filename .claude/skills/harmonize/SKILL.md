---
name: harmonize
description: Apply editorial rules to fix and harmonize a modernized chapter of Moüette's 1683 memoir — restore omissions, add footnotes, normalize proper nouns, preserve authorial voice.
argument-hint: "[chapter-name] e.g. chapitre-1, preface, traite-commerce"
---

# Harmonize Chapter — Apply Editorial Rules

Apply the agreed editorial rules to produce a corrected, harmonized version of the chapter.

## Inputs

**Chapter to harmonize**: $ARGUMENTS (e.g., "chapitre-1", "preface", "traite-commerce")

- Modernized file: `docs/chapitres/$ARGUMENTS.md` (or `docs/annexes/$ARGUMENTS.md` for annexes, or `docs/$ARGUMENTS.md` for top-level files)
- Source text: `sources/original_djvu.txt`

## Prerequisites

A `/review-chapter` report should ideally have been run first. If one exists in the conversation, use it as your guide. If not, do a quick comparison with the source text before editing.

## Editorial rules

### 1. Voice preservation
- Only modernize spelling and grammar.
- Preserve Moüette's personal interjections, hedging, and asides (e.g., "je ne sais combien de" stays as-is, never becomes "de nombreux").
- Light rephrasing for clarity is acceptable, but never restructure the author's voice.

### 2. Omissions
- Silently reintegrate any passages from the original that were lost during transcription.
- Do not mark restored passages — they should read naturally in the flow.

### 3. Proper nouns and place names
- Modernize all proper nouns to current standard French spellings.
- Examples: Mouley Seméin → Moulay Ismaïl, Fecam → Fécamp, Douvre → Douvres, etc.
- Be consistent throughout the chapter.

### 4. Footnotes
- Use markdown footnote syntax: `text[^1]` with `[^1]: Explanation.` at the bottom of the file.
- Add footnotes for:
  - First occurrence of a place name where Moüette's original spelling differs significantly
  - Truly obscure archaic terms a modern reader won't understand
  - Historical references needing brief context
  - Archaic units/measurements ONLY when the modern equivalent truly aids comprehension
- Do NOT over-footnote. This is a 17th-century text — some strangeness is welcome.
- **Remove** any existing inline editorial additions like `[120 tonneaux]`, `[pont]`, `[Louis XIV]` and convert to proper footnotes if useful, or remove entirely if not.

### 5. Paragraph structure
- Break paragraphs only at natural thematic shifts.
- Don't break just because a paragraph is long — 17th-century prose is expected to have long paragraphs.
- Don't merge paragraphs that are separate in the original.

### 6. Chapter format
- Heading: `# Chapitre [number/name]`
- Descriptive title in bold on next line: `**Title here.**`
- Sensitive terms (Barbares, Mahométans, etc.) kept as Moüette used them.

### 7. Numbers and units
- Keep original forms (six-vingts, lieues, brasses, palmes, etc.).
- Only add a footnote for modern equivalent if comprehension truly requires it.

## Process

1. Read the current modernized chapter.
2. Find and read the corresponding section in the source text.
3. Apply all rules above using targeted edits (Edit tool).
4. Do NOT rewrite the entire file — only change what needs changing.
5. After editing, provide a brief summary of changes made:
   - Number of omissions restored
   - Number of footnotes added
   - Number of proper nouns corrected
   - Number of voice/meaning fixes
   - Number of inline additions converted or removed
   - Any other changes
