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


Quando vengono aggiunti i tag, bisogna anche aggiungere una classe css che si chiami come il tag e che abbia come background-color il colore del tag
---
### TO DO:


- [ ] ridurre il peso delle immagini

- [ ] calendario
- [ ] pagina eventi passati e link agli eventi sulle date del calendario

- [ ] controllare se SWR devo metterlo come await

- [ ] ottimizzazioni SEO

- [ ] aggiungere una flag `evento pronto` per decidere quando mostrare i dati di un evento futuro


- [ ] responsive
- [x] ordinare le date
- [x] formattare le date
- [x] componenti react dentro mdx
- [x] sezione about us
- [x] sezione social
- [x] componente bibliografia
- [x] navbar
- [x] footer
- [x] configurare pagina 404
- [ ] bolla nella homepage


- [ ] animazioni (:hover)
- [ ] transizioni


- [ ] ridurre il peso delle immagini
- [x] articoli suggeriti in fondo all'articolo
- [ ] dark mode (forse non ha senso)
- [ ] tab search
- [ ] commentare tutto il codice e documentare
- [ ] google analytics

- [ ] controllare se si può gestire la cache con SWR


### BUGS:
- [ ] quando si è in fondo nella pagina e si aggiorna la scheda la navbar diventa trasparente: trovare un'altra proprietà js da controllare e non scrollY
- [x] i titoli si sovrappongono alla navbar
- [x] il footer non appare
- [ ] quando clicco su una pagina, il titolo della pagina viene coperto
- [ ] perché il sito non è indicizzato?
- [ ] se sono su un articolo e clicco su un link del menu non torno alla pagina principale
- [ ] navbar quando si è su un articolo

### SUGGERIMENTI BENNI
- [ ] logo dentro un cerchio, scritta grande con "Caffeina Politica"
x [ ] valutare se mettere i paragrafi giustificati a sinistra
- [ ] calendario alto fino al bottone
- [ ] cambiare il mindset dei titoli
- [ ] bolle diverse? (dinamiche?)
- [ ] parallax
x [ ] sfumatura alla navbar?
- [ ] font firma? sacramento reenie beanie (scrivere sull'ipad e importarlo come svg)
- [x] freccia bibbliografia senza sfondo (Hi...) basso e alto
- [ ] text decoration? (wawy)