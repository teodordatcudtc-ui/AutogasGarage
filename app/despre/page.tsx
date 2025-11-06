import type { Metadata } from 'next'
import Link from 'next/link'
import StatsCounter from '@/components/StatsCounter'
import { stats } from '@/lib/data'
import {
  ToolsIcon,
  StarIcon,
  ShieldIcon,
  MoneyIcon,
  BoltIcon,
  TargetIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Despre Noi - Autogas Service | Experiență și Profesionalism',
  description: 'Autogas Service - peste 10 ani de experiență în service roți profesional, geometrie 3D și reparații auto în Ploiești. Echipă dedicată, echipamente moderne, rezultate garantate.',
  keywords: ['despre autogas service', 'service auto Ploiești', 'experiență service roți', 'geometrie 3D Ploiești'],
}

export default function DesprePage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-blue-deep to-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Despre <span className="text-accent">Autogas Service</span>
            </h1>
            <p className="text-xl text-text-light/80">
              Peste 10 ani de experiență în service auto profesional, 
              dedicându-ne fiecărui client atenție și profesionalism de cea mai înaltă calitate.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-navy-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Povestea Noastră
              </h2>
              <div className="space-y-4 text-text-light/90">
                <p>
                  Autogas Service a fost înființat cu misiunea de a oferi servicii 
                  auto de cea mai înaltă calitate în Ploiești și împrejurimi. 
                  De-a lungul anilor, am construit o reputație solidă bazată pe 
                  profesionalism, precizie și satisfacția clienților.
                </p>
                <p>
                  Specializăm în service roți profesional, geometrie computerizată 3D, 
                  îndreptat jante și o gamă completă de servicii mecanice. Folosim 
                  echipamente moderne și tehnologii de ultimă generație pentru a 
                  asigura rezultate perfecte la fiecare lucrare.
                </p>
                <p>
                  Echipa noastră este formată din mecanicieni experimentați, 
                  dedicați să ofere cel mai bun serviciu posibil. Fiecare membru 
                  al echipei este continuu pregătit și la curent cu cele mai noi 
                  tehnologii și metode de lucru.
                </p>
              </div>
            </div>
            <div className="bg-neutral-1 rounded-2xl p-8">
              <div className="aspect-video bg-neutral-2 rounded-lg flex items-center justify-center">
                <span className="text-text-light/40">
                  Imagine echipă / garaj
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-neutral-1">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cifrele Noastre
            </h2>
            <p className="text-xl text-text-light/80">
              Rezultatele vorbesc de la sine
            </p>
          </div>
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-navy-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ce Ne Diferențiază
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Echipamente Moderne',
                description: 'Folosim tehnologii de ultimă generație pentru precizie maximă',
                icon: 'tools',
              },
              {
                title: 'Experiență Dovedită',
                description: 'Peste 10 ani de experiență și mii de clienți mulțumiți',
                icon: 'star',
              },
              {
                title: 'Garantie Lucrări',
                description: 'Toate lucrările sunt garantate pentru siguranța ta',
                icon: 'shield',
              },
              {
                title: 'Prețuri Competitive',
                description: 'Oferim cele mai bune prețuri pentru servicii premium',
                icon: 'money',
              },
              {
                title: 'Servicii Rapide',
                description: 'Majoritatea reparațiilor sunt finalizate în aceeași zi',
                icon: 'bolt',
              },
              {
                title: 'Atenție la Detalii',
                description: 'Fiecare lucrare este tratată cu maximum de atenție',
                icon: 'target',
              },
            ].map((value, index) => {
              const IconComponent = {
                tools: ToolsIcon,
                star: StarIcon,
                shield: ShieldIcon,
                money: MoneyIcon,
                bolt: BoltIcon,
                target: TargetIcon,
              }[value.icon] || ToolsIcon
              
              return (
                <div key={index} className="card text-center border-2 border-neutral-2">
                  <div className="mb-4 flex justify-center text-accent">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-text-light/80">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-blue-deep to-navy">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Alătură-te Clienților Noștri Mulțumiți
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
              📞 0727 517 896
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

