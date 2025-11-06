import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy border-t border-neutral-2">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Despre */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Autogas Service</h3>
            <p className="text-text-light/80 text-sm mb-4">
              Service roți profesional în Ploiești. Peste 10 ani de experiență în 
              îndreptat jante, geometrie 3D, revizii complete și mecanică rapidă.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/servicegas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-1 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook Autogas Service"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Linkuri rapide */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Linkuri rapide</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicii" className="text-text-light/80 hover:text-accent text-sm">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/despre" className="text-text-light/80 hover:text-accent text-sm">
                  Despre noi
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="text-text-light/80 hover:text-accent text-sm">
                  Galerie proiecte
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-text-light/80 hover:text-accent text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-light/80 hover:text-accent text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:0727517896"
                  className="text-text-light/80 hover:text-accent flex items-start space-x-2"
                >
                  <span className="mt-1">📞</span>
                  <span>0727 517 896</span>
                </a>
              </li>
              <li>
                <address className="text-text-light/80 not-italic flex items-start space-x-2">
                  <span className="mt-1">📍</span>
                  <span>
                    Strada Gheorghe Grigore Cantacuzino 348<br />
                    Ploiești 100301
                  </span>
                </address>
              </li>
              <li className="text-text-light/80">
                <span className="font-semibold">Program:</span>
                <br />
                Luni - Vineri: 08:00 - 18:00
                <br />
                Sâmbătă: 08:00 - 14:00
                <br />
                Duminică: Închis
              </li>
            </ul>
          </div>

          {/* Servicii principale */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Servicii</h3>
            <ul className="space-y-2 text-sm text-text-light/80">
              <li>Service roți profesional</li>
              <li>Îndreptat jante</li>
              <li>Geometrie 3D</li>
              <li>Revizii complete</li>
              <li>Mecanică rapidă</li>
              <li>Diagnoză computerizată</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-2 pt-8 text-center text-sm text-text-light/60">
          <p>
            &copy; {currentYear} Autogas Service. Toate drepturile rezervate.
          </p>
          <p className="mt-2">
            <Link href="/politica-confidentialitate" className="hover:text-accent">
              Politica de confidențialitate
            </Link>
            {' | '}
            <Link href="/termeni-conditii" className="hover:text-accent">
              Termeni și condiții
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

