export const INCREMENT_KERANJANG = "INCREMENT_KERANJANG"
export const DECREMENT_KERANJANG = "DECREMENT_KERANJANG"

export function incrementKeranjang() {
  console.log("action dipanggil")
  return {
    type: INCREMENT_KERANJANG
  }
}

export function decrementKeranjang() {
  return {
    type: DECREMENT_KERANJANG
  }
}