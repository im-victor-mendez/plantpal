import useToggle from '../../hooks/toggle'
import './Input.scss'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
// eslint-disable-next-line max-len
import { ReactComponent as ArrowDown } from '@assets/svg/keyboard-arrow/keyboard-arrow-down.svg'
// eslint-disable-next-line max-len
import { ReactComponent as ArrowUp } from '@assets/svg/keyboard-arrow/keyboard-arrow-up.svg'

interface InputProps {
	placeholder: string
	setValue: Dispatch<SetStateAction<string>>
}

/**
 * Input
 * @description Returns custom input element
 * @param placeholder Placeholder to display
 * @param setValue Set state function to handle on change value
 * @returns {React.JSX.Element}
 * @example <Input placeholder={`Name`} setValue={setName} />
 */
function Input({ placeholder, setValue }: InputProps): React.JSX.Element {
	/**
	 * On change
	 * @description Handles change value in setValue parent prop
	 * @param event Element Changed
	 */
	function onChange(event: ChangeEvent<HTMLInputElement>): void {
		const value = event.target.value
		setValue(value)
	}

	return (
		<input
			type="text"
			placeholder={placeholder}
			className="input input-element"
			data-testid="input"
			onChange={onChange}
		/>
	)
}

interface ToggleProps {
	name: string
	values: Array<object>
	setValue: Dispatch<SetStateAction<any>>
}

/**
 * Input Toggle
 * @description Returns Toggle of array values
 * @param name Name of Input
 * @param values Array of objects to display values
 * @param setValue Set state function to handle value into parent state
 * @returns {React.JSX.Element}
 * @example <InputToggle
 * name={`Friends to gift`} values={friends} setValue={setFriends} />
 */
export function InputToggle({
	name,
	values,
	setValue,
}: ToggleProps): React.JSX.Element {
	const { toggle, Icon, toggleState } = useToggle({
		iconTrue: ArrowUp,
		iconFalse: ArrowDown,
	})

	const toggleActive = toggle ? 'active' : ''

	return (
		<div className={`input toggle ${toggleActive}`}>
			<div className="top">
				<p className="name">{name}</p>
				<Icon onClick={toggleState} />
			</div>
			{toggle && <div className="values"></div>}
		</div>
	)
}

export default Input
