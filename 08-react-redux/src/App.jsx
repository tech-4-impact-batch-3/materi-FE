import { useState } from 'react'
import Keranjang from './components/Keranjang'
import ListProduct from './components/ListProduct'
import SummaryPembelian from './components/SummaryPembelian'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Keranjang />
      <br />

      <ListProduct />
      <br />

      <SummaryPembelian/>
    </div>
  )
}

export default App
