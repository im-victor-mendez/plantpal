import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Top, { Back, BackWithSettings, Settings, TopTypes } from './Top'
import { BrowserRouter, useNavigate } from 'react-router-dom'

describe('Top Components', () => {
	describe('Default', () => {
		const className = 'top'

		test('should be DEFAULT type', () => {
			const { container } = render(
				<Top children={undefined} type={TopTypes.DEFAULT} />
			)

			const backType = container.firstChild
			expect(backType).toHaveClass(className)
		})

		test('should display children', () => {
			const text = 'Test Children'
			const children = <div>{text}</div>

			const { container } = render(
				<Top children={children} type={TopTypes.DEFAULT} />
			)

			const backType = container.firstChild
			expect(backType).toHaveClass(className)

			const childrenElement = screen.getByText(text)
			expect(childrenElement).toBeDefined()
		})
	})

	describe('Back', () => {
		const className = 'back'

		test('should be BACK type', () => {
			const { container } = render(
				<Back children={undefined} type={TopTypes.BACK} />
			)

			const backType = container.firstChild
			expect(backType).toHaveClass(className)
		})

		test('should display back icon', () => {
			const { container } = render(
				<Back children={undefined} type={TopTypes.BACK} />
			)

			const backType = container.firstChild
			expect(backType).toHaveClass(className)

			const icon = screen.getByTestId('back-icon')
			expect(icon).toBeDefined()
		})

		test('should display children', () => {
			const text = 'Test Children'
			const children = <div>{text}</div>

			const { container } = render(
				<Back children={children} type={TopTypes.BACK} />
			)

			const backType = container.firstChild
			expect(backType).toHaveClass(className)

			const childrenElement = screen.getByText(text)
			expect(childrenElement).toBeDefined()
		})

		test('should execute back function when BackIcon is clicked', () => {
			const mockBack = vi.spyOn(window.history, 'back')

			const { container } = render(
				<Back children={undefined} type={TopTypes.BACK} />
			)

			const backIcon = screen.getByTestId('back-icon')
			fireEvent.click(backIcon)

			const backType = container.firstChild
			expect(backType).toHaveClass(className)

			expect(mockBack).toBeCalledTimes(1)
			mockBack.mockRestore()
		})
	})

	describe('Back with Settings', () => {
		const className = 'back-settings'
		const element = (
			<BrowserRouter>
				<BackWithSettings />
			</BrowserRouter>
		)

		test('should be BACK_WITH_SETTINGS type', () => {
			const { container } = render(element)

			const backWithSettings = container.firstChild
			expect(backWithSettings).toHaveClass(className)
		})

		test('should display Back icon', () => {
			const { container } = render(element)

			const backWithSettings = container.firstChild
			expect(backWithSettings).toHaveClass(className)

			const icon = screen.getByTestId('back-icon')
			expect(icon).toBeDefined()
		})

		test('should display Settings icon', () => {
			const { container } = render(element)

			const backWithSettings = container.firstChild
			expect(backWithSettings).toHaveClass(className)

			const icon = screen.getByTestId('settings-icon')
			expect(icon).toBeDefined()
		})

		test('should execute back function when BackIcon is clicked', () => {
			const mockBack = vi.spyOn(window.history, 'back')

			const { container } = render(element)

			const backWithSettings = container.firstChild
			expect(backWithSettings).toHaveClass(className)

			const backIcon = screen.getByTestId('back-icon')
			expect(backIcon).toBeDefined()

			fireEvent.click(backIcon)

			expect(mockBack).toBeCalledTimes(1)
			mockBack.mockRestore()
		})

		// eslint-disable-next-line max-len
		test('should execute navigate to settings page function when SettingsIcon is clicked', () => {
			const { container } = render(element)

			const backWithSettings = container.firstChild
			expect(backWithSettings).toHaveClass(className)

			const settingsIcon = screen.getByTestId('settings-icon')
			expect(settingsIcon).toBeDefined()

			fireEvent.click(settingsIcon)
			expect(window.location.pathname).toBe('/settings')
		})
	})

	describe('Settings', () => {
		const className = 'top-settings'
		const element = (
			<BrowserRouter>
				<Settings />
			</BrowserRouter>
		)

		test('should be SETTINGS type', () => {
			const { container } = render(element)

			const settings = container.firstChild
			expect(settings).toHaveClass(className)
		})

		test('should display Settings icon', () => {
			const { container } = render(element)

			const settings = container.firstChild
			expect(settings).toHaveClass(className)

			const icon = screen.getByTestId('settings-icon')
			expect(icon).toBeDefined()
		})

		// eslint-disable-next-line max-len
		test('should execute navigate to settings page function when SettingsIcon is clicked', () => {
			const { container } = render(element)

			const settings = container.firstChild
			expect(settings).toHaveClass(className)

			const icon = screen.getByTestId('settings-icon')
			expect(icon).toBeDefined()

			fireEvent.click(icon)
			expect(window.location.pathname).toBe('/settings')
		})
	})
})
