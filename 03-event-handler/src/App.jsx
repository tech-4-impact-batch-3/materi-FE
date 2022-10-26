import { useState } from "react";
import Card from "./components/Card";
import Counter from "./components/Counter";
import ListUser from "./components/ListUser";

function App() {
  // utk conditional rendering
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      {/* munculin button klo belum login */}
      {!isLogin && <button onClick={() => setIsLogin(true)}>Login</button>}

      <br />

      {/* jika sudah login, munculkan counter  */}
      {isLogin ? <Counter /> : <span>login dulu cuuuy...</span>}

      {/* jika sudah login, munculkan ListUser  */}
      {isLogin && <ListUser />}

    </div>
  );
}

export default App;
