# ArtiDoc Pro — Landing Page

Landing page de capture de leads pour ArtiDoc Pro, solution d'automatisation IA pour artisans BTP.

## 🚀 Stack

- **Vite** + **React 18**
- **Tailwind CSS**
- **Lucide React** (icônes)
- Deploy : **Vercel**

## 🎯 Fonctionnalités

- 7 sections : Hero, Problème, Bénéfices, Comment ça marche, Formulaire, FAQ, Footer
- Formulaire avec validation côté client + honeypot anti-bot
- POST des leads vers webhook N8N (`https://n8n-formation.isao.io/webhook/artidoc-lead`)
- 100% responsive (mobile-first)
- Animations subtiles au scroll (Intersection Observer)

## 🛠️ Développement

```bash
npm install
npm run dev
```

L'app tourne sur `http://localhost:5173`.

## 📦 Build production

```bash
npm run build
npm run preview
```

Le build est généré dans `dist/`.

## 🔌 Webhook N8N

Le formulaire envoie un POST JSON avec ces champs :

| Champ | Type | Requis |
|-------|------|--------|
| `prenom` | string | ✅ |
| `nom` | string | ✅ |
| `email` | string | ✅ |
| `telephone` | string | optionnel |
| `secteur` | enum (`plombier`, `electricien`, `macon`, `renovation`, `autre`) | ✅ |
| `code_postal` | string (5 chiffres) | optionnel |
| `ville` | string | optionnel |
| `message` | string (min 10 chars) | ✅ |
| `website` | string (honeypot, doit rester vide) | ❌ |

⚠️ Côté N8N : penser à autoriser le domaine de la LP dans **Webhook → Options → Allowed Origins (CORS)**.

## 📜 Licence

Propriétaire — © 2026 ArtiDoc Pro
