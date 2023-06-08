import { fireEvent, render, screen } from '@testing-library/react'
import ForgotPassword from './ForgotPassword'

describe('Forgot Password page', () => {
	test('should display PlantPal component (App name and icon)', () => {
		render(<ForgotPassword />)

		const plantpal = screen.getByText('PlantPal')
		expect(plantpal).toBeDefined()
	})

	test('should display instructions', () => {
		render(<ForgotPassword />)

		const instructions = screen.getByTestId('instructions')
		expect(instructions).toBeDefined()
	})

	test('should display Email input', () => {
		render(<ForgotPassword />)

		const email = screen.getByPlaceholderText('Email')
		expect(email).toBeDefined()
	})

	test('should display Send Email button', () => {
		render(<ForgotPassword />)

		const button = screen.getByText('Send Email')
		expect(button).toBeDefined()
	})
})
