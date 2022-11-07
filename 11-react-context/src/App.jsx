import { useContext } from "react";
import Keranjang from "./components/Keranjang";
import ListProduct from "./components/ListProduct";
import SummaryPembelian from "./components/SummaryPembelian";
import { UserContext } from "./UserProvider";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <Keranjang />
      <br />

      <ListProduct />
      <SummaryPembelian />

      <h1>{user.name}</h1>
    </div>
  );
}

export default App;
