import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <MyContext.Provider value={{ cart, setCart}}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyState = () => useContext(MyContext);