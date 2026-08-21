const projects = [
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
    href: "https://sundaram-h7e2q9ex1-bennibenis-projects.vercel.app/",
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
      "Mini-app per giocare a SET ed esplorare la struttura affine F\u2083\u2074 delle carte.",
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
    isUpdated: true,
    description: "Racconti interattivi basati su scelte e conseguenze.",
    href: "https://cheat-stories.vercel.app/",
    accent: "rose",
  },
  {
    name: "Specimen",
    description:
      "Gioco combinatorio ispirato alla genetica umana: genoma 4\u00d74, regola TTE-T4, fenotipo a 6 caratteri e avatar interattivo.",
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
    isUpdated: true,
    description:
      "Scacchi a due giocatori con la variante teleport. Multiplayer via link, stato condiviso su Redis.",
    href: "https://teleport-chess.vercel.app/",
    accent: "indigo",
  },
  {
    name: "Artificial Cell Laboratory",
    isUpdated: true,
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
      "Catalogo della mia libreria ebook personale, con ricerca, filtri e galleria copertine. Protetto da password.",
    href: "https://book-knowledge-manager.vercel.app/",
    accent: "orange",
  },
  {
    name: "Kobo Library (private)",
    description:
      "Catalogo della mia libreria ebook personale, con ricerca, filtri e galleria copertine. Protetto da password.",
    href: "https://kobo-knowledge-manager.vercel.app/",
    accent: "orange",
  },
  {
    name: "Keyboard",
    isNew: true,
    description:
      "Esecutore di brani musicali (piano) con metronomo, controllo del tempo e cambio di tonalità",
    href: "https://keyboard-gilt-sigma.vercel.app/",
    accent: "violet",
  },
  {
    name: "Scale per basso",
    isNew: true,
    description:
      "Diteggiature ideali per suonare scale e modi sul basso a 4 corde",
    href: "https://scale-per-basso.vercel.app/",
    accent: "emerald",
  },
  {
    name: "Uno strano strumento musicale",
    isNew: true,
    description:
      "Strumento musicale sperimentale con suoni generati proceduralmente.",
    href: "https://p5-smoky.vercel.app/",
    accent: "crimson",
  },
];

export default function Home() {
  const count = String(projects.length).padStart(2, "0");
  // console.log(
  //   "projects",
  //   projects,
  //   "projects.length",
  //   projects.length,
  //   "count",
  //   count,
  // );

  return (
    <main className="shell">
      <header className="hero">
        <div>
          <p className="eyebrow">bennibenis-projects</p>
          <p className="eyebrow">
            Per commenti:{" "}
            <a href="mailto:torredihanoi@gmail.com">torredihanoi@gmail.com</a>
          </p>
          <h1 className="hero-title">
            I miei
            <br />
            progetti
          </h1>
        </div>
        <span className="hero-count" aria-label={`${projects.length} progetti`}>
          {count}
        </span>
      </header>

      <section className="project-grid" aria-label="Link ai progetti">
        {projects.map((project) => (
          <article
            className={`project-card accent-${project.accent}`}
            key={project.name}
          >
            <span className="card-name">
              {project.name}
              {project.isNew ? <span className="new-badge">NEW!</span> : null}
              {project.isUpdated ? (
                <span className="new-badge">Updated!</span>
              ) : null}
            </span>
            <span className="card-description">{project.description}</span>
            {project.href ? (
              <a
                className="open-link"
                href={project.href}
                rel="noreferrer"
                target="_blank"
              >
                Apri <span aria-hidden="true">&rarr;</span>
              </a>
            ) : (
              <span className="open-link is-muted">URL mancante</span>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}
