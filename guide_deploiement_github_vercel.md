# 🚀 Guide de déploiement — ArtiDoc Pro Landing Page

> **Prérequis** : avoir téléchargé le dossier `landing-page/` que je t'ai préparé.
> **Temps total** : 15-20 minutes la première fois.

---

## 📍 ÉTAPE 0 — Récupérer le projet sur ton ordinateur

1. Télécharge le dossier `landing-page/` que je t'ai livré (depuis l'outil de partage ci-dessus)
2. Place-le dans un dossier facile à retrouver, par exemple :
   - **Mac/Linux** : `~/projets/landing-page/`
   - **Windows** : `C:\Users\[TonNom]\Documents\projets\landing-page\`

---

## 📍 ÉTAPE 1 — Tester en local (5 min)

Ouvre un terminal dans le dossier `landing-page/` :

```bash
# Mac/Linux
cd ~/projets/landing-page

# Windows (PowerShell)
cd C:\Users\[TonNom]\Documents\projets\landing-page
```

### 1.1 Vérifier que Node.js est installé

```bash
node --version
npm --version
```

Si la commande échoue : installe Node.js (v18+) depuis [https://nodejs.org](https://nodejs.org) — prends la version "LTS".

### 1.2 Installer les dépendances

```bash
npm install
```

Ça va créer un dossier `node_modules/` et un fichier `package-lock.json`. Compte ~30 secondes.

### 1.3 Lancer le serveur de dev

```bash
npm run dev
```

Tu devrais voir :
```
  ➜  Local:   http://localhost:5173/
```

Ouvre cette URL dans ton navigateur. Tu vois ta landing page locale ! 🎉

### 1.4 Tester le formulaire

Remplis le formulaire avec des données bidon (mais email valide), envoie. Tu dois :
- Voir le message de confirmation s'afficher
- Recevoir l'email de confirmation IA sur l'adresse du test
- Recevoir la notif interne sur `c.iaboss41@gmail.com`
- Voir une nouvelle ligne dans ton Google Sheet

⚠️ **Si ça plante avec une erreur CORS dans la console du navigateur** :
- Va dans N8N → ouvre le workflow → nœud **Webhook** → **Options** → ajoute dans **Allowed Origins (CORS)** :
  ```
  http://localhost:5173
  ```
- Sauvegarde le workflow et réessaie.

### 1.5 Stopper le serveur de dev

`Ctrl+C` dans le terminal.

> 🟢 **CHECKPOINT** : tu as vu la landing locale, le formulaire envoie au webhook N8N, tu reçois les emails. Si tout est OK → on passe à GitHub.

---

## 📍 ÉTAPE 2 — Installer Git (si pas déjà fait, 3 min)

### Vérifier si Git est déjà installé

```bash
git --version
```

Si tu vois une version → **passe direct à l'étape 3**.

Si "command not found" :

### Mac
```bash
xcode-select --install
```
Ça va ouvrir une fenêtre, accepte. Compte 5 min.

### Windows
Télécharge [https://git-scm.com/download/win](https://git-scm.com/download/win) et installe avec les options par défaut.

### Linux (Debian/Ubuntu)
```bash
sudo apt update && sudo apt install git
```

---

## 📍 ÉTAPE 3 — Configurer Git (1 min, première fois seulement)

```bash
git config --global user.name "Arnaud Turquin"
git config --global user.email "c.iaboss41@gmail.com"
```

Remplace par tes vraies infos si besoin.

---

## 📍 ÉTAPE 4 — Créer le repo GitHub (3 min)

### 4.1 Créer le repo côté GitHub

1. Va sur [https://github.com/new](https://github.com/new)
2. **Repository name** : `artidoc-landing`
3. **Description** : `Landing page ArtiDoc Pro - Capture leads BTP`
4. **Public** ou **Private** : ton choix (Vercel marche avec les deux gratuitement)
5. ⚠️ **NE COCHE PAS** "Add a README", "Add .gitignore" ou "Choose a license" — on a déjà tout en local
6. Clique **Create repository**

GitHub te montre une page avec des commandes. Garde-la ouverte, on en a besoin.

### 4.2 Initialiser Git en local et premier commit

Dans ton terminal, toujours dans le dossier `landing-page/` :

```bash
git init
git add .
git commit -m "Initial commit — ArtiDoc Pro landing page"
git branch -M main
```

### 4.3 Connecter ton repo local au repo GitHub

Sur la page GitHub que tu as gardée ouverte, copie l'URL de ton repo. Elle ressemble à :
```
https://github.com/[TON-USERNAME]/artidoc-landing.git
```

Puis dans ton terminal :

```bash
git remote add origin https://github.com/[TON-USERNAME]/artidoc-landing.git
git push -u origin main
```

⚠️ **Première fois sur GitHub depuis ton ordi** : il va te demander de t'authentifier.

**Méthode recommandée (Personal Access Token)** :
1. Va sur [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. **Generate new token (classic)**
3. Nom : `artidoc-landing`, Expiration : 90 jours, Scope : coche **`repo`**
4. **Generate** → copie le token (commence par `ghp_…`)
5. Quand Git te demande le mot de passe, **colle ce token** (pas ton mot de passe GitHub)

> 🟢 **CHECKPOINT** : recharge la page GitHub de ton repo, tu dois voir tous tes fichiers. Si oui → on déploie sur Vercel.

---

## 📍 ÉTAPE 5 — Déployer sur Vercel (5 min)

### 5.1 Créer un compte Vercel (si pas déjà fait)

1. Va sur [https://vercel.com/signup](https://vercel.com/signup)
2. Choisis **Continue with GitHub** (le plus simple)
3. Autorise Vercel à accéder à tes repos

### 5.2 Importer ton repo

1. Sur le dashboard Vercel, clique **Add New** → **Project**
2. Tu vois la liste de tes repos GitHub. Trouve **`artidoc-landing`** → clique **Import**
3. Vercel détecte automatiquement que c'est un projet **Vite** ✅
4. **Configure Project** :
   - **Framework Preset** : Vite (auto-détecté)
   - **Root Directory** : `./` (par défaut)
   - **Build Command** : `npm run build` (par défaut)
   - **Output Directory** : `dist` (par défaut)
   - **Install Command** : `npm install` (par défaut)
   - **Environment Variables** : aucune nécessaire
5. Clique **Deploy**

⏱️ Compte 60-90 secondes. Vercel fait le build et déploie.

### 5.3 Récupérer ton URL de prod

Après le déploiement, Vercel te donne une URL type :
```
https://artidoc-landing-xxxx.vercel.app
```

Clique dessus, tu vois ta landing en prod ! 🎉

### 5.4 ⚠️ ÉTAPE CRITIQUE — Mettre à jour CORS sur N8N

Ta page Vercel a une URL différente de localhost. Le webhook N8N va REJETER les requêtes pour cause de CORS.

**Action obligatoire** :
1. Va dans N8N → ton workflow `ArtiDoc - Capture Lead BTP`
2. Ouvre le nœud **Webhook**
3. **Options** → **Allowed Origins (CORS)**
4. Remplace ou ajoute (séparés par virgule si plusieurs) :
```
https://artidoc-landing-xxxx.vercel.app, http://localhost:5173
```
> Adapte avec ta vraie URL Vercel. Garde `localhost:5173` pour pouvoir continuer à dev en local.

5. **Save** le workflow → vérifie que le toggle est bien sur **Active** (vert)

### 5.5 Tester en prod

Va sur ton URL Vercel, remplis le formulaire avec un email à toi → tu dois recevoir les 2 emails comme en local.

---

## 📍 ÉTAPE 6 — (Optionnel) Domaine personnalisé (10 min)

Si tu veux que ton site soit sur `artidocpro.fr` au lieu de l'URL Vercel :

### 6.1 Acheter ton domaine
- [OVH](https://www.ovh.com) ou [Gandi](https://www.gandi.net) — `artidocpro.fr` ~10€/an

### 6.2 Le connecter à Vercel
1. Dashboard Vercel → ton projet → **Settings** → **Domains**
2. Ajoute `artidocpro.fr`
3. Vercel te donne 2 enregistrements DNS à ajouter chez OVH/Gandi :
   - Type **A** : `76.76.21.21`
   - Type **CNAME** pour `www` : `cname.vercel-dns.com`
4. Va chez ton registrar, zone DNS, ajoute ces 2 enregistrements
5. Reviens sur Vercel, attends 5-30 min → ✅ certificat HTTPS auto-géré

### 6.3 Mettre à jour CORS N8N
Ajoute `https://artidocpro.fr` dans Allowed Origins du nœud Webhook.

---

## 🔄 ÉTAPE 7 — Mettre à jour ton site dans le futur

Quand tu modifies du code en local, le déploiement est **automatique** :

```bash
# Dans le dossier landing-page/
git add .
git commit -m "Description de ton changement"
git push
```

Vercel détecte le push, rebuild et redéploie en 60s. C'est tout.

---

## 🚑 Troubleshooting express

| Symptôme | Cause probable | Solution |
|----------|----------------|----------|
| `npm install` plante | Version Node trop vieille | Mets Node 18+ |
| Erreur CORS dans la console navigateur | URL Vercel pas autorisée dans N8N | Étape 5.4 |
| Formulaire envoie mais pas d'email | Workflow N8N inactif | Toggle Active dans N8N |
| Build Vercel échoue | Dépendance manquante | Vérifie `package.json`, redéploie |
| Page blanche en prod | Erreur JS | Console navigateur (F12) → onglet Console |
| Git push refusé (auth) | Mot de passe au lieu du token | Étape 4.3 — utilise un Personal Access Token |
| `git config` perdu après reboot | Pas grave | Refais `git config --global ...` |

---

## ✅ Récap rapide des commandes (à garder sous la main)

```bash
# Installer dépendances (1 fois)
cd landing-page
npm install

# Lancer en local
npm run dev

# Pousser une mise à jour
git add .
git commit -m "Mon changement"
git push

# Build de prod manuel (Vercel le fait auto)
npm run build
```

---

## 📊 Architecture déployée

```
┌──────────────────┐        POST JSON        ┌────────────────────┐
│  Visiteur web    │  ─────────────────────► │  N8N Webhook       │
│  (artidocpro.fr) │   (form submission)     │  isao.io           │
└──────────────────┘                          └────────────────────┘
                                                       │
                                                       ▼
                                              ┌─────────────────┐
                                              │ Validation +    │
                                              │ Google Sheets + │
                                              │ OpenAI + Gmail  │
                                              └─────────────────┘
        ▲
        │
        │ Servi par Vercel CDN (HTTPS auto, edge cache mondial)
        │
        ▼
   ┌──────────────┐    git push     ┌──────────────┐
   │  GitHub      │ ◄─────────────  │  Ton ordi    │
   │  artidoc-    │                 │  (dev local) │
   │  landing     │                 │              │
   └──────────────┘                 └──────────────┘
        │
        │ webhook auto (rebuild on push)
        ▼
   ┌──────────────┐
   │  Vercel      │
   │  build & deploy│
   └──────────────┘
```

---

## 🎯 Tu en es là après ce guide

- ✅ Landing page ArtiDoc Pro tournant sur Vercel (URL HTTPS publique)
- ✅ Code source versionné sur GitHub (backup + collaboration possibles)
- ✅ Workflow N8N branché en prod
- ✅ Déploiement continu : git push → site mis à jour en 60s
- ✅ Tu peux montrer le site à ton premier ami artisan TODAY

Maintenant : envoie l'URL à ton ami artisan + 5 contacts LinkedIn cible aujourd'hui. Pas demain. **Today.**
