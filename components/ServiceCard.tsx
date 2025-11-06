'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Service } from '@/lib/data'
import {
  WrenchIcon,
  GeometryIcon,
  ToolsIcon,
  ComputerIcon,
  SnowflakeIcon,
  LightbulbIcon,
  ExhaustIcon,
  WeldingIcon,
} from './Icons'

interface ServiceCardProps {
  service: Service
  index: number
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  wrench: WrenchIcon,
  geometry: GeometryIcon,
  tools: ToolsIcon,
  computer: ComputerIcon,
  snowflake: SnowflakeIcon,
  lightbulb: LightbulbIcon,
  exhaust: ExhaustIcon,
  welding: WeldingIcon,
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || WrenchIcon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card group hover:scale-105 hover:-translate-y-2 border-2 border-neutral-2 hover:border-accent transition-all"
    >
      <div className="flex flex-col h-full">
        {/* Icon with animation */}
        <div className="mb-4">
          <motion.div
            className="mb-4 text-accent"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <IconComponent className="w-12 h-12" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
        </div>

        <p className="text-text-light/80 mb-6 flex-grow">
          {service.shortDescription}
        </p>

        {/* Animated SVG line on hover */}
        <div className="relative mb-4">
          <div className="h-0.5 bg-neutral-2 group-hover:bg-accent transition-colors duration-300" />
          <motion.div
            className="absolute top-0 left-0 h-0.5 bg-accent"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <Link
          href={`/servicii/${service.id}`}
          className="text-accent font-semibold hover:text-accent/80 flex items-center space-x-2 group-hover:translate-x-2 transition-transform"
        >
          <span>Detalii</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </Link>
      </div>
    </motion.div>
  )
}
