import type { Metadata } from 'next'
import Gallery from '@/components/Gallery'

export const metadata: Metadata = {
  title: 'Galerie Proiecte - Transformări Înainte/După | Autogas Service',
  description: 'Vezi transformările realizate de Autogas Service: jante reparate, detailing faruri, geometrie 3D și multe altele. Rezultate garantate, calitate premium.',
  keywords: ['galerie service auto', 'transformări jante', 'detailing faruri', 'proiecte service roți', 'Ploiești'],
}

// Placeholder gallery items - înlocuiește cu imagini reale
const galleryItems = [
  {
    id: '1',
    title: 'Jantă reparată - Înainte/După',
    category: 'Jante',
    description: 'Reparație completă jantă deteriorată',
    image: '/assets/gallery/jante-1.jpg',
  },
  {
    id: '2',
    title: 'Detailing faruri',
    category: 'Detailing',
    description: 'Restaurare faruri încețoșate',
    image: '/assets/gallery/detailing-1.jpg',
  },
  {
    id: '3',
    title: 'Geometrie 3D',
    category: 'Geometrie',
    description: 'Reglare precisă geometrie roți',
    image: '/assets/gallery/geometrie-1.jpg',
  },
  {
    id: '4',
    title: 'Sudură argon',
    category: 'Sudură',
    description: 'Reparație componentă prin sudură argon',
    image: '/assets/gallery/sudura-1.jpg',
  },
  {
    id: '5',
    title: 'Jantă restaurată',
    category: 'Jante',
    description: 'Restaurare la aspect original',
    image: '/assets/gallery/jante-2.jpg',
  },
  {
    id: '6',
    title: 'Detailing complet',
    category: 'Detailing',
    description: 'Detailing faruri și caroserie',
    image: '/assets/gallery/detailing-2.jpg',
  },
  {
    id: '7',
    title: 'Reparație eșapament',
    category: 'Eșapament',
    description: 'Reparație sistem eșapament',
    image: '/assets/gallery/esapament-1.jpg',
  },
  {
    id: '8',
    title: 'Geometrie reglată',
    category: 'Geometrie',
    description: 'Reglare geometrie pentru uzură uniformă',
    image: '/assets/gallery/geometrie-2.jpg',
  },
  {
    id: '9',
    title: 'Jantă nouă vs reparată',
    category: 'Jante',
    description: 'Comparație jantă reparată',
    image: '/assets/gallery/jante-3.jpg',
  },
]

const categories = ['Jante', 'Detailing', 'Geometrie', 'Sudură', 'Eșapament']

export default function GaleriePage() {
  return (
    <div className="pt-24">
      <section className="section-padding bg-navy-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Galerie Proiecte
            </h1>
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              Descoperă transformările realizate de echipa noastră. Fiecare proiect 
              este un testament al profesionalismului și atenției la detalii.
            </p>
          </div>

          <Gallery items={galleryItems} categories={categories} />
        </div>
      </section>
    </div>
  )
}

