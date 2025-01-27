import { createContext, useState, useEffect } from "react";


const DataContext = createContext({});

export const DataProvider = ({ children }:Props) => {
  return (<DataContext.Provider value={{

  }}>
    {children}
    </DataContext.Provider/>
)
}