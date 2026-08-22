# Links page

Homepage pubblica che raccoglie i link ai progetti Vercel.

## URL

<https://links-page-bennibeni.vercel.app/>

## Sviluppo locale

npm install
npm run dev

Poi apri [http://localhost:3000](http://localhost:3000).

## Aggiornare i link

Modifica l'array `rawProjects` in `data/projects.mjs`.
Ogni progetto ha i campi obbligatori `name`, `description`, `href` e
`accent`. I campi facoltativi `isNew` e `isUpdated` mostrano il relativo
badge nella scheda.

Gli accent disponibili sono definiti in `app/globals.css` dalle classi
`.accent-*`.

Prima del push esegui il controllo completo:

```sh
npm run check
```

Il comando verifica i dati dei progetti, esegue ESLint e genera la build di
produzione. Per controllare soltanto l'elenco dei progetti usa
`npm run validate`.

git add .
git commit -m "feat: add Specimen to projects"
git push

## Deploy su Vercel

Il progetto è collegato al repo `bennibeni/links-page`.
Ogni push su `main` triggera un redeploy automatico su Vercel.
