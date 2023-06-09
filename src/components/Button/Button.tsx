import './Button.scss'

interface ButtonProps {
	display: string
	functionality: () => void
}

/**
 * Button
 * @description Button component to use to execute functions.
 * @param display String to display
 * @param functionality Function to execute when button is clicked
 * @returns {React.JSX.Element}
 * @example <Button display={`Create Account`}
 * functionality={createAccount}/>
 */
function Button({ display, functionality }: ButtonProps): React.JSX.Element {
	/**
	 * On click
	 * @description Function to dispatch/execute custom function
	 */
	function onClick() {
		functionality()
	}

	return (
		<button className="button" onClick={onClick}>
			{display}
		</button>
	)
}

interface ButtonIconProps {
	functionality: () => void
	icon: React.ReactNode
	type: ButtonIconTypes
}

export enum ButtonIconTypes {
	CIRCLE = 'circle',
	CUBE = 'cube',
	SMALL_CIRCLE = 'circle small',
	SMALL_CUBE = 'cube small',
}

/**
 * Button Icon
 * @description Small button to use with icons instead of text
 * @param functionality On click function
 * @param icon Icon as ReactNode
 * @param type Type of icon button
 * @returns {React.JSX.Element}
 * @example <ButtonIcon
				icon={<AddIcon />}
				functionality={addGarden}
				type={ButtonIconTypes.CUBE}
			/>
 */
export function ButtonIcon({
	functionality,
	icon,
	type,
}: ButtonIconProps): React.JSX.Element {
	/**
	 * On click
	 * @description Function to dispatch/execute custom function
	 */
	function onClick() {
		functionality()
	}

	return (
		<button className={`button icon ${type}`} onClick={onClick}>
			{icon}
		</button>
	)
}

export default Button
