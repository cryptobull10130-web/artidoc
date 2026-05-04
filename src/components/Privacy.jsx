export default function Privacy() {
  return (
    <section id="privacy" className="bg-slate-50 py-16 md:py-24">
      <div className="container-page max-w-4xl">
        {/* Politique de Confidentialité */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 fade-in-up">
          <h2 className="text-3xl font-bold text-primary mb-8">Politique de Confidentialité</h2>

          <div className="prose prose-sm max-w-none text-slate-700 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Responsable du traitement</h3>
              <p>
                <strong>Arnaud Turquin</strong><br />
                ArtiDoc Pro — Automatisation IA pour artisans BTP<br />
                📞 07 60 21 76 69<br />
                ✉️ c.iaboss41@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Données collectées</h3>
              <p>Via le formulaire de contact, nous collectons :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Données d'identification</strong> : Prénom, nom, email</li>
                <li><strong>Données de contact</strong> : Téléphone (optionnel)</li>
                <li><strong>Données professionnelles</strong> : Secteur d'activité, localisation (code postal, ville)</li>
                <li><strong>Données de communication</strong> : Message décrivant votre besoin</li>
              </ul>
              <p className="text-sm text-slate-600 mt-3">
                <em>Aucune donnée sensible au sens RGPD (santé, religion, origine) n'est collectée.</em>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Finalité du traitement</h3>
              <p>
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Vous contacter sous 2 heures ouvrables (lundi-vendredi 8h-19h)</li>
                <li>Vous proposer une démo gratuite et personnalisée d'ArtiDoc Pro</li>
                <li>Vous envoyer des informations commerciales liées à notre offre</li>
                <li>Améliorer nos services en analysant les demandes (segmentation par métier)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Base légale du traitement</h3>
              <p>
                Le traitement de vos données repose sur <strong>votre consentement explicite</strong>
                (article 6.1.a du RGPD) donné lors de la soumission du formulaire. Vous pouvez retirer
                votre consentement à tout moment en nous contactant.
              </p>
              <p className="text-sm text-slate-600 mt-2">
                Nous avons également un <strong>intérêt légitime</strong> (article 6.1.f) à prospecter
                localement auprès des artisans de votre région.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">5. Traitement par Intelligence Artificielle</h3>
              <p>
                <strong>⚠️ Important :</strong> Vos données personnelles sont traitées par une IA
                (OpenAI GPT-4o-mini) pour générer automatiquement un email de confirmation personnalisé.
                Cela signifie que votre message et votre secteur sont envoyés à l'API OpenAI.
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li><strong>Outil IA</strong> : OpenAI (GPT-4o-mini API)</li>
                <li><strong>Données traitées</strong> : Prénom, secteur, message, localisation</li>
                <li><strong>Durée du traitement</strong> : 1-2 secondes (pas de conservation chez OpenAI)</li>
                <li><strong>Sécurité</strong> : OpenAI ne forme pas ses modèles sur vos données (API mode)</li>
                <li><strong>Localisation</strong> : Serveurs OpenAI aux États-Unis (avec garanties légales SCC)</li>
              </ul>
              <p className="text-sm text-slate-600 mt-3">
                L'IA ne prend <strong>aucune décision autonome</strong> vous concernant. Elle génère
                simplement du texte ; c'est Arnaud qui valide et envoie manuellement votre email de confirmation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">6. Durée de conservation</h3>
              <p>
                Vos données sont conservées pendant <strong>24 mois</strong> à compter de la soumission du
                formulaire, ou jusqu'à retrait de votre consentement.
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Si vous devenez client</strong> : Conservation pendant toute la durée du contrat + 3 ans après (obligations légales)</li>
                <li><strong>Si vous ne répondez pas</strong> : Suppression automatique après 24 mois</li>
                <li><strong>Si vous demandez la suppression</strong> : Suppression sous 30 jours</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">7. Destinataires de vos données</h3>
              <p>Vos données sont partagées avec :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Arnaud Turquin</strong> (via Gmail) — réception de votre email</li>
                <li><strong>Google Sheets</strong> — stockage sécurisé de votre demande</li>
                <li><strong>OpenAI API</strong> — génération de l'email de confirmation (données temps réel)</li>
                <li><strong>Gmail/Google</strong> — envoi des emails transactionnels</li>
              </ul>
              <p className="text-sm text-slate-600 mt-3">
                Aucun partage avec des tiers commerciaux, data brokers, ou partenaires publicitaires.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">8. Vos droits (RGPD)</h3>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Droit d'accès (Art. 15)</strong> — Demander une copie complète de vos données
                </li>
                <li>
                  <strong>Droit de rectification (Art. 16)</strong> — Corriger vos données inexactes
                </li>
                <li>
                  <strong>Droit à l'oubli (Art. 17)</strong> — Demander la suppression de vos données
                </li>
                <li>
                  <strong>Droit à la portabilité (Art. 20)</strong> — Recevoir vos données en format ouvert (CSV, JSON)
                </li>
                <li>
                  <strong>Droit d'opposition (Art. 21)</strong> — Refuser la prospection commerciale
                </li>
                <li>
                  <strong>Droit de retrait du consentement</strong> — Arrêter le traitement à tout moment
                </li>
              </ul>
              <p className="text-sm text-slate-600 mt-3">
                Pour exercer ces droits, contactez-nous directement : <strong>c.iaboss41@gmail.com</strong>
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <h4 className="font-semibold text-blue-900 mb-2">📋 Demander une copie de vos données (Droit d'accès)</h4>
              <p className="text-sm text-blue-800 mb-3">
                Envoyez un email à <strong>c.iaboss41@gmail.com</strong> avec votre prénom et email.
                Réponse sous 30 jours.
              </p>
              <a
                href="mailto:c.iaboss41@gmail.com?subject=Exercice%20du%20droit%20d'accès%20RGPD"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition-colors"
              >
                Demander mes données →
              </a>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <h4 className="font-semibold text-red-900 mb-2">🗑️ Supprimer mes données (Droit à l'oubli)</h4>
              <p className="text-sm text-red-800 mb-3">
                Envoyez un email à <strong>c.iaboss41@gmail.com</strong> avec votre prénom et email.
                Un lien de confirmation vous sera envoyé. Vos données seront supprimées sous 30 jours.
              </p>
              <a
                href="mailto:c.iaboss41@gmail.com?subject=Droit%20à%20l'oubli%20-%20Suppression%20de%20mes%20données"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded transition-colors"
              >
                Demander la suppression →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">9. Sécurité des données</h3>
              <p>
                Nous prenons des mesures de sécurité appropriées pour protéger vos données :
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>✅ Formulaire en HTTPS (chiffrement en transit)</li>
                <li>✅ Hébergement Vercel (infrastructure sécurisée, UE)</li>
                <li>✅ Données en Google Sheets avec contrôle d'accès restreint</li>
                <li>✅ API keys sécurisées (n8n, OpenAI)</li>
                <li>✅ Aucune conservation de mots de passe</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">10. Cookies et suivi</h3>
              <p>
                Cette page n'utilise <strong>aucun cookie de suivi</strong> ni Google Analytics.
                Aucune donnée de navigation n'est collectée.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">11. Modifications de cette politique</h3>
              <p>
                Nous pouvons modifier cette politique à tout moment. Les modifications prendront
                effet lors de la prochaine visite. Nous vous notifierons par email des changements
                importants.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">12. Réclamation auprès de la CNIL</h3>
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une
                réclamation auprès de la <strong>Commission Nationale de l'Informatique et des
                Libertés (CNIL)</strong> :
              </p>
              <p className="mt-2">
                📍 <strong>CNIL</strong><br />
                3 Place de Fontenoy<br />
                75007 Paris, France<br />
                🌐 <a href="https://www.cnil.fr" className="text-blue-600 hover:underline">www.cnil.fr</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">13. Contact RGPD</h3>
              <p>
                Pour toute question concernant cette politique ou vos données personnelles :
              </p>
              <p className="mt-2 font-semibold">
                ✉️ <a href="mailto:c.iaboss41@gmail.com" className="text-blue-600 hover:underline">
                  c.iaboss41@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Mentions légales */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 fade-in-up">
          <h2 className="text-3xl font-bold text-primary mb-8">Mentions Légales</h2>

          <div className="prose prose-sm max-w-none text-slate-700 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Éditeur du site</h3>
              <p>
                <strong>Arnaud Turquin</strong><br />
                ArtiDoc Pro — Automatisation IA pour artisans BTP<br />
                📞 07 60 21 76 69<br />
                ✉️ c.iaboss41@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Hébergement</h3>
              <p>
                Ce site est hébergé par <strong>Vercel Inc.</strong><br />
                440 N Barranca Ave, Covina, CA 91723, USA<br />
                🌐 <a href="https://vercel.com" className="text-blue-600 hover:underline">vercel.com</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Propriété intellectuelle</h3>
              <p>
                © 2026 ArtiDoc Pro. Tous droits réservés.
              </p>
              <p className="text-sm text-slate-600 mt-2">
                Le contenu de ce site (textes, images, logos, design) est protégé par le droit d'auteur.
                Reproduction interdite sans autorisation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Limitation de responsabilité</h3>
              <p>
                Ce site est fourni "en l'état". Arnaud Turquin n'assume aucune responsabilité pour :
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Les erreurs ou omissions dans le contenu</li>
                <li>Les dommages directs ou indirects résultant de l'utilisation du site</li>
                <li>L'indisponibilité temporaire du service</li>
                <li>Les pertes de données ou d'accès</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Modifications des conditions</h3>
              <p>
                Ces mentions légales peuvent être modifiées à tout moment. Les modifications prennent
                effet immédiatement lors de leur publication.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Loi applicable</h3>
              <p>
                Ce site et ses conditions d'utilisation sont régis par la loi française.
                Tout litige sera soumis à la compétence des tribunaux français.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
