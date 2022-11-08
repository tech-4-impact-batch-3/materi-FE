import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Counter2Provider from "./context/Counter2Provider";
import Counter1Provider from "./context/Counter1Provider";
import TodoProvider from "./context/TodoProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <TodoProvider>
    <Counter2Provider>
      <Counter1Provider>
        <App />
      </Counter1Provider>
    </Counter2Provider>
  </TodoProvider>
  // </React.StrictMode>
);
