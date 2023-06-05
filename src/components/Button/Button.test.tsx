import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  test('renders button with display text', () => {
    const displayText = 'Click me'
    const { getByText } = render(<Button display={displayText} functionality={function (): void {
        throw new Error('Function not implemented.')
    } } />)
    const buttonElement = getByText(displayText)

    expect(buttonElement).toBeDefined()
  })

  test('calls functionality prop when button is clicked', () => {
    const functionalityMock = vi.fn()
    const { getByText } = render(<Button display="Click me" functionality={functionalityMock} />)
    const buttonElement = getByText('Click me')

    fireEvent.click(buttonElement)

    expect(functionalityMock).toHaveBeenCalled()
  })
})