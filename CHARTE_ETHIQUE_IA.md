# 🤖 Charte Éthique IA — ArtiDoc Pro

**Version :** 1.0  
**Date de mise en application :** 2026-05-04  
**Responsable :** Arnaud Turquin (ArtiDoc Pro)  
**Dernière révision :** 2026-05-04

---

## 📋 PRÉAMBULE

ArtiDoc Pro s'engage à déployer l'IA de manière **responsable, transparente et sécurisée**. Cette charte encadre l'usage de l'intelligence artificielle dans nos workflows d'automatisation (génération devis, contrats, emails) afin de protéger nos clients artisans et leurs données. Elle s'applique à l'équipe (actuellement : Arnaud), à nos partenaires techniques (OpenAI, N8N, Genspark) et à tous les tiers impliqués. Notre engagement s'inscrit dans le cadre du **RGPD (conformité données)**, de l'**AI Act français** (transparence IA) et des standards d'éthique IA reconnus internationalement. Cette charte sera révisée **annuellement** ou en cas de changement significatif dans nos pratiques IA.

---

## 🎯 5 PRINCIPES ÉTHIQUES

### 1️⃣ TRANSPARENCE — L'utilisateur sait toujours que l'IA intervient

**Engagement :**  
Nous informons clairement nos clients que l'IA (OpenAI GPT-4o-mini) assiste dans la génération de contenu (devis, contrats, emails de prospection). Chaque document généré automatiquement porte une mention explicite. L'utilisateur conserve une **compréhension complète** du flux : formulaire → traitement IA → document → révision humaine → envoi.

**Cas d'usage ArtiDoc :**  
- ✅ Mention obligatoire sur le dashboard : "📋 Devis généré par IA — Validé manuellement"
- ✅ Footer des emails générés : "Email rédigé avec assistance IA pour gagner du temps"
- ✅ Contrats : watermark léger "Contrat assisté par IA, validé légalement"
- ✅ Landing page + Politique de Confidentialité : déclaration transparente sur le traitement IA

**Limite :**  
L'IA ne doit **jamais** envoyer de contenu au prospect sans que l'artisan l'ait validé. Pas d'automatisation complète sans contrôle humain.

---

### 2️⃣ PROTECTION DES DONNÉES — Respect strict du RGPD et minimisation

**Engagement :**  
Nous collectons le **minimum de données** nécessaire (nom, email, téléphone, secteur, détails projet). Les données de nos clients artisans et de leurs prospects sont traitées selon le RGPD : consentement, droit d'accès, droit à l'oubli, conservation limitée à 24 mois. Les données envoyées à OpenAI pour la génération (prénom, secteur, détails projet) ne sont **jamais** conservées chez OpenAI (API mode, pas d'entraînement modèle).

**Cas d'usage ArtiDoc :**  
- ✅ Google Sheets : accès restreint (Arnaud uniquement), suppression auto après 24 mois
- ✅ OpenAI API : données en transit < 2 secondes, pas de stockage persistant
- ✅ Gmail/Vercel : HTTPS, chiffrement en transit, politiques de confidentialité signées
- ✅ Pas de partage tiers (analytics, publicités, data brokers) sans consentement explicite
- ✅ Droit d'accès/suppression : email à c.iaboss41@gmail.com, réponse sous 30 jours

**Limite :**  
Jamais de vente ou cession de données. Jamais d'entraînement propriétaire sur les données clients.

---

### 3️⃣ EXACTITUDE & FIABILITÉ — Vérification régulière et correction des erreurs

**Engagement :**  
Nous reconnaissons que l'IA peut **"halluciner"** : générer du texte plausible mais factuellement faux. Nous mettons en place une supervision humaine systématique. Chaque devis/contrat généré par IA est **obligatoirement revu** par Arnaud avant envoi au prospect. Les erreurs détectées (montants incorrects, clauses mal générées, données contradictoires) sont corrigées manuellement et documentées pour améliorer les prompts.

**Cas d'usage ArtiDoc :**  
- ✅ Workflow obligatoire : Formulaire → IA → **Révision Arnaud (30 min)** → Envoi
- ✅ Vérifications critiques : montants, SIRET, coordonnées bancaires, clauses légales
- ✅ Log des corrections : feuille "Erreurs IA détectées" pour itération continue
- ✅ Tests de robustesse : tous les 3 mois, génération test sur 5 clients fictifs variés
- ✅ Chatbot site web : validation de ses réponses via analytics (taux de satisfaction utilisateur)

**Limite :**  
L'IA n'a **jamais** d'autonomie complète. Pas de signature automatique, pas d'envoi sans validation humaine.

---

### 4️⃣ NON-DISCRIMINATION — L'IA ne discrimine pas

**Engagement :**  
L'IA ne doit pas générer de contenu discriminatoire ou biaisé (genre, secteur BTP, région, taille entreprise). Nous testons régulièrement pour détecter les biais : un devis pour une "maçonne femme" vs "maçon homme" doit être identique. Les prix, délais, termes doivent être **identiques** quel que soit le profil du prospect.

**Cas d'usage ArtiDoc :**  
- ✅ Test mensuel : générer 10 devis avec profils variés (femmes/hommes, secteurs mélangés, tailles variées, régions différentes)
- ✅ Détection de bias : comparer les montants, la tonalité, la longueur des contrats
- ✅ Correction : si un biais détecté, amélioration des prompts et re-test
- ✅ Exemple test : "Electricien homme 40 ans Marseille CA 200k€" vs "Électricienne femme 30 ans Marseille CA 200k€" → devis identiques
- ✅ Suivi : feuille "Audit non-discrimination IA" mise à jour trimestriellement

**Limite :**  
Si un biais sérieux détecté, **pause immédiate** de la génération jusqu'à correction.

---

### 5️⃣ CONTRÔLE HUMAIN — L'humain garde la main, l'IA assiste

**Engagement :**  
L'IA est un **outil d'assistance**, jamais un remplacement. Arnaud conserve le contrôle final sur chaque décision (signature, envoi, modalités paiement, termes légaux). Les workflows offrent toujours une **étape de révision manuelle** avant action. L'IA peut être débranché instantanément en cas de dysfonctionnement. Les clients artisans gardent aussi le contrôle : ils peuvent modifier devis/contrats, ajouter leurs termes propres, refuser la génération IA.

**Cas d'usage ArtiDoc :**  
- ✅ Dashboard : bouton "Valider et envoyer" obligatoire (pas d'auto-envoi)
- ✅ Audit trail : log de chaque action (génération → révision → envoi) traçable
- ✅ Rollback : possibilité de "régénérer" ou "éditer manuellement" chaque document
- ✅ Circuit-breaker : désactivation IA en 1 clic si client préfère mode manuel
- ✅ Formation artisan : guide PDF "Comment éditer vos devis IA" pour mastery client

**Limite :**  
Jamais d'action automatique sans approbation explicite de l'humain (signature, paiement, envoi à des tiers).

---

## ✍️ ENGAGEMENT

**Je m'engage personnellement** à respecter cette charte dans le développement et le déploiement d'ArtiDoc Pro.

**Signature morale :**  
Arnaud Turquin  
Fondateur, ArtiDoc Pro — Automatisation IA pour artisans BTP  
✉️ c.iaboss41@gmail.com  
📞 07 60 21 76 69

**Date d'application :** 2026-05-04

**Prochaine revue prévue :** 2027-05-04 (annuelle) ou immédiatement en cas d'incident éthique.

---

## 📊 SUIVI & AUDIT

### Métriques de conformité (suivi mensuel)

| Métrique | Cible | Fréquence | Responsable |
|----------|-------|-----------|------------|
| **% devis révisés** | 100% | Mensuel | Arnaud |
| **Temps révision moyen** | < 30 min | Mensuel | Arnaud |
| **Erreurs détectées/corrigées** | Log actualisé | Continu | Arnaud |
| **Tests non-discrimination** | 10 cas/mois | Mensuel | Arnaud |
| **Satisfaction client** | > 90% (survey) | Trimestriel | Arnaud |
| **Incidents éthiques** | 0 | Continu | Arnaud |
| **Demandes RGPD** | Réponse < 30j | Au cas par cas | Arnaud |

### Procédure en cas d'incident éthique

**Incident détecté** (biais, erreur grave, fuite données, etc.)
   ↓
**Pause immédiate** de la fonction concernée
   ↓
**Investigation** (30min - 2h selon gravité)
   ↓
**Correction** (code, prompt, données)
   ↓
**Test de régression** (5+ cas test)
   ↓
**Redéploiement** sécurisé
   ↓
**Communication client** si nécessaire
   ↓
**Documentation** dans le log "Incidents éthiques"

**Escalade :** Tout incident impliquant des données personnelles → notification RGPD. Tout biais systématique → étude d'impact immédiate.

---

## 📚 RESSOURCES & RÉFÉRENCES

- **RGPD** : https://eur-lex.europa.eu/eli/reg/2016/679/oj
- **AI Act (France)** : https://ec.europa.eu/info/law/artificial-intelligence-act_en
- **OpenAI Trust & Safety** : https://openai.com/trust-and-safety
- **Ethics Guidelines for AI** (EU) : https://ec.europa.eu/digital-single-market/en/artificial-intelligence

---

## 🔄 HISTORIQUE DES RÉVISIONS

| Version | Date | Changements |
|---------|------|------------|
| 1.0 | 2026-05-04 | Création initiale — 5 principes + audit framework |

---

*Cette charte est un engagement vivant. Elle sera enrichie au fur et à mesure des apprentissages et de l'évolution de la réglementation IA.*
