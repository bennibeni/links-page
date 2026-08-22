import { projects } from "../data/projects.mjs";

function ProjectCard({ project }) {
  const Card = project.href ? "a" : "article";
  const linkProps = project.href
    ? { href: project.href, rel: "noreferrer", target: "_blank" }
    : {};

  return (
    <Card
      className={`project-card accent-${project.accent}`}
      {...linkProps}
    >
      <span className="card-name">
        {project.name}
        {project.isNew ? (
          <span className="status-badge badge-new">NEW!</span>
        ) : null}
        {project.isUpdated ? (
          <span className="status-badge badge-updated">Updated!</span>
        ) : null}
      </span>
      <span className="card-description">{project.description}</span>
      {!project.href ? (
        <span className="missing-url">URL mancante</span>
      ) : null}
    </Card>
  );
}

export default function Home() {
  const count = String(projects.length).padStart(2, "0");

  return (
    <main className="shell">
      <header className="hero">
        <div>
          <p className="eyebrow">bennibenis-projects</p>
          <p className="eyebrow">
            Per commenti: <span>torredihanoi [at] gmail [dot] com</span>
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
          <ProjectCard project={project} key={project.name} />
        ))}
      </section>
    </main>
  );
}
