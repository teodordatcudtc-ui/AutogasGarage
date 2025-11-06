# 🚀 Comenzi pentru Pornirea Site-ului

## ⚡ Start Rapid

Următoarele comenzi trebuie rulate **în terminal** (PowerShell, CMD, sau Git Bash pe Windows).

### Pasul 1: Navigare în directorul proiectului

```bash
cd F:\Proiecte\siteuri\autogas-garage
```

### Pasul 2: Instalare dependențe

```bash
npm install
```

**Această comandă va:**
- Descărca toate pachetele necesare (Next.js, React, Tailwind CSS, etc.)
- Poate dura 2-5 minute, în funcție de viteza internetului
- Creează directorul `node_modules/` cu toate dependențele

### Pasul 3: Pornire server dezvoltare

```bash
npm run dev
```

**După rularea comenzii:**
- Vei vedea un mesaj: `✓ Ready on http://localhost:3000`
- Site-ul va fi disponibil la adresa: **http://localhost:3000**
- Deschide browser-ul și accesează această adresă
- Site-ul se va reîncărca automat la fiecare modificare de cod

**Pentru oprire:** Apasă `Ctrl + C` în terminal

---

## 🏗️ Build pentru Producție

### Pasul 1: Build proiect

```bash
npm run build
```

**Această comandă:**
- Compilează și optimizează tot codul
- Generează versiunea de producție în directorul `.next/`
- Poate dura 1-3 minute
- Verifică erori de compilare

### Pasul 2: Pornire server producție (local)

```bash
npm start
```

**După rularea comenzii:**
- Server-ul de producție rulează pe `http://localhost:3000`
- Site-ul este optimizat și gata pentru deploy

**Pentru oprire:** Apasă `Ctrl + C` în terminal

---

## 🔍 Verificare Cod (Linting)

```bash
npm run lint
```

Verifică erori de cod și stil. Corectează orice erori afișate.

---

## 📋 Rezumat Comenzi

| Comandă | Descriere |
|---------|-----------|
| `npm install` | Instalează toate dependențele proiectului |
| `npm run dev` | Pornește server-ul de dezvoltare (localhost:3000) |
| `npm run build` | Creează build-ul de producție |
| `npm start` | Pornește server-ul de producție (după build) |
| `npm run lint` | Verifică erori de cod |

---

## ⚠️ Probleme Comune

### Eroare: "npm: command not found"

**Soluție:** Instalează Node.js de la https://nodejs.org/
- Descarcă versiunea LTS (Long Term Support)
- Instalează și repornește terminalul

### Eroare: "Port 3000 is already in use"

**Soluție:** Fie oprește procesul care folosește portul 3000, fie folosește alt port:

```bash
# Opțiunea 1: Oprește procesul
# Windows: Task Manager > Procese > Node.js > End Task

# Opțiunea 2: Folosește alt port
# Editează package.json și schimbă script-ul "dev":
# "dev": "next dev -p 3001"
```

### Eroare la npm install

**Soluție:** 
```bash
# Șterge node_modules și package-lock.json
rm -rf node_modules package-lock.json

# Reinstalează
npm install
```

### Site-ul nu se încarcă / Erori în browser

**Soluție:**
1. Verifică că server-ul rulează (vezi mesajul în terminal)
2. Verifică că accesezi adresa corectă: `http://localhost:3000`
3. Verifică consola browser-ului pentru erori (F12 > Console)
4. Verifică terminalul pentru erori

---

## 🎯 Următorii Pași

După ce site-ul rulează local:

1. **Verifică funcționalitatea:**
   - Navighează prin toate paginile
   - Testează formularul de contact
   - Verifică pe mobile (resize browser sau folosește DevTools)

2. **Personalizează conținutul:**
   - Editează textele în `lib/data.ts`
   - Adaugă imagini reale (vezi `INSTRUCTIUNI_IMAGINI.md`)
   - Actualizează informațiile de contact

3. **Configurează backend:**
   - Setează API pentru formular contact
   - Configurează email-uri (vezi README.md)

4. **Deploy:**
   - Alege platformă (Vercel recomandat)
   - Urmează instrucțiunile din README.md

---

## 📞 Suport

Dacă întâmpini probleme:
1. Verifică mesajele de eroare din terminal
2. Consultă README.md pentru detalii
3. Verifică documentația Next.js: https://nextjs.org/docs

---

**Succes cu proiectul! 🎉**

