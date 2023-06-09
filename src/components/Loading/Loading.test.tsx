import { act, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Loading from './Loading'

describe('Loading Component', () => {
	const component = <Loading />
	const iconTestId = 'loading-icon'

	beforeEach(() => {
		vi.useFakeTimers()
	})

	test('should display App icon', () => {
		render(component)

		const icon = screen.getByTestId(iconTestId)
		expect(icon).toBeDefined()
	})

	test('should display "Loading" text', () => {
		render(component)

		const loading = screen.getByText('Loading')
		expect(loading).toBeDefined()
	})

	test('initial state should be true and set icon class active', () => {
		render(component)

		const icon = screen.getByTestId(iconTestId)

		expect(icon).toHaveClass('active')
	})

	test('should toggle "active" class of App icon', () => {
		render(component)

		const icon = screen.getByTestId(iconTestId)

		act(() => {
			vi.advanceTimersByTime(1000)
		})

		expect(icon).not.toHaveClass('active')

		act(() => {
			vi.advanceTimersByTime(1000)
		})

		expect(icon).toHaveClass('active')
	})
})
