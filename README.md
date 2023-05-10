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

---
### TO DO:
- [ ] aggiungere una flag `evento pronto` per decidere quando mostrare i dati di un evento futuro
- [ ] bolla nella homepage
- [ ] aggiungere l'override dei link negli articoli

- [ ] animazioni (:hover)
- [ ] transizioni


- [ ] tab search
- [ ] commentare tutto il codice e documentare

### BUGS:

### SUGGERIMENTI BENNI
- [ ] logo dentro un cerchio, scritta grande con "Caffeina Politica"
- [ ] bolle diverse? (dinamiche?)
- [ ] text decoration? (wawy)