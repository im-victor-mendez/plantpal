import { fireEvent, render, screen } from '@testing-library/react'
import CreateAccount from './CreateAccount'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@store/store'

describe('Create Account Page', () => {
	const element = (
		<BrowserRouter>
			<Provider store={store}>
				<CreateAccount />
			</Provider>
		</BrowserRouter>
	)

	describe('Display', () => {
		test('should display App name and icon', () => {
			render(element)

			const appInfo = screen.getByTestId('plantpal')
			expect(appInfo).toBeDefined()
		})

		test('should display Name, Email and Password inputs', () => {
			render(element)

			const nameInput = screen.getByPlaceholderText('Name')
			const emailInput = screen.getByPlaceholderText('Email')
			const passwordInput = screen.getByPlaceholderText('Password')

			const inputs = [nameInput, emailInput, passwordInput]
			expect(inputs).toBeDefined()
		})

		test('should display Create Account button', () => {
			render(element)

			const createAccount = screen.getByText('Create Account')
			expect(createAccount).toBeDefined()
		})

		// eslint-disable-next-line max-len
		test('should display "Already have account", Google method and "Forgot password"', () => {
			render(element)

			// eslint-disable-next-line max-len
			const alreadyHaveAccount = screen.getByTestId('already-have-account')
			const googleIcon = screen.getByTestId('google-icon')
			const forgotPassword = screen.getByTestId('forgot-password')

			// eslint-disable-next-line max-len
			const alternativeMethods = [
				alreadyHaveAccount,
				googleIcon,
				forgotPassword,
			]
			expect(alternativeMethods).toBeDefined()
		})
	})

	describe('Functionality', () => {
		// eslint-disable-next-line max-len
		test('should navigate to Login page when is clicked "Already have account"', () => {
			render(element)

			// eslint-disable-next-line max-len
			const alreadyHaveAccount = screen.getByTestId('already-have-account')
			fireEvent.click(alreadyHaveAccount)
			expect(window.location.pathname).toBe('/login')
		})

		// eslint-disable-next-line max-len
		test('should navigate to Forgot Password page when is clicked "Forgot Password"', () => {
			render(element)

			const forgotPassword = screen.getByTestId('forgot-password')
			fireEvent.click(forgotPassword)
			expect(window.location.pathname).toBe('/forgot-password')
		})
	})
})
