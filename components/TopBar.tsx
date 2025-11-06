'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const topBarItems = [
  {
    type: 'address',
    content: 'Strada Gheorghe Grigore Cantacuzino 348, Ploiești 100301',
    icon: 'location',
  },
  {
    type: 'phone',
    content: '0727 517 896',
    icon: 'phone',
    link: 'tel:0727517896',
  },
  {
    type: 'schedule',
    content: 'Luni - Vineri: 08:00 - 18:00 | Sâmbătă: 08:00 - 14:00',
    icon: 'clock',
  },
]

function LocationIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function PhoneIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function ClockIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  location: LocationIcon,
  phone: PhoneIcon,
  clock: ClockIcon,
}

export default function TopBar() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % topBarItems.length)
    }, 8000) // Schimbă la fiecare 8 secunde

    return () => clearInterval(interval)
  }, [])

  const currentItem = topBarItems[currentIndex]
  const IconComponent = iconMap[currentItem.icon] || LocationIcon

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-navy py-2 text-sm" style={{ height: '2.5rem' }}>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center space-x-2 text-text-light/90"
          >
            <IconComponent className="w-4 h-4 text-accent" />
            {currentItem.link ? (
              <a
                href={currentItem.link}
                className="hover:text-accent transition-colors"
              >
                {currentItem.content}
              </a>
            ) : (
              <span>{currentItem.content}</span>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
