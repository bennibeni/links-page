import { validateProjects } from "./project-schema.mjs";

const rawProjects = [
  {
    name: "Fibonacci Tiling Viewer",
    topic: "Matematica",
    description:
      "Esperimento visuale sulle tassellazioni ispirate alla sequenza di Fibonacci.",
    href: "https://r33-fibonacci-tiling.vercel.app/",
    accent: "blue",
  },
  {
    name: "Crivello di Sundaram",
    topic: "Matematica",
    description:
      "Esplorazione interattiva del crivello e della sequenza collegata.",
    href: "https://sundaram.vercel.app/",
    accent: "slate",
  },
  {
    name: "Malaria",
    topic: "Biologia e genetica",
    description:
      "Simulazione interattiva della diffusione della malaria e della selezione genetica legata alla falcemia.",
    href: "https://malaria-plum.vercel.app",
    accent: "red",
  },
  {
    name: "SET solitario",
    topic: "Giochi",
    description:
      "Mini-app per giocare a SET ed esplorare la struttura affine F₃⁴ delle carte.",
    href: "https://set-affine-game.vercel.app/",
    accent: "sky",
  },
  {
    name: "Mendel peas",
    topic: "Biologia e genetica",
    description:
      "Simulazione interattiva della genetica mendeliana con piselli.",
    href: "https://mendelpeas.vercel.app/",
    accent: "yellow",
  },
  {
    name: "Cheat Stories",
    topic: "Biologia e genetica",
    description:
      "Indagine interattiva di genetica: confronta i tratti dei figli con quelli dei genitori.",
    href: "https://cheat-stories.vercel.app/",
    accent: "rose",
  },
  {
    name: "Specimen",
    topic: "Biologia e genetica",
    description:
      "Gioco combinatorio ispirato alla genetica umana: genoma 4×4, regola TTE-T4, fenotipo a 6 caratteri e avatar interattivo.",
    href: "https://specimen-t3oh.vercel.app/",
    accent: "fuchsia",
  },
  {
    name: "Meiosi",
    topic: "Biologia e genetica",
    description:
      "Simulazione interattiva della meiosi, dell’assortimento indipendente e della ricombinazione genetica.",
    href: "https://meiosi.vercel.app/",
    accent: "teal",
  },
  {
    name: "US Weather",
    topic: "Tecnologia",
    description:
      "MCP server exposing US weather alerts and forecasts (National Weather Service) over Streamable HTTP.",
    href: "https://weather-five-eosin-13.vercel.app/",
    accent: "pink",
  },
  {
    name: "L'insegnante",
    topic: "Giochi",
    description: "Multilingual Vocabulary Quiz.",
    href: "https://l-insegnante.vercel.app/",
    accent: "green",
  },
  {
    name: "Teleport Chess",
    topic: "Giochi",
    description:
      "Scacchi a due giocatori con la variante teleport. Multiplayer via link, stato condiviso su Redis.",
    href: "https://teleport-chess.vercel.app/",
    accent: "indigo",
  },
  {
    name: "Artificial Cell Laboratory",
    topic: "Biologia e genetica",
    description:
      "Laboratorio interattivo per la simulazione di cellule artificiali.",
    href: "https://artificial-cell-laboratory.vercel.app/",
    accent: "cyan",
  },
  {
    name: "I Gemelli",
    topic: "Biologia e genetica",
    description: "Gemelli monozigoti, sviluppo differente.",
    href: "https://monozygotic-twins-development.vercel.app/",
    accent: "amber",
  },
  {
    name: "Library (private)",
    topic: "Accesso limitato",
    isPrivate: true,
    description:
      "Catalogo generale della mia libreria ebook personale, con ricerca, filtri e galleria copertine. Protetto da password.",
    href: "https://book-knowledge-manager.vercel.app/",
    accent: "orange",
  },
  {
    name: "Kobo Library (private)",
    topic: "Accesso limitato",
    isPrivate: true,
    description:
      "Catalogo dedicato alla mia collezione Kobo, con ricerca, filtri e galleria copertine. Protetto da password.",
    href: "https://kobo-knowledge-manager.vercel.app/",
    accent: "orange",
  },
  {
    name: "Keyboard",
    topic: "Musica",
    description:
      "Esecutore di brani musicali (piano) con metronomo, controllo del tempo e cambio di tonalità.",
    href: "https://keyboard-gilt-sigma.vercel.app/",
    accent: "violet",
  },
  {
    name: "Scale per basso",
    topic: "Musica",
    description:
      "Diteggiature ideali per suonare scale e modi sul basso a 4 corde.",
    href: "https://scale-per-basso.vercel.app/",
    accent: "emerald",
  },
  {
    name: "Uno strano strumento musicale",
    topic: "Musica",
    description:
      "Strumento musicale sperimentale con suoni generati proceduralmente.",
    href: "https://p5-smoky.vercel.app/",
    accent: "crimson",
  },
  {
    name: "Vax",
    topic: "Biologia e genetica",
    description:
      "Simula la diffusione di un virus in una popolazione con vaccinazione.",
    href: "https://vax-gilt.vercel.app/",
    accent: "magenta",
  },
  {
    name: "Catalogo problemi Rosalind",
    topic: "Biologia e genetica",
    description:
      "Raccolta di problemi di bioinformatica dal sito Rosalind, con soluzioni e spiegazioni.",
    href: "https://rosalind-catalog.vercel.app/",
    accent: "purple",
  },
  {
    name: "TinyGit",
    topic: "Tecnologia",
    description:
      "Interfaccia web per gestire repository Git locali, con visualizzazione dei commit e delle modifiche.",
    href: "https://tinygit.vercel.app/",
    accent: "gold",
  },
  {
    name: "Spirale di Ulam",
    topic: "Matematica",
    description:
      "Rompicapo interattivo: raccogli le 34 pietre-primo con un unico percorso sulla spirale di Ulam 12×12.",
    href: "https://ulam-spiral-puzzle.vercel.app/",
    accent: "lime",
  },
  {
    name: "Baby Mastermind",
    topic: "Giochi",
    description: "Trova la combinazione vincente.",
    href: "https://baby-mastermind.vercel.app/",
    accent: "mint",
  },
  {
    name: "Dodici",
    topic: "Musica",
    description:
      "Atlante interattivo delle 12 tonalità maggiori: scale, arpeggi e campo armonico, più un test interattivo per mettersi alla prova.",
    href: "https://dodici-vercel.vercel.app/",
    accent: "coral",
  },
  {
    name: "Genogiallo",
    topic: "Biologia e genetica",
    description: "Un'indagine genetica.",
    href: "https://genogiallo.vercel.app/",
    accent: "turquoise",
  },
  {
    name: "Scale & Arpeggi al Pianoforte",
    topic: "Musica",
    description:
      "Un percorso pratico per studiare scale, arpeggi e diteggiature al pianoforte.",
    href: "https://scale-fingering-next-a7e7.vercel.app/scale",
    accent: "chartreuse",
  },
  {
    name: "Paradossi bayesiani",
    topic: "Matematica",
    description:
      "Otto esperimenti mentali che mostrano come prove, selezione e convinzioni iniziali trasformino ciò che sembra ovvio.",
    href: "https://bayes-paradoxes.vercel.app/",
    accent: "plum",
  },
  {
    name: "Ascensore",
    topic: "Simulazioni",
    description:
      "Simulazione di un ascensore con più piani e utenti, ma siamo solo all'inizio.",
    href: "https://elevator-simulator-livid.vercel.app/",
    accent: "blue",
  },
  {
    name: "Malaria Arcade",
    topic: "Biologia e genetica",
    description: "Gioco arcade basato sugli esami diagnostici.",
    href: "https://malaria-arcade.vercel.app/",
    accent: "slate",
  },
  {
    name: "Una macchina imperfetta",
    topic: "Giochi",
    description:
      "Sfida una macchina istruita per giocare a tris bene ma non benissimo.",
    href: "https://menace-simulator.vercel.app/",
    accent: "red",
  },
  {
    name: "Parenti serpenti",
    topic: "Giochi",
    description: "Un gioco di deduzione genealogica.",
    href: "https://parenti-serpenti.vercel.app/",
    accent: "sky",
  },
  {
    name: "Il Maggiolino",
    topic: "Simulazioni",
    description: "Laboratorio di robotica interattivo.",
    href: "https://il-maggiolino.vercel.app/",
    accent: "yellow",
  },
  {
    name: "Ricerca di Accordi",
    topic: "Musica",
    description: "Strumento per cercare e ascoltare accordi musicali.",
    href: "https://accordi-three.vercel.app/",
    accent: "rose",
  },
  {
    name: "Che cosa decide le mie partite?",
    topic: "Tecnologia",
    description: "Machine Learning Lab basato su archivio scacchi",
    href: "https://scacchi-next.vercel.app/",
    accent: "fuchsia",
  },
  {
    name: "Conigli mortali",
    topic: "Biologia e genetica",
    description: "Una popolazione di conigli in giardino",
    href: "https://conigli-mortali.vercel.app/",
    accent: "teal",
  },
  {
    name: "Il quaderno di Mendel",
    topic: "Biologia e genetica",
    description: "Le leggi dell’ereditarietà, una scoperta alla volta.",
    href: "https://quaderni-di-mendel.vercel.app/",
    accent: "pink",
  },
  {
    name: "Il puzzle della famiglia giapponese",
    topic: "Giochi",
    description: "Gioca - Esplora - Approfondisci.",
    href: "https://river-forest.vercel.app/",
    accent: "green",
  },
  {
    name: "Alveare (ispirato a Hex FRVR)",
    topic: "Giochi",
    isUpdated: true,
    description: "Gioca come un esperto con i suggerimenti dell'AI.",
    href: "https://alveare-six.vercel.app/",
    accent: "indigo",
  },
  {
    name: "ER",
    topic: "Simulazioni",
    description: "Vesti i panni del Primario in questo incubo cardiovascolare.",
    href: "https://er-umber.vercel.app/",
    accent: "cyan",
  },
  {
    name: "Api matematiche",
    topic: "Matematica",
    isNew: true,
    description: "Strane somiglianze tra le api e la serie di Fibonacci.",
    href: "https://api-matematiche.vercel.app/",
    accent: "amber",
  },
];

export const projects = validateProjects(rawProjects);
