# Note sur la présente édition

<div align="center">
  <img src="/images/cover-captivite.png" alt="Illustration de la captivité" width="600" style="border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.3); margin: 20px 0;" />
</div>

## Le projet

La *Relation de la captivité du Sr. Moüette dans les royaumes de Fez et de Maroc* fut publiée à Paris en 1683 chez Jean Cochart. Germain Moüette y raconte ses onze années de captivité au Maroc (1670-1681), sous les règnes de Moulay Rachid et de Moulay Ismaïl. C'est l'un des témoignages les plus détaillés et les plus vivants que nous ayons sur le Maroc du XVIIe siècle : architecture, commerce, coutumes, vie quotidienne des esclaves chrétiens, récits d'aventures et d'évasions.

Le texte original, écrit dans le français de son époque, reste difficile d'accès aujourd'hui : orthographe ancienne, ponctuation dense, usage du *s* long ressemblant au *f*. Cette édition numérique a pour but de le rendre lisible pour un lecteur contemporain, tout en restant aussi fidèle que possible à la voix de l'auteur.

## Avertissement sur le contenu

Ce récit est un document historique authentique du XVIIe siècle. Le lecteur est averti que le texte reflète les mentalités, les préjugés et le vocabulaire de son époque. Il contient des descriptions et des termes qui peuvent être offensants, discriminatoires ou racistes selon nos critères actuels — notamment les mots *Barbares*, *Mahométans*, *Infidèles*, ou certaines descriptions des peuples rencontrés.

Ces éléments ont été volontairement conservés tels que Moüette les a écrits, dans un but purement documentaire et historique. Ils ne reflètent en aucun cas les opinions de l'éditeur de ce site.

## Méthodologie

Cette édition a été réalisée en deux temps.

### Première étape : transcription et modernisation

Le texte a été extrait du scan du livre original disponible sur Google Books[^1], à l'aide de l'intelligence artificielle Gemini (reconnaissance optique de caractères et première modernisation orthographique).

### Seconde étape : revue comparative et harmonisation

L'ensemble du texte — les quinze chapitres, la préface, le privilège, le traité du commerce, le dictionnaire arabe-français et la géographie — a ensuite été comparé paragraphe par paragraphe avec le texte source de 1683, puis corrigé et harmonisé selon les principes éditoriaux décrits ci-dessous.

Ce travail de révision a été réalisé à l'aide de [Claude Code](https://claude.ai/claude-code), l'outil en ligne de commande d'Anthropic. Trois *skills* (instructions réutilisables) ont été spécialement conçues pour ce projet :

- **[review-chapter](https://github.com/adamfaik/captivite-mouette/blob/main/.claude/skills/review-chapter/SKILL.md)** — compare un chapitre modernisé avec le texte original et produit un rapport structuré : omissions, glissements de sens, incohérences de modernisation, candidats aux notes de bas de page.
- **[harmonize](https://github.com/adamfaik/captivite-mouette/blob/main/.claude/skills/harmonize/SKILL.md)** — applique les corrections identifiées en suivant les principes éditoriaux définis pour cette édition.
- **[annotate](https://github.com/adamfaik/captivite-mouette/blob/main/.claude/skills/annotate/SKILL.md)** — lit un chapitre avec les yeux d'un lecteur moderne, identifie les passages qui méritent un éclairage historique, recherche et vérifie les faits via des sources fiables, puis rédige les notes contextuelles.

Chaque chapitre a été traité par ces trois passes successives. Cette révision a permis de réintégrer plusieurs passages perdus lors de la transcription automatique, de corriger des glissements de sens, d'assurer la cohérence de l'ensemble, et d'enrichir chaque chapitre de repères historiques sourcés.

## Principes éditoriaux

Les choix suivants ont guidé l'établissement du texte.

### Voix de l'auteur

L'orthographe et la grammaire ont été modernisées (*françois* → *français*, *estre* → *être*, *sçavoir* → *savoir*, *avoyent* → *avaient*), mais la structure des phrases, les tournures personnelles, les hésitations et les apartés de Moüette ont été préservés. Quand l'auteur écrit *je ne sais combien de déserts*, nous n'avons pas remplacé par *de nombreux déserts* : c'est sa voix, et elle fait le prix de ce récit.

### Noms propres et noms de lieux

Les noms de personnes et de lieux ont été modernisés selon l'usage français actuel (Moulay Ismaïl, Fécamp, Douvres, Meknès, etc.). Lorsque la forme employée par Moüette diffère significativement de la forme moderne, une note de bas de page signale la correspondance à la première occurrence.

### Notes de bas de page

Des notes ont été ajoutées pour éclairer les termes véritablement obscurs, les noms de lieux dont l'identification n'est pas évidente, et les références historiques qui nécessitent un bref contexte. Elles sont signalées dans le texte par un appel de note et rassemblées en bas de chaque chapitre. Nous avons veillé à ne pas surcharger le texte : un récit du XVIIe siècle a droit à une part d'étrangeté.

### Passages restitués

Plusieurs passages avaient été perdus ou tronqués lors de l'extraction automatique. Ils ont été silencieusement réintégrés dans le texte, sans marquage particulier, afin de ne pas alourdir la lecture.

### Structure et paragraphes

Le découpage en chapitres suit fidèlement l'original. À l'intérieur des chapitres, les paragraphes très longs ont parfois été scindés à des points de rupture thématique naturels, pour faciliter la lecture sur écran, mais sans excès.

### Unités de mesure et nombres

Les unités anciennes (lieues, brasses, palmes, tonneaux) et les formes numériques de l'époque (*six-vingts* pour 120) ont été conservées. Une note de bas de page n'est ajoutée que lorsque l'équivalent moderne est véritablement nécessaire à la compréhension.

### Termes sensibles

Les termes que Moüette emploie pour désigner les peuples, les religions et les cultures qu'il a côtoyés ont été maintenus tels quels. L'avertissement en tête de cette note en tient lieu de commentaire.

### Repères historiques

Chaque chapitre se termine par une section intitulée *Repères historiques*. Ces notes, clairement séparées du texte de Moüette, offrent au lecteur moderne un éclairage sur le contexte historique des événements, des lieux et des personnages mentionnés. Chaque note cite ses sources (articles académiques, encyclopédies, sites patrimoniaux). Elles ne prétendent pas à l'exhaustivité : elles visent à nourrir la curiosité du lecteur sans se substituer à un appareil critique savant.

### Dictionnaire arabe-français

Les translittérations phonétiques de l'arabe telles que Moüette les a entendues et transcrites ont été conservées à l'identique. Seule la colonne française a été modernisée orthographiquement.

## Source

Le texte source est le scan du livre original de 1683, numérisé par Google Books et mis à disposition par Internet Archive. Le fichier texte brut issu de la reconnaissance optique de caractères est inclus dans le dépôt du projet, dans le dossier `sources/`, pour permettre toute vérification.

[^1]: [Consulter le PDF original sur Google Books](https://books.google.fr/books?id=UPc9AAAAcAAJ&redir_esc=y).

## Signalements

Ce projet est open-source et collaboratif. Si vous relevez une erreur, une coquille, ou si vous avez une remarque, vous êtes invité à ouvrir un ticket sur le dépôt GitHub du projet :
**[Signaler un problème ou faire une suggestion sur GitHub](https://github.com/adamfaik/captivite-mouette/issues)**