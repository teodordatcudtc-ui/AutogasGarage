# Autogas Service - Site Web Profesional

Site web multi-pagină, responsive și SEO-optimizat pentru service auto "Autogas Service" din Ploiești.

## 🚀 Tehnologii Utilizate

- **Next.js 14** - Framework React cu App Router
- **TypeScript** - Type safety și cod mai sigur
- **Tailwind CSS** - Stilizare rapidă și responsive
- **Framer Motion** - Animații fluide și performante
- **React Intersection Observer** - Animații la scroll

## 📦 Instalare

### Cerințe preliminare

- Node.js 18+ 
- npm sau yarn

### Pași de instalare

1. **Clonează sau descarcă proiectul**

```bash
cd autogas-garage
```

2. **Instalează dependențele**

```bash
npm install
```

sau

```bash
yarn install
```

## 🛠️ Comenzi Disponibile

### Dezvoltare locală

```bash
npm run dev
```

Site-ul va fi disponibil la `http://localhost:3000`

### Build pentru producție

```bash
npm run build
```

### Pornire server producție (după build)

```bash
npm start
```

### Linting

```bash
npm run lint
```

## 📁 Structura Proiectului

```
autogas-garage/
├── app/                    # Pagini Next.js (App Router)
│   ├── layout.tsx         # Layout principal cu Header/Footer
│   ├── page.tsx           # Pagina principală (Home)
│   ├── servicii/          # Pagini servicii
│   ├── despre/            # Pagina Despre
│   ├── galerie/           # Pagina Galerie
│   ├── blog/              # Pagini blog
│   ├── contact/           # Pagina Contact
│   ├── sitemap.ts         # Generare sitemap.xml
│   └── robots.ts          # Generare robots.txt
├── components/            # Componente reutilizabile
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSplitScreen.tsx
│   ├── BeforeAfterSlider.tsx
│   ├── ServiceCard.tsx
│   ├── Gallery.tsx
│   ├── ContactForm.tsx
│   └── ...
├── lib/                   # Utilități și date
│   └── data.ts            # Date servicii, blog posts, etc.
├── public/                # Assets statice
│   └── og-image.jpg       # Imagine Open Graph (înlocuiește)
└── styles/                # Stiluri globale
    └── globals.css
```

## 🎨 Personalizare

### Înlocuire Conținut

#### Telefon și Adresă

Toate referințele la telefon și adresă sunt în:
- `app/layout.tsx` (structured data)
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `lib/data.ts` (dacă este necesar)

Caută și înlocuiește:
- Telefon: `0727517896`
- Adresă: `Strada Gheorghe Grigore Cantacuzino 348, Ploiești 100301`

#### Imagini

**Imagini necesare:**

1. **Hero Image** (`/public/assets/hero.jpg`)
   - Rezoluție: 1920x1080px sau mai mare
   - Aspect ratio: 16:9
   - Format: WebP (recomandat) sau JPG
   - Conținut: Garaj sau mașină profesională

2. **Galerie Proiecte** (`/public/assets/gallery/`)
   - Rezoluție: minim 1200x1200px
   - Format: WebP + JPG fallback
   - Categorii: Jante, Detailing, Geometrie, Sudură, Eșapament
   - Nume fișiere: `jante-1.webp`, `detailing-1.webp`, etc.

3. **Open Graph Image** (`/public/og-image.jpg`)
   - Rezoluție: 1200x630px (exact)
   - Format: JPG sau PNG
   - Conținut: Logo + text "Autogas Service - Service Roți Profesional"

4. **Imagini Before/After** (`/public/assets/before-after/`)
   - Rezoluție: 1920x1080px
   - Perechi: `before-1.jpg` / `after-1.jpg`

**Optimizare imagini:**

```bash
# Instalează sharp pentru optimizare automată (deja inclus în Next.js)
# Next.js optimizează automat imaginile importate cu next/image
```

**Actualizare componente:**

În `components/HeroSplitScreen.tsx` și `components/BeforeAfterSlider.tsx`, 
înlocuiește placeholder-urile cu componente `next/image`:

```tsx
import Image from 'next/image'

<Image
  src="/assets/hero.jpg"
  alt="Autogas Service"
  width={1920}
  height={1080}
  priority
/>
```

#### Conținut Text

- **Servicii**: Editează `lib/data.ts` - array-ul `services`
- **Blog**: Editează `lib/data.ts` - array-ul `blogPosts` și `app/blog/[id]/page.tsx`
- **Despre**: Editează `app/despre/page.tsx`
- **Galerie**: Editează `app/galerie/page.tsx` - array-ul `galleryItems`

### Culori și Design

Culorile sunt definite în `tailwind.config.ts`:

```typescript
colors: {
  'navy-dark': '#071428',
  'navy': '#0B2545',
  'blue-deep': '#123A6B',
  'accent': '#F39C12',
  'text-light': '#F5F7FA',
  'neutral-1': '#0F2A44',
  'neutral-2': '#142E4A',
}
```

Pentru a schimba culorile, editează acest fișier și rulează din nou build-ul.

## 📧 Integrare Formular Contact

Formularul de contact (`components/ContactForm.tsx`) necesită un endpoint backend.

### Opțiunea 1: API Route Next.js

Creează `app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  
  // Validare date
  // Trimite email (folosește Nodemailer, SendGrid, etc.)
  // Sau salvează în baza de date
  
  return NextResponse.json({ success: true })
}
```

### Opțiunea 2: Servicii Externe

**SendGrid:**
```bash
npm install @sendgrid/mail
```

**Nodemailer:**
```bash
npm install nodemailer
```

**Formspree / EmailJS:**
- Configurare directă în frontend
- Nu necesită backend

### Opțiunea 3: reCAPTCHA v3

Pentru protecție spam suplimentară:

1. Obține chei de la [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Instalează: `npm install react-google-recaptcha-v3`
3. Adaugă în `app/layout.tsx` și `components/ContactForm.tsx`

## 🔍 SEO și Optimizări

### Meta Tags

Toate paginile au meta tags optimizate. Verifică și actualizează:
- `app/layout.tsx` - meta tags globale
- Fiecare pagină are propriile meta tags în `export const metadata`

### Structured Data (JSON-LD)

Structured data pentru LocalBusiness este în `app/layout.tsx`. 
Verifică că toate datele sunt corecte (adresă, telefon, program).

### Sitemap și Robots.txt

- `app/sitemap.ts` - generează automat sitemap.xml
- `app/robots.ts` - generează automat robots.txt

**După deploy:**
1. Trimite sitemap-ul la Google Search Console
2. Verifică indexarea în Search Console

### Google Search Console

1. Creează cont [Google Search Console](https://search.google.com/search-console)
2. Adaugă proprietatea site-ului
3. Verifică proprietatea (meta tag sau fișier HTML)
4. Trimite sitemap: `https://autogas-service.ro/sitemap.xml`

### Google Analytics (Opțional)

1. Creează cont [Google Analytics 4](https://analytics.google.com)
2. Obține Measurement ID
3. Adaugă în `app/layout.tsx`:

```tsx
import Script from 'next/script'

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🚀 Deploy

### Vercel (Recomandat)

1. Push codul pe GitHub
2. Conectează repository-ul la [Vercel](https://vercel.com)
3. Vercel detectează automat Next.js și configurează build-ul
4. Site-ul va fi live automat

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Sau folosește Netlify CLI: `netlify deploy`

### Server Propriu

1. Build: `npm run build`
2. Start: `npm start`
3. Configurează reverse proxy (nginx) pentru port 3000
4. Configurează SSL (Let's Encrypt)

## ✅ Checklist Livrare Premium

### Performance

- [ ] Lighthouse Performance Score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.5s
- [ ] Core Web Vitals: Toate "Good"

**Verificare:**
```bash
npm run build
npm start
# Deschide Chrome DevTools > Lighthouse > Run audit
```

### SEO

- [ ] Lighthouse SEO Score > 95
- [ ] Toate paginile au meta title și description
- [ ] Structured data validat (Google Rich Results Test)
- [ ] Sitemap.xml accesibil
- [ ] Robots.txt configurat corect
- [ ] Canonical tags prezente
- [ ] Open Graph tags complete

**Verificare:**
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Accesibilitate

- [ ] Lighthouse Accessibility Score > 95
- [ ] Contrast text WCAG AA (minim)
- [ ] Focus states vizibile
- [ ] Navigare cu tastatura funcțională
- [ ] ARIA labels pentru componente interactive
- [ ] Alt text pentru imagini

### Mobile

- [ ] Responsive pe toate device-urile
- [ ] Touch targets >= 44px
- [ ] Text lizibil fără zoom
- [ ] Navigation mobile funcțională
- [ ] Formulare ușor de completat pe mobile

### Funcționalitate

- [ ] Toate linkurile funcționează
- [ ] Formular contact trimite date
- [ ] Imagini se încarcă corect
- [ ] Animații funcționează smooth
- [ ] Before/After slider funcțional
- [ ] Galerie cu lightbox funcțională

### Conținut

- [ ] Toate textele sunt în română
- [ ] Informațiile de contact sunt corecte
- [ ] Serviciile sunt complet descrise
- [ ] Imagini placeholder înlocuite cu imagini reale
- [ ] Blog posts au conținut complet

## 📝 To-Do List (După Generare)

### Prioritare Înaltă

- [ ] **Înlocuiește imagini placeholder** cu imagini reale optimizate
- [ ] **Configurează backend pentru formular** contact (API route sau serviciu extern)
- [ ] **Verifică toate datele de contact** (telefon, adresă) în toate fișierele
- [ ] **Testează formularul** de contact și asigură-te că trimite email-uri
- [ ] **Adaugă conținut complet** pentru articolele din blog

### Prioritare Medie

- [ ] **Configurează Google Analytics** (dacă dorești tracking)
- [ ] **Adaugă reCAPTCHA v3** pentru protecție spam suplimentară
- [ ] **Optimizează imagini** (convertește la WebP, comprimă)
- [ ] **Testează pe device-uri reale** (telefon, tabletă)
- [ ] **Verifică compatibilitate browser** (Chrome, Firefox, Safari, Edge)

### Prioritare Scăzută

- [ ] **Adaugă mai multe articole blog** pentru SEO
- [ ] **Creează pagini legale** (Politica de confidențialitate, Termeni și condiții)
- [ ] **Adaugă testimoniale** clienți (dacă ai)
- [ ] **Implementează sistem de recenzii** (Google Reviews integration)
- [ ] **Adaugă chat live** (opțional, ex: Tawk.to)

## 🐛 Rezolvare Probleme

### Eroare la build

```bash
# Șterge .next și node_modules
rm -rf .next node_modules
npm install
npm run build
```

### Imagini nu se încarcă

- Verifică că fișierele sunt în `/public`
- Folosește path-uri relative: `/assets/image.jpg`
- Verifică permisiunile fișierelor

### Animații nu funcționează

- Verifică că `framer-motion` este instalat
- Verifică console pentru erori JavaScript
- Asigură-te că componentele sunt `'use client'`

## 📞 Suport

Pentru întrebări sau probleme:
- Verifică [documentația Next.js](https://nextjs.org/docs)
- Verifică [documentația Tailwind CSS](https://tailwindcss.com/docs)

## 📄 Licență

Acest proiect a fost creat pentru Autogas Service. Toate drepturile rezervate.

---

**Generat cu ❤️ pentru Autogas Service**

