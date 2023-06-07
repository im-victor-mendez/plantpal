import { render, screen } from '@testing-library/react'
import PlantPal from './PlantPal'

describe('PlantPal', () => {
	test('should display icon', () => {
		render(<PlantPal />)

		const icon = screen.getByTestId('icon')
		expect(icon).toBeDefined()
	})

	test('should display PlantPal', () => {
		const name = 'PlantPal'

		render(<PlantPal />)

		const title = screen.getByText(name)
		expect(title).toBeDefined()
	})
})
