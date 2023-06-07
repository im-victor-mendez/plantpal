// eslint-disable-next-line max-len
import { ReactComponent as ArrowDown } from '../assets/svg/keyboard-arrow/keyboard-arrow-down.svg'
// eslint-disable-next-line max-len
import { ReactComponent as Up } from '../assets/svg/keyboard-arrow/keyboard-arrow-up.svg'

import { act, renderHook } from '@testing-library/react'
import useToggle from './toggle'

describe('Toggle Hook', () => {
	test('initial state should be false', () => {
		const { result } = renderHook(() =>
			useToggle({ iconTrue: Up, iconFalse: ArrowDown })
		)

		expect(result.current.toggle).toBe(false)
	})

	test('initial icon should be ArrowDown', () => {
		const { result } = renderHook(() =>
			useToggle({ iconTrue: Up, iconFalse: ArrowDown })
		)

		expect(result.current.Icon).toEqual(ArrowDown)
	})

	test('initial toggle state should be true when setToggle is called', () => {
		const { result } = renderHook(() =>
			useToggle({ iconTrue: Up, iconFalse: ArrowDown })
		)

		act(() => {
			result.current.setToggle(true)
		})

		expect(result.current.toggle).toBe(true)
	})

	test('toggle state should change when toggleState is called', () => {
		const { result } = renderHook(() =>
			useToggle({ iconTrue: Up, iconFalse: ArrowDown })
		)
		const initialState = result.current.toggle

		act(() => {
			result.current.toggleState()
		})

		expect(result.current.toggle).toBe(!initialState)
	})

	test('icon should be ArrowDown when toggle is false', () => {
		const { result } = renderHook(() =>
			useToggle({ iconTrue: Up, iconFalse: ArrowDown })
		)

		act(() => {
			result.current.setToggle(false)
		})

		expect(result.current.Icon).toEqual(ArrowDown)
	})

	test('icon should be Up when toggle is true', () => {
		const { result } = renderHook(() =>
			useToggle({ iconTrue: Up, iconFalse: ArrowDown })
		)

		act(() => {
			result.current.setToggle(true)
		})

		expect(result.current.Icon).toEqual(Up)
	})
})
