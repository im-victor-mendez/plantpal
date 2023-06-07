import { screen, render } from '@testing-library/react'
import Input, { InputToggle as Toggle } from './Input'

describe('Input Components', () => {
	describe('Default', () => {
		test('should display placeholder', () => {
			const placeholder = 'Placeholder'

			render(
				<Input
					placeholder={placeholder}
					setValue={function (): void {
						throw new Error('Function not implemented.')
					}}
				/>
			)

			const element = screen.getByPlaceholderText(placeholder)
			expect(element).toBeDefined()
		})
	})

	describe('Toggle', () => {
		test('should display name', () => {
			const name = 'Toggle Name'

			render(
				<Toggle
					name={name}
					values={[]}
					setValue={function (): void {
						throw new Error('Function not implemented.')
					}}
				/>
			)

			const element = screen.getByText(name)

			expect(element).toBeDefined()
		})
	})
})
