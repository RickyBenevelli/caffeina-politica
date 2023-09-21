import React, { createContext, useState } from 'react';

export const EventContext = createContext("");

const EventContextProvider = ({children}) => {
  const [selected, setSelected] = useState(4)

  return (
    <EventContext.Provider value={{selected, setSelected}}>{children}</EventContext.Provider>
  )
}

export default EventContextProvider