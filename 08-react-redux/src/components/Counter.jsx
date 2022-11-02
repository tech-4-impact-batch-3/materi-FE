import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  incrementKeranjang,
  decrementKeranjang,
} from "../redux/action/keranjangAction";

function Counter() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const increment = () => {
    dispatch(incrementKeranjang())
    setCount(count + 1);
  };

  const decrement = () => {
    dispatch({
      type: "DECREMENT_KERANJANG"
    })
    setCount(count - 1);
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
