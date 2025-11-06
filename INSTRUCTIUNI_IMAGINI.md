# Instrucțiuni pentru Imagini

## 📸 Imagini Necesare

### 1. Hero Image (Pagina Principală)

**Locație:** `/public/assets/hero.jpg` sau `/public/assets/hero.webp`

**Specificații:**
- Rezoluție: 1920x1080px (sau mai mare, aspect ratio 16:9)
- Format: WebP (recomandat) sau JPG de calitate înaltă
- Dimensiune: maxim 500KB (optimizat)
- Conținut: Garaj modern, mașină în service, sau echipament profesional

**Actualizare cod:**
În `components/HeroSplitScreen.tsx`, înlocuiește placeholder-ul cu:

```tsx
import Image from 'next/image'

<Image
  src="/assets/hero.jpg"
  alt="Autogas Service - Service roți profesional"
  width={1920}
  height={1080}
  priority
  className="w-full h-full object-cover"
/>
```

### 2. Imagini Galerie Proiecte

**Locație:** `/public/assets/gallery/`

**Structură recomandată:**
```
/public/assets/gallery/
├── jante-1.webp
├── jante-1.jpg (fallback)
├── jante-2.webp
├── jante-2.jpg
├── detailing-1.webp
├── detailing-1.jpg
├── geometrie-1.webp
├── geometrie-1.jpg
└── ...
```

**Specificații:**
- Rezoluție: minim 1200x1200px (pătrat) sau 16:9
- Format: WebP + JPG fallback
- Dimensiune: maxim 300KB per imagine (optimizat)
- Categorii: Jante, Detailing, Geometrie, Sudură, Eșapament

**Actualizare cod:**
În `app/galerie/page.tsx`, actualizează array-ul `galleryItems`:

```typescript
const galleryItems = [
  {
    id: '1',
    title: 'Jantă reparată - Înainte/După',
    category: 'Jante',
    description: 'Reparație completă jantă deteriorată',
    image: '/assets/gallery/jante-1.webp', // Adaugă câmpul image
  },
  // ...
]
```

Apoi în `components/Gallery.tsx`, folosește `next/image`:

```tsx
<Image
  src={item.image}
  alt={item.title}
  width={1200}
  height={1200}
  className="w-full h-full object-cover"
/>
```

### 3. Imagini Before/After (Slider)

**Locație:** `/public/assets/before-after/`

**Structură:**
```
/public/assets/before-after/
├── pair-1-before.webp
├── pair-1-before.jpg
├── pair-1-after.webp
├── pair-1-after.jpg
├── pair-2-before.webp
└── pair-2-after.webp
```

**Specificații:**
- Rezoluție: 1920x1080px (aspect ratio 16:9)
- Format: WebP + JPG fallback
- Dimensiune: maxim 400KB per imagine
- Conținut: Transformări reale (jante, faruri, etc.)

**Actualizare cod:**
În `components/BeforeAfterSlider.tsx`, adaugă props pentru imagini:

```tsx
interface BeforeAfterSliderProps {
  isOpen: boolean
  onClose: () => void
  beforeImage?: string
  afterImage?: string
}
```

### 4. Open Graph Image

**Locație:** `/public/og-image.jpg`

**Specificații:**
- Rezoluție: **Exact 1200x630px** (obligatoriu)
- Format: JPG sau PNG
- Dimensiune: maxim 300KB
- Conținut: Logo Autogas Service + text "Service Roți Profesional Ploiești"

**Design recomandat:**
- Fundal: nuanță de albastru (navy-dark sau blue-deep)
- Logo: centrat sau stânga sus
- Text: "Autogas Service" + "Service Roți Profesional Ploiești"
- Culoare text: accent (#F39C12) sau text-light (#F5F7FA)

### 5. Imagini Pagină Despre

**Locație:** `/public/assets/about/`

**Specificații:**
- Rezoluție: 1200x800px (aspect ratio 3:2)
- Format: WebP + JPG
- Conținut: Echipă, garaj, echipamente

**Actualizare cod:**
În `app/despre/page.tsx`, înlocuiește placeholder-ul.

## 🛠️ Optimizare Imagini

### Conversie la WebP

**Folosind online tools:**
- [Squoosh](https://squoosh.app/) - Google
- [CloudConvert](https://cloudconvert.com/)

**Folosind CLI (ImageMagick):**
```bash
magick convert input.jpg -quality 85 output.webp
```

**Folosind Sharp (Node.js):**
```bash
npm install sharp
```

```javascript
const sharp = require('sharp')

sharp('input.jpg')
  .webp({ quality: 85 })
  .toFile('output.webp')
```

### Comprimare JPG

**Folosind online:**
- [TinyPNG](https://tinypng.com/)
- [Compressor.io](https://compressor.io/)

**Folosind CLI (jpegoptim):**
```bash
jpegoptim --max=85 --strip-all image.jpg
```

## 📝 Checklist Imagini

- [ ] Hero image adăugat și optimizat
- [ ] Minim 6-9 imagini pentru galerie (toate categoriile)
- [ ] Minim 1 pereche before/after pentru slider
- [ ] Open Graph image 1200x630px creată
- [ ] Toate imaginile au fallback JPG
- [ ] Toate imaginile sunt optimizate (< 500KB)
- [ ] Alt text adăugat pentru accesibilitate
- [ ] Imagini testate pe diferite device-uri

## 🎨 Recomandări Design

- **Stil:** Profesional, modern, curat
- **Iluminare:** Naturală, bine expusă
- **Compoziție:** Focus pe subiect, fundal neutru
- **Culori:** Coerență cu paleta site-ului (albastru, portocaliu accent)
- **Calitate:** Imagini clare, fără blur sau zgomot excesiv

## 📞 Suport

Dacă ai nevoie de ajutor cu optimizarea sau integrarea imaginilor, 
consultă documentația Next.js Image Optimization:
https://nextjs.org/docs/app/building-your-application/optimizing/images

