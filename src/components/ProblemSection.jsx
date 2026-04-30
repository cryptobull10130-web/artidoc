const problems = [
  {
    emoji: '🌙',
    title: 'Tu finis tes devis le soir à 22h',
    description: 'Après une journée de chantier, tu retrouves ta paperasse au lieu de ta famille.',
  },
  {
    emoji: '📞',
    title: 'Tes prospects te filent entre les doigts',
    description: 'Tu réponds 3 jours plus tard. Le client a déjà signé avec ton concurrent.',
  },
  {
    emoji: '📂',
    title: 'Ta gestion admin te bouffe ton week-end',
    description: 'Relances impayés, suivi clients, mails sans réponse… ça s\'accumule.',
  },
  {
    emoji: '🤯',
    title: 'Tu sais qu\'il faut digitaliser, mais tu ne sais pas par où commencer',
    description: 'Les outils sont compliqués, chers, ou pas adaptés au BTP.',
  },
]

export default function ProblemSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-page">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Tu te reconnais ?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Si oui, tu n'es pas seul. 8 artisans BTP sur 10 perdent 15 à 20h par semaine sur ces tâches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((p, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow fade-in-up"
            >
              <div className="text-4xl mb-3">{p.emoji}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
