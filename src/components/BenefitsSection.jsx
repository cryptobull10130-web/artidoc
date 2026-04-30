import { Zap, Clock, Mail, TrendingUp } from 'lucide-react'

const benefits = [
  {
    Icon: Zap,
    title: 'Devis en 5 minutes au lieu de 45',
    description: 'Notre IA analyse la demande client et génère un devis structuré, prêt à envoyer. Tu valides, tu signes.',
  },
  {
    Icon: Clock,
    title: 'Réponse aux prospects en 2 minutes, 24h/24',
    description: 'Un chatbot intelligent qualifie tes leads pendant que tu es sur chantier. Tu rappelles les chauds en priorité.',
  },
  {
    Icon: Mail,
    title: 'Relances automatiques = +30% de signatures',
    description: 'Plus aucun devis oublié dans une boîte mail. Relances programmées, taux de conversion qui grimpe.',
  },
  {
    Icon: TrendingUp,
    title: '15h/semaine récupérées dès le 1er mois',
    description: 'Soit l\'équivalent de 2 chantiers supplémentaires par mois. Ou de tes soirées en famille.',
  },
]

export default function BenefitsSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container-page">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ce que change ArtiDoc Pro pour toi
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Des résultats concrets, mesurés chez nos premiers clients artisans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map(({ Icon, title, description }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all fade-in-up"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
              <p className="text-slate-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
