'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface GalleryItem {
  id: string
  title: string
  category: string
  image: string
  description?: string
}

interface GalleryProps {
  items: GalleryItem[]
  categories: string[]
}

export default function Gallery({ items, categories }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Toate')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const filteredItems =
    selectedCategory === 'Toate'
      ? items
      : items.filter((item) => item.category === selectedCategory)

  return (
    <>
      {/* Filter */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {['Toate', ...categories].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === category
                ? 'bg-accent text-navy-dark'
                : 'bg-neutral-1 text-text-light hover:bg-neutral-2'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative aspect-square bg-neutral-1 rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImage(item)}
          >
            <div className="w-full h-full bg-gradient-to-br from-neutral-1 to-neutral-2 flex items-center justify-center">
              <span className="text-text-light/40">{item.title}</span>
            </div>
            <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/60 transition-all flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center p-4">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                {item.description && (
                  <p className="text-sm text-text-light/80">{item.description}</p>
                )}
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-accent text-navy-dark px-3 py-1 rounded-full text-xs font-semibold">
              {item.category}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-neutral-1 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-navy-dark/80 hover:bg-accent rounded-full flex items-center justify-center text-text-light transition-colors"
                aria-label="Închide"
              >
                ✕
              </button>
              <div className="aspect-video bg-neutral-2 flex items-center justify-center">
                <span className="text-text-light/40">{selectedImage.title}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                {selectedImage.description && (
                  <p className="text-text-light/80">{selectedImage.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

