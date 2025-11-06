'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

interface Stat {
  label: string
  value: string
  suffix: string
}

interface StatsCounterProps {
  stats: Stat[]
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <CounterItem
          key={index}
          stat={stat}
          index={index}
          shouldAnimate={inView}
        />
      ))}
    </div>
  )
}

function CounterItem({
  stat,
  index,
  shouldAnimate,
}: {
  stat: Stat
  index: number
  shouldAnimate: boolean
}) {
  const [count, setCount] = useState(0)
  const numericValue = parseInt(stat.value.replace(/\D/g, '')) || 0

  useEffect(() => {
    if (!shouldAnimate) return

    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [shouldAnimate, numericValue])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
        {stat.value.includes('+') ? `${count}+` : stat.value}
        {stat.suffix}
      </div>
      <div className="text-text-light/80 text-sm md:text-base">
        {stat.label}
      </div>
    </motion.div>
  )
}

