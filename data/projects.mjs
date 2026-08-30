import { validateProjects } from "./project-schema.mjs";

const rawProjects = [
  {
    name: "Fibonacci Tiling Viewer",
    description:
      "Esperimento visuale sulle tassellazioni ispirate alla sequenza di Fibonacci.",
    href: "https://r33-fibonacci-tiling.vercel.app/",
    accent: "blue",
  },
  {
    name: "Crivello di Sundaram",
    description:
      "Esplorazione interattiva del crivello e della sequenza collegata.",
    href: "https://sundaram.vercel.app/",
    accent: "slate",
  },
  {
    name: "Malaria",
    description:
      "Simulazione interattiva della diffusione della malaria e della selezione genetica legata alla falcemia.",
    href: "https://malaria-plum.vercel.app",
    accent: "red",
  },
  {
    name: "SET solitario",
    description:
      "Mini-app per giocare a SET ed esplorare la struttura affine F₃⁴ delle carte.",
    href: "https://set-affine-game.vercel.app/",
    accent: "sky",
  },
  {
    name: "Mendel peas",
    description:
      "Simulazione interattiva della genetica mendeliana con piselli.",
    href: "https://mendelpeas.vercel.app/",
    accent: "yellow",
  },
  {
    name: "Cheat Stories",
    description: "Racconti interattivi basati su scelte e conseguenze.",
    href: "https://cheat-stories.vercel.app/",
    accent: "rose",
  },
  {
    name: "Specimen",
    description:
      "Gioco combinatorio ispirato alla genetica umana: genoma 4×4, regola TTE-T4, fenotipo a 6 caratteri e avatar interattivo.",
    href: "https://specimen-t3oh.vercel.app/",
    accent: "teal",
  },
  {
    name: "Meiosi",
    description:
      "Simulazione interattiva della meiosi, dell’assortimento indipendente e della ricombinazione genetica.",
    href: "https://meiosi.vercel.app/",
    accent: "fuchsia",
  },
  {
    name: "US Weather",
    description:
      "MCP server exposing US weather alerts and forecasts (National Weather Service) over Streamable HTTP.",
    href: "https://weather-five-eosin-13.vercel.app/",
    accent: "pink",
  },
  {
    name: "L'insegnante",
    description: "Multilingual Vocabulary Quiz.",
    href: "https://l-insegnante.vercel.app/",
    accent: "green",
  },
  {
    name: "Teleport Chess",
    description:
      "Scacchi a due giocatori con la variante teleport. Multiplayer via link, stato condiviso su Redis.",
    href: "https://teleport-chess.vercel.app/",
    accent: "indigo",
  },
  {
    name: "Artificial Cell Laboratory",
    description:
      "Laboratorio interattivo per la simulazione di cellule artificiali.",
    href: "https://artificial-cell-laboratory.vercel.app/",
    accent: "amber",
  },
  {
    name: "I Gemelli",
    description: "Gemelli monozigoti, sviluppo differente.",
    href: "https://monozygotic-twins-development.vercel.app/",
    accent: "cyan",
  },
  {
    name: "Library (private)",
    description:
      "Catalogo generale della mia libreria ebook personale, con ricerca, filtri e galleria copertine. Protetto da password.",
    href: "https://book-knowledge-manager.vercel.app/",
    accent: "orange",
  },
  {
    name: "Kobo Library (private)",
    description:
      "Catalogo dedicato alla mia collezione Kobo, con ricerca, filtri e galleria copertine. Protetto da password.",
    href: "https://kobo-knowledge-manager.vercel.app/",
    accent: "orange",
  },
  {
    name: "Keyboard",
    description:
      "Esecutore di brani musicali (piano) con metronomo, controllo del tempo e cambio di tonalità.",
    href: "https://keyboard-gilt-sigma.vercel.app/",
    accent: "violet",
  },
  {
    name: "Scale per basso",
    description:
      "Diteggiature ideali per suonare scale e modi sul basso a 4 corde.",
    href: "https://scale-per-basso.vercel.app/",
    accent: "emerald",
  },
  {
    name: "Uno strano strumento musicale",
    isUpdated: true,
    description:
      "Strumento musicale sperimentale con suoni generati proceduralmente.",
    href: "https://p5-smoky.vercel.app/",
    accent: "crimson",
  },
  {
    name: "Vax",
    description:
      "Simula la diffusione di un virus in una popolazione con vaccinazione.",
    href: "https://vax-gilt.vercel.app/",
    accent: "magenta",
  },
  {
    name: "Catalogo problemi Rosalind",
    description:
      "Raccolta di problemi di bioinformatica dal sito Rosalind, con soluzioni e spiegazioni.",
    href: "https://rosalind-catalog.vercel.app/",
    accent: "purple",
  },
  {
    name: "TinyGit",
    isNew: true,
    description:
      "Interfaccia web per gestire repository Git locali, con visualizzazione dei commit e delle modifiche.",
    href: "https://tinygit.vercel.app/",
    accent: "gold",
  },
  {
    name: "Spirale di Ulam",
    isNew: true,
    description:
      "Rompicapo interattivo: raccogli le 34 pietre-primo con un unico percorso sulla spirale di Ulam 12×12.",
    href: "https://ulam-spiral-puzzle.vercel.app/",
    accent: "lime",
  },
  {
    name: "Cubie",
    isNew: true,
    description: "Modello del cubo di Rubik e solver dei sottogruppi.",
    href: "https://cubie-ract.vercel.app/",
    accent: "mint",
  },
  {
    name: "Dodici",
    isNew: true,
    description:
      "Atlante interattivo delle 12 tonalità maggiori: scale, arpeggi e campo armonico, più un test interattivo per mettersi alla prova.",
    href: "https://dodici-vercel.vercel.app/",
    accent: "coral",
  },
];

export const projects = validateProjects(rawProjects);
