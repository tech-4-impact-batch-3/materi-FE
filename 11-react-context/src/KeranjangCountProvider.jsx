import React, { createContext, useState } from 'react'

export const KeranjangCountContext = createContext()

function KeranjangCountProvider({children}) {
  const [keranjangCount, setKeranjangCount] = useState(0)

  return (
    <KeranjangCountContext.Provider value={{keranjangCount, setKeranjangCount}}>
      {children}
    </KeranjangCountContext.Provider>
  )
}

export default KeranjangCountProvider