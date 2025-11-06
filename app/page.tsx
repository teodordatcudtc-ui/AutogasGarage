import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSplitScreen from '@/components/HeroSplitScreen'
import ServiceCard from '@/components/ServiceCard'
import StatsCounter from '@/components/StatsCounter'
import Geometry3DAnimation from '@/components/Geometry3DAnimation'
import Timeline from '@/components/Timeline'
import { CheckIcon } from '@/components/Icons'
import { services, stats } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Service Roți Profesional Ploiești | Geometrie 3D | Autogas Service',
  description: 'Service roți profesional în Ploiești. Îndreptat jante, geometrie roți computerizată 3D, revizii complete, mecanică rapidă. Peste 10 ani experiență. Programează-te acum!',
  keywords: ['service roți profesional', 'geometrie 3D', 'îndreptat jante Ploiești', 'revizii complete', 'mecanică rapidă', 'diagnoză computerizată', 'service auto Ploiești'],
  openGraph: {
    title: 'Autogas Service - Service Roți Profesional Ploiești',
    description: 'Service roți profesional în Ploiești. Geometrie 3D, îndreptat jante, revizii complete.',
  },
}

export default function HomePage() {
  return (
    <div className="pt-8">
      {/* Hero Section */}
      <HeroSplitScreen />

      {/* Services Preview */}
      <section className="section-padding bg-neutral-1">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Serviciile Noastre
            </h2>
            <p className="text-xl text-text-light/80 max-w-2xl mx-auto">
              Oferim soluții complete pentru întreținerea și repararea vehiculului tău
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/servicii" className="btn-primary">
              Vezi toate serviciile
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-padding bg-navy-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                De ce <span className="text-accent">Autogas Service</span>?
              </h2>
              <p className="text-xl text-text-light/80 mb-8">
                Cu peste 10 ani de experiență în domeniu, oferim servicii de 
                cea mai înaltă calitate, folosind tehnologii moderne și 
                echipamente de precizie.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckIcon className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Echipamente moderne</h3>
                    <p className="text-text-light/80">
                      Geometrie 3D computerizată, scanere profesionale, tehnologii de ultimă generație
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckIcon className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Experiență dovedită</h3>
                    <p className="text-text-light/80">
                      Peste 10 ani de experiență și mii de clienți mulțumiți
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckIcon className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Garantie lucrări</h3>
                    <p className="text-text-light/80">
                      Toate lucrările sunt garantate, asigurându-te că ești mulțumit
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckIcon className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Prețuri competitive</h3>
                    <p className="text-text-light/80">
                      Oferim cele mai bune prețuri pentru servicii de calitate premium
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <StatsCounter stats={stats} />
              {/* Image placeholder pentru garaj/echipă */}
              <div className="rounded-lg overflow-hidden bg-neutral-1 aspect-video flex items-center justify-center">
                <span className="text-text-light/40">Garaj profesional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geometry 3D Feature */}
      <section className="section-padding bg-neutral-1">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Geometry3DAnimation />
              {/* Image placeholder pentru echipament geometrie */}
              <div className="mt-8 rounded-lg overflow-hidden bg-neutral-2 aspect-video flex items-center justify-center">
                <span className="text-text-light/40">Echipament geometrie 3D</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Geometrie Roți <span className="text-accent">Computerizată 3D</span>
              </h2>
              <p className="text-xl text-text-light/80 mb-6">
                Folosim tehnologie de precizie pentru reglarea perfectă a geometriei roților. 
                Sistemul nostru 3D asigură măsurători exacte și reglări perfecte pentru 
                siguranță maximă și uzură uniformă a anvelopelor.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-accent">→</span>
                  <span>Precizie maximă cu tehnologie 3D</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-accent">→</span>
                  <span>Prelungirea duratei de viață a anvelopelor</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-accent">→</span>
                  <span>Siguranță sporită la condus</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-accent">→</span>
                  <span>Consum redus de combustibil</span>
                </li>
              </ul>
              <Link href="/servicii/geometrie-3d" className="btn-primary">
                Află mai multe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-navy-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Lucrări Realizate
            </h2>
            <p className="text-xl text-text-light/80 max-w-2xl mx-auto">
              Vezi transformările realizate de echipa noastră
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Image 1 - Jante reparate */}
            <div className="relative aspect-square bg-neutral-1 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-1 to-neutral-2 flex items-center justify-center">
                <span className="text-text-light/40">Jante reparate</span>
              </div>
              <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/60 transition-all flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center p-4">
                  <h3 className="text-xl font-bold mb-2">Îndreptat Jante</h3>
                  <p className="text-sm text-text-light/80">Restaurare profesională</p>
                </div>
              </div>
            </div>
            {/* Image 2 - Detailing faruri */}
            <div className="relative aspect-square bg-neutral-1 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-deep to-navy flex items-center justify-center">
                <span className="text-text-light/40">Detailing faruri</span>
              </div>
              <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/60 transition-all flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center p-4">
                  <h3 className="text-xl font-bold mb-2">Detailing Faruri</h3>
                  <p className="text-sm text-text-light/80">Restaurare transparență</p>
                </div>
              </div>
            </div>
            {/* Image 3 - Service complet */}
            <div className="relative aspect-square bg-neutral-1 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-2 to-blue-deep flex items-center justify-center">
                <span className="text-text-light/40">Service complet</span>
              </div>
              <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/60 transition-all flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center p-4">
                  <h3 className="text-xl font-bold mb-2">Revizie Completă</h3>
                  <p className="text-sm text-text-light/80">Verificare profesională</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/galerie" className="btn-secondary">
              Vezi toate proiectele
            </Link>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-navy-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Procesul Nostru
            </h2>
            <p className="text-xl text-text-light/80 max-w-2xl mx-auto">
              De la inspectare până la livrare, asigurăm un proces transparent și profesional
            </p>
          </div>
          <Timeline />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-deep to-navy bg-neutral-1">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Gata să începem?
          </h2>
          <p className="text-xl text-text-light/80 mb-8 max-w-2xl mx-auto">
            Programează-te acum pentru un service profesional sau sună-ne pentru consultanță
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Programează-te acum
            </Link>
            <a
              href="tel:0727517896"
              className="btn-secondary"
              aria-label="Sună: 0727517896"
            >
              0727 517 896
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

