const projects = [
  {
    name: "R33 Fibonacci Tiling",
    description:
      "Esperimento visuale sulle tassellazioni ispirate alla sequenza di Fibonacci.",
    href: "https://r33-fibonacci-tiling.vercel.app/",
    status: "Live",
    accent: "blue",
  },
  {
    name: "Crivello di Sundaram",
    description:
      "Esplorazione interattiva del crivello e della sequenza collegata.",
    href: "https://sundaram-h7e2q9ex1-bennibenis-projects.vercel.app/",
    status: "Live",
    accent: "green",
  },
  {
    name: "Malaria",
    description:
      "Simulazione interattiva della diffusione della malaria e della selezione genetica legata alla falcemia.",
    href: "https://malaria-plum.vercel.app",
    status: "Live",
    accent: "red",
  },
  {
    name: "SET solitario",
    description:
      "Mini-app per giocare a SET ed esplorare la struttura affine F₃⁴ delle carte.",
    href: "https://set-affine-game.vercel.app/",
    status: "Live",
    accent: "purple",
  },
  {
    name: "Mendel peas",
    description:
      "Simulazione interattiva della genetica mendeliana con piselli.",
    href: "https://mendelpeas.vercel.app/",
    status: "Live",
    accent: "yellow",
  },
  {
    name: "Cheat Stories",
    description: "Racconti interattivi basati su scelte e conseguenze.",
    href: "https://cheat-stories.vercel.app/",
    status: "Live",
    accent: "red",
  },
  {
    name: "Specimen",
    description:
      "Gioco combinatorio ispirato alla genetica umana: genoma 4×4, regola TTE-T4, fenotipo a 6 caratteri e avatar interattivo.",
    href: "https://specimen-t3oh.vercel.app/",
    status: "Live",
    accent: "amber",
  },
];

// Ricordarsi di aggiornare la lista dei colori in app/globals.css se si aggiungono nuovi progetti con accenti diversi.

export default function Home() {
  return (
    <main className="shell">
      <section className="intro" aria-labelledby="page-title">
        <p className="kicker">bennibenis-projects</p>
        <h1 id="page-title">I miei progetti</h1>
      </section>

      <section className="project-grid" aria-label="Link ai progetti">
        {projects.map((project) => (
          <article
            className={`project-card accent-${project.accent} ${
              project.href ? "" : "is-disabled"
            }`}
            key={project.name}
          >
            <span className="status">{project.status}</span>
            <span className="card-title">{project.name}</span>
            <span className="card-description">{project.description}</span>
            {project.href ? (
              <a
                className="open-link"
                href={project.href}
                rel="noreferrer"
                target="_blank"
              >
                Apri
                <span aria-hidden="true">-&gt;</span>
              </a>
            ) : (
              <span className="open-link is-muted">URL pubblico mancante</span>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}
