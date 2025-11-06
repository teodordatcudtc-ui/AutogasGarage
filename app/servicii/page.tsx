import type { Metadata } from 'next'
import ServiceCard from '@/components/ServiceCard'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Servicii - Service Roți, Geometrie 3D, Revizii Complete | Autogas Service',
  description: 'Servicii complete auto: service roți profesional, îndreptat jante, geometrie roți computerizată 3D, revizii complete, mecanică rapidă, diagnoză computerizată, încărcare freon, detailing faruri, reparații eșapament, sudură argon.',
  keywords: ['servicii auto', 'service roți', 'geometrie 3D', 'îndreptat jante', 'revizii complete', 'mecanică rapidă', 'diagnoză computerizată', 'Ploiești'],
}

export default function ServiciiPage() {
  return (
    <div className="pt-24">
      <section className="section-padding bg-navy-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Serviciile Noastre
            </h1>
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              Oferim o gamă completă de servicii auto profesionale, de la service roți 
              și geometrie 3D până la revizii complete și reparații mecanice. 
              Fiecare serviciu este efectuat cu precizie și profesionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

