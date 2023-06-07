import { render, screen } from '@testing-library/react'
import Account from './Account'
import { Provider } from 'react-redux'
import store from '@store/store'
import { BrowserRouter } from 'react-router-dom'

describe('Account Page', () => {
	const element = (
		<BrowserRouter>
			<Provider store={store}>
				<Account />
			</Provider>
		</BrowserRouter>
	)

	// eslint-disable-next-line max-len
	test("in initial state should display NoAccount when user isn't logged", () => {
		render(element)

		const noAccount = screen.getByTestId('no-account')
		expect(noAccount).toBeDefined()
	})

	// eslint-disable-next-line max-len
	test("in initial state shouldn't display AccountInfo when user isn't logged", () => {
		render(element)

		const accountInfo = screen.queryByTestId('account-info')
		expect(accountInfo).toBeNull()
	})

	// eslint-disable-next-line max-len
	test('in initial state should display: no-image, message, log-in and create-account elements', () => {
		render(element)

		const noImage = screen.getByTestId('no-image')
		expect(noImage).toBeDefined()
	})
})
