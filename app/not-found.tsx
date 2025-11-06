import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 section-padding">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-accent">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pagina nu a fost găsită
        </h2>
        <p className="text-xl text-text-light/80 mb-8 max-w-md mx-auto">
          Pagina pe care o cauți nu există sau a fost mutată.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Acasă
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

