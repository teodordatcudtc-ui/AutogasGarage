import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Blog - Sfaturi și Ghiduri Service Auto | Autogas Service',
  description: 'Sfaturi utile despre service roți, geometrie 3D, întreținere auto și multe altele. Ghiduri practice pentru proprietarii de mașini.',
  keywords: ['blog service auto', 'sfaturi auto', 'ghiduri service roți', 'întreținere auto'],
}

export default function BlogPage() {
  return (
    <div className="pt-24">
      <section className="section-padding bg-navy-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Blog & Articole
            </h1>
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              Sfaturi utile, ghiduri practice și informații despre service auto, 
              întreținere și reparații. Tot ce trebuie să știi pentru a-ți menține 
              vehiculul în stare optimă.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="card group hover:scale-105 transition-transform"
              >
                <div className="mb-4">
                  <span className="inline-block bg-accent text-navy-dark px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-light/80 mb-4">{post.excerpt}</p>
                </div>
                <div className="flex items-center justify-between text-sm text-text-light/60">
                  <span>{new Date(post.date).toLocaleDateString('ro-RO')}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

