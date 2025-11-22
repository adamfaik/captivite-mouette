# Relation de la Captivité du Sr Moüette (1683)

**Projet de numérisation, modernisation et édition web d'un récit historique du XVIIe siècle.**

[![Deploy to GitHub Pages](https://github.com/adamfaik/captivite-mouette/actions/workflows/deploy.yml/badge.svg)](https://github.com/adamfaik/captivite-mouette/actions/workflows/deploy.yml)

Ce projet vise à rendre accessible au grand public le texte de **Germain Moüette**, captif au Maroc pendant onze ans (1670-1681) sous le règne de Moulay Ismail.

🔗 **[Lire le livre en ligne](https://adamfaik.github.io/captivite-mouette/)**

---

## ⚠️ Avertissement sur le contenu

Ce récit est un document historique authentique publié en **1683**.

> Le lecteur est averti que le texte reflète les mentalités, les préjugés et le vocabulaire de son époque. Il contient des descriptions et des termes qui peuvent être offensants, discriminatoires ou racistes selon nos critères contemporains.
>
> Ces éléments ont été conservés dans un but purement **documentaire et historique**, pour témoigner de la vision du monde d'un captif français du XVIIe siècle. Ils ne reflètent en aucun cas les opinions de l'éditeur de ce projet.

---

## 📚 La Source

Le texte original est tiré de l'ouvrage :
* **Titre :** *Relation de la captivité du Sr. Moüette dans les royaumes de Fez et de Maroc*
* **Auteur :** Germain Moüette
* **Éditeur :** Jean Cochart, Paris
* **Date :** 1683

Le fichier source utilisé pour la transcription est disponible sur Google Books :
👉 [Consulter le PDF original](https://books.google.fr/books?id=UPc9AAAAcAAJ&redir_esc=y)

## 🛠️ Méthodologie de Modernisation

Pour transformer le scan ancien en site web lisible, la méthode suivante a été appliquée :

1.  **Transcription & Correction :** Usage de l'intelligence artificielle (**Gemini 3 Pro**) pour extraire le texte via OCR et corriger les erreurs de scan.
2.  **Modernisation orthographique :** Adaptation du vieux français pour fluidifier la lecture (ex: *françois* ➔ *français*, *estre* ➔ *être*, *sçavoir* ➔ *savoir*), tout en conservant la syntaxe et le vocabulaire d'époque.
3.  **Mise en forme :** Structuration en Markdown, aération des paragraphes et création d'une navigation par chapitres.

## 💻 Stack Technique

Ce site est un site statique généré avec **VitePress**, choisi pour sa rapidité et sa focalisation sur le contenu.

* **Moteur :** VitePress
* **Langage :** Markdown (.md)
* **Hébergement :** GitHub Pages
* **Style :** CSS personnalisé pour imiter le papier et la typographie d'un livre ancien (Police *IM Fell English*).

## 🚀 Installation en local

Si vous souhaitez cloner ce projet pour y contribuer ou le lire hors ligne :

1.  **Cloner le dépôt :**
    ```bash
    git clone [https://github.com/adamfaik/captivite-mouette.git](https://github.com/adamfaik/captivite-mouette.git)
    cd captivite-mouette
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement :**
    ```bash
    npm run docs:dev
    ```
    Le site sera accessible sur `http://localhost:5173`.

## 🤝 Contribuer et Signaler une erreur

Ce projet est ouvert à l'amélioration. Si vous repérez une coquille, une erreur de transcription, ou si vous avez une suggestion technique :

* **Ouvrir une Issue :** [Signaler un problème sur GitHub](https://github.com/adamfaik/captivite-mouette/issues)
* **Contact :** Adam Faik - `adam.faik.perso@gmail.com`