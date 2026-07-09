const projects = [
  {
    name: "R33 Fibonacci Tiling",
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
    accent: "green",
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
    accent: "purple",
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
    accent: "red",
  },
  {
    name: "Specimen",
    description:
      "Gioco combinatorio ispirato alla genetica umana: genoma 4\u00d74, regola TTE-T4, fenotipo a 6 caratteri e avatar interattivo.",
    href: "https://specimen-t3oh.vercel.app/",
    accent: "amber",
  },
  {
    name: "Meiosi",
    description:
      "Simulazione interattiva della meiosi, dell’assortimento indipendente e della ricombinazione genetica.",
    href: "https://meiosi.vercel.app/",
    accent: "teal",
  },
  {
    name: "Weather in USA (Maine)",
    description:
      "MCP server exposing US weather alerts and forecasts (National Weather Service) over Streamable HTTP.",
    href: "https://weather-five-eosin-13.vercel.app/",
    accent: "blue",
  },
];

export default function Home() {
  const count = String(projects.length).padStart(2, "0");

  return (
    <main className="shell">
      <header className="hero">
        <div>
          <p className="eyebrow">bennibenis-projects</p>
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
            <span className="card-name">{project.name}</span>
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
