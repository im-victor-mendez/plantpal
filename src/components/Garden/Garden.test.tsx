import GardenImage from '@assets/images/victor-malyushev-w_N-XCjiM0o-unsplash.jpg'
import { fireEvent, render, screen } from '@testing-library/react'
import Garden from './Garden'
import { BrowserRouter } from 'react-router-dom'

describe('Garden Component', () => {
	const nullComponent = (
		<BrowserRouter>
			<Garden description={null} image={null} name={''} path={''} />
		</BrowserRouter>
	)

	const gardenTestId = 'garden'
	const imageSubstituteTestId = 'image-substitute'
	const descriptionTestId = 'garden-description'

	test('should display Garden component', () => {
		render(nullComponent)

		const garden = screen.getByTestId(gardenTestId)

		expect(garden).toBeDefined()
	})

	test('should display Garden name', () => {
		const gardenName = 'Garden Name'
		render(
			<BrowserRouter>
				<Garden description={null} image={null} name={gardenName} path={''} />
			</BrowserRouter>
		)

		const name = screen.getByText(gardenName)

		expect(name).toBeDefined()
	})

	test('should display Garden image', () => {
		render(
			<BrowserRouter>
				<Garden description={null} image={GardenImage} name={''} path={''} />
			</BrowserRouter>
		)

		const image = screen.getByRole('img')

		expect(image).toBeDefined()
	})

	test("should display Garden image substitute when image isn't defined", () => {
		render(nullComponent)

		const imageSubstitute = screen.getByTestId(imageSubstituteTestId)

		expect(imageSubstitute).toBeDefined()
	})

	test('should display Garden description', () => {
		const gardenDescription = 'Garden Description'
		render(
			<BrowserRouter>
				<Garden
					description={gardenDescription}
					image={null}
					name={''}
					path={''}
				/>
			</BrowserRouter>
		)

		const description = screen.getByText(gardenDescription)

		expect(description).toBeDefined()
	})

	test('should not display Garden description when is null', () => {
		render(nullComponent)

		const description = screen.queryByTestId(descriptionTestId)

		expect(description).toBeNull()
	})

	test('should navigate to Garden path when component is clicked', () => {
		const path = '/garden-name'

		render(
			<BrowserRouter>
				<Garden description={null} image={null} name={''} path={path} />
			</BrowserRouter>
		)

		const garden = screen.getByTestId(gardenTestId)

		fireEvent.click(garden)

		expect(window.location.pathname).toBe(path)
	})
})
