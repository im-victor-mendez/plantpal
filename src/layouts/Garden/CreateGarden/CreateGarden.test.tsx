import { fireEvent, render, screen } from '@testing-library/react'
import CreateGarden from './CreateGarden'

describe('Create Garden Layout', () => {
	const layoutNull = <CreateGarden />
	const layout = <CreateGarden active={true} />
	const createGardenTestId = 'create-garden'
	const closeTestId = 'close-icon'

	test('should not display layout', () => {
		render(layoutNull)

		const createGarden = screen.queryByTestId(createGardenTestId)

		expect(createGarden).toBeNull()
	})

	test('should display close icon', () => {
		render(layout)

		const close = screen.getByTestId(closeTestId)

		expect(close).toBeDefined()
	})

	test('should display name, description and image input', () => {
		render(layout)

		const name = screen.getByPlaceholderText('Name')
		const description = screen.getByPlaceholderText('Description')
		const image = screen.getByText(/Select Image/)
		const inputs = [name, description, image]

		expect(inputs).toBeDefined()
	})

	test('should display create garden button', () => {
		render(layout)

		const createGarden = screen.getByText(/Create Garden/)

		expect(createGarden).toBeDefined()
	})

	test('should close layout when close icon is clicked', () => {
		render(layout)

		const createGarden = screen.queryByTestId(createGardenTestId)
		const close = screen.getByTestId(closeTestId)
		fireEvent.click(close)

		expect(createGarden).toBeNull()
	})

	test('should close layout when create garden button is clicked', () => {
		render(layout)

		const createGarden = screen.queryByTestId('create-garden')
		const createGardenButton = screen.getByText(/Create Garden/)
		fireEvent.click(createGardenButton)

		expect(createGarden).toBeNull()
	})
})
