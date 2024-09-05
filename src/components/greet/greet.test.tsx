import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"


test('Greet renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/Hello/)
    expect(textElement).toBeInTheDocument()
})

// test('Greet render with name', () => {
//     render(<Greet name='Akin' />)
//     const textElement = screen.getByText('Hello Akin')
//     expect(textElement).toBeInTheDocument()
// })