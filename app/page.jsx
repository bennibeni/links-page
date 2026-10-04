import { PROJECT_TOPICS } from "../data/project-schema.mjs";
import { projects } from "../data/projects.mjs";
import RandomProjectImage from "./random-project-image";

function ProjectCard({ project }) {
  const Card = project.href ? "a" : "article";
  const linkProps = project.href
    ? { href: project.href, rel: "noreferrer", target: "_blank" }
    : {};
  const displayName = project.isPrivate
    ? project.name.replace(/\s+\(private\)$/i, "")
    : project.name;

  return (
    <Card
      className={`project-card accent-${project.accent}`}
      {...linkProps}
    >
      <span className="card-name">
        {displayName}
        {project.isPrivate ? (
          <span className="status-badge badge-private">(private)</span>
        ) : null}
        {project.isNew ? (
          <span className="status-badge badge-new">NEW!</span>
        ) : null}
        {project.isUpdated ? (
          <span className="status-badge badge-updated">Updated!</span>
        ) : null}
        {project.isInProgress ? (
          <span className="status-badge badge-in-progress">In Progress</span>
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
  const projectsByTopic = PROJECT_TOPICS.map((topic) => ({
    topic,
    projects: projects.filter((project) => project.topic === topic),
  })).filter(({ projects: topicProjects }) => topicProjects.length > 0);
  const randomProjectHrefs = projects
    .filter((project) => project.topic !== "Accesso limitato" && project.href)
    .map((project) => project.href);

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
        <div className="hero-visual">
          <RandomProjectImage hrefs={randomProjectHrefs} />
          <span
            className="hero-count"
            aria-label={`${projects.length} progetti`}
          >
            {count}
          </span>
        </div>
      </header>

      {projectsByTopic.map(({ topic, projects: topicProjects }) => (
        <section
          className="topic-section"
          aria-labelledby={`topic-${PROJECT_TOPICS.indexOf(topic)}`}
          key={topic}
        >
          <header className="topic-header">
            <h2
              className="topic-title"
              id={`topic-${PROJECT_TOPICS.indexOf(topic)}`}
            >
              {topic}
            </h2>
            <span className="topic-count">
              {String(topicProjects.length).padStart(2, "0")}
            </span>
          </header>
          <div className="project-grid" aria-label={`Progetti: ${topic}`}>
            {topicProjects.map((project) => (
              <ProjectCard project={project} key={project.name} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
