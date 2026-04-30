import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Combien ça coûte concrètement ?',
    a: "Le Pack Artisan Automatisé™ est à 1 500€ TTC en setup unique, sans abonnement caché. Tu deviens propriétaire de ton système. Maintenance optionnelle à 250€/mois si tu veux qu'on gère les évolutions à ta place.",
  },
  {
    q: 'Faut être bon en informatique pour utiliser ça ?',
    a: "Si tu sais envoyer un email et utiliser WhatsApp, tu sais utiliser ArtiDoc Pro. Tout passe par des interfaces simples qu'on configure pour toi. Formation 1h incluse, et on est dispo si tu coinces.",
  },
  {
    q: 'Et si l\'IA dit n\'importe quoi à mes clients ?',
    a: "Le chatbot ne fait que qualifier les demandes (récupérer le besoin, le contact, l'urgence). C'est toujours toi qui valides chaque devis avant envoi. L'IA accélère ton travail, elle ne le remplace pas.",
  },
]

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-page max-w-3xl">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Les questions qu'on me pose le plus
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm fade-in-up"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                aria-expanded={openIdx === idx}
              >
                <span className="text-lg font-semibold text-primary pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5">
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
