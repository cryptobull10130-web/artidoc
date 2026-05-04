export default function Footer() {
  return (
    <footer className="bg-primary text-slate-300">
      <div className="container-page py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">ArtiDoc Pro</h3>
            <p className="text-slate-400">Automatisation IA pour artisans BTP</p>
          </div>
          <div className="md:text-right">
            <p className="mb-2">
              <span className="mr-2">📞</span>
              <a href="tel:0760217669" className="hover:text-white transition-colors">
                07 60 21 76 69
              </a>
            </p>
            <p>
              <span className="mr-2">✉️</span>
              <a href="mailto:c.iaboss41@gmail.com" className="hover:text-white transition-colors">
                c.iaboss41@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 flex-wrap">
          <div className="flex flex-wrap gap-x-2 gap-y-1 justify-center md:justify-start text-sm">
            <a href="/ethics.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Charte Éthique IA
            </a>
            <span>·</span>
            <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <span>·</span>
            <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <span>·</span>
            <a href="mailto:c.iaboss41@gmail.com?subject=Exercice%20des%20droits%20RGPD" className="hover:text-white transition-colors">
              Droits RGPD
            </a>
            <span>·</span>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <p className="text-sm text-slate-400">
            © 2026 ArtiDoc Pro — Tous droits réservés
          </p>
        </div>

        <p className="text-xs text-slate-500 mt-6 text-center">
          <strong>🔒 Données privées.</strong> Traitement IA : OpenAI. Conservation : 24 mois.
          <a href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline"> Lire la politique complète</a>.
        </p>
      </div>
    </footer>
  )
}
