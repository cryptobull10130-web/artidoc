import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

const WEBHOOK_URL = 'https://n8n-formation.isao.io/webhook/a93afea5-62f1-42ba-a94e-0c37b2c0bcdc'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function ContactForm() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    secteur: '',
    code_postal: '',
    ville: '',
    message: '',
    website: '', // honeypot
    acceptedTerms: false,
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.prenom.trim()) newErrors.prenom = 'Prénom requis'
    if (!formData.nom.trim()) newErrors.nom = 'Nom requis'
    if (!formData.email.trim()) newErrors.email = 'Email requis'
    else if (!EMAIL_REGEX.test(formData.email.trim())) newErrors.email = 'Email invalide'
    if (!formData.secteur) newErrors.secteur = 'Choisis ton métier'
    if (formData.code_postal && !/^[0-9]{5}$/.test(formData.code_postal.trim())) {
      newErrors.code_postal = '5 chiffres requis'
    }
    if (!formData.message.trim()) newErrors.message = 'Message requis'
    else if (formData.message.trim().length < 10) newErrors.message = 'Au moins 10 caractères'
    if (!formData.acceptedTerms) newErrors.acceptedTerms = 'Vous devez accepter la politique de confidentialité'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      setStatus('success')
    } catch (err) {
      console.error('Form submission error:', err)
      setStatus('error')
      setErrorMessage(
        'Oups, une erreur est survenue. Réessaie ou contacte-nous directement à c.iaboss41@gmail.com'
      )
    }
  }

  if (status === 'success') {
    return (
      <section id="contact" className="bg-slate-50 py-16 md:py-24">
        <div className="container-page max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-primary mb-4">
              Demande envoyée. Tu vas avoir des nouvelles vite. 🚀
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Ton message est entre les mains d'Arnaud. Tu vas recevoir un email de confirmation
              dans les 2 minutes, et un appel sous 2h ouvrées (lundi-vendredi, 8h-19h).
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              En attendant, tu peux suivre ArtiDoc Pro sur LinkedIn pour voir les coulisses des
              automatisations qu'on déploie chez d'autres artisans.
            </p>
            <a
              href="https://linkedin.com/in/arnaud-turquin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-alt text-white font-semibold px-6 py-3 rounded-lg transition-colors mb-4"
            >
              Suivre sur LinkedIn
            </a>
            <p className="text-sm text-slate-500">
              Pas reçu d'email dans 5 minutes ? Vérifie tes spams ou écris à c.iaboss41@gmail.com
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-slate-50 py-16 md:py-24">
      <div className="container-page max-w-2xl">
        <div className="text-center mb-10 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Prêt à récupérer tes 15h par semaine ?
          </h2>
          <p className="text-lg text-slate-600">
            Remplis ce formulaire, on te rappelle sous 2h ouvrées (lundi-vendredi 8h-19h). Aucun
            engagement, juste un échange concret.
          </p>
        </div>

        {/* Info RGPD */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-sm text-slate-700 fade-in-up">
          <p className="text-xs">
            🔒 Vos données seront traitées par une IA (OpenAI), stockées 24 mois. Lire la
            <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold"> Politique de Confidentialité complète</a>.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white rounded-2xl shadow-xl p-6 md:p-10 fade-in-up"
        >
          {/* Honeypot - invisible */}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="honeypot"
          />

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <Field
              label="Prénom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              error={errors.prenom}
              maxLength={50}
              autoComplete="given-name"
              required
            />
            <Field
              label="Nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              error={errors.nom}
              maxLength={50}
              autoComplete="family-name"
              required
            />
          </div>

          <Field
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            maxLength={120}
            autoComplete="email"
            required
            className="mb-4"
          />

          <Field
            label="Téléphone (optionnel)"
            name="telephone"
            type="tel"
            value={formData.telephone}
            onChange={handleChange}
            error={errors.telephone}
            autoComplete="tel"
            className="mb-4"
          />

          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Ton métier <span className="text-red-500">*</span>
            </label>
            <select
              name="secteur"
              value={formData.secteur}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition ${
                errors.secteur ? 'border-red-500' : 'border-slate-300'
              }`}
              required
            >
              <option value="">Choisis ton métier…</option>
              <option value="plombier">Plombier</option>
              <option value="electricien">Électricien</option>
              <option value="macon">Maçon</option>
              <option value="renovation">Rénovation</option>
              <option value="autre">Autre métier BTP</option>
            </select>
            {errors.secteur && (
              <p className="text-red-600 text-sm mt-1">{errors.secteur}</p>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <Field
              label="Code postal (optionnel)"
              name="code_postal"
              value={formData.code_postal}
              onChange={handleChange}
              error={errors.code_postal}
              maxLength={5}
              inputMode="numeric"
              autoComplete="postal-code"
              pattern="[0-9]{5}"
            />
            <div className="md:col-span-2">
              <Field
                label="Ville (optionnel)"
                name="ville"
                value={formData.ville}
                onChange={handleChange}
                error={errors.ville}
                maxLength={80}
                autoComplete="address-level2"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Décris ton besoin en 2-3 phrases <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              minLength={10}
              maxLength={2000}
              rows={5}
              className={`w-full px-4 py-3 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition ${
                errors.message ? 'border-red-500' : 'border-slate-300'
              }`}
              required
            />
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Checkbox RGPD */}
          <div className="mb-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="acceptedTerms"
                checked={formData.acceptedTerms}
                onChange={handleChange}
                className="w-5 h-5 rounded border-slate-300 text-accent focus:ring-accent"
                required
              />
              <span className="text-sm text-slate-700">
                J'accepte la{' '}
                <a
                  href="/privacy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Politique de Confidentialité
                </a>
                {' '}et j'accepte que mes données soient traitées par une IA (OpenAI)
              </span>
            </label>
            {errors.acceptedTerms && (
              <p className="text-red-600 text-sm mt-1">{errors.acceptedTerms}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-accent hover:bg-accent-hover disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-5 h-5 spinner" />
                Envoi en cours…
              </>
            ) : (
              <>Envoyer ma demande →</>
            )}
          </button>

          {status === 'error' && (
            <p className="text-red-600 text-sm mt-3 text-center">{errorMessage}</p>
          )}

          <p className="text-center text-sm text-slate-500 mt-4">
            🔒 Tes données restent privées. Aucun spam, jamais.
          </p>
        </form>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, error, required, className = '', ...rest }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-semibold text-slate-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition ${
          error ? 'border-red-500' : 'border-slate-300'
        }`}
        {...rest}
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  )
}
