import { fireEvent, render, screen } from '@testing-library/react'
import NavBar, { pagesToHide } from './NavBar'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

describe('NavBar Layout', () => {
	const testId = 'nav-bar'
	const element = (
		<BrowserRouter>
			<NavBar />
		</BrowserRouter>
	)
	const elementToHide = (
		<MemoryRouter initialEntries={pagesToHide}>
			<NavBar />
		</MemoryRouter>
	)

	test('should display', () => {
		render(element)
		const navBar = screen.getByTestId(testId)
		expect(navBar).toBeDefined()
	})

	test('should hide in specific pages', () => {
		render(elementToHide)

		const navBar = screen.queryByTestId(testId)
		expect(navBar).toBeNull()
	})

	test('should display correct icon button links for each page', () => {
		render(element)

		const homeLink = screen.getByTestId('home')
		expect(homeLink).toBeDefined()

		const calendarLink = screen.getByTestId('calendar')
		expect(calendarLink).toBeDefined()

		const plantsLink = screen.getByTestId('plants')
		expect(plantsLink).toBeDefined()

		const accountLink = screen.getByTestId('account')
		expect(accountLink).toBeDefined()
	})

	// eslint-disable-next-line max-len
	test('should navigate to correct page when icon button link is clicked', () => {
		render(element)

		const homeLink = screen.getByTestId('home')
		fireEvent.click(homeLink)
		expect(window.location.pathname).toBe('/home')

		const calendarLink = screen.getByTestId('calendar')
		fireEvent.click(calendarLink)
		expect(window.location.pathname).toBe('/calendar')

		const plantsLink = screen.getByTestId('plants')
		fireEvent.click(plantsLink)
		expect(window.location.pathname).toBe('/plants')

		const accountLink = screen.getByTestId('account')
		fireEvent.click(accountLink)
		expect(window.location.pathname).toBe('/account')
	})
})
