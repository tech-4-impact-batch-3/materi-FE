import React from 'react'
import { useSelector } from 'react-redux'

function SummaryPembelian() {
  const {totalKeranjang} = useSelector(state => state)

  return (
    <div>
      <h1>Summary Pembelian</h1>

      <h2>jumlah barang yg dibeli ada {totalKeranjang}</h2>
    </div>
  )
}

export default SummaryPembelian