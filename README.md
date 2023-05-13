# Site of Caffeina Politica

This is the source code of the website [Caffeina Politica](http://caffeinapolitica.netlify.app).

---

### ORGANIZATION OF THE REPOSITORY

* components
* pages
    * posts
        * [slug].js
    * index.js
    * _app.js
    * _document.js
* public
    * images
        * the-line
    * profiles
* styles
* utils
    * index.js

When a new post is added you have to put the photos in the `public/images/nameOfThePost` folder
Folder `public/profiles` contains the photos of the authors. These photos have to be squared.

yarn add nextjs-google-analytics to the project

yarn add SWR

```yarn add dayjs/locale/it```


Per aggiungere i tag bisogna farlo nel file json dedicato, inserendo anche il colore desiderato. 

`yarn add @vercel/analytics`

`yarn add next-seo`

`gatsby-plugin-mdx` per le note a piè di pagina

### SEO:
- Open Graph
- Twitter Cards
- Sitemap
- Robots.txt
- Schema.org JSON-LD
- role="main" per il main content

---
### TO DO:
- [ ] aggiungere una flag `evento pronto` per decidere quando mostrare i dati di un evento futuro
- [ ] bolla nella homepage
- [ ] aggiungere l'override dei link negli articoli

- [ ] animazioni (:hover)
- [ ] transizioni


- [ ] tab search
- [ ] commentare tutto il codice e documentare


- [ ] questione copyright foto (chiedere a Geopop)
- [ ] numeri di bibliografia 
- [x] lo spazio di dibattito pubblico (senza Reggio Emilia)
- [ ] chiedere il workflow di berlino magazine a Viola 
- [ ] a norma (privacy)
- [ ] foto su il progetto 
- [ ] ospiti prox evento
- [ ] tempo di lettura (fallo diventare 375 words X minute)
- [ ] cambia titolo le carceri in minuscolo
- [ ] tasto proponi un evento

### BUGS:

### SUGGERIMENTI BENNI
- [ ] logo dentro un cerchio, scritta grande con "Caffeina Politica"
- [ ] bolle diverse? (dinamiche?)
- [ ] text decoration? (wawy)