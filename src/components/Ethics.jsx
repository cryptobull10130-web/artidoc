export default function Ethics() {
  return (
    <section id="ethics" className="bg-slate-50 py-16 md:py-24">
      <div className="container-page max-w-4xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-700 to-teal-600 text-white rounded-t-2xl p-8 md:p-12 text-center">
          <h1 className="text-4xl font-bold mb-2">🤖 Charte Éthique IA</h1>
          <p className="text-lg opacity-95">
            Notre engagement envers une IA responsable, transparente et sécurisée
          </p>
        </div>

        {/* Préambule */}
        <div className="bg-white rounded-b-2xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold text-teal-700 mb-6 border-b-4 border-teal-200 pb-3">
            📋 Préambule
          </h2>

          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              ArtiDoc Pro s'engage à déployer l'IA de manière <strong>responsable, transparente et sécurisée</strong>.
              Cette charte encadre l'usage de l'intelligence artificielle dans nos workflows d'automatisation
              (génération devis, contrats, emails) afin de protéger nos clients artisans et leurs données.
            </p>

            <p>
              Elle s'applique à <strong>l'équipe</strong> (Arnaud Turquin, ArtiDoc Pro), à nos <strong>partenaires techniques</strong>
              (OpenAI, N8N, Genspark) et à tous les tiers impliqués. Notre engagement s'inscrit dans le cadre du
              <strong> RGPD</strong> (conformité données), de l'<strong> AI Act français</strong> (transparence IA) et
              des standards d'éthique IA reconnus internationalement.
            </p>

            <p>
              Cette charte sera révisée <strong>annuellement</strong> ou en cas de changement significatif dans nos pratiques IA.
            </p>
          </div>
        </div>

        {/* 5 Principes */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold text-teal-700 mb-8 border-b-4 border-teal-200 pb-3">
            🎯 5 Principes Éthiques
          </h2>

          {/* Principe 1 */}
          <div className="bg-teal-50 border-l-4 border-teal-700 p-6 mb-6 rounded-r">
            <h3 className="text-xl font-bold text-teal-700 mb-3">
              1️⃣ TRANSPARENCE — L'utilisateur sait toujours que l'IA intervient
            </h3>
            <p className="mb-4 text-slate-700">
              Nous informons clairement nos clients que l'IA (OpenAI GPT-4o-mini) assiste dans la génération
              de contenu (devis, contrats, emails). Chaque document généré automatiquement porte une mention explicite.
            </p>
            <p className="font-semibold text-slate-800 mb-2">✅ En pratique :</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-4">
              <li>Mention sur le dashboard : "📋 Devis généré par IA — Validé manuellement"</li>
              <li>Footer des emails : "Email rédigé avec assistance IA pour gagner du temps"</li>
              <li>Contrats : watermark "Contrat assisté par IA, validé légalement"</li>
              <li>Landing page + Politique de Confidentialité : déclaration transparente</li>
            </ul>
            <p className="text-sm text-slate-600"><strong>⛔ Limite :</strong> L'IA ne doit jamais envoyer sans validation humaine.</p>
          </div>

          {/* Principe 2 */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6 rounded-r">
            <h3 className="text-xl font-bold text-blue-700 mb-3">
              2️⃣ PROTECTION DES DONNÉES — Respect strict du RGPD et minimisation
            </h3>
            <p className="mb-4 text-slate-700">
              Nous collectons le <strong>minimum de données</strong> nécessaire (nom, email, téléphone, secteur, détails projet).
              Les données sont traitées selon le RGPD. Les données envoyées à OpenAI ne sont <strong>jamais conservées</strong>.
            </p>
            <p className="font-semibold text-slate-800 mb-2">✅ En pratique :</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-4">
              <li>Google Sheets : suppression auto après 24 mois</li>
              <li>OpenAI API : données en transit &lt; 2 secondes, pas de stockage</li>
              <li>Gmail/Vercel : HTTPS, chiffrement en transit</li>
              <li>Droit d'accès/suppression : email à c.iaboss41@gmail.com, réponse &lt; 30 jours</li>
            </ul>
            <p className="text-sm text-slate-600"><strong>⛔ Limite :</strong> Jamais de vente ou cession de données.</p>
          </div>

          {/* Principe 3 */}
          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-6 rounded-r">
            <h3 className="text-xl font-bold text-green-700 mb-3">
              3️⃣ EXACTITUDE & FIABILITÉ — Vérification régulière et correction des erreurs
            </h3>
            <p className="mb-4 text-slate-700">
              Nous reconnaissons que l'IA peut "halluciner". Chaque devis/contrat généré est <strong>obligatoirement révisé</strong> par Arnaud avant envoi.
              Les erreurs détectées sont corrigées et documentées pour améliorer les prompts.
            </p>
            <p className="font-semibold text-slate-800 mb-2">✅ En pratique :</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-4">
              <li>Workflow : Formulaire → IA → <strong>Révision Arnaud (30 min)</strong> → Envoi</li>
              <li>Vérifications critiques : montants, SIRET, coordonnées bancaires, clauses légales</li>
              <li>Log des corrections pour amélioration continue</li>
              <li>Tests de robustesse tous les 3 mois (5 clients fictifs variés)</li>
            </ul>
            <p className="text-sm text-slate-600"><strong>⛔ Limite :</strong> L'IA n'a jamais d'autonomie complète.</p>
          </div>

          {/* Principe 4 */}
          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-6 rounded-r">
            <h3 className="text-xl font-bold text-amber-700 mb-3">
              4️⃣ NON-DISCRIMINATION — L'IA ne discrimine pas
            </h3>
            <p className="mb-4 text-slate-700">
              L'IA ne doit pas générer de contenu discriminatoire ou biaisé. Les prix, délais, termes doivent être
              <strong> identiques</strong> quel que soit le profil du prospect.
            </p>
            <p className="font-semibold text-slate-800 mb-2">✅ En pratique :</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-4">
              <li>Test mensuel : 10 devis avec profils variés (femmes/hommes, secteurs mélangés, régions différentes)</li>
              <li>Comparaison : montants, tonalité, longueur des contrats doivent être identiques</li>
              <li>Audit trimestriel : feuille "Audit non-discrimination IA" mise à jour</li>
            </ul>
            <p className="text-sm text-slate-600"><strong>⛔ Limite :</strong> Pause immédiate si biais sérieux détecté.</p>
          </div>

          {/* Principe 5 */}
          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r">
            <h3 className="text-xl font-bold text-purple-700 mb-3">
              5️⃣ CONTRÔLE HUMAIN — L'humain garde la main, l'IA assiste
            </h3>
            <p className="mb-4 text-slate-700">
              L'IA est un <strong>outil d'assistance</strong>, jamais un remplacement. Arnaud conserve le contrôle
              final sur chaque décision. Les workflows offrent toujours une <strong>étape de révision manuelle</strong>.
            </p>
            <p className="font-semibold text-slate-800 mb-2">✅ En pratique :</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-4">
              <li>Dashboard : bouton "Valider et envoyer" obligatoire (pas d'auto-envoi)</li>
              <li>Audit trail : log de chaque action traçable</li>
              <li>Rollback : possibilité de "régénérer" ou "éditer manuellement"</li>
              <li>Circuit-breaker : désactivation IA en 1 clic si dysfonctionnement</li>
            </ul>
            <p className="text-sm text-slate-600"><strong>⛔ Limite :</strong> Jamais d'action automatique sans approbation explicite.</p>
          </div>
        </div>

        {/* Engagement */}
        <div className="bg-gradient-to-r from-teal-700 to-teal-600 text-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 text-center">
          <h2 className="text-3xl font-bold mb-6">✍️ Engagement</h2>

          <p className="mb-6 text-lg">
            Je m'engage personnellement à respecter cette charte dans le développement et le déploiement d'ArtiDoc Pro.
          </p>

          <div className="space-y-2 italic opacity-95">
            <p className="font-semibold text-xl">Arnaud Turquin</p>
            <p>Fondateur, ArtiDoc Pro</p>
            <p>✉️ c.iaboss41@gmail.com</p>
            <p>📞 07 60 21 76 69</p>
          </div>

          <div className="border-t border-white/30 mt-6 pt-6 text-sm opacity-90">
            <p><strong>Date d'application :</strong> 2026-05-04</p>
            <p><strong>Prochaine revue :</strong> 2027-05-04 (annuelle)</p>
          </div>
        </div>

        {/* Métriques */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-teal-700 mb-6 border-b-4 border-teal-200 pb-3">
            📊 Suivi & Audit
          </h2>

          <p className="text-slate-700 mb-6">
            Nous suivons mensuellement les métriques de conformité suivantes :
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-teal-50">
                  <th className="px-4 py-3 text-left font-bold text-teal-700">Métrique</th>
                  <th className="px-4 py-3 text-left font-bold text-teal-700">Cible</th>
                  <th className="px-4 py-3 text-left font-bold text-teal-700">Fréquence</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3"><strong>% devis révisés</strong></td>
                  <td className="px-4 py-3">100%</td>
                  <td className="px-4 py-3">Mensuel</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="px-4 py-3"><strong>Temps révision moyen</strong></td>
                  <td className="px-4 py-3">&lt; 30 min</td>
                  <td className="px-4 py-3">Mensuel</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3"><strong>Erreurs détectées/corrigées</strong></td>
                  <td className="px-4 py-3">Log actualisé</td>
                  <td className="px-4 py-3">Continu</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="px-4 py-3"><strong>Tests non-discrimination</strong></td>
                  <td className="px-4 py-3">10 cas/mois</td>
                  <td className="px-4 py-3">Mensuel</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3"><strong>Satisfaction client</strong></td>
                  <td className="px-4 py-3">&gt; 90%</td>
                  <td className="px-4 py-3">Trimestriel</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="px-4 py-3"><strong>Incidents éthiques</strong></td>
                  <td className="px-4 py-3">0</td>
                  <td className="px-4 py-3">Continu</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-slate-600 text-sm mt-6">
            <strong>Contact :</strong> Pour toute question ou préoccupation éthique, contactez{' '}
            <a href="mailto:c.iaboss41@gmail.com" className="text-teal-600 hover:underline font-semibold">
              c.iaboss41@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
