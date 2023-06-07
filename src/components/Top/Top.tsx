import './Top.scss'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as BackIcon } from '../../assets/svg/arrow-back-ios.svg'
import { ReactComponent as SettingsIcon } from '../../assets/svg/settings.svg'
import { ReactNode } from 'react'

const className = 'top'

export enum TopTypes {
	DEFAULT = className,
	BACK = `${className} back`,
	BACK_WITH_SETTINGS = `${className} back-settings`,
	SETTINGS = `${className} top-settings`,
}

interface TopProps {
	children: ReactNode
	type: TopTypes
}

/**
 * Top
 * @description "Builder" of all variations of Top component
 * @param children Children elements
 * @param type Type of Top component from TopTypes
 * @returns {React.JSX.Element}
 * @example <Top children={<>Hello There</>} type={TopTypes.DEFAULT}/>
 */
function Top({
	children,
	type = TopTypes.DEFAULT,
}: TopProps): React.JSX.Element {
	return <section className={type}>{children}</section>
}

/**
 * Back
 * @description Back browser functionality
 */
function back() {
	window.history.back()
}

/**
 * Back
 * @description "Builder" of all variations of Back component
 * @param children Children elements
 * @param type Type of Top component from TopTypes
 * @returns {React.JSX.Element}
 * @example <Back children={<>Hello There</>} type={TopTypes.BACK}/>
 */
export function Back({
	children,
	type = TopTypes.BACK,
}: TopProps): React.JSX.Element {
	return (
		<Top type={type}>
			<BackIcon onClick={back} data-testid="back-icon" />
			{children}
		</Top>
	)
}

/**
 * Back with Settings
 * @description Variation of Back component with back and settings icon buttons
 * @returns {React.JSX.Element}
 */
export function BackWithSettings(): React.JSX.Element {
	const navigate = useNavigate()

	function settings() {
		navigate('/settings')
	}

	return (
		<Back type={TopTypes.BACK_WITH_SETTINGS}>
			<SettingsIcon
				className="settings"
				onClick={settings}
				data-testid="settings-icon"
			/>
		</Back>
	)
}

/**
 * Settings
 * @description Component with settings icon button
 * @returns {React.JSX.Element}
 */
export function Settings(): React.JSX.Element {
	const navigate = useNavigate()

	function settings() {
		navigate('/settings')
	}

	return (
		<Top type={TopTypes.SETTINGS}>
			<SettingsIcon
				className="settings"
				onClick={settings}
				data-testid="settings-icon"
			/>
		</Top>
	)
}

export default Top
