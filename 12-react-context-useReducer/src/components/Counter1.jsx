import React, { useContext } from "react";
import { CounterContext } from "../context/Counter1Provider";

// komponen ini terhubung dengan Counter1Provider
function Counter1() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCount(count - 1) }>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter1;
