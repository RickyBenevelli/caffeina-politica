import React from 'react'

import Presentazione from './Presentazione'
import Title from './Title'

const AboutUs = () => {
  return (
    <section id='about-us' className='bg-slate-50 py-16'>
        <div className='pt-10 lg:px-5 max-w-[1350px] m-auto'>
            <Title title='ABOUT' background='US' />
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
    image: "/profiles/profilo1.jpeg",
    description: `Ho vent'anni, studio scienze politiche, sociali e internazionali a Bologna e voglio sempre comprendere il perchè, di tutto.Il mio interesse alla politica, al sociale, all'argomentare e al dibattere si lega anche a una domanda: "la politica" può ancora cambiare qualcosa? A Caffeina Politica cercherò di darmi una risposta e di comprendere se, nonostante le divisioni sempre più marcate nella società, il confronto è ancora possibile.`
  },
  {
    name: "Gabriele Consolini",
    image: "/profiles/profilo2.jpeg",
    description: ""
  },
  {
    name: "Gaia Foschi",
    image: "/profiles/profilo4.jpeg",
    description: ""
  },
  {
    name: "Riccardo Benevelli",
    image: "/profiles/profilo5.jpeg",
    description: ""
  },
]