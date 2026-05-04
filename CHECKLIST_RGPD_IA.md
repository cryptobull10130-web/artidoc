# 📋 CHECKLIST CONFORMITÉ RGPD × IA — ArtiDoc Pro

**Version:** 1.0  
**Date:** 2026-05-04  
**Projet:** ArtiDoc Pro — Automatisation IA pour artisans BTP  
**Responsable:** Arnaud Turquin (cryptobull10130@gmail.com)

---

## 🗂️ SECTION 1 : CARTOGRAPHIE DES DONNÉES PERSONNELLES

### 1.1 Données collectées via le formulaire de contact

| Données | Finalité | Base légale | Durée de conservation | Destinataires |
|---------|----------|-------------|----------------------|----------------|
| **Prénom, Nom** | Identifier le prospect, personnaliser la communication | Consentement (formulaire) + Intérêt légitime (prospection commerciale) | 24 mois après dernier contact | Arnaud (Gmail), Google Sheets, ChatGPT API (corps de l'email généré) |
| **Email** | Envoyer confirmation + relances commerciales | Consentement + Intérêt légitime | 24 mois (ou 12 mois d'inactivité) | Gmail (envoi), Google Sheets, OpenAI API (génération d'email) |
| **Téléphone** | Suivi commercial (appels, SMS futur) | Consentement + Contrat (si signature) | 24 mois | Arnaud (Google Sheets), futur CRM |
| **Secteur (métier)** | Segmentation client, adaptabilité de l'offre | Consentement | 24 mois | Google Sheets, agents IA (segmentation) |
| **Code postal + Ville** | Prospection locale, analyse géographique | Consentement + Intérêt légitime | 24 mois | Google Sheets, analytics futur |
| **Message (besoin en 2-3 phrases)** | Qualifier le lead, contextualiser l'offre | Consentement | 24 mois | Google Sheets, ChatGPT (analyse/génération email), Arnaud (Gmail) |

**🔍 Données sensibles identifiées :** AUCUNE donnée sensible au sens RGPD (pas de santé, religion, origine, etc.)

---

### 1.2 Flux de données et outils utilisés

```
┌─────────────────────────────────────────────────────────────────┐
│ COLLECTE (Landing Page Vercel)                                  │
│ Formulaire HTML → Webhook n8n                                   │
└────────────────┬────────────────────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────────────────────┐
│ VALIDATION & ENRICHISSEMENT (n8n - JavaScript)                  │
│ ✓ Honeypot anti-bot (field "website")                           │
│ ✓ Validation email (regex), secteur, longueur message           │
│ ✓ Génération lead_id unique + date_iso                          │
│ ✓ Normalisation (trim, lowercase email)                         │
└────────────────┬────────────────────────────────────────────────┘
                 │
        ┌────────┴────────┐
        │                 │
   ┌────▼────────┐   ┌────▼──────────────┐
   │ Google      │   │ OpenAI API        │
   │ Sheets      │   │ (GPT-4o-mini)     │
   │ (stockage)  │   │ (génération email)│
   └────┬────────┘   └────┬──────────────┘
        │                 │
        │            ┌────▼──────────────┐
        │            │ Gmail (envoi)      │
        │            │ - Email au lead    │
        │            │ - Notif Arnaud     │
        │            └────────────────────┘
        │
   ┌────▼──────────────────┐
   │ Google Sheets Update   │
   │ (statut = "traité")    │
   └───────────────────────┘
```

**Étapes critiques du flux :**

1. **Collecte (Vercel)** — Données en HTTP non-chiffré → HTTPS obligatoire ✓ (Vercel)
2. **Validation (n8n)** — Données restent 1-2s en mémoire, pas persistées localement
3. **Envoi IA (OpenAI)** — Lead_id + secteur + message envoyés à API OpenAI (données à l'extérieur de l'UE)
4. **Stockage (Google Sheets)** — Données stockées illimitément actuellement ⚠️
5. **Gmail** — Emails transactionnels (confirmation, notif) envoyés

---

### 1.3 Sous-traitants et tiers impliqués

| Outil | Type | Données traitées | Accord de sous-traitance | Statut RGPD |
|-------|------|------------------|-------------------------|------------|
| **OpenAI (API GPT-4o-mini)** | IA - Génération contenu | Prénom, secteur, message, ville | ✓ Standard Contractual Clauses (SCC) | ⚠️ Données hors UE |
| **Google Sheets** | Stockage cloud | Toutes les données du lead | ✓ DPA Google Cloud | ✓ UE-compatible |
| **Gmail (Google)** | Envoi d'emails | Email, contenu du message | ✓ DPA Google | ✓ UE-compatible |
| **Vercel (Hosting)** | Infrastructure frontend | Données en transit HTTP POST | ✓ Standard Terms | ✓ Serveurs EU |
| **n8n (Cloud)** | Workflow automation | Données en transit max 2s | ✓ SCC | ⚠️ Vérifier localisation serveurs |

---

## ⚠️ SECTION 2 : ANALYSE DES RISQUES RGPD × IA

### 2.1 Risque 1 : Envoi de données personnelles à une API IA sans information utilisateur

**Gravité :** 🔴 **ÉLEVÉE**

**Description :**  
Les données du lead (prénom, secteur, message complet) sont envoyées à l'API OpenAI (GPT-4o-mini) pour générer automatiquement l'email de confirmation. Or, l'utilisateur n'est **pas informé** que ses données sont traitées par une IA tierce (OpenAI).

**Impact RGPD :**
- **Art. 13/14 RGPD** : Défaut d'information transparente sur le traitement IA
- **Art. 22 RGPD** : Risque de "prise de décision automatisée" (génération email peut être perçue comme telle)
- **Art. 5(1)(a)** : Manque de transparence
- **Amende potentielle :** Jusqu'à 20M€ ou 4% du chiffre d'affaires mondial

**Scénario de violation :**
- Un lead demande une démo et envoie un message détaillé
- Son message est traité par GPT-4o-mini (stocké temporairement sur serveurs OpenAI)
- Aucune mention "Vos données sont traitées par IA" sur le site
- Utilisateur découvre via la CNIL → plainte possible

**Contrôles actuels :** ❌ **AUCUN**

---

### 2.2 Risque 2 : Conservation illimitée des données dans Google Sheets

**Gravité :** 🟡 **MOYENNE-ÉLEVÉE**

**Description :**  
Les données des leads (email, prénom, message, etc.) sont stockées indéfiniment dans Google Sheets. Il n'existe pas de politique de suppression automatique ou manuelle définie.

**Impact RGPD :**
- **Art. 5(1)(e)** : Violation du "principe de limitation de la durée de conservation"
- **CNIL (Guide IA)** : Recommande max 36 mois pour prospection commerciale
- Les données déviennent "zombie data" → risque accru en cas de piratage

**Durée recommandée :**
- Prospect "chaud" (intérêt manifeste) : 12 mois
- Prospect "tiède" : 6 mois + 1 tentative de relance
- Prospect "froid" (pas de réponse) : 3 mois puis suppression

**Scénario de violation :**
- Vous collectez 100 leads en 3 mois (2026)
- En 2028, tous les 100 leads restent dans le sheet
- CNIL effectue audit → demande de suppression → vous ne savez pas lesquels supprimer

---

### 2.3 Risque 3 : Absence de mentions RGPD sur la landing page

**Gravité :** 🟡 **MOYENNE**

**Description :**  
La landing page affiche actuellement :
- ✓ "🔒 Tes données restent privées. Aucun spam, jamais."
- ❌ Absence de lien "Politique de confidentialité"
- ❌ Absence d'info "Vos données sont traitées par IA"
- ❌ Pas de mentioning OpenAI/Google/Gmail
- ❌ Durée de conservation non spécifiée

**Impact RGPD :**
- **Art. 13 RGPD** : Défaut d'information préalable au consentement
- **Art. 14 RGPD** : Information incomplète
- Consentement non valide (pas vraiment informé)

**Amende CNIL :** 5k€ à 20M€ (selon contexte)

---

### 2.4 Risque 4 : Absence de mécanisme de suppression des données

**Gravité :** 🟡 **MOYENNE**

**Description :**  
L'utilisateur (lead) n'a aucun moyen de :
- Accéder à ses données stockées
- Demander la suppression (droit à l'oubli)
- Obtenir une copie de ses données (portabilité)

**Impact RGPD :**
- **Art. 17 RGPD** : Droit à l'oubli non respecté
- **Art. 20 RGPD** : Droit à la portabilité non respecté
- **Art. 12-14** : Droits informationnels ignorés

**Cas pratique :**
- Un lead vous écrit : "Supprimez mes données"
- Vous devez supprimer de Google Sheets, mais comment tracer qui l'a fait et quand ?
- Pas de registre de suppression → impossible de prouver la conformité

---

### 2.5 Risque 5 : Traçabilité et documentation insuffisante du traitement IA

**Gravité :** 🟡 **MOYENNE**

**Description :**  
Le workflow n8n utilise l'IA (OpenAI) mais :
- ❌ Pas d'analyse d'impact (AIPD/DPIA) documentée
- ❌ Pas de log des appels IA (quand, quoi, résultat)
- ❌ Pas de mécanisme pour auditer les emails générés
- ❌ Pas de test sur les biais/discriminations (ex: offre différente selon secteur)

**Impact RGPD :**
- **Art. 25(1)** : Défaut de "privacy by design"
- **Art. 35** : Non-conformité avec obligation AIPD
- **CNIL (Guide IA 2023)** : Recommande documentation complète

**Scénario :**
- CNIL demande : "Montrez-moi comment vous documentez les traitements IA"
- Vous n'avez aucun registre → amende probable

---

## ✅ SECTION 3 : ACTIONS CORRECTIVES (PLAN D'ACTION)

### 3.1 Action P1 (OBLIGATOIRE) : Ajouter mentions RGPD sur la landing page

**Priorité :** 🔴 **P1 — Blocante**  
**Difficulté :** Facile  
**Temps estimé :** 30 min  
**Status :** À faire

**Checklist d'implémentation :**

- [ ] Remplacer le texte actuel :
  ```
  ❌ 🔒 Tes données restent privées. Aucun spam, jamais.
  ```
  Par :
  ```
  ✅ 🔒 Tes données restent privées. Aucun spam, jamais.
  
  En soumettant ce formulaire, vous consentez au traitement de vos 
  données personnelles par ArtiDoc Pro pour vous contacter sous 2h 
  et vous proposer une démo. Vos données sont traitées par IA 
  (OpenAI) pour générer une réponse personnalisée.
  
  Durée de conservation : 24 mois. 
  Lire la [Politique de confidentialité](#privacy).
  ```

- [ ] Ajouter une section footer "Politique de confidentialité" :
  ```
  ### Politique de Confidentialité
  
  **Responsable du traitement :** Arnaud Turquin, c.iaboss41@gmail.com
  
  **Données collectées :** Prénom, nom, email, téléphone, métier, 
  localisation, message.
  
  **Finalité :** Vous contacter pour proposer une démo ArtiDoc Pro.
  
  **Base légale :** Votre consentement (formulaire).
  
  **Traitement IA :** Vos données sont envoyées à OpenAI (API 
  GPT-4o-mini) pour générer automatiquement une réponse. OpenAI 
  n'entraîne pas ses modèles sur vos données (API non-training).
  
  **Durée de conservation :** 24 mois après votre dernier contact.
  
  **Vos droits :**
  - Accès : Demandez une copie de vos données
  - Suppression : Droit à l'oubli (Art. 17 RGPD)
  - Portabilité : Obtenir vos données en format ouvert (Art. 20)
  
  **Contact DPO :** c.iaboss41@gmail.com (pour toute demande RGPD)
  
  **Sous-traitants :** Google (Sheets, Gmail), OpenAI (IA).
  ```

- [ ] Ajouter liens en footer :
  - `Mentions légales`
  - `Politique de confidentialité` 
  - `Contact RGPD`

---

### 3.2 Action P1 (OBLIGATOIRE) : Configurer suppression auto des données (n8n + Google Sheets)

**Priorité :** 🔴 **P1 — Blocante**  
**Difficulté :** Moyenne  
**Temps estimé :** 60 min  
**Status :** À faire

**Implémentation — Option A (Simple) :**

Ajouter un workflow n8n "Nettoyer les vieux leads" :

1. **Trigger :** Exécution quotidienne (22h)
2. **Action 1 :** Lire Google Sheets (tous les leads)
3. **Action 2 :** Filtrer les leads avec `date_iso < TODAY - 24 mois`
4. **Action 3 :** Supprimer les lignes matchées
5. **Action 4 :** Envoyer notification : "Supprimé X leads expirés"

```javascript
// Code n8n à ajouter dans "Filter"
const leadDate = new Date($json.date_iso);
const expireDate = new Date();
expireDate.setMonth(expireDate.getMonth() - 24); // -24 mois

return leadDate < expireDate; // TRUE = à supprimer
```

**Implémentation — Option B (Robuste) :**

- Ajouter colonne "date_expiration" : `date_iso + 24 mois`
- Ajouter colonne "date_suppression" : remplir lors de suppression
- Créer audit trail (log des suppressions)
- Garder backup Google Drive des données avant suppression

**Validation :**
- [ ] Workflow testé sur 10 leads de test
- [ ] Vérifier que les bons leads sont supprimés
- [ ] Vérifier que les leads actifs (< 24 mois) restent
- [ ] Backup Google Drive activé

---

### 3.3 Action P1 (OBLIGATOIRE) : Documenter l'utilisation d'OpenAI (Analyse d'Impact)

**Priorité :** 🔴 **P1 — Blocante**  
**Difficulté :** Facile  
**Temps estimé :** 45 min  
**Status :** À faire

**Document à créer : `AIPD_OpenAI_ArtiDoc.md`**

```markdown
# ANALYSE D'IMPACT (AIPD) — OpenAI API × ArtiDoc Pro

## 1. Description du traitement IA

**Outil :** OpenAI GPT-4o-mini (API)  
**Finalité :** Générer automatiquement un email de confirmation personnalisé  
**Données entrantes :** Prénom, secteur, ville, message du lead  
**Données sortantes :** Texte de l'email (45-120 mots)

## 2. Légalité et base légale

- ✅ Base légale : Consentement utilisateur (mention sur formulaire)
- ✅ Contrat de traitement : OpenAI DPA signé
- ✅ Localisation : Serveurs US avec SCC (Standard Contractual Clauses)

## 3. Risques d'impact sur les droits

| Risque | Gravité | Mitigation |
|--------|---------|-----------|
| Données envoyées hors UE | Moyenne | SCC + limitation données (pas données sensibles) |
| Email généré peut contenir erreurs | Faible | Révision humaine avant envoi (TODO) |
| Biais algorithme (secteur → tone différent) | Faible | Test non-discrimination futur |

## 4. Mesures de sécurité

- ✅ HTTPS (chiffrement en transit)
- ✅ API key sécurisée (n8n credentials)
- ✅ Pas d'entraînement du modèle sur données (API non-training)
- ✅ Pas de logs persistants chez OpenAI

## 5. Conclusion

**Risque résiduel :** FAIBLE si mentions RGPD ajoutées sur site.  
**Recommandation :** Approuvé sous condition mentions légales.
```

**Où stocker :** `/Landing Page/docs/AIPD_OpenAI_ArtiDoc.md`

---

### 3.4 Action P2 (RECOMMANDÉE) : Implémenter droits utilisateur (Accès + Suppression)

**Priorité :** 🟡 **P2**  
**Difficulté :** Moyenne  
**Temps estimé :** 120 min  
**Status :** À faire (dans 2-3 mois)

**À faire :**

1. **Lien "Récupérer mes données"** dans footer
   - Formulaire simple : email + code de vérification
   - Génère PDF des données du lead (téléchargement)

2. **Lien "Supprimer mes données"** dans footer
   - Même formulaire
   - Envoie email de confirmation
   - Utilisateur valide le lien
   - Suppression automatique dans Google Sheets + copie archivée

3. **Workflow n8n pour gérer les demandes :**
   - Nouveau webhook `/webhook/artidoc-dsar` (Data Subject Access Request)
   - Email validation
   - Génération PDF
   - Archive suppression

---

### 3.5 Action P2 (RECOMMANDÉE) : Audit et test de discrimination IA

**Priorité :** 🟡 **P2**  
**Difficulté :** Moyenne  
**Temps estimé :** 90 min  
**Status :** À faire (dans 1 mois)

**Checklist :**

- [ ] Tester 10 emails générés par GPT pour chaque secteur :
  - [ ] Plombier
  - [ ] Électricien
  - [ ] Maçon
  - [ ] Rénovation
  - [ ] Autre

- [ ] Vérifier absence de discrimination :
  - [ ] Pas de langage discriminant
  - [ ] Pas de pricing différent selon secteur
  - [ ] Ton identique peu importe le profil
  - [ ] Pas de promesses exagérées pour un secteur

- [ ] Documenter les résultats dans : `/Landing Page/docs/TEST_DISCRIMINATION_IA.md`

---

### 3.6 Action P3 (BONUS) : Registre de traitement (Article 30 RGPD)

**Priorité :** 🟢 **P3 — Bonus**  
**Difficulté :** Facile  
**Temps estimé :** 45 min  
**Status :** À faire (dans 3 mois)

Créer un registre centralisé :

```markdown
# Registre des Traitements (Art. 30 RGPD)

## Traitement 1 : Collecte des leads

| Aspect | Détail |
|--------|--------|
| Activité | Prospection commerciale (démo ArtiDoc Pro) |
| Responsable | Arnaud Turquin |
| Catégories de données | Identité, contact, localisation, message |
| Catégories de personnes | Prospects (artisans BTP) |
| Durée de conservation | 24 mois |
| Destinataires | OpenAI (IA), Google (Sheets), Gmail |
| Mesures de sécurité | HTTPS, API keys, DPA signés |
| Base légale | Consentement |

## Traitement 2 : Génération emails IA

| Aspect | Détail |
|--------|--------|
| Activité | Génération automatique d'emails via OpenAI |
| Responsable | Arnaud Turquin |
| Données traitées | Prénom, secteur, message (input); email généré (output) |
| Durée de conservation | Pas de conservation, temps réel |
| Sous-traitant | OpenAI (API GPT-4o-mini) |
| Mesures de sécurité | SCC, pas entraînement modèle, API key sécurisée |

[...ajouter autres traitements...]
```

---

## 📊 RÉSUMÉ DES ACTIONS — TABLEAU DE BORD

| # | Action | Priorité | Difficulté | Temps | Status | Deadline |
|---|--------|----------|-----------|-------|--------|----------|
| 1 | Mentions RGPD sur landing page | P1 | Facile | 30min | ⏳ TODO | 2026-05-11 |
| 2 | Suppression auto données (n8n) | P1 | Moyenne | 60min | ⏳ TODO | 2026-05-18 |
| 3 | AIPD OpenAI documentée | P1 | Facile | 45min | ⏳ TODO | 2026-05-11 |
| 4 | Droits utilisateur (DSAR) | P2 | Moyenne | 120min | ⏳ TODO | 2026-06-01 |
| 5 | Test discrimination IA | P2 | Moyenne | 90min | ⏳ TODO | 2026-05-25 |
| 6 | Registre de traitement (Art. 30) | P3 | Facile | 45min | ⏳ TODO | 2026-06-15 |

---

## 📞 CONTACTS RGPD

| Rôle | Nom | Email |
|------|------|-------|
| **Responsable de traitement** | Arnaud Turquin | c.iaboss41@gmail.com |
| **Délégué à la protection des données** | À désigner ou déclarer CNIL | À remplir |
| **Sous-traitants** | OpenAI, Google, Vercel | Voir section 1.3 |

---

## 🔗 RESSOURCES RÉFÉRENCE

- **RGPD Texte officiel** : https://eur-lex.europa.eu/eli/reg/2016/679/oj
- **Guide CNIL — IA et RGPD** : https://www.cnil.fr/fr/les-lignes-directrices-sur-la-conformite-au-rgpd
- **DPA OpenAI** : https://openai.com/enterprise-privacy
- **DPA Google Cloud** : https://cloud.google.com/terms/data-processing-addendum
- **Amende CNIL (cas réels)** : https://www.cnil.fr/en/node/52976

---

## ✍️ VALIDATION

- [ ] Checklist relue par Arnaud (responsable)
- [ ] Priorités confirmées
- [ ] Deadlines acceptées
- [ ] Actions P1 programmées pour 2026-05-11

**Signature :** ________________________  
**Date :** 2026-05-04

---

*Document vivant — à mettre à jour lors de chaque nouveau traitement (CRM, SMS, chatbot site, etc.)*
