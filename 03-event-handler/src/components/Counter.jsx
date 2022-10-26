import { useState } from "react";

function Counter () {
  const [count, setCount] = useState(0) // benar
  // let count = 0                      // salah

  const increment = () => {
    setCount(count + 1)   // benar
    // count = count + 1  // salah
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <>
      {/* diberi event click */}
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}

export default Counter