import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { services } from '@/lib/data'
import {
  WrenchIcon,
  GeometryIcon,
  ToolsIcon,
  ComputerIcon,
  SnowflakeIcon,
  LightbulbIcon,
  ExhaustIcon,
  WeldingIcon,
} from '@/components/Icons'
import { CheckIcon } from '@/components/Icons'

interface PageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    return {
      title: 'Serviciu negăsit',
    }
  }

  return {
    title: `${service.title} - ${service.keywords.join(', ')} | Autogas Service`,
    description: service.fullDescription,
    keywords: [...service.keywords, 'Ploiești', 'service auto'],
    openGraph: {
      title: `${service.title} - Autogas Service`,
      description: service.fullDescription,
    },
  }
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

export default function ServiceDetailPage({ params }: PageProps) {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    notFound()
  }

  const IconComponent = iconMap[service.icon] || WrenchIcon

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-blue-deep to-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="mb-6 text-accent">
              <IconComponent className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-text-light/80 mb-8">
              {service.fullDescription}
            </p>
            {service.priceRange && (
              <div className="inline-block bg-accent text-navy-dark px-6 py-3 rounded-lg font-semibold mb-8">
                Preț orientativ: {service.priceRange}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-navy-dark">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Beneficii
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-neutral-1 rounded-lg p-6 flex items-start space-x-4"
                >
                  <CheckIcon className="w-6 h-6 text-accent flex-shrink-0" />
                  <p className="text-text-light/90">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-neutral-1">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Procesul de lucru
            </h2>
            <div className="space-y-6">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-navy-dark rounded-lg p-6"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-navy-dark rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-text-light/90 text-lg">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faq.length > 0 && (
        <section className="section-padding bg-navy-dark">
          <div className="container-custom">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Întrebări frecvente
              </h2>
              <div className="space-y-4">
                {service.faq.map((item, index) => (
                  <details
                    key={index}
                    className="bg-neutral-1 rounded-lg p-6 cursor-pointer"
                  >
                    <summary className="font-semibold text-lg mb-2 list-none flex items-center justify-between">
                      <span>{item.question}</span>
                      <span className="text-accent text-2xl">+</span>
                    </summary>
                    <p className="text-text-light/80 mt-4">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-blue-deep to-navy">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interesat de acest serviciu?
          </h2>
          <p className="text-xl text-text-light/80 mb-8 max-w-2xl mx-auto">
            Programează-te acum sau sună-ne pentru mai multe informații
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Programează-te
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

