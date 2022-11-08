import React, { createContext, useReducer, useState } from "react";

export const CounterContext = createContext();

function Counte1Provider({ children }) {
  const [count, setCount] = useState(0)

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

export default Counte1Provider;
