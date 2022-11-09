const {sum, checkGG, isOdd} = require('./app');

test('menjumlahkan angka pada sum()', () => {
  expect(sum(0, 0)).toBe(0)
  expect(sum(0, 1)).toBe(1)
  expect(sum(1, 1)).toBe(2)
  expect(sum(2, 2)).toBe(4)
})

test('check ganjil atau genap', () => {
  expect(checkGG(1)).toBe("Ganjil")
  expect(checkGG(2)).toBe("Genap")
  expect(checkGG(3)).toBe("Ganjil")
})

test('check ganjil', () => {
  expect(isOdd(1)).toBeTruthy()
  expect(isOdd(2)).toBeFalsy()
  expect(isOdd(3)).toBeTruthy()
})
