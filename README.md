# Relation de la Captivité du Sr Moüette (1683)

**Projet de numérisation, modernisation et édition web d'un récit historique du XVIIe siècle.**

<div align="center">
  <br>
  <img src="docs/public/images/cover-captivite.png" alt="Couverture Relation de la Captivité" width="600" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <br>
  <br>
</div>

Ce projet vise à rendre accessible au grand public le texte de **Germain Moüette**, captif au Maroc pendant onze ans (1670-1681) sous le règne de Moulay Ismail. C'est l'un des témoignages les plus détaillés et les plus vivants sur le Maroc du XVIIe siècle : architecture, commerce, coutumes, vie quotidienne des esclaves chrétiens, récits d'aventures et d'évasions.

**[Lire le livre en ligne](https://adamfaik.github.io/captivite-mouette/)**

---

## Avertissement sur le contenu

Ce récit est un document historique authentique publié en **1683**.

> Le lecteur est averti que le texte reflète les mentalités, les préjugés et le vocabulaire de son époque. Il contient des descriptions et des termes qui peuvent être offensants, discriminatoires ou racistes selon nos critères contemporains.
>
> Ces éléments ont été conservés dans un but purement **documentaire et historique**, pour témoigner de la vision du monde d'un captif français du XVIIe siècle. Ils ne reflètent en aucun cas les opinions de l'éditeur de ce projet.

---

## La Source

Le texte original est tiré de l'ouvrage :
* **Titre :** *Relation de la captivité du Sr. Moüette dans les royaumes de Fez et de Maroc*
* **Auteur :** Germain Moüette
* **Éditeur :** Jean Cochart, Paris
* **Date :** 1683

Le fichier source utilisé pour la transcription est disponible sur [Google Books](https://books.google.fr/books?id=UPc9AAAAcAAJ&redir_esc=y). Une copie du texte brut issu de la reconnaissance optique de caractères est incluse dans le dépôt (`sources/original_djvu.txt`).

## Contenu du livre

Le livre comprend :
* **Préface** — Les motivations de l'auteur
* **Chapitres I à X** — Le récit principal : capture, esclavage, villes, persécutions, le miracle des lions, la libération
* **Chapitres XI à XV, XVII** — Histoires particulières : évasions, aventures, amours de captifs
* **Traité du Commerce** — Les villes maritimes, les pratiques commerciales, le commerce muet avec Tombouctou
* **Dictionnaire arabe-français** — ~400 termes translittérés phonétiquement par Moüette
* **Géographie** — Provinces, villes et rivières des royaumes de Fez, Maroc et Tafilalet

## Méthodologie

Le travail a été réalisé en deux temps :

1.  **Transcription & Modernisation :** Extraction du texte via OCR et première modernisation orthographique à l'aide de l'intelligence artificielle **Gemini** (ex: *françois* ➔ *français*, *estre* ➔ *être*, *sçavoir* ➔ *savoir*).
2.  **Revue comparative & Harmonisation :** Comparaison systématique de chaque chapitre avec le texte original de 1683, à l'aide de [Claude Code](https://claude.ai/claude-code) (Anthropic). Trois *skills* dédiées ([review-chapter](.claude/skills/review-chapter/SKILL.md), [harmonize](.claude/skills/harmonize/SKILL.md) et [annotate](.claude/skills/annotate/SKILL.md)) ont permis de réintégrer les passages perdus, corriger les glissements de sens, assurer la cohérence éditoriale, et enrichir chaque chapitre de repères historiques sourcés.
3.  **Mise en forme :** Structuration en Markdown, notes de bas de page, et navigation par chapitres.

Les principes éditoriaux détaillés (voix de l'auteur, noms propres, notes, termes sensibles, etc.) sont décrits dans la [Note sur la présente édition](https://adamfaik.github.io/captivite-mouette/note-editeur).

## Structure du dépôt

```
captivite-mouette/
├── docs/                          # Sources du site VitePress
│   ├── index.md                   # Page d'accueil
│   ├── note-editeur.md            # Note sur la présente édition
│   ├── table-des-matieres.md      # Table des matières
│   ├── chapitres/                 # Texte du livre
│   │   ├── page-titre.md
│   │   ├── preface.md
│   │   ├── privilege.md
│   │   ├── chapitre-1.md … chapitre-15.md
│   │   └── chapitre-17.md
│   ├── annexes/                   # Annexes
│   │   ├── traite-commerce.md     # Traité du Commerce
│   │   ├── dictionnaire.md        # Dictionnaire arabe-français
│   │   └── geographie.md          # Géographie
│   ├── .vitepress/
│   │   ├── config.mts             # Configuration VitePress
│   │   └── theme/
│   │       ├── index.ts           # Thème personnalisé
│   │       └── custom.css         # Styles (papier, typographie)
│   └── public/images/             # Images
├── sources/
│   └── original_djvu.txt          # Texte source OCR du livre de 1683
├── .claude/skills/                # Skills Claude Code
│   ├── review-chapter/SKILL.md    # Revue comparative d'un chapitre
│   ├── harmonize/SKILL.md         # Harmonisation éditoriale
│   └── annotate/SKILL.md          # Annotations historiques sourcées
└── package.json
```

## Stack technique

* **Moteur :** [VitePress](https://vitepress.dev/)
* **Langage :** Markdown
* **Hébergement :** GitHub Pages (déploiement automatique via GitHub Actions)
* **Typographie :** Police *IM Fell English* — CSS personnalisé imitant le papier et la typographie d'un livre ancien

## Installation en local

```bash
git clone https://github.com/adamfaik/captivite-mouette.git
cd captivite-mouette
npm install
npm run docs:dev
```

Le site sera accessible sur `http://localhost:5173`.

## Signaler une erreur

Ce projet est open-source et collaboratif. Si vous repérez une coquille, une erreur de transcription, ou si vous avez une suggestion :

**[Ouvrir un ticket sur GitHub](https://github.com/adamfaik/captivite-mouette/issues)**
