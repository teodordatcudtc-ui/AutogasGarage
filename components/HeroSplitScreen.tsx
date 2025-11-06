'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckIcon } from './Icons'

export default function HeroSplitScreen() {
  return (
    <section className="min-h-[70vh] flex items-center relative overflow-hidden bg-gradient-to-br from-navy-dark via-blue-deep to-navy pt-24 md:pt-0">
      {/* Background Image - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/assets/hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/80 to-transparent" />
      </div>

      {/* Mobile Background */}
      <div className="lg:hidden absolute inset-0">
        <div className="absolute inset-0 bg-[url('/assets/hero-mobile.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy-dark/90 to-navy-dark" />
      </div>

      <div className="container-custom section-padding relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
              Service{' '}
              <span className="text-accent">Profesional</span> în Ploiești
            </h1>
            <p className="text-xl text-text-light/80 max-w-2xl">
              Peste 10 ani de experiență în îndreptat jante, geometrie roți 
              computerizată 3D, revizii complete și mecanică rapidă. 
              Calitate, profesionalism, rezultate garantate.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary text-center">
              Programează-te acum
            </Link>
            <a
              href="tel:0727517896"
              className="btn-secondary text-center"
              aria-label="Sună: 0727517896"
            >
              0727 517 896
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <CheckIcon className="w-5 h-5 text-accent" />
              <span>Geometrie 3D precisă</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckIcon className="w-5 h-5 text-accent" />
              <span>Reparații rapide</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckIcon className="w-5 h-5 text-accent" />
              <span>Garantie lucrări</span>
            </div>
          </div>
        </motion.div>

        {/* Right side - Desktop Image with effects */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-1 border-2 border-accent/20 shadow-2xl">
            {/* Image placeholder with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-1 via-blue-deep/50 to-navy flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-text-light/60 text-sm">Imagine garaj profesional</p>
              </div>
            </div>

            {/* Animated overlay effects */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent"
              animate={{
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent"
              style={{
                transform: 'skewX(-20deg)',
              }}
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

