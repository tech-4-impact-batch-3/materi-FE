import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

test("render counter", () => {
  render(<Counter/>)
  const decrementBtn = screen.getByText("-")
  const count = screen.getByText("0")
  const incrementBtn = screen.getByText("+")

  expect(decrementBtn).toBeInTheDocument()
  expect(count).toBeInTheDocument()
  expect(incrementBtn).toBeInTheDocument()
})

test('click increment button', () => { 
  render(<Counter/>)
  const incrementBtn = screen.getByText("+")
  const count = screen.getByText("0")

  expect(count.textContent).toBe("0")

  fireEvent.click(incrementBtn)
  expect(count.textContent).toBe("1")
})