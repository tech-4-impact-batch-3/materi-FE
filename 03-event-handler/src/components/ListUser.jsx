import React, { useState } from 'react'
import Card from './Card'

function ListUser() {
  const [users, setUsers] = useState([
    {name: "Alpha", umur: 17},
    {name: "Beta", umur: 18},
    {name: "Charlie", umur: 19},
    {name: "Delta", umur: 20},
  ])

  return (
    <div>
      
      {/* before */}
      <Card nama="Auzan" umur="17" />
      <Card nama="Zann" umur="18" />

      {/* after */}
      {/* solusi loop data array lalu di tampilkan */}
      {users.map((item, index) => (
        <Card key={index} nama={item.name} umur={item.umur} />
      ))}

    </div>
  )
}

export default ListUser