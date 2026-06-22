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
    name: "RMHMC Visualizer",
    description:
      "Simulazione interattiva del campionamento Hamiltoniano Monte Carlo su varietà Riemanniana (RMHMC), con motore di calcolo in un Web Worker dedicato.",
    href: "https://rmhmc.vercel.app",
    status: "Live",
    accent: "blue",
  },
  {
    name: "Meiosi",
    description:
      "Animazione interattiva sulla meiosi: crossing-over e assortimento indipendente, con sintesi vocale che descrive ogni fase.",
    href: "https://meiosi.vercel.app/",
    status: "Live",
    accent: "green",
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
