import React, { createContext, useState } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
  const [listOfDays, setListOfDays] = useState([
      ['2019-09-05', 'peito + biceps'],
      ['2019-09-04', 'perna'],
      ['2019-09-02', 'ombro'],
    ],
  );

  return (
    <Context.Provider value={{ listOfDays, setListOfDays }}>
      {children}
    </Context.Provider>
  );
}

export {
  Context,
  ContextProvider,
};
