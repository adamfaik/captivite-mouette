import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

export default defineConfig({
  title: "Relation de la Captivité",
  description: "Mémoires de Germain Moüette (1683)",
  lang: 'fr-FR',
  base: '/captivite-mouette/',
  appearance: false, // Mode livre (pas de dark mode)
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/captivite-mouette/favicon-32x32.png' }],
    ['link', { rel: 'icon', href: '/captivite-mouette/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/captivite-mouette/apple-touch-icon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Relation de la Captivité du Sr Moüette (1683)' }],
    ['meta', { property: 'og:description', content: 'Édition numérique modernisée du récit de Germain Moüette, captif au Maroc pendant onze ans sous le règne de Moulay Ismaïl.' }],
    ['meta', { property: 'og:image', content: 'https://adamfaik.github.io/captivite-mouette/images/og-image.png' }],
    ['meta', { property: 'og:url', content: 'https://adamfaik.github.io/captivite-mouette/' }],
    ['meta', { property: 'og:locale', content: 'fr_FR' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Relation de la Captivité du Sr Moüette (1683)' }],
    ['meta', { name: 'twitter:description', content: 'Édition numérique modernisée du récit de Germain Moüette, captif au Maroc pendant onze ans sous le règne de Moulay Ismaïl.' }],
    ['meta', { name: 'twitter:image', content: 'https://adamfaik.github.io/captivite-mouette/images/og-image.png' }],
  ],
  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },
  
  themeConfig: {
    siteTitle: 'Germain Moüette',

    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Table des Matières', link: '/table-des-matieres' },
      { text: 'À Propos', link: '/note-editeur' },
    ],

    sidebar: [
      {
        text: 'À Propos de l\'Édition',
        collapsed: false,
        items: [
          { text: "Note de l'Éditeur", link: '/note-editeur' },
        ]
      },
      {
        text: 'Préliminaires du Livre',
        collapsed: false,
        items: [
          // Ajout du préfixe /chapitres/
          { text: 'Page de Titre', link: '/chapitres/page-titre' },
          { text: 'Préface', link: '/chapitres/preface' },
          { text: 'Privilège du Roi', link: '/chapitres/privilege' },
        ]
      },
      {
        text: 'Première Partie : Le Récit',
        collapsed: false,
        items: [
          { text: 'Chapitre I : Départ', link: '/chapitres/chapitre-1' },
          { text: 'Chapitre II : Esclave à Salé', link: '/chapitres/chapitre-2' },
          { text: 'Chapitre III : Fez et Couscous', link: '/chapitres/chapitre-3' },
          { text: 'Chapitre IV : Persécutions', link: '/chapitres/chapitre-4' },
          { text: 'Chapitre V : Travaux à Mequinez', link: '/chapitres/chapitre-5' },
          { text: 'Chapitre VI : Persécution d\'Alcassar', link: '/chapitres/chapitre-6' },
          { text: 'Chapitre VII : Le Miracle des Lions', link: '/chapitres/chapitre-7' },
          { text: 'Chapitre VIII : Misères des Esclaves', link: '/chapitres/chapitre-8' },
          { text: 'Chapitre IX : Nourriture et Rachat', link: '/chapitres/chapitre-9' },
          { text: 'Chapitre X : Retour en France', link: '/chapitres/chapitre-10' },
        ]
      },
      {
        text: 'Histoires Particulières',
        collapsed: false,
        items: [
          { text: 'Chapitre XI : Le Faux Marabout', link: '/chapitres/chapitre-11' },
          { text: 'Chapitre XII : 30 ans de Captivité', link: '/chapitres/chapitre-12' },
          { text: 'Chapitre XIII : Amours et Vengeance', link: '/chapitres/chapitre-13' },
          { text: 'Chapitre XIV : Le Roman de Raphaël', link: '/chapitres/chapitre-14' },
          { text: 'Chapitre XV : Le Gentilhomme Normand', link: '/chapitres/chapitre-15' },
          { text: 'Chapitre XVI : Les Deux Renégats', link: '/chapitres/chapitre-17' },
        ]
      },
      {
        text: 'Description du Pays',
        collapsed: false,
        items: [
          // Ajout du préfixe /annexes/
          { text: 'Traité de Commerce', link: '/annexes/traite-commerce' },
          { text: 'Dictionnaire Arabesque', link: '/annexes/dictionnaire' },
          { text: 'Géographie', link: '/annexes/geographie' },
        ]
      }
    ],

    // ... (Le reste de la config search, socialLinks, etc. ne change pas)
    socialLinks: [
      { icon: 'github', link: 'https://github.com/adamfaik/captivite-mouette' }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Rechercher', buttonAriaLabel: 'Rechercher' },
          modal: {
            noResultsText: 'Aucun résultat pour',
            resetButtonTitle: 'Réinitialiser',
            footer: { selectText: 'pour sélectionner', navigateText: 'pour naviguer', closeText: 'pour fermer' }
          }
        }
      }
    },
    docFooter: { prev: 'Page précédente', next: 'Page suivante' },
    outline: { label: 'Sur cette page' },
    lastUpdated: { text: 'Dernière mise à jour' },
    returnToTopLabel: 'Retour en haut',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Apparence',
  }
})