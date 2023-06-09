/* eslint-disable max-len */
import './CreateAccount.scss'
import { useState } from 'react'
import Input from '@components/Input/Input'
import Button from '@components/Button/Button'
import {
	createUserWithEmail,
	loginWithProvider,
} from '@store/actions/authActions'
import PlantPal, { Types as PlantPalTypes } from '@components/PlantPal/PlantPal'
import { ReactComponent as GoogleIcon } from '@assets/svg/google.svg'
import { NavLink } from 'react-router-dom'
import { RootState, useAppDispatch } from '@store/store'
import { useSelector } from 'react-redux'
import Loading from '@components/Loading/Loading'

/**
 * Create Account
 * @description Page to create accounts
 * @returns {React.JSX.Element}
 */
function CreateAccount(): React.JSX.Element {
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const dispatch = useAppDispatch()
	const { loading } = useSelector((state: RootState) => state.auth)

	function createAccount() {
		dispatch(createUserWithEmail({ email, name, password }))
	}

	function alternativeMethod() {
		dispatch(loginWithProvider())
	}

	if (loading) <Loading />

	return (
		<main id="create-account" className="page">
			<PlantPal type={PlantPalTypes.HORIZONTAL} />
			<section className="inputs">
				<Input placeholder="Name" setValue={setName} />
				<Input placeholder="Email" setValue={setEmail} />
				<Input placeholder="Password" setValue={setPassword} />
			</section>
			<section className="main-buttons">
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
