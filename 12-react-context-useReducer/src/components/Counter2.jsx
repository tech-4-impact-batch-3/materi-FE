import React, { useContext } from "react";
import { CounterContext } from "../context/Counter2Provider";

// komponen ini terhubung dengan Counter2Provider
function Counter() {
  const { 
    state, 
    increment, 
    decrement 
  } = useContext(CounterContext);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
