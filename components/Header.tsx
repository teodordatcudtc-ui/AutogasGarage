'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { href: '/', label: 'Acasă' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/despre', label: 'Despre' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-[2.5rem] left-0 right-0 z-40 transition-all duration-300 border-b border-neutral-2 ${
        isScrolled
          ? 'bg-navy-dark/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-navy-dark font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold text-text-light">
              Autogas Service
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-accent'
                    : 'text-text-light/80 hover:text-accent'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:0727517896"
              className="btn-primary text-sm"
              aria-label="Sună acum: 0727517896"
            >
              Sună acum
            </a>
            <Link href="/contact" className="btn-secondary text-sm">
              Programare
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-text-light focus:outline-none focus:ring-2 focus:ring-accent rounded relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Meniu mobil"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            ) : (
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <motion.span
                  animate={{ rotate: 0, y: 0 }}
                  className="block h-0.5 w-full bg-text-light transition-all"
                />
                <motion.span
                  animate={{ opacity: 1 }}
                  className="block h-0.5 w-full bg-text-light transition-all"
                />
                <motion.span
                  animate={{ rotate: 0, y: 0 }}
                  className="block h-0.5 w-full bg-text-light transition-all"
                />
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-navy-dark/95 backdrop-blur-sm z-30 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 overflow-hidden bg-navy-dark rounded-lg border border-neutral-2 relative z-40"
              >
              <div className="flex flex-col space-y-2 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      pathname === item.href
                        ? 'bg-accent text-navy-dark'
                        : 'text-text-light hover:bg-neutral-1'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="tel:0727517896"
                  className="btn-primary text-center mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sună acum
                </a>
                <Link
                  href="/contact"
                  className="btn-secondary text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Programare
                </Link>
              </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

