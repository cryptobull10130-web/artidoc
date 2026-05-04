import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import BenefitsSection from './components/BenefitsSection'
import HowItWorksSection from './components/HowItWorksSection'
import ContactForm from './components/ContactForm'
import FaqSection from './components/FaqSection'
import Privacy from './components/Privacy'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ContactForm />
      <FaqSection />
      <Privacy />
      <Footer />
    </div>
  )
}
