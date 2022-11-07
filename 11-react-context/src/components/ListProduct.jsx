import React, { useState } from 'react'
import Counter from './Counter'

function ListProduct() {
  const [products, setProducts] = useState([
    {id: 1, nama: "buku"},
    {id: 2, nama: "pulpen"},
  ])

  return (
    <div>
      {products.map(item => (
        <div key={item.id}>
          <span>{item.nama}</span>
          <Counter />
        </div>
      ))}
    </div>
  )
}

export default ListProduct