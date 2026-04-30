const steps = [
  {
    n: 1,
    title: 'On échange 30 min',
    description: 'On comprend ton métier, tes outils actuels, tes pain points. Tu repars avec un plan clair même si tu ne signes pas.',
  },
  {
    n: 2,
    title: 'On installe ton système sur-mesure',
    description: 'Chatbot site web + workflows IA + connexions Gmail/Drive/CRM. Configuré et testé en 5 jours.',
  },
  {
    n: 3,
    title: 'On te forme en 1h, tu utilises au quotidien',
    description: 'Formation simple, support 30 jours inclus. Si ça plante, on intervient. Pas de jargon technique.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how" className="bg-white py-16 md:py-24">
      <div className="container-page">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            3 étapes, 7 jours, et c'est en place.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Pas besoin d'être un geek. On installe, on forme, tu utilises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center fade-in-up relative">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                {step.n}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
