import React from 'react'
import { useSelector } from 'react-redux'

function Keranjang() {
  const {totalKeranjang} = useSelector(state => state)

  // console.log(state)

  return (
    <div>
      <span>Keranjang</span>
      <span> {totalKeranjang}</span>
    </div>
  )
}

export default Keranjang