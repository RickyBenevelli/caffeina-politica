# Site of Caffeina Politica

This is the source code of the website [Caffeina Politica](http://caffeinapolitica.netlify.app).

## Technologies

This website is built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). The articles are written in [MDX](https://mdxjs.com/) and rendered with [next-mdx-remote](https://www.npmjs.com/package/next-mdx-remote), so they can also be stored elsewhere in the future. The data of the articles are contained in the frontmatter and extrapolated with [gray-matter](https://github.com/jonschlinkert/gray-matter). Using [reading-time](https://www.npmjs.com/package/reading-time) on the content of the articles, I calculate the reading time of each one.

[Nodemailer](https://nodemailer.com/) was used to send the content of a question form to the email of the association. The form is handled with [react-hook-form](https://www.react-hook-form.com/).

## Structure

``` bash
.
├── README.md
├── components
│   ├── AboutUs.jsx
│   ├── Articoli.jsx
│   ├── Bibliography.jsx
│   ├── Calendar.jsx
│   ├── CalendarData.jsx
│   ├── Card.jsx
│   ├── Contatti.jsx
│   ├── EventContext.jsx
│   ├── Eventi.jsx
│   ├── Footer.jsx
│   ├── Grid.jsx
│   ├── Hero.jsx
│   ├── HeroArticolo.jsx
│   ├── Layout.jsx
│   ├── NavBar.jsx
│   ├── Post.jsx
│   ├── PostHeading.jsx
│   ├── Presentazione.jsx
│   ├── Project.jsx
│   ├── Signature.jsx
│   ├── Subtitle.jsx
│   ├── Suggested.jsx
│   └── Title.jsx
├── email.html
├── json
│   ├── events.json
│   ├── privacy.json
│   └── tags.json
├── lib
│   ├── api.js
│   └── nodemailer.js
├── next-sitemap.config.js
├── next.config.js
├── package.json
├── pages
│   ├── _app.js
│   ├── _document.js
│   ├── api
│   │   ├── events.js
│   │   └── question.js
│   ├── index.js
│   ├── posts
│   │   └── [slug].js
│   ├── privacy-policy.js
│   └── question.js
├── postcss.config.js
├── posts
│   ├── astensionismo.mdx
│   ├── carceri-in-italia.mdx
│   ├── carne-sintetica.mdx
│   ├── il-caso-assange.mdx
│   ├── il-problema-dell-obiezione-di-coscienza.mdx
│   ├── operazione-gladio.mdx
│   ├── pnrr.mdx
│   ├── tangentopoli.mdx
│   └── the-line.mdx
├── privacy.html
├── public
│   ├── blob copia.svg
│   ├── blob.svg
│   ├── favicon
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-256x256.png
│   │   ├── apple-touch-icon.png
│   │   ├── browserconfig.xml
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon.ico
│   │   ├── mstile-150x150.png
│   │   ├── safari-pinned-tab.svg
│   │   └── site.webmanifest
│   ├── hero.webp
│   ├── images
│   │   ├── carceri-in-italia
│   │   │   ├── camere-detentive.png
│   │   │   ├── misure-alternative.png
│   │   │   └── presenze-carcere.png
│   │   ├── carne-sintetica
│   │   │   ├── carbon-footprint.jpeg
│   │   │   ├── land-use.jpeg
│   │   │   └── water-footprint.jpeg
│   │   └── the-line
│   │       └── the-line.webp
│   ├── logo.png
│   ├── profiles
│   │   ├── cons.webp
│   │   ├── elli.webp
│   │   ├── gaia.webp
│   │   └── ricky.webp
│   ├── progetto
│   │   ├── foto1.webp
│   │   ├── foto2.webp
│   │   └── foto3.webp
│   ├── robots.txt
│   └── sitemap.xml
├── styles
│   └── globals.css
├── tailwind.config.js
├── template.mdx
├── utils
│   └── index.js
└── yarn.lock

18 directories, 87 files
```


## How to add new article
1. Create a new .mdx file inside ```posts``` folder (_the file name will be the article slug_)
2. Copy the content of ```template.mdx``` inside the new file and fill the frontmatter with the article data (title, author, date, tags, etc.)
3. Write the article content in markdown
4. Add the article local images inside ```public/images/{article-slug}``` folder
5. For all the non-local images that are used in the article (that is, for all the url to images used), the referring domain must be added inside ```next.config.js```