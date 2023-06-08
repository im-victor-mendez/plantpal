import { render, screen } from '@testing-library/react'
import ForgotPassword from './ForgotPassword'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@store/store'

describe('Forgot Password page', () => {
	const element = (
		<BrowserRouter>
			<Provider store={store}>
				<ForgotPassword />
			</Provider>
		</BrowserRouter>
	)

	test('should display PlantPal component (App name and icon)', () => {
		render(element)

		const plantpal = screen.getByText('PlantPal')
		expect(plantpal).toBeDefined()
	})

	test('should display instructions', () => {
		render(element)

		const instructions = screen.getByTestId('instructions')
		expect(instructions).toBeDefined()
	})

	test('should display Email input', () => {
		render(element)

		const email = screen.getByPlaceholderText('Email')
		expect(email).toBeDefined()
	})

	test('should display Send Email button', () => {
		render(element)

		const button = screen.getByText('Send Email')
		expect(button).toBeDefined()
	})
})
