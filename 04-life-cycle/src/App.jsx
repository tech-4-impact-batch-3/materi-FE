import { useEffect } from "react";
import { useState } from "react";
import ListDigimon from "./components/ListDigimon";

function App() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  console.log(1, "init");

  useEffect(() => {
    console.log(3, "update")
  }, [toggle1])
  // [state] -> pemicu utk jalankan side effect

  return (
    
    <div className="App">
      {console.log(2, "return")}
      <button onClick={() => setToggle1(!toggle1)}>
        Toggle 1 {toggle1 + ""}
      </button>

      <button onClick={() => setToggle2(!toggle2)}>
        Toggle 2 {toggle2 + ""}
      </button>

      <ListDigimon />
    </div>
  );
}

export default App;
