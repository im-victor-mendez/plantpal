import './Login.scss'
import { ReactComponent as GoogleIcon } from '@assets/svg/google.svg'
import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import PlantPal from '@components/PlantPal/PlantPal'
import { loginWithEmail, loginWithProvider } from '@store/actions/authActions'
import { RootState, useAppDispatch } from '@store/store'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

/**
 * Login
 * @description Login page
 * @returns {React.JSX.Element}
 */
function Login(): React.JSX.Element {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const { error } = useSelector((state: RootState) => state.auth)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	/**
	 * @description dispatches login with email function
	 */
	function login() {
		dispatch(loginWithEmail({ email, password }))
		console.log(error)
		if (error == '') navigate('/home')
	}

	/**
	 * @description dispatches login with provider function
	 */
	function loginWithGoogle() {
		dispatch(loginWithProvider())
	}

	return (
		<main className="page" id="login">
			<PlantPal />
			<section className="inputs">
				<Input placeholder={'Email'} setValue={setEmail} />
				<Input placeholder={'Password'} setValue={setPassword} />
			</section>
			<Button display={'Login'} functionality={login} />
			<section className="alternative">
				<div className="top">
					<NavLink to={'/create-account'}>
						Or <span className="accent">create account</span>
					</NavLink>
					<div className="methods">
						{/* eslint-disable-next-line max-len */}
						<GoogleIcon onClick={loginWithGoogle} data-testid="google-icon" />
					</div>
				</div>
				<NavLink to={'/forgot-password'}>Forgot password?</NavLink>
			</section>
		</main>
	)
}
export default Login
