'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BeforeAfterSliderProps {
  isOpen: boolean
  onClose: () => void
}

export default function BeforeAfterSlider({ isOpen, onClose }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return
    const touch = e.touches[0]
    const rect = containerRef.current.getBoundingClientRect()
    const x = touch.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl bg-neutral-1 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-navy-dark/80 hover:bg-accent rounded-full flex items-center justify-center text-text-light transition-colors"
              aria-label="Închide"
            >
              ✕
            </button>

            {/* Slider container */}
            <div
              ref={containerRef}
              className="relative w-full aspect-video bg-neutral-2 cursor-col-resize select-none"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
            >
              {/* Before image (right side) */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-neutral-1 to-neutral-2 flex items-center justify-center">
                  <span className="text-text-light/40">Imagine DUPĂ</span>
                </div>
              </div>

              {/* After image (left side, clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-deep to-navy flex items-center justify-center">
                  <span className="text-text-light/40">Imagine ÎNAINTE</span>
                </div>
              </div>

              {/* Slider line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-accent shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Slider handle */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing"
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleMouseDown}
                >
                  <div className="flex space-x-1">
                    <div className="w-1 h-4 bg-navy-dark rounded"></div>
                    <div className="w-1 h-4 bg-navy-dark rounded"></div>
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-navy-dark/80 px-4 py-2 rounded-lg text-sm font-semibold">
                ÎNAINTE
              </div>
              <div className="absolute top-4 right-4 bg-navy-dark/80 px-4 py-2 rounded-lg text-sm font-semibold">
                DUPĂ
              </div>
            </div>

            {/* Instructions */}
            <div className="p-4 bg-neutral-1 text-center text-sm text-text-light/80">
              Trage linia pentru a compara transformările
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

