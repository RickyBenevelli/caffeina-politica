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

---
### TO DO:

- [ ] calendario
- [x] ordinare le date
- [x] formattare le date
- [x] componenti react dentro mdx
- [ ] sezione about us
- [ ] sezione social
- [ ] componente bibliografia
- [ ] navbar
- [ ] responsive
- [x] footer
- [ ] configurare pagina 404

- [ ] pagina eventi passati e link agli eventi sulle date del calendario

- [ ] animazioni (:hover)
- [ ] transizioni
- [ ] mandarlo a benni per correzione colori
- [ ] mandarlo a stefano per avere un parere
- [ ] ridurre il peso delle immagini
- [ ] articoli suggeriti in fondo all'articolo
- [ ] dark mode (forse non ha senso)
- [ ] tab search


BUGS:
- [ ] quando si è in fondo nella pagina e si aggiorna la scheda la navbar diventa trasparente: trovare un'altra proprietà js da controllare e non scrollY
- [x] i titoli si sovrappongono alla navbar
- [x] il footer non appare
- [ ] quando clicco su una pagina, il titolo della pagina viene coperto