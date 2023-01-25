import React from 'react'
import NavBar from './NavBar'

const Layout = ({children}) => {
  // FIXME: i titoli vanno sopra la navbar
  return (
    <div>
      <NavBar /> 
      {children}
    </div>
  )
}

export default Layout