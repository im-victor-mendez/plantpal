import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from './Login'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@store/store'

/* eslint-disable max-len */
describe('Login Page', () => {
	const element = (
		<BrowserRouter>
			<Provider store={store}>
				<Login />
			</Provider>
		</BrowserRouter>
	)

	test('should display PlantPal component (app icon and app name)', () => {
		render(element)

		const plantpal = screen.getByText('PlantPal')
		expect(plantpal).toBeDefined()
	})

	test('should display email and password inputs', () => {
		render(element)

		const email = screen.getByPlaceholderText('Email')
		const password = screen.getByPlaceholderText('Password')
		const inputs = [email, password]

		expect(inputs).toBeDefined()
	})

	test('should display login button', () => {
		render(element)

		const button = screen.getByText('Login')
		expect(button).toBeDefined()
	})

	test('should display alternative methods', () => {
		render(element)

		const createAccount = screen.getByText(/create account/i)
		const googleIcon = screen.getByTestId('google-icon')

		const methods = [createAccount, googleIcon]

		expect(methods).toBeDefined()
	})

	test('should display forgot password', () => {
		render(element)

		const forgotPassword = screen.getByText(/forgot password/i)
		expect(forgotPassword).toBeDefined()
	})

	test('should navigate to Create Account page when "create account" is clicked', () => {
		render(element)

		const createAccount = screen.getByText(/create account/i)
		fireEvent.click(createAccount)

		expect(window.location.pathname).toBe('/create-account')
	})

	test('should navigate to Forgot Password page when "forgot password" is clicked', () => {
		render(element)

		const forgotPassword = screen.getByText(/forgot password/i)
		fireEvent.click(forgotPassword)

		expect(window.location.pathname).toBe('/forgot-password')
	})
})
