# Links page

Homepage pubblica che raccoglie i link ai progetti Vercel.

## URL

<https://links-page-bennibeni.vercel.app/>

## Sviluppo locale

npm install
npm run dev

Poi apri [http://localhost:3000](http://localhost:3000).

## Aggiornare i link

Modifica l'array `projects` in `app/page.js`.
Ogni progetto ha i campi: `name`, `description`, `href`, `status`, `accent`.
Gli accent disponibili sono: `blue`, `green`, `amber`.

git add .
git commit -m "feat: add Specimen to projects"
git push

## Deploy su Vercel

Il progetto è collegato al repo `bennibeni/links-page`.
Ogni push su `main` triggera un redeploy automatico su Vercel.
