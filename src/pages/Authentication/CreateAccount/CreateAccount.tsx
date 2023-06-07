import './CreateAccount.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Input from '@components/Input/Input'
import Button from '@components/Button/Button'
import {
	createUserWithEmail,
	loginWithProvider,
} from '@store/actions/authActions'
import PlantPal, { Types as PlantPalTypes } from '@components/PlantPal/PlantPal'
import { ReactComponent as GoogleIcon } from '@assets/svg/google.svg'
import { NavLink } from 'react-router-dom'

/**
 * Create Account
 * @description Page to create accounts
 * @returns {React.JSX.Element}
 */
function CreateAccount(): React.JSX.Element {
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const dispatch = useDispatch()

	function createAccount() {
		dispatch(
			// eslint-disable-next-line max-len
			createUserWithEmail({ email, name, password }, () => console.log('Error'))
		)
	}

	function alternativeMethod() {
		dispatch(loginWithProvider())
	}

	return (
		<main id="create-account" className="page">
			<PlantPal type={PlantPalTypes.HORIZONTAL} />
			<section className="inputs">
				<Input placeholder="Name" setValue={setName} />
				<Input placeholder="Email" setValue={setEmail} />
				<Input placeholder="Password" setValue={setPassword} />
			</section>
			<section className="main-buttons">
				{/* eslint-disable-next-line max-len */}
				<Button display={'Create Account'} functionality={createAccount} />
			</section>
			<section className="alternative-methods">
				<div className="top">
					<NavLink
						className={'account'}
						to={'/login'}
						data-testid="already-have-account"
					>
						Already <span className="accent">have account</span>?
					</NavLink>
					<div className="methods">
						{/* eslint-disable-next-line max-len */}
						<GoogleIcon onClick={alternativeMethod} data-testid="google-icon" />
					</div>
				</div>
				<NavLink
					className={'forgot-password'}
					to={'/forgot-password'}
					data-testid="forgot-password"
				>
					Forgot password?
				</NavLink>
			</section>
		</main>
	)
}
export default CreateAccount
