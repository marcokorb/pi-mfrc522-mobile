import React, { createContext, useContext, useReducer } from 'react';

export const AppContext = createContext();

// Here props are unpacked
export const AppProvider = ({reducer, initialState, children}) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
);

export const useStateValue = () => useContext(AppContext);