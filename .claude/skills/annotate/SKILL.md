---
name: annotate
description: Generate historically grounded contextual annotations for a chapter of Moüette's memoir. Adds end-of-chapter notes that help modern readers understand the historical context, with verified sources.
argument-hint: "[chapter-name] e.g. chapitre-1, preface, traite-commerce"
---

# Annotate Chapter — Historical Context Notes

Read a chapter of Germain Moüette's 1683 memoir and generate end-of-chapter contextual notes for modern readers. These notes explain the historical context behind events, places, people, and customs mentioned in the text.

## Inputs

**Chapter to annotate**: $ARGUMENTS (e.g., "chapitre-1", "preface", "traite-commerce")

- Chapter file: `docs/chapitres/$ARGUMENTS.md` (or `docs/annexes/$ARGUMENTS.md` for annexes)

## What to annotate

Read the chapter with the eyes of a curious modern reader who knows little about:
- 17th-century maritime history and piracy/corsairs
- The Moroccan kingdoms under Moulay Rachid and Moulay Ismaïl
- The slave trade and captivity in North Africa
- French colonial and commercial ambitions of the era
- Daily life, customs, and religion in 17th-century Morocco
- The geography and cities mentioned
- The religious orders involved in ransoming captives

For each passage that would surprise, confuse, or fascinate a modern reader, write a contextual note. Prioritize:
1. **Surprising facts** — things a modern reader wouldn't expect (pirates in Salé, the Republic of Bouregreg, the scale of European captivity in North Africa, etc.)
2. **Essential context** — historical events or political situations that the reader needs to understand the narrative (who is Moulay Ismaïl? what was the Merci order? why were there Corsairs?)
3. **Connections to today** — when a place, custom, or institution mentioned still exists or has a modern legacy
4. **Cross-cultural observations** — when Moüette describes something from his 17th-century French perspective that we can now see differently

## Critical requirement: source verification

Every factual claim in a note MUST be verified through web search. For each note:
1. **Search** for the historical facts using WebSearch before writing
2. **Cite** at least one specific source (book, academic article, encyclopedia)
3. **Do not invent** historical details — if you cannot verify something, either omit it or explicitly state it is uncertain
4. **Prefer** well-established academic sources: university press books, peer-reviewed articles, established encyclopedias (Encyclopédie Berbère, Encyclopaedia of Islam, etc.)

Format each source as: Author, *Title*, Publisher, Year — or URL for online sources.

## Output format

Add a new section at the end of the chapter file, after any existing footnotes, using this format:

```markdown
---

## Repères historiques

**« [brief quote from the passage] »** — [Contextual note explaining the historical context, 3-6 sentences. Engaging and accessible, not academic jargon. Written in French.]

*Source : [Author, Title, Publisher, Year or URL]*

**« [another quote] »** — [Another note...]

*Source : [...]*
```

## Guidelines

- Write in **French**, in an accessible and engaging tone
- Each note should be **3 to 6 sentences** — concise but substantive
- Aim for **5 to 10 notes per chapter** — enough to enrich without overwhelming
- Reference the passage with a **brief quote** (5-10 words) so the reader can locate it
- Do NOT duplicate information already in the chapter's footnotes
- Do NOT explain things that are self-evident from the text
- The notes should feel like a knowledgeable friend sharing fascinating context, not a textbook
- Use the horizontal rule `---` to separate the notes section from the chapter content

## Process

1. Read the chapter carefully
2. Identify 5-10 passages that would benefit from historical context
3. For each, search the web to verify and enrich the historical facts
4. Write the notes in French
5. Add them to the end of the chapter file using the Edit tool
6. Provide a summary of the notes added
