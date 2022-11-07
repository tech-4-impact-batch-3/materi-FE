import React, { useContext } from 'react'
import { KeranjangCountContext } from '../KeranjangCountProvider'

function Keranjang() {
  const stateKeranjang = useContext(KeranjangCountContext)
  const totalKeranjang = stateKeranjang.keranjangCount

  // console.log(tes)

  return (
    <div>
      <span>Keranjang</span>
      <span> {totalKeranjang}</span>
    </div>
  )
}

export default Keranjang