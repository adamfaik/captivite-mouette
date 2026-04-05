# Session Log: Captivite-Mouette Editorial Review & Enhancement

**Date:** April 4-5, 2026
**Participants:** Adam Faik (editor) + Claude Code (Opus 4.6)

---

## Overview

This session took a 17th-century French captivity memoir (Germain Mouette, 1683) that had been initially transcribed and modernized via AI/OCR (Gemini), and systematically transformed it into a high-quality annotated digital edition. The work covered editorial rule definition, quality control, harmonization, historical annotation, site design, and deployment.

---

## Phase 1: Project Discovery & Assessment

### What we found
- The project is a VitePress static site publishing a modernized version of *Relation de la Captivité du Sr Mouette dans les royaumes de Fez et de Maroc* (1683).
- The initial transcription was done via Google Gemini (OCR + modernization) from a Google Books scan.
- The source document was available in multiple formats in the user's Downloads folder.

### Initial quality assessment (preface + chapter 1 comparison)
By comparing the modernized text against the original 1683 source (djvu.txt), we identified recurring issues:
- **OCR artifacts** and garbled words
- **Lost passages** (sections skipped or truncated during extraction)
- **Inconsistent modernization** (some old forms updated, others left untouched)
- **Meaning drift** (modernization accidentally changing the author's intent)
- **Inline editorial additions** without consistent convention (`[120 tonneaux]`, `[pont]`, `[Louis XIV]`)
- **Inconsistent proper noun handling** (Mouley Seméin vs Moulay Ismaïl used interchangeably)

### Decision: source text into the repo
- Copied `bub_gb_UPc9AAAAcAAJ_djvu.txt` (487 KB plain text OCR) into `sources/original_djvu.txt`
- This made the skills self-contained and the project portable

---

## Phase 2: Editorial Rules Definition

We defined 10 editorial rules through a structured Q&A process (one question at a time, with options):

| # | Question | Decision | Rationale |
|---|----------|----------|-----------|
| 1 | Author's voice vs. readability | **(B)** Allow light rephrasing for clarity, but preserve personal interjections, hedging, and asides | Balance between accessibility and authenticity |
| 2 | Editorial additions (clarifications) | **(B)** Footnote-style markers with explanation at bottom of chapter | Non-intrusive, works in print and digital |
| 3 | Proper nouns and place names | **(B)** Modernize to current standard French spellings | Consistency and recognizability for modern readers |
| 4 | Handling omissions from source | **(A)** Silently reintegrate them | Seamless reading experience |
| 5 | Sensitive/offensive terminology | **(A)** Keep exactly as Mouette used them | Content warning is sufficient; historical authenticity |
| 6 | Paragraph structure | **(B)** Allow breaking at natural thematic shifts | Readability on screen without overdoing it |
| 7 | Footnote format | **(A)** Markdown footnotes (`[^1]` syntax) | Standard, works in VitePress and print |
| 8 | Chapter titles | **(A)** `# Chapitre X` + descriptive title in bold below | Matches original structure |
| 9 | Units and numbers | **(A)** Keep original forms, footnote only when truly needed | Part of historical voice |
| 10 | Scope | **(A)** Full comparative review of every chapter and annex | Comprehensive quality |

These rules were saved to:
- Project memory (`memory/project_editorial_rules.md`)
- The two skills (embedded in their instructions)
- The editorial note (`docs/note-editeur.md`, reader-facing)

---

## Phase 3: Skill Creation

### Initial attempt: commands (`.claude/commands/`)
- Created markdown files in `.claude/commands/` (the older approach)
- User corrected: should be **skills** not commands

### Corrected: skills (`.claude/skills/`)
Three skills were created with proper SKILL.md frontmatter:

#### `/review-chapter [chapter-name]`
**Location:** `.claude/skills/review-chapter/SKILL.md`
**Purpose:** Compare a modernized chapter against the 1683 source text
**Output:** Structured quality report with categories:
- A. Omissions
- B. Meaning shifts
- C. Unauthorized additions
- D. Proper noun inconsistencies
- E. Modernization inconsistencies
- F. OCR artifacts
- G. Paragraph structure
- H. Footnote candidates

#### `/harmonize [chapter-name]`
**Location:** `.claude/skills/harmonize/SKILL.md`
**Purpose:** Apply all editorial rules to fix and harmonize a chapter
**Method:** Targeted edits using the Edit tool (not full rewrites)
**Output:** Summary of changes by category

#### `/annotate [chapter-name]`
**Location:** `.claude/skills/annotate/SKILL.md`
**Purpose:** Generate historically grounded contextual annotations
**Method:** Read chapter, identify surprising/confusing passages, WebSearch for verification, write sourced notes in French
**Output:** "Reperes historiques" section appended to chapter
**Created in:** Phase 6 (after the annotation discussion)

### Skill frontmatter issue
- Initial version included unsupported fields (`allowed-tools`, `effort`)
- Diagnostics flagged them; removed to keep only supported fields (`name`, `description`, `argument-hint`)

---

## Phase 4: Full Comparative Review & Harmonization

### Process
- Mapped all 21 content files and their corresponding line ranges in the source text
- Created tasks for tracking (21 tasks)
- Launched agents in parallel batches (up to 6 concurrent agents)
- Each agent: read modernized chapter + source text, compared paragraph by paragraph, applied editorial rules via Edit tool

### Files processed (21 total)

| File | Key findings |
|------|-------------|
| **preface.md** | 12 voice restorations (most extensive fixes), 7 footnotes. Many instances of the author's personal voice being smoothed away (e.g., "je ne sais combien de deserts" replaced with "de nombreux deserts"). |
| **privilege.md** | 4 fixes: sentence structure restoration, archaic legal forms preserved ("esdites"). |
| **chapitre-1.md** | 4 inline glosses converted to footnotes (`[120 tonneaux]`, `[pont]`, `[type de navire]`), date formats restored to written-out ordinals, proper nouns standardized. |
| **chapitre-2.md** | 5 footnotes added, meaning shift fixed (gallant compliment was reversed in tone), Spanish text corrected (erroneous spaces in words). |
| **chapitre-3.md** | "eponge" corrected to "jonc" (OCR/meaning error), "Couscous" restored to "Couscoussou" (3 occurrences), 2 footnotes. |
| **chapitre-4.md** | 2 meaning corrections ("faillit arriver" was wrong, event did happen; "le Royaume" restored to plural "les Royaumes"), 4 footnotes for place names. |
| **chapitre-5.md** | 15 corrections: place names (Toutouan, Fez Belle, Valadil, Massa), Latin antiphon text completed, Arabic exclamation restored, 7 footnotes. |
| **chapitre-6.md** | Proper noun fix (Seras -> Veras), Arabic transliteration restored, typo fix, meaning fidelity correction, 4 footnotes. |
| **chapitre-7.md** | 4 fixes: inline `[interprete]` converted to footnote, "Fequirs" footnoted, place name modernized (Cancalle -> Cancale), cedilla restored (Mincard -> Mincçard). |
| **chapitre-8.md** | 3 corrections (proper noun, omission reintegrated, word restoration "cure" -> "curee"), 4 footnotes. |
| **chapitre-9.md** | 3 fixes: inline editorial notes converted to footnotes, meaning correction ("ses" -> "ces" Religieux), footnote added for "cossat". |
| **chapitre-10.md** | **7 major omissions restored**: castle description, Sultan's portrait (appearance, cruelty, avarice), Tetuan departure episode, Tetuan description, Father Cartier digression, Lyon procession, Chablis hospitality. 6 footnotes. |
| **chapitre-11.md** | **5 omissions restored** (mosque location, Pasha's visits, Alexandria journey, continuing weakness, list of peoples). 5 fixes including meaning correction ("devoile" -> "devoue"). 6 footnotes. |
| **chapitre-12.md** | 2 inline glosses converted to footnotes, unauthorized parentheses removed, 6 footnotes for place names. |
| **chapitre-13.md** | 2 minor fixes: word order restored in speech, inline `[planches]` converted to footnote. |
| **chapitre-14.md** | **~30 paragraphs restored** (entire second half of chapter had been replaced with a one-line italic summary). 5 unauthorized subheaders removed. 9 footnotes. This was the biggest single restoration. |
| **chapitre-15.md** | **12 omissions restored** (Rahema's response, escape details, witness procedures, market fraud, political upheaval, etc.). 5 editorial subheadings removed. 4 footnotes. |
| **chapitre-17.md** | 1 omission restored, 3 meaning fixes, 3 footnotes. |
| **traite-commerce.md** | **~16 omissions restored** (merchant conduct section, wholesale trade, European merchandise list, duties, silent trade details, captives' entertainment, financial details of Merci mission). 12 footnotes. Proper nouns reverted to Mouette's original forms with footnotes. |
| **dictionnaire.md** | 12 entry corrections: shifted Arabic-French pairings (entire chain of entries offset by one row in section C), missing entries restored, spelling fixes, phantom entry removed. |
| **geographie.md** | ~20 spelling corrections restoring diacritics and original forms, 1 missing river entry (Sus/Oued Souss) reintegrated. |

### Overall statistics
- **412 insertions, 253 deletions** across 22 files
- Multiple major passage restorations (chapters 10, 11, 14, 15, traite-commerce)
- ~70 footnotes added across the book
- All inline editorial brackets removed and converted to proper footnotes

---

## Phase 5: Site Design & Deployment

### Deployment fix
- **Problem:** GitHub Pages was serving the README (Jekyll default) instead of the VitePress build
- **Solution:**
  - Added `base: '/captivite-mouette/'` to VitePress config
  - Created `.github/workflows/deploy.yml` (GitHub Actions workflow)
  - User had to manually switch Pages source to "GitHub Actions" in repo settings
  - Re-triggered workflow to override stale Jekyll deployment

### Readability improvements
- **Problem:** IM Fell English font (historical, beautiful) was hard to read on screen for long texts
- **Solution:**
  - Added **Crimson Text** as body font (historical serif, designed for screen readability)
  - Kept **IM Fell English** for headings, drop caps, sidebar (atmosphere)
  - Increased line-height from 1.6 to 1.75
  - Added letter-spacing for body text

### Footnotes rendering
- **Problem:** Markdown `[^1]` footnotes rendered as raw text (VitePress doesn't support them natively)
- **Solution:**
  - Installed `markdown-it-footnote` plugin
  - Configured VitePress to use it (`markdown.config` in config.mts)
  - Added CSS styling for footnote markers, section, and back-references

### Favicon & OpenGraph
- Generated favicon (32x32), apple-touch-icon (180x180), and OG image (1200x630) from the cover image
- Added all meta tags (og:title, og:description, og:image, twitter:card, etc.) to VitePress head config

### Broken badge
- Removed the GitHub Actions deploy badge from README (the workflow file didn't exist at the time it was added)

### Node.js version
- Updated workflow from Node.js 20 to 22 (Node 20 deprecated June 2026)

---

## Phase 6: Editorial Note & README Rewrite

### Note de l'editeur (`docs/note-editeur.md`)
- **Renamed** from "Note de l'Editeur" to "Note sur la presente edition"
- **Rewritten** to include:
  - Project description and historical context
  - Content warning (kept from original)
  - Full methodology (two-step: Gemini OCR + Claude Code review)
  - Links to all three skills on GitHub
  - All 10 editorial principles explained for the reader
  - Source information
  - Contact section (personal info removed, GitHub Issues link kept)

### README.md
- **Rewritten** with all standard sections:
  - Introduction with project description
  - Content warning
  - Source document details
  - Book contents summary
  - Methodology (both steps, skill links, editorial note link)
  - **Repository structure** (full directory tree)
  - Technical stack
  - Local installation instructions (cleaned up)
  - Contribution section (GitHub Issues only, personal info removed)

### User preferences applied
- Removed personal name and email from both files
- Added Claude Code mention with links to skills
- Removed emojis from index page feature titles

---

## Phase 7: Historical Annotations ("Reperes historiques")

### Concept discussion
The user expressed a key frustration: the book is fascinating but sometimes lacks context for a modern reader. They wanted:
- A system that lets people discover the book as a story
- Optional deeper context for those who want to learn more
- Historically accurate, sourced information (no hallucinations)
- Print-friendly format (not collapsible sections)

### Design decisions
- **Format:** End-of-chapter sections titled "Reperes historiques" (works in both print and web)
- **Content:** 5-10 notes per chapter, each 3-6 sentences
- **Each note:** Brief quote from passage + context + cited source
- **Verification:** Every fact must be verified via web search
- **Tone:** Engaging, like a knowledgeable friend, not academic jargon
- **Language:** French

### Skill created: `/annotate`
- Reads chapter, identifies surprising/confusing passages
- Uses WebSearch to verify historical facts
- Cites specific sources (academic articles, encyclopedias, museums)
- Writes notes in French, appends to chapter file

### Execution
- Chapter 1 done as demo, user approved the approach
- Remaining 15 chapters + traite-commerce launched in parallel (11 agents)
- ~140 contextual notes added across 17 files

### Notable annotations discovered
- The Republic of Bouregreg (corsair city-state, 1627-1668)
- Barbary lions (extinct in the wild since 1942)
- Lampedusa as interfaith sacred ground
- The fleurs de lys carved by French slaves on Moulay Ismail's palace
- The Sabbatai Zevi messianic movement reaching Sale
- Medical validity of egg white and spider web remedies
- The silent gold trade with Timbuktu
- English garrison at Tangier (abandoned 1684)
- The Order of the Merci's "blood vow" (4th vow to offer oneself as hostage)

---

## Phase 8: Historical Introduction

### Research
An agent was launched to verify specific facts about:
1. Germain Mouette's biography (born 1651, died 1721, Bonnelles)
2. His other book (*Histoire des conquetes de Mouley Archy*, 1683)
3. The captivity narrative genre (Cervantes, d'Aranda, Regnard)
4. European captive numbers (Davis: 1-1.25 million over 250 years; ~25,000 in Morocco under Moulay Ismail)
5. Context of 1683 (Colbert's death, Algiers bombardment, Franco-Moroccan treaty)
6. Modern scholarly reception (Gillian Weiss, Turbet-Delof, Lebel, 1927 re-edition)

### Introduction page created
`docs/chapitres/introduction.md` with sections:
- Un jeune Parisien en mer (capture at 19)
- Le Maroc de Moulay Ismail (political context)
- Un captif pas comme les autres (linguistic skills, curiosity)
- Un genre litteraire a part entiere (Cervantes, d'Aranda, Regnard comparison)
- Le contexte de la publication (1683: Colbert, Algiers, treaty)
- Un livre qui vit encore (1711 translation, 1927 re-edition, Weiss 2011)

### Formatting adjustment
- User requested removal of all em-dashes ("--")
- Replaced with parentheses or rephrased sentences

---

## Phase 9: Documentation Alignment

### Problem
After adding annotations and introduction, several files were out of sync.

### Updates applied
- **note-editeur.md:** Added `/annotate` skill, new "Reperes historiques" subsection under editorial principles
- **README.md:** Added `/annotate` to methodology and directory tree
- **table-des-matieres.md:** Added Introduction link before Preface
- **index.md:** "Contexte Historique" feature replaced with "Reperes historiques"
- **config.mts:** Sidebar label updated ("Note de l'Editeur" -> "Note sur la presente edition"); Introduction already in sidebar

---

## Technical Decisions Log

| Decision | Choice | Why |
|----------|--------|-----|
| Source format for comparison | djvu.txt (plain text OCR) | Lightest, diffs well, easy to grep |
| Source location | `sources/original_djvu.txt` in repo | Portable, skills self-contained |
| Skills vs commands | Skills (`.claude/skills/`) | Newer, more powerful, auto-discoverable |
| Footnote plugin | markdown-it-footnote | Standard solution for VitePress |
| Body font | Crimson Text | Historical serif designed for screen |
| Heading font | IM Fell English (kept) | Atmosphere, old-book feel |
| Annotations format | End-of-chapter sections | Works in both print and web (vs collapsible sections) |
| Annotation verification | WebSearch required for every fact | User explicitly requested no hallucinations |
| Deploy method | GitHub Actions + Pages | Standard VitePress deployment |
| OG image | Generated from cover at 1200x630 | Standard social sharing dimensions |

---

## Commit History

| Hash | Description |
|------|-------------|
| `a01079e` | Full comparative review and harmonization (22 files, source text, skills) |
| `24ceccf` | Editorial note and README rewrite |
| `7f3c181` | Remove broken GitHub Actions badge |
| `629d434` | Add deployment workflow and VitePress base path |
| `777ae00` | Readability improvements (Crimson Text, footnotes plugin) |
| `c6ada3e` | Favicon and OpenGraph metadata |
| `3118962` | Minor fixes (sidebar label, index features, Node.js 22) |
| `eca7c0f` | Historical annotations ("Reperes historiques") for all chapters |
| `01e553c` | Historical introduction |
| `b312ca2` | Remove em-dashes from introduction |
| `a80d2b7` | Documentation alignment for annotations and introduction |

---

## Potential Future Work

These are ideas discussed or implied during the session but not yet executed:

1. **Amazon KDP publishing** (ebook + print-on-demand)
   - Convert markdown to EPUB (Pandoc)
   - Design a proper cover
   - Consider ISBN
   - The introduction is ready; editorial note works as colophon

2. **Bilingual edition** (Arabic or English translation alongside French)
   - Would significantly expand the audience
   - Especially valuable for Moroccan readers

3. **Audiobook**
   - The narrative reads well aloud
   - AI voice tools could produce a first draft

4. **Annotated scholarly edition**
   - Deeper annotation layer beyond "Reperes historiques"
   - Historical maps
   - Cross-references to other captivity accounts
   - Could target academic publishers

5. **Academic outreach**
   - Contact university libraries
   - Post on academic forums (historians of Morocco, Mediterranean slavery)

6. **Content warning page** could be its own dedicated page rather than a section in the editorial note

7. **Chapter 16 naming** - the project has `chapitre-17.md` for what appears to be chapter XVI in the original (two renegades). The numbering could be clarified.

8. **Missing chapter** - there is no `chapitre-16.md` file. The sidebar maps "Chapitre XVI" to `chapitre-17.md`. This is potentially confusing and could be renamed or documented.

9. **Dark mode** - currently disabled (`appearance: false`). Could be offered as an option while maintaining the book aesthetic.

10. **Search improvements** - VitePress local search is enabled but could be enhanced with better French language handling.

11. **PDF export** - for readers who want to print the whole book, a pre-generated PDF could be offered.

12. **Verification pass on annotations** - the annotations were generated with web search verification, but a human review pass would strengthen confidence in the sourced claims.
