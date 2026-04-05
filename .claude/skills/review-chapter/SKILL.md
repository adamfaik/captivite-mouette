---
name: review-chapter
description: Compare a modernized chapter of Moüette's 1683 memoir against the original source text and produce a structured quality report (omissions, meaning shifts, proper nouns, OCR artifacts, footnotes).
argument-hint: "[chapter-name] e.g. chapitre-1, preface, traite-commerce"
---

# Review Chapter — Source Comparison

Compare the modernized chapter against the original 17th-century source text and produce a structured quality report.

## Inputs

**Chapter to review**: $ARGUMENTS (e.g., "chapitre-1", "preface", "traite-commerce")

- Modernized file: `docs/chapitres/$ARGUMENTS.md` (or `docs/annexes/$ARGUMENTS.md` for annexes, or `docs/$ARGUMENTS.md` for top-level files)
- Source text: `sources/original_djvu.txt`

## Steps

1. **Read the modernized chapter** from the appropriate location.
2. **Find and read the corresponding section** in the source text. Search for the chapter heading (e.g., "CHAPITRE PREMIER", "CHAPITRE II", "PREFACE"). Read enough of the source to cover the full chapter — chapters can be long.
3. **Compare paragraph by paragraph** and identify issues in the categories below.

## Report categories

### A. Omissions
Passages present in the original but missing from the modernized version. Quote the original passage (in old French) and indicate where it should appear in the modernized text.

### B. Meaning shifts
Places where modernization accidentally changed the author's intent or tone. Rule: light rephrasing for clarity is OK, but preserve Moüette's personal interjections, hedging, and asides (e.g., "je ne sais combien de" must NOT become "de nombreux"). Flag any case where his personal voice was smoothed away.

### C. Unauthorized additions
Content in the modernized version that doesn't exist in the original. Includes inline editorial additions like `[120 tonneaux]`, `[pont]`, `[Louis XIV]` that should either become proper footnotes or be removed.

### D. Proper noun inconsistencies
Names of people and places that should be modernized to current standard French spellings (Moulay Ismaïl, Fécamp, Douvres, etc.) but aren't, or that are handled inconsistently.

### E. Modernization inconsistencies
Old French forms modernized in some places but left untouched in others within the same chapter.

### F. OCR artifacts
Garbled words, merged sentences, or nonsensical passages likely caused by OCR errors during extraction.

### G. Paragraph structure
Flag very long paragraphs (>15 lines) that could be broken at a natural thematic shift, or breaks that seem arbitrary vs. the original.

### H. Footnote candidates
Terms, units, or references that would benefit from a markdown footnote (`[^1]` style):
- First occurrence of place names where Moüette's original spelling differs significantly from the modern form
- Truly obscure archaic terms
- Historical references needing brief context
- Archaic units ONLY when the modern equivalent truly aids comprehension
Do NOT over-suggest. Some strangeness is expected in a 17th-century text.

## Output format

Present the report as structured markdown with each category as a section. For each issue:
- **Location**: paragraph number or quote from the modernized text
- **Original**: the source text (when relevant)
- **Problem**: what's wrong
- **Suggested fix**: how to resolve it

End with a **Summary** table counting issues per category and an overall quality assessment: **Good** / **Needs minor fixes** / **Needs significant rework**.
