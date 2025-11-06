'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface TimelineStep {
  title: string
  description: string
  icon: string
}

const steps: TimelineStep[] = [
  {
    title: 'Inspectare',
    description: 'Verificare detaliată a tuturor componentelor și identificare nevoi',
    icon: '🔍',
  },
  {
    title: 'Diagnostic',
    description: 'Analiză precisă folosind echipamente moderne de scanare',
    icon: '💻',
  },
  {
    title: 'Reparație',
    description: 'Intervenție profesională cu piese de calitate și tehnologii avansate',
    icon: '🔧',
  },
  {
    title: 'Testare',
    description: 'Verificare finală și testare pentru asigurarea calității',
    icon: '✅',
  },
  {
    title: 'Livrare',
    description: 'Predare vehicul cu garanție și documentație completă',
    icon: '🚗',
  },
]

export default function Timeline() {
  return (
    <div className="relative py-12">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-2 transform md:-translate-x-1/2" />

      <div className="space-y-12">
        {steps.map((step, index) => (
          <TimelineItem key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ step, index }: { step: TimelineStep; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex items-center"
    >
      {/* Timeline dot */}
      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-navy-dark transform md:-translate-x-1/2 z-10" />

      {/* Content */}
      <div
        className={`w-full md:w-1/2 ${
          index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'
        } pl-16 md:pl-0`}
      >
        <div className="bg-neutral-1 rounded-lg p-6 shadow-lg">
          <div className="flex items-center space-x-4 md:space-x-reverse md:flex-row-reverse">
            <div className="text-4xl">{step.icon}</div>
            <div className={index % 2 === 0 ? 'md:text-right' : ''}>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-text-light/80">{step.description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

