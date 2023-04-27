import React from 'react'

import Presentazione from './Presentazione'
import Title from './Title'

const AboutUs = () => {
  return (
    <section id='about-us' className='bg-slate-50 py-16'>
        <div className='pt-10 lg:px-5 max-w-[1350px] m-auto'>
            <Title title='ABOUT US' background='ABOUT US' />
            {dataFounder.map((founder, index) => (
                <Presentazione key={index} reverse={(index+1) % 2 === 0} founder={founder}/>
            ))}
        </div>
    </section>
  )
}

export default AboutUs


const dataFounder = [
  {
    name: "Elia Campanini",
    image: "/profiles/elli.webp",
    description: `Ho vent'anni, studio scienze politiche, sociali e internazionali a Bologna e voglio sempre comprendere il perchè, di tutto. Il mio interesse alla politica, al sociale, all'argomentare e al dibattere si lega anche a una domanda: "la politica" può ancora cambiare qualcosa? A Caffeina Politica cercherò di darmi una risposta e di comprendere se, nonostante le divisioni sempre più marcate nella società, il confronto è ancora possibile.`
  },
  {
    name: "Gabriele Consolini",
    image: "/profiles/cons.webp",
    description: "Mi chiamo Gabriele, e ho 23 anni. Sono convinto che sia fondamentale, nella vita di tutti i giorni, e quindi anche per approcciarsi a temi di politica e attualità, partire da un dibattito informato, basato sui dati reali. Per questo credo in Caffeina Politica, per approcciarsi a qualsiasi tema in maniera non ideologica, ma razionale."
  },
  {
    name: "Gaia Foschi",
    image: "/profiles/gaia.webp",
    description: "Mi chiamo Gaia, ho 20 anni e studio Sviluppo e Cooperazione Internazionale a Bologna. Mi sono interessata inizialmente ai temi sociali, come i diritti umani, per poi arrivare alla politica, essendo strettamente collegati. A Caffeina politica affrontiamo temi molto importanti, per comprendere punti di vista molto diversi, anche attraverso dati e grafici."
  },
  {
    name: "Riccardo Benevelli",
    image: "/profiles/ricky.webp",
    description: `Studio informatica a Trento e faccio scout nel gruppo di RE2. Ritengo l'interessamento politico e civile un valore e un dovere per essere cittadini attivi all'interno della nostra società. Tramite Caffeina Politica desidero portare avanti un dibattito e un confronto costruttivo, che possano arricchirmi e farmi vedere le cose da nuovi punti di vista`
  },
]