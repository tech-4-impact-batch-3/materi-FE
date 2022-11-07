import React, { useContext, useState } from "react";
import { KeranjangCountContext } from "../KeranjangCountProvider";

function Counter() {
  const { keranjangCount, setKeranjangCount } = useContext(KeranjangCountContext)
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setKeranjangCount(keranjangCount + 1)
  };

  const decrement = () => {
    setCount(count - 1);
    setKeranjangCount(keranjangCount - 1)
  };

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Counter;
