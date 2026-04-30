import { CheckCircle2, Mail, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-alt text-white overflow-hidden">
      <div className="container-page py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div>
            <p className="text-orange-300 font-semibold text-sm uppercase tracking-wider mb-4">
              Automatisation IA pour artisans BTP
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Récupère 15h par semaine sur ton administratif.
              <br />
              <span className="text-orange-400">Sans embaucher, sans formation.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8">
              ArtiDoc Pro automatise tes devis, tes relances prospects et ta gestion admin avec l'IA. Tu te concentres sur tes chantiers, on s'occupe du reste.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
              >
                Demander une démo gratuite
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Voir comment ça marche
              </a>
            </div>

            <p className="text-sm text-slate-300">
              ✅ Pas de carte bancaire &nbsp;•&nbsp; ✅ Démo en 30 min &nbsp;•&nbsp; ✅ Réponse sous 2h
            </p>
          </div>

          {/* Mockup illustratif */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-1">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-900 font-semibold text-sm">Devis #2024-042 généré</p>
                    <p className="text-slate-500 text-xs">en 4 min 32s ✅</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-900 font-semibold text-sm">Email envoyé automatiquement</p>
                    <p className="text-slate-500 text-xs">à Mr Dupont · il y a 12s</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-900 font-semibold text-sm">Cette semaine</p>
                    <p className="text-orange-600 text-xs font-bold">+14h 38min récupérées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
