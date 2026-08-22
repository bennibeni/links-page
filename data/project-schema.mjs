export const PROJECT_ACCENTS = new Set([
  "amber",
  "blue",
  "crimson",
  "cyan",
  "emerald",
  "fuchsia",
  "green",
  "indigo",
  "magenta",
  "orange",
  "pink",
  "red",
  "rose",
  "sky",
  "slate",
  "teal",
  "violet",
  "yellow",
]);

const PROJECT_FIELDS = new Set([
  "name",
  "description",
  "href",
  "accent",
  "isNew",
  "isUpdated",
]);

function requireText(value, field, index, errors) {
  if (typeof value !== "string" || !value.trim()) {
    errors.push(`Progetto ${index + 1}: "${field}" deve essere un testo non vuoto.`);
    return "";
  }

  return value.trim();
}

function normalizeProject(project, index, errors) {
  if (!project || typeof project !== "object" || Array.isArray(project)) {
    errors.push(`Progetto ${index + 1}: la voce deve essere un oggetto.`);
    return null;
  }

  for (const field of Object.keys(project)) {
    if (!PROJECT_FIELDS.has(field)) {
      errors.push(`Progetto ${index + 1}: campo sconosciuto "${field}".`);
    }
  }

  const name = requireText(project.name, "name", index, errors);
  const description = requireText(
    project.description,
    "description",
    index,
    errors,
  );
  const href = requireText(project.href, "href", index, errors);
  const accent = requireText(project.accent, "accent", index, errors);
  const isNew = project.isNew === true;
  const isUpdated = project.isUpdated === true;

  if (accent && !PROJECT_ACCENTS.has(accent)) {
    errors.push(`Progetto "${name || index + 1}": accent "${accent}" inesistente.`);
  }

  if (isNew && isUpdated) {
    errors.push(`Progetto "${name || index + 1}": isNew e isUpdated non possono coesistere.`);
  }

  if (href) {
    try {
      const url = new URL(href);
      if (!new Set(["http:", "https:"]).has(url.protocol)) {
        errors.push(`Progetto "${name || index + 1}": href deve usare HTTP o HTTPS.`);
      }
      if (url.pathname.includes("//")) {
        errors.push(`Progetto "${name || index + 1}": href contiene un doppio slash nel percorso.`);
      }
    } catch {
      errors.push(`Progetto "${name || index + 1}": href non è un URL valido.`);
    }
  }

  return Object.freeze({
    name,
    description,
    href,
    accent,
    ...(isNew ? { isNew: true } : {}),
    ...(isUpdated ? { isUpdated: true } : {}),
  });
}

export function validateProjects(input) {
  if (!Array.isArray(input)) {
    throw new TypeError("projects deve essere un array.");
  }

  const errors = [];
  const projects = input
    .map((project, index) => normalizeProject(project, index, errors))
    .filter(Boolean);
  const names = new Set();
  const urls = new Set();

  for (const project of projects) {
    const normalizedName = project.name.toLocaleLowerCase("it");
    if (names.has(normalizedName)) {
      errors.push(`Nome duplicato: "${project.name}".`);
    }
    names.add(normalizedName);

    const normalizedUrl = project.href.replace(/\/$/, "").toLocaleLowerCase("en");
    if (urls.has(normalizedUrl)) {
      errors.push(`URL duplicato: "${project.href}".`);
    }
    urls.add(normalizedUrl);
  }

  if (errors.length) {
    throw new Error(`Dati dei progetti non validi:\n- ${errors.join("\n- ")}`);
  }

  return Object.freeze(projects);
}
