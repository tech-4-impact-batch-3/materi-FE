// Soal | buat fungsi penjumlahan dengan 2 parameter

// function sum(x, y) {
//   return x + y
// }

const sum = (x, y) => x + y

const checkGG = (n) => {
  if (n % 2 == 1) return "Ganjil"
  return "Genap"
}

const isOdd = (n) => {
  if (n % 2 == 1) return true
}

module.exports = {sum, checkGG, isOdd}