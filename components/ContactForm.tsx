'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
    honeypot: '', // Anti-spam field
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Honeypot check
    if (formData.honeypot) {
      return // Bot detected
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: Replace with actual API endpoint
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // if (response.ok) {
      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        service: '',
        date: '',
        message: '',
        honeypot: '',
      })
      // } else {
      //   setSubmitStatus('error')
      // }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Nume complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-neutral-1 border border-neutral-2 rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="Ion Popescu"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-2">
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-neutral-1 border border-neutral-2 rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="0727 517 896"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="service" className="block text-sm font-semibold mb-2">
            Serviciu dorit
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-neutral-1 border border-neutral-2 rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Selectează un serviciu</option>
            <option value="indreptat-jante">Îndreptat jante</option>
            <option value="geometrie-3d">Geometrie roți 3D</option>
            <option value="revizii-complete">Revizii complete</option>
            <option value="mecanica-rapida">Mecanică rapidă</option>
            <option value="diagnoza-computerizata">Diagnoză computerizată</option>
            <option value="incarcare-freon">Încărcare freon</option>
            <option value="detailing-faruri">Detailing faruri</option>
            <option value="reparatii-esapament">Reparații eșapament</option>
            <option value="sudura-argon">Sudură argon</option>
            <option value="altul">Altul</option>
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-semibold mb-2">
            Data preferată
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 bg-neutral-1 border border-neutral-2 rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 bg-neutral-1 border border-neutral-2 rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
          placeholder="Descrie problema sau întreabă ce vrei..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Se trimite...' : 'Trimite cererea'}
      </motion.button>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-500/20 border border-green-500 text-green-400 rounded-lg p-4 text-center"
        >
          ✓ Cererea a fost trimisă cu succes! Te vom contacta în cel mai scurt timp.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/20 border border-red-500 text-red-400 rounded-lg p-4 text-center"
        >
          ✗ A apărut o eroare. Te rugăm să încerci din nou sau să ne suni direct.
        </motion.div>
      )}

      <p className="text-sm text-text-light/60 text-center">
        Prin trimiterea acestui formular, îți exprimi acordul pentru prelucrarea datelor 
        cu caracter personal conform{' '}
        <a href="/politica-confidentialitate" className="text-accent hover:underline">
          Politicii de confidențialitate
        </a>
        .
      </p>
    </form>
  )
}

