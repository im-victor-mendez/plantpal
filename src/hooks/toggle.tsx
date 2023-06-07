import { useState } from 'react'

interface ToggleProps {
	iconTrue: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
	iconFalse: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

interface ToggleReturn {
	toggle: boolean
	setToggle: React.Dispatch<React.SetStateAction<boolean>>
	toggleState: () => void
	Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

/**
 * Toggle hook
 * @description Hook to use in toggle components, to control display of elements
 * @param iconTrue Icon to use when toggle state is true
 * @param iconFalse Icon to use when toggle state is false
 * @returns {object}
 * @example useToggle({ iconTrue: <ArrowUp/>, iconFalse: <ArrowDown/> })
 */
function useToggle({ iconTrue, iconFalse }: ToggleProps): ToggleReturn {
	const [toggle, setToggle] = useState(false)
	const Icon = toggle ? iconTrue : iconFalse

	function toggleState() {
		setToggle(!toggle)
	}

	return { toggle, setToggle, toggleState, Icon }
}

export default useToggle
