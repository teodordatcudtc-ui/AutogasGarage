export interface Service {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
  benefits: string[]
  process: string[]
  priceRange?: string
  faq: { question: string; answer: string }[]
  keywords: string[]
}

export const services: Service[] = [
  {
    id: 'indreptat-jante',
    title: 'Îndreptat Jante',
    shortDescription: 'Reparare profesională jante deteriorate, restaurare la aspect original.',
    fullDescription: 'Serviciul nostru de îndreptat jante folosește tehnologii moderne pentru a repara jantele deteriorate de șocuri, gropi sau accidente. Restaurăm jantele din aluminiu, oțel sau aliaje la aspectul și funcționalitatea originală.',
    icon: 'wrench',
    benefits: [
      'Restaurare la aspect original',
      'Economie față de cumpărarea jantelor noi',
      'Păstrează caracteristicile originale ale jantei',
      'Garantie pentru lucrările efectuate',
      'Reparație rapidă, de obicei în aceeași zi',
    ],
    process: [
      'Inspectare detaliată a jantei și identificare deteriorări',
      'Demontare jantă și curățare completă',
      'Reparare prin îndreptare și sudură dacă este necesar',
      'Testare pentru a verifica integritatea structurală',
      'Finisare și montare înapoi pe vehicul',
    ],
    priceRange: 'De la 150 RON',
    faq: [
      {
        question: 'Cât durează repararea unei jante?',
        answer: 'În majoritatea cazurilor, repararea unei jante durează 2-4 ore. Pentru deteriorări mai complexe, poate dura o zi lucrătoare.',
      },
      {
        question: 'Pot fi reparate toate tipurile de jante?',
        answer: 'Reparăm jante din aluminiu, oțel și aliaje. Jantele cu fisuri mari sau deteriorări structurale severe pot necesita înlocuire.',
      },
    ],
    keywords: ['îndreptat jante', 'reparare jante', 'jante Ploiești', 'restaurare jante'],
  },
  {
    id: 'geometrie-3d',
    title: 'Geometrie Roți Computerizată 3D',
    shortDescription: 'Reglare precisă a geometriei roților cu tehnologie 3D de ultimă generație.',
    fullDescription: 'Geometria roților corectă este esențială pentru siguranță, uzura uniformă a anvelopelor și comportamentul optim al vehiculului. Folosim echipamente 3D de precizie pentru măsurători exacte și reglări perfecte.',
    icon: 'geometry',
    benefits: [
      'Precizie maximă cu tehnologie 3D',
      'Prelungirea duratei de viață a anvelopelor',
      'Siguranță sporită la condus',
      'Consum redus de combustibil',
      'Comportament optim al direcției',
    ],
    process: [
      'Montare senzori 3D pe roți',
      'Măsurare parametri actuali (convergență, unghi de cădere, etc.)',
      'Comparare cu specificațiile producătorului',
      'Reglare precisă a tuturor parametrilor',
      'Verificare finală și testare',
    ],
    priceRange: 'De la 120 RON',
    faq: [
      {
        question: 'Când trebuie făcută geometria roților?',
        answer: 'Geometria trebuie verificată la fiecare 10.000-15.000 km, după accidente, când schimbi anvelopele sau când observi uzură neuniformă.',
      },
      {
        question: 'Cât durează o reglare de geometrie?',
        answer: 'Reglarea geometriei durează aproximativ 30-45 de minute pentru un vehicul standard.',
      },
    ],
    keywords: ['geometrie 3D', 'geometrie roți', 'reglare geometrie', 'geometrie Ploiești'],
  },
  {
    id: 'revizii-complete',
    title: 'Revizii Complete',
    shortDescription: 'Service complet pentru întreținerea optimă a vehiculului tău.',
    fullDescription: 'Reviziile complete includ verificarea tuturor sistemelor importante ale vehiculului, schimbarea uleiului și filtrelor, verificarea frânelor, suspensiei, sistemului de răcire și multe altele. Asigurăm că mașina ta funcționează perfect și în siguranță.',
    icon: 'tools',
    benefits: [
      'Verificare completă a tuturor sistemelor',
      'Prevenirea defecțiunilor costisitoare',
      'Prelungirea duratei de viață a vehiculului',
      'Siguranță sporită',
      'Consum optim de combustibil',
    ],
    process: [
      'Inspectare vizuală generală',
      'Verificare sistem motor (ulei, filtre, bujii)',
      'Verificare sistem frânare',
      'Verificare suspensie și direcție',
      'Verificare sistem răcire și baterie',
      'Verificare iluminat și electronice',
      'Raport detaliat și recomandări',
    ],
    priceRange: 'De la 200 RON (variază în funcție de servicii)',
    faq: [
      {
        question: 'La ce interval trebuie făcută o revizie completă?',
        answer: 'Recomandăm o revizie completă la fiecare 15.000-20.000 km sau o dată pe an, în funcție de ce apare primul.',
      },
      {
        question: 'Ce include exact o revizie completă?',
        answer: 'Revizia completă include verificarea tuturor sistemelor importante, schimbarea uleiului și filtrelor, verificarea frânelor, suspensiei și multe altele. Oferim un raport detaliat cu toate constatările.',
      },
    ],
    keywords: ['revizii complete', 'service auto', 'întreținere auto', 'revizie Ploiești'],
  },
  {
    id: 'mecanica-rapida',
    title: 'Mecanică Rapidă',
    shortDescription: 'Reparații rapide și eficiente pentru problemele comune ale mașinii.',
    fullDescription: 'Serviciul de mecanică rapidă este perfect pentru reparații urgente și probleme comune. Echipa noastră experimentată rezolvă rapid problemele mecanice, permițându-ți să revii la drum cât mai repede.',
    icon: 'wrench',
    benefits: [
      'Reparații rapide, de obicei în aceeași zi',
      'Prețuri competitive',
      'Echipă experimentată',
      'Diagnostic rapid și precis',
      'Piese de calitate',
    ],
    process: [
      'Diagnostic rapid al problemei',
      'Estimare timp și cost',
      'Reparație efectivă',
      'Testare și verificare',
      'Livrare vehicul',
    ],
    priceRange: 'De la 100 RON (variază în funcție de reparație)',
    faq: [
      {
        question: 'Ce tipuri de reparații faceți în cadrul mecanicii rapide?',
        answer: 'Facem reparații pentru probleme comune: schimbare bujii, filtre, curele, reparații la sistemul de răcire, frâne, suspensie și multe altele.',
      },
      {
        question: 'Cât durează o reparație rapidă?',
        answer: 'Timpul variază în funcție de complexitatea problemei. Majoritatea reparațiilor comune sunt finalizate în 1-3 ore.',
      },
    ],
    keywords: ['mecanică rapidă', 'reparații auto', 'service rapid', 'mecanică Ploiești'],
  },
  {
    id: 'diagnoza-computerizata',
    title: 'Diagnoză Computerizată',
    shortDescription: 'Diagnostic precis al problemelor folosind echipamente moderne de scanare.',
    fullDescription: 'Diagnoza computerizată ne permite să identificăm rapid și precis problemele din sistemul electronic al vehiculului. Folosim scanere profesionale compatibile cu majoritatea mărcilor de mașini.',
    icon: 'computer',
    benefits: [
      'Identificare precisă a problemelor',
      'Economie de timp și bani',
      'Compatibilitate cu majoritatea mărcilor',
      'Raport detaliat cu codurile de eroare',
      'Recomandări clare pentru reparații',
    ],
    process: [
      'Conectare scaner la portul OBD al vehiculului',
      'Citire coduri de eroare și parametri',
      'Analiză detaliată a datelor',
      'Identificare cauze și probleme',
      'Raport complet cu recomandări',
    ],
    priceRange: 'De la 80 RON',
    faq: [
      {
        question: 'Ce probleme poate identifica diagnoza computerizată?',
        answer: 'Diagnoza poate identifica probleme în sistemul motor, transmisie, frâne ABS, airbag, climatizare și multe alte sisteme electronice ale vehiculului.',
      },
      {
        question: 'Cât durează o diagnoză computerizată?',
        answer: 'Diagnoza standard durează aproximativ 15-30 de minute. Pentru probleme complexe, poate dura mai mult.',
      },
    ],
    keywords: ['diagnoză computerizată', 'scanare auto', 'diagnostic auto', 'OBD scan'],
  },
  {
    id: 'incarcare-freon',
    title: 'Încărcare Freon',
    shortDescription: 'Încărcare și verificare sistem climatizare pentru confort optim.',
    fullDescription: 'Sistemul de climatizare necesită întreținere regulată pentru funcționare optimă. Oferim servicii complete de încărcare freon, verificare scurgeri și mentenanță sistem climatizare.',
    icon: 'snowflake',
    benefits: [
      'Confort optim în cabină',
      'Verificare scurgeri',
      'Curățare sistem',
      'Funcționare eficientă',
      'Economie de combustibil',
    ],
    process: [
      'Verificare sistem climatizare',
      'Testare presiune și funcționare',
      'Verificare scurgeri',
      'Evacuare freon vechi dacă este necesar',
      'Încărcare freon nou',
      'Testare funcționare finală',
    ],
    priceRange: 'De la 150 RON',
    faq: [
      {
        question: 'Când trebuie încărcat freonul?',
        answer: 'Recomandăm verificarea sistemului de climatizare o dată pe an sau când observi că nu mai răcește eficient.',
      },
      {
        question: 'Cât durează încărcarea freonului?',
        answer: 'Încărcarea freonului durează aproximativ 30-45 de minute, inclusiv verificarea sistemului.',
      },
    ],
    keywords: ['încărcare freon', 'climatizare auto', 'service climatizare', 'freon Ploiești'],
  },
  {
    id: 'detailing-faruri',
    title: 'Detailing Faruri',
    shortDescription: 'Restaurare și polish faruri încețoșate pentru vizibilitate și aspect perfect.',
    fullDescription: 'Farurile încețoșate reduc semnificativ vizibilitatea noaptea și afectează aspectul mașinii. Serviciul nostru de detailing faruri restaurează transparența și strălucirea originală a farurilor.',
    icon: 'lightbulb',
    benefits: [
      'Vizibilitate sporită noaptea',
      'Aspect restaurat la nou',
      'Siguranță sporită',
      'Economie față de înlocuire',
      'Rezultat durabil',
    ],
    process: [
      'Curățare inițială a farurilor',
      'Șlefuire progresivă pentru eliminare zgârieturi',
      'Polish pentru restaurare transparență',
      'Aplicare protecție UV',
      'Finisare și verificare finală',
    ],
    priceRange: 'De la 200 RON per pereche',
    faq: [
      {
        question: 'Cât durează procesul de detailing faruri?',
        answer: 'Detailing-ul farurilor durează aproximativ 2-3 ore pentru o pereche de faruri.',
      },
      {
        question: 'Cât de durabil este rezultatul?',
        answer: 'Cu protecția UV aplicată, rezultatul poate dura 2-3 ani, în funcție de condițiile de utilizare.',
      },
    ],
    keywords: ['detailing faruri', 'restaurare faruri', 'polish faruri', 'faruri Ploiești'],
  },
  {
    id: 'reparatii-esapament',
    title: 'Reparații Eșapament',
    shortDescription: 'Reparații și înlocuiri pentru sistemul de eșapament.',
    fullDescription: 'Sistemul de eșapament este esențial pentru performanță, consum și conformitate cu normele de poluare. Oferim servicii complete de reparații, înlocuiri și mentenanță pentru sistemul de eșapament.',
    icon: 'exhaust',
    benefits: [
      'Performanță optimă a motorului',
      'Conformitate cu normele de poluare',
      'Zgomot redus',
      'Reparații durabile',
      'Piese de calitate',
    ],
    process: [
      'Inspectare sistem eșapament',
      'Identificare probleme (găuri, coroziune, etc.)',
      'Reparație sau înlocuire componente',
      'Verificare etanșeitate',
      'Testare funcționare',
    ],
    priceRange: 'De la 100 RON (variază în funcție de reparație)',
    faq: [
      {
        question: 'Ce semne indică probleme la eșapament?',
        answer: 'Zgomot excesiv, vibrații, fum neobișnuit sau scăderea performanței pot indica probleme la sistemul de eșapament.',
      },
      {
        question: 'Cât durează o reparație la eșapament?',
        answer: 'Timpul variază în funcție de complexitatea reparației. Reparațiile simple durează 1-2 ore, iar cele complexe pot dura o zi.',
      },
    ],
    keywords: ['reparații eșapament', 'eșapament auto', 'service eșapament', 'eșapament Ploiești'],
  },
  {
    id: 'sudura-argon',
    title: 'Sudură Argon',
    shortDescription: 'Servicii profesionale de sudură argon pentru reparații precise.',
    fullDescription: 'Sudura argon este ideală pentru reparații precise la componente din aluminiu, oțel inox și alte metale. Folosim echipamente profesionale pentru rezultate de calitate superioară.',
    icon: 'welding',
    benefits: [
      'Reparații precise și durabile',
      'Compatibil cu multiple tipuri de metale',
      'Cusătură netedă și estetică',
      'Rezistență la coroziune',
      'Reparații la componente complexe',
    ],
    process: [
      'Evaluare componentă de reparat',
      'Pregătire suprafață (curățare, degresare)',
      'Sudură argon cu parametri optimi',
      'Finisare și șlefuire dacă este necesar',
      'Verificare calitate și testare',
    ],
    priceRange: 'De la 150 RON (variază în funcție de complexitate)',
    faq: [
      {
        question: 'Ce componente pot fi reparate prin sudură argon?',
        answer: 'Sudura argon este folosită pentru reparații la jante, componente din aluminiu, eșapamente, radiatoare și multe alte componente auto.',
      },
      {
        question: 'Cât de durabilă este o reparație prin sudură argon?',
        answer: 'Reparațiile prin sudură argon sunt foarte durabile și pot rezista la fel de bine ca materialul original, dacă sunt efectuate corect.',
      },
    ],
    keywords: ['sudură argon', 'sudură auto', 'reparații sudură', 'sudură Ploiești'],
  },
]

export const stats = [
  { label: 'Ani experiență', value: '10+', suffix: '' },
  { label: 'Jante reparate', value: '500+', suffix: '' },
  { label: 'Clienți mulțumiți', value: '1000+', suffix: '' },
  { label: 'Proiecte finalizate', value: '2000+', suffix: '' },
]

export const blogPosts = [
  {
    id: 'cum-alegi-jantele',
    title: 'Cum alegi jantele: reparare vs. înlocuire',
    excerpt: 'Descoperă când merită să repari jantele și când este mai eficient să le înlocuiești. Ghid complet pentru alegerea corectă.',
    date: '2024-01-15',
    category: 'Sfaturi',
    readTime: '5 min',
  },
  {
    id: 'cand-geometrie-3d',
    title: 'Când ai nevoie de geometrie 3D',
    excerpt: 'Află semnele care indică nevoia de reglare geometrie roți și de ce este importantă pentru siguranță și uzura anvelopelor.',
    date: '2024-01-10',
    category: 'Tehnic',
    readTime: '4 min',
  },
  {
    id: 'sfaturi-intretinere-faruri',
    title: 'Sfaturi pentru întreținerea farurilor',
    excerpt: 'Cum să menții farurile în stare optimă și când este necesară restaurarea lor. Ghid practic pentru proprietarii de mașini.',
    date: '2024-01-05',
    category: 'Întreținere',
    readTime: '6 min',
  },
]

