import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '@/lib/data'

interface PageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    return {
      title: 'Articol negăsit',
    }
  }

  return {
    title: `${post.title} | Blog Autogas Service`,
    description: post.excerpt,
    keywords: [post.category, 'blog service auto', 'sfaturi auto'],
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  // Content placeholders - înlocuiește cu conținut real
  const content = {
    'cum-alegi-jantele': {
      sections: [
        {
          title: 'Când merită să repari jantele?',
          content: `Repararea jantelor este o opțiune excelentă în majoritatea cazurilor. 
          Merită să repari jantele când deteriorarea este moderată, janta este de calitate 
          bună și costul reparației este semnificativ mai mic decât înlocuirea.`,
        },
        {
          title: 'Când să înlocuiești jantele?',
          content: `Înlocuirea este necesară când janta are fisuri mari, deteriorări structurale 
          severe sau când costul reparației se apropie de prețul unei jante noi.`,
        },
        {
          title: 'Procesul de reparare',
          content: `Repararea profesională include îndreptare, sudură dacă este necesar, 
          testare și finisare. Rezultatul este o jantă care arată și funcționează ca nouă.`,
        },
      ],
    },
    'cand-geometrie-3d': {
      sections: [
        {
          title: 'Semne că ai nevoie de geometrie',
          content: `Dacă observi uzură neuniformă a anvelopelor, direcția trage într-o parte, 
          volanul vibrează sau mașina nu merge dreaptă, este timpul pentru o verificare de geometrie.`,
        },
        {
          title: 'Beneficii geometrie 3D',
          content: `Geometria corectă prelungește durata de viață a anvelopelor, îmbunătățește 
          siguranța la condus, reduce consumul de combustibil și asigură un comportament optim al direcției.`,
        },
        {
          title: 'Când să faci geometria?',
          content: `Recomandăm verificarea geometriei la fiecare 10.000-15.000 km, după accidente, 
          când schimbi anvelopele sau când observi probleme de direcție.`,
        },
      ],
    },
    'sfaturi-intretinere-faruri': {
      sections: [
        {
          title: 'De ce se încețoșează farurile?',
          content: `Farurile se încețoșează din cauza expunerii la UV, praf, zgârieturi și 
          oxidare. Acest proces reduce semnificativ vizibilitatea noaptea.`,
        },
        {
          title: 'Cum să menții farurile',
          content: `Curăță regulat farurile, folosește produse de protecție UV și evită 
          parcarea prelungită la soare. Dacă sunt deja încețoșate, restaurarea profesională 
          este soluția optimă.`,
        },
        {
          title: 'Restaurare profesională',
          content: `Procesul include șlefuire progresivă, polish și aplicare protecție UV. 
          Rezultatul poate dura 2-3 ani și restabilește vizibilitatea completă.`,
        },
      ],
    },
  }

  const postContent = content[post.id as keyof typeof content] || {
    sections: [
      {
        title: 'Introducere',
        content: 'Conținutul articolului va fi adăugat aici.',
      },
    ],
  }

  return (
    <div className="pt-24">
      <article className="section-padding bg-navy-dark">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-accent hover:text-accent/80 mb-4 inline-block"
            >
              ← Înapoi la blog
            </Link>
            <div className="mb-4">
              <span className="inline-block bg-accent text-navy-dark px-3 py-1 rounded-full text-xs font-semibold">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center space-x-4 text-text-light/60 text-sm">
              <span>{new Date(post.date).toLocaleDateString('ro-RO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}</span>
              <span>•</span>
              <span>{post.readTime} citire</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-xl text-text-light/80 leading-relaxed">
              {post.excerpt}
            </p>

            {postContent.sections.map((section, index) => (
              <div key={index} className="bg-neutral-1 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-accent">
                  {section.title}
                </h2>
                <p className="text-text-light/90 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-br from-blue-deep to-navy rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ai nevoie de ajutor profesional?
            </h2>
            <p className="text-text-light/80 mb-6">
              Contactează-ne pentru consultanță sau programare
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
                📞 0727 517 896
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

